var express = require('express');
var router = express.Router();
var request = require('request');

router.post('/authenticatUser', (req,res)=>{
    console.log('request for user auth', req.body);
});

module.exports = router;