const notes = require('express').Router();
const { readFromFile, readAndAppend} = require('../assets/helpers/fsUtils')
const uuid = require('../assets/helpers/uuid')

notes.get('/', (req,res)=>{
    readFromFile('./db/db.json').then((notes) => res.json(JSON.parse(notes)));
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
        res.json('note was added');
    
    }else{
        res.error('uhh oh samuel')
    }
});
app.use(notes.get('/:', (req,res)=>{
    const {note_id,} = res.body
}))

module.exports = notes;