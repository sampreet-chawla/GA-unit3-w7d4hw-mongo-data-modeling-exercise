const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const beveragesSchema = new Schema(
	{
		'beverage-name': { type: String, required: true },
		brand: { type: String, required: true },
		'beverage-type': { type: String, required: true },
		'contains-sugar': { type: Boolean, default: false },
		carbonated: { type: Boolean, default: false },
		container: { type: String, required: true },
	},
	{ timestamps: true }
);

const Beverages = mongoose.model('beverages', beveragesSchema);

module.exports = Beverages;
