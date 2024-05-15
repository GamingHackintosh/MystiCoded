import React from 'react';

const Login = () => {
    return (
        <div>
            <h1>Вход</h1>
            <a href="/auth/google">Войти через Google</a>
            <a href="/auth/vkontakte">Войти через ВКонтакте</a>
        </div>
    );
};

export default Login;
