const express = require('express')
const validator = require('validator')

const Email = require('../models/email')

const router = new express.Router()


router.post('/emails', async(req, res) => {
    try {
        const email = new Email(req.body)
        await email.save()
        if(!validator.isEmail(req.body.email)){
            throw new Error();
        }
        res.status(201).send(email)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/emails', async(req, res) => {
    try {
        if(req.query.user !== 'HKST11'){
            throw new Error()
        }
        const emails = await Email.find({})
        const filteredEmails = emails.filter((email)=>{
            if(validator.isEmail(email.email)){
                return true;
            }
            
        })
        res.send(filteredEmails)
    } catch (e) {
        res.status(401).send()
    }
})

module.exports = router;