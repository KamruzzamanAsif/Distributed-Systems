const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/User');

const addUser = async (req, res, next) => {
    const { name, email, password } = req.body;

    if (!name || name.trim() === '' || !email || email.trim() === '' || !password || password.length < 4) {
        return res.status(422).json({ message: 'Invalid data' });
    }

    try {
        // Check if the user already exists in the database
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }

        // Hash the password using bcrypt
        console.log("hi")
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of salt rounds
        console.log("hi2")
        // Create a new User instance with the hashed password
        const newUser = new User({
            name,
            email,
            password: hashedPassword, // Store the hashed password in the database
        });

        // Save the user to the database
        const user = await newUser.save();

        // Return the user information (you may choose to omit the password from the response)
        return res.status(201).json({ user: { name: user.name, email: user.email } });
    } catch (err) {
        return next(err);
    }
};



const signinUser = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || email.trim() === '' || !password) {
        return res.status(422).json({ message: 'Invalid data' });
    }

    try {
        // Check if the user exists in the database
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare the provided password with the stored hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // If the password is valid, create a JWT token for authentication
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            'my-secret-key', 
            { expiresIn: '1h' } // Token will expire in 1 hour
        );
        // Return the token and any additional information about the user you may want to include
        return res.status(200).json({ message: 'Signin successful', token, user: { name: user.name, email: user.email } });
    } catch (err) {
        return next(err);
    }
};


exports.addUser = addUser;
exports.signinUser = signinUser;