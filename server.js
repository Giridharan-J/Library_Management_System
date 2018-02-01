
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path');
const { Client } = require('pg');
const connectionString = 'postgres://postgres:giri92@localhost:5432/librarydb';
const client = new Client({
  connectionString: connectionString,
})
client.connect();
var app = express();

//App configuration
app.configure(function(){
  app.set('port', process.env.PORT || 8080);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  //app.use(express.cookieParser('your secret here'));
  //app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

//routes
app.get('/', function(req, res) {
    console.log('Got request for /');
    res.sendfile('./public/index.html');
});

app.get('/getbookarray', function(req, res) {  
  console.log('Got request for /getbookarray');
  client.query('select * from BookDetails', function(error, result){
  console.log(result.rows);
  var data = JSON.stringify(result.rows);
  console.log("DATA: " + data);
    res.contentType('application/json');
    res.send(data);
  });
});

app.get('/addNewBook', function(req, res) {
    console.log('Got request for /addNewBook');
    var reqValues = JSON.parse(req.query.req);
    var bookName = reqValues.bookName;
    var author = reqValues.author;
    console.log('BookName: ' + bookName);
    console.log('Author: ' + author);
    
    var values = new Array();
    values.push(bookName);
    values.push(author);
    client.query('insert into BookDetails values($1, $2)', values, function(error, result){
    console.log(result.rows);
    var data = JSON.stringify(result.rows);
    console.log("DATA: " + data);
    res.send("New Book Successfully Added");
  });
    
});

//Start the http server
http.createServer(app).listen(app.get('port'), function(){
  console.log("Library Management System listening on port: " + app.get('port'));
});
