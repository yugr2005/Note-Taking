const express = require('express');  
const signin = require('../Functions/Signin');
const login = require('../Functions/Login');
const addNotes = require('../Functions/addNote');
const authentication = require('../authentication');
const getNotes = require('../Functions/getNotes');
const updateNote = require('../Functions/updateNote');
const router = express.Router();   

router.post('/signin', signin);
router.post('/login', login);
router.post('/addNote', authentication, addNotes)
router.get('/getNotes', authentication, getNotes)
router.put('/updateNote', authentication, updateNote)


module.exports = router;