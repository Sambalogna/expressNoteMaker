const notes = require('express').Router();
const { readFromFile, writeToFile, readAndAppend} = require('../assets/helpers/fsUtils')
const uuid = require('../assets/helpers/uuid')

notes.get('/', (req,res)=>{
    readFromFile('./db/db.json').then((notes) => res.json(JSON.parse(notes)));
    console.log('hey i wrote a note')
});

notes.post('/',(req,res)=>{
    console.log(req.body);
    const {title, text} = req.body;
    if (req.body){
        const newNote = {
            title,
            text,
            note_id: uuid(),
        }
        readAndAppend(newNote, './db/db.json');
        res.json('new note appended')
    
    }else{
        res.error(error,'error')
    }
});


module.exports = notes;