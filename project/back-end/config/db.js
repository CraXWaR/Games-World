const mongoose = require('mongoose');
require('dotenv').config();

const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;

module.exports = async (app)  => {
    try {
        await mongoose.connect(DB_CONNECTION_STRING, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('Database connected!');
    
        mongoose.connection.on('error', (err) => {
            console.error(`DB Error:  ${err.message}`);
            console.error(err);
        });
    } catch (e) {
        console.error(`${e.message}: Error connection to database!`);
        process.exit(1)
    }
}