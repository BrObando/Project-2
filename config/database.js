const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

//As you know, the code in a Node module doesn’t execute until the module is required, therefore, 
//to connect to the database, we’ll require database.js in server.js:

// shortcut to mongoose.connection object
const db =mongoose.connection;

db.on('connected', function (){
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`); // need ``
});