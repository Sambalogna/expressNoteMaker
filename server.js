// express dependencies
const express = require('express');
const path = require('path');
const api = require('./public/routes/index')
//Start express
const app = express();
const PORT = 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', api);
app.use(express.static('public'));


//HTML ROUTES
//sends notes.html to when url routes to /notes
app.get('/notes', (req, res)=> res.sendFile(path.join(__dirname, './public/notes.html')))
//sets all url routes not defined to route to index
app.get('*',(req, res)=> res.sendFile(path.join(__dirname, './public/index.html')));


//starts the server
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));