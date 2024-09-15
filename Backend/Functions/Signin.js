const { user } = require("../db");
const genJwt = require("../genJwt");
const { userSchema } = require("../type");
const bcrypt = require("bcrypt");

async function signin(req,res){
    const person = req.body;
    const safePerson = userSchema.safeParse(person);
    if(!safePerson.success){
        res.status(411).json({
            msg : "Invalid user"
        })
        return;
    }

    const hash = await bcrypt.hash(person.password, 10);

    try
    {
        await user.create({
        name : person.name,
        userName : person.userName,
        email : person.email,
        password : hash
    })

    const token = genJwt(person);

    res.json({
        msg : "User created.",
        token : token
    })}
    
    catch (err) {
        console.log(err); 

    }
   
}

module.exports =  signin;