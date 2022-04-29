const notes = require('express').Router();
//const app = require('.');
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
        res.error('uhh oh samuel')
    }
});

notes.get('/', (req,res)=>{
    if(req.body.note_id)
    writeToFile(req.body.note_id,'./db/db.json').then((notes) => res.json(JSON.parse(notes)));
})

module.exports = notes;