const { note } = require("../db");
const { noteSchema } = require("../type");

async function addNotes(req,res){

    const userName = req.userName;

    const inputNotes = req.body;
    const safeNotes = noteSchema.safeParse(inputNotes);
    if(!safeNotes.success){
        res.status(411).json({
            msg : "Invalid input"
        })
        return;
    }

    try{
        await note.create({
            userName : userName,
            title : inputNotes.title,
            description : inputNotes.description
        })

        res.json({
            msg : "Note created"
        })
        
    }

    catch(err){
        console.log(err);
    }
}

module.exports = addNotes;