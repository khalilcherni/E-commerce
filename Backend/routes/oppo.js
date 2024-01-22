const express = require('express');
const router = express.Router();

const { getAllphones, getOneUser, addUser, update, fassakh } = require('../cotrollers/oppo');





router.get('/get', getAllphones);
router.get('/get/:name',getOneUser)
router.post('/add',addUser)
router.put('/put/:id',update)
router.delete('/delete/:id',fassakh)

module.exports = router;