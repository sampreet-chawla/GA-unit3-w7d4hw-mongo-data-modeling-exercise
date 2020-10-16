const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const bestEverythingSchema = new Schema({}, { timestamps: true });

const BestEverything = mongoose.model('BestEverything', bestEverythingSchema);

module.exports = BestEverything;
