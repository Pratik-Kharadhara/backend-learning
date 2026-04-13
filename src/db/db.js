//here we will connect our server to the db from the cluster
const mongoose = require('mongoose');

async function connectDB(){
    //this line will connect our server to the string cluster and then it will
    //try to find firstDB which we didn't make , now it will make firstDB and connect to it
    await mongoose.connect('mongodb+srv://user-0:yuYwJry7OAkMeb1T@cluster0.nct8mh1.mongodb.net/firstDB')
    console.log('the DB is connected'); 
}

module.exports= connectDB ;