// const express = require('express')
// const router = express.Router();

const mongoose = require('../db/connection');
const Penpals = require('../models/penpals');

const index = () => {
	const db = mongoose.connection;
	Penpals.find({})
		.then((penpals) => {
			console.log('All Penpals: ', penpals);
		})
		.catch((error) => console.log('Errors in index() ', error))
		.finally(() => db.close());
};
//index();

const create = (penpal) => {
	const db = mongoose.connection;
	Penpals.create(penpal)
		.then((penpalNew) => {
			console.log('Created New Penpal: ', penpalNew);
		})
		.catch((error) => console.log('Errors in create() ', error))
		.finally(() => db.close());
};
// create({
// 	to: 'Marie',
// 	from: 'Maria',
// 	message: 'Kindness pays!',
// 	sentOn: 'Oct 15, 2019',
// });

const show = (id) => {
	const db = mongoose.connection;
	Penpals.findById(id)
		.then((penpal) => {
			console.log('Found Penpal: ', penpal);
		})
		.catch((error) => console.log('Errors in show() ', error))
		.finally(() => db.close());
};
//show('5f891800ef5262752fb1e7e0');

/*
 By naming the method name as delete, we get the following error, maybe delete is a reserved word. 
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
	Penpals.findByIdAndDelete({ _id: id })
		.then((penpal) => {
			console.log('Deleted Penpal: ', penpal);
		})
		.catch((error) => console.log('Errors in delete() ', error))
		.finally(() => db.close());
};
//deleteById('5f891800ef5262752fb1e7e2');

const update = (id, penpal) => {
	const db = mongoose.connection;
	Penpals.findByIdAndUpdate({ _id: id }, penpal, {
		new: true,
		useFindAndModify: false,
	})
		.then((penpalUpdated) => {
			console.log('Updated, new Penpal value: ', penpalUpdated);
		})
		.catch((error) => console.log('Errors in delete() ', error))
		.finally(() => db.close());
};
update('5f891800ef5262752fb1e7e2', {
	to: 'Donna',
	from: 'Tom',
	message: 'Treat Yourself!',
	sentOn: 'Oct 15, 2019',
});
