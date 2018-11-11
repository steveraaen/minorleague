// mongoimport -h ds131003-a0.mlab.com:31003 -d prodparking -c signs -u steve -p modernWater360 --file signs.js
// mongoexport -h ds239128.mlab.com:39128 -d heroku_d7twbhf6 -c meters -u steve -p modernWater360 -o meters.json
// mongoimport -h ds131003-a0.mlab.com:31003 -d prodparking -c meters -u steve -p modernWater360 --file meters.json
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird')
const bodyParser = require('body-parser')
const moment = require('moment')
const cheerio = require('cheerio')
const request = require('request');
var fs = require('fs');
const mysql      = require('mysql');
const app = express();


// ------ Setup middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// ------ Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
var teams = ["ARI", "ATL", "BAL", "BOS", "CHC", "CHW", "CIN", "CLE", "COL", "DET", "HOU", "KCR", "ANA", "LAD", "FLA", "MIL", "MIN", "NYM", "NYY", "OAK", "PHI", "PIT", "SDP", "SFG", "SEA", "STL", "TBD", "TEX", "TOR", "WSN"]
var playerURL = 'https://www.baseball-reference.com/register/player.fcgi?id='

var teamObj={}
var teamObjects=[]
var teamPlayers=[]

const connection = mysql.createConnection({
  host: 'steveport.com',
  port: '3306',
  user: 'tranch5_sjr',
  password: 'modernWater360',
  database: 'tranch5_milb'
});
function getTeams() {
	 connection.connect();
		request({
		    method: 'GET',
		    url: 'https://www.baseball-reference.com/teams/' + teams[29] + '/2018.shtml'

		}, (err, res, body) => {
		    const $ = cheerio.load(body);
		    if (err) return console.error(err);
		 	var codes =[]
		 	var codesa =[]	
		     $('td').each(function (i, e) {
		   if($(this).data('appendCsv')) {
        codes[i] = $(this).data('appendCsv');
     } 
    });
	connection.query( `CREATE TABLE ${teams[29].toLowerCase()} (playerCode VARCHAR(15))`, function (error, results) {
      if (error) throw error;
     console.log(results)
    });
		    
		   for(let i = 0; i < codes.length; i++) {
		   	if(codes[i] !== undefined) {
		   		codesa.push(codes[i])
		   	}
		   }  
		   var codesb = Array.from(new Set(codesa))
		   console.log(codesb)
		   console.log(teams[29])
			
			for(let i = 0; i < codesb.length; i++) {
				connection.query(`INSERT INTO ${teams[29].toLowerCase()} VALUES ('${codesb[i]}')`, function(err, res) {
					      if (err) throw err;   
				})

}
connection.end();
		});

}
getTeams()

// https://github.com/mysqljs/mysql

app.get('/players', function (req, res) {
    connection.connect();

    connection.query('SELECT * FROM players17', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });

    connection.end();
});



const port = process.env.PORT || 5001;
app.listen(port);
console.log(`Listening on ${port}`);


















