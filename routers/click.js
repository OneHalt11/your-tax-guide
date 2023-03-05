const express = require('express')

const Click = require('../models/click')

const router = new express.Router()


router.post('/clicks', async(req, res) => {
    try {
        const click = new Click(req.body)
        await click.save()
        res.status(201).send(click)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/clicks', async(req, res) => {
    try {
        if(req.query.user !== 'HKST11'){
            throw new Error()
        }
        const clicks = await Click.find({})
        res.send(clicks)
    } catch (e) {
        res.status(401).send()
    }
})

module.exports = router;