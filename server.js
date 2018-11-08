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
const app = express();


// ------ Setup middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// ------ Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
var teams = ["ARI", "ATL", "BAL", "BOS", "CHC", "CHW", "CIN", "CLE", "COL", "DET", "HOU", "KCR", "ANA", "LAD", "FLA", "MIL", "MIN", "NYM", "NYY", "OAK", "PHI", "PIT", "SDP", "SFG", "SEA", "STL", "TBD", "TEX", "TOR", "WSN"]

function getTeams() {

var teamCode
var teamObj = {}
var teamPlayers = []
var teamObjects = []
	for(let i = 0; i < teams.length; i++){
		
		
		request({
		    method: 'GET',
		    url: 'https://www.baseball-reference.com/teams/' + teams[i] + '/2018.shtml'

		}, (err, res, body) => {

		    let $ = cheerio.load(body);

		    if (err) return console.error(err);

		    $('td').each(function() {
		       if($(this).attr('data-append-csv')) {
		         teamPlayers.push($(this).attr('data-append-csv'));
		         }
		      teamObj.teamPlayers = teamPlayers
		    });
		    teamObj.teamCode = teams[i]
		   teamObjects.push(teamObj)

		 
		});

	}
console.log(teamObjects.length)
	fs.appendFile('allTeamsa.txt', JSON.stringify(teamObjects), function (err) {
		  if (err) throw err;
		  console.log('Saved!');
		});		

}
getTeams()

/*	for(let i = 0; i < urls.length; i++) {
	
	request({
    method: 'GET',
    url: urls[0]

}, (err, res, body) => {

    let $ = cheerio.load(body);

    if (err) return console.error(err);

    $('td').each(function() {
       if($(this).attr('data-append-csv')) {
         console.log($(this).attr('data-append-csv'));
         }
    });

 
fs.appendFile('allTeamsa.txt', JSON.stringify(allTeams), function (err) {
  if (err) throw err;
  console.log('Saved!');
});
});
	}*/




const port = process.env.PORT || 5001;
app.listen(port);
console.log(`Listening on ${port}`);


















