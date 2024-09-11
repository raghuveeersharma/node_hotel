const mongoose = require('mongoose');
// Define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels' // Replace 'mydatabase' with your database name
// Set up MongoDB connection
mongoose.connect (mongoURL, {
useNewUrlParser: true,
useUnifiedTopology: true
})

// Get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection.
const db = mongoose.connection;
// Define event listeners for database connection
db.on('connected', () => {
console.log('Connected to MongoDB server');
});
db.on('disconnected', () => {
console.log("disconnect to mongodb server");
});
db.on('error', (err) => {
    console.log("error to mongodb server",err);
})
module.exports = db;