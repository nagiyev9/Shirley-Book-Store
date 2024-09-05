// Paths And Imports 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const RefreshToken = require('../models/refresh-token');
const userService = require('../services/user-service');
const { slugField } = require('../utils/slugField');

// Register 
exports.register = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        const checkExist = await userService.getUserByEmail(email);

        if (checkExist) {
            return res.status(403).json({ message: 'This Email Registered Before' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });

        const userSlug = newUser.firstName + ' ' + newUser.lastName + ' ' + newUser._id;
        newUser.slug = slugField(userSlug);

        await newUser.save();
        return res.status(200).json({ message: 'User Created Successfully. You Can Login', status: 200 });

    } catch (error) {
        res.status(500).json(error);
    }
};

// Login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const checkExist = await userService.getUserByEmail(email);

        if (!checkExist) return res.status(404).json('User Not Found');

        const validPassword = await bcrypt.compare(password, checkExist.password);

        if (!validPassword) return res.status(403).json('Invalid Password');

        const accessToken = jwt.sign({ email: checkExist.email }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
        const refreshToken = jwt.sign({ email: checkExist.email }, process.env.JWT_REFRESH_SECRET_KEY, { expiresIn: '30d' });

        await new RefreshToken({ token: refreshToken }).save();

        return res.json({
            status: 200,
            message: "Login successful",
            user: checkExist,
            accessToken,    
            refreshToken
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

// Refresh Token
exports.refreshToken = async (req, res) => {
    try {
        const { refreshToken } = req.body;

        if (!refreshToken) return res.status(403).json({ message: "No Refresh Token Provided!" });

        const result = await userService.refreshAccessToken(refreshToken);

        if (result.status === 200) {
            res.status(200).json({
                message: "Access token refreshed successfully",
                accessToken: result.accessToken
            });
        } else {
            res.status(result.status).json({ message: result.message });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};