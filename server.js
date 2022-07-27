var express = require('express');
var app = express();
var http = require('http');
var bodyparser = require('body-parser');
var path = require('path');

app.use(bodyparser.json({
    limit: '100mb',
    extended: true
}));
app.use(bodyparser.urlencoded({
    limit: '100mb',
    extended: true
}));

app.use(bodyparser.raw({
    limit: '100mb',
    extended: true
}));

// global.CONFIGURATIONS = {
    
//     dbHost: process.env.DB_HOST,
//     dbPort: process.env.DB_PORT,
//     db: process.env.DB_NAME,
//     username: process.env.DB_USER,
//     password: process.env.DB_PASS,
     
//   }
  
// app.get('/', function (req, res) {
   
    // var sql = require("mssql");

    // // config for your database
    // var config = {
    //    user: 'sa',
    //     password: '',
    //     server: 'localhost\\SQLEXPRESS', 
    //     port: 1433,
    //     database: 'nbc_idea' ,
    //    // driver: 'msnodesql',
    //     options: {
    //         trustedconnection:true
    //     }
    // };
    
    

    var user = require('./routes/user');
    var idea = require('./routes/ideas')
    app.use('/user',user);
    app.use('/ideas',idea);

    app.get('/user',(req,res)=>res.json({
        application:'Rebio collection'
    }));
    app.get('/ideas',(req,res)=>res.json({
        application:'Rebio collection'
    }));

    app.use(function (req, res, next) {

        // Website you wish to allow to connect
        // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.setHeader('Access-Control-Allow-Origin', '*');
      
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
      
        // Pass to next layer of middleware
        next();
      });

    app.use(express.static(path.join(__dirname, 'client/dist/demo1')));
    // connect to your database
    // sql.connect(config, function (err) {
    
    //     if (err) console.log("error on conn",err);

    //     // create Request object
    //     var request = new sql.Request();
           
    //     // query to the database and get the records
    //     request.query('select * from user', function (err, recordset) {
            
    //         if (err) console.log(err)

    //         // send records as a response
    //         res.send(recordset);
            
    //     });
    // });
// });

app.get('*', (req, res) => {
    
    res.sendFile(path.resolve(__dirname, 'client/dist/demo1/index.html'));
  
  });

var server = app.listen(3200, function () {
    console.log('Server is running..');
    
});
