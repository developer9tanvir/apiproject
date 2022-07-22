import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import studentRoute from './routes/student.js';
import mongoDBConnect from './config/db.js';





// init express
const app = express();
dotenv.config();




// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended : false }));



// init env variabels
const PORT = process.env.SERVER_PORT || 5000;




// Routes
app.use('/api/student' , studentRoute );



// listen servsr
app.listen(PORT, () =>{
    mongoDBConnect();
    console.log(`Server running on port ${ PORT }`.bgGreen.black);
});

