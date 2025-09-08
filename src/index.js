const express =require('express');
require('dotenv').config();

const {PORT} = require('./config/serverConfig');

const setupAndStartServer = async()=>{

    // create the express object
    const app = express();
    const PORT = 3001;

    // create the server
    app.listen(PORT,()=>{
        console.log(`Server started at port ${PORT}`);
    })
}

setupAndStartServer();