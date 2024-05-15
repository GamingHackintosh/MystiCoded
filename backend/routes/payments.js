const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { ensureAuthenticated } = require('../middlewares/auth');
const Transaction = require('../models/Transaction');
const User = require('../models/User');

const router = express.Router();

router.post('/create-payment-intent', ensureAuthenticated, async (req, res) => {
    const { amount } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100, // сумма в центах
            currency: 'usd',
            metadata: { userId: req.user._id.toString() },
        });

        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
    const sig = req.headers['stripe-signature'];

    let event;
    try {
        event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === 'payment_intent.succeeded') {
        const paymentIntent = event.data.object;
        const userId = paymentIntent.metadata.userId;

        try {
            const user = await User.findById(userId);
            user.balance += paymentIntent.amount_received / 100; // обновление баланса
            await user.save();

            const transaction = new Transaction({
                userId,
                amount: paymentIntent.amount_received / 100,
                status: 'completed',
            });
            await transaction.save();
        } catch (error) {
            console.error('Error updating user balance:', error);
        }
    }

    res.json({ received: true });
});

module.exports = router;
