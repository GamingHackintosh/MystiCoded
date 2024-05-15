import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('your_publishable_key_here');

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [amount, setAmount] = useState(0);
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        axios.get('/dashboard')
            .then(response => {
                setUser(response.data.user);
            })
            .catch(error => {
                console.error('There was an error fetching the user!', error);
            });
    }, []);

    const handleTopUp = async () => {
        const response = await axios.post('/payments/create-payment-intent', { amount });
        setClientSecret(response.data.clientSecret);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            }
        });

        if (result.error) {
            console.error(result.error.message);
        } else {
            if (result.paymentIntent.status === 'succeeded') {
                alert('Payment succeeded!');
            }
        }
    };

    return (
        <div>
            <h1>Личный кабинет</h1>
            {user ? (
                <div>
                    <p>Имя: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Баланс: {user.balance} руб.</p>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Сумма пополнения"
                    />
                    <button onClick={handleTopUp}>Пополнить баланс</button>

                    {clientSecret && (
                        <form onSubmit={handleSubmit}>
                            <CardElement />
                            <button type="submit" disabled={!stripe}>
                                Оплатить
                            </button>
                        </form>
                    )}
                </div>
            ) : (
                <p>Загрузка...</p>
            )}
        </div>
    );
};

const WrappedDashboard = () => (
    <Elements stripe={stripePromise}>
        <Dashboard />
    </Elements>
);

export default WrappedDashboard;
