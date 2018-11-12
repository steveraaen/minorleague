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
connection.query('SELECT url FROM playerurls limit 4', function(error, results, fields) {
     if (error) throw error;
connection.end()
state.urls = results


let xx = state.urls.length
function sayHi() {

	xx = xx - 1
	if(xx >= 0) {
  console.log(xx);	
axios.get(state.urls[xx].url).then( (response) => {


let codes = []
let $ = cheerio.load(response.data);
  $('.minors_table').each( (i, elm) => {
    codes.push( {
      playerCode: state.urls[xx].url.split('/')[5].split('.')[0],
      year: $(elm).children().first().attr('data-stat', 'year_ID').text(),
      age: $(elm).children().eq(1).first().attr('data-stat', 'year_ID').text(),
      franchise: $(elm).children().eq(2).first().attr('data-stat', 'year_ID').text(),
      classes: $(elm).children().eq(3).first().attr('data-stat', 'year_ID').text(),
      teams: $(elm).children().eq(29).first().attr('data-stat', 'year_ID').text(),

    });
  });
  console.log(codes)
})

}
}
setInterval(sayHi, 5000)

return results
  })
}
getURLSFomMySQL()

