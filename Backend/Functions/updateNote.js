const { note } = require("../db");

async function updateNote(req,res){


    const userName = req.userName;

    const notes = req.body;

    const noteExist = await note.updateOne({userName : userName, title : notes.title}, {description : notes.description}) 

    if(noteExist.modifiedCount == 0){
        res.status(404).json({
            msg : "Please make the changes"
        })
        return;
    }

    res.json({msg : "Note Updated"});  
}

module.exports = updateNote;

