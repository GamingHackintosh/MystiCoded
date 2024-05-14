const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

mongoose.connect('mongodb://localhost/matrix-of-destiny', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/user', userRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
