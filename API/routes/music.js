const express=require('express')
const route=express.Router()
const music_controller = require('../controllers/music')

const {validate, ValidationError} = require('express-json-validator')
const musicStructure = require('../models/music').musicStructure


route.post('/create', validate(musicStructure), music_controller.create)
route.get('/all', music_controller.all)
route.get('/all/:keyword', music_controller.keywordsearch)
route.put('/update', validate(musicStructure), music_controller.create)

module.exports = route


route.use((err, req, res, next)=> {
    if(err){
        if(err instanceof ValidationError) {
            res.status(422).send({"status": 422, "description" : err.message})   
        } else {
            console.log("Error")
        }
    } else {
        next()
    }
})