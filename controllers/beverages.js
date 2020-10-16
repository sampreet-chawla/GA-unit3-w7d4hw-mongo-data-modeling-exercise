// const express = require('express')
// const router = express.Router();

const mongoose = require('../db/connection');
const Berverages = require('../models/beverages');

const index = () => {
	const db = mongoose.connection;
	Berverages.find({})
		.then((beverages) => {
			console.log('All Beverages: ', beverages);
		})
		.catch((error) => console.log('Errors in index() ', error))
		.finally(() => db.close());
};
index();

const create = (beverage) => {
	const db = mongoose.connection;
	Berverages.create(beverage)
		.then((beverageNew) => {
			console.log('Created New Beverage: ', beverageNew);
		})
		.catch((error) => console.log('Errors in create() ', error))
		.finally(() => db.close());
};
// create({
// 	'beverage-name': 'Hot-Chocolate',
// 	brand: 'Swiss-miss',
// 	'beverage-type': 'health-drink',
// 	'contains-sugar': true,
// 	carbonated: false,
// 	container: 'cup',
// });

const show = (id) => {
	const db = mongoose.connection;
	Berverages.findById(id)
		.then((beverage) => {
			console.log('Found Beverage: ', beverage);
		})
		.catch((error) => console.log('Errors in show() ', error))
		.finally(() => db.close());
};
//show('5f89718ab08d9309f0306601');

/*
 By naming the method name as delete, getting the following error, maybe delete is a reserved word. 
 Using the method name as deleteById instead */
/*

const delete = (id) => {
      ^^^^^^

SyntaxError: Unexpected token delete
    at Module._compile (internal/modules/cjs/loader.js:723:23)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:623:3)
*/
const deleteById = (id) => {
	const db = mongoose.connection;
	Berverages.findByIdAndDelete({ _id: id })
		.then((beverage) => {
			console.log('Deleted Beverage: ', beverage);
		})
		.catch((error) => console.log('Errors in delete() ', error))
		.finally(() => db.close());
};
//deleteById('5f8977b7200d850f489648ea');

const update = (id, beverage) => {
	const db = mongoose.connection;
	Berverages.findByIdAndUpdate({ _id: id }, beverage, {
		new: true,
		useFindAndModify: false,
	})
		.then((beverageNew) => {
			console.log('Updated, new Beverage value: ', beverageNew);
		})
		.catch((error) => console.log('Errors in update() ', error))
		.finally(() => db.close());
};
// update('5f8977b7200d850f489648ea', {
// 	'beverage-name': 'Hot-Chocolate',
// 	brand: 'Swiss-miss',
// 	'beverage-type': 'health-drink',
// 	'contains-sugar': false,
// 	carbonated: false,
// 	container: 'cup',
// });
