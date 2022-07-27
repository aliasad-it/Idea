var express = require('express');
var router = express.Router();
var request = require('request');

router.post('/getIdeasList', (req,res)=>{
    console.log('request for idea', req.body);

var idealist=[{
        subject:"Idea portal",
        description:"Should have a idea portal in which user can share there thoughts aand new ideas related to the problems they are facing",
        presentedBy:"Ali Asad",
        date:"8 July 2022",
        status:"Under Review",
        department:"IT"
    },
    {
        subject:"Idea portal",
        description:"Should have a idea portal in which user can share there thoughts aand new ideas related to the problems they are facing",
        presentedBy:"Ali Asad",
        date:"8 July 2022",
        status:"Under Review",
        department:"IT"
    }
]
res.send({status:true, msg:"Ideas fetched", data:idealist });
});

router.post('saveIdea',(req,res)=>{
    console.log(req.body);

})

module.exports = router;