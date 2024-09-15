const { note } = require("../db");

async function getNotes(req,res){

    const userName = req.userName;

    const notes = await note.find({userName : userName});

    res.json({
        notes : notes
    })

}

module.exports = getNotes;