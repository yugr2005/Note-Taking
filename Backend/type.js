const zod = require("zod");

const userSchema = zod.object({
    name : zod.string(),
    userName : zod.string(),
    email : zod.string().email(),
    password : zod.string().min(8)
})

const noteSchema = zod.object({
    title : zod.string(),
    description : zod.string()
})

module.exports = {
    userSchema : userSchema,
    noteSchema : noteSchema
}