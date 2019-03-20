const express = require("express");
const router = express.Router();

const burger = require('../models/burger')

router.get('/', (req,res) => {
    burger.all( (data) => {
        const handleObj = {
            burgers: data
        }
        res.render('index', handleObj)
    })
})

router.post('/api/burgers', (req,res) => {
    burger.create([])
})