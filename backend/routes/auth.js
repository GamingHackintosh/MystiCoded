const express = require('express');
const passport = require('passport');
const User = require('../models/User');

const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/dashboard');
});

router.get('/vkontakte', passport.authenticate('vkontakte'));

router.get('/vkontakte/callback', passport.authenticate('vkontakte', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/dashboard');
});

module.exports = router;
