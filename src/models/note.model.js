const mongoose = require('mongoose');

//now we will define the schema for our note db

const noteSchema = new mongoose.Schema({
    title : String ,
    description : String
})
/*
in the DB we can do
Creat
Read
Update
Delete

to do this we need to make also the model for the notes too
*/

const noteModel = mongoose.model('note',noteSchema); //this model will
//help us to interact with the DB using the schema

module.exports= noteModel ;