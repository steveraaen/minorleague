const request = require('request');
var fs = require('fs');
const mysql = require('mysql');
const cheerio = require('cheerio')

var codes =[]
const connection = mysql.createConnection({
    host: 'steveport.com',
    port: '3306',
    user: 'tranch5_sjr',
    password: 'modernWater360',
    database: 'tranch5_milb'
});
connection.connect();

    connection.query('SELECT url FROM playerurls', function(error, results, fields) {
    	 if (error) throw error;
    	var intactURL = results[0].url
    	var splitURL = intactURL.split('/')
    	var playerCode = splitURL[5].split('.')[0]
    	console.log(playerCode)
    	var playerObj = {}
    	var playerArr = []
    request({
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
        parent: codes[i].slice(6,9),
        }
        playerArr.push(playerObj)
        
        }
console.log(playerArr)

    })


    })
 connection.end();