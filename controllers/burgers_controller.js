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
burger.create(['burger_name'/*, devoured(don't think i need because default is false*/], [req.body.burger_name], result => {
    res.json({ id: result.insertId})
})
})

router.put('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`
    burger.update(
        {
            devoured: true
        },
        condition,
        (result => {
            if(result.changedRows === 0) {
                return res.status(404).end()
            }
            res.status(200).end()
        })
    )
})

module.exports = router