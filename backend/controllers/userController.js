const User = require("../models/User");

// Register a new user
const registerUser = async (req, res) => {
	const { name, email, password } = req.body;
	try {
		const user = await User.create({ name, email, password });
		res.status(201).json(user);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// Login user
const loginUser = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await User.findOne({ email });
		if (user && user.password === password) {
			res.status(200).json({ message: "Login successful", user });
		} else {
			res.status(400).json({ message: "Invalid credentials" });
		}
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

module.exports = { registerUser, loginUser };
