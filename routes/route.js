const express = require('express');
const contacts = require('../models/contacts');
const router = express.Router();


const Contact = require('../models/contacts')


router.get('/contacts', (req, res, next) => {
    Contact.find(function(err, contacts){
        res.json(contacts);
    })

    // res.send('Retriving the contacts');
});


router.post('/contact',(req,res, next) =>{
    let NewContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });
    NewContact.save((err, contact)=>{
        if(err)
        {
            res.json({msg: 'Failed to Add the Contact'});
        }
        else{
            res.json({msg: 'Contact Added Successfully'});
        }
    })

});


router.delete('/contact/:id',(req, res, next) => {
    Contact.remove({_id: req.params.id}, function(err, result){
        if(err)
        {
            res.json(err);
        }
        else {
            res.json(result);

        }
    });

});

module.exports = router;