const { user } = require("../db");
const genJwt = require("../genJwt");
const bcrypt = require('bcrypt');

async function login(req, res){
    const person = req.body;
    const find = await user.findOne({userName : person.userName})
    if(!find){
        res.status(404).json({
            msg : "User Not Found"
        })
        return;
    }

    const checkPass = await bcrypt.compare(person.password, find.password);

    if(!checkPass){
        res.status(411).json({
            msg : "Invalid Password"
        })
        return;
    }

    const token = genJwt(person);

    res.json({
        msg : "Logged-in",
        token : token
    })
}

module.exports = login;