import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Container>
            <Box my={4} textAlign="center">
                <Typography variant="h1" component="h1" gutterBottom>
                    Добро пожаловать на сайт "Матрица Судьбы"
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Здесь вы можете рассчитать свою судьбу по дате рождения.
                </Typography>
                <Box mt={2}>
                    <Button variant="contained" color="primary" component={Link} to="/register" style={{ marginRight: '10px' }}>
                        Регистрация
                    </Button>
                    <Button variant="contained" color="secondary" component={Link} to="/login">
                        Вход
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Home;
