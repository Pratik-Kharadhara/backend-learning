require('dotenv').config();
const app = require('./src/app.js');
//now we will call the conncectDB and run it here in the server so that it will connect the server to the DB
const db = require('./src/db/db')

const PORT = process.env.PORT || 3000
db()//it will run the command to connect

app.listen(PORT,()=>{
    console.log('the server is running on port 3000');
})