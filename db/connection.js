const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/penpals_db';
const config = {
	useUnifiedTopology: true,
	useNewUrlParser: true,
};

mongoose.connect(mongoURI, config);

const db = mongoose.connection;
db.on('error', (error) => console.log(`Error connecting with ${mongoURI}`));
db.on('connected', () => console.log(`Connected with ${mongoURI}`));
db.on('disconnected', () => console.log(`DB disconnected`));

db.close();

module.exports = mongoose;
