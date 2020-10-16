const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const penpalsSchema = new Schema(
	{
		to: { type: String, required: true },
		from: { type: String, required: true },
		message: { type: String, required: true },
		sentOn: { type: Date, default: Date.now() },
	},
	{ timestamps: true }
);

const Penpals = mongoose.model('Penpals', penpalsSchema);

module.exports = Penpals;
