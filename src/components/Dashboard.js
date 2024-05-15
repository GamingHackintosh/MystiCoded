import React, { useEffect, useState } from 'react';
import { Container, Typography, Box } from '@mui/material';

const Dashboard = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Пример данных пользователя, замените на фактические данные из бэкенда
        setUser({
            name: "Имя Пользователя",
            email: "email@example.com",
            balance: 1000
        });
    }, []);

    return (
        <Container>
            <Box my={4}>
                <Typography variant="h1" component="h1" gutterBottom>
                    Личный кабинет
                </Typography>
                {user ? (
                    <Box>
                        <Typography variant="body1" gutterBottom>
                            Имя: {user.name}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Email: {user.email}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Баланс: {user.balance} руб.
                        </Typography>
                    </Box>
                ) : (
                    <Typography variant="body1">Загрузка...</Typography>
                )}
            </Box>
        </Container>
    );
};

export default Dashboard;
