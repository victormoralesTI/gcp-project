const express = require('express');
const cors = require('cors');
const environment = require('./utils/environment');
const { testConnectionDB } = require('./database/connection');

const app = express();

testConnectionDB();

app.use( cors() )
app.use( express.json() );

app.listen( environment.port, ()=>{
    console.log(`Server running on port ${environment.port}`);
});