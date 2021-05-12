const express = require('express');
const app = express();
const path = require('path');

app.set('port', process.env.port || 3000) 

//declares express public directory path and tells the app to use that path to serve up static assets such as html
const publicDirPath = path.join(__dirname, '../public')


app.use(express.static(publicDirPath))

app.get('/', (req, res, next) =>{
    res.send('../public/index.html');
})

app.listen(app.get('port'), server =>{
    console.info(`Server listen on port ${app.get('port')}`);
})