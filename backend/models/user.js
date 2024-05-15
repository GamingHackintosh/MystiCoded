const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    googleId: { type: String, unique: true, sparse: true },
    vkId: { type: String, unique: true, sparse: true },
    email: { type: String, unique: true, sparse: true },
    name: { type: String, required: true },
    balance: { type: Number, default: 0 }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
