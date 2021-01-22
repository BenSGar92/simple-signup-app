const express = require('express');
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')

//this is a signup application so all we are expecting is a post request - only sending post request to mongoDB
router.post('/signup', (request, response) => {
    const signedUpUser = new signUpTemplateCopy({
        fullName:request.body.fullName,
        username:request.body.username,
        email:request.body.email,
        password:request.body.password
    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

module.exports = router