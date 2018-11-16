
const cheerio = require('cheerio')
const request = require('request');
var fs = require('fs');
const mysql = require('mysql');

var teams = ["ARI", "ATL", "BAL", "BOS", "CHC", "CHW", "CIN", "CLE", "COL", "DET", "HOU", "KCR", "LAA", "LAD", "MIA", "MIL", "MIN", "NYM", "NYY", "OAK", "PHI", "PIT", "SDP", "SFG", "SEA", "STL", "TBR", "TEX", "TOR", "WSN"]
var playerURL = 'https://www.baseball-reference.com/register/player.fcgi?id='

var teamObj = {}
var teamObjects = []
var teamPlayers = []

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
        
        var codes = []
        var codesa = []
        $('td').each(function(i, e) {
            if ($(this).data('appendCsv')) {
                codes[i] = $(this).data('appendCsv');
            }
        });


        for (let i = 0; i < codes.length; i++) {
            if (codes[i] !== undefined) {
                codesa.push(codes[i])
            }
        }
        var codesb = Array.from(new Set(codesa))
        console.log(codesb)
        console.log(teams[29])

        for (let i = 0; i < codesb.length; i++) {
            connection.query(`INSERT INTO players18 (team, player) VALUES ('${teams[29].toLowerCase()}', '${codesb[i]}')`, function(err, res) {
                if (err) throw err;

            })

        }
        connection.end();
    });

}
getTeams()



const port = process.env.PORT || 5001;
app.listen(port);
console.log(`Listening on ${port}`);