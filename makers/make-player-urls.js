const request = require('request');
var fs = require('fs');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'steveport.com',
    port: '3306',
    user: 'tranch5_sjr',
    password: 'modernWater360',
    database: 'tranch5_milb'
});
var urls = []

/*app.get('/players', function(req, res) {*/
    connection.connect();
// https://www.baseball-reference.com/players/b/beltrad01.shtml

    connection.query('SELECT * FROM players18', function(error, results, fields) {
        if (error) throw error;

        for(let i = 0; i < results.length; i++) {       
        	var url = `https://www.baseball-reference.com/players/${results[i].player[0]}/${results[i].player}.shtml`
        	 connection.query(`INSERT INTO playerurls (url) VALUES ("${url}")`, function(err, res) {
                if (err) throw err;
            })
        }
connection.end();
/*
        fs.appendFile('pl.txt', JSON.stringify(urls), function (err) {
			  if (err) throw err;
			  console.log('Saved!');
			});*/
    });

    
/*});*/