// const express = require('express')
// const router = express.Router();

const mongoose = require('../db/connection');
const BestEverything = require('../models/best-everything');

const index = () => {
	const db = mongoose.connection;
	BestEverything.find({})
		.then((bestEverythingList) => {
			console.log('All Best-Everything: ', bestEverythingList);
		})
		.catch((error) => console.log('Errors in index() ', error))
		.finally(() => db.close());
};
index();

const create = (bestEverything) => {
	const db = mongoose.connection;
	BestEverything.create(bestEverything)
		.then((bestEverthingNew) => {
			console.log('Created New BestEverything: ', bestEverthingNew);
		})
		.catch((error) => console.log('Errors in create() ', error))
		.finally(() => db.close());
};
// create({
// 	year: 2020,
// 	sports: {
// 		superBowl: 'Denver Broncos',
// 		worldSeries: 'Chicago Cubs',
// 		stanleyCup: 'Pittsburgh Penguins',
// 		NBAchampionship: 'Cleveland Cavaliers',
// 	},
// 	music: {
// 		bestSong: {
// 			title: 'Hello',
// 			artist: 'Adele',
// 		},
// 	},
// 	movies: {
// 		bestMovie: 'Spotlight',
// 		bestActress: 'Brie Larson',
// 		bestActor: 'Leonardo DiCaptrio',
// 	},
// });

const show = (id) => {
	const db = mongoose.connection;
	BestEverything.findById(id)
		.then((bestEverything) => {
			console.log('Found BestEverything: ', bestEverything);
		})
		.catch((error) => console.log('Errors in show() ', error))
		.finally(() => db.close());
};
//show('5f8918154ac248754f5180c5');

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
	BestEverything.findByIdAndDelete({ _id: id })
		.then((bestEverything) => {
			console.log('Deleted BestEverything: ', bestEverything);
		})
		.catch((error) => console.log('Errors in delete() ', error))
		.finally(() => db.close());
};
//deleteById('5f8918154ac248754f5180c5');

const update = (id, bestEverything) => {
	const db = mongoose.connection;
	BestEverything.findByIdAndUpdate({ _id: id }, bestEverything, {
		new: true,
		useFindAndModify: false,
	})
		.then((bestEverythingUpdated) => {
			console.log('Updated, new BestEverything value: ', bestEverythingUpdated);
		})
		.catch((error) => console.log('Errors in update() ', error))
		.finally(() => db.close());
};
// update('5f8918154ac248754f5180c5', {
// 	year: 2021,
// 	sports: {
// 		superBowl: 'Denver Broncos',
// 		worldSeries: 'Chicago Cubs',
// 		stanleyCup: 'Pittsburgh Penguins',
// 		NBAchampionship: 'Cleveland Cavaliers',
// 	},
// 	music: {
// 		bestSong: {
// 			title: 'Hello',
// 			artist: 'Adele',
// 		},
// 	},
// 	movies: {
// 		bestMovie: 'Spotlight',
// 		bestActress: 'Brie Larson',
// 		bestActor: 'Leonardo DiCaptrio',
// 	},
// });
