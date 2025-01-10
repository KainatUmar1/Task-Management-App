const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === 'admin123') {
        const token = jwt.sign({ username }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
        return res.json({ token });
    } else {
        return res.status(401).json({ message: 'Invalid username or password' });
    }
});

module.exports = router;
