const mongoose = require('./connection');
const PenpalsSchema = require('../models/penpals');
const penpalsData = require('../data-sets/prompt2/penpals.json');
const db = mongoose.connection;

PenpalsSchema.deleteMany({})
	.then(() => {
		PenpalsSchema.insertMany(penpalsData)
			.then((penpals) => console.log('Loaded Penpals Seed Data: ', penpals))
			.catch((error) => console.log('Error loading penpals seed data:', error))
			.finally(() => db.close());
	})
	.then((error) => console.log('Error deleting previous penpals:', error));
