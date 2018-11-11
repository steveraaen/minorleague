//'https://www.baseball-reference.com/players/m/marteke01.shtml'

const request = require('request');
var fs = require('fs');
const mysql = require('mysql');
const cheerio = require('cheerio')
const axios = require('axios')

var codes =[]
var codes2 = []
const connection = mysql.createConnection({
    host: 'steveport.com',
    port: '3306',
    user: 'tranch5_sjr',
    password: 'modernWater360',
    database: 'tranch5_milb'
});
connection.connect();


connection.query('SELECT url FROM playerurls limit 5', function(error, results, fields) {
     if (error) throw error;
        for(let j = 0; j < 5; j++) {

        var intactURL = results[j].url
        var splitURL = intactURL.split('/')[5].split('.')[0]
        
        
        var playerObj = {}
        var playerArr = []
        var base_url = results[j].url

axios.get(base_url).then( (response) => {
  let $ = cheerio.load(response.data);
  let codes = [];
  var playerCode = splitURL
  $('.minors_table').each( (i, elm) => {
    codes.push( {
      player: results[j].url.split('/')[5].split('.')[0],
      year: $(elm).children().first().attr('data-stat', 'year_ID').text(),
      age: $(elm).children().eq(1).first().attr('data-stat', 'year_ID').text(),
      franchise: $(elm).children().eq(2).first().attr('data-stat', 'year_ID').text(),
      classes: $(elm).children().eq(3).first().attr('data-stat', 'year_ID').text(),
      teams: $(elm).children().eq(29).first().attr('data-stat', 'year_ID').text(),

    });
  });
  return(codes);
})
.then ( (codes) => {
  console.log(codes);
});
}




/*    request({
        method: 'GET',
        url: 'https://www.baseball-reference.com/players/m/marteke01.shtml'//results[0].url

    }, (err, res, body) => {
    	 const $ = cheerio.load(body);
        if (err) return console.error(err);
        $('.minors_table').each(function(i, e) {
     		codes[i] =	$(this).data('stat', 'age').text()             
        })        
        for(let i = 0; i < codes.length; i++) {
        	playerObj = {
        playerName: playerCode,
        year:  codes[i].slice(0,4),
        age:  codes[i].slice(4,6),
        parent: codes[i].slice(6,13),
        theRest: codes[i].slice(13, 26),
        }
        playerArr.push(playerObj)
        }

    $('tr.minors_table td').children(function(i, e) {
      if($(this).data('stat', 'age')){
        codes2[i] = $(this).data('stat','lg_ID').attr()
}
console.log(e.data)
    })
    })*/
})
 connection.end();















