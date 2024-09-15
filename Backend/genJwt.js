const jwt = require('jsonwebtoken');
const jwtPass = '1234';

function genJwt(person){
    return jwt.sign({userName : person.userName}, jwtPass, {expiresIn:"1h"});
}

module.exports = genJwt;