const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const registerRoute = require('./Routes/route');
const loginRoute = require('./Routes/route'); 
const postroute = require('./Routes/PostData')
const me = require('./Routes/userData');
require('dotenv').config();


//connecting mongo db
require("./db/conn");
//mongo db connection done

//starting server
app.use(cors());
app.use(express.json());
const port = 8008;
app.use('/api', registerRoute); // Prefix routes with /api
app.use('/api', loginRoute);    // Prefix routes with /api
app.use('/api', me); 
app.use('/api', postroute);   
app.listen(port, ()=> {
    console.log(`server is start port number ${port}`);
});
//server started