const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const bestEverythingSchema = new Schema({
    "year": Number,
    "sports": {
        "superBowl": String,
        "worldSeries": String,
        "stanleyCup": String,
        "NBAchampionship": String,
    },
    "music": {
        "bestSong": {
            "title": String,
            "artist": String,
        }
    },
    "movies": {
        "bestMovie": String,
        "bestActress": String,
        "bestActor": String
    }
}, { timestamps: true });

const BestEverything = mongoose.model('BestEverything', bestEverythingSchema);

module.exports = BestEverything;
