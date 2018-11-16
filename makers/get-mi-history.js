var fs = require('fs');
const mysql = require('mysql');
const axios = require('axios')
const cheerio = require('cheerio')

const connection = mysql.createConnection({
    host: 'steveport.com',
    port: '3306',
    user: 'tranch5_sjr',
    password: 'modernWater360',
    database: 'tranch5_milb'
});
connection.connect();
/*var xx = 5
function sayHi() {
	xx = xx - 1
	if(xx >= 0) {
  console.log(xx);
}
}
setInterval(sayHi, 1000);*/

const state = {
	urls: []
}

function getURLSFomMySQL() {
connection.query('SELECT url FROM playerurls limit 1', function(error, results, fields) {
     if (error) throw error;

state.urls = results


let xx = state.urls.length
function sayHi() {

	xx = xx - 1
	if(xx >= 0) {

axios.get(state.urls[xx].url).then( (response) => {


let codes = []
let $ = cheerio.load(response.data);
  var playerName = $('h1').text()
  console.log(playerName)
  $('.minors_table').each( (i, elm) => {
  	var player = state.urls[xx].url.split('/')[5].split('.')[0]
  	var year = $(elm).children().first().attr('data-stat', 'year_ID').text()
  	var age = $(elm).children().eq(1).first().attr('data-stat', 'year_ID').text()
  	var franchise = $(elm).children().eq(2).first().attr('data-stat', 'year_ID').text()
  	var classes = $(elm).children().eq(3).first().attr('data-stat', 'year_ID').text()
    var teams = $(elm).children().eq(29).first().attr('data-stat', 'year_ID').text()
  	var teamsPitcher = $(elm).children().eq(34).first().attr('data-stat', 'year_ID').text()



/*    
  	  connection.query(`INSERT INTO  playersminor (playerName, player, yr, age, franchise, classes, teams, teamspitcher) 
        VALUES ("${playerName}","${player}", "${year}", "${age}", "${franchise}","${classes}", "${teams}", "${teamsPitcher}")`) 
 */
    codes.push( {
    	playerName: playerName,
      player: player,
      year: year,
      age: age,
      franchise: franchise,
      classes: classes,
      teams: teams,
      teamsPitcher: teamsPitcher

    });
/*console.log(codes);*/
  });
  console.log(codes)
})

}
}
setInterval(sayHi, 5000)

return results
connection.end()
  })
}
getURLSFomMySQL()

