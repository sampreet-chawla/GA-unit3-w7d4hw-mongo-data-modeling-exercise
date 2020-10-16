const mongoose = require('./connection');
const BestEverythingSchema = require('../models/best-everything');
const BestEverythingData = require('../data-sets/prompt3/best-everything.json');
const db = mongoose.connection;

BestEverythingSchema.deleteMany({})
	.then(() => {
		BestEverythingSchema.insertMany(BestEverythingData)
			.then((besteveything) =>
				console.log('Loaded Best-Everything Seed Data: ', besteveything)
			)
			.catch((error) =>
				console.log('Error loading Best-Everything seed data:', error)
			)
			.finally(() => db.close());
	})
	.then((error) =>
		console.log('Error deleting previous Best-Everything:', error)
	);
