// use the express middleware
var express = require('express')
    , pg = require('pg').native
    , connectionString = process.env.DATABASE_URL
    , start = new Date()
    , port = process.env.PORT
    , client;

// make express handle JSON and other requests
var bodyParser = require('body-parser');

// use cross origin resource sharing
var cors = require('cors');

var app=express();

// make sure we can parse JSON
app.use(bodyParser.urlencoded());		// needed to parse the AJAX requests from browsers. 
app.use(bodyParser.json());				//parse curl requests. 

// make sure we use CORS to avoid cross domain problems
app.use(cors());

// serve up static files from this directory.. such as jquery libraries.. images, etc. 
app.use(express.static(__dirname));

/* POST /memory/store - API interface
 * To use: it
 * pass a json object representing the memory to be stored in the body. Use a post request. 
 * returns the newly created memory in the database. 
 * CURL tester: curl -H "Content-Type: application/json" -X POST -d '{"title":"Test Title","text":"Fun time at park.(curl test)","userid":"1", "image":"shortURL1.jpg", "emotion":"happy", "tagid":"1"}' http://team23-project.herokuapp.com/memory/store 
 */
app.post('/memory/store', function(req, res) {
	//TODO check if user is authenticated for this request.
	
	console.log("body contents: " + JSON.stringify(req.body)); //debug
	// Grab elements from body JSON object. 
	title = req.body.title;
    text = req.body.text;
    userid = req.body.userid;
    image = req.body.image;
    emotion = req.body.emotion;
    tagid = req.body.tagid;
	// Basic sanity checking. Is this even going to work? 
	if(	 title == undefined ||
		 text == undefined || 
    	 userid == undefined || 
    	 image == undefined || 
    	 emotion == undefined ||
    	 tagid == undefined
    	 ){
    	res.status(400).send("Bad request. Some parameter not defined or missing. I recieved this body:" + req.body);
    	return;
    }
	//Connect to database. 
    pg.connect(connectionString, function (err, client, done) {
        // SQL parameterized query to insert entry. 
        query = client.query('INSERT INTO memory (title, text, userID, image, emotion, tagID) VALUES ($1, $2, $3, $4, $5, $6) RETURNING memoryid, title, text, userID, image, emotion, tagID;', [title, text, userid, image, emotion, tagid]);
         
        var results = [];  //stores results.. in this case should just be one. 
		//handle database events. errors first.  		
		query.on('error', function (errorMsg) {
            console.log("Debug: database error:" + errorMsg);
            res.status(400).send({"error": "database error"});
			client.end();
        });
		// Stream results back one row at a time
		query.on('row', function (resultRow) {
            console.log("Debug: (/memory/store) returning obejct: " + resultRow);
			results.push(resultRow);
        });
		// After all data is returned, close connection and return results
		query.on('end', function () {
			client.end();
			res.status(200).send(results);
		});
		// Handle Errors - by console display
		if (err) {	console.log(err);  }
    });
});

/* GET /memory/get/:id - API interface
 * To use:
 * specify a valid memory ID in the URL above.  
 * GET a memory object in JSON representation from the database. 
 * returns empty array if memoryid does not exsist. 
 * CURL tester:  curl -X GET http://team23-project.herokuapp.com/memory/get/2
 */
app.get('/memory/get/:id', function(req, res){
	//TODO check if user is authenticated for this request.
	
    //Connect to database
    pg.connect(connectionString, function (err, client, done) {
		//Perform query to database. Fields to return specified here, and id specified in URL. 
		query = client.query('SELECT memoryid, text, userid, image, emotion, tagid FROM memory WHERE memoryid=$1', [req.params.id]);
		var results = [];  //stores results.. in this case should just be one or none. 

		//for each row add to the results array (above). 
		query.on('row', function(result){
			console.log("Debug: (/memory/get/:id) returning obejct: " + result);
			if (!result) {		//If there is no result then send back an error message. 
				res.status(404).send('No data found');	// 404 NOT FOUND
			} else {
				results.push(result);	//add to array. 
			}
		});
		query.on('end', function() {
            client.end();	//close DB connection.
            res.send(results);	//finally at the end of the query send all the results. 
        });
        if (err) {	console.log(err);  }
	});
});

/* GET /memory/get/timeline/:userid - API interface
 * To use: 
 * Gets the entire timeline of the currently logged in user.    
 *  an array memory object in JSON representation from the database. 
 * CURL tester:  curl -X GET http://team23-project.herokuapp.com/memory/get/timeline/1
 * old: curl -H "Content-Type: application/json" -X POST -d '{"userid":"1"}' http://team23-project.herokuapp.com/memory/get/timeline
 */
app.get('/memory/get/timeline/:userid', function(req, res){
	//parse userid from json object
	var userid = req.params.userid;
	
	//TODO check if userid is authenticated for this request.
	
	if(userid == undefined){res.status(400).send("Bad Request. No userID provided."); return;}
	pg.connect(connectionString, function (err, client, done) {
	    var getTimelineQuery = client.query("SELECT * FROM memory WHERE userid = $1;", [userid]);
		var timeline = [];		//storage for each row that we retrieve from DB. 
		console.log("inside request");
		//Manage events that this query could cause. 
		getTimelineQuery.on('error', function(error){
			console.log("DB error:"+error);
			res.send("DB error. Something broke in the database rectifier.");
			client.end();
		});
		getTimelineQuery.on('row', function(row){
			timeline.push(row);		//add to the memory array. 
		});
		getTimelineQuery.on('end', function(row){
			res.send(timeline);		//blast it over to the client. 
			client.end();			//close DB connection.
		});
	});
});


/* Begin listening for incoming connections. Make it interact with the world. */
app.listen(port, function() {
  console.log('Listening on:', port);
});
