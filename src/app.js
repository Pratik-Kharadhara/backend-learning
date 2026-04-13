//src-> app.js to initiliaze the server
const express = require('express')

const app = express();

//creating a notes app
/* const note ={
    "title":'first note'
    "description":'taking notes '
}
*/
//to store all the notes we need a array

//express can't read any file that has been sent through body
//thats why when we are sending data from post man here it says 'undefined'
// thats why we need to use a middle ware

app.use(express.json()) //automatically parses incoming JSON request bodies and attaches the resulting JavaScript object to req.body

const notes = [] //empty array to store the notes

//api for taking the notes, so we are posting it
app.post('/notes',(req,res)=>{ //'/notes' is the endpoint to send the data
    console.log(req.body); //we are sending the data to req , req.body is to access it 
    notes.push(req.body);//we are adding the req.body to the notes

res.status(201).json({ //status 201 is for succesfully getting the data
        message:"note created succesfully"
})

})
//delete the note
app.delete('/notes/:index',(req,res)=>{
    const index=req.params.index //this will give us the index that we have sent to delete
        delete notes[index]; //this will delete the particular note
        res.status(200).json({
            message:'notes deleted succesfully'
        })
    })
//here we are getting the what we sent so using the get method
app.get('/notes',(req,res)=>{
        res.status(200).json({
            message :"the note is succesfully retrived",
            notes: notes 
        })
})
//now patch method 
app.patch('/notes/:index',(req,res)=>{
    const index = req.params.index;
    const description = req.body.description;
  //  const title = req.body.title;

    notes[index].description = description;
    notes[index].title = title;

    res.status(200).json({
        message : "note updated succesfully"
    })

})
//export it to the server.js
module.exports= app;

