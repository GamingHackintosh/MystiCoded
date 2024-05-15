import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const Register = () => {
    return (
        <Container>
            <Box my={4} textAlign="center">
                <Typography variant="h1" component="h1" gutterBottom>
                    Регистрация
                </Typography>
                <Box mt={2}>
                    <Button variant="contained" color="primary" href="/auth/google" style={{ marginRight: '10px' }}>
                        Регистрация через Google
                    </Button>
                    <Button variant="contained" color="secondary" href="/auth/vkontakte">
                        Регистрация через ВКонтакте
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Register;
