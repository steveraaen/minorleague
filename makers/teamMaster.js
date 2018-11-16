// https://www.baseball-reference.com/register/affiliate.cgi?id=ARI&year=2018

const fs = require('fs');
const mysql = require('mysql');
const cheerio = require('cheerio')
const axios = require('axios')
const base_URL = 'http://www.milb.com/milb/info/teams.jsp'
const tms =["ARI", "ATL", "BAL", "BOS", "CHC", "CHW", "CIN", "CLE", "COL", "DET", "HOU", "KCR", "ANA", "LAD", "FLA", "MIL", "MIN", "NYM", "NYY", "OAK", "PHI", "PIT", "SDP", "SFG", "SEA", "STL", "TBD", "TEX", "TOR", "WSN"]
const chalk = require('chalk');
const wp = 'file:///Users/stevenjraaen/Desktop/code/node-projects/milb/backend/makers/webtable.html'
const frnchs = 'https://www.baseball-reference.com/register/affiliate.cgi?year=2018'
console.log(chalk.white('Hello world!'));
let teamURLs = []  
	for(let i = 0; i < tms.length; i++) {
		teamURLs.push(`https://www.baseball-reference.com/register/affiliate.cgi?id=${tms[i]}&year=2018`)
	}
	console.log(teamURLs[0])
console.log(chalk.yellow(`\n  Scraping of ${chalk.underline.bold(teamURLs[0])} initiated...\n`))
const getTeamMaster = async () => {
   try {
    const response = await axios.get(teamURLs[0])
    const $ = cheerio.load(response)
    	var aa = $('table #aff_pitching').find('tbody').children().first().children()
    		console.log(aa)

    }  catch (error) {
   
  } 
 }
 getTeamMaster()















