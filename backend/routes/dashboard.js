const express = require('express');
const { ensureAuthenticated } = require('../middlewares/auth');
const User = require('../models/User');
const Transaction = require('../models/Transaction');

const router = express.Router();

router.get('/', ensureAuthenticated, (req, res) => {
    res.json({ user: req.user });
});

router.post('/topup', ensureAuthenticated, async (req, res) => {
    const { amount } = req.body;
    if (amount <= 0) {
        return res.status(400).json({ message: 'Invalid amount' });
    }

    try {
        const transaction = new Transaction({
            userId: req.user._id,
            amount,
            status: 'pending'
        });
        await transaction.save();
        // Логика интеграции с платежной системой
        res.json({ message: 'Transaction created', transaction });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
