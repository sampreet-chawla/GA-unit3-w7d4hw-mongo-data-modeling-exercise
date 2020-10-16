const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const penpalsSchema = new Schema({}, { timestamps: true });

const Penpals = mongoose.model('Penpals', penpalsSchema);

module.exports = Penpals;
