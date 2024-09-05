const Location = require("../models/Location");

// Create a new location
const createLocation = async (req, res) => {
	const { name, description, longitude, latitude } = req.body;
	try {
		const location = await Location.create({
			name,
			description,
			longitude,
			latitude,
		});
		res.status(201).json(location);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// Get all locations
const getLocations = async (req, res) => {
	try {
		const locations = await Location.find({});
		res.status(200).json(locations);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

module.exports = { createLocation, getLocations };
