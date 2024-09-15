const jwt = require('jsonwebtoken');
const jwtPass = '1234';

function authentication(req,res,next){

    const token = req.headers.authorization;
    if(!token){
        res.status(401).json({
            msg : "Please Log-in"
        })
        return;
    }

    try{
        const decode = jwt.verify(token, jwtPass);
        req.userName = decode.userName;
        next();
    }
    catch(error){
        res.status(401).json({msg : "Invalid Token"}); 
        return;
    }

}

module.exports = authentication;