const express = require('express');
const router = express.Router();

const { getAllphones, getOneUser, addUser, update, fassakh } = require('../cotrollers/Iphones');





router.get('/getAll', getAllphones);
router.get('/:name',getOneUser)
router.post('/add',addUser)
router.put('/put/:id',update)
router.delete('/delete/:id',fassakh)

module.exports = router;