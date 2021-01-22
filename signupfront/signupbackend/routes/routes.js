const express = require('express');
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')
const bcrypt = require('bcrypt')

//this is a signup application so all we are expecting is a post request - only sending post request to mongoDB
router.post('/signup', async(request, response) => {

    //first line for bcrypt is to generate a salt for the password
    const saltPassword = await bcrypt.genSalt(10)
    //second line is to salt the password that has been hashed and then pass the variable down below
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)

    const signedUpUser = new signUpTemplateCopy({
        fullName:request.body.fullName,
        username:request.body.username,
        email:request.body.email,
        password:securePassword
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