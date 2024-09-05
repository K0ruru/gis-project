const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
		},
		longitude: {
			type: Number,
			required: true,
		},
		latitude: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Location", locationSchema);
