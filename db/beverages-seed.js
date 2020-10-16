const mongoose = require('./connection');
const BeveragesSchema = require('../models/beverages');
const beveragesData = require('../data-sets/prompt1/beverage-data.json');
const db = mongoose.connection;

BeveragesSchema.deleteMany({})
	.then(() => {
		BeveragesSchema.insertMany(beveragesData)
			.then((beverages) =>
				console.log('Loaded Beverages Seed Data: ', beverages)
			)
			.catch((error) =>
				console.log('Error loading beverages seed data:', error)
			)
			.finally(() => db.close());
	})
	.then((error) => console.log('Error deleting previous beverages:', error));
