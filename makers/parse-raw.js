const chalk = require('chalk');
const fs = require('fs')
const mysql = require('mysql')
var rawPlayers =[
	{
		"player" : "colliti01",
		"teams" : "9.0",
		"teamspitcher" : "BJY GULF"
	},
	{
		"player" : "colliti01",
		"teams" : "4.7",
		"teamspitcher" : "LNS MIDW"
	},
	{
		"player" : "colliti01",
		"teams" : "6.9",
		"teamspitcher" : "DUN,MAN FLOR,EL"
	},
	{
		"player" : "colliti01",
		"teams" : "5.0",
		"teamspitcher" : "MAN,OMA,MSS EL,PCL,SOUL"
	},
	{
		"player" : "colliti01",
		"teams" : "5.5",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "colliti01",
		"teams" : "8.8",
		"teamspitcher" : "HRB,NAT,POT EL,GULF,CARL"
	},
	{
		"player" : "colliti01",
		"teams" : "7.3",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "gloveko01",
		"teams" : "6.6",
		"teamspitcher" : "HGR,AUB SALL,NYPL"
	},
	{
		"player" : "gloveko01",
		"teams" : "6.3",
		"teamspitcher" : "SYR,HRB,POT IL,EL,CARL"
	},
	{
		"player" : "gloveko01",
		"teams" : "9.0",
		"teamspitcher" : "HRB EL"
	},
	{
		"player" : "gloveko01",
		"teams" : "9.3",
		"teamspitcher" : "SYR,NAT,POT IL,GULF,CARL"
	},
	{
		"player" : "kintzbr01",
		"teams" : "9.5",
		"teamspitcher" : "PDS,EUG ARIZ,NORW"
	},
	{
		"player" : "kintzbr01",
		"teams" : "9.1",
		"teamspitcher" : "FWA,PDS,EUG MIDW,ARIZ,NORW"
	},
	{
		"player" : "kintzbr01",
		"teams" : "10.3",
		"teamspitcher" : "HVL SOUL"
	},
	{
		"player" : "kintzbr01",
		"teams" : "6.5",
		"teamspitcher" : "NVL,HVL,SPS PCL,SOUL,AZFL"
	},
	{
		"player" : "kintzbr01",
		"teams" : "11.6",
		"teamspitcher" : "PEA,NVL AZFL,PCL"
	},
	{
		"player" : "kintzbr01",
		"teams" : "8.4",
		"teamspitcher" : "HVL,NVL,BRE SOUL,PCL,FLOR"
	},
	{
		"player" : "kintzbr01",
		"teams" : "10.1",
		"teamspitcher" : "CSP,BRR PCL,ARIZ"
	},
	{
		"player" : "kintzbr01",
		"teams" : "8.8",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "kintzbr01",
		"teams" : "0.0",
		"teamspitcher" : "POT CARL"
	},
	{
		"player" : "romeren01",
		"teams" : "6.1",
		"teamspitcher" : "DRY DOSL"
	},
	{
		"player" : "romeren01",
		"teams" : "8.7",
		"teamspitcher" : "DVS GULF"
	},
	{
		"player" : "romeren01",
		"teams" : "6.3",
		"teamspitcher" : "PRI,HDV APPY,NYPL"
	},
	{
		"player" : "romeren01",
		"teams" : "8.2",
		"teamspitcher" : "BWG MIDW"
	},
	{
		"player" : "romeren01",
		"teams" : "6.6",
		"teamspitcher" : "POE,ESC FLOR,DOWL"
	},
	{
		"player" : "romeren01",
		"teams" : "6.9",
		"teamspitcher" : "MTG,DHM SOUL,IL"
	},
	{
		"player" : "romeren01",
		"teams" : "9.6",
		"teamspitcher" : "DHM,ESC IL,DOWL"
	},
	{
		"player" : "romeren01",
		"teams" : "9.2",
		"teamspitcher" : "DHM,ESC,POE IL,DOWL,FLOR"
	},
	{
		"player" : "romeren01",
		"teams" : "5.7",
		"teamspitcher" : "ESC,POE DOWL,FLOR"
	},
	{
		"player" : "romeren01",
		"teams" : "9.0",
		"teamspitcher" : "SYR,ESC IL,DOWL"
	},
	{
		"player" : "romeren01",
		"teams" : "4.9",
		"teamspitcher" : "ESC,INA,ATO,BDT DOWL,IL,EL,FLOR"
	},
	{
		"player" : "herreke01",
		"teams" : "6.3",
		"teamspitcher" : "RYL DOSL"
	},
	{
		"player" : "herreke01",
		"teams" : "8.7",
		"teamspitcher" : "BRL,BUR APPY,MIDW"
	},
	{
		"player" : "herreke01",
		"teams" : "5.4",
		"teamspitcher" : "BUR MIDW"
	},
	{
		"player" : "herreke01",
		"teams" : "8.3",
		"teamspitcher" : "BUR MIDW"
	},
	{
		"player" : "herreke01",
		"teams" : "5.9",
		"teamspitcher" : "NTA,ESC,OMA,WMT TL,DOWL,PCL,CARL"
	},
	{
		"player" : "herreke01",
		"teams" : "4.3",
		"teamspitcher" : "OMA,ESC,NTA PCL,DOWL,TL"
	},
	{
		"player" : "torreca01",
		"teams" : "10.2",
		"teamspitcher" : "BRS APPY"
	},
	{
		"player" : "torreca01",
		"teams" : "6.1",
		"teamspitcher" : "KAN,GRF SALL,PION"
	},
	{
		"player" : "torreca01",
		"teams" : "11.1",
		"teamspitcher" : "WSM CARL"
	},
	{
		"player" : "torreca01",
		"teams" : "8.8",
		"teamspitcher" : "BIR,WSM SOUL,CARL"
	},
	{
		"player" : "torreca01",
		"teams" : "8.5",
		"teamspitcher" : "BIR,CHR,PES SOUL,IL,AZFL"
	},
	{
		"player" : "torreca01",
		"teams" : "6.8",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "torreca01",
		"teams" : "7.0",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "torreca01",
		"teams" : "10.2",
		"teamspitcher" : "YOM JPCL"
	},
	{
		"player" : "torreca01",
		"teams" : "9.1",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "torreca01",
		"teams" : "8.9",
		"teamspitcher" : "LVG PCL"
	},
	{
		"player" : "torreca01",
		"teams" : "6.4",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "madsory01",
		"teams" : "9.5",
		"teamspitcher" : "MTV APPY"
	},
	{
		"player" : "madsory01",
		"teams" : "8.2",
		"teamspitcher" : "BAT NYPL"
	},
	{
		"player" : "madsory01",
		"teams" : "7.5",
		"teamspitcher" : "KAN SALL"
	},
	{
		"player" : "madsory01",
		"teams" : "10.5",
		"teamspitcher" : "CLW FLOR"
	},
	{
		"player" : "madsory01",
		"teams" : "7.9",
		"teamspitcher" : "REA EL"
	},
	{
		"player" : "madsory01",
		"teams" : "9.2",
		"teamspitcher" : "SWB,CLW IL,FLOR"
	},
	{
		"player" : "madsory01",
		"teams" : "13.5",
		"teamspitcher" : "REA EL"
	},
	{
		"player" : "madsory01",
		"teams" : "9.0",
		"teamspitcher" : "REA EL"
	},
	{
		"player" : "madsory01",
		"teams" : "6.4",
		"teamspitcher" : "CLW,REA,LHV FLOR,EL,IL"
	},
	{
		"player" : "madsory01",
		"teams" : "0.0",
		"teamspitcher" : "CLW FLOR"
	},
	{
		"player" : "madsory01",
		"teams" : "0.0",
		"teamspitcher" : "SBR CALL"
	},
	{
		"player" : "cordeji01",
		"teams" : "6.6",
		"teamspitcher" : "BLJ DOSL"
	},
	{
		"player" : "cordeji01",
		"teams" : "10.3",
		"teamspitcher" : "BJY,BLD GULF,APPY"
	},
	{
		"player" : "cordeji01",
		"teams" : "9.1",
		"teamspitcher" : "LNS,ESC MIDW,DOWL"
	},
	{
		"player" : "cordeji01",
		"teams" : "7.2",
		"teamspitcher" : "DUN,MAN,REA,ESC FLOR,EL,DOWL"
	},
	{
		"player" : "cordeji01",
		"teams" : "9.0",
		"teamspitcher" : "REA,CLW,CLR,LHV EL,FLOR,GULF,IL"
	},
	{
		"player" : "cordeji01",
		"teams" : "9.0",
		"teamspitcher" : "HRB,MES EL,AZFL"
	},
	{
		"player" : "cordeji01",
		"teams" : "8.2",
		"teamspitcher" : "SYR,ESC IL,DOWL"
	},
	{
		"player" : "solissa01",
		"teams" : "7.8",
		"teamspitcher" : "SCO,HGR AZFL,SALL"
	},
	{
		"player" : "solissa01",
		"teams" : "9.5",
		"teamspitcher" : "POT,HGR,SCO CARL,SALL,AZFL"
	},
	{
		"player" : "solissa01",
		"teams" : "9.2",
		"teamspitcher" : "POT,MES,NAT CARL,AZFL,GULF"
	},
	{
		"player" : "solissa01",
		"teams" : "10.3",
		"teamspitcher" : "HGR,POT,NAT,HRB SALL,CARL,GULF,EL"
	},
	{
		"player" : "solissa01",
		"teams" : "9.1",
		"teamspitcher" : "SYR,HRB IL,EL"
	},
	{
		"player" : "solissa01",
		"teams" : "5.7",
		"teamspitcher" : "SYR,HGR,POT IL,SALL,CARL"
	},
	{
		"player" : "solissa01",
		"teams" : "9.2",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "solissa01",
		"teams" : "4.8",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "gotttr01",
		"teams" : "6.8",
		"teamspitcher" : "FWA,EUG MIDW,NORW"
	},
	{
		"player" : "gotttr01",
		"teams" : "8.1",
		"teamspitcher" : "LEL,ARK,SAN,MES CALL,TL,AZFL"
	},
	{
		"player" : "gotttr01",
		"teams" : "8.4",
		"teamspitcher" : "ARK,SLK TL,PCL"
	},
	{
		"player" : "gotttr01",
		"teams" : "10.6",
		"teamspitcher" : "SYR,NAT,AUB IL,GULF,NYPL"
	},
	{
		"player" : "gotttr01",
		"teams" : "9.4",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "gotttr01",
		"teams" : "7.1",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "doolise01",
		"teams" : "0.0",
		"teamspitcher" : "ATH ARIZ"
	},
	{
		"player" : "doolise01",
		"teams" : "2.9",
		"teamspitcher" : "MDL,STK,SAC TL,CALL,PCL"
	},
	{
		"player" : "doolise01",
		"teams" : "8.1",
		"teamspitcher" : "NVL,STK,MDL PCL,CALL,TL"
	},
	{
		"player" : "doolise01",
		"teams" : "6.0",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "doolise01",
		"teams" : "0.0",
		"teamspitcher" : "STK,NVL CALL,PCL"
	},
	{
		"player" : "hollagr01",
		"teams" : "7.5",
		"teamspitcher" : "IDF PION"
	},
	{
		"player" : "hollagr01",
		"teams" : "7.5",
		"teamspitcher" : "WMT CARL"
	},
	{
		"player" : "hollagr01",
		"teams" : "9.6",
		"teamspitcher" : "NTA,OMA TL,PCL"
	},
	{
		"player" : "hollagr01",
		"teams" : "6.3",
		"teamspitcher" : "OMA,LGU PCL,VEWL"
	},
	{
		"player" : "hollagr01",
		"teams" : "5.4",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "hollagr01",
		"teams" : "4.5",
		"teamspitcher" : "NTA TL"
	},
	{
		"player" : "hollagr01",
		"teams" : "9.0",
		"teamspitcher" : "MEM,SPD,PLM PCL,TL,FLOR"
	},
	{
		"player" : "williau01",
		"teams" : "9.8",
		"teamspitcher" : "AUB,NAT NYPL,GULF"
	},
	{
		"player" : "williau01",
		"teams" : "7.8",
		"teamspitcher" : "HGR,POT,SYR SALL,CARL,IL"
	},
	{
		"player" : "williau01",
		"teams" : "11.5",
		"teamspitcher" : "POT,HRB CARL,EL"
	},
	{
		"player" : "williau01",
		"teams" : "12.3",
		"teamspitcher" : "HRB,POT,MES EL,CARL,AZFL"
	},
	{
		"player" : "williau01",
		"teams" : "5.3",
		"teamspitcher" : "HRB,SYR EL,IL"
	},
	{
		"player" : "adamsau02",
		"teams" : "7.1",
		"teamspitcher" : "ORM PION"
	},
	{
		"player" : "adamsau02",
		"teams" : "7.1",
		"teamspitcher" : "BUR MIDW"
	},
	{
		"player" : "adamsau02",
		"teams" : "4.1",
		"teamspitcher" : "SBR CALL"
	},
	{
		"player" : "adamsau02",
		"teams" : "5.4",
		"teamspitcher" : "ARK,SBR,SLK TL,CALL,PCL"
	},
	{
		"player" : "adamsau02",
		"teams" : "7.6",
		"teamspitcher" : "ARK,ARA,ANG TL,VEWL,ARIZ"
	},
	{
		"player" : "adamsau02",
		"teams" : "6.7",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "adamsau02",
		"teams" : "9.1",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "milleju02",
		"teams" : "8.4",
		"teamspitcher" : "SPO NORW"
	},
	{
		"player" : "milleju02",
		"teams" : "5.5",
		"teamspitcher" : "BAK,RGS,SPO CALL,ARIZ,NORW"
	},
	{
		"player" : "milleju02",
		"teams" : "6.7",
		"teamspitcher" : "BAK CALL"
	},
	{
		"player" : "milleju02",
		"teams" : "6.0",
		"teamspitcher" : "FRI,SPS TL,AZFL"
	},
	{
		"player" : "milleju02",
		"teams" : "10.0",
		"teamspitcher" : "FRI,RRK TL,PCL"
	},
	{
		"player" : "milleju02",
		"teams" : "6.0",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "milleju02",
		"teams" : "6.4",
		"teamspitcher" : "ABQ,NBR PCL,EL"
	},
	{
		"player" : "milleju02",
		"teams" : "11.3",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "milleju02",
		"teams" : "9.8",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "milleju02",
		"teams" : "2.0",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "kellesh01",
		"teams" : "10.8",
		"teamspitcher" : "APP,EVR MIDW,NORW"
	},
	{
		"player" : "kellesh01",
		"teams" : "7.4",
		"teamspitcher" : "WTN,LRA,HDS,APP SOUL,VEWL,CALL,MIDW"
	},
	{
		"player" : "kellesh01",
		"teams" : "0.0",
		"teamspitcher" : "MRE,TAC ARIZ,PCL"
	},
	{
		"player" : "kellesh01",
		"teams" : "2.5",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "kellesh01",
		"teams" : "7.6",
		"teamspitcher" : "TAC,WTN PCL,SOUL"
	},
	{
		"player" : "kellesh01",
		"teams" : "4.1",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "kellesh01",
		"teams" : "5.4",
		"teamspitcher" : "SWB,TRE IL,EL"
	},
	{
		"player" : "kellesh01",
		"teams" : "0.0",
		"teamspitcher" : "ELP,LEL PCL,CALL"
	},
	{
		"player" : "kellesh01",
		"teams" : "10.8",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "kellesh01",
		"teams" : "0.0",
		"teamspitcher" : "POT CARL"
	},
	{
		"player" : "vothau01",
		"teams" : "6.4",
		"teamspitcher" : "AUB,HGR,NAT NYPL,SALL,GULF"
	},
	{
		"player" : "vothau01",
		"teams" : "6.3",
		"teamspitcher" : "HGR,POT,HRB SALL,CARL,EL"
	},
	{
		"player" : "vothau01",
		"teams" : "7.7",
		"teamspitcher" : "HRB EL"
	},
	{
		"player" : "vothau01",
		"teams" : "7.8",
		"teamspitcher" : "SYR,GLN IL,AZFL"
	},
	{
		"player" : "vothau01",
		"teams" : "11.2",
		"teamspitcher" : "SYR,HRB,AUB IL,EL,NYPL"
	},
	{
		"player" : "vothau01",
		"teams" : "8.5",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "mcgowky01",
		"teams" : "7.5",
		"teamspitcher" : "ORM PION"
	},
	{
		"player" : "mcgowky01",
		"teams" : "8.1",
		"teamspitcher" : "SBR,ARK,ANG CALL,TL,ARIZ"
	},
	{
		"player" : "mcgowky01",
		"teams" : "8.6",
		"teamspitcher" : "ARK TL"
	},
	{
		"player" : "mcgowky01",
		"teams" : "10.5",
		"teamspitcher" : "SLK,ARK PCL,TL"
	},
	{
		"player" : "mcgowky01",
		"teams" : "11.3",
		"teamspitcher" : "SYR,HRB,MES,POT IL,EL,AZFL,CARL"
	},
	{
		"player" : "mcgowky01",
		"teams" : "6.1",
		"teamspitcher" : "HRB,SYR,POT EL,IL,CARL"
	},
	{
		"player" : "gracema02",
		"teams" : "10.5",
		"teamspitcher" : "NAT,VMT GULF,NYPL"
	},
	{
		"player" : "gracema02",
		"teams" : "11.5",
		"teamspitcher" : "HGR SALL"
	},
	{
		"player" : "gracema02",
		"teams" : "11.3",
		"teamspitcher" : "POT CARL"
	},
	{
		"player" : "gracema02",
		"teams" : "9.2",
		"teamspitcher" : "HRB,POT EL,CARL"
	},
	{
		"player" : "gracema02",
		"teams" : "7.1",
		"teamspitcher" : "SYR,HRB,MES IL,EL,AZFL"
	},
	{
		"player" : "gracema02",
		"teams" : "8.0",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "gracema02",
		"teams" : "9.7",
		"teamspitcher" : "SYR,NAT IL,GULF"
	},
	{
		"player" : "gracema02",
		"teams" : "9.6",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "gracema02",
		"teams" : "9.0",
		"teamspitcher" : "HRB,SYR EL,IL"
	},
	{
		"player" : "suerowa01",
		"teams" : "9.2",
		"teamspitcher" : "NTL DOSL"
	},
	{
		"player" : "suerowa01",
		"teams" : "8.0",
		"teamspitcher" : "NTL DOSL"
	},
	{
		"player" : "suerowa01",
		"teams" : "7.1",
		"teamspitcher" : "NTL DOSL"
	},
	{
		"player" : "suerowa01",
		"teams" : "5.0",
		"teamspitcher" : "NAT GULF"
	},
	{
		"player" : "suerowa01",
		"teams" : "8.3",
		"teamspitcher" : "HGR,POT SALL,CARL"
	},
	{
		"player" : "suerowa01",
		"teams" : "9.2",
		"teamspitcher" : "POT,HRB,LCY CARL,EL,DOWL"
	},
	{
		"player" : "suerowa01",
		"teams" : "8.0",
		"teamspitcher" : "HRB,LCY EL,DOWL"
	},
	{
		"player" : "suerowa01",
		"teams" : "7.9",
		"teamspitcher" : "SYR,HRB,LCY IL,EL,DOWL"
	},
	{
		"player" : "suerowa01",
		"teams" : "8.5",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "coleaj01",
		"teams" : "9.0",
		"teamspitcher" : "VMT NYPL"
	},
	{
		"player" : "coleaj01",
		"teams" : "8.8",
		"teamspitcher" : "HGR SALL"
	},
	{
		"player" : "coleaj01",
		"teams" : "9.3",
		"teamspitcher" : "BUR,STK MIDW,CALL"
	},
	{
		"player" : "coleaj01",
		"teams" : "8.0",
		"teamspitcher" : "POT,HRB CARL,EL"
	},
	{
		"player" : "coleaj01",
		"teams" : "9.9",
		"teamspitcher" : "HRB,SYR EL,IL"
	},
	{
		"player" : "coleaj01",
		"teams" : "7.8",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "coleaj01",
		"teams" : "9.5",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "coleaj01",
		"teams" : "12.2",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "coleaj01",
		"teams" : "32.4",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "rossjo01",
		"teams" : "18.0",
		"teamspitcher" : "PDS ARIZ"
	},
	{
		"player" : "rossjo01",
		"teams" : "8.4",
		"teamspitcher" : "FWA,EUG,PDS MIDW,NORW,ARIZ"
	},
	{
		"player" : "rossjo01",
		"teams" : "9.1",
		"teamspitcher" : "FWA MIDW"
	},
	{
		"player" : "rossjo01",
		"teams" : "9.2",
		"teamspitcher" : "LEL,SAN CALL,TL"
	},
	{
		"player" : "rossjo01",
		"teams" : "7.2",
		"teamspitcher" : "HRB,SYR EL,IL"
	},
	{
		"player" : "rossjo01",
		"teams" : "10.8",
		"teamspitcher" : "SYR,HGR IL,SALL"
	},
	{
		"player" : "rossjo01",
		"teams" : "10.7",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "rossjo01",
		"teams" : "5.8",
		"teamspitcher" : "SYR,NAT,HRB,POT IL,GULF,EL,CARL"
	},
	{
		"player" : "milonto01",
		"teams" : "9.6",
		"teamspitcher" : "HGR,VMT SALL,NYPL"
	},
	{
		"player" : "milonto01",
		"teams" : "8.6",
		"teamspitcher" : "POT CARL"
	},
	{
		"player" : "milonto01",
		"teams" : "9.2",
		"teamspitcher" : "HRB EL"
	},
	{
		"player" : "milonto01",
		"teams" : "8.3",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "milonto01",
		"teams" : "13.9",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "milonto01",
		"teams" : "10.9",
		"teamspitcher" : "SAC,ROC PCL,IL"
	},
	{
		"player" : "milonto01",
		"teams" : "5.8",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "milonto01",
		"teams" : "7.6",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "milonto01",
		"teams" : "11.6",
		"teamspitcher" : "BNG,MET EL,GULF"
	},
	{
		"player" : "milonto01",
		"teams" : "7.7",
		"teamspitcher" : "SYR,LCY,HRB IL,DOWL,EL"
	},
	{
		"player" : "feddeer01",
		"teams" : "8.7",
		"teamspitcher" : "AUB,HGR NYPL,SALL"
	},
	{
		"player" : "feddeer01",
		"teams" : "8.8",
		"teamspitcher" : "POT,HRB CARL,EL"
	},
	{
		"player" : "feddeer01",
		"teams" : "8.2",
		"teamspitcher" : "HRB,SYR EL,IL"
	},
	{
		"player" : "feddeer01",
		"teams" : "10.3",
		"teamspitcher" : "SYR,HRB IL,EL"
	},
	{
		"player" : "rodrije01",
		"teams" : "5.9",
		"teamspitcher" : "NTL DOSL"
	},
	{
		"player" : "rodrije01",
		"teams" : "7.6",
		"teamspitcher" : "NAT GULF"
	},
	{
		"player" : "rodrije01",
		"teams" : "11.6",
		"teamspitcher" : "HGR,AUB SALL,NYPL"
	},
	{
		"player" : "rodrije01",
		"teams" : "9.5",
		"teamspitcher" : "AUB,HGR NYPL,SALL"
	},
	{
		"player" : "rodrije01",
		"teams" : "8.0",
		"teamspitcher" : "HGR SALL"
	},
	{
		"player" : "rodrije01",
		"teams" : "6.9",
		"teamspitcher" : "POT CARL"
	},
	{
		"player" : "rodrije01",
		"teams" : "7.8",
		"teamspitcher" : "HRB,SYR EL,IL"
	},
	{
		"player" : "hellije01",
		"teams" : "9.0",
		"teamspitcher" : "PRI APPY"
	},
	{
		"player" : "hellije01",
		"teams" : "6.4",
		"teamspitcher" : "HDV NYPL"
	},
	{
		"player" : "hellije01",
		"teams" : "7.0",
		"teamspitcher" : "CBS SALL"
	},
	{
		"player" : "hellije01",
		"teams" : "8.8",
		"teamspitcher" : "VRO,MTG FLOR,SOUL"
	},
	{
		"player" : "hellije01",
		"teams" : "5.7",
		"teamspitcher" : "DHM,MTG IL,SOUL"
	},
	{
		"player" : "hellije01",
		"teams" : "8.1",
		"teamspitcher" : "DHM,POE IL,FLOR"
	},
	{
		"player" : "hellije01",
		"teams" : "14.3",
		"teamspitcher" : "DHM,POE,MTG IL,FLOR,SOUL"
	},
	{
		"player" : "hellije01",
		"teams" : "9.0",
		"teamspitcher" : "REN PCL"
	},
	{
		"player" : "hellije01",
		"teams" : "17.4",
		"teamspitcher" : "POT CARL"
	},
	{
		"player" : "gonzagi01",
		"teams" : "7.8",
		"teamspitcher" : "KAN,BRS SALL,APPY"
	},
	{
		"player" : "gonzagi01",
		"teams" : "6.7",
		"teamspitcher" : "WSM,KAN CARL,SALL"
	},
	{
		"player" : "gonzagi01",
		"teams" : "8.1",
		"teamspitcher" : "REA,PES EL,AZFL"
	},
	{
		"player" : "gonzagi01",
		"teams" : "7.0",
		"teamspitcher" : "BIR SOUL"
	},
	{
		"player" : "gonzagi01",
		"teams" : "7.8",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "gonzagi01",
		"teams" : "6.2",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "gonzagi01",
		"teams" : "10.6",
		"teamspitcher" : "POT CARL"
	},
	{
		"player" : "strasst01",
		"teams" : "7.1",
		"teamspitcher" : "PHO AZFL"
	},
	{
		"player" : "strasst01",
		"teams" : "5.0",
		"teamspitcher" : "SYR,HRB IL,EL"
	},
	{
		"player" : "strasst01",
		"teams" : "6.2",
		"teamspitcher" : "HGR,HRB,SYR,POT SALL,EL,IL,CARL"
	},
	{
		"player" : "strasst01",
		"teams" : "8.0",
		"teamspitcher" : "SYR,HRB IL,EL"
	},
	{
		"player" : "strasst01",
		"teams" : "5.4",
		"teamspitcher" : "POT CARL"
	},
	{
		"player" : "strasst01",
		"teams" : "7.0",
		"teamspitcher" : "POT CARL"
	},
	{
		"player" : "roarkta01",
		"teams" : "7.7",
		"teamspitcher" : "BAK,RGS CALL,ARIZ"
	},
	{
		"player" : "roarkta01",
		"teams" : "7.3",
		"teamspitcher" : "BAK,FRI CALL,TL"
	},
	{
		"player" : "roarkta01",
		"teams" : "9.4",
		"teamspitcher" : "FRI,HRB TL,EL"
	},
	{
		"player" : "roarkta01",
		"teams" : "9.6",
		"teamspitcher" : "HRB EL"
	},
	{
		"player" : "roarkta01",
		"teams" : "9.9",
		"teamspitcher" : "SYR,MGA IL,VEWL"
	},
	{
		"player" : "roarkta01",
		"teams" : "7.2",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "roarkta01",
		"teams" : "7.5",
		"teamspitcher" : "POT,HRB CARL,EL"
	},
	{
		"player" : "scherma01",
		"teams" : "6.5",
		"teamspitcher" : "MOB,VIS,SCO SOUL,CALL,AZFL"
	},
	{
		"player" : "scherma01",
		"teams" : "6.0",
		"teamspitcher" : "TUC,PHO PCL,AZFL"
	},
	{
		"player" : "scherma01",
		"teams" : "1.9",
		"teamspitcher" : "VIS CALL"
	},
	{
		"player" : "scherma01",
		"teams" : "2.4",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "bautira01",
		"teams" : "NTL · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "bautira01",
		"teams" : "NAT · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "bautira01",
		"teams" : "HGR · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "bautira01",
		"teams" : "POT,ESC,AUB,NAT · CARL,DOWL,NYPL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "bautira01",
		"teams" : "HRB,ESC · EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "bautira01",
		"teams" : "SYR,GIG,NAT · IL,DOWL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "bautira01",
		"teams" : "SYR,HRB · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "montemi01",
		"teams" : "MSO · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "montemi01",
		"teams" : "MSO · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "montemi01",
		"teams" : "SBN · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "montemi01",
		"teams" : "LNR,KNX,PHO · CALL,SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "montemi01",
		"teams" : "KNX,OCC,TUC · SOUL,VEWL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "montemi01",
		"teams" : "PSA · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "montemi01",
		"teams" : "ORN,TUC,MGA · VEWL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "montemi01",
		"teams" : "MGL · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "montemi01",
		"teams" : "REN · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "montemi01",
		"teams" : "DKS · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "montemi01",
		"teams" : "KNX · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "montemi01",
		"teams" : "IWA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "montemi01",
		"teams" : "BFL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "reynoma03",
		"teams" : "SAV · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "reynoma03",
		"teams" : "SCE,BNG · FLOR,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "reynoma03",
		"teams" : "LVG,BNG,SCO · PCL,EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "reynoma03",
		"teams" : "LVG,MET · PCL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "reynoma03",
		"teams" : "LVG · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "reynoma03",
		"teams" : "LVG · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "reynoma03",
		"teams" : "SYR,AUB · IL,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "sanchad01",
		"teams" : "NTL · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "sanchad01",
		"teams" : "NTL,ZUL · DOSL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sanchad01",
		"teams" : "NAT · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "sanchad01",
		"teams" : "NAT,HGR · GULF,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "sanchad01",
		"teams" : "HGR,ZUL · SALL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sanchad01",
		"teams" : "POT,ZUL · CARL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sanchad01",
		"teams" : "POT,ZUL · CARL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sanchad01",
		"teams" : "HRB,POT,ZUL · EL,CARL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sanchad01",
		"teams" : "HRB,POT,NAT · EL,CARL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "sanchad01",
		"teams" : "HRB,SYR · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "sanchad01",
		"teams" : "SYR,HRB · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "sanchad01",
		"teams" : "SYR,NAT · IL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "sierrmo01",
		"teams" : "BLJ · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "sierrmo01",
		"teams" : "BJY · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "sierrmo01",
		"teams" : "LNS,GIG · MIDW,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sierrmo01",
		"teams" : "DUN,GIG,MAN · FLOR,DOWL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "sierrmo01",
		"teams" : "DUN,BJY,GIG · FLOR,GULF,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sierrmo01",
		"teams" : "MAN,GIG · EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sierrmo01",
		"teams" : "LVG,GIG · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sierrmo01",
		"teams" : "BFL,GIG,BJY · IL,DOWL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "sierrmo01",
		"teams" : "GIG,CHR · DOWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "sierrmo01",
		"teams" : "OMA,GIG · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sierrmo01",
		"teams" : "JCK,GIG · SOUL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sierrmo01",
		"teams" : "NOR,GIG · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sierrmo01",
		"teams" : "SYR,GIG,AUB · IL,DOWL,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "roblevi01",
		"teams" : "NTL · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "roblevi01",
		"teams" : "AUB,NAT · NYPL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "roblevi01",
		"teams" : "HGR,POT,NAT · SALL,CARL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "roblevi01",
		"teams" : "POT,HRB,MES · CARL,EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "roblevi01",
		"teams" : "SYR,AGU,NAT,AUB · IL,DOWL,GULF,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "goodwbr01",
		"teams" : "HGR,HRB,SRV · SALL,EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "goodwbr01",
		"teams" : "HRB,MES · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "goodwbr01",
		"teams" : "SYR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "goodwbr01",
		"teams" : "HRB,MGA · EL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "goodwbr01",
		"teams" : "SYR,HRM · IL,MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "goodwbr01",
		"teams" : "SYR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "goodwbr01",
		"teams" : "OMA,HRB · PCL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "stevean01",
		"teams" : "HGR,AUB,NAT · SALL,NYPL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "stevean01",
		"teams" : "POT,HRB,GLN · CARL,EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "stevean01",
		"teams" : "SYR,HRB · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "stevean01",
		"teams" : "SYR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "kiebosp01",
		"teams" : "AUB · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "kiebosp01",
		"teams" : "NAT · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "kiebosp01",
		"teams" : "HGR,MES · SALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "kiebosp01",
		"teams" : "POT,SRV · CARL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "kiebosp01",
		"teams" : "HRB · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "kiebosp01",
		"teams" : "SYR,HRB · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "kiebosp01",
		"teams" : "SYR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "kendrho01",
		"teams" : "ANG · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "kendrho01",
		"teams" : "PVO · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "kendrho01",
		"teams" : "CDR,ANG · MIDW,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "kendrho01",
		"teams" : "RCU,ARK,SPS · CALL,TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "kendrho01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "kendrho01",
		"teams" : "SLK,RCU · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "kendrho01",
		"teams" : "RCU,SLK · CALL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "kendrho01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "kendrho01",
		"teams" : "RCU · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "kendrho01",
		"teams" : "LHV,REA · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "murphda08",
		"teams" : "KPT,BKN,MET · APPY,NYPL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "murphda08",
		"teams" : "SCE,WKI · FLOR,HIWB",
		"teamspitcher" : ""
	},
	{
		"player" : "murphda08",
		"teams" : "BNG,PES,BKN,NOR · EL,AZFL,NYPL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "murphda08",
		"teams" : "AGU,BFL,SCE · DOWL,IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "murphda08",
		"teams" : "SCE,MET · FLOR,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "murphda08",
		"teams" : "HRB · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "severpe01",
		"teams" : "NAT · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "severpe01",
		"teams" : "NAT · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "severpe01",
		"teams" : "HGR · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "severpe01",
		"teams" : "POT,MES · CARL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "severpe01",
		"teams" : "HRB,AGU · EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "severpe01",
		"teams" : "SYR,AGU · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "severpe01",
		"teams" : "SYR,AGU,AUB · IL,DOWL,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "severpe01",
		"teams" : "SYR,AGU · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "reynoma01",
		"teams" : "YAK,SBN,LNR · NORW,MIDW,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "reynoma01",
		"teams" : "SBN · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "reynoma01",
		"teams" : "LNR,KNX,SCO · CALL,SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "reynoma01",
		"teams" : "MOB · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "reynoma01",
		"teams" : "BOW · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "reynoma01",
		"teams" : "SYR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "adamsma01",
		"teams" : "BAT,JOH · NYPL,APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "adamsma01",
		"teams" : "DAV · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "adamsma01",
		"teams" : "SPD,PEA · TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "adamsma01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "adamsma01",
		"teams" : "SPD · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "adamsma01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "adamsma01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "adamsma01",
		"teams" : "HRB · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "eatonad02",
		"teams" : "MSO · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "eatonad02",
		"teams" : "VIS,MOB,SRV · CALL,SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "eatonad02",
		"teams" : "REN,MOB · PCL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "eatonad02",
		"teams" : "VIS,REN,DKS · CALL,PCL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "eatonad02",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "eatonad02",
		"teams" : "POT,HRB · CARL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "harpebr03",
		"teams" : "SCO · AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "harpebr03",
		"teams" : "HGR,HRB,SCO · SALL,EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "harpebr03",
		"teams" : "SYR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "harpebr03",
		"teams" : "HRB,POT · EL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "harpebr03",
		"teams" : "HRB,POT · EL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "taylomi02",
		"teams" : "NAT,HGR · GULF,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "taylomi02",
		"teams" : "HGR · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "taylomi02",
		"teams" : "POT · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "taylomi02",
		"teams" : "POT,MGZ · CARL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "taylomi02",
		"teams" : "HRB,SYR · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "taylomi02",
		"teams" : "SYR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "taylomi02",
		"teams" : "SYR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "taylomi02",
		"teams" : "HRB,POT · EL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "sotoju01",
		"teams" : "NAT,AUB · GULF,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "sotoju01",
		"teams" : "HGR,NAT · SALL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "sotoju01",
		"teams" : "POT,HGR,HRB · CARL,SALL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "rendoan01",
		"teams" : "SRV,HRB,POT,AUB,NAT · AZFL,EL,CARL,NYPL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "rendoan01",
		"teams" : "HRB,SYR · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "rendoan01",
		"teams" : "HRB,POT · EL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "rendoan01",
		"teams" : "POT · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "turnetr01",
		"teams" : "FWA,EUG,SPS · MIDW,NORW,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "turnetr01",
		"teams" : "SAN,SYR,HRB · TL,IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "turnetr01",
		"teams" : "SYR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "turnetr01",
		"teams" : "POT,SYR · CARL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "difowi01",
		"teams" : "NTL · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "difowi01",
		"teams" : "NTL,NAT · DOSL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "difowi01",
		"teams" : "NAT · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "difowi01",
		"teams" : "AUB,HGR,NAT,POT · NYPL,SALL,GULF,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "difowi01",
		"teams" : "HGR · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "difowi01",
		"teams" : "HRB,POT · EL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "difowi01",
		"teams" : "HRB,GIG,SYR · EL,DOWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "difowi01",
		"teams" : "AGU,SYR · DOWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "zimmery01",
		"teams" : "HRB,PES,SAV · EL,AZFL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "zimmery01",
		"teams" : "CLB,POT · IL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "zimmery01",
		"teams" : "POT,SYR,HGR · CARL,IL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "zimmery01",
		"teams" : "POT · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "zimmery01",
		"teams" : "POT · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "zimmery01",
		"teams" : "HRB · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "zimmery01",
		"teams" : "SYR,POT · IL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "zimmery01",
		"teams" : "HRB,POT · EL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "wietema01",
		"teams" : "HON · HIWB",
		"teamspitcher" : ""
	},
	{
		"player" : "wietema01",
		"teams" : "FDK,BOW,SPS · CARL,EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "wietema01",
		"teams" : "NFK · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "wietema01",
		"teams" : "BOW,NFK · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "wietema01",
		"teams" : "HRB,POT · EL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "shafeju01",
		"teams" : "10.3",
		"teamspitcher" : "VAN NORW"
	},
	{
		"player" : "shafeju01",
		"teams" : "9.2",
		"teamspitcher" : "LNS,DUN,SRV MIDW,FLOR,AZFL"
	},
	{
		"player" : "shafeju01",
		"teams" : "10.5",
		"teamspitcher" : "DUN,MES FLOR,AZFL"
	},
	{
		"player" : "shafeju01",
		"teams" : "6.9",
		"teamspitcher" : "MAN,DUN,BFL EL,FLOR,IL"
	},
	{
		"player" : "shafeju01",
		"teams" : "6.3",
		"teamspitcher" : "BFL,MAN IL,EL"
	},
	{
		"player" : "paulida01",
		"teams" : "4.8",
		"teamspitcher" : "TGR DOSL"
	},
	{
		"player" : "paulida01",
		"teams" : "2.3",
		"teamspitcher" : "LAT GULF"
	},
	{
		"player" : "paulida01",
		"teams" : "7.2",
		"teamspitcher" : "LAT GULF"
	},
	{
		"player" : "paulida01",
		"teams" : "6.5",
		"teamspitcher" : "LNR,DAV,TRC CALL,MIDW,NYPL"
	},
	{
		"player" : "paulida01",
		"teams" : "7.0",
		"teamspitcher" : "CPC,FRE,AST,GLN TL,PCL,GULF,AZFL"
	},
	{
		"player" : "paulida01",
		"teams" : "7.1",
		"teamspitcher" : "FRE PCL"
	},
	{
		"player" : "paulida01",
		"teams" : "7.7",
		"teamspitcher" : "FRE,AST PCL,GULF"
	},
	{
		"player" : "pannoth01",
		"teams" : "12.9",
		"teamspitcher" : "INS ARIZ"
	},
	{
		"player" : "pannoth01",
		"teams" : "6.4",
		"teamspitcher" : "INS ARIZ"
	},
	{
		"player" : "pannoth01",
		"teams" : "7.6",
		"teamspitcher" : "LCO MIDW"
	},
	{
		"player" : "pannoth01",
		"teams" : "7.0",
		"teamspitcher" : "LCO,LBG MIDW,CARL"
	},
	{
		"player" : "pannoth01",
		"teams" : "6.7",
		"teamspitcher" : "AKR,MAN,LBG EL,CARL"
	},
	{
		"player" : "pannoth01",
		"teams" : "10.4",
		"teamspitcher" : "BFL,MAN,DUN IL,EL,FLOR"
	},
	{
		"player" : "guerrta02",
		"teams" : "6.1",
		"teamspitcher" : "HDV NYPL"
	},
	{
		"player" : "guerrta02",
		"teams" : "7.3",
		"teamspitcher" : "BWG MIDW"
	},
	{
		"player" : "guerrta02",
		"teams" : "6.8",
		"teamspitcher" : "DVS GULF"
	},
	{
		"player" : "guerrta02",
		"teams" : "7.5",
		"teamspitcher" : "POE,MTG FLOR,SOUL"
	},
	{
		"player" : "guerrta02",
		"teams" : "8.0",
		"teamspitcher" : "MTG SOUL"
	},
	{
		"player" : "guerrta02",
		"teams" : "6.8",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "guerrta02",
		"teams" : "10.7",
		"teamspitcher" : "BFL IL"
	},
	{
		"player" : "smithmu01",
		"teams" : "9.4",
		"teamspitcher" : "KNC,ATH,VAN MIDW,ARIZ,NORW"
	},
	{
		"player" : "smithmu01",
		"teams" : "10.2",
		"teamspitcher" : "KNC,STK MIDW,CALL"
	},
	{
		"player" : "smithmu01",
		"teams" : "11.2",
		"teamspitcher" : "STK,PHO CALL,AZFL"
	},
	{
		"player" : "smithmu01",
		"teams" : "11.0",
		"teamspitcher" : "MDL TL"
	},
	{
		"player" : "smithmu01",
		"teams" : "9.4",
		"teamspitcher" : "MDL TL"
	},
	{
		"player" : "smithmu01",
		"teams" : "9.6",
		"teamspitcher" : "MDL,JAL TL,MXPW"
	},
	{
		"player" : "smithmu01",
		"teams" : "9.5",
		"teamspitcher" : "DUN,MAN FLOR,EL"
	},
	{
		"player" : "smithmu01",
		"teams" : "6.4",
		"teamspitcher" : "MAN,BFL EL,IL"
	},
	{
		"player" : "smithmu01",
		"teams" : "8.7",
		"teamspitcher" : "BFL,GIG,MAN IL,DOWL,EL"
	},
	{
		"player" : "smithmu01",
		"teams" : "8.8",
		"teamspitcher" : "BFL IL"
	},
	{
		"player" : "drakeol01",
		"teams" : "6.5",
		"teamspitcher" : "BLD,ADN APPY,NYPL"
	},
	{
		"player" : "drakeol01",
		"teams" : "9.5",
		"teamspitcher" : "DEL SALL"
	},
	{
		"player" : "drakeol01",
		"teams" : "9.8",
		"teamspitcher" : "FDK,SCO CARL,AZFL"
	},
	{
		"player" : "drakeol01",
		"teams" : "8.6",
		"teamspitcher" : "FDK,BOW,NFK CARL,EL,IL"
	},
	{
		"player" : "drakeol01",
		"teams" : "4.0",
		"teamspitcher" : "BOW EL"
	},
	{
		"player" : "drakeol01",
		"teams" : "5.5",
		"teamspitcher" : "BOW EL"
	},
	{
		"player" : "drakeol01",
		"teams" : "7.5",
		"teamspitcher" : "BOW,AGU EL,DOWL"
	},
	{
		"player" : "drakeol01",
		"teams" : "4.7",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "drakeol01",
		"teams" : "7.0",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "drakeol01",
		"teams" : "3.5",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "borucry01",
		"teams" : "6.0",
		"teamspitcher" : "BJY GULF"
	},
	{
		"player" : "borucry01",
		"teams" : "6.2",
		"teamspitcher" : "BLD,VAN APPY,NORW"
	},
	{
		"player" : "borucry01",
		"teams" : "11.1",
		"teamspitcher" : "VAN,BJY NORW,GULF"
	},
	{
		"player" : "borucry01",
		"teams" : "9.6",
		"teamspitcher" : "LNS,DUN MIDW,FLOR"
	},
	{
		"player" : "borucry01",
		"teams" : "7.9",
		"teamspitcher" : "DUN,MAN,BFL FLOR,EL,IL"
	},
	{
		"player" : "borucry01",
		"teams" : "7.2",
		"teamspitcher" : "BFL IL"
	},
	{
		"player" : "leitema02",
		"teams" : "6.8",
		"teamspitcher" : "CLR,LWD,CLW GULF,SALL,FLOR"
	},
	{
		"player" : "leitema02",
		"teams" : "9.7",
		"teamspitcher" : "LWD,CLW SALL,FLOR"
	},
	{
		"player" : "leitema02",
		"teams" : "8.5",
		"teamspitcher" : "CLW,REA FLOR,EL"
	},
	{
		"player" : "leitema02",
		"teams" : "7.9",
		"teamspitcher" : "REA EL"
	},
	{
		"player" : "leitema02",
		"teams" : "8.1",
		"teamspitcher" : "LHV IL"
	},
	{
		"player" : "leitema02",
		"teams" : "7.8",
		"teamspitcher" : "LHV,CLW IL,FLOR"
	},
	{
		"player" : "osunaro01",
		"teams" : "11.4",
		"teamspitcher" : "MCD MEX"
	},
	{
		"player" : "osunaro01",
		"teams" : "6.6",
		"teamspitcher" : "BLD,VAN APPY,NORW"
	},
	{
		"player" : "osunaro01",
		"teams" : "8.3",
		"teamspitcher" : "LNS MIDW"
	},
	{
		"player" : "osunaro01",
		"teams" : "12.7",
		"teamspitcher" : "DUN,MES,BJY FLOR,AZFL,GULF"
	},
	{
		"player" : "osunaro01",
		"teams" : "10.3",
		"teamspitcher" : "BFL,DUN,CPC,BJY IL,FLOR,TL,GULF"
	},
	{
		"player" : "rowlech01",
		"teams" : "5.2",
		"teamspitcher" : "BJY GULF"
	},
	{
		"player" : "rowlech01",
		"teams" : "9.3",
		"teamspitcher" : "DUN FLOR"
	},
	{
		"player" : "rowlech01",
		"teams" : "7.2",
		"teamspitcher" : "BFL,MAN IL,EL"
	},
	{
		"player" : "rowlech01",
		"teams" : "8.7",
		"teamspitcher" : "BFL,RRK IL,PCL"
	},
	{
		"player" : "ramirca01",
		"teams" : "8.4",
		"teamspitcher" : "BLD APPY"
	},
	{
		"player" : "ramirca01",
		"teams" : "10.9",
		"teamspitcher" : "LNS,DUN MIDW,FLOR"
	},
	{
		"player" : "ramirca01",
		"teams" : "7.0",
		"teamspitcher" : "DUN FLOR"
	},
	{
		"player" : "ramirca01",
		"teams" : "3.8",
		"teamspitcher" : "MAN,BFL EL,IL"
	},
	{
		"player" : "ramirca01",
		"teams" : "4.7",
		"teamspitcher" : "NVL,GIG,BFL PCL,DOWL,IL"
	},
	{
		"player" : "cumptbr01",
		"teams" : "6.8",
		"teamspitcher" : "SCS NYPL"
	},
	{
		"player" : "cumptbr01",
		"teams" : "9.0",
		"teamspitcher" : "CHL,BDT SALL,FLOR"
	},
	{
		"player" : "cumptbr01",
		"teams" : "8.7",
		"teamspitcher" : "ATO,SCO EL,AZFL"
	},
	{
		"player" : "cumptbr01",
		"teams" : "8.6",
		"teamspitcher" : "INA,ATO IL,EL"
	},
	{
		"player" : "cumptbr01",
		"teams" : "8.7",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "cumptbr01",
		"teams" : "9.9",
		"teamspitcher" : "ATO,BDT,INA EL,FLOR,IL"
	},
	{
		"player" : "cumptbr01",
		"teams" : "10.8",
		"teamspitcher" : "BFL,GIG IL,DOWL"
	},
	{
		"player" : "barneda02",
		"teams" : "8.1",
		"teamspitcher" : "BJY,LNS GULF,MIDW"
	},
	{
		"player" : "barneda02",
		"teams" : "6.0",
		"teamspitcher" : "LNS MIDW"
	},
	{
		"player" : "barneda02",
		"teams" : "6.6",
		"teamspitcher" : "DUN,MAN FLOR,EL"
	},
	{
		"player" : "barneda02",
		"teams" : "15.0",
		"teamspitcher" : "DUN,BJY FLOR,GULF"
	},
	{
		"player" : "barneda02",
		"teams" : "8.1",
		"teamspitcher" : "DUN,CRO FLOR,PRWL"
	},
	{
		"player" : "barneda02",
		"teams" : "9.5",
		"teamspitcher" : "MAN EL"
	},
	{
		"player" : "barneda02",
		"teams" : "3.4",
		"teamspitcher" : "MAN,BFL EL,IL"
	},
	{
		"player" : "barneda02",
		"teams" : "9.0",
		"teamspitcher" : "BFL IL"
	},
	{
		"player" : "barneda02",
		"teams" : "11.2",
		"teamspitcher" : "BFL,BJY IL,GULF"
	},
	{
		"player" : "ohse01",
		"teams" : "4.2",
		"teamspitcher" : "SAM KBO"
	},
	{
		"player" : "ohse01",
		"teams" : "4.9",
		"teamspitcher" : "SAM KBO"
	},
	{
		"player" : "ohse01",
		"teams" : "5.7",
		"teamspitcher" : "SAM KBO"
	},
	{
		"player" : "ohse01",
		"teams" : "5.3",
		"teamspitcher" : "SAM KBO"
	},
	{
		"player" : "ohse01",
		"teams" : "8.0",
		"teamspitcher" : "SAM KBO"
	},
	{
		"player" : "ohse01",
		"teams" : "8.4",
		"teamspitcher" : "SAM KBO"
	},
	{
		"player" : "ohse01",
		"teams" : "4.3",
		"teamspitcher" : "SAM KBO"
	},
	{
		"player" : "ohse01",
		"teams" : "5.3",
		"teamspitcher" : "SAM KBO"
	},
	{
		"player" : "ohse01",
		"teams" : "5.7",
		"teamspitcher" : "SAM KBO"
	},
	{
		"player" : "ohse01",
		"teams" : "5.5",
		"teamspitcher" : "HAN JPCL"
	},
	{
		"player" : "ohse01",
		"teams" : "8.3",
		"teamspitcher" : "HAN JPCL"
	},
	{
		"player" : "cruzrh01",
		"teams" : "10.4",
		"teamspitcher" : "LAT GULF"
	},
	{
		"player" : "cruzrh01",
		"teams" : "11.3",
		"teamspitcher" : "LAT GULF"
	},
	{
		"player" : "cruzrh01",
		"teams" : "4.5",
		"teamspitcher" : "MTS,KPT,MET DOSL,APPY,GULF"
	},
	{
		"player" : "cruzrh01",
		"teams" : "8.1",
		"teamspitcher" : "SAV,BKN SALL,NYPL"
	},
	{
		"player" : "cruzrh01",
		"teams" : "6.3",
		"teamspitcher" : "SAV,GIG SALL,DOWL"
	},
	{
		"player" : "cruzrh01",
		"teams" : "7.4",
		"teamspitcher" : "SCE FLOR"
	},
	{
		"player" : "cruzrh01",
		"teams" : "6.3",
		"teamspitcher" : "BNG,GIG,SCE EL,DOWL,FLOR"
	},
	{
		"player" : "cruzrh01",
		"teams" : "8.0",
		"teamspitcher" : "GIG,OKC,CCS DOWL,PCL,VEWL"
	},
	{
		"player" : "cruzrh01",
		"teams" : "7.8",
		"teamspitcher" : "OKC,GIG PCL,DOWL"
	},
	{
		"player" : "cruzrh01",
		"teams" : "9.7",
		"teamspitcher" : "TOH,OKC JPPL,PCL"
	},
	{
		"player" : "cruzrh01",
		"teams" : "7.3",
		"teamspitcher" : "TOH JPPL"
	},
	{
		"player" : "cruzrh01",
		"teams" : "9.6",
		"teamspitcher" : "GIG,YUC,TRR DOWL,MEX"
	},
	{
		"player" : "cruzrh01",
		"teams" : "7.2",
		"teamspitcher" : "GWI,GIG IL,DOWL"
	},
	{
		"player" : "cruzrh01",
		"teams" : "6.2",
		"teamspitcher" : "BFL IL"
	},
	{
		"player" : "loupaa01",
		"teams" : "9.4",
		"teamspitcher" : "BJY GULF"
	},
	{
		"player" : "loupaa01",
		"teams" : "9.7",
		"teamspitcher" : "LNS MIDW"
	},
	{
		"player" : "loupaa01",
		"teams" : "9.2",
		"teamspitcher" : "DUN,PHO FLOR,AZFL"
	},
	{
		"player" : "loupaa01",
		"teams" : "9.1",
		"teamspitcher" : "MAN EL"
	},
	{
		"player" : "loupaa01",
		"teams" : "13.5",
		"teamspitcher" : "BFL IL"
	},
	{
		"player" : "loupaa01",
		"teams" : "10.0",
		"teamspitcher" : "BFL,DUN IL,FLOR"
	},
	{
		"player" : "santolu01",
		"teams" : "6.2",
		"teamspitcher" : "PIR DOSL"
	},
	{
		"player" : "santolu01",
		"teams" : "6.0",
		"teamspitcher" : "PS2,PIR DOSL"
	},
	{
		"player" : "santolu01",
		"teams" : "6.4",
		"teamspitcher" : "BRL,IDF APPY,PION"
	},
	{
		"player" : "santolu01",
		"teams" : "7.8",
		"teamspitcher" : "WMT,LEX,AZU CARL,SALL,DOWL"
	},
	{
		"player" : "santolu01",
		"teams" : "8.6",
		"teamspitcher" : "DUN,AZU FLOR,DOWL"
	},
	{
		"player" : "santolu01",
		"teams" : "8.9",
		"teamspitcher" : "MAN,DUN,AZU EL,FLOR,DOWL"
	},
	{
		"player" : "santolu01",
		"teams" : "7.6",
		"teamspitcher" : "BFL,AZU,MAN IL,DOWL,EL"
	},
	{
		"player" : "santolu01",
		"teams" : "9.0",
		"teamspitcher" : "BFL,AZU IL,DOWL"
	},
	{
		"player" : "hauscmi01",
		"teams" : "6.5",
		"teamspitcher" : "GRE APPY"
	},
	{
		"player" : "hauscmi01",
		"teams" : "9.4",
		"teamspitcher" : "DAV,LNR MIDW,CALL"
	},
	{
		"player" : "hauscmi01",
		"teams" : "9.1",
		"teamspitcher" : "CPC,LNR TL,CALL"
	},
	{
		"player" : "hauscmi01",
		"teams" : "9.0",
		"teamspitcher" : "FRE,CPC PCL,TL"
	},
	{
		"player" : "hauscmi01",
		"teams" : "8.8",
		"teamspitcher" : "FRE,ESC PCL,DOWL"
	},
	{
		"player" : "hauscmi01",
		"teams" : "8.5",
		"teamspitcher" : "FRE PCL"
	},
	{
		"player" : "hauscmi01",
		"teams" : "10.3",
		"teamspitcher" : "FRE,BFL PCL,IL"
	},
	{
		"player" : "fernajo04",
		"teams" : "7.6",
		"teamspitcher" : "BLJ DOSL"
	},
	{
		"player" : "fernajo04",
		"teams" : "8.6",
		"teamspitcher" : "BJY GULF"
	},
	{
		"player" : "fernajo04",
		"teams" : "10.6",
		"teamspitcher" : "VAN NORW"
	},
	{
		"player" : "fernajo04",
		"teams" : "9.4",
		"teamspitcher" : "LNS MIDW"
	},
	{
		"player" : "fernajo04",
		"teams" : "5.7",
		"teamspitcher" : "DUN,ESS FLOR,DOWL"
	},
	{
		"player" : "fernajo04",
		"teams" : "9.5",
		"teamspitcher" : "MAN,ESS EL,DOWL"
	},
	{
		"player" : "fernajo04",
		"teams" : "6.8",
		"teamspitcher" : "MAN,BFL EL,IL"
	},
	{
		"player" : "guilmpr01",
		"teams" : "9.0",
		"teamspitcher" : "MHV NYPL"
	},
	{
		"player" : "guilmpr01",
		"teams" : "6.1",
		"teamspitcher" : "LCO MIDW"
	},
	{
		"player" : "guilmpr01",
		"teams" : "7.6",
		"teamspitcher" : "KIN,PHO CARL,AZFL"
	},
	{
		"player" : "guilmpr01",
		"teams" : "7.0",
		"teamspitcher" : "AKR EL"
	},
	{
		"player" : "guilmpr01",
		"teams" : "6.0",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "guilmpr01",
		"teams" : "7.8",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "guilmpr01",
		"teams" : "6.6",
		"teamspitcher" : "CSP,DHM,BFL,OKC IL,PCL"
	},
	{
		"player" : "guilmpr01",
		"teams" : "9.2",
		"teamspitcher" : "TOL,AZU IL,DOWL"
	},
	{
		"player" : "guilmpr01",
		"teams" : "8.1",
		"teamspitcher" : "YKU JPCL"
	},
	{
		"player" : "guilmpr01",
		"teams" : "4.3",
		"teamspitcher" : "MEM,BFL PCL,IL"
	},
	{
		"player" : "teperry01",
		"teams" : "4.7",
		"teamspitcher" : "BJY GULF"
	},
	{
		"player" : "teperry01",
		"teams" : "8.5",
		"teamspitcher" : "LNS MIDW"
	},
	{
		"player" : "teperry01",
		"teams" : "9.6",
		"teamspitcher" : "DUN FLOR"
	},
	{
		"player" : "teperry01",
		"teams" : "11.0",
		"teamspitcher" : "MAN,DUN,SRV EL,FLOR,AZFL"
	},
	{
		"player" : "teperry01",
		"teams" : "8.5",
		"teamspitcher" : "MAN EL"
	},
	{
		"player" : "teperry01",
		"teams" : "9.8",
		"teamspitcher" : "BFL,ESC IL,DOWL"
	},
	{
		"player" : "teperry01",
		"teams" : "4.2",
		"teamspitcher" : "BFL IL"
	},
	{
		"player" : "teperry01",
		"teams" : "6.6",
		"teamspitcher" : "BFL IL"
	},
	{
		"player" : "clippty01",
		"teams" : "6.8",
		"teamspitcher" : "YNK GULF"
	},
	{
		"player" : "clippty01",
		"teams" : "9.2",
		"teamspitcher" : "BTC MIDW"
	},
	{
		"player" : "clippty01",
		"teams" : "7.4",
		"teamspitcher" : "TAM,CHS,CLB FLOR,SALL,IL"
	},
	{
		"player" : "clippty01",
		"teams" : "6.4",
		"teamspitcher" : "TRE EL"
	},
	{
		"player" : "clippty01",
		"teams" : "9.8",
		"teamspitcher" : "SWB,TRE IL,EL"
	},
	{
		"player" : "clippty01",
		"teams" : "8.1",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "clippty01",
		"teams" : "4.6",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "gileske01",
		"teams" : "11.6",
		"teamspitcher" : "CLR GULF"
	},
	{
		"player" : "gileske01",
		"teams" : "7.0",
		"teamspitcher" : "LWD,CLW SALL,FLOR"
	},
	{
		"player" : "gileske01",
		"teams" : "7.8",
		"teamspitcher" : "CLW,PEA FLOR,AZFL"
	},
	{
		"player" : "gileske01",
		"teams" : "5.7",
		"teamspitcher" : "REA,LHV EL,IL"
	},
	{
		"player" : "gileske01",
		"teams" : "15.2",
		"teamspitcher" : "FRE PCL"
	},
	{
		"player" : "biagijo01",
		"teams" : "8.7",
		"teamspitcher" : "SLM,AUG NORW,SALL"
	},
	{
		"player" : "biagijo01",
		"teams" : "9.5",
		"teamspitcher" : "AUG SALL"
	},
	{
		"player" : "biagijo01",
		"teams" : "9.4",
		"teamspitcher" : "SJO CALL"
	},
	{
		"player" : "biagijo01",
		"teams" : "7.7",
		"teamspitcher" : "RMD EL"
	},
	{
		"player" : "biagijo01",
		"teams" : "6.8",
		"teamspitcher" : "BFL IL"
	},
	{
		"player" : "biagijo01",
		"teams" : "7.9",
		"teamspitcher" : "BFL IL"
	},
	{
		"player" : "axforjo01",
		"teams" : "7.1",
		"teamspitcher" : "CHS,STI,TAM,SWB SALL,NYPL,FLOR,IL"
	},
	{
		"player" : "axforjo01",
		"teams" : "8.1",
		"teamspitcher" : "BRE FLOR"
	},
	{
		"player" : "axforjo01",
		"teams" : "5.8",
		"teamspitcher" : "NVL,BRE,HVL PCL,FLOR,SOUL"
	},
	{
		"player" : "axforjo01",
		"teams" : "9.5",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "axforjo01",
		"teams" : "5.4",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "mayzati01",
		"teams" : "12.7",
		"teamspitcher" : "BLD,BJY APPY,GULF"
	},
	{
		"player" : "mayzati01",
		"teams" : "12.8",
		"teamspitcher" : "VAN,BLD NORW,APPY"
	},
	{
		"player" : "mayzati01",
		"teams" : "7.9",
		"teamspitcher" : "LNS MIDW"
	},
	{
		"player" : "mayzati01",
		"teams" : "7.7",
		"teamspitcher" : "DUN,MAN,MES FLOR,EL,AZFL"
	},
	{
		"player" : "mayzati01",
		"teams" : "8.2",
		"teamspitcher" : "MAN,BFL EL,IL"
	},
	{
		"player" : "mayzati01",
		"teams" : "9.1",
		"teamspitcher" : "BFL IL"
	},
	{
		"player" : "petrija01",
		"teams" : "7.7",
		"teamspitcher" : "BRS,KAN APPY,SALL"
	},
	{
		"player" : "petrija01",
		"teams" : "9.0",
		"teamspitcher" : "WSM,KAN,MES,BRS CARL,SALL,AZFL,APPY"
	},
	{
		"player" : "petrija01",
		"teams" : "10.0",
		"teamspitcher" : "WSM,BIR CARL,SOUL"
	},
	{
		"player" : "petrija01",
		"teams" : "7.4",
		"teamspitcher" : "BIR,CHR SOUL,IL"
	},
	{
		"player" : "petrija01",
		"teams" : "0.0",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "petrija01",
		"teams" : "7.7",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "petrija01",
		"teams" : "7.8",
		"teamspitcher" : "BFL IL"
	},
	{
		"player" : "mcguide02",
		"teams" : "7.8",
		"teamspitcher" : "DUN,MAN FLOR,EL"
	},
	{
		"player" : "mcguide02",
		"teams" : "9.8",
		"teamspitcher" : "MAN,SRV EL,AZFL"
	},
	{
		"player" : "mcguide02",
		"teams" : "8.5",
		"teamspitcher" : "MAN EL"
	},
	{
		"player" : "mcguide02",
		"teams" : "9.8",
		"teamspitcher" : "MAN,BFL,SAC EL,IL,PCL"
	},
	{
		"player" : "mcguide02",
		"teams" : "8.4",
		"teamspitcher" : "TUL,OKC TL,PCL"
	},
	{
		"player" : "mcguide02",
		"teams" : "8.7",
		"teamspitcher" : "MEM,SPD PCL,TL"
	},
	{
		"player" : "mcguide02",
		"teams" : "6.7",
		"teamspitcher" : "PEN SOUL"
	},
	{
		"player" : "mcguide02",
		"teams" : "7.4",
		"teamspitcher" : "BFL,SLK,RRK IL,PCL"
	},
	{
		"player" : "sanchaa01",
		"teams" : "8.3",
		"teamspitcher" : "BJY,AUB GULF,NYPL"
	},
	{
		"player" : "sanchaa01",
		"teams" : "8.8",
		"teamspitcher" : "BLD,VAN APPY,NORW"
	},
	{
		"player" : "sanchaa01",
		"teams" : "6.4",
		"teamspitcher" : "LNS MIDW"
	},
	{
		"player" : "sanchaa01",
		"teams" : "6.1",
		"teamspitcher" : "DUN,SRV FLOR,AZFL"
	},
	{
		"player" : "sanchaa01",
		"teams" : "7.9",
		"teamspitcher" : "MAN,BFL EL,IL"
	},
	{
		"player" : "sanchaa01",
		"teams" : "11.2",
		"teamspitcher" : "BFL,DUN,BJY IL,FLOR,GULF"
	},
	{
		"player" : "sanchaa01",
		"teams" : "12.4",
		"teamspitcher" : "BFL,DUN IL,FLOR"
	},
	{
		"player" : "sanchaa01",
		"teams" : "10.6",
		"teamspitcher" : "MAN,DUN,BJY EL,FLOR,GULF"
	},
	{
		"player" : "estrama01",
		"teams" : "8.3",
		"teamspitcher" : "VMT NYPL"
	},
	{
		"player" : "estrama01",
		"teams" : "7.8",
		"teamspitcher" : "SAV,WKI,NAT SALL,HIWB,GULF"
	},
	{
		"player" : "estrama01",
		"teams" : "10.6",
		"teamspitcher" : "POT,HGR,NAT CARL,SALL,GULF"
	},
	{
		"player" : "estrama01",
		"teams" : "8.7",
		"teamspitcher" : "HRB,CLB EL,IL"
	},
	{
		"player" : "estrama01",
		"teams" : "8.8",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "estrama01",
		"teams" : "6.8",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "estrama01",
		"teams" : "7.9",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "estrama01",
		"teams" : "15.8",
		"teamspitcher" : "BRR,APP,NVL ARIZ,MIDW,PCL"
	},
	{
		"player" : "estrama01",
		"teams" : "8.1",
		"teamspitcher" : "BFL IL"
	},
	{
		"player" : "stromma01",
		"teams" : "7.4",
		"teamspitcher" : "VAN,MAN NORW,EL"
	},
	{
		"player" : "stromma01",
		"teams" : "7.8",
		"teamspitcher" : "MAN,SRV EL,AZFL"
	},
	{
		"player" : "stromma01",
		"teams" : "8.1",
		"teamspitcher" : "BFL IL"
	},
	{
		"player" : "stromma01",
		"teams" : "9.4",
		"teamspitcher" : "LNS,BFL MIDW,IL"
	},
	{
		"player" : "stromma01",
		"teams" : "2.1",
		"teamspitcher" : "DUN FLOR"
	},
	{
		"player" : "reidfse01",
		"teams" : "8.3",
		"teamspitcher" : "BJY GULF"
	},
	{
		"player" : "reidfse01",
		"teams" : "7.7",
		"teamspitcher" : "LNS,DUN MIDW,FLOR"
	},
	{
		"player" : "reidfse01",
		"teams" : "6.1",
		"teamspitcher" : "LNS,DUN MIDW,FLOR"
	},
	{
		"player" : "reidfse01",
		"teams" : "9.8",
		"teamspitcher" : "MAN EL"
	},
	{
		"player" : "reidfse01",
		"teams" : "7.1",
		"teamspitcher" : "BFL,MAN IL,EL"
	},
	{
		"player" : "gavigsa01",
		"teams" : "4.5",
		"teamspitcher" : "BAT NYPL"
	},
	{
		"player" : "gavigsa01",
		"teams" : "8.7",
		"teamspitcher" : "DAV MIDW"
	},
	{
		"player" : "gavigsa01",
		"teams" : "6.9",
		"teamspitcher" : "PLM,SRV,CDS FLOR,AZFL,GULF"
	},
	{
		"player" : "gavigsa01",
		"teams" : "10.1",
		"teamspitcher" : "SPD TL"
	},
	{
		"player" : "gavigsa01",
		"teams" : "8.3",
		"teamspitcher" : "TAC,GIG,MRE PCL,DOWL,ARIZ"
	},
	{
		"player" : "gavigsa01",
		"teams" : "9.2",
		"teamspitcher" : "WTN,TAC,GIG SOUL,PCL,DOWL"
	},
	{
		"player" : "gavigsa01",
		"teams" : "9.0",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "gavigsa01",
		"teams" : "6.5",
		"teamspitcher" : "BFL IL"
	},
	{
		"player" : "garcija02",
		"teams" : "8.7",
		"teamspitcher" : "DAV,PLM,HRM MIDW,FLOR,MXPW"
	},
	{
		"player" : "garcija02",
		"teams" : "8.1",
		"teamspitcher" : "SPD TL"
	},
	{
		"player" : "garcija02",
		"teams" : "8.5",
		"teamspitcher" : "MEM,SPD PCL,TL"
	},
	{
		"player" : "garcija02",
		"teams" : "6.0",
		"teamspitcher" : "MEM,PLM,CDS PCL,FLOR,GULF"
	},
	{
		"player" : "garcija02",
		"teams" : "8.2",
		"teamspitcher" : "SPD,MEM,CDS TL,PCL,GULF"
	},
	{
		"player" : "garcija02",
		"teams" : "7.7",
		"teamspitcher" : "MEM,SPD PCL,TL"
	},
	{
		"player" : "garcija02",
		"teams" : "7.9",
		"teamspitcher" : "SPD,PEO,MEM TL,MIDW,PCL"
	},
	{
		"player" : "garcija02",
		"teams" : "0.0",
		"teamspitcher" : "DUN FLOR"
	},
	{
		"player" : "happja01",
		"teams" : "5.6",
		"teamspitcher" : "BAT NYPL"
	},
	{
		"player" : "happja01",
		"teams" : "6.9",
		"teamspitcher" : "LWD,REA SALL,EL"
	},
	{
		"player" : "happja01",
		"teams" : "7.3",
		"teamspitcher" : "CLW,REA,PES,SWB FLOR,EL,AZFL,IL"
	},
	{
		"player" : "happja01",
		"teams" : "9.0",
		"teamspitcher" : "OTT IL"
	},
	{
		"player" : "happja01",
		"teams" : "7.7",
		"teamspitcher" : "LHV IL"
	},
	{
		"player" : "happja01",
		"teams" : "11.2",
		"teamspitcher" : "LHV,REA,CLW IL,EL,FLOR"
	},
	{
		"player" : "happja01",
		"teams" : "5.5",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "happja01",
		"teams" : "10.1",
		"teamspitcher" : "BFL,DUN,BJY IL,FLOR,GULF"
	},
	{
		"player" : "happja01",
		"teams" : "7.4",
		"teamspitcher" : "DUN,BFL FLOR,IL"
	},
	{
		"player" : "happja01",
		"teams" : "21.0",
		"teamspitcher" : "DUN FLOR"
	},
	{
		"player" : "sweenda02",
		"teams" : "GRL,OGD · MIDW,PION",
		"teamspitcher" : ""
	},
	{
		"player" : "sweenda02",
		"teams" : "RCU · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "sweenda02",
		"teams" : "CNG,GLN · SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "sweenda02",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "sweenda02",
		"teams" : "LHV · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "sweenda02",
		"teams" : "LOU,OKC · IL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "sweenda02",
		"teams" : "BFL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "pompeda01",
		"teams" : "BJY · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "pompeda01",
		"teams" : "BJY,BLD · GULF,APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "pompeda01",
		"teams" : "VAN,LNS,BLD · NORW,MIDW,APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "pompeda01",
		"teams" : "LNS · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "pompeda01",
		"teams" : "DUN,MAN,MES,BFL · FLOR,EL,AZFL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "pompeda01",
		"teams" : "BFL,MAN,ESC · IL,EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "pompeda01",
		"teams" : "BFL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "pompeda01",
		"teams" : "DUN,BFL · FLOR,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "pompeda01",
		"teams" : "BFL,DUN,MAN,BJY · IL,FLOR,EL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "bertijo01",
		"teams" : "VAN · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "bertijo01",
		"teams" : "LNS,DUN · MIDW,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "bertijo01",
		"teams" : "DUN,CBA · FLOR,AUBL",
		"teamspitcher" : ""
	},
	{
		"player" : "bertijo01",
		"teams" : "MAN,MES · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "bertijo01",
		"teams" : "MAN,BFL · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "bertijo01",
		"teams" : "MAN,BJY,BFL · EL,GULF,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "bertijo01",
		"teams" : "BFL,DUN · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "bertijo01",
		"teams" : "MAN,CLB,BFL · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "ngoepgi01",
		"teams" : "BRD · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "ngoepgi01",
		"teams" : "SCS,BDT · NYPL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "ngoepgi01",
		"teams" : "CHL,BRD · SALL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "ngoepgi01",
		"teams" : "BDT,SCO · FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "ngoepgi01",
		"teams" : "ATO,BDT,SCO · EL,FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "ngoepgi01",
		"teams" : "ATO · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "ngoepgi01",
		"teams" : "ATO,INA · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "ngoepgi01",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "ngoepgi01",
		"teams" : "INA,WVA · IL,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "ngoepgi01",
		"teams" : "BFL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "alforan01",
		"teams" : "BJY · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "alforan01",
		"teams" : "BJY · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "alforan01",
		"teams" : "CBA,BLD,LNS · AUBL,APPY,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "alforan01",
		"teams" : "DUN,LNS · FLOR,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "alforan01",
		"teams" : "DUN,MES · FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "alforan01",
		"teams" : "MAN,JAL,DUN,BFL · EL,MXPW,FLOR,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "alforan01",
		"teams" : "BFL,DUN · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "davisjo05",
		"teams" : "BLD · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "davisjo05",
		"teams" : "VAN,BJY · NORW,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "davisjo05",
		"teams" : "DUN,LNS · FLOR,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "davisjo05",
		"teams" : "DUN,MGZ · FLOR,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "davisjo05",
		"teams" : "MAN,PEA · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "davisjo05",
		"teams" : "MAN,BFL,ESC · EL,IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "drurybr01",
		"teams" : "KIS · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "drurybr01",
		"teams" : "DAN · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "drurybr01",
		"teams" : "ROM · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "drurybr01",
		"teams" : "SBN · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "drurybr01",
		"teams" : "VIS,MOB,SRV · CALL,SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "drurybr01",
		"teams" : "MOB,REN · SOUL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "drurybr01",
		"teams" : "REN · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "drurybr01",
		"teams" : "SWB,TRE · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "mcguire01",
		"teams" : "BRD,JAM · GULF,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "mcguire01",
		"teams" : "CHL · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "mcguire01",
		"teams" : "BDT,GLN · FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "mcguire01",
		"teams" : "ATO,MAN · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "mcguire01",
		"teams" : "MAN,AGU,BJY,DUN · EL,DOWL,GULF,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "mcguire01",
		"teams" : "BFL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "urshegi01",
		"teams" : "IS1,INS · DOSL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "urshegi01",
		"teams" : "MHV · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "urshegi01",
		"teams" : "LCO · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "urshegi01",
		"teams" : "CAR · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "urshegi01",
		"teams" : "AKR · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "urshegi01",
		"teams" : "CLB,ZUL,AKR · IL,VEWL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "urshegi01",
		"teams" : "CLB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "urshegi01",
		"teams" : "CLB,ZUL · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "urshegi01",
		"teams" : "CLB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "urshegi01",
		"teams" : "SWB,BFL,LCY,CLB · DOWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "tellero01",
		"teams" : "BJY · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "tellero01",
		"teams" : "BLD,LNS · APPY,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "tellero01",
		"teams" : "LNS,DUN,SRV · MIDW,FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "tellero01",
		"teams" : "MAN,ESS · EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "tellero01",
		"teams" : "BFL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "tellero01",
		"teams" : "BFL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "smithdw02",
		"teams" : "BLD,VAN · APPY,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "smithdw02",
		"teams" : "LNS · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "smithdw02",
		"teams" : "DUN,MES · FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "smithdw02",
		"teams" : "MAN · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "smithdw02",
		"teams" : "MAN · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "smithdw02",
		"teams" : "BFL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "smithdw02",
		"teams" : "BFL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "pearcst01",
		"teams" : "WPT · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "pearcst01",
		"teams" : "LBG,HCK · CARL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "pearcst01",
		"teams" : "ATO,INA,LBG,USA · EL,IL,CARL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "pearcst01",
		"teams" : "INA,MAZ · IL,MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "pearcst01",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "pearcst01",
		"teams" : "INA,BDT · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "pearcst01",
		"teams" : "INA,BDT,BRD · IL,FLOR,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "pearcst01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "pearcst01",
		"teams" : "FDK,OLS · CARL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "pearcst01",
		"teams" : "OLS,BOW · GULF,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "pearcst01",
		"teams" : "POE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "pearcst01",
		"teams" : "MAN,BFL · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "pearcst01",
		"teams" : "BFL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "janseda01",
		"teams" : "BJY · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "janseda01",
		"teams" : "BLD · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "janseda01",
		"teams" : "LNS,BJY · MIDW,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "janseda01",
		"teams" : "DUN,MES,BJY · FLOR,AZFL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "janseda01",
		"teams" : "MAN,DUN,BFL · EL,FLOR,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "janseda01",
		"teams" : "BFL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "urenari01",
		"teams" : "BLJ,BJY · DOSL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "urenari01",
		"teams" : "BLD,VAN · APPY,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "urenari01",
		"teams" : "LNS,DUN,GIG · MIDW,FLOR,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "urenari01",
		"teams" : "DUN,MAN,GIG · FLOR,EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "urenari01",
		"teams" : "MAN,GIG · EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "urenari01",
		"teams" : "BFL,DUN · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "mckinbi01",
		"teams" : "ATH,VMT · ARIZ,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "mckinbi01",
		"teams" : "STK,DYT · CALL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "mckinbi01",
		"teams" : "KNX,MYR · SOUL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "mckinbi01",
		"teams" : "KNX,TRE · SOUL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "mckinbi01",
		"teams" : "TRE,SWB,SCO · EL,IL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "mckinbi01",
		"teams" : "SWB,BFL,TRE,TAM · IL,EL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "donaljo02",
		"teams" : "BOI,CBZ · NORW,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "donaljo02",
		"teams" : "PEO,STK,PHO · MIDW,CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "donaljo02",
		"teams" : "MDL · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "donaljo02",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "donaljo02",
		"teams" : "SAC,ESC · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "donaljo02",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "donaljo02",
		"teams" : "DUN · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "donaljo02",
		"teams" : "DUN,CLB · FLOR,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "mailelu01",
		"teams" : "HDV · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "mailelu01",
		"teams" : "BWG,SRV · MIDW,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "mailelu01",
		"teams" : "MTG,SPS · SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "mailelu01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "mailelu01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "mailelu01",
		"teams" : "BFL,DUN · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "gurrilo01",
		"teams" : "SNC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "gurrilo01",
		"teams" : "SNC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "gurrilo01",
		"teams" : "SNC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "gurrilo01",
		"teams" : "IDT · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "gurrilo01",
		"teams" : "IDT · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "gurrilo01",
		"teams" : "IDT · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "gurrilo01",
		"teams" : "MAN,PEA,DUN · EL,AZFL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "gurrilo01",
		"teams" : "BFL,MAN · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "grandcu01",
		"teams" : "ONE · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "grandcu01",
		"teams" : "LAK · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "grandcu01",
		"teams" : "ERI,GCN · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "grandcu01",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "grandcu01",
		"teams" : "WMI,TOL · MIDW,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "grandcu01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "grandcu01",
		"teams" : "SWB,TAM,TRE · IL,FLOR,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "moralke01",
		"teams" : "IDT · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "moralke01",
		"teams" : "IDT · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "moralke01",
		"teams" : "IDT · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "moralke01",
		"teams" : "ARK,SPS,RCU · TL,AZFL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "moralke01",
		"teams" : "SLK,GIG · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "moralke01",
		"teams" : "SLK,GIG · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "moralke01",
		"teams" : "SLK,GIG,ANG · PCL,DOWL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "grichra01",
		"teams" : "ANG · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "grichra01",
		"teams" : "CDR,ANG · MIDW,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "grichra01",
		"teams" : "CDR,SBR,ANG · MIDW,CALL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "grichra01",
		"teams" : "SBR,SCO · CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "grichra01",
		"teams" : "ARK · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "grichra01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "grichra01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "grichra01",
		"teams" : "MEM,SPD,PLM · PCL,TL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "grichra01",
		"teams" : "BFL,MAN,DUN · IL,EL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "pillake01",
		"teams" : "BLD · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "pillake01",
		"teams" : "LNS,DUN,SRV · MIDW,FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "pillake01",
		"teams" : "MAN,BFL,ESC · EL,IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "pillake01",
		"teams" : "BFL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "pillake01",
		"teams" : "DUN · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "hernate01",
		"teams" : "ARS · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "hernate01",
		"teams" : "AST,LEX · GULF,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "hernate01",
		"teams" : "DAV,AZU · MIDW,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "hernate01",
		"teams" : "LNR,CPC,AZU · CALL,TL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "hernate01",
		"teams" : "CPC,AZU · TL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "hernate01",
		"teams" : "CPC,FRE,AZU · TL,PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "hernate01",
		"teams" : "FRE,BFL,AZU · PCL,IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "hernate01",
		"teams" : "BFL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "solarya01",
		"teams" : "TWI · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "solarya01",
		"teams" : "TWN · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "solarya01",
		"teams" : "FTM,BEL · FLOR,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "solarya01",
		"teams" : "ARA,TWN,FTM,NBR · VEWL,GULF,FLOR,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "solarya01",
		"teams" : "FTM,NBR,ARA,TWN · FLOR,EL,VEWL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "solarya01",
		"teams" : "NBR,ARA · EL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "solarya01",
		"teams" : "RRK,ARA · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "solarya01",
		"teams" : "RRK,ARA · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "solarya01",
		"teams" : "ARA,SWB · VEWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "solarya01",
		"teams" : "ELP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "solarya01",
		"teams" : "ELP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "diazal02",
		"teams" : "VLC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "diazal02",
		"teams" : "VLC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "diazal02",
		"teams" : "VLC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "diazal02",
		"teams" : "VLC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "diazal02",
		"teams" : "VLC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "diazal02",
		"teams" : "CUL · MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "diazal02",
		"teams" : "SPD,PLM · TL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "diazal02",
		"teams" : "SPD,SPS,MEM · TL,AZFL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "diazal02",
		"teams" : "PLM · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "diazal02",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "diazal02",
		"teams" : "MAN · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "travide01",
		"teams" : "NCH · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "travide01",
		"teams" : "WMI,LAK,MES · MIDW,FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "travide01",
		"teams" : "ERI · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "travide01",
		"teams" : "BFL,MAN · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "travide01",
		"teams" : "BFL,DUN · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "travide01",
		"teams" : "BFL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "smoakju01",
		"teams" : "CLI,PEA,SPS · MIDW,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "smoakju01",
		"teams" : "OKC,FRI,RGS · PCL,TL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "smoakju01",
		"teams" : "TAC,OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "smoakju01",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "smoakju01",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "smoakju01",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "smoakju01",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "martiru01",
		"teams" : "DGR · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "martiru01",
		"teams" : "OGD,SGA · PION,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "martiru01",
		"teams" : "VRO,SCO · FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "martiru01",
		"teams" : "JCK · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "martiru01",
		"teams" : "LVG · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "pelhacd01",
		"teams" : "7.4",
		"teamspitcher" : "RGS ARIZ"
	},
	{
		"player" : "pelhacd01",
		"teams" : "8.5",
		"teamspitcher" : "SPO NORW"
	},
	{
		"player" : "pelhacd01",
		"teams" : "6.8",
		"teamspitcher" : "HCK SALL"
	},
	{
		"player" : "pelhacd01",
		"teams" : "9.1",
		"teamspitcher" : "DWN,FRI,SPS CARL,TL,AZFL"
	},
	{
		"player" : "barneto01",
		"teams" : "9.6",
		"teamspitcher" : "MSO PION"
	},
	{
		"player" : "barneto01",
		"teams" : "9.0",
		"teamspitcher" : "SBN MIDW"
	},
	{
		"player" : "barneto01",
		"teams" : "8.6",
		"teamspitcher" : "MOB,PHO SOUL,AZFL"
	},
	{
		"player" : "barneto01",
		"teams" : "10.1",
		"teamspitcher" : "REN PCL"
	},
	{
		"player" : "barneto01",
		"teams" : "11.2",
		"teamspitcher" : "YKU JPCL"
	},
	{
		"player" : "barneto01",
		"teams" : "8.2",
		"teamspitcher" : "YKU JPCL"
	},
	{
		"player" : "barneto01",
		"teams" : "7.3",
		"teamspitcher" : "YKU JPCL"
	},
	{
		"player" : "barneto01",
		"teams" : "8.0",
		"teamspitcher" : "YKU JPCL"
	},
	{
		"player" : "barneto01",
		"teams" : "7.5",
		"teamspitcher" : "YKU JPCL"
	},
	{
		"player" : "barneto01",
		"teams" : "5.3",
		"teamspitcher" : "YKU JPCL"
	},
	{
		"player" : "barneto01",
		"teams" : "0.0",
		"teamspitcher" : "RRK PCL"
	},
	{
		"player" : "barneto01",
		"teams" : "9.0",
		"teamspitcher" : "FRI TL"
	},
	{
		"player" : "bibenau01",
		"teams" : "6.3",
		"teamspitcher" : "APP,EVR,TAC MIDW,NORW,PCL"
	},
	{
		"player" : "bibenau01",
		"teams" : "9.3",
		"teamspitcher" : "HDS CALL"
	},
	{
		"player" : "bibenau01",
		"teams" : "11.1",
		"teamspitcher" : "HDS,MRE CALL,ARIZ"
	},
	{
		"player" : "bibenau01",
		"teams" : "7.0",
		"teamspitcher" : "PEO MIDW"
	},
	{
		"player" : "bibenau01",
		"teams" : "7.3",
		"teamspitcher" : "KNX,IWA,ZUL SOUL,PCL,VEWL"
	},
	{
		"player" : "bibenau01",
		"teams" : "8.9",
		"teamspitcher" : "IWA,ZUL,KNX PCL,VEWL,SOUL"
	},
	{
		"player" : "bibenau01",
		"teams" : "9.9",
		"teamspitcher" : "ZUL,SYR,HRB,CSP VEWL,IL,EL,PCL"
	},
	{
		"player" : "bibenau01",
		"teams" : "7.2",
		"teamspitcher" : "DUN,MAN,ZUL FLOR,EL,VEWL"
	},
	{
		"player" : "bibenau01",
		"teams" : "8.7",
		"teamspitcher" : "MAN,BFL,AZU EL,IL,DOWL"
	},
	{
		"player" : "bibenau01",
		"teams" : "9.2",
		"teamspitcher" : "MAN,ARA,BFL EL,VEWL,IL"
	},
	{
		"player" : "bibenau01",
		"teams" : "9.1",
		"teamspitcher" : "RRK,ARA PCL,VEWL"
	},
	{
		"player" : "bibenau01",
		"teams" : "8.4",
		"teamspitcher" : "RRK PCL"
	},
	{
		"player" : "bibenau01",
		"teams" : "10.3",
		"teamspitcher" : "RRK PCL"
	},
	{
		"player" : "leclejo01",
		"teams" : "6.6",
		"teamspitcher" : "RNG DOSL"
	},
	{
		"player" : "leclejo01",
		"teams" : "6.2",
		"teamspitcher" : "RNG DOSL"
	},
	{
		"player" : "leclejo01",
		"teams" : "8.1",
		"teamspitcher" : "HCK SALL"
	},
	{
		"player" : "leclejo01",
		"teams" : "5.5",
		"teamspitcher" : "MYR,GIG CARL,DOWL"
	},
	{
		"player" : "leclejo01",
		"teams" : "8.5",
		"teamspitcher" : "FRI TL"
	},
	{
		"player" : "leclejo01",
		"teams" : "5.5",
		"teamspitcher" : "RRK,FRI,GIG PCL,TL,DOWL"
	},
	{
		"player" : "leclejo01",
		"teams" : "2.4",
		"teamspitcher" : "GIG,FRI DOWL,TL"
	},
	{
		"player" : "leclejo01",
		"teams" : "5.8",
		"teamspitcher" : "RRK PCL"
	},
	{
		"player" : "martich02",
		"teams" : "6.9",
		"teamspitcher" : "SAL,GRV,PRT CARL,SALL,EL"
	},
	{
		"player" : "martich02",
		"teams" : "9.4",
		"teamspitcher" : "PRT,SPS EL,AZFL"
	},
	{
		"player" : "martich02",
		"teams" : "7.1",
		"teamspitcher" : "PAW,PRT,ESC IL,EL,DOWL"
	},
	{
		"player" : "martich02",
		"teams" : "11.1",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "martich02",
		"teams" : "8.3",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "martich02",
		"teams" : "4.4",
		"teamspitcher" : "NPN JPPL"
	},
	{
		"player" : "martich02",
		"teams" : "5.0",
		"teamspitcher" : "NPN JPPL"
	},
	{
		"player" : "martich02",
		"teams" : "12.0",
		"teamspitcher" : "FRI,RRK TL,PCL"
	},
	{
		"player" : "rodriri04",
		"teams" : "9.5",
		"teamspitcher" : "RNG DOSL"
	},
	{
		"player" : "rodriri04",
		"teams" : "8.8",
		"teamspitcher" : "RNG DOSL"
	},
	{
		"player" : "rodriri04",
		"teams" : "8.7",
		"teamspitcher" : "RGS,SPO,RNG ARIZ,NORW,DOSL"
	},
	{
		"player" : "rodriri04",
		"teams" : "8.9",
		"teamspitcher" : "HCK SALL"
	},
	{
		"player" : "rodriri04",
		"teams" : "10.8",
		"teamspitcher" : "HCK,RRK SALL,PCL"
	},
	{
		"player" : "rodriri04",
		"teams" : "4.6",
		"teamspitcher" : "DWN,FRI CARL,TL"
	},
	{
		"player" : "rodriri04",
		"teams" : "6.9",
		"teamspitcher" : "RRK,FRI PCL,TL"
	},
	{
		"player" : "diekmja01",
		"teams" : "6.6",
		"teamspitcher" : "CLR,WPT GULF,NYPL"
	},
	{
		"player" : "diekmja01",
		"teams" : "10.3",
		"teamspitcher" : "LWD,WPT SALL,NYPL"
	},
	{
		"player" : "diekmja01",
		"teams" : "9.5",
		"teamspitcher" : "LWD SALL"
	},
	{
		"player" : "diekmja01",
		"teams" : "7.9",
		"teamspitcher" : "CLW,LWD,MES FLOR,SALL,AZFL"
	},
	{
		"player" : "diekmja01",
		"teams" : "5.9",
		"teamspitcher" : "REA,SCO EL,AZFL"
	},
	{
		"player" : "diekmja01",
		"teams" : "6.4",
		"teamspitcher" : "LHV IL"
	},
	{
		"player" : "diekmja01",
		"teams" : "9.3",
		"teamspitcher" : "LHV IL"
	},
	{
		"player" : "diekmja01",
		"teams" : "6.4",
		"teamspitcher" : "LHV IL"
	},
	{
		"player" : "diekmja01",
		"teams" : "4.3",
		"teamspitcher" : "FRI,RRK TL,PCL"
	},
	{
		"player" : "gardeni01",
		"teams" : "6.4",
		"teamspitcher" : "RGS ARIZ"
	},
	{
		"player" : "gardeni01",
		"teams" : "7.8",
		"teamspitcher" : "SPO NORW"
	},
	{
		"player" : "gardeni01",
		"teams" : "10.4",
		"teamspitcher" : "HCK SALL"
	},
	{
		"player" : "gardeni01",
		"teams" : "6.4",
		"teamspitcher" : "HDS CALL"
	},
	{
		"player" : "gardeni01",
		"teams" : "8.6",
		"teamspitcher" : "FRI TL"
	},
	{
		"player" : "gardeni01",
		"teams" : "10.9",
		"teamspitcher" : "RRK PCL"
	},
	{
		"player" : "moorema02",
		"teams" : "5.3",
		"teamspitcher" : "PRI APPY"
	},
	{
		"player" : "moorema02",
		"teams" : "5.0",
		"teamspitcher" : "PRI APPY"
	},
	{
		"player" : "moorema02",
		"teams" : "6.3",
		"teamspitcher" : "BWG SALL"
	},
	{
		"player" : "moorema02",
		"teams" : "6.8",
		"teamspitcher" : "POE FLOR"
	},
	{
		"player" : "moorema02",
		"teams" : "5.9",
		"teamspitcher" : "MTG,DHM SOUL,IL"
	},
	{
		"player" : "moorema02",
		"teams" : "18.0",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "moorema02",
		"teams" : "7.7",
		"teamspitcher" : "DHM,POE IL,FLOR"
	},
	{
		"player" : "curtiza01",
		"teams" : "6.0",
		"teamspitcher" : "HIL NORW"
	},
	{
		"player" : "curtiza01",
		"teams" : "5.5",
		"teamspitcher" : "KNC MIDW"
	},
	{
		"player" : "curtiza01",
		"teams" : "8.7",
		"teamspitcher" : "MOB,VIS SOUL,CALL"
	},
	{
		"player" : "curtiza01",
		"teams" : "7.8",
		"teamspitcher" : "ARK,LCY TL,DOWL"
	},
	{
		"player" : "curtiza01",
		"teams" : "6.0",
		"teamspitcher" : "LHV,RRK IL,PCL"
	},
	{
		"player" : "sprinje01",
		"teams" : "6.1",
		"teamspitcher" : "SPO,HCK NORW,SALL"
	},
	{
		"player" : "sprinje01",
		"teams" : "7.1",
		"teamspitcher" : "HDS,HCK CALL,SALL"
	},
	{
		"player" : "sprinje01",
		"teams" : "8.3",
		"teamspitcher" : "DWN CARL"
	},
	{
		"player" : "sprinje01",
		"teams" : "8.1",
		"teamspitcher" : "FRI,RRK TL,PCL"
	},
	{
		"player" : "bushma01",
		"teams" : "5.9",
		"teamspitcher" : "PDS,FWA ARIZ,MIDW"
	},
	{
		"player" : "bushma01",
		"teams" : "5.9",
		"teamspitcher" : "POE,DVS FLOR,GULF"
	},
	{
		"player" : "bushma01",
		"teams" : "8.6",
		"teamspitcher" : "MTG SOUL"
	},
	{
		"player" : "bushma01",
		"teams" : "4.8",
		"teamspitcher" : "FRI TL"
	},
	{
		"player" : "bushma01",
		"teams" : "9.0",
		"teamspitcher" : "RRK PCL"
	},
	{
		"player" : "mannbr01",
		"teams" : "7.9",
		"teamspitcher" : "PRI APPY"
	},
	{
		"player" : "mannbr01",
		"teams" : "8.5",
		"teamspitcher" : "PRI,HDV APPY,NYPL"
	},
	{
		"player" : "mannbr01",
		"teams" : "8.4",
		"teamspitcher" : "HDV NYPL"
	},
	{
		"player" : "mannbr01",
		"teams" : "8.6",
		"teamspitcher" : "BTC MIDW"
	},
	{
		"player" : "mannbr01",
		"teams" : "9.5",
		"teamspitcher" : "VIS CALL"
	},
	{
		"player" : "mannbr01",
		"teams" : "9.9",
		"teamspitcher" : "VRO FLOR"
	},
	{
		"player" : "mannbr01",
		"teams" : "9.6",
		"teamspitcher" : "MTG SOUL"
	},
	{
		"player" : "mannbr01",
		"teams" : "11.8",
		"teamspitcher" : "SBR CALL"
	},
	{
		"player" : "mannbr01",
		"teams" : "7.3",
		"teamspitcher" : "YKO JPCL"
	},
	{
		"player" : "mannbr01",
		"teams" : "8.6",
		"teamspitcher" : "YKO JPCL"
	},
	{
		"player" : "mannbr01",
		"teams" : "8.7",
		"teamspitcher" : "ATO EL"
	},
	{
		"player" : "mannbr01",
		"teams" : "8.8",
		"teamspitcher" : "MDL,NVL,ATH TL,PCL,ARIZ"
	},
	{
		"player" : "mannbr01",
		"teams" : "7.9",
		"teamspitcher" : "MDL TL"
	},
	{
		"player" : "mannbr01",
		"teams" : "6.4",
		"teamspitcher" : "RRK PCL"
	},
	{
		"player" : "sampsad01",
		"teams" : "8.0",
		"teamspitcher" : "SCS NYPL"
	},
	{
		"player" : "sampsad01",
		"teams" : "11.4",
		"teamspitcher" : "BDT FLOR"
	},
	{
		"player" : "sampsad01",
		"teams" : "8.2",
		"teamspitcher" : "ATO,INA,SCO EL,IL,AZFL"
	},
	{
		"player" : "sampsad01",
		"teams" : "10.9",
		"teamspitcher" : "INA,TAC IL,PCL"
	},
	{
		"player" : "sampsad01",
		"teams" : "9.1",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "sampsad01",
		"teams" : "9.8",
		"teamspitcher" : "RGS,RRK,DWN ARIZ,PCL,CARL"
	},
	{
		"player" : "sampsad01",
		"teams" : "9.7",
		"teamspitcher" : "RRK PCL"
	},
	{
		"player" : "kelake01",
		"teams" : "3.2",
		"teamspitcher" : "RGS ARIZ"
	},
	{
		"player" : "kelake01",
		"teams" : "8.7",
		"teamspitcher" : "HCK,SPO,SPS,MGL,RGS SALL,NORW,AZFL,VEWL,ARIZ"
	},
	{
		"player" : "kelake01",
		"teams" : "5.7",
		"teamspitcher" : "FRI,MYR TL,CARL"
	},
	{
		"player" : "kelake01",
		"teams" : "4.5",
		"teamspitcher" : "FRI TL"
	},
	{
		"player" : "kelake01",
		"teams" : "4.5",
		"teamspitcher" : "FRI,RRK TL,PCL"
	},
	{
		"player" : "kelake01",
		"teams" : "11.3",
		"teamspitcher" : "RRK PCL"
	},
	{
		"player" : "sadzeco01",
		"teams" : "6.4",
		"teamspitcher" : "SPO NORW"
	},
	{
		"player" : "sadzeco01",
		"teams" : "7.0",
		"teamspitcher" : "HCK SALL"
	},
	{
		"player" : "sadzeco01",
		"teams" : "8.8",
		"teamspitcher" : "HDS,FRI,SPS CALL,TL,AZFL"
	},
	{
		"player" : "sadzeco01",
		"teams" : "8.1",
		"teamspitcher" : "FRI TL"
	},
	{
		"player" : "sadzeco01",
		"teams" : "10.0",
		"teamspitcher" : "FRI TL"
	},
	{
		"player" : "sadzeco01",
		"teams" : "8.2",
		"teamspitcher" : "RRK,RGS,LCY PCL,ARIZ,DOWL"
	},
	{
		"player" : "claudal01",
		"teams" : "8.7",
		"teamspitcher" : "PCE,RGS PRWL,ARIZ"
	},
	{
		"player" : "claudal01",
		"teams" : "7.1",
		"teamspitcher" : "RGS,PCE,SPO ARIZ,PRWL,NORW"
	},
	{
		"player" : "claudal01",
		"teams" : "8.4",
		"teamspitcher" : "RGS,PCE ARIZ,PRWL"
	},
	{
		"player" : "claudal01",
		"teams" : "6.2",
		"teamspitcher" : "HCK,FRI,PCE SALL,TL,PRWL"
	},
	{
		"player" : "claudal01",
		"teams" : "7.5",
		"teamspitcher" : "MYR,FRI,MGZ,RRK CARL,TL,PRWL,PCL"
	},
	{
		"player" : "claudal01",
		"teams" : "9.2",
		"teamspitcher" : "RRK,MGZ PCL,PRWL"
	},
	{
		"player" : "claudal01",
		"teams" : "5.7",
		"teamspitcher" : "RRK,MGZ PCL,PRWL"
	},
	{
		"player" : "claudal01",
		"teams" : "3.0",
		"teamspitcher" : "MGZ PRWL"
	},
	{
		"player" : "fistedo01",
		"teams" : "7.9",
		"teamspitcher" : "EVR NORW"
	},
	{
		"player" : "fistedo01",
		"teams" : "10.7",
		"teamspitcher" : "WTN SOUL"
	},
	{
		"player" : "fistedo01",
		"teams" : "10.3",
		"teamspitcher" : "WTN,PEA SOUL,AZFL"
	},
	{
		"player" : "fistedo01",
		"teams" : "10.8",
		"teamspitcher" : "TAC,WTN PCL,SOUL"
	},
	{
		"player" : "fistedo01",
		"teams" : "9.0",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "fistedo01",
		"teams" : "4.5",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "fistedo01",
		"teams" : "9.4",
		"teamspitcher" : "POT,HRB CARL,EL"
	},
	{
		"player" : "fistedo01",
		"teams" : "8.4",
		"teamspitcher" : "HRB,SYR EL,IL"
	},
	{
		"player" : "fistedo01",
		"teams" : "9.2",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "jepseke01",
		"teams" : "9.9",
		"teamspitcher" : "ANG ARIZ"
	},
	{
		"player" : "jepseke01",
		"teams" : "5.6",
		"teamspitcher" : "CDR MIDW"
	},
	{
		"player" : "jepseke01",
		"teams" : "7.6",
		"teamspitcher" : "CDR MIDW"
	},
	{
		"player" : "jepseke01",
		"teams" : "8.9",
		"teamspitcher" : "ANG,RCU ARIZ,CALL"
	},
	{
		"player" : "jepseke01",
		"teams" : "9.1",
		"teamspitcher" : "RCU CALL"
	},
	{
		"player" : "jepseke01",
		"teams" : "10.2",
		"teamspitcher" : "RCU CALL"
	},
	{
		"player" : "jepseke01",
		"teams" : "6.4",
		"teamspitcher" : "ARK,SLK TL,PCL"
	},
	{
		"player" : "jepseke01",
		"teams" : "15.0",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "jepseke01",
		"teams" : "10.2",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "jepseke01",
		"teams" : "6.5",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "jepseke01",
		"teams" : "6.0",
		"teamspitcher" : "SLK,SBR PCL,CALL"
	},
	{
		"player" : "jepseke01",
		"teams" : "8.4",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "butleed01",
		"teams" : "7.8",
		"teamspitcher" : "GRJ PION"
	},
	{
		"player" : "butleed01",
		"teams" : "5.8",
		"teamspitcher" : "MOD,AVL,TUL CALL,SALL,TL"
	},
	{
		"player" : "butleed01",
		"teams" : "8.7",
		"teamspitcher" : "TUL,CSP,MOD TL,PCL,CALL"
	},
	{
		"player" : "butleed01",
		"teams" : "10.1",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "butleed01",
		"teams" : "9.4",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "butleed01",
		"teams" : "9.7",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "butleed01",
		"teams" : "14.2",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "gearrco01",
		"teams" : "7.2",
		"teamspitcher" : "DAN APPY"
	},
	{
		"player" : "gearrco01",
		"teams" : "7.4",
		"teamspitcher" : "MYR,ROM CARL,SALL"
	},
	{
		"player" : "gearrco01",
		"teams" : "6.8",
		"teamspitcher" : "MYR,MSS CARL,SOUL"
	},
	{
		"player" : "gearrco01",
		"teams" : "8.0",
		"teamspitcher" : "GWI,PHO IL,AZFL"
	},
	{
		"player" : "gearrco01",
		"teams" : "7.6",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "gearrco01",
		"teams" : "7.1",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "gearrco01",
		"teams" : "8.0",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "gearrco01",
		"teams" : "5.6",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "chaveje01",
		"teams" : "10.2",
		"teamspitcher" : "SPO NORW"
	},
	{
		"player" : "chaveje01",
		"teams" : "10.8",
		"teamspitcher" : "CLI MIDW"
	},
	{
		"player" : "chaveje01",
		"teams" : "9.6",
		"teamspitcher" : "FRI,BAK TL,CALL"
	},
	{
		"player" : "chaveje01",
		"teams" : "7.9",
		"teamspitcher" : "FRI,INA,GCN,OKC TL,IL,AZFL,PCL"
	},
	{
		"player" : "chaveje01",
		"teams" : "11.1",
		"teamspitcher" : "INA,PHO IL,AZFL"
	},
	{
		"player" : "chaveje01",
		"teams" : "7.9",
		"teamspitcher" : "INA,GIG IL,DOWL"
	},
	{
		"player" : "chaveje01",
		"teams" : "10.0",
		"teamspitcher" : "OMA,CUL PCL,MXPW"
	},
	{
		"player" : "chaveje01",
		"teams" : "8.4",
		"teamspitcher" : "LVG,SAC PCL"
	},
	{
		"player" : "chaveje01",
		"teams" : "10.5",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "juradar01",
		"teams" : "8.8",
		"teamspitcher" : "RNG DOSL"
	},
	{
		"player" : "juradar01",
		"teams" : "8.1",
		"teamspitcher" : "RGS ARIZ"
	},
	{
		"player" : "juradar01",
		"teams" : "8.4",
		"teamspitcher" : "HCK SALL"
	},
	{
		"player" : "juradar01",
		"teams" : "9.4",
		"teamspitcher" : "HDS,FRI,MGL CALL,TL,VEWL"
	},
	{
		"player" : "juradar01",
		"teams" : "10.8",
		"teamspitcher" : "FRI TL"
	},
	{
		"player" : "juradar01",
		"teams" : "9.5",
		"teamspitcher" : "FRI TL"
	},
	{
		"player" : "hutchdr01",
		"teams" : "6.7",
		"teamspitcher" : "AUB,LNS NYPL,MIDW"
	},
	{
		"player" : "hutchdr01",
		"teams" : "7.2",
		"teamspitcher" : "LNS,DUN,MAN MIDW,FLOR,EL"
	},
	{
		"player" : "hutchdr01",
		"teams" : "8.6",
		"teamspitcher" : "MAN EL"
	},
	{
		"player" : "hutchdr01",
		"teams" : "8.5",
		"teamspitcher" : "SRV,BFL,DUN,MAN AZFL,IL,FLOR,EL"
	},
	{
		"player" : "hutchdr01",
		"teams" : "6.8",
		"teamspitcher" : "BFL IL"
	},
	{
		"player" : "hutchdr01",
		"teams" : "7.5",
		"teamspitcher" : "BFL,INA IL"
	},
	{
		"player" : "hutchdr01",
		"teams" : "8.4",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "hutchdr01",
		"teams" : "8.1",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "hamelco01",
		"teams" : "5.4",
		"teamspitcher" : "LWD,CLW SALL,FLOR"
	},
	{
		"player" : "hamelco01",
		"teams" : "5.6",
		"teamspitcher" : "CLW FLOR"
	},
	{
		"player" : "hamelco01",
		"teams" : "4.4",
		"teamspitcher" : "REA,CLW EL,FLOR"
	},
	{
		"player" : "hamelco01",
		"teams" : "5.3",
		"teamspitcher" : "SWB,CLW,LWD IL,FLOR,SALL"
	},
	{
		"player" : "hamelco01",
		"teams" : "6.4",
		"teamspitcher" : "CLW FLOR"
	},
	{
		"player" : "hamelco01",
		"teams" : "3.1",
		"teamspitcher" : "FRI TL"
	},
	{
		"player" : "mendeyo01",
		"teams" : "7.1",
		"teamspitcher" : "RNG DOSL"
	},
	{
		"player" : "mendeyo01",
		"teams" : "8.4",
		"teamspitcher" : "SPO NORW"
	},
	{
		"player" : "mendeyo01",
		"teams" : "8.3",
		"teamspitcher" : "HCK,RGS SALL,ARIZ"
	},
	{
		"player" : "mendeyo01",
		"teams" : "8.3",
		"teamspitcher" : "HCK,MGL SALL,VEWL"
	},
	{
		"player" : "mendeyo01",
		"teams" : "5.8",
		"teamspitcher" : "FRI,HDS,RRK TL,CALL,PCL"
	},
	{
		"player" : "mendeyo01",
		"teams" : "7.5",
		"teamspitcher" : "FRI TL"
	},
	{
		"player" : "mendeyo01",
		"teams" : "9.3",
		"teamspitcher" : "RRK,FRI,DWN,MGL PCL,TL,CARL,VEWL"
	},
	{
		"player" : "gallayo01",
		"teams" : "8.8",
		"teamspitcher" : "BRR,BEL ARIZ,MIDW"
	},
	{
		"player" : "gallayo01",
		"teams" : "7.4",
		"teamspitcher" : "CHL SALL"
	},
	{
		"player" : "gallayo01",
		"teams" : "6.0",
		"teamspitcher" : "BRE,HVL FLOR,SOUL"
	},
	{
		"player" : "gallayo01",
		"teams" : "6.1",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "gallayo01",
		"teams" : "11.5",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "gallayo01",
		"teams" : "8.3",
		"teamspitcher" : "NFK,FDK IL,CARL"
	},
	{
		"player" : "gallayo01",
		"teams" : "8.9",
		"teamspitcher" : "RRK PCL"
	},
	{
		"player" : "perezma02",
		"teams" : "9.6",
		"teamspitcher" : "SPO NORW"
	},
	{
		"player" : "perezma02",
		"teams" : "8.7",
		"teamspitcher" : "HCK,FRI SALL,TL"
	},
	{
		"player" : "perezma02",
		"teams" : "10.7",
		"teamspitcher" : "FRI,MGL TL,VEWL"
	},
	{
		"player" : "perezma02",
		"teams" : "10.0",
		"teamspitcher" : "FRI,RRK TL,PCL"
	},
	{
		"player" : "perezma02",
		"teams" : "8.6",
		"teamspitcher" : "RRK PCL"
	},
	{
		"player" : "perezma02",
		"teams" : "8.9",
		"teamspitcher" : "RRK,FRI PCL,TL"
	},
	{
		"player" : "perezma02",
		"teams" : "11.9",
		"teamspitcher" : "RRK,FRI PCL,TL"
	},
	{
		"player" : "perezma02",
		"teams" : "5.2",
		"teamspitcher" : "RRK,FRI,HCK PCL,TL,SALL"
	},
	{
		"player" : "minormi01",
		"teams" : "9.7",
		"teamspitcher" : "PES,ROM AZFL,SALL"
	},
	{
		"player" : "minormi01",
		"teams" : "7.0",
		"teamspitcher" : "MSS,GWI SOUL,IL"
	},
	{
		"player" : "minormi01",
		"teams" : "8.3",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "minormi01",
		"teams" : "8.1",
		"teamspitcher" : "MSS,GWI,ROM SOUL,IL,SALL"
	},
	{
		"player" : "minormi01",
		"teams" : "9.1",
		"teamspitcher" : "OMA,NTA PCL,TL"
	},
	{
		"player" : "colonba01",
		"teams" : "6.3",
		"teamspitcher" : "BRL APPY"
	},
	{
		"player" : "colonba01",
		"teams" : "6.4",
		"teamspitcher" : "KIN CARL"
	},
	{
		"player" : "colonba01",
		"teams" : "7.0",
		"teamspitcher" : "CAK,BFL EL,AA"
	},
	{
		"player" : "colonba01",
		"teams" : "7.1",
		"teamspitcher" : "BFL AA"
	},
	{
		"player" : "colonba01",
		"teams" : "10.8",
		"teamspitcher" : "BFL IL"
	},
	{
		"player" : "colonba01",
		"teams" : "9.2",
		"teamspitcher" : "SLK,RCU PCL,CALL"
	},
	{
		"player" : "colonba01",
		"teams" : "6.3",
		"teamspitcher" : "SLK,RCU,AGU PCL,CALL,DOWL"
	},
	{
		"player" : "colonba01",
		"teams" : "6.5",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "colonba01",
		"teams" : "9.6",
		"teamspitcher" : "CHR,KAN,AGU IL,SALL,DOWL"
	},
	{
		"player" : "colonba01",
		"teams" : "8.4",
		"teamspitcher" : "AGU DOWL"
	},
	{
		"player" : "colonba01",
		"teams" : "10.5",
		"teamspitcher" : "AGU DOWL"
	},
	{
		"player" : "colonba01",
		"teams" : "9.8",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "trevijo01",
		"teams" : "SPO · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "trevijo01",
		"teams" : "HCK,SPS · SALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "trevijo01",
		"teams" : "HDS,SPS · CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "trevijo01",
		"teams" : "FRI · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "trevijo01",
		"teams" : "FRI · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "alberha01",
		"teams" : "RNG · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "alberha01",
		"teams" : "SPO · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "alberha01",
		"teams" : "MYR,HCK,SPS,GIG · CARL,SALL,AZFL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "alberha01",
		"teams" : "FRI,MYR,GIG · TL,CARL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "alberha01",
		"teams" : "MYR,FRI,GIG · CARL,TL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "alberha01",
		"teams" : "RRK,GIG · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "alberha01",
		"teams" : "RRK,GIG · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "alberha01",
		"teams" : "GIG,FRI,RRK · DOWL,TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "alberha01",
		"teams" : "RRK,GIG · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "centeju01",
		"teams" : "MET · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "centeju01",
		"teams" : "MET,CRO · GULF,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "centeju01",
		"teams" : "BKN · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "centeju01",
		"teams" : "BKN,SCE,BNG · NYPL,FLOR,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "centeju01",
		"teams" : "SCE,PEA · FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "centeju01",
		"teams" : "BNG,MTI · EL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "centeju01",
		"teams" : "LVG,CRO,BNG · PCL,PRWL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "centeju01",
		"teams" : "LVG,BNG,SAJ · PCL,EL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "centeju01",
		"teams" : "CSP,SNT,CGU · PCL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "centeju01",
		"teams" : "AGU,ROC · PRWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "centeju01",
		"teams" : "FRE · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "centeju01",
		"teams" : "RRK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "nunezre01",
		"teams" : "AT1 · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "nunezre01",
		"teams" : "ATH · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "nunezre01",
		"teams" : "BEL · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "nunezre01",
		"teams" : "STK,ARA · CALL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "nunezre01",
		"teams" : "MDL,MES · TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "nunezre01",
		"teams" : "NVL,ARA · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "nunezre01",
		"teams" : "NVL,ARA · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "nunezre01",
		"teams" : "NFK,NVL · IL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezca02",
		"teams" : "BLJ · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezca02",
		"teams" : "BJY · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "perezca02",
		"teams" : "AUB · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezca02",
		"teams" : "LNS,CCS · MIDW,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezca02",
		"teams" : "LNS,LNR · MIDW,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezca02",
		"teams" : "OKC,CCS,CPC · PCL,VEWL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezca02",
		"teams" : "OKC,CCS · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezca02",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezca02",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezca02",
		"teams" : "SLK,CCS · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezca02",
		"teams" : "RRK,FRI · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "calhowi01",
		"teams" : "OGD,RCU,GRL · PION,CALL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "calhowi01",
		"teams" : "TUL,GLN · TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "calhowi01",
		"teams" : "OKC,RRK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "calhowi01",
		"teams" : "RRK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "robindr01",
		"teams" : "RGS · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "robindr01",
		"teams" : "SPO,RGS · NORW,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "robindr01",
		"teams" : "HCK · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "robindr01",
		"teams" : "MYR · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "robindr01",
		"teams" : "FRI,RRK · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "robindr01",
		"teams" : "FRI,MGZ,RRK · TL,PRWL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "robindr01",
		"teams" : "RRK,MGL,AGU · PCL,VEWL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "robindr01",
		"teams" : "RRK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "robindr01",
		"teams" : "RRK,FRI · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "toccica01",
		"teams" : "CLR · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "toccica01",
		"teams" : "LWD · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "toccica01",
		"teams" : "LWD · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "toccica01",
		"teams" : "CLW,LWD,ARA · FLOR,SALL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "toccica01",
		"teams" : "CLW,ARA · FLOR,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "toccica01",
		"teams" : "REA,ARA,LHV · EL,VEWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "toccica01",
		"teams" : "RRK,FRI · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "ruary01",
		"teams" : "RGS,SPO · ARIZ,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "ruary01",
		"teams" : "SPO · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "ruary01",
		"teams" : "HCK,FRI,SPS · SALL,TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "ruary01",
		"teams" : "FRI,RRK · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "ruary01",
		"teams" : "RRK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "ruary01",
		"teams" : "RRK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "ruary01",
		"teams" : "RRK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "ruary01",
		"teams" : "RRK,FRI · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "kineris01",
		"teams" : "RGS · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "kineris01",
		"teams" : "SPO,HCK,RGS · NORW,SALL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "kineris01",
		"teams" : "HDS,HCK · CALL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "kineris01",
		"teams" : "FRI,SPS,RGS · TL,AZFL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "kineris01",
		"teams" : "FRI · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "kineris01",
		"teams" : "RRK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "profaju01",
		"teams" : "SPO · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "profaju01",
		"teams" : "HCK · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "profaju01",
		"teams" : "FRI,LCY · TL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "profaju01",
		"teams" : "RRK,LCY · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "profaju01",
		"teams" : "SPS,HCK,FRI · AZFL,SALL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "profaju01",
		"teams" : "RRK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "profaju01",
		"teams" : "RRK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "choosh01",
		"teams" : "MRE,APP · ARIZ,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "choosh01",
		"teams" : "APP,SBR · MIDW,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "choosh01",
		"teams" : "SBR · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "choosh01",
		"teams" : "SAN,PEA · TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "choosh01",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "choosh01",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "choosh01",
		"teams" : "BFL,INS · IL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "choosh01",
		"teams" : "BFL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "choosh01",
		"teams" : "AKR · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "choosh01",
		"teams" : "LCO · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "choosh01",
		"teams" : "FRI,RRK · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "mazarno01",
		"teams" : "RGS · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "mazarno01",
		"teams" : "HCK · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "mazarno01",
		"teams" : "HCK,FRI,LCY · SALL,TL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "mazarno01",
		"teams" : "FRI,RRK · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "mazarno01",
		"teams" : "RRK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "mazarno01",
		"teams" : "RRK,FRI · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "deshide02",
		"teams" : "GRE,AST · APPY,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "deshide02",
		"teams" : "LEX · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "deshide02",
		"teams" : "LEX,LNR · SALL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "deshide02",
		"teams" : "LNR,PEA · CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "deshide02",
		"teams" : "CPC,SNT · TL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "deshide02",
		"teams" : "RRK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "deshide02",
		"teams" : "RRK,OBR · PCL,MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "deshide02",
		"teams" : "FRI,RRK · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "gallojo01",
		"teams" : "RGS,SPO · ARIZ,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "gallojo01",
		"teams" : "HCK,RGS · SALL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "gallojo01",
		"teams" : "FRI,MYR · TL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "gallojo01",
		"teams" : "RRK,FRI · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "gallojo01",
		"teams" : "RRK,MGL · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "beltrad01",
		"teams" : "SAV,SBR · SALL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "beltrad01",
		"teams" : "VRO · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "beltrad01",
		"teams" : "SAN · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "beltrad01",
		"teams" : "VRO,LVG · FLOR,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "beltrad01",
		"teams" : "RRK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "andruel01",
		"teams" : "KIS,DAN · GULF,APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "andruel01",
		"teams" : "ROM,MGL · SALL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "andruel01",
		"teams" : "MYR,BAK,SPS · CARL,CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "andruel01",
		"teams" : "FRI,MGL · TL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "andruel01",
		"teams" : "MGL · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "andruel01",
		"teams" : "MGL · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "andruel01",
		"teams" : "FRI,RRK · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "odorro01",
		"teams" : "SPO · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "odorro01",
		"teams" : "HCK · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "odorro01",
		"teams" : "MYR,FRI,MGL · CARL,TL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "odorro01",
		"teams" : "MGL,FRI · VEWL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "odorro01",
		"teams" : "RRK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "odorro01",
		"teams" : "RRK,FRI,ZUL · PCL,TL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "guzmaro01",
		"teams" : "RGS · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "guzmaro01",
		"teams" : "HCK · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "guzmaro01",
		"teams" : "HCK · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "guzmaro01",
		"teams" : "HDS,HCK,SPS · CALL,SALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "guzmaro01",
		"teams" : "FRI,RRK,AZU · TL,PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "guzmaro01",
		"teams" : "RRK,AZU · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "guzmaro01",
		"teams" : "RRK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "chiriro01",
		"teams" : "CBZ · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "chiriro01",
		"teams" : "BOI · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "chiriro01",
		"teams" : "LNS · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "chiriro01",
		"teams" : "LNS · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "chiriro01",
		"teams" : "DYT · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "chiriro01",
		"teams" : "PEO,MGL · MIDW,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "chiriro01",
		"teams" : "DYT,KNX · FLOR,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "chiriro01",
		"teams" : "DYT,KNX,CBZ,MGL · FLOR,SOUL,ARIZ,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "chiriro01",
		"teams" : "DYT,MGL,KNX · FLOR,VEWL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "chiriro01",
		"teams" : "KNX,MGL,IWA · SOUL,VEWL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "chiriro01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "chiriro01",
		"teams" : "MGL · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "chiriro01",
		"teams" : "RRK,MGL · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "chiriro01",
		"teams" : "RRK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "chiriro01",
		"teams" : "MGL,RRK,FRI · VEWL,PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "glasnty01",
		"teams" : "5.4",
		"teamspitcher" : "BRD,SCS GULF,NYPL"
	},
	{
		"player" : "glasnty01",
		"teams" : "4.4",
		"teamspitcher" : "CHL SALL"
	},
	{
		"player" : "glasnty01",
		"teams" : "5.9",
		"teamspitcher" : "BDT,SCO FLOR,AZFL"
	},
	{
		"player" : "glasnty01",
		"teams" : "6.3",
		"teamspitcher" : "ATO,INA,WVA EL,IL,NYPL"
	},
	{
		"player" : "glasnty01",
		"teams" : "5.3",
		"teamspitcher" : "INA,ATO IL,EL"
	},
	{
		"player" : "glasnty01",
		"teams" : "5.5",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "alvarjo03",
		"teams" : "6.9",
		"teamspitcher" : "VN2 VESL"
	},
	{
		"player" : "alvarjo03",
		"teams" : "8.1",
		"teamspitcher" : "VN2 VESL"
	},
	{
		"player" : "alvarjo03",
		"teams" : "6.2",
		"teamspitcher" : "DVS GULF"
	},
	{
		"player" : "alvarjo03",
		"teams" : "9.6",
		"teamspitcher" : "PRI,LGU APPY,VEWL"
	},
	{
		"player" : "alvarjo03",
		"teams" : "6.2",
		"teamspitcher" : "POE,BWG,LGU FLOR,MIDW,VEWL"
	},
	{
		"player" : "alvarjo03",
		"teams" : "4.6",
		"teamspitcher" : "DHM,MTG IL,SOUL"
	},
	{
		"player" : "pruitau01",
		"teams" : "6.5",
		"teamspitcher" : "BWG,HDV MIDW,NYPL"
	},
	{
		"player" : "pruitau01",
		"teams" : "8.8",
		"teamspitcher" : "POE FLOR"
	},
	{
		"player" : "pruitau01",
		"teams" : "9.0",
		"teamspitcher" : "MTG SOUL"
	},
	{
		"player" : "pruitau01",
		"teams" : "9.2",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "pruitau01",
		"teams" : "6.2",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "pruitau01",
		"teams" : "5.9",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "kolarad01",
		"teams" : "4.6",
		"teamspitcher" : "BKN,KPT NYPL,APPY"
	},
	{
		"player" : "kolarad01",
		"teams" : "8.1",
		"teamspitcher" : "SAV,SCE SALL,FLOR"
	},
	{
		"player" : "kolarad01",
		"teams" : "9.3",
		"teamspitcher" : "SCE,SPS,BNG FLOR,AZFL,EL"
	},
	{
		"player" : "kolarad01",
		"teams" : "7.0",
		"teamspitcher" : "BNG,LVG EL,PCL"
	},
	{
		"player" : "kolarad01",
		"teams" : "11.3",
		"teamspitcher" : "BNG,CRO EL,PRWL"
	},
	{
		"player" : "kolarad01",
		"teams" : "8.2",
		"teamspitcher" : "BNG,CRO EL,PRWL"
	},
	{
		"player" : "kolarad01",
		"teams" : "6.3",
		"teamspitcher" : "DHM,MTG IL,SOUL"
	},
	{
		"player" : "kolarad01",
		"teams" : "7.6",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "kolarad01",
		"teams" : "7.1",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "woodhu01",
		"teams" : "7.6",
		"teamspitcher" : "PRI APPY"
	},
	{
		"player" : "woodhu01",
		"teams" : "7.6",
		"teamspitcher" : "HDV,BWG NYPL,MIDW"
	},
	{
		"player" : "woodhu01",
		"teams" : "6.1",
		"teamspitcher" : "BWG,POE,MES MIDW,FLOR,AZFL"
	},
	{
		"player" : "woodhu01",
		"teams" : "5.6",
		"teamspitcher" : "POE,MTG FLOR,SOUL"
	},
	{
		"player" : "woodhu01",
		"teams" : "8.9",
		"teamspitcher" : "MTG,DHM SOUL,IL"
	},
	{
		"player" : "woodhu01",
		"teams" : "5.6",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "stanery01",
		"teams" : "9.2",
		"teamspitcher" : "BWG,POE,DVS MIDW,FLOR,GULF"
	},
	{
		"player" : "stanery01",
		"teams" : "6.8",
		"teamspitcher" : "MTG,POE SOUL,FLOR"
	},
	{
		"player" : "stanery01",
		"teams" : "7.5",
		"teamspitcher" : "MTG,DHM SOUL,IL"
	},
	{
		"player" : "stanery01",
		"teams" : "5.2",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "stanery01",
		"teams" : "4.7",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "fontwi01",
		"teams" : "8.1",
		"teamspitcher" : "RGS ARIZ"
	},
	{
		"player" : "fontwi01",
		"teams" : "2.1",
		"teamspitcher" : "RGS ARIZ"
	},
	{
		"player" : "fontwi01",
		"teams" : "7.7",
		"teamspitcher" : "HCK SALL"
	},
	{
		"player" : "fontwi01",
		"teams" : "8.4",
		"teamspitcher" : "BAK,HCK CALL,SALL"
	},
	{
		"player" : "fontwi01",
		"teams" : "6.1",
		"teamspitcher" : "MYR,FRI CARL,TL"
	},
	{
		"player" : "fontwi01",
		"teams" : "4.4",
		"teamspitcher" : "FRI,RRK,CCS TL,PCL,VEWL"
	},
	{
		"player" : "fontwi01",
		"teams" : "7.3",
		"teamspitcher" : "FRI TL"
	},
	{
		"player" : "fontwi01",
		"teams" : "8.1",
		"teamspitcher" : "CCS VEWL"
	},
	{
		"player" : "fontwi01",
		"teams" : "9.3",
		"teamspitcher" : "CCS,MAN,BFL VEWL,EL,IL"
	},
	{
		"player" : "fontwi01",
		"teams" : "7.6",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "andrima01",
		"teams" : "6.3",
		"teamspitcher" : "EUG NORW"
	},
	{
		"player" : "andrima01",
		"teams" : "8.6",
		"teamspitcher" : "LEL CALL"
	},
	{
		"player" : "andrima01",
		"teams" : "9.0",
		"teamspitcher" : "SAN,TUC TL,PCL"
	},
	{
		"player" : "andrima01",
		"teams" : "8.5",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "andrima01",
		"teams" : "9.0",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "andrima01",
		"teams" : "8.4",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "andrima01",
		"teams" : "12.3",
		"teamspitcher" : "DHM,POE IL,FLOR"
	},
	{
		"player" : "andrima01",
		"teams" : "2.5",
		"teamspitcher" : "VIS CALL"
	},
	{
		"player" : "roech01",
		"teams" : "5.6",
		"teamspitcher" : "CAS PION"
	},
	{
		"player" : "roech01",
		"teams" : "9.5",
		"teamspitcher" : "AVL SALL"
	},
	{
		"player" : "roech01",
		"teams" : "7.8",
		"teamspitcher" : "MOD CALL"
	},
	{
		"player" : "roech01",
		"teams" : "9.5",
		"teamspitcher" : "TUL,PHO,MOD TL,AZFL,CALL"
	},
	{
		"player" : "roech01",
		"teams" : "8.7",
		"teamspitcher" : "TUL,SCO TL,AZFL"
	},
	{
		"player" : "roech01",
		"teams" : "12.0",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "roech01",
		"teams" : "12.0",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "roech01",
		"teams" : "6.3",
		"teamspitcher" : "REN,MOB PCL,SOUL"
	},
	{
		"player" : "roech01",
		"teams" : "7.5",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "roech01",
		"teams" : "6.2",
		"teamspitcher" : "NFK,BOW IL,EL"
	},
	{
		"player" : "roech01",
		"teams" : "6.5",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "roech01",
		"teams" : "9.7",
		"teamspitcher" : "DHM,FLF,KIS,GWI IL,FLOR,GULF"
	},
	{
		"player" : "roech01",
		"teams" : "0.0",
		"teamspitcher" : "POE FLOR"
	},
	{
		"player" : "colomal01",
		"teams" : "6.9",
		"teamspitcher" : "DRY DOSL"
	},
	{
		"player" : "colomal01",
		"teams" : "9.7",
		"teamspitcher" : "PRI APPY"
	},
	{
		"player" : "colomal01",
		"teams" : "5.4",
		"teamspitcher" : "HDV NYPL"
	},
	{
		"player" : "colomal01",
		"teams" : "7.6",
		"teamspitcher" : "BWG,ESC,POE MIDW,DOWL,FLOR"
	},
	{
		"player" : "colomal01",
		"teams" : "6.9",
		"teamspitcher" : "POE,MTG,ESC FLOR,SOUL,DOWL"
	},
	{
		"player" : "colomal01",
		"teams" : "8.0",
		"teamspitcher" : "MTG,DHM SOUL,IL"
	},
	{
		"player" : "colomal01",
		"teams" : "8.1",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "colomal01",
		"teams" : "8.4",
		"teamspitcher" : "DHM,ESC,POE IL,DOWL,FLOR"
	},
	{
		"player" : "colomal01",
		"teams" : "10.0",
		"teamspitcher" : "DHM,ESC,POE IL,DOWL,FLOR"
	},
	{
		"player" : "milneho01",
		"teams" : "7.1",
		"teamspitcher" : "LWD,WPT SALL,NYPL"
	},
	{
		"player" : "milneho01",
		"teams" : "9.2",
		"teamspitcher" : "CLW FLOR"
	},
	{
		"player" : "milneho01",
		"teams" : "9.2",
		"teamspitcher" : "REA EL"
	},
	{
		"player" : "milneho01",
		"teams" : "8.0",
		"teamspitcher" : "REA,MGZ,CLW EL,PRWL,FLOR"
	},
	{
		"player" : "milneho01",
		"teams" : "8.2",
		"teamspitcher" : "REA,LHV,LRA EL,IL,VEWL"
	},
	{
		"player" : "milneho01",
		"teams" : "7.8",
		"teamspitcher" : "LHV IL"
	},
	{
		"player" : "milneho01",
		"teams" : "7.7",
		"teamspitcher" : "LHV,DHM IL"
	},
	{
		"player" : "schulja02",
		"teams" : "6.5",
		"teamspitcher" : "HDV NYPL"
	},
	{
		"player" : "schulja02",
		"teams" : "6.8",
		"teamspitcher" : "BWG,PEA,POE MIDW,AZFL,FLOR"
	},
	{
		"player" : "schulja02",
		"teams" : "7.0",
		"teamspitcher" : "MTG SOUL"
	},
	{
		"player" : "schulja02",
		"teams" : "7.8",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "schulja02",
		"teams" : "7.8",
		"teamspitcher" : "DHM,POE,DVS IL,FLOR,GULF"
	},
	{
		"player" : "schulja02",
		"teams" : "11.0",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "archech01",
		"teams" : "8.1",
		"teamspitcher" : "INS,BRL GULF,APPY"
	},
	{
		"player" : "archech01",
		"teams" : "9.7",
		"teamspitcher" : "INS,LCO GULF,SALL"
	},
	{
		"player" : "archech01",
		"teams" : "7.2",
		"teamspitcher" : "LCO SALL"
	},
	{
		"player" : "archech01",
		"teams" : "6.4",
		"teamspitcher" : "PEO MIDW"
	},
	{
		"player" : "archech01",
		"teams" : "6.4",
		"teamspitcher" : "DYT,KNX FLOR,SOUL"
	},
	{
		"player" : "archech01",
		"teams" : "9.0",
		"teamspitcher" : "MTG,DHM SOUL,IL"
	},
	{
		"player" : "archech01",
		"teams" : "7.0",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "archech01",
		"teams" : "9.0",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "archech01",
		"teams" : "0.0",
		"teamspitcher" : "POE FLOR"
	},
	{
		"player" : "bandaan01",
		"teams" : "11.7",
		"teamspitcher" : "BRR ARIZ"
	},
	{
		"player" : "bandaan01",
		"teams" : "9.5",
		"teamspitcher" : "HEL PION"
	},
	{
		"player" : "bandaan01",
		"teams" : "8.8",
		"teamspitcher" : "APP,SBN MIDW"
	},
	{
		"player" : "bandaan01",
		"teams" : "8.9",
		"teamspitcher" : "VIS CALL"
	},
	{
		"player" : "bandaan01",
		"teams" : "8.6",
		"teamspitcher" : "MOB,REN SOUL,PCL"
	},
	{
		"player" : "bandaan01",
		"teams" : "9.2",
		"teamspitcher" : "REN PCL"
	},
	{
		"player" : "bandaan01",
		"teams" : "9.2",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "fariaja01",
		"teams" : "8.6",
		"teamspitcher" : "DVS GULF"
	},
	{
		"player" : "fariaja01",
		"teams" : "9.4",
		"teamspitcher" : "PRI APPY"
	},
	{
		"player" : "fariaja01",
		"teams" : "7.7",
		"teamspitcher" : "PRI APPY"
	},
	{
		"player" : "fariaja01",
		"teams" : "8.5",
		"teamspitcher" : "BWG MIDW"
	},
	{
		"player" : "fariaja01",
		"teams" : "6.2",
		"teamspitcher" : "MTG,POE SOUL,FLOR"
	},
	{
		"player" : "fariaja01",
		"teams" : "6.6",
		"teamspitcher" : "MTG,DHM SOUL,IL"
	},
	{
		"player" : "fariaja01",
		"teams" : "6.8",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "fariaja01",
		"teams" : "7.8",
		"teamspitcher" : "DHM,POE IL,FLOR"
	},
	{
		"player" : "huch02",
		"teams" : "6.9",
		"teamspitcher" : "TWN GULF"
	},
	{
		"player" : "huch02",
		"teams" : "6.0",
		"teamspitcher" : "CDR,ELZ MIDW,APPY"
	},
	{
		"player" : "huch02",
		"teams" : "8.6",
		"teamspitcher" : "FTM,POE,ROC FLOR,IL"
	},
	{
		"player" : "huch02",
		"teams" : "8.2",
		"teamspitcher" : "MTG,DHM SOUL,IL"
	},
	{
		"player" : "huch02",
		"teams" : "8.6",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "huch02",
		"teams" : "9.9",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "ventejo01",
		"teams" : "11.3",
		"teamspitcher" : "KIS GULF"
	},
	{
		"player" : "ventejo01",
		"teams" : "8.7",
		"teamspitcher" : "ROM SALL"
	},
	{
		"player" : "ventejo01",
		"teams" : "6.8",
		"teamspitcher" : "MYR CARL"
	},
	{
		"player" : "ventejo01",
		"teams" : "10.2",
		"teamspitcher" : "HON,MYR,MSS,KIS HIWB,CARL,SOUL,GULF"
	},
	{
		"player" : "ventejo01",
		"teams" : "9.4",
		"teamspitcher" : "GWI,MSS IL,SOUL"
	},
	{
		"player" : "ventejo01",
		"teams" : "5.4",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "ventejo01",
		"teams" : "0.0",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "ventejo01",
		"teams" : "15.8",
		"teamspitcher" : "POE FLOR"
	},
	{
		"player" : "ventejo01",
		"teams" : "5.7",
		"teamspitcher" : "POE,MTG,DVS,DHM FLOR,SOUL,GULF,IL"
	},
	{
		"player" : "ventejo01",
		"teams" : "7.0",
		"teamspitcher" : "DHM,POE IL,FLOR"
	},
	{
		"player" : "chiriyo01",
		"teams" : "9.7",
		"teamspitcher" : "VN2 VESL"
	},
	{
		"player" : "chiriyo01",
		"teams" : "8.2",
		"teamspitcher" : "PRI APPY"
	},
	{
		"player" : "chiriyo01",
		"teams" : "8.1",
		"teamspitcher" : "BWG,HDV,POE MIDW,NYPL,FLOR"
	},
	{
		"player" : "chiriyo01",
		"teams" : "9.0",
		"teamspitcher" : "MTG,POE,MGA,BWG SOUL,FLOR,VEWL,MIDW"
	},
	{
		"player" : "chiriyo01",
		"teams" : "7.4",
		"teamspitcher" : "DHM,MTG IL,SOUL"
	},
	{
		"player" : "chiriyo01",
		"teams" : "10.2",
		"teamspitcher" : "DHM,POE IL,FLOR"
	},
	{
		"player" : "romose01",
		"teams" : "9.2",
		"teamspitcher" : "SLM NORW"
	},
	{
		"player" : "romose01",
		"teams" : "6.8",
		"teamspitcher" : "AUG SALL"
	},
	{
		"player" : "romose01",
		"teams" : "5.3",
		"teamspitcher" : "SJO,SCO CALL,AZFL"
	},
	{
		"player" : "romose01",
		"teams" : "6.7",
		"teamspitcher" : "NCH,MXL,FRE EL,MXPW,PCL"
	},
	{
		"player" : "romose01",
		"teams" : "4.7",
		"teamspitcher" : "SJO,FRE CALL,PCL"
	},
	{
		"player" : "romose01",
		"teams" : "9.0",
		"teamspitcher" : "GNT ARIZ"
	},
	{
		"player" : "romose01",
		"teams" : "7.3",
		"teamspitcher" : "JAL,SAC,SJO MXPW,PCL,CALL"
	},
	{
		"player" : "romose01",
		"teams" : "7.0",
		"teamspitcher" : "JAL,RCU MXPW,CALL"
	},
	{
		"player" : "weberry01",
		"teams" : "7.0",
		"teamspitcher" : "KIS GULF"
	},
	{
		"player" : "weberry01",
		"teams" : "9.4",
		"teamspitcher" : "ROM,DAN SALL,APPY"
	},
	{
		"player" : "weberry01",
		"teams" : "7.6",
		"teamspitcher" : "ROM,LBG SALL,CARL"
	},
	{
		"player" : "weberry01",
		"teams" : "10.4",
		"teamspitcher" : "ROM,LBG SALL,CARL"
	},
	{
		"player" : "weberry01",
		"teams" : "8.8",
		"teamspitcher" : "LBG,KIS CARL,GULF"
	},
	{
		"player" : "weberry01",
		"teams" : "11.5",
		"teamspitcher" : "MSS SOUL"
	},
	{
		"player" : "weberry01",
		"teams" : "7.5",
		"teamspitcher" : "GWI,MSS IL,SOUL"
	},
	{
		"player" : "weberry01",
		"teams" : "9.4",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "weberry01",
		"teams" : "5.7",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "weberry01",
		"teams" : "9.1",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "castidi01",
		"teams" : "9.4",
		"teamspitcher" : "DRY DOSL"
	},
	{
		"player" : "castidi01",
		"teams" : "7.4",
		"teamspitcher" : "HDV,BWG NYPL,MIDW"
	},
	{
		"player" : "castidi01",
		"teams" : "9.3",
		"teamspitcher" : "BWG,POE,PEA MIDW,FLOR,AZFL"
	},
	{
		"player" : "castidi01",
		"teams" : "7.6",
		"teamspitcher" : "DHM,MTG,LCY IL,SOUL,DOWL"
	},
	{
		"player" : "castidi01",
		"teams" : "5.1",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "kittran01",
		"teams" : "13.5",
		"teamspitcher" : "EVR NORW"
	},
	{
		"player" : "kittran01",
		"teams" : "9.4",
		"teamspitcher" : "ADG,HDS,CLI,WTN AUBL,CALL,MIDW,SOUL"
	},
	{
		"player" : "kittran01",
		"teams" : "13.2",
		"teamspitcher" : "HDS,WTN,TAC CALL,SOUL,PCL"
	},
	{
		"player" : "kittran01",
		"teams" : "9.8",
		"teamspitcher" : "HDS,WTN,EVR CALL,SOUL,NORW"
	},
	{
		"player" : "kittran01",
		"teams" : "9.0",
		"teamspitcher" : "TAC,WTN PCL,SOUL"
	},
	{
		"player" : "kittran01",
		"teams" : "10.0",
		"teamspitcher" : "TAC,WTN,AGU,PEA PCL,SOUL,DOWL,AZFL"
	},
	{
		"player" : "kittran01",
		"teams" : "6.5",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "kittran01",
		"teams" : "8.0",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "beeksja02",
		"teams" : "5.4",
		"teamspitcher" : "RES GULF"
	},
	{
		"player" : "beeksja02",
		"teams" : "9.6",
		"teamspitcher" : "GRV SALL"
	},
	{
		"player" : "beeksja02",
		"teams" : "9.6",
		"teamspitcher" : "SAL,PRT,SPS CARL,EL,AZFL"
	},
	{
		"player" : "beeksja02",
		"teams" : "7.5",
		"teamspitcher" : "PAW,PRT IL,EL"
	},
	{
		"player" : "beeksja02",
		"teams" : "7.2",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "nunovi01",
		"teams" : "7.5",
		"teamspitcher" : "MHV,INS NYPL,ARIZ"
	},
	{
		"player" : "nunovi01",
		"teams" : "9.9",
		"teamspitcher" : "LCO MIDW"
	},
	{
		"player" : "nunovi01",
		"teams" : "7.1",
		"teamspitcher" : "CHS,STI SALL,NYPL"
	},
	{
		"player" : "nunovi01",
		"teams" : "8.2",
		"teamspitcher" : "TRE,ZUL,TAM EL,VEWL,FLOR"
	},
	{
		"player" : "nunovi01",
		"teams" : "6.9",
		"teamspitcher" : "SWB,SCO IL,AZFL"
	},
	{
		"player" : "nunovi01",
		"teams" : "8.5",
		"teamspitcher" : "REN,ARA,TAC VEWL,PCL"
	},
	{
		"player" : "nunovi01",
		"teams" : "6.9",
		"teamspitcher" : "NFK,ESC IL,DOWL"
	},
	{
		"player" : "nunovi01",
		"teams" : "9.4",
		"teamspitcher" : "DHM,POE IL,FLOR"
	},
	{
		"player" : "yarbrry01",
		"teams" : "5.5",
		"teamspitcher" : "EVR,PUL NORW,APPY"
	},
	{
		"player" : "yarbrry01",
		"teams" : "10.1",
		"teamspitcher" : "BAK,MRE,CLI CALL,ARIZ,MIDW"
	},
	{
		"player" : "yarbrry01",
		"teams" : "7.9",
		"teamspitcher" : "WTN SOUL"
	},
	{
		"player" : "yarbrry01",
		"teams" : "8.2",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "snellbl01",
		"teams" : "10.3",
		"teamspitcher" : "DVS GULF"
	},
	{
		"player" : "snellbl01",
		"teams" : "6.5",
		"teamspitcher" : "PRI APPY"
	},
	{
		"player" : "snellbl01",
		"teams" : "8.2",
		"teamspitcher" : "BWG MIDW"
	},
	{
		"player" : "snellbl01",
		"teams" : "7.4",
		"teamspitcher" : "POE,BWG FLOR,MIDW"
	},
	{
		"player" : "snellbl01",
		"teams" : "5.6",
		"teamspitcher" : "MTG,DHM,POE SOUL,IL,FLOR"
	},
	{
		"player" : "snellbl01",
		"teams" : "8.0",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "snellbl01",
		"teams" : "8.8",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "eovalna01",
		"teams" : "5.9",
		"teamspitcher" : "DGR,OGD GULF,PION"
	},
	{
		"player" : "eovalna01",
		"teams" : "8.9",
		"teamspitcher" : "GRL MIDW"
	},
	{
		"player" : "eovalna01",
		"teams" : "9.9",
		"teamspitcher" : "SBR,DGR,OGD CALL,ARIZ,PION"
	},
	{
		"player" : "eovalna01",
		"teams" : "6.6",
		"teamspitcher" : "CNG SOUL"
	},
	{
		"player" : "eovalna01",
		"teams" : "7.7",
		"teamspitcher" : "CNG SOUL"
	},
	{
		"player" : "eovalna01",
		"teams" : "9.6",
		"teamspitcher" : "JCK,JUP SOUL,FLOR"
	},
	{
		"player" : "eovalna01",
		"teams" : "14.4",
		"teamspitcher" : "POE,DHM FLOR,IL"
	},
	{
		"player" : "williju02",
		"teams" : "DKS,MSO,SBN · ARIZ,PION,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "williju02",
		"teams" : "MSO,SBN · PION,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "williju02",
		"teams" : "BWG,BSB,POE · MIDW,AUBL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "williju02",
		"teams" : "POE,MTG,PEA · FLOR,SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "williju02",
		"teams" : "MTG · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "williju02",
		"teams" : "DHM,MEM · IL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "snydebr03",
		"teams" : "BLD,ADN · APPY,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "snydebr03",
		"teams" : "DEL,ADN · SALL,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "snydebr03",
		"teams" : "DEL,HON · SALL,HIWB",
		"teamspitcher" : ""
	},
	{
		"player" : "snydebr03",
		"teams" : "FDK,SPS · CARL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "snydebr03",
		"teams" : "NFK,BOW,PHO · IL,EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "snydebr03",
		"teams" : "NFK,ADN · IL,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "snydebr03",
		"teams" : "NFK · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "snydebr03",
		"teams" : "RRK,PCE · PCL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "snydebr03",
		"teams" : "PAW · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "snydebr03",
		"teams" : "PAW · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "snydebr03",
		"teams" : "BOW · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "snydebr03",
		"teams" : "GWI · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "snydebr03",
		"teams" : "SYR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "snydebr03",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "velazan01",
		"teams" : "DKS,MSO · ARIZ,PION",
		"teamspitcher" : ""
	},
	{
		"player" : "velazan01",
		"teams" : "SBN · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "velazan01",
		"teams" : "SBN,MGZ · MIDW,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "velazan01",
		"teams" : "POE,DVS · FLOR,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "velazan01",
		"teams" : "POE,CGU · FLOR,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "velazan01",
		"teams" : "MTG · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "velazan01",
		"teams" : "DHM,MTG · IL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "mooread01",
		"teams" : "APP,EVR · MIDW,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "mooread01",
		"teams" : "HDS · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "mooread01",
		"teams" : "WTN · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "mooread01",
		"teams" : "TAC,WTN · PCL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "mooread01",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "mooread01",
		"teams" : "PEA · AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "mooread01",
		"teams" : "OMA,TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "mooread01",
		"teams" : "OMA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "mooread01",
		"teams" : "ELP,PDS · PCL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "mooread01",
		"teams" : "CLB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "mooread01",
		"teams" : "CLB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "mooread01",
		"teams" : "CLB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "mooread01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "meadoau01",
		"teams" : "BRD,JAM · GULF,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "meadoau01",
		"teams" : "CHL,BRS,BRD · SALL,APPY,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "meadoau01",
		"teams" : "BDT,GLN,ATO · FLOR,AZFL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "meadoau01",
		"teams" : "ATO,INA,WVA · EL,IL,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "meadoau01",
		"teams" : "INA,WVA,BRD · IL,NYPL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "meadoau01",
		"teams" : "INA,DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "ciuffni01",
		"teams" : "DVS · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "ciuffni01",
		"teams" : "PRI · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "ciuffni01",
		"teams" : "BWG,BSB · MIDW,AUBL",
		"teamspitcher" : ""
	},
	{
		"player" : "ciuffni01",
		"teams" : "POE,PEA,DVS · FLOR,AZFL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "ciuffni01",
		"teams" : "MTG · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "ciuffni01",
		"teams" : "DHM,POE · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "arroych01",
		"teams" : "GNT · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "arroych01",
		"teams" : "SLM,AUG · NORW,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "arroych01",
		"teams" : "SJO,SCO · CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "arroych01",
		"teams" : "RMD · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "arroych01",
		"teams" : "SAC,ESC · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "arroych01",
		"teams" : "DHM,POE · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "perezmi03",
		"teams" : "DKS,CRO · ARIZ,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezmi03",
		"teams" : "MSO,MTI · PION,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezmi03",
		"teams" : "VIS,SBN · CALL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "perezmi03",
		"teams" : "SBN,SAJ · MIDW,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezmi03",
		"teams" : "KNC,VIS · MIDW,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezmi03",
		"teams" : "VIS,MOB · CALL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezmi03",
		"teams" : "WTN,SRV,REN · SOUL,AZFL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezmi03",
		"teams" : "REN · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "refsnro01",
		"teams" : "CHS · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "refsnro01",
		"teams" : "TAM,CHS · FLOR,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "refsnro01",
		"teams" : "SWB,TRE · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "refsnro01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "refsnro01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "refsnro01",
		"teams" : "SWB,GIG,BFL · DOWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "refsnro01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "lowebr01",
		"teams" : "BWG · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "lowebr01",
		"teams" : "POE,MTG,SPS · FLOR,SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "lowebr01",
		"teams" : "MTG,DHM · SOUL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "spande01",
		"teams" : "ELZ · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "spande01",
		"teams" : "QDS,TWN · MIDW,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "spande01",
		"teams" : "NBR,FTM,GCN · EL,FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "spande01",
		"teams" : "NBR,ARA · EL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "spande01",
		"teams" : "ROC · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "spande01",
		"teams" : "ROC · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "spande01",
		"teams" : "ROC · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "spande01",
		"teams" : "ROC · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "spande01",
		"teams" : "HGR · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "spande01",
		"teams" : "HRB,HGR,POT · EL,SALL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "spande01",
		"teams" : "SJO · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "millebr02",
		"teams" : "CLI · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "millebr02",
		"teams" : "HDS,WTN · CALL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "millebr02",
		"teams" : "WTN,TAC · SOUL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "millebr02",
		"teams" : "POE,DHM · FLOR,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "millebr02",
		"teams" : "CSP,POE · PCL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "fieldjo04",
		"teams" : "HDV · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "fieldjo04",
		"teams" : "BWG,BSB,POE · MIDW,AUBL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "fieldjo04",
		"teams" : "MTG · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "fieldjo04",
		"teams" : "DHM,MTG · IL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "fieldjo04",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "fieldjo04",
		"teams" : "DHM,ROC,CLB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "choiji01",
		"teams" : "MRE,HDS · ARIZ,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "choiji01",
		"teams" : "CLI,ADG · MIDW,AUBL",
		"teamspitcher" : ""
	},
	{
		"player" : "choiji01",
		"teams" : "WTN,HDS,TAC · SOUL,CALL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "choiji01",
		"teams" : "TAC,ARA,WTN · PCL,VEWL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "choiji01",
		"teams" : "ESS,TAC,MRE · DOWL,PCL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "choiji01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "choiji01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "choiji01",
		"teams" : "CSP,DHM · PCL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "sucreje01",
		"teams" : "BV1 · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "sucreje01",
		"teams" : "KIS · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "sucreje01",
		"teams" : "DAN · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "sucreje01",
		"teams" : "MYR,ROM · CARL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "sucreje01",
		"teams" : "MYR,MSS,CCS · CARL,SOUL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sucreje01",
		"teams" : "MSS,WTN,CCS · SOUL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sucreje01",
		"teams" : "WTN,CCS · SOUL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sucreje01",
		"teams" : "TAC,CCS,MRE · PCL,VEWL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "sucreje01",
		"teams" : "TAC,CCS · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sucreje01",
		"teams" : "MGL,TAC · VEWL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "sucreje01",
		"teams" : "MGL,TAC,MRE · VEWL,PCL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "sucreje01",
		"teams" : "MGL · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sucreje01",
		"teams" : "MGL · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "hechaad01",
		"teams" : "SOC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "hechaad01",
		"teams" : "SOC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "hechaad01",
		"teams" : "SOC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "hechaad01",
		"teams" : "MAN,DUN,PEA · EL,FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "hechaad01",
		"teams" : "MAN,LVG,PHO · EL,PCL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "hechaad01",
		"teams" : "LVG · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "hechaad01",
		"teams" : "JUP · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "hechaad01",
		"teams" : "JUP · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "hechaad01",
		"teams" : "JUP,JCK · FLOR,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "hechaad01",
		"teams" : "POE,DHM · FLOR,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "roberda10",
		"teams" : "ATH,VMT · ARIZ,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "roberda10",
		"teams" : "BEL · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "roberda10",
		"teams" : "STK,MES · CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "roberda10",
		"teams" : "MTG,MES,DVS · SOUL,AZFL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "roberda10",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "roberda10",
		"teams" : "DHM,POE · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "roberda10",
		"teams" : "POE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "smithma05",
		"teams" : "PDS,EUG · ARIZ,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "smithma05",
		"teams" : "FWA · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "smithma05",
		"teams" : "FWA,LEL,SPS · MIDW,CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "smithma05",
		"teams" : "GWI,MSS · IL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "smithma05",
		"teams" : "HRM,MGZ,MSS,GWI · MXPW,PRWL,SOUL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "smithma05",
		"teams" : "DHM,POE · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "smithma05",
		"teams" : "POE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "croncj01",
		"teams" : "ORM · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "croncj01",
		"teams" : "SBR · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "croncj01",
		"teams" : "ARK,MES,ESC · TL,AZFL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "croncj01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "croncj01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "croncj01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "croncj01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "gomezca01",
		"teams" : "KPT,MET · APPY,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "gomezca01",
		"teams" : "HGR · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "gomezca01",
		"teams" : "BNG,ESC · EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "gomezca01",
		"teams" : "NOR,ESC,SCE · PCL,DOWL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "gomezca01",
		"teams" : "ESC · DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "gomezca01",
		"teams" : "ESC · DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "gomezca01",
		"teams" : "ESC,NVL,APP · DOWL,PCL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "gomezca01",
		"teams" : "AGU,APP · DOWL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "gomezca01",
		"teams" : "APP · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "gomezca01",
		"teams" : "CPC,RRK · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "gomezca01",
		"teams" : "RRK,FRI · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "kiermke01",
		"teams" : "PRI · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "kiermke01",
		"teams" : "BWG,CBA · MIDW,AUBL",
		"teamspitcher" : ""
	},
	{
		"player" : "kiermke01",
		"teams" : "POE,PHO,DHM,DVS · FLOR,AZFL,IL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "kiermke01",
		"teams" : "MTG,DHM · SOUL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "kiermke01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "kiermke01",
		"teams" : "POE,DVS · FLOR,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "kiermke01",
		"teams" : "POE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "kiermke01",
		"teams" : "DHM,POE · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "phamth01",
		"teams" : "JOH · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "phamth01",
		"teams" : "BAT,DAV · NYPL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "phamth01",
		"teams" : "DAV,PLM · MIDW,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "phamth01",
		"teams" : "PLM · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "phamth01",
		"teams" : "PLM,SPD · FLOR,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "phamth01",
		"teams" : "SPD · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "phamth01",
		"teams" : "SPD · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "phamth01",
		"teams" : "SPD,MEM · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "phamth01",
		"teams" : "MEM,CCS · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "phamth01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "phamth01",
		"teams" : "MEM,ESC,MGL,SPD · PCL,DOWL,VEWL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "phamth01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "phamth01",
		"teams" : "HDV · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "duffyma01",
		"teams" : "SLM · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "duffyma01",
		"teams" : "AUG,SJO · SALL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "duffyma01",
		"teams" : "RMD · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "duffyma01",
		"teams" : "DHM,POE,SAC · IL,FLOR,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "duffyma01",
		"teams" : "POE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "duffyma01",
		"teams" : "POE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "adamewi01",
		"teams" : "TGR · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "adamewi01",
		"teams" : "WMI,BWG,LCY · MIDW,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "adamewi01",
		"teams" : "POE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "adamewi01",
		"teams" : "MTG,LCY · SOUL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "adamewi01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "adamewi01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "wendljo01",
		"teams" : "MHV · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "wendljo01",
		"teams" : "CAR,SPS · CARL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "wendljo01",
		"teams" : "AKR,INS · EL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "wendljo01",
		"teams" : "NVL · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "wendljo01",
		"teams" : "NVL,OBR · PCL,MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "wendljo01",
		"teams" : "NVL · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "bauerja01",
		"teams" : "PDS · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "bauerja01",
		"teams" : "FWA · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "bauerja01",
		"teams" : "MTG,POE,MES · SOUL,FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "bauerja01",
		"teams" : "MTG · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "bauerja01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "bauerja01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "ramoswi01",
		"teams" : "TWN,ARA · GULF,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "ramoswi01",
		"teams" : "BEL,ARA · MIDW,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "ramoswi01",
		"teams" : "FTM,ARA · FLOR,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "ramoswi01",
		"teams" : "ARA,NBR,TWN · VEWL,EL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "ramoswi01",
		"teams" : "ROC,ARA,SYR · VEWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "ramoswi01",
		"teams" : "ARA · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "ramoswi01",
		"teams" : "ARA,POT,HRB,NAT · VEWL,CARL,EL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "ramoswi01",
		"teams" : "ARA,HRB,POT,HGR · VEWL,EL,CARL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "ramoswi01",
		"teams" : "DHM,POE · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "ramoswi01",
		"teams" : "CLW · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "gregelu01",
		"teams" : "6.5",
		"teamspitcher" : "JOH,SCS APPY,NYPL"
	},
	{
		"player" : "gregelu01",
		"teams" : "6.9",
		"teamspitcher" : "PLM,MES,SPD FLOR,AZFL,TL"
	},
	{
		"player" : "gregelu01",
		"teams" : "7.5",
		"teamspitcher" : "SPD,MGA TL,VEWL"
	},
	{
		"player" : "gregelu01",
		"teams" : "20.3",
		"teamspitcher" : "TUC PCL"
	},
	{
		"player" : "gregelu01",
		"teams" : "7.0",
		"teamspitcher" : "PLM,SPD,MEM FLOR,TL,PCL"
	},
	{
		"player" : "gallegi01",
		"teams" : "7.8",
		"teamspitcher" : "YNK,OBR GULF,MXPW"
	},
	{
		"player" : "gallegi01",
		"teams" : "10.0",
		"teamspitcher" : "STI,OBR NYPL,MXPW"
	},
	{
		"player" : "gallegi01",
		"teams" : "10.7",
		"teamspitcher" : "CHS,OBR SALL,MXPW"
	},
	{
		"player" : "gallegi01",
		"teams" : "6.9",
		"teamspitcher" : "TAM,OBR,TRE,SWB FLOR,MXPW,EL,IL"
	},
	{
		"player" : "gallegi01",
		"teams" : "5.5",
		"teamspitcher" : "SWB,TRE IL,EL"
	},
	{
		"player" : "gallegi01",
		"teams" : "5.8",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "gallegi01",
		"teams" : "6.3",
		"teamspitcher" : "SWB,MEM IL,PCL"
	},
	{
		"player" : "tuivasa01",
		"teams" : "8.3",
		"teamspitcher" : "JOH APPY"
	},
	{
		"player" : "tuivasa01",
		"teams" : "7.9",
		"teamspitcher" : "PEO MIDW"
	},
	{
		"player" : "tuivasa01",
		"teams" : "7.1",
		"teamspitcher" : "PLM,SPD,PEA,MEM FLOR,TL,AZFL,PCL"
	},
	{
		"player" : "tuivasa01",
		"teams" : "5.6",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "tuivasa01",
		"teams" : "9.1",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "tuivasa01",
		"teams" : "5.5",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "tuivasa01",
		"teams" : "6.8",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "norribu01",
		"teams" : "6.6",
		"teamspitcher" : "TRC NYPL"
	},
	{
		"player" : "norribu01",
		"teams" : "7.4",
		"teamspitcher" : "LEX,NSE,SAL SALL,HIWB,CARL"
	},
	{
		"player" : "norribu01",
		"teams" : "9.4",
		"teamspitcher" : "CPC,SCO TL,AZFL"
	},
	{
		"player" : "norribu01",
		"teams" : "7.8",
		"teamspitcher" : "RRK PCL"
	},
	{
		"player" : "norribu01",
		"teams" : "9.8",
		"teamspitcher" : "RRK PCL"
	},
	{
		"player" : "norribu01",
		"teams" : "5.4",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "norribu01",
		"teams" : "8.3",
		"teamspitcher" : "BOW EL"
	},
	{
		"player" : "norribu01",
		"teams" : "13.9",
		"teamspitcher" : "NFK,BOW IL,EL"
	},
	{
		"player" : "norribu01",
		"teams" : "6.4",
		"teamspitcher" : "RCU CALL"
	},
	{
		"player" : "norribu01",
		"teams" : "9.0",
		"teamspitcher" : "SBR CALL"
	},
	{
		"player" : "sherrry01",
		"teams" : "9.3",
		"teamspitcher" : "JOH,BAT APPY,NYPL"
	},
	{
		"player" : "sherrry01",
		"teams" : "7.3",
		"teamspitcher" : "PLM FLOR"
	},
	{
		"player" : "sherrry01",
		"teams" : "8.7",
		"teamspitcher" : "PLM,SPD FLOR,TL"
	},
	{
		"player" : "sherrry01",
		"teams" : "9.4",
		"teamspitcher" : "SPD,MEM TL,PCL"
	},
	{
		"player" : "sherrry01",
		"teams" : "8.8",
		"teamspitcher" : "SPD,MEM TL,PCL"
	},
	{
		"player" : "sherrry01",
		"teams" : "9.4",
		"teamspitcher" : "MEM,GLN PCL,AZFL"
	},
	{
		"player" : "sherrry01",
		"teams" : "6.7",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "sherrry01",
		"teams" : "13.5",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "lyonsty01",
		"teams" : "8.8",
		"teamspitcher" : "PLM,PEA FLOR,AZFL"
	},
	{
		"player" : "lyonsty01",
		"teams" : "9.3",
		"teamspitcher" : "MEM,SPD PCL,TL"
	},
	{
		"player" : "lyonsty01",
		"teams" : "7.6",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "lyonsty01",
		"teams" : "10.5",
		"teamspitcher" : "MEM,SPD PCL,TL"
	},
	{
		"player" : "lyonsty01",
		"teams" : "9.9",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "lyonsty01",
		"teams" : "8.5",
		"teamspitcher" : "MEM,SPD,PEO PCL,TL,MIDW"
	},
	{
		"player" : "lyonsty01",
		"teams" : "5.2",
		"teamspitcher" : "MEM,SPD PCL,TL"
	},
	{
		"player" : "cecilbr01",
		"teams" : "6.5",
		"teamspitcher" : "AUB NYPL"
	},
	{
		"player" : "cecilbr01",
		"teams" : "7.6",
		"teamspitcher" : "MAN,SYR,DUN EL,IL,FLOR"
	},
	{
		"player" : "cecilbr01",
		"teams" : "9.7",
		"teamspitcher" : "LVG PCL"
	},
	{
		"player" : "cecilbr01",
		"teams" : "10.6",
		"teamspitcher" : "LVG PCL"
	},
	{
		"player" : "cecilbr01",
		"teams" : "10.2",
		"teamspitcher" : "LVG PCL"
	},
	{
		"player" : "cecilbr01",
		"teams" : "8.7",
		"teamspitcher" : "MAN,LVG EL,PCL"
	},
	{
		"player" : "cecilbr01",
		"teams" : "9.0",
		"teamspitcher" : "BFL IL"
	},
	{
		"player" : "cecilbr01",
		"teams" : "6.8",
		"teamspitcher" : "BFL,DUN IL,FLOR"
	},
	{
		"player" : "cecilbr01",
		"teams" : "6.0",
		"teamspitcher" : "MEM,SPD PCL,TL"
	},
	{
		"player" : "guilmpr01",
		"teams" : "9.0",
		"teamspitcher" : "MHV NYPL"
	},
	{
		"player" : "guilmpr01",
		"teams" : "6.1",
		"teamspitcher" : "LCO MIDW"
	},
	{
		"player" : "guilmpr01",
		"teams" : "7.6",
		"teamspitcher" : "KIN,PHO CARL,AZFL"
	},
	{
		"player" : "guilmpr01",
		"teams" : "7.0",
		"teamspitcher" : "AKR EL"
	},
	{
		"player" : "guilmpr01",
		"teams" : "6.0",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "guilmpr01",
		"teams" : "7.8",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "guilmpr01",
		"teams" : "6.6",
		"teamspitcher" : "CSP,DHM,BFL,OKC IL,PCL"
	},
	{
		"player" : "guilmpr01",
		"teams" : "9.2",
		"teamspitcher" : "TOL,AZU IL,DOWL"
	},
	{
		"player" : "guilmpr01",
		"teams" : "8.1",
		"teamspitcher" : "YKU JPCL"
	},
	{
		"player" : "guilmpr01",
		"teams" : "4.3",
		"teamspitcher" : "MEM,BFL PCL,IL"
	},
	{
		"player" : "webbty01",
		"teams" : "6.1",
		"teamspitcher" : "CHS,STI SALL,NYPL"
	},
	{
		"player" : "webbty01",
		"teams" : "7.7",
		"teamspitcher" : "TRE,SWB,TAM EL,IL,FLOR"
	},
	{
		"player" : "webbty01",
		"teams" : "9.5",
		"teamspitcher" : "SWB,SPS IL,AZFL"
	},
	{
		"player" : "webbty01",
		"teams" : "8.3",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "webbty01",
		"teams" : "9.7",
		"teamspitcher" : "SWB,CSP IL,PCL"
	},
	{
		"player" : "webbty01",
		"teams" : "6.3",
		"teamspitcher" : "ELP,MEM PCL"
	},
	{
		"player" : "hollagr01",
		"teams" : "7.5",
		"teamspitcher" : "IDF PION"
	},
	{
		"player" : "hollagr01",
		"teams" : "7.5",
		"teamspitcher" : "WMT CARL"
	},
	{
		"player" : "hollagr01",
		"teams" : "9.6",
		"teamspitcher" : "NTA,OMA TL,PCL"
	},
	{
		"player" : "hollagr01",
		"teams" : "6.3",
		"teamspitcher" : "OMA,LGU PCL,VEWL"
	},
	{
		"player" : "hollagr01",
		"teams" : "5.4",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "hollagr01",
		"teams" : "4.5",
		"teamspitcher" : "NTA TL"
	},
	{
		"player" : "hollagr01",
		"teams" : "9.0",
		"teamspitcher" : "MEM,SPD,PLM PCL,TL,FLOR"
	},
	{
		"player" : "leonedo01",
		"teams" : "5.5",
		"teamspitcher" : "EVR NORW"
	},
	{
		"player" : "leonedo01",
		"teams" : "7.5",
		"teamspitcher" : "HDS,WTN,PEA,CLI CALL,SOUL,AZFL,MIDW"
	},
	{
		"player" : "leonedo01",
		"teams" : "7.8",
		"teamspitcher" : "MOB,TAC SOUL,PCL"
	},
	{
		"player" : "leonedo01",
		"teams" : "6.4",
		"teamspitcher" : "REN PCL"
	},
	{
		"player" : "leonedo01",
		"teams" : "9.0",
		"teamspitcher" : "BFL IL"
	},
	{
		"player" : "leonedo01",
		"teams" : "12.6",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "shrevch01",
		"teams" : "9.0",
		"teamspitcher" : "DAN APPY"
	},
	{
		"player" : "shrevch01",
		"teams" : "9.9",
		"teamspitcher" : "ROM SALL"
	},
	{
		"player" : "shrevch01",
		"teams" : "8.5",
		"teamspitcher" : "LBG,MSS CARL,SOUL"
	},
	{
		"player" : "shrevch01",
		"teams" : "8.4",
		"teamspitcher" : "MSS,LBG SOUL,CARL"
	},
	{
		"player" : "shrevch01",
		"teams" : "7.2",
		"teamspitcher" : "MSS,GWI SOUL,IL"
	},
	{
		"player" : "shrevch01",
		"teams" : "15.4",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "shrevch01",
		"teams" : "2.2",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "shrevch01",
		"teams" : "5.6",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "hudsoda02",
		"teams" : "6.8",
		"teamspitcher" : "PLM,CDS FLOR,GULF"
	},
	{
		"player" : "hudsoda02",
		"teams" : "8.7",
		"teamspitcher" : "SPD,MEM TL,PCL"
	},
	{
		"player" : "hudsoda02",
		"teams" : "8.6",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "bowmama01",
		"teams" : "8.0",
		"teamspitcher" : "BKN NYPL"
	},
	{
		"player" : "bowmama01",
		"teams" : "7.9",
		"teamspitcher" : "SCE,SAV FLOR,SALL"
	},
	{
		"player" : "bowmama01",
		"teams" : "9.4",
		"teamspitcher" : "BNG,LVG EL,PCL"
	},
	{
		"player" : "bowmama01",
		"teams" : "11.8",
		"teamspitcher" : "LVG PCL"
	},
	{
		"player" : "bowmama01",
		"teams" : "9.0",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "reyesal02",
		"teams" : "8.3",
		"teamspitcher" : "JOH APPY"
	},
	{
		"player" : "reyesal02",
		"teams" : "6.8",
		"teamspitcher" : "PEO MIDW"
	},
	{
		"player" : "reyesal02",
		"teams" : "6.5",
		"teamspitcher" : "PLM,SPD,SPS,CDS FLOR,TL,AZFL,GULF"
	},
	{
		"player" : "reyesal02",
		"teams" : "8.7",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "reyesal02",
		"teams" : "2.7",
		"teamspitcher" : "SPD,MEM,PEO,PLM TL,PCL,MIDW,FLOR"
	},
	{
		"player" : "hicksjo03",
		"teams" : "8.6",
		"teamspitcher" : "SCS,JOH NYPL,APPY"
	},
	{
		"player" : "hicksjo03",
		"teams" : "8.7",
		"teamspitcher" : "PEO,PLM,SPS MIDW,FLOR,AZFL"
	},
	{
		"player" : "mayermi01",
		"teams" : "8.7",
		"teamspitcher" : "PEO,CDS MIDW,GULF"
	},
	{
		"player" : "mayermi01",
		"teams" : "10.2",
		"teamspitcher" : "SPD,PLM,MEM TL,FLOR,PCL"
	},
	{
		"player" : "mayermi01",
		"teams" : "9.9",
		"teamspitcher" : "SPD,CDS TL,GULF"
	},
	{
		"player" : "mayermi01",
		"teams" : "8.4",
		"teamspitcher" : "MEM,SPD PCL,TL"
	},
	{
		"player" : "mayermi01",
		"teams" : "8.5",
		"teamspitcher" : "MEM,ESC PCL,DOWL"
	},
	{
		"player" : "mayermi01",
		"teams" : "5.9",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "brebbjo01",
		"teams" : "5.6",
		"teamspitcher" : "STI NYPL"
	},
	{
		"player" : "brebbjo01",
		"teams" : "9.6",
		"teamspitcher" : "CHS SALL"
	},
	{
		"player" : "brebbjo01",
		"teams" : "9.6",
		"teamspitcher" : "CHS,TAM SALL,FLOR"
	},
	{
		"player" : "brebbjo01",
		"teams" : "10.9",
		"teamspitcher" : "SPD,MEM TL,PCL"
	},
	{
		"player" : "brebbjo01",
		"teams" : "5.4",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "brebbjo01",
		"teams" : "10.5",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "rossty01",
		"teams" : "7.4",
		"teamspitcher" : "KNC MIDW"
	},
	{
		"player" : "rossty01",
		"teams" : "7.8",
		"teamspitcher" : "STK,MDL CALL,TL"
	},
	{
		"player" : "rossty01",
		"teams" : "7.8",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "rossty01",
		"teams" : "12.9",
		"teamspitcher" : "SAC,PHO,STK PCL,AZFL,CALL"
	},
	{
		"player" : "rossty01",
		"teams" : "7.9",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "rossty01",
		"teams" : "9.3",
		"teamspitcher" : "TUC PCL"
	},
	{
		"player" : "rossty01",
		"teams" : "40.5",
		"teamspitcher" : "LEL CALL"
	},
	{
		"player" : "rossty01",
		"teams" : "10.1",
		"teamspitcher" : "RRK,FRI PCL,TL"
	},
	{
		"player" : "ponceda01",
		"teams" : "7.7",
		"teamspitcher" : "SCS NYPL"
	},
	{
		"player" : "ponceda01",
		"teams" : "7.6",
		"teamspitcher" : "PEO,PLM MIDW,FLOR"
	},
	{
		"player" : "ponceda01",
		"teams" : "7.6",
		"teamspitcher" : "SPD TL"
	},
	{
		"player" : "ponceda01",
		"teams" : "6.2",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "ponceda01",
		"teams" : "6.4",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "wainwad01",
		"teams" : "6.3",
		"teamspitcher" : "BVS,DAN GULF,APPY"
	},
	{
		"player" : "wainwad01",
		"teams" : "7.9",
		"teamspitcher" : "MAC SALL"
	},
	{
		"player" : "wainwad01",
		"teams" : "8.2",
		"teamspitcher" : "MYR CARL"
	},
	{
		"player" : "wainwad01",
		"teams" : "8.0",
		"teamspitcher" : "GRV SOUL"
	},
	{
		"player" : "wainwad01",
		"teams" : "9.6",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "wainwad01",
		"teams" : "10.1",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "wainwad01",
		"teams" : "13.0",
		"teamspitcher" : "SPD,MEM TL,PCL"
	},
	{
		"player" : "wainwad01",
		"teams" : "5.7",
		"teamspitcher" : "SPD,MEM,PLM TL,PCL,FLOR"
	},
	{
		"player" : "gombeau01",
		"teams" : "10.5",
		"teamspitcher" : "SCS NYPL"
	},
	{
		"player" : "gombeau01",
		"teams" : "6.5",
		"teamspitcher" : "PEO MIDW"
	},
	{
		"player" : "gombeau01",
		"teams" : "7.2",
		"teamspitcher" : "PLM,GLN,SPD FLOR,AZFL,TL"
	},
	{
		"player" : "gombeau01",
		"teams" : "7.3",
		"teamspitcher" : "SPD TL"
	},
	{
		"player" : "gombeau01",
		"teams" : "8.6",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "wachami01",
		"teams" : "3.4",
		"teamspitcher" : "SPD,PLM,CDS TL,FLOR,GULF"
	},
	{
		"player" : "wachami01",
		"teams" : "6.9",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "wachami01",
		"teams" : "4.5",
		"teamspitcher" : "SPD TL"
	},
	{
		"player" : "wachami01",
		"teams" : "10.8",
		"teamspitcher" : "PLM,SPD FLOR,TL"
	},
	{
		"player" : "gantjo01",
		"teams" : "8.6",
		"teamspitcher" : "MET GULF"
	},
	{
		"player" : "gantjo01",
		"teams" : "10.9",
		"teamspitcher" : "KPT,SAV APPY,SALL"
	},
	{
		"player" : "gantjo01",
		"teams" : "6.7",
		"teamspitcher" : "BKN NYPL"
	},
	{
		"player" : "gantjo01",
		"teams" : "7.8",
		"teamspitcher" : "SAV SALL"
	},
	{
		"player" : "gantjo01",
		"teams" : "7.8",
		"teamspitcher" : "BNG,MSS,SCE EL,SOUL,FLOR"
	},
	{
		"player" : "gantjo01",
		"teams" : "9.0",
		"teamspitcher" : "GWI,ROM IL,SALL"
	},
	{
		"player" : "gantjo01",
		"teams" : "9.5",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "gantjo01",
		"teams" : "8.3",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "martica04",
		"teams" : "4.3",
		"teamspitcher" : "CRD DOSL"
	},
	{
		"player" : "martica04",
		"teams" : "8.1",
		"teamspitcher" : "PLM,DAV FLOR,MIDW"
	},
	{
		"player" : "martica04",
		"teams" : "7.8",
		"teamspitcher" : "SPD,PLM TL,FLOR"
	},
	{
		"player" : "martica04",
		"teams" : "7.1",
		"teamspitcher" : "MEM,SPD,AGU PCL,TL,DOWL"
	},
	{
		"player" : "martica04",
		"teams" : "6.4",
		"teamspitcher" : "AGU,MEM DOWL,PCL"
	},
	{
		"player" : "martica04",
		"teams" : "7.7",
		"teamspitcher" : "SPD TL"
	},
	{
		"player" : "weavelu01",
		"teams" : "14.5",
		"teamspitcher" : "CDS,PLM GULF,FLOR"
	},
	{
		"player" : "weavelu01",
		"teams" : "7.9",
		"teamspitcher" : "PLM,SPS FLOR,AZFL"
	},
	{
		"player" : "weavelu01",
		"teams" : "7.0",
		"teamspitcher" : "SPD,MEM TL,PCL"
	},
	{
		"player" : "weavelu01",
		"teams" : "7.3",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "weavelu01",
		"teams" : "6.8",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "flaheja01",
		"teams" : "7.1",
		"teamspitcher" : "CDS GULF"
	},
	{
		"player" : "flaheja01",
		"teams" : "8.7",
		"teamspitcher" : "PEO MIDW"
	},
	{
		"player" : "flaheja01",
		"teams" : "8.7",
		"teamspitcher" : "PLM FLOR"
	},
	{
		"player" : "flaheja01",
		"teams" : "7.3",
		"teamspitcher" : "MEM,SPD PCL,TL"
	},
	{
		"player" : "flaheja01",
		"teams" : "6.3",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "mikolmi01",
		"teams" : "13.1",
		"teamspitcher" : "EUG NORW"
	},
	{
		"player" : "mikolmi01",
		"teams" : "8.4",
		"teamspitcher" : "FWA MIDW"
	},
	{
		"player" : "mikolmi01",
		"teams" : "8.2",
		"teamspitcher" : "LEL,SAN,PEA CALL,TL,AZFL"
	},
	{
		"player" : "mikolmi01",
		"teams" : "10.1",
		"teamspitcher" : "TUC,SAN PCL,TL"
	},
	{
		"player" : "mikolmi01",
		"teams" : "9.1",
		"teamspitcher" : "TUC PCL"
	},
	{
		"player" : "mikolmi01",
		"teams" : "10.7",
		"teamspitcher" : "RRK PCL"
	},
	{
		"player" : "mikolmi01",
		"teams" : "6.6",
		"teamspitcher" : "YOM JPCL"
	},
	{
		"player" : "mikolmi01",
		"teams" : "8.2",
		"teamspitcher" : "YOM JPCL"
	},
	{
		"player" : "mikolmi01",
		"teams" : "7.8",
		"teamspitcher" : "YOM JPCL"
	},
	{
		"player" : "sosaed01",
		"teams" : "CRD · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "sosaed01",
		"teams" : "CDS,SCS · GULF,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "sosaed01",
		"teams" : "JOH · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "sosaed01",
		"teams" : "PEO,PLM · MIDW,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "sosaed01",
		"teams" : "PLM,SPS,CDS,SPD · FLOR,AZFL,GULF,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "sosaed01",
		"teams" : "SPD,MEM · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "baronst01",
		"teams" : "PUL · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "baronst01",
		"teams" : "EVR,CLI · NORW,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "baronst01",
		"teams" : "CLI,HDS · MIDW,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "baronst01",
		"teams" : "CLI · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "baronst01",
		"teams" : "HDS · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "baronst01",
		"teams" : "HDS,WTN · CALL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "baronst01",
		"teams" : "TAC,WTN,AZU · PCL,SOUL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "baronst01",
		"teams" : "WTN,TAC · SOUL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "baronst01",
		"teams" : "TAC,ARK · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "baronst01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "voitlu01",
		"teams" : "SCS · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "voitlu01",
		"teams" : "PLM · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "voitlu01",
		"teams" : "PLM · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "voitlu01",
		"teams" : "SPD,AGU · TL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "voitlu01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "voitlu01",
		"teams" : "MEM,SWB,SPD · PCL,IL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "garciad02",
		"teams" : "SPD,MEM · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "garciad02",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "kellyca02",
		"teams" : "JOH · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "kellyca02",
		"teams" : "SCS,PEO · NYPL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "kellyca02",
		"teams" : "PEO · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "kellyca02",
		"teams" : "PLM · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "kellyca02",
		"teams" : "SPD,MEM,GLN · TL,PCL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "kellyca02",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "kellyca02",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "wisdopa01",
		"teams" : "BAT · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "wisdopa01",
		"teams" : "PEO,PLM · MIDW,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "wisdopa01",
		"teams" : "SPD · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "wisdopa01",
		"teams" : "SPD,SPS · TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "wisdopa01",
		"teams" : "MEM,CDS · PCL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "wisdopa01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "wisdopa01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "adamsma01",
		"teams" : "BAT,JOH · NYPL,APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "adamsma01",
		"teams" : "DAV · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "adamsma01",
		"teams" : "SPD,PEA · TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "adamsma01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "adamsma01",
		"teams" : "SPD · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "adamsma01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "adamsma01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "adamsma01",
		"teams" : "HRB · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "penafr01",
		"teams" : "SAV · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "penafr01",
		"teams" : "SAV,AGU · SALL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "penafr01",
		"teams" : "SCE,AGU · FLOR,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "penafr01",
		"teams" : "AGU,SCE,MET · DOWL,FLOR,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "penafr01",
		"teams" : "SCE,AGU · FLOR,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "penafr01",
		"teams" : "SCE,AGU,BNG · FLOR,DOWL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "penafr01",
		"teams" : "LVG,AGU,BNG · PCL,DOWL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "penafr01",
		"teams" : "OMA,AGU · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "penafr01",
		"teams" : "OMA,AGU · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "penafr01",
		"teams" : "NFK,AGU · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "penafr01",
		"teams" : "NFK,AGU · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "penafr01",
		"teams" : "AGU · DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "oneilty01",
		"teams" : "MRE · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "oneilty01",
		"teams" : "CLI,EVR,MRE · MIDW,NORW,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "oneilty01",
		"teams" : "BAK,PEA · CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "oneilty01",
		"teams" : "WTN,PEA · SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "oneilty01",
		"teams" : "TAC,MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "oneilty01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "garcigr01",
		"teams" : "JOH · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "garcigr01",
		"teams" : "PLM,DAV · FLOR,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "garcigr01",
		"teams" : "SPD · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "garcigr01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "garcigr01",
		"teams" : "MEM,SPD · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "garcigr01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "garcigr01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "munozya01",
		"teams" : "AT1 · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "munozya01",
		"teams" : "ATH · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "munozya01",
		"teams" : "VMT · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "munozya01",
		"teams" : "BEL,STK · MIDW,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "munozya01",
		"teams" : "MDL,MES · TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "munozya01",
		"teams" : "NVL,MDL,AZU · PCL,TL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "munozya01",
		"teams" : "MEM,SPD · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "baderha01",
		"teams" : "PEO,SCS · MIDW,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "baderha01",
		"teams" : "SPD,MEM,GLN · TL,PCL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "baderha01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "carpema01",
		"teams" : "PLM,DAV,BAT · FLOR,MIDW,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "carpema01",
		"teams" : "SPD,PLM · TL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "carpema01",
		"teams" : "MEM,LCY · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "carpema01",
		"teams" : "SPD,MEM · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "carpema01",
		"teams" : "SPD · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "fowlede01",
		"teams" : "CAS · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "fowlede01",
		"teams" : "AVL,WKI · SALL,HIWB",
		"teamspitcher" : ""
	},
	{
		"player" : "fowlede01",
		"teams" : "MOD,PEA · CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "fowlede01",
		"teams" : "TUL · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "fowlede01",
		"teams" : "TUL · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "fowlede01",
		"teams" : "CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "fowlede01",
		"teams" : "CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "fowlede01",
		"teams" : "CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "fowlede01",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "fowlede01",
		"teams" : "IWA,SBN · PCL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "phamth01",
		"teams" : "JOH · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "phamth01",
		"teams" : "BAT,DAV · NYPL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "phamth01",
		"teams" : "DAV,PLM · MIDW,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "phamth01",
		"teams" : "PLM · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "phamth01",
		"teams" : "PLM,SPD · FLOR,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "phamth01",
		"teams" : "SPD · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "phamth01",
		"teams" : "SPD · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "phamth01",
		"teams" : "SPD,MEM · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "phamth01",
		"teams" : "MEM,CCS · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "phamth01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "phamth01",
		"teams" : "MEM,ESC,MGL,SPD · PCL,DOWL,VEWL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "phamth01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "phamth01",
		"teams" : "HDV · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "ozunama01",
		"teams" : "MRL · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "ozunama01",
		"teams" : "JUM · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "ozunama01",
		"teams" : "JAM,GBO · NYPL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "ozunama01",
		"teams" : "GBO · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "ozunama01",
		"teams" : "JUP,GIG · FLOR,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "ozunama01",
		"teams" : "GIG,JCK,JUP · DOWL,SOUL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "ozunama01",
		"teams" : "NOR,GIG · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "gyorkje01",
		"teams" : "FWA,EUG · MIDW,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "gyorkje01",
		"teams" : "LEL,SAN,PEA · CALL,TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "gyorkje01",
		"teams" : "TUC,SAN · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "gyorkje01",
		"teams" : "LEL,SAN · CALL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "gyorkje01",
		"teams" : "ELP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "gyorkje01",
		"teams" : "ELP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "dejonpa01",
		"teams" : "PEO,JOH · MIDW,APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "dejonpa01",
		"teams" : "SPD,GLN · TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "dejonpa01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "dejonpa01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "wongko01",
		"teams" : "DAV · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "wongko01",
		"teams" : "SPD,SPS · TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "wongko01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "wongko01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "wongko01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "wongko01",
		"teams" : "SPD,PEO · TL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "wongko01",
		"teams" : "PEO · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "martijo08",
		"teams" : "VN2,LGU · VESL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "martijo08",
		"teams" : "BRS,LGU · APPY,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "martijo08",
		"teams" : "KAN · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "martijo08",
		"teams" : "WSM,BRS · CARL,APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "martijo08",
		"teams" : "WSM,BIR,LGU · CARL,SOUL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "martijo08",
		"teams" : "BIR,LGU · SOUL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "martijo08",
		"teams" : "MSS,LGU · SOUL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "martijo08",
		"teams" : "LBG,LGU · CARL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "martijo08",
		"teams" : "OMA,LGU,ROY · PCL,VEWL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "martijo08",
		"teams" : "MEM,LGU,OMA · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "martijo08",
		"teams" : "LGU,PLM · VEWL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "molinya01",
		"teams" : "JOH · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "molinya01",
		"teams" : "PEO · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "molinya01",
		"teams" : "KNX · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "molinya01",
		"teams" : "MEM,CRO · PCL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "molinya01",
		"teams" : "CRO · PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "molinya01",
		"teams" : "CRO · PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "molinya01",
		"teams" : "CRO · PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "molinya01",
		"teams" : "SPD · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "molinya01",
		"teams" : "SPD · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "nicasju01",
		"teams" : "8.7",
		"teamspitcher" : "RCK DOSL"
	},
	{
		"player" : "nicasju01",
		"teams" : "10.0",
		"teamspitcher" : "CAS PION"
	},
	{
		"player" : "nicasju01",
		"teams" : "7.7",
		"teamspitcher" : "TRI NORW"
	},
	{
		"player" : "nicasju01",
		"teams" : "8.8",
		"teamspitcher" : "AVL SALL"
	},
	{
		"player" : "nicasju01",
		"teams" : "9.4",
		"teamspitcher" : "MOD CALL"
	},
	{
		"player" : "nicasju01",
		"teams" : "7.6",
		"teamspitcher" : "TUL TL"
	},
	{
		"player" : "nicasju01",
		"teams" : "6.9",
		"teamspitcher" : "AGU,CSP DOWL,PCL"
	},
	{
		"player" : "nicasju01",
		"teams" : "10.3",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "rumbeni01",
		"teams" : "4.7",
		"teamspitcher" : "STI NYPL"
	},
	{
		"player" : "rumbeni01",
		"teams" : "6.9",
		"teamspitcher" : "TAM,SWB,CHS,TRE FLOR,IL,SALL,EL"
	},
	{
		"player" : "rumbeni01",
		"teams" : "8.0",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "rumbeni01",
		"teams" : "18.0",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "rumbeni01",
		"teams" : "4.7",
		"teamspitcher" : "SWB,TRE IL,EL"
	},
	{
		"player" : "rumbeni01",
		"teams" : "6.9",
		"teamspitcher" : "TAC,ARK PCL,TL"
	},
	{
		"player" : "warread01",
		"teams" : "7.8",
		"teamspitcher" : "STI NYPL"
	},
	{
		"player" : "warread01",
		"teams" : "8.0",
		"teamspitcher" : "TAM,TRE FLOR,EL"
	},
	{
		"player" : "warread01",
		"teams" : "8.6",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "warread01",
		"teams" : "9.8",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "warread01",
		"teams" : "6.2",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "warread01",
		"teams" : "4.9",
		"teamspitcher" : "TRE,SWB EL,IL"
	},
	{
		"player" : "rzepcma01",
		"teams" : "6.5",
		"teamspitcher" : "AUB NYPL"
	},
	{
		"player" : "rzepcma01",
		"teams" : "7.4",
		"teamspitcher" : "LNS MIDW"
	},
	{
		"player" : "rzepcma01",
		"teams" : "8.9",
		"teamspitcher" : "MAN,LVG EL,PCL"
	},
	{
		"player" : "rzepcma01",
		"teams" : "9.6",
		"teamspitcher" : "LVG,PEA PCL,AZFL"
	},
	{
		"player" : "rzepcma01",
		"teams" : "9.0",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "rzepcma01",
		"teams" : "14.3",
		"teamspitcher" : "TAC,CLB PCL,IL"
	},
	{
		"player" : "cookry01",
		"teams" : "10.1",
		"teamspitcher" : "YAK NORW"
	},
	{
		"player" : "cookry01",
		"teams" : "8.8",
		"teamspitcher" : "SBN MIDW"
	},
	{
		"player" : "cookry01",
		"teams" : "8.9",
		"teamspitcher" : "VIS,MOB,REN CALL,SOUL,PCL"
	},
	{
		"player" : "cookry01",
		"teams" : "6.0",
		"teamspitcher" : "MOB,REN SOUL,PCL"
	},
	{
		"player" : "cookry01",
		"teams" : "6.8",
		"teamspitcher" : "STK CALL"
	},
	{
		"player" : "cookry01",
		"teams" : "7.2",
		"teamspitcher" : "NVL,PAW PCL,IL"
	},
	{
		"player" : "cookry01",
		"teams" : "0.0",
		"teamspitcher" : "MRE ARIZ"
	},
	{
		"player" : "cookry01",
		"teams" : "7.6",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "festama01",
		"teams" : "9.0",
		"teamspitcher" : "EVR NORW"
	},
	{
		"player" : "festama01",
		"teams" : "8.2",
		"teamspitcher" : "MOD,PEA CALL,AZFL"
	},
	{
		"player" : "festama01",
		"teams" : "9.2",
		"teamspitcher" : "ARK TL"
	},
	{
		"player" : "diazed04",
		"teams" : "5.7",
		"teamspitcher" : "MRE ARIZ"
	},
	{
		"player" : "diazed04",
		"teams" : "5.9",
		"teamspitcher" : "PUL APPY"
	},
	{
		"player" : "diazed04",
		"teams" : "7.4",
		"teamspitcher" : "CLI MIDW"
	},
	{
		"player" : "diazed04",
		"teams" : "7.8",
		"teamspitcher" : "WTN,BAK SOUL,CALL"
	},
	{
		"player" : "diazed04",
		"teams" : "7.1",
		"teamspitcher" : "WTN SOUL"
	},
	{
		"player" : "tuivasa01",
		"teams" : "8.3",
		"teamspitcher" : "JOH APPY"
	},
	{
		"player" : "tuivasa01",
		"teams" : "7.9",
		"teamspitcher" : "PEO MIDW"
	},
	{
		"player" : "tuivasa01",
		"teams" : "7.1",
		"teamspitcher" : "PLM,SPD,PEA,MEM FLOR,TL,AZFL,PCL"
	},
	{
		"player" : "tuivasa01",
		"teams" : "5.6",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "tuivasa01",
		"teams" : "9.1",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "tuivasa01",
		"teams" : "5.5",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "tuivasa01",
		"teams" : "6.8",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "armstsh01",
		"teams" : "4.5",
		"teamspitcher" : "MHV NYPL"
	},
	{
		"player" : "armstsh01",
		"teams" : "5.6",
		"teamspitcher" : "CAR,AKR,SCO,LCO CARL,EL,AZFL,MIDW"
	},
	{
		"player" : "armstsh01",
		"teams" : "7.6",
		"teamspitcher" : "AKR,SPS,INS EL,AZFL,ARIZ"
	},
	{
		"player" : "armstsh01",
		"teams" : "6.9",
		"teamspitcher" : "AKR,CLB EL,IL"
	},
	{
		"player" : "armstsh01",
		"teams" : "6.7",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "armstsh01",
		"teams" : "4.8",
		"teamspitcher" : "CLB,LCO IL,MIDW"
	},
	{
		"player" : "armstsh01",
		"teams" : "8.3",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "armstsh01",
		"teams" : "6.1",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "morinmi01",
		"teams" : "8.8",
		"teamspitcher" : "ORM PION"
	},
	{
		"player" : "morinmi01",
		"teams" : "6.8",
		"teamspitcher" : "SBR,ARK,MES CALL,TL,AZFL"
	},
	{
		"player" : "morinmi01",
		"teams" : "11.0",
		"teamspitcher" : "ARK,SLK,SBR TL,PCL,CALL"
	},
	{
		"player" : "morinmi01",
		"teams" : "12.8",
		"teamspitcher" : "SLK,ANG PCL,ARIZ"
	},
	{
		"player" : "morinmi01",
		"teams" : "7.2",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "morinmi01",
		"teams" : "7.8",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "morinmi01",
		"teams" : "8.6",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "whalero01",
		"teams" : "9.0",
		"teamspitcher" : "KPT APPY"
	},
	{
		"player" : "whalero01",
		"teams" : "6.2",
		"teamspitcher" : "KPT APPY"
	},
	{
		"player" : "whalero01",
		"teams" : "6.8",
		"teamspitcher" : "SAV,SCO,MET SALL,AZFL,GULF"
	},
	{
		"player" : "whalero01",
		"teams" : "7.7",
		"teamspitcher" : "SCE,CAR FLOR,CARL"
	},
	{
		"player" : "whalero01",
		"teams" : "7.4",
		"teamspitcher" : "MSS,GWI SOUL,IL"
	},
	{
		"player" : "whalero01",
		"teams" : "10.3",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "whalero01",
		"teams" : "11.3",
		"teamspitcher" : "TAC,ARK,EVR PCL,TL,NORW"
	},
	{
		"player" : "goedder01",
		"teams" : "9.0",
		"teamspitcher" : "MET GULF"
	},
	{
		"player" : "goedder01",
		"teams" : "7.3",
		"teamspitcher" : "SAV,MET SALL,GULF"
	},
	{
		"player" : "goedder01",
		"teams" : "9.1",
		"teamspitcher" : "SCE FLOR"
	},
	{
		"player" : "goedder01",
		"teams" : "9.1",
		"teamspitcher" : "BNG EL"
	},
	{
		"player" : "goedder01",
		"teams" : "10.9",
		"teamspitcher" : "LVG PCL"
	},
	{
		"player" : "goedder01",
		"teams" : "11.0",
		"teamspitcher" : "BNG,SCE EL,FLOR"
	},
	{
		"player" : "goedder01",
		"teams" : "8.8",
		"teamspitcher" : "LVG PCL"
	},
	{
		"player" : "goedder01",
		"teams" : "10.6",
		"teamspitcher" : "LVG PCL"
	},
	{
		"player" : "goedder01",
		"teams" : "6.0",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "paxtoja01",
		"teams" : "6.9",
		"teamspitcher" : "CLI,WTN MIDW,SOUL"
	},
	{
		"player" : "paxtoja01",
		"teams" : "8.3",
		"teamspitcher" : "WTN,PEA SOUL,AZFL"
	},
	{
		"player" : "paxtoja01",
		"teams" : "9.8",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "paxtoja01",
		"teams" : "10.4",
		"teamspitcher" : "TAC,EVR PCL,NORW"
	},
	{
		"player" : "paxtoja01",
		"teams" : "12.3",
		"teamspitcher" : "PEA,TAC AZFL,PCL"
	},
	{
		"player" : "paxtoja01",
		"teams" : "7.6",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "paxtoja01",
		"teams" : "11.3",
		"teamspitcher" : "ARK TL"
	},
	{
		"player" : "dukeza01",
		"teams" : "5.7",
		"teamspitcher" : "BRD GULF"
	},
	{
		"player" : "dukeza01",
		"teams" : "7.9",
		"teamspitcher" : "HCK SALL"
	},
	{
		"player" : "dukeza01",
		"teams" : "6.9",
		"teamspitcher" : "LBG,ATO CARL,EL"
	},
	{
		"player" : "dukeza01",
		"teams" : "9.0",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "dukeza01",
		"teams" : "8.4",
		"teamspitcher" : "BRD,SCS,INA GULF,NYPL,IL"
	},
	{
		"player" : "dukeza01",
		"teams" : "6.4",
		"teamspitcher" : "ATO EL"
	},
	{
		"player" : "dukeza01",
		"teams" : "10.5",
		"teamspitcher" : "REN,VIS PCL,CALL"
	},
	{
		"player" : "dukeza01",
		"teams" : "9.7",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "dukeza01",
		"teams" : "6.2",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "dukeza01",
		"teams" : "4.0",
		"teamspitcher" : "MEM,CDS,PLM PCL,GULF,FLOR"
	},
	{
		"player" : "colomal01",
		"teams" : "6.9",
		"teamspitcher" : "DRY DOSL"
	},
	{
		"player" : "colomal01",
		"teams" : "9.7",
		"teamspitcher" : "PRI APPY"
	},
	{
		"player" : "colomal01",
		"teams" : "5.4",
		"teamspitcher" : "HDV NYPL"
	},
	{
		"player" : "colomal01",
		"teams" : "7.6",
		"teamspitcher" : "BWG,ESC,POE MIDW,DOWL,FLOR"
	},
	{
		"player" : "colomal01",
		"teams" : "6.9",
		"teamspitcher" : "POE,MTG,ESC FLOR,SOUL,DOWL"
	},
	{
		"player" : "colomal01",
		"teams" : "8.0",
		"teamspitcher" : "MTG,DHM SOUL,IL"
	},
	{
		"player" : "colomal01",
		"teams" : "8.1",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "colomal01",
		"teams" : "8.4",
		"teamspitcher" : "DHM,ESC,POE IL,DOWL,FLOR"
	},
	{
		"player" : "colomal01",
		"teams" : "10.0",
		"teamspitcher" : "DHM,ESC,POE IL,DOWL,FLOR"
	},
	{
		"player" : "lawreca01",
		"teams" : "7.2",
		"teamspitcher" : "AUB,LNS NYPL,MIDW"
	},
	{
		"player" : "lawreca01",
		"teams" : "8.9",
		"teamspitcher" : "LNS,DUN MIDW,FLOR"
	},
	{
		"player" : "lawreca01",
		"teams" : "10.1",
		"teamspitcher" : "DUN,MAN FLOR,EL"
	},
	{
		"player" : "lawreca01",
		"teams" : "11.0",
		"teamspitcher" : "DUN,MAN,BFL FLOR,EL,IL"
	},
	{
		"player" : "lawreca01",
		"teams" : "9.8",
		"teamspitcher" : "MAN,MGA EL,VEWL"
	},
	{
		"player" : "lawreca01",
		"teams" : "11.5",
		"teamspitcher" : "MAN,MGA,BFL EL,VEWL,IL"
	},
	{
		"player" : "lawreca01",
		"teams" : "9.8",
		"teamspitcher" : "BFL,MAN,MGA IL,EL,VEWL"
	},
	{
		"player" : "lawreca01",
		"teams" : "7.9",
		"teamspitcher" : "TAC,BFL PCL,IL"
	},
	{
		"player" : "lawreca01",
		"teams" : "9.0",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "detwiro01",
		"teams" : "10.3",
		"teamspitcher" : "POT,NAT CARL,GULF"
	},
	{
		"player" : "detwiro01",
		"teams" : "10.3",
		"teamspitcher" : "POT,PES CARL,AZFL"
	},
	{
		"player" : "detwiro01",
		"teams" : "9.9",
		"teamspitcher" : "SYR,HRB IL,EL"
	},
	{
		"player" : "detwiro01",
		"teams" : "10.1",
		"teamspitcher" : "HRB,POT,SYR EL,CARL,IL"
	},
	{
		"player" : "detwiro01",
		"teams" : "10.1",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "detwiro01",
		"teams" : "17.2",
		"teamspitcher" : "POT CARL"
	},
	{
		"player" : "detwiro01",
		"teams" : "17.2",
		"teamspitcher" : "FRI TL"
	},
	{
		"player" : "detwiro01",
		"teams" : "8.8",
		"teamspitcher" : "CLB,NVL IL,PCL"
	},
	{
		"player" : "detwiro01",
		"teams" : "11.3",
		"teamspitcher" : "NVL,IWA PCL"
	},
	{
		"player" : "detwiro01",
		"teams" : "10.0",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "miranar01",
		"teams" : "27.0",
		"teamspitcher" : "HAV CNS"
	},
	{
		"player" : "miranar01",
		"teams" : "18.0",
		"teamspitcher" : "HAV CNS"
	},
	{
		"player" : "miranar01",
		"teams" : "18.0",
		"teamspitcher" : "HAV CNS"
	},
	{
		"player" : "miranar01",
		"teams" : "9.2",
		"teamspitcher" : "HAV CNS"
	},
	{
		"player" : "miranar01",
		"teams" : "8.9",
		"teamspitcher" : "MAY CNS"
	},
	{
		"player" : "miranar01",
		"teams" : "8.2",
		"teamspitcher" : "MAY,IDT CNS"
	},
	{
		"player" : "miranar01",
		"teams" : "7.8",
		"teamspitcher" : "MAY,IDJ CNS"
	},
	{
		"player" : "miranar01",
		"teams" : "7.3",
		"teamspitcher" : "BOW,FDK,OLS EL,CARL,GULF"
	},
	{
		"player" : "miranar01",
		"teams" : "8.5",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "miranar01",
		"teams" : "7.3",
		"teamspitcher" : "FKA,TAC,MOD JPPL,PCL,CALL"
	},
	{
		"player" : "altavda01",
		"teams" : "10.1",
		"teamspitcher" : "EVR NORW"
	},
	{
		"player" : "altavda01",
		"teams" : "8.4",
		"teamspitcher" : "BAK CALL"
	},
	{
		"player" : "altavda01",
		"teams" : "6.4",
		"teamspitcher" : "WTN SOUL"
	},
	{
		"player" : "altavda01",
		"teams" : "6.6",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "altavda01",
		"teams" : "10.6",
		"teamspitcher" : "TAC,ARK PCL,TL"
	},
	{
		"player" : "pazosja01",
		"teams" : "6.5",
		"teamspitcher" : "STI NYPL"
	},
	{
		"player" : "pazosja01",
		"teams" : "8.3",
		"teamspitcher" : "CHS,SCO,STI SALL,AZFL,NYPL"
	},
	{
		"player" : "pazosja01",
		"teams" : "6.9",
		"teamspitcher" : "TRE,TAM EL,FLOR"
	},
	{
		"player" : "pazosja01",
		"teams" : "6.1",
		"teamspitcher" : "SWB,TRE IL,EL"
	},
	{
		"player" : "pazosja01",
		"teams" : "6.4",
		"teamspitcher" : "SWB,STI IL,NYPL"
	},
	{
		"player" : "pazosja01",
		"teams" : "2.7",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "bradfch02",
		"teams" : "9.5",
		"teamspitcher" : "KPT APPY"
	},
	{
		"player" : "bradfch02",
		"teams" : "7.6",
		"teamspitcher" : "SAV SALL"
	},
	{
		"player" : "bradfch02",
		"teams" : "7.8",
		"teamspitcher" : "SCE,BNG,SCO FLOR,EL,AZFL"
	},
	{
		"player" : "bradfch02",
		"teams" : "9.9",
		"teamspitcher" : "LVG,BNG PCL,EL"
	},
	{
		"player" : "bradfch02",
		"teams" : "12.2",
		"teamspitcher" : "LVG PCL"
	},
	{
		"player" : "bradfch02",
		"teams" : "11.1",
		"teamspitcher" : "LVG,CRO PCL,PRWL"
	},
	{
		"player" : "bradfch02",
		"teams" : "11.9",
		"teamspitcher" : "LVG PCL"
	},
	{
		"player" : "bradfch02",
		"teams" : "6.8",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "grimmju01",
		"teams" : "8.3",
		"teamspitcher" : "MYR,HCK CARL,SALL"
	},
	{
		"player" : "grimmju01",
		"teams" : "8.2",
		"teamspitcher" : "FRI,RRK TL,PCL"
	},
	{
		"player" : "grimmju01",
		"teams" : "9.4",
		"teamspitcher" : "IWA,RRK PCL"
	},
	{
		"player" : "grimmju01",
		"teams" : "0.0",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "grimmju01",
		"teams" : "9.0",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "grimmju01",
		"teams" : "7.7",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "grimmju01",
		"teams" : "10.1",
		"teamspitcher" : "TAC,OMA,EVR PCL,NORW"
	},
	{
		"player" : "vinceni01",
		"teams" : "8.2",
		"teamspitcher" : "EUG,POR NORW,PCL"
	},
	{
		"player" : "vinceni01",
		"teams" : "9.2",
		"teamspitcher" : "LEL CALL"
	},
	{
		"player" : "vinceni01",
		"teams" : "6.6",
		"teamspitcher" : "LEL CALL"
	},
	{
		"player" : "vinceni01",
		"teams" : "6.1",
		"teamspitcher" : "SAN TL"
	},
	{
		"player" : "vinceni01",
		"teams" : "8.9",
		"teamspitcher" : "TUC,SAN PCL,TL"
	},
	{
		"player" : "vinceni01",
		"teams" : "9.2",
		"teamspitcher" : "TUC PCL"
	},
	{
		"player" : "vinceni01",
		"teams" : "9.0",
		"teamspitcher" : "LEL CALL"
	},
	{
		"player" : "vinceni01",
		"teams" : "8.6",
		"teamspitcher" : "ELP PCL"
	},
	{
		"player" : "vinceni01",
		"teams" : "9.0",
		"teamspitcher" : "EVR NORW"
	},
	{
		"player" : "vinceni01",
		"teams" : "9.0",
		"teamspitcher" : "ARK TL"
	},
	{
		"player" : "eliasro01",
		"teams" : "11.0",
		"teamspitcher" : "GNO CNS"
	},
	{
		"player" : "eliasro01",
		"teams" : "10.6",
		"teamspitcher" : "GNO CNS"
	},
	{
		"player" : "eliasro01",
		"teams" : "9.9",
		"teamspitcher" : "CLI,PUL,MRE MIDW,APPY,ARIZ"
	},
	{
		"player" : "eliasro01",
		"teams" : "8.8",
		"teamspitcher" : "HDS,LRA CALL,VEWL"
	},
	{
		"player" : "eliasro01",
		"teams" : "7.8",
		"teamspitcher" : "WTN,LRA SOUL,VEWL"
	},
	{
		"player" : "eliasro01",
		"teams" : "0.0",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "eliasro01",
		"teams" : "11.7",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "eliasro01",
		"teams" : "8.2",
		"teamspitcher" : "PAW,AGU IL,DOWL"
	},
	{
		"player" : "eliasro01",
		"teams" : "10.2",
		"teamspitcher" : "PAW,AGU,SAL,PRT,LOW IL,DOWL,CARL,EL,NYPL"
	},
	{
		"player" : "eliasro01",
		"teams" : "7.5",
		"teamspitcher" : "TAC,PAW PCL,IL"
	},
	{
		"player" : "bergmch01",
		"teams" : "11.5",
		"teamspitcher" : "CAS PION"
	},
	{
		"player" : "bergmch01",
		"teams" : "7.7",
		"teamspitcher" : "TRI NORW"
	},
	{
		"player" : "bergmch01",
		"teams" : "8.9",
		"teamspitcher" : "MOD CALL"
	},
	{
		"player" : "bergmch01",
		"teams" : "8.5",
		"teamspitcher" : "TUL TL"
	},
	{
		"player" : "bergmch01",
		"teams" : "9.2",
		"teamspitcher" : "CSP,SRV,TUL PCL,AZFL,TL"
	},
	{
		"player" : "bergmch01",
		"teams" : "3.6",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "bergmch01",
		"teams" : "9.1",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "bergmch01",
		"teams" : "10.7",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "bergmch01",
		"teams" : "10.7",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "ramirer02",
		"teams" : "9.6",
		"teamspitcher" : "AGR VESL"
	},
	{
		"player" : "ramirer02",
		"teams" : "5.5",
		"teamspitcher" : "AGR VESL"
	},
	{
		"player" : "ramirer02",
		"teams" : "8.4",
		"teamspitcher" : "CLI MIDW"
	},
	{
		"player" : "ramirer02",
		"teams" : "9.9",
		"teamspitcher" : "WTN,TAC,LRA SOUL,PCL,VEWL"
	},
	{
		"player" : "ramirer02",
		"teams" : "9.7",
		"teamspitcher" : "TAC,LRA PCL,VEWL"
	},
	{
		"player" : "ramirer02",
		"teams" : "8.6",
		"teamspitcher" : "TAC,LRA,EVR,WTN PCL,VEWL,NORW,SOUL"
	},
	{
		"player" : "ramirer02",
		"teams" : "8.5",
		"teamspitcher" : "TAC,LRA,HDS PCL,VEWL,CALL"
	},
	{
		"player" : "ramirer02",
		"teams" : "7.7",
		"teamspitcher" : "TAC,ARK,MOD PCL,TL,CALL"
	},
	{
		"player" : "gonzama02",
		"teams" : "6.9",
		"teamspitcher" : "PLM,CDS FLOR,GULF"
	},
	{
		"player" : "gonzama02",
		"teams" : "8.1",
		"teamspitcher" : "MEM,SPD,PLM PCL,TL,FLOR"
	},
	{
		"player" : "gonzama02",
		"teams" : "11.4",
		"teamspitcher" : "MEM,SPD,PLM PCL,TL,FLOR"
	},
	{
		"player" : "gonzama02",
		"teams" : "6.7",
		"teamspitcher" : "MEM,TAC,PLM PCL,FLOR"
	},
	{
		"player" : "leakemi01",
		"teams" : "9.2",
		"teamspitcher" : "PES AZFL"
	},
	{
		"player" : "leakemi01",
		"teams" : "14.7",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "hernafe02",
		"teams" : "6.8",
		"teamspitcher" : "EVR,APP NORW,MIDW"
	},
	{
		"player" : "hernafe02",
		"teams" : "8.0",
		"teamspitcher" : "SBR,SAN CALL,TL"
	},
	{
		"player" : "hernafe02",
		"teams" : "6.3",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "hernafe02",
		"teams" : "10.0",
		"teamspitcher" : "TAC,MGL,EVR PCL,VEWL,NORW"
	},
	{
		"player" : "hernafe02",
		"teams" : "6.2",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "leblawa01",
		"teams" : "8.4",
		"teamspitcher" : "FWA,EUG MIDW,NORW"
	},
	{
		"player" : "leblawa01",
		"teams" : "7.2",
		"teamspitcher" : "LEL,SAN CALL,TL"
	},
	{
		"player" : "leblawa01",
		"teams" : "8.8",
		"teamspitcher" : "POR PCL"
	},
	{
		"player" : "leblawa01",
		"teams" : "8.1",
		"teamspitcher" : "POR PCL"
	},
	{
		"player" : "leblawa01",
		"teams" : "11.7",
		"teamspitcher" : "POR PCL"
	},
	{
		"player" : "leblawa01",
		"teams" : "9.1",
		"teamspitcher" : "TUC PCL"
	},
	{
		"player" : "leblawa01",
		"teams" : "8.3",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "leblawa01",
		"teams" : "10.0",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "leblawa01",
		"teams" : "10.1",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "leblawa01",
		"teams" : "8.7",
		"teamspitcher" : "SEI JPPL"
	},
	{
		"player" : "leblawa01",
		"teams" : "8.4",
		"teamspitcher" : "BFL IL"
	},
	{
		"player" : "vinceza01",
		"teams" : "BIL · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "vinceza01",
		"teams" : "DAY · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "vinceza01",
		"teams" : "BAK · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "vinceza01",
		"teams" : "PEN · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "vinceza01",
		"teams" : "PEN,PEA · SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "vinceza01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "vinceza01",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "andrejo03",
		"teams" : "PEO,CBZ · MIDW,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "andrejo03",
		"teams" : "DYT · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "andrejo03",
		"teams" : "DYT,KNX · FLOR,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "andrejo03",
		"teams" : "KNX,SAJ · SOUL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "andrejo03",
		"teams" : "IWA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "andrejo03",
		"teams" : "IWA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "andrejo03",
		"teams" : "IWA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "andrejo03",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "motteta01",
		"teams" : "PRI,BWG · APPY,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "motteta01",
		"teams" : "BWG · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "motteta01",
		"teams" : "POE,DVS · FLOR,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "motteta01",
		"teams" : "MTG,MGA · SOUL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "motteta01",
		"teams" : "DHM,ESC · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "motteta01",
		"teams" : "DHM,OBR,ESC · IL,MXPW,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "motteta01",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "motteta01",
		"teams" : "ROC,TAC,AZU,CNG · IL,PCL,DOWL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "marjami01",
		"teams" : "BRS · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "marjami01",
		"teams" : "KAN,GRF · SALL,PION",
		"teamspitcher" : ""
	},
	{
		"player" : "marjami01",
		"teams" : "KAN · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "marjami01",
		"teams" : "WSM · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "marjami01",
		"teams" : "POE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "marjami01",
		"teams" : "MTG · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "marjami01",
		"teams" : "DHM,TAC,LCY · IL,PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "marjami01",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "negrokr01",
		"teams" : "RES,LOW · GULF,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "negrokr01",
		"teams" : "GRV,LNR · SALL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "negrokr01",
		"teams" : "GRV,LNR,PRT · SALL,CALL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "negrokr01",
		"teams" : "SAL,CAR,SAR · CARL,SOUL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "negrokr01",
		"teams" : "CAR,PES,LOU · SOUL,AZFL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "negrokr01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "negrokr01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "negrokr01",
		"teams" : "LOU,CGU · IL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "negrokr01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "negrokr01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "negrokr01",
		"teams" : "IWA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "negrokr01",
		"teams" : "REN · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "negrokr01",
		"teams" : "REN · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "suzukic01",
		"teams" : "ORX · JPPL",
		"teamspitcher" : ""
	},
	{
		"player" : "suzukic01",
		"teams" : "ORX · JPPL",
		"teamspitcher" : ""
	},
	{
		"player" : "suzukic01",
		"teams" : "ORX · JPPL",
		"teamspitcher" : ""
	},
	{
		"player" : "suzukic01",
		"teams" : "ORX · JPPL",
		"teamspitcher" : ""
	},
	{
		"player" : "suzukic01",
		"teams" : "ORX · JPPL",
		"teamspitcher" : ""
	},
	{
		"player" : "suzukic01",
		"teams" : "ORX · JPPL",
		"teamspitcher" : ""
	},
	{
		"player" : "suzukic01",
		"teams" : "ORX · JPPL",
		"teamspitcher" : ""
	},
	{
		"player" : "suzukic01",
		"teams" : "ORX · JPPL",
		"teamspitcher" : ""
	},
	{
		"player" : "suzukic01",
		"teams" : "ORX · JPPL",
		"teamspitcher" : ""
	},
	{
		"player" : "beckhgo01",
		"teams" : "PES,KAN · AZFL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "beckhgo01",
		"teams" : "BIR,CHR · SOUL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "beckhgo01",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "beckhgo01",
		"teams" : "BIR · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "beckhgo01",
		"teams" : "GWI,KIS,CAR · IL,GULF,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "beckhgo01",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "beckhgo01",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "herrmch01",
		"teams" : "ELZ · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "herrmch01",
		"teams" : "FTM · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "herrmch01",
		"teams" : "NBR,FTM,MES · EL,FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "herrmch01",
		"teams" : "NBR,PEA · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "herrmch01",
		"teams" : "ROC,ESS · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "herrmch01",
		"teams" : "ROC · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "herrmch01",
		"teams" : "ROC · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "herrmch01",
		"teams" : "REN,DKS · PCL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "herrmch01",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "maybica01",
		"teams" : "WMI · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "maybica01",
		"teams" : "LAK,PES,ERI,LAT · FLOR,AZFL,EL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "maybica01",
		"teams" : "CAR · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "maybica01",
		"teams" : "NOR · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "maybica01",
		"teams" : "NOR,JUM · PCL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "maybica01",
		"teams" : "TUC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "maybica01",
		"teams" : "TUC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "maybica01",
		"teams" : "ELP,AZU · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "maybica01",
		"teams" : "TOL,LAK · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "maybica01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "vogelda01",
		"teams" : "CBZ · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "vogelda01",
		"teams" : "BOI,CBZ · NORW,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "vogelda01",
		"teams" : "KNC,DYT · MIDW,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "vogelda01",
		"teams" : "DYT,MES · FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "vogelda01",
		"teams" : "KNX,CBZ · SOUL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "vogelda01",
		"teams" : "IWA,TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "vogelda01",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "vogelda01",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "freitda01",
		"teams" : "VMT · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "freitda01",
		"teams" : "HGR · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "freitda01",
		"teams" : "POT,MDL · CARL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "freitda01",
		"teams" : "MDL,SAC,MES · TL,PCL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "freitda01",
		"teams" : "BOW,NFK · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "freitda01",
		"teams" : "BOW,NFK · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "freitda01",
		"teams" : "KNX,IWA · SOUL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "freitda01",
		"teams" : "GWI · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "freitda01",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "rominan01",
		"teams" : "ORM · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "rominan01",
		"teams" : "CDR · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "rominan01",
		"teams" : "RCU · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "rominan01",
		"teams" : "ARK,MES · TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "rominan01",
		"teams" : "SLK,MAZ · PCL,MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "rominan01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "rominan01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "gamelbe01",
		"teams" : "YNK · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "gamelbe01",
		"teams" : "STI · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "gamelbe01",
		"teams" : "CHS · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "gamelbe01",
		"teams" : "TAM,TRE · FLOR,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "gamelbe01",
		"teams" : "TRE · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "gamelbe01",
		"teams" : "SWB,CCS · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "gamelbe01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "gamelbe01",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "gamelbe01",
		"teams" : "TAC,MOD · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "canoro01",
		"teams" : "YNK,STI · GULF,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "canoro01",
		"teams" : "GBO,STI · SALL,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "canoro01",
		"teams" : "TAM,TRE · FLOR,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "canoro01",
		"teams" : "TRE,CLB · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "canoro01",
		"teams" : "CLB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "canoro01",
		"teams" : "ESS,TRE,YNK · DOWL,EL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "canoro01",
		"teams" : "ESS · DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "canoro01",
		"teams" : "ESS · DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "canoro01",
		"teams" : "ESS · DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "canoro01",
		"teams" : "EVR,TAC · NORW,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "cruzne02",
		"teams" : "ATH · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "cruzne02",
		"teams" : "VAN · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "cruzne02",
		"teams" : "KNC · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "cruzne02",
		"teams" : "MDL,MOD,SAC · TL,CALL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "cruzne02",
		"teams" : "HVL,NVL · SOUL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "cruzne02",
		"teams" : "NVL,GIG · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "cruzne02",
		"teams" : "OKC,GIG · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "cruzne02",
		"teams" : "OKC,GIG,RGS · PCL,DOWL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "cruzne02",
		"teams" : "GIG,OKC · DOWL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "cruzne02",
		"teams" : "OKC,FRI · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "cruzne02",
		"teams" : "FRI,RRK · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "cruzne02",
		"teams" : "GIG · DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "hanigmi01",
		"teams" : "APP · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "hanigmi01",
		"teams" : "BRE,APP,SPS · FLOR,MIDW,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "hanigmi01",
		"teams" : "HVL,MOB,DKS · SOUL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "hanigmi01",
		"teams" : "VIS,MOB · CALL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "hanigmi01",
		"teams" : "REN,MOB · PCL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "hanigmi01",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "heredgu01",
		"teams" : "MTZ · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "heredgu01",
		"teams" : "MTZ · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "heredgu01",
		"teams" : "MTZ · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "heredgu01",
		"teams" : "MTZ · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "heredgu01",
		"teams" : "MTZ · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "heredgu01",
		"teams" : "MTZ · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "heredgu01",
		"teams" : "WTN,TAC,PEA · SOUL,PCL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "heredgu01",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "spande01",
		"teams" : "ELZ · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "spande01",
		"teams" : "QDS,TWN · MIDW,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "spande01",
		"teams" : "NBR,FTM,GCN · EL,FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "spande01",
		"teams" : "NBR,ARA · EL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "spande01",
		"teams" : "ROC · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "spande01",
		"teams" : "ROC · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "spande01",
		"teams" : "ROC · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "spande01",
		"teams" : "ROC · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "spande01",
		"teams" : "HGR · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "spande01",
		"teams" : "HRB,HGR,POT · EL,SALL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "spande01",
		"teams" : "SJO · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "seageky01",
		"teams" : "CLI,HDS,MRE · MIDW,CALL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "seageky01",
		"teams" : "HDS · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "seageky01",
		"teams" : "WTN,TAC · SOUL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "segurje01",
		"teams" : "ANS · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "segurje01",
		"teams" : "ANG · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "segurje01",
		"teams" : "ORM,SLK · PION,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "segurje01",
		"teams" : "CDR,GIG · MIDW,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "segurje01",
		"teams" : "SBR,SCO,ANG,GIG · CALL,AZFL,ARIZ,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "segurje01",
		"teams" : "ARK,GIG,HVL · TL,DOWL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "segurje01",
		"teams" : "ARK,TAC · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "gordode01",
		"teams" : "OGD · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "gordode01",
		"teams" : "GRL · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "gordode01",
		"teams" : "CNG,CRO · SOUL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "gordode01",
		"teams" : "ABQ,RCU · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "gordode01",
		"teams" : "LCY,ABQ · DOWL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "gordode01",
		"teams" : "ABQ,LCY,MGZ · PCL,DOWL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "gordode01",
		"teams" : "JUP · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "gordode01",
		"teams" : "NOR · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "healyry01",
		"teams" : "VMT,ATH · NYPL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "healyry01",
		"teams" : "STK · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "healyry01",
		"teams" : "MDL · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "healyry01",
		"teams" : "NVL,MDL · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "healyry01",
		"teams" : "ARK · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "zuninmi01",
		"teams" : "EVR,PEA,WTN · NORW,AZFL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "zuninmi01",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "zuninmi01",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "zuninmi01",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "zuninmi01",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "zuninmi01",
		"teams" : "MOD,TAC · CALL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "okertst01",
		"teams" : "8.8",
		"teamspitcher" : "SLM,GNT NORW,ARIZ"
	},
	{
		"player" : "okertst01",
		"teams" : "8.2",
		"teamspitcher" : "AUG SALL"
	},
	{
		"player" : "okertst01",
		"teams" : "6.9",
		"teamspitcher" : "SJO,RMD,SCO CALL,EL,AZFL"
	},
	{
		"player" : "okertst01",
		"teams" : "9.1",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "okertst01",
		"teams" : "10.1",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "okertst01",
		"teams" : "5.3",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "okertst01",
		"teams" : "10.5",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "blackra01",
		"teams" : "4.3",
		"teamspitcher" : "AUG,SJO SALL,CALL"
	},
	{
		"player" : "blackra01",
		"teams" : "4.8",
		"teamspitcher" : "SJO,SCO CALL,AZFL"
	},
	{
		"player" : "blackra01",
		"teams" : "4.9",
		"teamspitcher" : "RMD EL"
	},
	{
		"player" : "blackra01",
		"teams" : "7.7",
		"teamspitcher" : "GNT ARIZ"
	},
	{
		"player" : "blackra01",
		"teams" : "4.8",
		"teamspitcher" : "SAC,RMD PCL,EL"
	},
	{
		"player" : "valdejo03",
		"teams" : "7.3",
		"teamspitcher" : "TGR DOSL"
	},
	{
		"player" : "valdejo03",
		"teams" : "4.8",
		"teamspitcher" : "TGR DOSL"
	},
	{
		"player" : "valdejo03",
		"teams" : "5.9",
		"teamspitcher" : "TGR DOSL"
	},
	{
		"player" : "valdejo03",
		"teams" : "6.1",
		"teamspitcher" : "LAT GULF"
	},
	{
		"player" : "valdejo03",
		"teams" : "6.1",
		"teamspitcher" : "WMI,LAK,GIG MIDW,FLOR,DOWL"
	},
	{
		"player" : "valdejo03",
		"teams" : "9.6",
		"teamspitcher" : "ERI,GIG EL,DOWL"
	},
	{
		"player" : "valdejo03",
		"teams" : "7.3",
		"teamspitcher" : "TOL,GIG IL,DOWL"
	},
	{
		"player" : "valdejo03",
		"teams" : "6.5",
		"teamspitcher" : "SLK,TOL,ERI PCL,IL,EL"
	},
	{
		"player" : "valdejo03",
		"teams" : "9.9",
		"teamspitcher" : "ELP,SLK,GIG PCL,DOWL"
	},
	{
		"player" : "valdejo03",
		"teams" : "8.4",
		"teamspitcher" : "SAC,GIG PCL,DOWL"
	},
	{
		"player" : "smithwi04",
		"teams" : "9.0",
		"teamspitcher" : "ORM PION"
	},
	{
		"player" : "smithwi04",
		"teams" : "8.5",
		"teamspitcher" : "CDR MIDW"
	},
	{
		"player" : "smithwi04",
		"teams" : "10.0",
		"teamspitcher" : "WMT,SLK,RCU,ARK CARL,PCL,CALL,TL"
	},
	{
		"player" : "smithwi04",
		"teams" : "9.5",
		"teamspitcher" : "NTA TL"
	},
	{
		"player" : "smithwi04",
		"teams" : "10.4",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "smithwi04",
		"teams" : "8.2",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "smithwi04",
		"teams" : "2.3",
		"teamspitcher" : "BRE,BIL FLOR,SOUL"
	},
	{
		"player" : "smithwi04",
		"teams" : "7.4",
		"teamspitcher" : "SAC,SJO PCL,CALL"
	},
	{
		"player" : "osichjo01",
		"teams" : "9.5",
		"teamspitcher" : "SJO CALL"
	},
	{
		"player" : "osichjo01",
		"teams" : "7.5",
		"teamspitcher" : "SJO,RMD CALL,EL"
	},
	{
		"player" : "osichjo01",
		"teams" : "7.6",
		"teamspitcher" : "RMD EL"
	},
	{
		"player" : "osichjo01",
		"teams" : "5.7",
		"teamspitcher" : "RMD,SAC EL,PCL"
	},
	{
		"player" : "osichjo01",
		"teams" : "7.9",
		"teamspitcher" : "SAC,RMD PCL,EL"
	},
	{
		"player" : "osichjo01",
		"teams" : "11.6",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "osichjo01",
		"teams" : "11.1",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "strichu01",
		"teams" : "14.2",
		"teamspitcher" : "RES GULF"
	},
	{
		"player" : "strichu01",
		"teams" : "8.5",
		"teamspitcher" : "LOW NYPL"
	},
	{
		"player" : "strichu01",
		"teams" : "9.0",
		"teamspitcher" : "GRV,CHL SALL"
	},
	{
		"player" : "strichu01",
		"teams" : "11.7",
		"teamspitcher" : "CHL,BDT SALL,FLOR"
	},
	{
		"player" : "strichu01",
		"teams" : "10.0",
		"teamspitcher" : "BDT,ATO FLOR,EL"
	},
	{
		"player" : "strichu01",
		"teams" : "4.3",
		"teamspitcher" : "SJO CALL"
	},
	{
		"player" : "strichu01",
		"teams" : "6.3",
		"teamspitcher" : "RMD,SJO EL,CALL"
	},
	{
		"player" : "strichu01",
		"teams" : "5.8",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "strichu01",
		"teams" : "4.8",
		"teamspitcher" : "SAC,GNT,SJO PCL,ARIZ,CALL"
	},
	{
		"player" : "dysonsa01",
		"teams" : "9.4",
		"teamspitcher" : "MAN,DUN,SRV EL,FLOR,AZFL"
	},
	{
		"player" : "dysonsa01",
		"teams" : "8.2",
		"teamspitcher" : "JCK,NOR,JUM SOUL,PCL,GULF"
	},
	{
		"player" : "dysonsa01",
		"teams" : "7.5",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "dysonsa01",
		"teams" : "9.0",
		"teamspitcher" : "RRK PCL"
	},
	{
		"player" : "gearrco01",
		"teams" : "7.2",
		"teamspitcher" : "DAN APPY"
	},
	{
		"player" : "gearrco01",
		"teams" : "7.4",
		"teamspitcher" : "MYR,ROM CARL,SALL"
	},
	{
		"player" : "gearrco01",
		"teams" : "6.8",
		"teamspitcher" : "MYR,MSS CARL,SOUL"
	},
	{
		"player" : "gearrco01",
		"teams" : "8.0",
		"teamspitcher" : "GWI,PHO IL,AZFL"
	},
	{
		"player" : "gearrco01",
		"teams" : "7.6",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "gearrco01",
		"teams" : "7.1",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "gearrco01",
		"teams" : "8.0",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "gearrco01",
		"teams" : "5.6",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "watsoto01",
		"teams" : "8.1",
		"teamspitcher" : "SCS,HCK NYPL,SALL"
	},
	{
		"player" : "watsoto01",
		"teams" : "8.8",
		"teamspitcher" : "LBG CARL"
	},
	{
		"player" : "watsoto01",
		"teams" : "9.3",
		"teamspitcher" : "ATO,SCO EL,AZFL"
	},
	{
		"player" : "watsoto01",
		"teams" : "6.6",
		"teamspitcher" : "ATO EL"
	},
	{
		"player" : "watsoto01",
		"teams" : "6.3",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "melanma01",
		"teams" : "13.2",
		"teamspitcher" : "STI,WOA NYPL,HIWB"
	},
	{
		"player" : "melanma01",
		"teams" : "6.5",
		"teamspitcher" : "TRE,TAM,SWB EL,FLOR,IL"
	},
	{
		"player" : "melanma01",
		"teams" : "6.3",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "melanma01",
		"teams" : "10.1",
		"teamspitcher" : "SWB,RRK IL,PCL"
	},
	{
		"player" : "melanma01",
		"teams" : "6.2",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "melanma01",
		"teams" : "14.7",
		"teamspitcher" : "SJO,SAC CALL,PCL"
	},
	{
		"player" : "melanma01",
		"teams" : "4.9",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "lawde01",
		"teams" : "8.0",
		"teamspitcher" : "GNT ARIZ"
	},
	{
		"player" : "lawde01",
		"teams" : "7.3",
		"teamspitcher" : "AUG SALL"
	},
	{
		"player" : "lawde01",
		"teams" : "6.8",
		"teamspitcher" : "AUG,SJO,SCO,GNT SALL,CALL,AZFL,ARIZ"
	},
	{
		"player" : "lawde01",
		"teams" : "6.1",
		"teamspitcher" : "RMD EL"
	},
	{
		"player" : "lawde01",
		"teams" : "10.9",
		"teamspitcher" : "RMD EL"
	},
	{
		"player" : "lawde01",
		"teams" : "3.0",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "lawde01",
		"teams" : "8.8",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "lawde01",
		"teams" : "7.5",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "moronre01",
		"teams" : "6.4",
		"teamspitcher" : "GIA DOSL"
	},
	{
		"player" : "moronre01",
		"teams" : "8.2",
		"teamspitcher" : "GNT ARIZ"
	},
	{
		"player" : "moronre01",
		"teams" : "10.0",
		"teamspitcher" : "SLM NORW"
	},
	{
		"player" : "moronre01",
		"teams" : "7.4",
		"teamspitcher" : "GNT ARIZ"
	},
	{
		"player" : "moronre01",
		"teams" : "10.1",
		"teamspitcher" : "AUG,ESC SALL,DOWL"
	},
	{
		"player" : "moronre01",
		"teams" : "6.6",
		"teamspitcher" : "SJO CALL"
	},
	{
		"player" : "moronre01",
		"teams" : "7.4",
		"teamspitcher" : "RMD,SAC,ESC,GNT EL,PCL,DOWL,ARIZ"
	},
	{
		"player" : "sneltdj01",
		"teams" : "7.1",
		"teamspitcher" : "GNT ARIZ"
	},
	{
		"player" : "sneltdj01",
		"teams" : "8.4",
		"teamspitcher" : "AUG,SLM SALL,NORW"
	},
	{
		"player" : "sneltdj01",
		"teams" : "9.4",
		"teamspitcher" : "AUG,SJO SALL,CALL"
	},
	{
		"player" : "sneltdj01",
		"teams" : "10.7",
		"teamspitcher" : "SJO CALL"
	},
	{
		"player" : "sneltdj01",
		"teams" : "6.9",
		"teamspitcher" : "SAC,RMD,SCO PCL,EL,AZFL"
	},
	{
		"player" : "sneltdj01",
		"teams" : "10.3",
		"teamspitcher" : "NFK,SAC IL,PCL"
	},
	{
		"player" : "johnspi01",
		"teams" : "11.5",
		"teamspitcher" : "BOI,CBZ NORW,ARIZ"
	},
	{
		"player" : "johnspi01",
		"teams" : "8.3",
		"teamspitcher" : "KNC,DYT MIDW,FLOR"
	},
	{
		"player" : "johnspi01",
		"teams" : "5.6",
		"teamspitcher" : "KNX,KNC SOUL,MIDW"
	},
	{
		"player" : "johnspi01",
		"teams" : "7.8",
		"teamspitcher" : "KNX,MES SOUL,AZFL"
	},
	{
		"player" : "johnspi01",
		"teams" : "8.6",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "johnspi01",
		"teams" : "8.6",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "johnspi01",
		"teams" : "6.0",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "beedety01",
		"teams" : "9.4",
		"teamspitcher" : "GNT,SLM ARIZ,NORW"
	},
	{
		"player" : "beedety01",
		"teams" : "8.2",
		"teamspitcher" : "RMD,SJO EL,CALL"
	},
	{
		"player" : "beedety01",
		"teams" : "8.3",
		"teamspitcher" : "RMD EL"
	},
	{
		"player" : "beedety01",
		"teams" : "9.9",
		"teamspitcher" : "SAC,SCO PCL,AZFL"
	},
	{
		"player" : "beedety01",
		"teams" : "9.3",
		"teamspitcher" : "SAC,SJO,GNO PCL,CALL,ARIZ"
	},
	{
		"player" : "gomezro01",
		"teams" : "7.4",
		"teamspitcher" : "DRY DOSL"
	},
	{
		"player" : "gomezro01",
		"teams" : "7.2",
		"teamspitcher" : "DVS,DRY,HDV GULF,DOSL,NYPL"
	},
	{
		"player" : "gomezro01",
		"teams" : "8.3",
		"teamspitcher" : "BWG MIDW"
	},
	{
		"player" : "gomezro01",
		"teams" : "9.3",
		"teamspitcher" : "POE FLOR"
	},
	{
		"player" : "gomezro01",
		"teams" : "11.4",
		"teamspitcher" : "POE,MTG,DVS FLOR,SOUL,GULF"
	},
	{
		"player" : "gomezro01",
		"teams" : "9.0",
		"teamspitcher" : "AGU DOWL"
	},
	{
		"player" : "gomezro01",
		"teams" : "8.9",
		"teamspitcher" : "SAC,AGU PCL,DOWL"
	},
	{
		"player" : "gomezro01",
		"teams" : "10.2",
		"teamspitcher" : "SAC,GNT PCL,ARIZ"
	},
	{
		"player" : "kellyca01",
		"teams" : "6.2",
		"teamspitcher" : "GRV,SAL SALL,CARL"
	},
	{
		"player" : "kellyca01",
		"teams" : "11.1",
		"teamspitcher" : "PRT,PEA EL,AZFL"
	},
	{
		"player" : "kellyca01",
		"teams" : "9.7",
		"teamspitcher" : "SAN TL"
	},
	{
		"player" : "kellyca01",
		"teams" : "7.9",
		"teamspitcher" : "SAN,TUC,PDS TL,PCL,ARIZ"
	},
	{
		"player" : "kellyca01",
		"teams" : "11.1",
		"teamspitcher" : "SAN,LEL TL,CALL"
	},
	{
		"player" : "kellyca01",
		"teams" : "10.5",
		"teamspitcher" : "SAN,ELP TL,PCL"
	},
	{
		"player" : "kellyca01",
		"teams" : "7.8",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "kellyca01",
		"teams" : "10.9",
		"teamspitcher" : "IWA,SAC,ESC PCL,DOWL"
	},
	{
		"player" : "kellyca01",
		"teams" : "10.3",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "samarje01",
		"teams" : "7.2",
		"teamspitcher" : "BOI,PEO NORW,MIDW"
	},
	{
		"player" : "samarje01",
		"teams" : "11.1",
		"teamspitcher" : "DYT,KNX FLOR,SOUL"
	},
	{
		"player" : "samarje01",
		"teams" : "8.2",
		"teamspitcher" : "KNX,IWA SOUL,PCL"
	},
	{
		"player" : "samarje01",
		"teams" : "9.6",
		"teamspitcher" : "IWA,MXL PCL,MXPW"
	},
	{
		"player" : "samarje01",
		"teams" : "7.0",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "samarje01",
		"teams" : "8.7",
		"teamspitcher" : "SAC,RMD,SJO PCL,EL,CALL"
	},
	{
		"player" : "cuetojo01",
		"teams" : "9.9",
		"teamspitcher" : "RDL,SAR GULF,FLOR"
	},
	{
		"player" : "cuetojo01",
		"teams" : "6.6",
		"teamspitcher" : "DAY,SAR,AGU MIDW,FLOR,DOWL"
	},
	{
		"player" : "cuetojo01",
		"teams" : "8.3",
		"teamspitcher" : "SAR,CNG,AGU,LOU FLOR,SOUL,DOWL,IL"
	},
	{
		"player" : "cuetojo01",
		"teams" : "13.5",
		"teamspitcher" : "AGU DOWL"
	},
	{
		"player" : "cuetojo01",
		"teams" : "11.9",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "cuetojo01",
		"teams" : "7.9",
		"teamspitcher" : "DAY MIDW"
	},
	{
		"player" : "cuetojo01",
		"teams" : "13.0",
		"teamspitcher" : "SJO,SAC CALL,PCL"
	},
	{
		"player" : "cuetojo01",
		"teams" : "5.9",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "blachty01",
		"teams" : "8.6",
		"teamspitcher" : "SJO CALL"
	},
	{
		"player" : "blachty01",
		"teams" : "9.1",
		"teamspitcher" : "RMD EL"
	},
	{
		"player" : "blachty01",
		"teams" : "10.3",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "blachty01",
		"teams" : "8.1",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "rodride01",
		"teams" : "27.0",
		"teamspitcher" : "MGZ PRWL"
	},
	{
		"player" : "rodride01",
		"teams" : "8.1",
		"teamspitcher" : "ELZ,MGZ APPY,PRWL"
	},
	{
		"player" : "rodride01",
		"teams" : "8.9",
		"teamspitcher" : "ELZ,MGZ,CDR,FTM APPY,PRWL,MIDW,FLOR"
	},
	{
		"player" : "rodride01",
		"teams" : "8.4",
		"teamspitcher" : "CDR,FTM,MGZ MIDW,FLOR,PRWL"
	},
	{
		"player" : "rodride01",
		"teams" : "8.3",
		"teamspitcher" : "CNG,FTM,MGZ SOUL,FLOR,PRWL"
	},
	{
		"player" : "rodride01",
		"teams" : "8.8",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "bumgama01",
		"teams" : "7.1",
		"teamspitcher" : "AUG SALL"
	},
	{
		"player" : "bumgama01",
		"teams" : "6.9",
		"teamspitcher" : "NCH,SJO EL,CALL"
	},
	{
		"player" : "bumgama01",
		"teams" : "9.6",
		"teamspitcher" : "FRE PCL"
	},
	{
		"player" : "bumgama01",
		"teams" : "9.7",
		"teamspitcher" : "SJO,SAC,GNT CALL,PCL,ARIZ"
	},
	{
		"player" : "bumgama01",
		"teams" : "2.2",
		"teamspitcher" : "SJO,SAC CALL,PCL"
	},
	{
		"player" : "stratch01",
		"teams" : "7.7",
		"teamspitcher" : "SLM NORW"
	},
	{
		"player" : "stratch01",
		"teams" : "8.7",
		"teamspitcher" : "AUG SALL"
	},
	{
		"player" : "stratch01",
		"teams" : "9.7",
		"teamspitcher" : "SJO,RMD CALL,EL"
	},
	{
		"player" : "stratch01",
		"teams" : "7.8",
		"teamspitcher" : "SAC,RMD PCL,EL"
	},
	{
		"player" : "stratch01",
		"teams" : "8.8",
		"teamspitcher" : "SAC,SCO PCL,AZFL"
	},
	{
		"player" : "stratch01",
		"teams" : "10.7",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "stratch01",
		"teams" : "9.4",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "suarean01",
		"teams" : "7.3",
		"teamspitcher" : "SLM,SJO,GNT NORW,CALL,ARIZ"
	},
	{
		"player" : "suarean01",
		"teams" : "9.6",
		"teamspitcher" : "RMD,SJO EL,CALL"
	},
	{
		"player" : "suarean01",
		"teams" : "9.6",
		"teamspitcher" : "SAC,RMD PCL,EL"
	},
	{
		"player" : "suarean01",
		"teams" : "6.9",
		"teamspitcher" : "SAC,SJO PCL,CALL"
	},
	{
		"player" : "hollade01",
		"teams" : "7.7",
		"teamspitcher" : "SPO NORW"
	},
	{
		"player" : "hollade01",
		"teams" : "6.6",
		"teamspitcher" : "CLI,BAK,FRI MIDW,CALL,TL"
	},
	{
		"player" : "hollade01",
		"teams" : "11.3",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "hollade01",
		"teams" : "6.9",
		"teamspitcher" : "OKC,RGS PCL,ARIZ"
	},
	{
		"player" : "hollade01",
		"teams" : "11.0",
		"teamspitcher" : "RRK PCL"
	},
	{
		"player" : "hollade01",
		"teams" : "10.2",
		"teamspitcher" : "RRK,FRI PCL,TL"
	},
	{
		"player" : "hollade01",
		"teams" : "12.0",
		"teamspitcher" : "RRK,FRI PCL,TL"
	},
	{
		"player" : "hollade01",
		"teams" : "9.9",
		"teamspitcher" : "RRK PCL"
	},
	{
		"player" : "jonesry01",
		"teams" : "GNT · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "jonesry01",
		"teams" : "AUG,SLM · SALL,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "jonesry01",
		"teams" : "SJO · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "jonesry01",
		"teams" : "RMD,SCO · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "jonesry01",
		"teams" : "SAC,ESS · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "jonesry01",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "aveliab01",
		"teams" : "YK1 · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "aveliab01",
		"teams" : "YK2,STI,YNK · NYPL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "aveliab01",
		"teams" : "CHS,YNK,ESS · SALL,GULF,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "aveliab01",
		"teams" : "TAM,CHS,ESS · FLOR,SALL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "aveliab01",
		"teams" : "TAM,TRE,ESS,SNT · FLOR,EL,DOWL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "aveliab01",
		"teams" : "TRE,GIG,SWB,TAM · EL,DOWL,IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "aveliab01",
		"teams" : "SWB,TRE,GIG,SAC · IL,EL,DOWL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "gomezmi01",
		"teams" : "GIA · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "gomezmi01",
		"teams" : "GIA · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "gomezmi01",
		"teams" : "GIA · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "gomezmi01",
		"teams" : "SLM · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "gomezmi01",
		"teams" : "AUG,SJO · SALL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "gomezmi01",
		"teams" : "RMD,LCY · EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "gomezmi01",
		"teams" : "SAC,RMD,ESC · PCL,EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "shawch01",
		"teams" : "SLM · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "shawch01",
		"teams" : "SJO,RMD · CALL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "shawch01",
		"teams" : "SAC,RMD,SCO · PCL,EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "shawch01",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "garciar01",
		"teams" : "SLM,GNT · NORW,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "garciar01",
		"teams" : "AUG,SJO · SALL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "garciar01",
		"teams" : "SJO,SCO,GNT · CALL,AZFL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "garciar01",
		"teams" : "SJO,RMD,SCO · CALL,EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "garciar01",
		"teams" : "RMD,SAC · EL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "darnach01",
		"teams" : "SCS · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "darnach01",
		"teams" : "CHL,LBG,SCO · SALL,CARL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "darnach01",
		"teams" : "ATO · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "darnach01",
		"teams" : "INA,BDT,AZU · IL,FLOR,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "darnach01",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "darnach01",
		"teams" : "INA,ATO,BDT · IL,EL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "darnach01",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "darnach01",
		"teams" : "LHV · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "darnach01",
		"teams" : "GWI · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "darnach01",
		"teams" : "ELP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "darnach01",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "willima11",
		"teams" : "SLM,GNT · NORW,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "willima11",
		"teams" : "SJO · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "willima11",
		"teams" : "SJO · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "willima11",
		"teams" : "RMD,SAC,SCO · EL,PCL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "willima11",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "willima11",
		"teams" : "SAC,SJO · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "willima11",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "duggast01",
		"teams" : "SLM · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "duggast01",
		"teams" : "SJO,RMD · CALL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "duggast01",
		"teams" : "SJO,SCO,SAC,GNT · CALL,AZFL,PCL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "duggast01",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "tomlike01",
		"teams" : "GNT,AUG · ARIZ,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "tomlike01",
		"teams" : "AUG · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "tomlike01",
		"teams" : "SJO,RMD,GNT · CALL,EL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "tomlike01",
		"teams" : "RMD,SCO · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "tomlike01",
		"teams" : "RMD,SAC · EL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "tomlike01",
		"teams" : "SAC,SJO · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "tomlike01",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "tomlike01",
		"teams" : "SAC,SJO · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "jacksau01",
		"teams" : "YNK · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "jacksau01",
		"teams" : "CHS · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "jacksau01",
		"teams" : "TAM,CHS,HON,SWB · FLOR,SALL,HIWB,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "jacksau01",
		"teams" : "TRE,PEA · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "jacksau01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "jacksau01",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "jacksau01",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "jacksau01",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "jacksau01",
		"teams" : "CLB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "blancgr01",
		"teams" : "MAC · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "blancgr01",
		"teams" : "MYR · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "blancgr01",
		"teams" : "MYR · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "blancgr01",
		"teams" : "MSS · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "blancgr01",
		"teams" : "RMD,MSS,LGU · IL,SOUL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "blancgr01",
		"teams" : "RMD,LGU · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "blancgr01",
		"teams" : "LGU · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "blancgr01",
		"teams" : "GWI,LGU · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "blancgr01",
		"teams" : "GWI,LGU · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "blancgr01",
		"teams" : "LGU,SYR,OMA · VEWL,IL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "blancgr01",
		"teams" : "LGU · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "blancgr01",
		"teams" : "VIS,REN · CALL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "blancgr01",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "slateau01",
		"teams" : "SLM,GNT · NORW,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "slateau01",
		"teams" : "SJO,RMD,SCO · CALL,EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "slateau01",
		"teams" : "SAC,RMD,AZU · PCL,EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "slateau01",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "slateau01",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "sandopa01",
		"teams" : "GNT · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "sandopa01",
		"teams" : "SLM · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "sandopa01",
		"teams" : "AUG,MGL · SALL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sandopa01",
		"teams" : "SJO,MGL · CALL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sandopa01",
		"teams" : "SJO,MGL,NCH · CALL,VEWL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "sandopa01",
		"teams" : "MGL · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sandopa01",
		"teams" : "FRE,SJO · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "sandopa01",
		"teams" : "MGL,SJO,FRE · VEWL,CALL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "sandopa01",
		"teams" : "SJO · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "sandopa01",
		"teams" : "PAW,SAC,SJO · IL,PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "hundlni01",
		"teams" : "EUG,FWA · NORW,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "hundlni01",
		"teams" : "FWA,LEL · MIDW,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "hundlni01",
		"teams" : "SAN,PES · TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "hundlni01",
		"teams" : "POR · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "hundlni01",
		"teams" : "POR · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "hundlni01",
		"teams" : "SAN,TUC · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "hundlni01",
		"teams" : "TUC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "hundlni01",
		"teams" : "ABQ · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "hansoal01",
		"teams" : "PIR · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "hansoal01",
		"teams" : "BRD,SCS · GULF,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "hansoal01",
		"teams" : "CHL,AZU · SALL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "hansoal01",
		"teams" : "BDT,ATO,SCO,AZU · FLOR,EL,AZFL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "hansoal01",
		"teams" : "ATO,AZU · EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "hansoal01",
		"teams" : "INA,AZU · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "hansoal01",
		"teams" : "INA,AZU · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "hansoal01",
		"teams" : "AZU · DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "hansoal01",
		"teams" : "SAC,SJO · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "mccutan01",
		"teams" : "BRD,WPT · GULF,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "mccutan01",
		"teams" : "HCK,ATO · SALL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "mccutan01",
		"teams" : "ATO,PHO,INA · EL,AZFL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "mccutan01",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "mccutan01",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "hernago01",
		"teams" : "LAT,ORN · GULF,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "hernago01",
		"teams" : "WMI,ORN · MIDW,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "hernago01",
		"teams" : "MYR,ORN · CARL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "hernago01",
		"teams" : "ATO,MSS,ORN · EL,SOUL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "hernago01",
		"teams" : "ATO · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "hernago01",
		"teams" : "INA,ORN · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "hernago01",
		"teams" : "INA,ORN · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "hernago01",
		"teams" : "NOR,ORN,OMA · VEWL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "hernago01",
		"teams" : "CHR,ORN,QRO,OMA · IL,VEWL,MEX,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "hernago01",
		"teams" : "INA,ORN · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "hernago01",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "pencehu01",
		"teams" : "TRC · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "pencehu01",
		"teams" : "LEX,SAL · SALL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "pencehu01",
		"teams" : "CPC,MES · TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "pencehu01",
		"teams" : "RRK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "pencehu01",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "pencehu01",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "pencehu01",
		"teams" : "SJO · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "pencehu01",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "longoev01",
		"teams" : "VIS,MTG,HDV · CALL,SOUL,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "longoev01",
		"teams" : "MTG,DHM,SCO,USA · SOUL,IL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "longoev01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "longoev01",
		"teams" : "MTG · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "longoev01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "longoev01",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "crawfbr01",
		"teams" : "GNT,SLM · ARIZ,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "crawfbr01",
		"teams" : "NCH,SJO,SCO · EL,CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "crawfbr01",
		"teams" : "RMD,SJO · EL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "crawfbr01",
		"teams" : "FRE,SCO,SJO · PCL,AZFL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "crawfbr01",
		"teams" : "RMD · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "panikjo01",
		"teams" : "SLM,SCO · NORW,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "panikjo01",
		"teams" : "SJO,SCO · CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "panikjo01",
		"teams" : "RMD · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "panikjo01",
		"teams" : "FRE · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "panikjo01",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "panikjo01",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "panikjo01",
		"teams" : "SJO,SAC · CALL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "panikjo01",
		"teams" : "SAC,SJO · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "beltbr01",
		"teams" : "SJO,RMD,SCO,FRE · CALL,EL,AZFL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "beltbr01",
		"teams" : "FRE,ESC,SJO · PCL,DOWL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "beltbr01",
		"teams" : "FRE,SJO · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "beltbr01",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "poseybu01",
		"teams" : "WKI,GNT,SLM · HIWB,ARIZ,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "poseybu01",
		"teams" : "SJO,FRE,SCO · CALL,PCL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "poseybu01",
		"teams" : "FRE · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "stammcr01",
		"teams" : "10.9",
		"teamspitcher" : "VMT NYPL"
	},
	{
		"player" : "stammcr01",
		"teams" : "9.1",
		"teamspitcher" : "SAV,POT SALL,CARL"
	},
	{
		"player" : "stammcr01",
		"teams" : "11.2",
		"teamspitcher" : "POT,CLB CARL,IL"
	},
	{
		"player" : "stammcr01",
		"teams" : "8.5",
		"teamspitcher" : "POT,CLB,HRB CARL,IL,EL"
	},
	{
		"player" : "stammcr01",
		"teams" : "7.4",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "stammcr01",
		"teams" : "8.1",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "stammcr01",
		"teams" : "10.3",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "stammcr01",
		"teams" : "9.5",
		"teamspitcher" : "CLB,AKR,INS IL,EL,ARIZ"
	},
	{
		"player" : "stockro01",
		"teams" : "7.7",
		"teamspitcher" : "DAV MIDW"
	},
	{
		"player" : "stockro01",
		"teams" : "7.3",
		"teamspitcher" : "PLM,PEO FLOR,MIDW"
	},
	{
		"player" : "stockro01",
		"teams" : "8.1",
		"teamspitcher" : "PEO,PLM MIDW,FLOR"
	},
	{
		"player" : "stockro01",
		"teams" : "8.8",
		"teamspitcher" : "BDT,ATO,BRD FLOR,EL,GULF"
	},
	{
		"player" : "stockro01",
		"teams" : "7.2",
		"teamspitcher" : "PEN,DYT,JAL SOUL,FLOR,MXPW"
	},
	{
		"player" : "stockro01",
		"teams" : "5.3",
		"teamspitcher" : "ELP,SAN PCL,TL"
	},
	{
		"player" : "matonph01",
		"teams" : "6.3",
		"teamspitcher" : "TRI NORW"
	},
	{
		"player" : "matonph01",
		"teams" : "6.3",
		"teamspitcher" : "LEL,FWA,PEA,ELP CALL,MIDW,AZFL,PCL"
	},
	{
		"player" : "matonph01",
		"teams" : "7.8",
		"teamspitcher" : "ELP PCL"
	},
	{
		"player" : "matonph01",
		"teams" : "8.3",
		"teamspitcher" : "ELP,SAN,LEL PCL,TL,CALL"
	},
	{
		"player" : "diazmi02",
		"teams" : "9.6",
		"teamspitcher" : "BWR DOSL"
	},
	{
		"player" : "diazmi02",
		"teams" : "6.7",
		"teamspitcher" : "BWR DOSL"
	},
	{
		"player" : "diazmi02",
		"teams" : "8.0",
		"teamspitcher" : "BRR ARIZ"
	},
	{
		"player" : "diazmi02",
		"teams" : "8.9",
		"teamspitcher" : "BRR ARIZ"
	},
	{
		"player" : "diazmi02",
		"teams" : "7.9",
		"teamspitcher" : "APP MIDW"
	},
	{
		"player" : "diazmi02",
		"teams" : "7.7",
		"teamspitcher" : "LEL,AZU,PDS CALL,DOWL,ARIZ"
	},
	{
		"player" : "diazmi02",
		"teams" : "7.6",
		"teamspitcher" : "SAN,PEA,ELP TL,AZFL,PCL"
	},
	{
		"player" : "wickro01",
		"teams" : "18.0",
		"teamspitcher" : "CDS GULF"
	},
	{
		"player" : "wickro01",
		"teams" : "6.8",
		"teamspitcher" : "PLM,SPD,GLN FLOR,TL,AZFL"
	},
	{
		"player" : "wickro01",
		"teams" : "6.8",
		"teamspitcher" : "SPD,MEM,CDS TL,PCL,GULF"
	},
	{
		"player" : "wickro01",
		"teams" : "6.3",
		"teamspitcher" : "SAN,ELP TL,PCL"
	},
	{
		"player" : "breweco01",
		"teams" : "8.6",
		"teamspitcher" : "BRD GULF"
	},
	{
		"player" : "breweco01",
		"teams" : "10.5",
		"teamspitcher" : "JAM NYPL"
	},
	{
		"player" : "breweco01",
		"teams" : "8.9",
		"teamspitcher" : "CHL SALL"
	},
	{
		"player" : "breweco01",
		"teams" : "10.5",
		"teamspitcher" : "BDT FLOR"
	},
	{
		"player" : "breweco01",
		"teams" : "8.5",
		"teamspitcher" : "TRE,SWB,TAM EL,IL,FLOR"
	},
	{
		"player" : "breweco01",
		"teams" : "7.5",
		"teamspitcher" : "ELP PCL"
	},
	{
		"player" : "wieckbr01",
		"teams" : "6.0",
		"teamspitcher" : "BKN NYPL"
	},
	{
		"player" : "wieckbr01",
		"teams" : "9.0",
		"teamspitcher" : "LEL,SAV,FWA CALL,SALL,MIDW"
	},
	{
		"player" : "wieckbr01",
		"teams" : "6.8",
		"teamspitcher" : "LEL,SAN,PEA CALL,TL,AZFL"
	},
	{
		"player" : "wieckbr01",
		"teams" : "7.4",
		"teamspitcher" : "SAN,ELP,PD2 TL,PCL,ARIZ"
	},
	{
		"player" : "wieckbr01",
		"teams" : "7.0",
		"teamspitcher" : "SAN,ELP TL,PCL"
	},
	{
		"player" : "baumabu01",
		"teams" : "7.2",
		"teamspitcher" : "BRL APPY"
	},
	{
		"player" : "baumabu01",
		"teams" : "6.8",
		"teamspitcher" : "WMT CARL"
	},
	{
		"player" : "baumabu01",
		"teams" : "9.0",
		"teamspitcher" : "NTA,ROY TL,ARIZ"
	},
	{
		"player" : "baumabu01",
		"teams" : "7.2",
		"teamspitcher" : "NTA TL"
	},
	{
		"player" : "baumabu01",
		"teams" : "8.8",
		"teamspitcher" : "OMA,NTA,AZU PCL,TL,DOWL"
	},
	{
		"player" : "baumabu01",
		"teams" : "8.2",
		"teamspitcher" : "OMA,LGU PCL,VEWL"
	},
	{
		"player" : "baumabu01",
		"teams" : "7.7",
		"teamspitcher" : "OMA,LGU PCL,VEWL"
	},
	{
		"player" : "baumabu01",
		"teams" : "6.9",
		"teamspitcher" : "ELP PCL"
	},
	{
		"player" : "baumabu01",
		"teams" : "7.6",
		"teamspitcher" : "ELP,PD2,SAN,PDS PCL,ARIZ,TL"
	},
	{
		"player" : "baumabu01",
		"teams" : "8.2",
		"teamspitcher" : "LVG,ELP PCL"
	},
	{
		"player" : "wingetr01",
		"teams" : "11.6",
		"teamspitcher" : "PDS,TRI ARIZ,NORW"
	},
	{
		"player" : "wingetr01",
		"teams" : "6.5",
		"teamspitcher" : "LEL,FWA,SAN CALL,MIDW,TL"
	},
	{
		"player" : "wingetr01",
		"teams" : "6.2",
		"teamspitcher" : "SAN TL"
	},
	{
		"player" : "wingetr01",
		"teams" : "5.9",
		"teamspitcher" : "ELP PCL"
	},
	{
		"player" : "castijo03",
		"teams" : "10.0",
		"teamspitcher" : "DVS GULF"
	},
	{
		"player" : "castijo03",
		"teams" : "5.8",
		"teamspitcher" : "DVS GULF"
	},
	{
		"player" : "castijo03",
		"teams" : "9.0",
		"teamspitcher" : "TRI,FWA NORW,MIDW"
	},
	{
		"player" : "castijo03",
		"teams" : "8.7",
		"teamspitcher" : "FWA,MGL,LEL,TRI MIDW,VEWL,CALL,NORW"
	},
	{
		"player" : "castijo03",
		"teams" : "7.3",
		"teamspitcher" : "LEL,SAN,MGL CALL,TL,VEWL"
	},
	{
		"player" : "castijo03",
		"teams" : "6.8",
		"teamspitcher" : "SAN,ELP TL,PCL"
	},
	{
		"player" : "handbr01",
		"teams" : "6.8",
		"teamspitcher" : "JUM,JAM GULF,NYPL"
	},
	{
		"player" : "handbr01",
		"teams" : "9.2",
		"teamspitcher" : "GBO SALL"
	},
	{
		"player" : "handbr01",
		"teams" : "9.6",
		"teamspitcher" : "JUP,JCK FLOR,SOUL"
	},
	{
		"player" : "handbr01",
		"teams" : "7.5",
		"teamspitcher" : "JCK,JUP SOUL,FLOR"
	},
	{
		"player" : "handbr01",
		"teams" : "7.8",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "handbr01",
		"teams" : "7.4",
		"teamspitcher" : "NOR,JUM PCL,GULF"
	},
	{
		"player" : "handbr01",
		"teams" : "5.8",
		"teamspitcher" : "NOR,JUP PCL,FLOR"
	},
	{
		"player" : "webbty01",
		"teams" : "6.1",
		"teamspitcher" : "CHS,STI SALL,NYPL"
	},
	{
		"player" : "webbty01",
		"teams" : "7.7",
		"teamspitcher" : "TRE,SWB,TAM EL,IL,FLOR"
	},
	{
		"player" : "webbty01",
		"teams" : "9.5",
		"teamspitcher" : "SWB,SPS IL,AZFL"
	},
	{
		"player" : "webbty01",
		"teams" : "8.3",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "webbty01",
		"teams" : "9.7",
		"teamspitcher" : "SWB,CSP IL,PCL"
	},
	{
		"player" : "webbty01",
		"teams" : "6.3",
		"teamspitcher" : "ELP,MEM PCL"
	},
	{
		"player" : "hugheph01",
		"teams" : "7.2",
		"teamspitcher" : "YNK GULF"
	},
	{
		"player" : "hugheph01",
		"teams" : "5.6",
		"teamspitcher" : "CHS,TAM SALL,FLOR"
	},
	{
		"player" : "hugheph01",
		"teams" : "5.7",
		"teamspitcher" : "TRE,TAM EL,FLOR"
	},
	{
		"player" : "hugheph01",
		"teams" : "5.0",
		"teamspitcher" : "SWB,TRE,TAM IL,EL,FLOR"
	},
	{
		"player" : "hugheph01",
		"teams" : "7.9",
		"teamspitcher" : "PEA,SWB,CHS AZFL,IL,SALL"
	},
	{
		"player" : "hugheph01",
		"teams" : "7.9",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "hugheph01",
		"teams" : "5.8",
		"teamspitcher" : "TRE,STI EL,NYPL"
	},
	{
		"player" : "hugheph01",
		"teams" : "9.0",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "hugheph01",
		"teams" : "9.9",
		"teamspitcher" : "FTM FLOR"
	},
	{
		"player" : "mcgraky01",
		"teams" : "3.2",
		"teamspitcher" : "PDS ARIZ"
	},
	{
		"player" : "mcgraky01",
		"teams" : "7.8",
		"teamspitcher" : "FWA,SAN MIDW,TL"
	},
	{
		"player" : "mcgraky01",
		"teams" : "5.8",
		"teamspitcher" : "SAN,LEL,PEA,ELP TL,CALL,AZFL,PCL"
	},
	{
		"player" : "mcgraky01",
		"teams" : "5.8",
		"teamspitcher" : "SAN,ELP TL,PCL"
	},
	{
		"player" : "mcgraky01",
		"teams" : "7.2",
		"teamspitcher" : "ELP PCL"
	},
	{
		"player" : "yateski01",
		"teams" : "7.5",
		"teamspitcher" : "PRI APPY"
	},
	{
		"player" : "yateski01",
		"teams" : "7.6",
		"teamspitcher" : "BWG,POE MIDW,FLOR"
	},
	{
		"player" : "yateski01",
		"teams" : "5.5",
		"teamspitcher" : "POE,SPS,DVS FLOR,AZFL,GULF"
	},
	{
		"player" : "yateski01",
		"teams" : "6.3",
		"teamspitcher" : "MTG,PHO SOUL,AZFL"
	},
	{
		"player" : "yateski01",
		"teams" : "5.5",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "yateski01",
		"teams" : "3.6",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "yateski01",
		"teams" : "9.5",
		"teamspitcher" : "DHM,POE IL,FLOR"
	},
	{
		"player" : "yateski01",
		"teams" : "6.5",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "yateski01",
		"teams" : "10.3",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "makitka01",
		"teams" : "7.4",
		"teamspitcher" : "SEI JPPL"
	},
	{
		"player" : "makitka01",
		"teams" : "8.8",
		"teamspitcher" : "SEI JPPL"
	},
	{
		"player" : "makitka01",
		"teams" : "9.2",
		"teamspitcher" : "SEI JPPL"
	},
	{
		"player" : "makitka01",
		"teams" : "9.0",
		"teamspitcher" : "SEI JPPL"
	},
	{
		"player" : "makitka01",
		"teams" : "9.3",
		"teamspitcher" : "SEI JPPL"
	},
	{
		"player" : "makitka01",
		"teams" : "6.2",
		"teamspitcher" : "SEI JPPL"
	},
	{
		"player" : "makitka01",
		"teams" : "8.5",
		"teamspitcher" : "SEI JPPL"
	},
	{
		"player" : "makitka01",
		"teams" : "7.9",
		"teamspitcher" : "ELP PCL"
	},
	{
		"player" : "cimbead01",
		"teams" : "7.1",
		"teamspitcher" : "EUG NORW"
	},
	{
		"player" : "cimbead01",
		"teams" : "9.3",
		"teamspitcher" : "LEL CALL"
	},
	{
		"player" : "cimbead01",
		"teams" : "9.3",
		"teamspitcher" : "SAN,ELP TL,PCL"
	},
	{
		"player" : "cimbead01",
		"teams" : "8.8",
		"teamspitcher" : "SAN,ELP TL,PCL"
	},
	{
		"player" : "cimbead01",
		"teams" : "7.0",
		"teamspitcher" : "ELP,SAN PCL,TL"
	},
	{
		"player" : "lockewa01",
		"teams" : "12.1",
		"teamspitcher" : "PDS ARIZ"
	},
	{
		"player" : "lockewa01",
		"teams" : "19.3",
		"teamspitcher" : "PDS ARIZ"
	},
	{
		"player" : "lockewa01",
		"teams" : "13.9",
		"teamspitcher" : "EUG,FWA NORW,MIDW"
	},
	{
		"player" : "lockewa01",
		"teams" : "9.2",
		"teamspitcher" : "TRI,PDS,FWA NORW,ARIZ,MIDW"
	},
	{
		"player" : "lockewa01",
		"teams" : "8.2",
		"teamspitcher" : "LEL,FWA,SAN,ELP CALL,MIDW,TL,PCL"
	},
	{
		"player" : "lockewa01",
		"teams" : "10.8",
		"teamspitcher" : "ELP,PEA,PD2 PCL,AZFL,ARIZ"
	},
	{
		"player" : "lockewa01",
		"teams" : "9.8",
		"teamspitcher" : "ELP PCL"
	},
	{
		"player" : "strahma01",
		"teams" : "10.1",
		"teamspitcher" : "IDF PION"
	},
	{
		"player" : "strahma01",
		"teams" : "4.6",
		"teamspitcher" : "IDF PION"
	},
	{
		"player" : "strahma01",
		"teams" : "5.7",
		"teamspitcher" : "WMT,LEX CARL,SALL"
	},
	{
		"player" : "strahma01",
		"teams" : "9.0",
		"teamspitcher" : "NTA TL"
	},
	{
		"player" : "strahma01",
		"teams" : "3.6",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "strahma01",
		"teams" : "8.8",
		"teamspitcher" : "SAN TL"
	},
	{
		"player" : "kennebr02",
		"teams" : "5.4",
		"teamspitcher" : "TRI NORW"
	},
	{
		"player" : "kennebr02",
		"teams" : "9.1",
		"teamspitcher" : "LEL,FWA CALL,MIDW"
	},
	{
		"player" : "kennebr02",
		"teams" : "8.5",
		"teamspitcher" : "SAN TL"
	},
	{
		"player" : "kennebr02",
		"teams" : "7.8",
		"teamspitcher" : "ELP PCL"
	},
	{
		"player" : "perdolu02",
		"teams" : "13.3",
		"teamspitcher" : "CRD DOSL"
	},
	{
		"player" : "perdolu02",
		"teams" : "8.4",
		"teamspitcher" : "CRD,CDS DOSL,GULF"
	},
	{
		"player" : "perdolu02",
		"teams" : "12.7",
		"teamspitcher" : "JOH APPY"
	},
	{
		"player" : "perdolu02",
		"teams" : "9.6",
		"teamspitcher" : "PEO,SCS,PLM MIDW,NYPL,FLOR"
	},
	{
		"player" : "perdolu02",
		"teams" : "9.5",
		"teamspitcher" : "PEO,PLM MIDW,FLOR"
	},
	{
		"player" : "perdolu02",
		"teams" : "8.6",
		"teamspitcher" : "ELP PCL"
	},
	{
		"player" : "nixja02",
		"teams" : "10.5",
		"teamspitcher" : "PDS ARIZ"
	},
	{
		"player" : "nixja02",
		"teams" : "9.8",
		"teamspitcher" : "FWA MIDW"
	},
	{
		"player" : "nixja02",
		"teams" : "10.5",
		"teamspitcher" : "LEL,SAN CALL,TL"
	},
	{
		"player" : "nixja02",
		"teams" : "6.8",
		"teamspitcher" : "SAN,ELP TL,PCL"
	},
	{
		"player" : "lylesjo01",
		"teams" : "8.3",
		"teamspitcher" : "GRE,TRC APPY,NYPL"
	},
	{
		"player" : "lylesjo01",
		"teams" : "8.3",
		"teamspitcher" : "LEX SALL"
	},
	{
		"player" : "lylesjo01",
		"teams" : "10.3",
		"teamspitcher" : "CPC,RRK TL,PCL"
	},
	{
		"player" : "lylesjo01",
		"teams" : "9.2",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "lylesjo01",
		"teams" : "9.1",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "lylesjo01",
		"teams" : "11.4",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "lylesjo01",
		"teams" : "6.5",
		"teamspitcher" : "CSP,MOD PCL,CALL"
	},
	{
		"player" : "lylesjo01",
		"teams" : "11.5",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "lylesjo01",
		"teams" : "9.0",
		"teamspitcher" : "ELP PCL"
	},
	{
		"player" : "lylesjo01",
		"teams" : "22.2",
		"teamspitcher" : "ELP PCL"
	},
	{
		"player" : "mitchbr01",
		"teams" : "6.9",
		"teamspitcher" : "YNK,STI GULF,NYPL"
	},
	{
		"player" : "mitchbr01",
		"teams" : "9.5",
		"teamspitcher" : "STI NYPL"
	},
	{
		"player" : "mitchbr01",
		"teams" : "8.0",
		"teamspitcher" : "CHS SALL"
	},
	{
		"player" : "mitchbr01",
		"teams" : "9.8",
		"teamspitcher" : "TAM,TRE FLOR,EL"
	},
	{
		"player" : "mitchbr01",
		"teams" : "9.5",
		"teamspitcher" : "TRE,SWB EL,IL"
	},
	{
		"player" : "mitchbr01",
		"teams" : "7.8",
		"teamspitcher" : "SWB,CRO IL,PRWL"
	},
	{
		"player" : "mitchbr01",
		"teams" : "9.4",
		"teamspitcher" : "SWB,TRE,CHS,TAM IL,EL,SALL,FLOR"
	},
	{
		"player" : "mitchbr01",
		"teams" : "8.3",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "mitchbr01",
		"teams" : "7.3",
		"teamspitcher" : "LEL CALL"
	},
	{
		"player" : "erlinro01",
		"teams" : "11.3",
		"teamspitcher" : "RGS ARIZ"
	},
	{
		"player" : "erlinro01",
		"teams" : "7.0",
		"teamspitcher" : "HCK SALL"
	},
	{
		"player" : "erlinro01",
		"teams" : "7.6",
		"teamspitcher" : "FRI,MYR,SAN CARL,TL"
	},
	{
		"player" : "erlinro01",
		"teams" : "8.3",
		"teamspitcher" : "SAN,PEA,PDS TL,AZFL,ARIZ"
	},
	{
		"player" : "erlinro01",
		"teams" : "11.3",
		"teamspitcher" : "TUC PCL"
	},
	{
		"player" : "erlinro01",
		"teams" : "13.3",
		"teamspitcher" : "ELP,SAN,PDS PCL,TL,ARIZ"
	},
	{
		"player" : "erlinro01",
		"teams" : "10.8",
		"teamspitcher" : "ELP PCL"
	},
	{
		"player" : "lauerer01",
		"teams" : "7.0",
		"teamspitcher" : "TRI,PDS,FWA NORW,ARIZ,MIDW"
	},
	{
		"player" : "lauerer01",
		"teams" : "8.6",
		"teamspitcher" : "LEL,SAN CALL,TL"
	},
	{
		"player" : "lauerer01",
		"teams" : "5.9",
		"teamspitcher" : "ELP,LEL PCL,CALL"
	},
	{
		"player" : "lucchjo01",
		"teams" : "6.6",
		"teamspitcher" : "TRI,FWA NORW,MIDW"
	},
	{
		"player" : "lucchjo01",
		"teams" : "6.6",
		"teamspitcher" : "LEL,SAN CALL,TL"
	},
	{
		"player" : "lucchjo01",
		"teams" : "9.5",
		"teamspitcher" : "LEL,ELP CALL,PCL"
	},
	{
		"player" : "rossty01",
		"teams" : "7.4",
		"teamspitcher" : "KNC MIDW"
	},
	{
		"player" : "rossty01",
		"teams" : "7.8",
		"teamspitcher" : "STK,MDL CALL,TL"
	},
	{
		"player" : "rossty01",
		"teams" : "7.8",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "rossty01",
		"teams" : "12.9",
		"teamspitcher" : "SAC,PHO,STK PCL,AZFL,CALL"
	},
	{
		"player" : "rossty01",
		"teams" : "7.9",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "rossty01",
		"teams" : "9.3",
		"teamspitcher" : "TUC PCL"
	},
	{
		"player" : "rossty01",
		"teams" : "40.5",
		"teamspitcher" : "LEL CALL"
	},
	{
		"player" : "rossty01",
		"teams" : "10.1",
		"teamspitcher" : "RRK,FRI PCL,TL"
	},
	{
		"player" : "richacl01",
		"teams" : "8.9",
		"teamspitcher" : "GRF,KAN PION,SALL"
	},
	{
		"player" : "richacl01",
		"teams" : "11.0",
		"teamspitcher" : "KAN,WSM SALL,CARL"
	},
	{
		"player" : "richacl01",
		"teams" : "8.9",
		"teamspitcher" : "WSM CARL"
	},
	{
		"player" : "richacl01",
		"teams" : "7.0",
		"teamspitcher" : "BIR,CHR SOUL,IL"
	},
	{
		"player" : "richacl01",
		"teams" : "7.5",
		"teamspitcher" : "TUC PCL"
	},
	{
		"player" : "richacl01",
		"teams" : "14.3",
		"teamspitcher" : "MOB,REN SOUL,PCL"
	},
	{
		"player" : "richacl01",
		"teams" : "7.8",
		"teamspitcher" : "INA,IWA,BDT IL,PCL,FLOR"
	},
	{
		"player" : "richacl01",
		"teams" : "5.7",
		"teamspitcher" : "KNX,IWA SOUL,PCL"
	},
	{
		"player" : "guerrja02",
		"teams" : "RSX · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "guerrja02",
		"teams" : "RES · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "guerrja02",
		"teams" : "GRV · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "guerrja02",
		"teams" : "LEL · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "guerrja02",
		"teams" : "LEL,SAN,PEA · CALL,TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "guerrja02",
		"teams" : "ELP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "uriaslu01",
		"teams" : "PDS,OBR,PDR · ARIZ,MXPW,DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "uriaslu01",
		"teams" : "FWA,OBR,TRI · MIDW,MXPW,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "uriaslu01",
		"teams" : "LEL,ELP · CALL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "uriaslu01",
		"teams" : "SAN,PEA · TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "uriaslu01",
		"teams" : "ELP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "mejiafr01",
		"teams" : "INS · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "mejiafr01",
		"teams" : "MHV · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "mejiafr01",
		"teams" : "LCO · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "mejiafr01",
		"teams" : "LCO,LBG,ESS · MIDW,CARL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "mejiafr01",
		"teams" : "AKR,GLN,ESS · EL,AZFL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "mejiafr01",
		"teams" : "CLB,ELP · IL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "headlch01",
		"teams" : "EUG,FWA · NORW,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "headlch01",
		"teams" : "LEL,PES · CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "headlch01",
		"teams" : "SAN · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "headlch01",
		"teams" : "POR · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "headlch01",
		"teams" : "LEL · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "headlch01",
		"teams" : "LEL · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "szczuma01",
		"teams" : "BOI,PEO,CBZ · NORW,MIDW,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "szczuma01",
		"teams" : "PEO,DYT · MIDW,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "szczuma01",
		"teams" : "DYT,KNX,MES · FLOR,SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "szczuma01",
		"teams" : "KNX · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "szczuma01",
		"teams" : "IWA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "szczuma01",
		"teams" : "IWA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "szczuma01",
		"teams" : "KNX · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "szczuma01",
		"teams" : "ELP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "lopezra02",
		"teams" : "BOI,CBZ · NORW,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "lopezra02",
		"teams" : "DYT,PEO,CBZ,MGZ · FLOR,MIDW,ARIZ,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "lopezra02",
		"teams" : "KNX · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "lopezra02",
		"teams" : "IWA,KNX · PCL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "lopezra02",
		"teams" : "IWA,SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "lopezra02",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "lopezra02",
		"teams" : "BFL,MAN · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "lopezra02",
		"teams" : "ELP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "cordefr02",
		"teams" : "PDR · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "cordefr02",
		"teams" : "PDS · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "cordefr02",
		"teams" : "EUG,FWA · NORW,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "cordefr02",
		"teams" : "FWA · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "cordefr02",
		"teams" : "LEL,SAN,PEA,ELP · CALL,TL,AZFL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "cordefr02",
		"teams" : "ELP,ESC · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "cordefr02",
		"teams" : "ELP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "ellisaj01",
		"teams" : "SGA · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "ellisaj01",
		"teams" : "VRO · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "ellisaj01",
		"teams" : "VRO · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "ellisaj01",
		"teams" : "JCK,MES · SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "ellisaj01",
		"teams" : "JCK · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "ellisaj01",
		"teams" : "LVG · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "ellisaj01",
		"teams" : "ABQ · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "ellisaj01",
		"teams" : "ABQ · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "ellisaj01",
		"teams" : "ABQ · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "ellisaj01",
		"teams" : "RCU · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "ellisaj01",
		"teams" : "ABQ · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "asuajca01",
		"teams" : "LOW · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "asuajca01",
		"teams" : "GRV,SAL · SALL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "asuajca01",
		"teams" : "PRT,SCO · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "asuajca01",
		"teams" : "ELP,ESC · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "asuajca01",
		"teams" : "ELP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "asuajca01",
		"teams" : "ELP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "spangco01",
		"teams" : "FWA,EUG · MIDW,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "spangco01",
		"teams" : "LEL,PEA · CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "spangco01",
		"teams" : "SAN,LEL,PEA · TL,CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "spangco01",
		"teams" : "SAN,ESC,EUG,PDS · TL,DOWL,NORW,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "spangco01",
		"teams" : "SAN,ELP · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "spangco01",
		"teams" : "ELP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "spangco01",
		"teams" : "ELP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "myerswi01",
		"teams" : "IDF,BRL · PION,APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "myerswi01",
		"teams" : "BUR,WMT · MIDW,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "myerswi01",
		"teams" : "NTA,SPS · TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "myerswi01",
		"teams" : "OMA,NTA · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "myerswi01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "myerswi01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "myerswi01",
		"teams" : "ELP,LEL · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "myerswi01",
		"teams" : "ELP,LEL · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "jankotr01",
		"teams" : "FWA,PDS · MIDW,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "jankotr01",
		"teams" : "LEL · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "jankotr01",
		"teams" : "SAN,EUG,LEL,PDS · TL,NORW,CALL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "jankotr01",
		"teams" : "SAN,ELP · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "jankotr01",
		"teams" : "ELP,PD2,PDS · PCL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "jankotr01",
		"teams" : "ELP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "reyesfr01",
		"teams" : "PDR · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "reyesfr01",
		"teams" : "PDS,EUG · ARIZ,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "reyesfr01",
		"teams" : "FWA,ESC · MIDW,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "reyesfr01",
		"teams" : "FWA,ESC · MIDW,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "reyesfr01",
		"teams" : "LEL · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "reyesfr01",
		"teams" : "SAN,PEA · TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "reyesfr01",
		"teams" : "ELP,ESC · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "margoma01",
		"teams" : "RSX · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "margoma01",
		"teams" : "LOW · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "margoma01",
		"teams" : "GRV,SAL,AZU · SALL,CARL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "margoma01",
		"teams" : "PRT,SAL,AZU · EL,CARL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "margoma01",
		"teams" : "ELP,AZU · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "margoma01",
		"teams" : "AZU,ELP · DOWL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "renfrhu01",
		"teams" : "EUG,FWA · NORW,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "renfrhu01",
		"teams" : "LEL,SAN,SPS · CALL,TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "renfrhu01",
		"teams" : "SAN,ELP · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "renfrhu01",
		"teams" : "ELP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "renfrhu01",
		"teams" : "ELP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "renfrhu01",
		"teams" : "ELP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "villach01",
		"teams" : "RG2 · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "villach01",
		"teams" : "RGS · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "villach01",
		"teams" : "HCK · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "villach01",
		"teams" : "MYR,DYT,OBR · CARL,FLOR,MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "villach01",
		"teams" : "KNX,OBR · SOUL,MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "villach01",
		"teams" : "KNX,IWA,OBR · SOUL,PCL,MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "villach01",
		"teams" : "IWA,OBR,KNX · PCL,MXPW,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "villach01",
		"teams" : "OBR · MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "villach01",
		"teams" : "ELP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "villach01",
		"teams" : "OBR · MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "galvifr01",
		"teams" : "WPT · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "galvifr01",
		"teams" : "LWD · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "galvifr01",
		"teams" : "CLW,REA,CLR · FLOR,EL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "galvifr01",
		"teams" : "REA,MGL · EL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "galvifr01",
		"teams" : "REA,ZUL,LHV · EL,VEWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "galvifr01",
		"teams" : "ZUL · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "galvifr01",
		"teams" : "LHV,ZUL · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "galvifr01",
		"teams" : "ZUL,LHV,CLW,CLR · VEWL,IL,FLOR,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "galvifr01",
		"teams" : "ZUL · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "pireljo01",
		"teams" : "YK1 · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "pireljo01",
		"teams" : "YNK · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "pireljo01",
		"teams" : "CHS · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "pireljo01",
		"teams" : "TAM,ZUL,PHO · FLOR,VEWL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "pireljo01",
		"teams" : "TRE,ZUL · EL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "pireljo01",
		"teams" : "TRE,ZUL · EL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "pireljo01",
		"teams" : "TRE,ZUL,SWB · EL,VEWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "pireljo01",
		"teams" : "SWB,ZUL · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "pireljo01",
		"teams" : "SWB,ZUL,TRE,TAM · IL,VEWL,EL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "pireljo01",
		"teams" : "ELP,ZUL · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "pireljo01",
		"teams" : "ELP,ZUL · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "hosmeer01",
		"teams" : "IDF · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "hosmeer01",
		"teams" : "BUR,WMT · MIDW,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "hosmeer01",
		"teams" : "WMT,NTA,SPS · CARL,TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "hosmeer01",
		"teams" : "OMA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "hosmeer01",
		"teams" : "OMA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "hedgeau01",
		"teams" : "PDS,EUG · ARIZ,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "hedgeau01",
		"teams" : "FWA · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "hedgeau01",
		"teams" : "LEL,SAN,PEA · CALL,TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "hedgeau01",
		"teams" : "SAN · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "hedgeau01",
		"teams" : "ESC,ELP · DOWL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "hedgeau01",
		"teams" : "ELP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "hedgeau01",
		"teams" : "PDS · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "hedgeau01",
		"teams" : "ELP,LEL · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "santaed01",
		"teams" : "12.4",
		"teamspitcher" : "PIR DOSL"
	},
	{
		"player" : "santaed01",
		"teams" : "7.9",
		"teamspitcher" : "WVA,CHL NYPL,SALL"
	},
	{
		"player" : "santaed01",
		"teams" : "7.5",
		"teamspitcher" : "ATO,BDT,INA,SPS EL,FLOR,IL,AZFL"
	},
	{
		"player" : "santaed01",
		"teams" : "9.9",
		"teamspitcher" : "INA,GIG IL,DOWL"
	},
	{
		"player" : "kontoge01",
		"teams" : "7.4",
		"teamspitcher" : "STI NYPL"
	},
	{
		"player" : "kontoge01",
		"teams" : "9.1",
		"teamspitcher" : "TAM,HON FLOR,HIWB"
	},
	{
		"player" : "kontoge01",
		"teams" : "8.0",
		"teamspitcher" : "TRE EL"
	},
	{
		"player" : "kontoge01",
		"teams" : "7.9",
		"teamspitcher" : "SWB,TRE IL,EL"
	},
	{
		"player" : "kontoge01",
		"teams" : "9.8",
		"teamspitcher" : "TRE,PHO,TAM,SWB EL,AZFL,FLOR,IL"
	},
	{
		"player" : "kontoge01",
		"teams" : "7.3",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "kontoge01",
		"teams" : "6.8",
		"teamspitcher" : "FRE PCL"
	},
	{
		"player" : "kontoge01",
		"teams" : "7.2",
		"teamspitcher" : "FRE PCL"
	},
	{
		"player" : "kontoge01",
		"teams" : "7.7",
		"teamspitcher" : "FRE PCL"
	},
	{
		"player" : "kontoge01",
		"teams" : "12.3",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "kontoge01",
		"teams" : "9.2",
		"teamspitcher" : "CLB,SWB IL"
	},
	{
		"player" : "burdini01",
		"teams" : "5.8",
		"teamspitcher" : "CDR,FTM MIDW,FLOR"
	},
	{
		"player" : "burdini01",
		"teams" : "6.8",
		"teamspitcher" : "CNG,FTM,SCO SOUL,FLOR,AZFL"
	},
	{
		"player" : "burdini01",
		"teams" : "12.0",
		"teamspitcher" : "CNG SOUL"
	},
	{
		"player" : "burdini01",
		"teams" : "4.8",
		"teamspitcher" : "CNG SOUL"
	},
	{
		"player" : "burdini01",
		"teams" : "13.1",
		"teamspitcher" : "INA,ATO,BDT IL,EL,FLOR"
	},
	{
		"player" : "neverdo01",
		"teams" : "12.6",
		"teamspitcher" : "BRD GULF"
	},
	{
		"player" : "neverdo01",
		"teams" : "7.9",
		"teamspitcher" : "BRD GULF"
	},
	{
		"player" : "neverdo01",
		"teams" : "8.9",
		"teamspitcher" : "BRD,SCS GULF,NYPL"
	},
	{
		"player" : "neverdo01",
		"teams" : "8.2",
		"teamspitcher" : "JAM NYPL"
	},
	{
		"player" : "neverdo01",
		"teams" : "11.0",
		"teamspitcher" : "CHL SALL"
	},
	{
		"player" : "neverdo01",
		"teams" : "7.6",
		"teamspitcher" : "CHL,BDT,WVA SALL,FLOR,NYPL"
	},
	{
		"player" : "neverdo01",
		"teams" : "7.4",
		"teamspitcher" : "INA,ATO IL,EL"
	},
	{
		"player" : "neverdo01",
		"teams" : "8.4",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "neverdo01",
		"teams" : "6.0",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "smokejo01",
		"teams" : "4.5",
		"teamspitcher" : "VMT NYPL"
	},
	{
		"player" : "smokejo01",
		"teams" : "10.4",
		"teamspitcher" : "NAT,HGR GULF,SALL"
	},
	{
		"player" : "smokejo01",
		"teams" : "9.7",
		"teamspitcher" : "NAT GULF"
	},
	{
		"player" : "smokejo01",
		"teams" : "10.4",
		"teamspitcher" : "HGR SALL"
	},
	{
		"player" : "smokejo01",
		"teams" : "5.7",
		"teamspitcher" : "POT CARL"
	},
	{
		"player" : "smokejo01",
		"teams" : "7.4",
		"teamspitcher" : "NAT,HGR,POT GULF,SALL,CARL"
	},
	{
		"player" : "smokejo01",
		"teams" : "7.2",
		"teamspitcher" : "SCE,BNG,SAV FLOR,EL,SALL"
	},
	{
		"player" : "smokejo01",
		"teams" : "10.4",
		"teamspitcher" : "LVG PCL"
	},
	{
		"player" : "smokejo01",
		"teams" : "7.7",
		"teamspitcher" : "LVG,SCE,BNG PCL,FLOR,EL"
	},
	{
		"player" : "smokejo01",
		"teams" : "8.9",
		"teamspitcher" : "INA,TOL IL"
	},
	{
		"player" : "kelake01",
		"teams" : "3.2",
		"teamspitcher" : "RGS ARIZ"
	},
	{
		"player" : "kelake01",
		"teams" : "8.7",
		"teamspitcher" : "HCK,SPO,SPS,MGL,RGS SALL,NORW,AZFL,VEWL,ARIZ"
	},
	{
		"player" : "kelake01",
		"teams" : "5.7",
		"teamspitcher" : "FRI,MYR TL,CARL"
	},
	{
		"player" : "kelake01",
		"teams" : "4.5",
		"teamspitcher" : "FRI TL"
	},
	{
		"player" : "kelake01",
		"teams" : "4.5",
		"teamspitcher" : "FRI,RRK TL,PCL"
	},
	{
		"player" : "kelake01",
		"teams" : "11.3",
		"teamspitcher" : "RRK PCL"
	},
	{
		"player" : "crickky01",
		"teams" : "11.6",
		"teamspitcher" : "GNT ARIZ"
	},
	{
		"player" : "crickky01",
		"teams" : "6.1",
		"teamspitcher" : "AUG SALL"
	},
	{
		"player" : "crickky01",
		"teams" : "6.1",
		"teamspitcher" : "SJO,SCO CALL,AZFL"
	},
	{
		"player" : "crickky01",
		"teams" : "7.8",
		"teamspitcher" : "RMD EL"
	},
	{
		"player" : "crickky01",
		"teams" : "6.7",
		"teamspitcher" : "RMD EL"
	},
	{
		"player" : "crickky01",
		"teams" : "9.1",
		"teamspitcher" : "RMD EL"
	},
	{
		"player" : "crickky01",
		"teams" : "7.4",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "crickky01",
		"teams" : "13.5",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "anderta01",
		"teams" : "9.1",
		"teamspitcher" : "BRS,WVA APPY,NYPL"
	},
	{
		"player" : "anderta01",
		"teams" : "9.1",
		"teamspitcher" : "CHL,BDT,SPS SALL,FLOR,AZFL"
	},
	{
		"player" : "anderta01",
		"teams" : "9.0",
		"teamspitcher" : "ATO EL"
	},
	{
		"player" : "anderta01",
		"teams" : "9.5",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "romeren01",
		"teams" : "6.1",
		"teamspitcher" : "DRY DOSL"
	},
	{
		"player" : "romeren01",
		"teams" : "8.7",
		"teamspitcher" : "DVS GULF"
	},
	{
		"player" : "romeren01",
		"teams" : "6.3",
		"teamspitcher" : "PRI,HDV APPY,NYPL"
	},
	{
		"player" : "romeren01",
		"teams" : "8.2",
		"teamspitcher" : "BWG MIDW"
	},
	{
		"player" : "romeren01",
		"teams" : "6.6",
		"teamspitcher" : "POE,ESC FLOR,DOWL"
	},
	{
		"player" : "romeren01",
		"teams" : "6.9",
		"teamspitcher" : "MTG,DHM SOUL,IL"
	},
	{
		"player" : "romeren01",
		"teams" : "9.6",
		"teamspitcher" : "DHM,ESC IL,DOWL"
	},
	{
		"player" : "romeren01",
		"teams" : "9.2",
		"teamspitcher" : "DHM,ESC,POE IL,DOWL,FLOR"
	},
	{
		"player" : "romeren01",
		"teams" : "5.7",
		"teamspitcher" : "ESC,POE DOWL,FLOR"
	},
	{
		"player" : "romeren01",
		"teams" : "9.0",
		"teamspitcher" : "SYR,ESC IL,DOWL"
	},
	{
		"player" : "romeren01",
		"teams" : "4.9",
		"teamspitcher" : "ESC,INA,ATO,BDT DOWL,IL,EL,FLOR"
	},
	{
		"player" : "riverfe01",
		"teams" : "10.2",
		"teamspitcher" : "VN2 VESL"
	},
	{
		"player" : "riverfe01",
		"teams" : "8.0",
		"teamspitcher" : "VN2 VESL"
	},
	{
		"player" : "riverfe01",
		"teams" : "9.5",
		"teamspitcher" : "PRI APPY"
	},
	{
		"player" : "riverfe01",
		"teams" : "9.1",
		"teamspitcher" : "BWG MIDW"
	},
	{
		"player" : "riverfe01",
		"teams" : "8.8",
		"teamspitcher" : "POE,CCS FLOR,VEWL"
	},
	{
		"player" : "riverfe01",
		"teams" : "9.1",
		"teamspitcher" : "HRB,MES,NAT,HGR EL,AZFL,GULF,SALL"
	},
	{
		"player" : "riverfe01",
		"teams" : "10.8",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "mcraeal01",
		"teams" : "11.5",
		"teamspitcher" : "JAM NYPL"
	},
	{
		"player" : "mcraeal01",
		"teams" : "10.4",
		"teamspitcher" : "CHL SALL"
	},
	{
		"player" : "mcraeal01",
		"teams" : "10.0",
		"teamspitcher" : "ATO,BDT,SPS EL,FLOR,AZFL"
	},
	{
		"player" : "mcraeal01",
		"teams" : "10.2",
		"teamspitcher" : "ATO EL"
	},
	{
		"player" : "mcraeal01",
		"teams" : "10.3",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "felizmi01",
		"teams" : "6.4",
		"teamspitcher" : "ARS DOSL"
	},
	{
		"player" : "felizmi01",
		"teams" : "9.5",
		"teamspitcher" : "AST GULF"
	},
	{
		"player" : "felizmi01",
		"teams" : "7.4",
		"teamspitcher" : "AST,GRE GULF,APPY"
	},
	{
		"player" : "felizmi01",
		"teams" : "6.9",
		"teamspitcher" : "TRC NYPL"
	},
	{
		"player" : "felizmi01",
		"teams" : "9.1",
		"teamspitcher" : "DAV MIDW"
	},
	{
		"player" : "felizmi01",
		"teams" : "6.6",
		"teamspitcher" : "CPC,LNR TL,CALL"
	},
	{
		"player" : "felizmi01",
		"teams" : "8.6",
		"teamspitcher" : "FRE PCL"
	},
	{
		"player" : "felizmi01",
		"teams" : "0.0",
		"teamspitcher" : "CPC,DAV TL,MIDW"
	},
	{
		"player" : "felizmi01",
		"teams" : "11.7",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "sadleca02",
		"teams" : "11.3",
		"teamspitcher" : "SCS NYPL"
	},
	{
		"player" : "sadleca02",
		"teams" : "6.9",
		"teamspitcher" : "CHL SALL"
	},
	{
		"player" : "sadleca02",
		"teams" : "8.6",
		"teamspitcher" : "BDT FLOR"
	},
	{
		"player" : "sadleca02",
		"teams" : "8.1",
		"teamspitcher" : "ATO,INA EL,IL"
	},
	{
		"player" : "sadleca02",
		"teams" : "9.0",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "sadleca02",
		"teams" : "8.0",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "sadleca02",
		"teams" : "9.4",
		"teamspitcher" : "ATO,INA,BDT EL,IL,FLOR"
	},
	{
		"player" : "sadleca02",
		"teams" : "9.2",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "rodriri05",
		"teams" : "7.0",
		"teamspitcher" : "ARS DOSL"
	},
	{
		"player" : "rodriri05",
		"teams" : "14.7",
		"teamspitcher" : "AST GULF"
	},
	{
		"player" : "rodriri05",
		"teams" : "7.6",
		"teamspitcher" : "GRE,LEX APPY,SALL"
	},
	{
		"player" : "rodriri05",
		"teams" : "9.3",
		"teamspitcher" : "DAV,TRC MIDW,NYPL"
	},
	{
		"player" : "rodriri05",
		"teams" : "7.5",
		"teamspitcher" : "OKC,CPC,LNR,AGU PCL,TL,CALL,DOWL"
	},
	{
		"player" : "rodriri05",
		"teams" : "6.9",
		"teamspitcher" : "FRE,BOW,NFK,AGU PCL,EL,IL,DOWL"
	},
	{
		"player" : "rodriri05",
		"teams" : "7.3",
		"teamspitcher" : "NFK,AGU IL,DOWL"
	},
	{
		"player" : "rodriri05",
		"teams" : "7.8",
		"teamspitcher" : "NFK,AGU IL,DOWL"
	},
	{
		"player" : "rodriri05",
		"teams" : "1.8",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "glasnty01",
		"teams" : "5.4",
		"teamspitcher" : "BRD,SCS GULF,NYPL"
	},
	{
		"player" : "glasnty01",
		"teams" : "4.4",
		"teamspitcher" : "CHL SALL"
	},
	{
		"player" : "glasnty01",
		"teams" : "5.9",
		"teamspitcher" : "BDT,SCO FLOR,AZFL"
	},
	{
		"player" : "glasnty01",
		"teams" : "6.3",
		"teamspitcher" : "ATO,INA,WVA EL,IL,NYPL"
	},
	{
		"player" : "glasnty01",
		"teams" : "5.3",
		"teamspitcher" : "INA,ATO IL,EL"
	},
	{
		"player" : "glasnty01",
		"teams" : "5.5",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "holmecl01",
		"teams" : "5.3",
		"teamspitcher" : "SCS NYPL"
	},
	{
		"player" : "holmecl01",
		"teams" : "8.0",
		"teamspitcher" : "CHL SALL"
	},
	{
		"player" : "holmecl01",
		"teams" : "7.7",
		"teamspitcher" : "BDT,BRD FLOR,GULF"
	},
	{
		"player" : "holmecl01",
		"teams" : "9.1",
		"teamspitcher" : "ATO EL"
	},
	{
		"player" : "holmecl01",
		"teams" : "7.7",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "holmecl01",
		"teams" : "8.7",
		"teamspitcher" : "INA,BDT IL,FLOR"
	},
	{
		"player" : "archech01",
		"teams" : "8.1",
		"teamspitcher" : "INS,BRL GULF,APPY"
	},
	{
		"player" : "archech01",
		"teams" : "9.7",
		"teamspitcher" : "INS,LCO GULF,SALL"
	},
	{
		"player" : "archech01",
		"teams" : "7.2",
		"teamspitcher" : "LCO SALL"
	},
	{
		"player" : "archech01",
		"teams" : "6.4",
		"teamspitcher" : "PEO MIDW"
	},
	{
		"player" : "archech01",
		"teams" : "6.4",
		"teamspitcher" : "DYT,KNX FLOR,SOUL"
	},
	{
		"player" : "archech01",
		"teams" : "9.0",
		"teamspitcher" : "MTG,DHM SOUL,IL"
	},
	{
		"player" : "archech01",
		"teams" : "7.0",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "archech01",
		"teams" : "9.0",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "archech01",
		"teams" : "0.0",
		"teamspitcher" : "POE FLOR"
	},
	{
		"player" : "braulst01",
		"teams" : "7.3",
		"teamspitcher" : "ADN NYPL"
	},
	{
		"player" : "braulst01",
		"teams" : "7.0",
		"teamspitcher" : "DEL,FDK SALL,CARL"
	},
	{
		"player" : "braulst01",
		"teams" : "7.8",
		"teamspitcher" : "ATO,BDT,GLN EL,FLOR,AZFL"
	},
	{
		"player" : "braulst01",
		"teams" : "8.0",
		"teamspitcher" : "INA,WVA IL,NYPL"
	},
	{
		"player" : "braulst01",
		"teams" : "6.4",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "braulst01",
		"teams" : "10.1",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "kinghni01",
		"teams" : "9.0",
		"teamspitcher" : "BRD GULF"
	},
	{
		"player" : "kinghni01",
		"teams" : "8.0",
		"teamspitcher" : "SCS NYPL"
	},
	{
		"player" : "kinghni01",
		"teams" : "8.1",
		"teamspitcher" : "CHL SALL"
	},
	{
		"player" : "kinghni01",
		"teams" : "7.8",
		"teamspitcher" : "ATO,BDT EL,FLOR"
	},
	{
		"player" : "kinghni01",
		"teams" : "8.0",
		"teamspitcher" : "INA,ATO IL,EL"
	},
	{
		"player" : "kinghni01",
		"teams" : "9.8",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "kinghni01",
		"teams" : "7.2",
		"teamspitcher" : "BRD,BDT,ATO GULF,FLOR,EL"
	},
	{
		"player" : "kinghni01",
		"teams" : "9.1",
		"teamspitcher" : "INA,BDT IL,FLOR"
	},
	{
		"player" : "kinghni01",
		"teams" : "8.6",
		"teamspitcher" : "INA,ATO IL,EL"
	},
	{
		"player" : "kuhlch01",
		"teams" : "8.6",
		"teamspitcher" : "JAM NYPL"
	},
	{
		"player" : "kuhlch01",
		"teams" : "8.3",
		"teamspitcher" : "BDT FLOR"
	},
	{
		"player" : "kuhlch01",
		"teams" : "7.8",
		"teamspitcher" : "ATO EL"
	},
	{
		"player" : "kuhlch01",
		"teams" : "8.7",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "musgrjo01",
		"teams" : "6.9",
		"teamspitcher" : "BJY,BLD GULF,APPY"
	},
	{
		"player" : "musgrjo01",
		"teams" : "10.1",
		"teamspitcher" : "GRE,BLD APPY"
	},
	{
		"player" : "musgrjo01",
		"teams" : "11.8",
		"teamspitcher" : "AST GULF"
	},
	{
		"player" : "musgrjo01",
		"teams" : "7.5",
		"teamspitcher" : "TRC NYPL"
	},
	{
		"player" : "musgrjo01",
		"teams" : "7.6",
		"teamspitcher" : "CPC,LNR,DAV TL,CALL,MIDW"
	},
	{
		"player" : "musgrjo01",
		"teams" : "8.3",
		"teamspitcher" : "FRE,CPC PCL,TL"
	},
	{
		"player" : "musgrjo01",
		"teams" : "1.3",
		"teamspitcher" : "FRE PCL"
	},
	{
		"player" : "musgrjo01",
		"teams" : "8.7",
		"teamspitcher" : "INA,ATO,BDT IL,EL,FLOR"
	},
	{
		"player" : "willitr01",
		"teams" : "8.2",
		"teamspitcher" : "BAT,GBO,JUM NYPL,SALL,GULF"
	},
	{
		"player" : "willitr01",
		"teams" : "10.0",
		"teamspitcher" : "JUP,JCK FLOR,SOUL"
	},
	{
		"player" : "willitr01",
		"teams" : "9.5",
		"teamspitcher" : "JCK,NOR,GLN,MES SOUL,PCL,AZFL"
	},
	{
		"player" : "willitr01",
		"teams" : "8.3",
		"teamspitcher" : "INA,BDT IL,FLOR"
	},
	{
		"player" : "novaiv01",
		"teams" : "7.5",
		"teamspitcher" : "YNK GULF"
	},
	{
		"player" : "novaiv01",
		"teams" : "10.8",
		"teamspitcher" : "CHS,ESC SALL,DOWL"
	},
	{
		"player" : "novaiv01",
		"teams" : "10.2",
		"teamspitcher" : "TAM FLOR"
	},
	{
		"player" : "novaiv01",
		"teams" : "8.4",
		"teamspitcher" : "TRE,SWB,ESC EL,IL,DOWL"
	},
	{
		"player" : "novaiv01",
		"teams" : "8.4",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "novaiv01",
		"teams" : "9.0",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "novaiv01",
		"teams" : "7.6",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "novaiv01",
		"teams" : "8.6",
		"teamspitcher" : "SWB,TAM IL,FLOR"
	},
	{
		"player" : "taillja01",
		"teams" : "8.6",
		"teamspitcher" : "CHL SALL"
	},
	{
		"player" : "taillja01",
		"teams" : "7.6",
		"teamspitcher" : "BDT,ATO FLOR,EL"
	},
	{
		"player" : "taillja01",
		"teams" : "8.7",
		"teamspitcher" : "ATO,INA,SCO EL,IL,AZFL"
	},
	{
		"player" : "taillja01",
		"teams" : "6.4",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "taillja01",
		"teams" : "8.4",
		"teamspitcher" : "INA,ATO IL,EL"
	},
	{
		"player" : "bostich01",
		"teams" : "ATH · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "bostich01",
		"teams" : "VMT · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "bostich01",
		"teams" : "BEL · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "bostich01",
		"teams" : "MYR · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "bostich01",
		"teams" : "HRB,POT,SRV · EL,CARL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "bostich01",
		"teams" : "HRB,SYR · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "bostich01",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "bostich01",
		"teams" : "INA,NOR,BRD · IL,PCL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "kangju01",
		"teams" : "HYU · KBO",
		"teamspitcher" : ""
	},
	{
		"player" : "kangju01",
		"teams" : "HYU · KBO",
		"teamspitcher" : ""
	},
	{
		"player" : "kangju01",
		"teams" : "WOI · KBO",
		"teamspitcher" : ""
	},
	{
		"player" : "kangju01",
		"teams" : "WOI · KBO",
		"teamspitcher" : ""
	},
	{
		"player" : "kangju01",
		"teams" : "WOI · KBO",
		"teamspitcher" : ""
	},
	{
		"player" : "kangju01",
		"teams" : "WOI · KBO",
		"teamspitcher" : ""
	},
	{
		"player" : "kangju01",
		"teams" : "WOI · KBO",
		"teamspitcher" : ""
	},
	{
		"player" : "kangju01",
		"teams" : "WOI · KBO",
		"teamspitcher" : ""
	},
	{
		"player" : "kangju01",
		"teams" : "WOI · KBO",
		"teamspitcher" : ""
	},
	{
		"player" : "kangju01",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "kangju01",
		"teams" : "AGU · DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "kangju01",
		"teams" : "INA,BDT · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "lavarry01",
		"teams" : "LOW · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "lavarry01",
		"teams" : "GRV · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "lavarry01",
		"teams" : "SAL,PRT,PEA · CARL,EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "lavarry01",
		"teams" : "PAW,PRT,MGA · IL,EL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "lavarry01",
		"teams" : "PAW · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "lavarry01",
		"teams" : "PAW · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "lavarry01",
		"teams" : "PAW,PRT,RES · IL,EL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "lavarry01",
		"teams" : "GWI · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "lavarry01",
		"teams" : "MAN,GWI · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "lavarry01",
		"teams" : "NVL · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "lavarry01",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "krameke01",
		"teams" : "WVA,CHL · NYPL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "krameke01",
		"teams" : "BDT · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "krameke01",
		"teams" : "ATO,GLN,WVA,BRD · EL,AZFL,NYPL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "krameke01",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "stallja01",
		"teams" : "SCS,ATO · NYPL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "stallja01",
		"teams" : "BDT · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "stallja01",
		"teams" : "BDT · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "stallja01",
		"teams" : "ATO · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "stallja01",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "stallja01",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "stallja01",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "hechaad01",
		"teams" : "SOC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "hechaad01",
		"teams" : "SOC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "hechaad01",
		"teams" : "SOC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "hechaad01",
		"teams" : "MAN,DUN,PEA · EL,FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "hechaad01",
		"teams" : "MAN,LVG,PHO · EL,PCL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "hechaad01",
		"teams" : "LVG · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "hechaad01",
		"teams" : "JUP · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "hechaad01",
		"teams" : "JUP · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "hechaad01",
		"teams" : "JUP,JCK · FLOR,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "hechaad01",
		"teams" : "POE,DHM · FLOR,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "reyespa01",
		"teams" : "PS2,PIR · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "reyespa01",
		"teams" : "PIR · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "reyespa01",
		"teams" : "BRS · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "reyespa01",
		"teams" : "CHL · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "reyespa01",
		"teams" : "BDT,ESC · FLOR,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "reyespa01",
		"teams" : "ATO,ESC · EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "reyespa01",
		"teams" : "INA,LCY,ATO · IL,DOWL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "morofma01",
		"teams" : "BRD · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "morofma01",
		"teams" : "CHL · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "morofma01",
		"teams" : "BDT · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "morofma01",
		"teams" : "ATO · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "morofma01",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "morofma01",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "morofma01",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "newmake01",
		"teams" : "WVA,CHL · NYPL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "newmake01",
		"teams" : "ATO,BDT · EL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "newmake01",
		"teams" : "ATO,INA · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "newmake01",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "luplojo01",
		"teams" : "JAM · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "luplojo01",
		"teams" : "CHL · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "luplojo01",
		"teams" : "BDT · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "luplojo01",
		"teams" : "ATO,INA · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "luplojo01",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "osunajo01",
		"teams" : "SJQ · VESL",
		"teamspitcher" : ""
	},
	{
		"player" : "osunajo01",
		"teams" : "BRD,SCS · GULF,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "osunajo01",
		"teams" : "CHL · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "osunajo01",
		"teams" : "BDT,MGL · FLOR,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "osunajo01",
		"teams" : "BDT,MGA · FLOR,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "osunajo01",
		"teams" : "ATO,MGA,BDT · EL,VEWL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "osunajo01",
		"teams" : "ATO,MGA,INA · EL,VEWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "osunajo01",
		"teams" : "MGA,INA · VEWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "osunajo01",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "meadoau01",
		"teams" : "BRD,JAM · GULF,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "meadoau01",
		"teams" : "CHL,BRS,BRD · SALL,APPY,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "meadoau01",
		"teams" : "BDT,GLN,ATO · FLOR,AZFL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "meadoau01",
		"teams" : "ATO,INA,WVA · EL,IL,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "meadoau01",
		"teams" : "INA,WVA,BRD · IL,NYPL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "meadoau01",
		"teams" : "INA,DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "rodrise01",
		"teams" : "ANG · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "rodrise01",
		"teams" : "PVO,CDR · PION,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "rodrise01",
		"teams" : "CDR · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "rodrise01",
		"teams" : "RCU,ARK,SLK · CALL,TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "rodrise01",
		"teams" : "ARK,SPS · TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "rodrise01",
		"teams" : "SLK,GIG · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "rodrise01",
		"teams" : "SLK,DHM · PCL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "rodrise01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "rodrise01",
		"teams" : "GWI,MSS,KIS,ROM · IL,SOUL,GULF,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "rodrise01",
		"teams" : "INA,BDT · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "freesda01",
		"teams" : "FWA,EUG · MIDW,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "freesda01",
		"teams" : "LEL · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "freesda01",
		"teams" : "MEM,ORN · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "freesda01",
		"teams" : "MEM,SPD,CDS · PCL,TL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "freesda01",
		"teams" : "SPD · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "freesda01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "freesda01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "freesda01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "freesda01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "diazel01",
		"teams" : "SJQ · VESL",
		"teamspitcher" : ""
	},
	{
		"player" : "diazel01",
		"teams" : "BRD · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "diazel01",
		"teams" : "CHL · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "diazel01",
		"teams" : "CHL · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "diazel01",
		"teams" : "BDT,MGA · FLOR,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "diazel01",
		"teams" : "ATO,SCO,MGA,INA · EL,AZFL,VEWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "diazel01",
		"teams" : "INA,MGA · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "diazel01",
		"teams" : "INA,MGA,BDT,ATO · IL,VEWL,FLOR,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "diazel01",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "fraziad01",
		"teams" : "JAM · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "fraziad01",
		"teams" : "BDT · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "fraziad01",
		"teams" : "ATO,GLN · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "fraziad01",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "fraziad01",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "fraziad01",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "polangr01",
		"teams" : "PIR · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "polangr01",
		"teams" : "BRD · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "polangr01",
		"teams" : "BRD,SCS · GULF,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "polangr01",
		"teams" : "CHL,ESC · SALL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "polangr01",
		"teams" : "ATO,BDT,ESC,INA · EL,FLOR,DOWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "polangr01",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "martest01",
		"teams" : "PIR · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "martest01",
		"teams" : "PIR · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "martest01",
		"teams" : "CHL,AGU,BRD,LBG · SALL,DOWL,GULF,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "martest01",
		"teams" : "BDT,AGU,BRD · FLOR,DOWL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "martest01",
		"teams" : "ATO,ESC · EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "martest01",
		"teams" : "INA,ESC,SCS · IL,DOWL,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "martest01",
		"teams" : "ESC · DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "martest01",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "martest01",
		"teams" : "ESC,INA,BDT · DOWL,IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "dickeco01",
		"teams" : "CAS · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "dickeco01",
		"teams" : "AVL · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "dickeco01",
		"teams" : "TUL,MOD,SRV · TL,CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "dickeco01",
		"teams" : "CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "dickeco01",
		"teams" : "CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "dickeco01",
		"teams" : "ABQ,MOD · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "moranco01",
		"teams" : "GBO,GLN · SALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "moranco01",
		"teams" : "JUP,CPC · FLOR,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "moranco01",
		"teams" : "CPC · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "moranco01",
		"teams" : "FRE · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "moranco01",
		"teams" : "FRE,DAV · PCL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "mercejo03",
		"teams" : "HCK,SCS · SALL,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "mercejo03",
		"teams" : "LBG · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "mercejo03",
		"teams" : "ATO,MES · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "mercejo03",
		"teams" : "ATO,INA · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "mercejo03",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "mercejo03",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "mercejo03",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "harrijo05",
		"teams" : "PEO,BOI · MIDW,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "harrijo05",
		"teams" : "PEO,LBG,DYT · MIDW,CARL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "harrijo05",
		"teams" : "ATO,MES · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "harrijo05",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "harrijo05",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "harrijo05",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "harrijo05",
		"teams" : "ATO · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "belljo02",
		"teams" : "CHL · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "belljo02",
		"teams" : "CHL · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "belljo02",
		"teams" : "BDT,ATO,SCO · FLOR,EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "belljo02",
		"teams" : "ATO,INA,CCS · EL,IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "belljo02",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "cervefr01",
		"teams" : "YNK · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "cervefr01",
		"teams" : "STI · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "cervefr01",
		"teams" : "TAM,LRA · FLOR,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "cervefr01",
		"teams" : "TRE,LRA,TAM,YNK · EL,VEWL,FLOR,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "cervefr01",
		"teams" : "SWB,TRE,LRA,YNK · IL,EL,VEWL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "cervefr01",
		"teams" : "SWB,TAM · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "cervefr01",
		"teams" : "SWB,MGL · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "cervefr01",
		"teams" : "TRE,SWB,TAM · EL,IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "cervefr01",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "cervefr01",
		"teams" : "ATO · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "ramosed02",
		"teams" : "13.8",
		"teamspitcher" : "SJ2 VESL"
	},
	{
		"player" : "ramosed02",
		"teams" : "9.6",
		"teamspitcher" : "TR1 VESL"
	},
	{
		"player" : "ramosed02",
		"teams" : "6.1",
		"teamspitcher" : "WPT,TR1,CLR NYPL,VESL,GULF"
	},
	{
		"player" : "ramosed02",
		"teams" : "7.1",
		"teamspitcher" : "CLW,REA,GLN,LGU FLOR,EL,AZFL,VEWL"
	},
	{
		"player" : "ramosed02",
		"teams" : "5.6",
		"teamspitcher" : "LHV,REA IL,EL"
	},
	{
		"player" : "ramosed02",
		"teams" : "5.4",
		"teamspitcher" : "LHV IL"
	},
	{
		"player" : "ramosed02",
		"teams" : "12.2",
		"teamspitcher" : "LHV,REA IL,EL"
	},
	{
		"player" : "curtiza01",
		"teams" : "6.0",
		"teamspitcher" : "HIL NORW"
	},
	{
		"player" : "curtiza01",
		"teams" : "5.5",
		"teamspitcher" : "KNC MIDW"
	},
	{
		"player" : "curtiza01",
		"teams" : "8.7",
		"teamspitcher" : "MOB,VIS SOUL,CALL"
	},
	{
		"player" : "curtiza01",
		"teams" : "7.8",
		"teamspitcher" : "ARK,LCY TL,DOWL"
	},
	{
		"player" : "curtiza01",
		"teams" : "6.0",
		"teamspitcher" : "LHV,RRK IL,PCL"
	},
	{
		"player" : "morgaad01",
		"teams" : "7.0",
		"teamspitcher" : "WPT NYPL"
	},
	{
		"player" : "morgaad01",
		"teams" : "7.8",
		"teamspitcher" : "CLW,REA FLOR,EL"
	},
	{
		"player" : "morgaad01",
		"teams" : "10.3",
		"teamspitcher" : "LHV,CLR IL,GULF"
	},
	{
		"player" : "morgaad01",
		"teams" : "14.3",
		"teamspitcher" : "SCO AZFL"
	},
	{
		"player" : "morgaad01",
		"teams" : "10.7",
		"teamspitcher" : "LHV IL"
	},
	{
		"player" : "morgaad01",
		"teams" : "7.7",
		"teamspitcher" : "LHV IL"
	},
	{
		"player" : "morgaad01",
		"teams" : "9.9",
		"teamspitcher" : "LHV IL"
	},
	{
		"player" : "aranovi01",
		"teams" : "9.5",
		"teamspitcher" : "DGR ARIZ"
	},
	{
		"player" : "aranovi01",
		"teams" : "9.0",
		"teamspitcher" : "GRL,OBR MIDW,MXPW"
	},
	{
		"player" : "aranovi01",
		"teams" : "9.1",
		"teamspitcher" : "CLW,OBR FLOR,MXPW"
	},
	{
		"player" : "aranovi01",
		"teams" : "6.9",
		"teamspitcher" : "CLW,REA,SCO,OBR FLOR,EL,AZFL,MXPW"
	},
	{
		"player" : "aranovi01",
		"teams" : "9.1",
		"teamspitcher" : "REA EL"
	},
	{
		"player" : "aranovi01",
		"teams" : "13.5",
		"teamspitcher" : "REA,LHV EL,IL"
	},
	{
		"player" : "loupaa01",
		"teams" : "9.4",
		"teamspitcher" : "BJY GULF"
	},
	{
		"player" : "loupaa01",
		"teams" : "9.7",
		"teamspitcher" : "LNS MIDW"
	},
	{
		"player" : "loupaa01",
		"teams" : "9.2",
		"teamspitcher" : "DUN,PHO FLOR,AZFL"
	},
	{
		"player" : "loupaa01",
		"teams" : "9.1",
		"teamspitcher" : "MAN EL"
	},
	{
		"player" : "loupaa01",
		"teams" : "13.5",
		"teamspitcher" : "BFL IL"
	},
	{
		"player" : "loupaa01",
		"teams" : "10.0",
		"teamspitcher" : "BFL,DUN IL,FLOR"
	},
	{
		"player" : "milneho01",
		"teams" : "7.1",
		"teamspitcher" : "LWD,WPT SALL,NYPL"
	},
	{
		"player" : "milneho01",
		"teams" : "9.2",
		"teamspitcher" : "CLW FLOR"
	},
	{
		"player" : "milneho01",
		"teams" : "9.2",
		"teamspitcher" : "REA EL"
	},
	{
		"player" : "milneho01",
		"teams" : "8.0",
		"teamspitcher" : "REA,MGZ,CLW EL,PRWL,FLOR"
	},
	{
		"player" : "milneho01",
		"teams" : "8.2",
		"teamspitcher" : "REA,LHV,LRA EL,IL,VEWL"
	},
	{
		"player" : "milneho01",
		"teams" : "7.8",
		"teamspitcher" : "LHV IL"
	},
	{
		"player" : "milneho01",
		"teams" : "7.7",
		"teamspitcher" : "LHV,DHM IL"
	},
	{
		"player" : "garcilu03",
		"teams" : "7.6",
		"teamspitcher" : "DDR DOSL"
	},
	{
		"player" : "garcilu03",
		"teams" : "10.3",
		"teamspitcher" : "DGR GULF"
	},
	{
		"player" : "garcilu03",
		"teams" : "6.6",
		"teamspitcher" : "OGD PION"
	},
	{
		"player" : "garcilu03",
		"teams" : "8.2",
		"teamspitcher" : "GRL,POT MIDW,CARL"
	},
	{
		"player" : "garcilu03",
		"teams" : "10.4",
		"teamspitcher" : "HGR,POT SALL,CARL"
	},
	{
		"player" : "garcilu03",
		"teams" : "5.9",
		"teamspitcher" : "CLW,ESS,REA,LHV FLOR,DOWL,EL,IL"
	},
	{
		"player" : "garcilu03",
		"teams" : "6.9",
		"teamspitcher" : "LHV,ESS IL,DOWL"
	},
	{
		"player" : "garcilu03",
		"teams" : "6.5",
		"teamspitcher" : "LHV,ESS IL,DOWL"
	},
	{
		"player" : "garcilu03",
		"teams" : "9.6",
		"teamspitcher" : "LHV IL"
	},
	{
		"player" : "garcilu03",
		"teams" : "23.1",
		"teamspitcher" : "LHV,REA IL,EL"
	},
	{
		"player" : "avilalu01",
		"teams" : "9.9",
		"teamspitcher" : "BV1 DOSL"
	},
	{
		"player" : "avilalu01",
		"teams" : "6.9",
		"teamspitcher" : "BV1 DOSL"
	},
	{
		"player" : "avilalu01",
		"teams" : "7.3",
		"teamspitcher" : "KIS GULF"
	},
	{
		"player" : "avilalu01",
		"teams" : "7.2",
		"teamspitcher" : "DAN,LRA APPY,VEWL"
	},
	{
		"player" : "avilalu01",
		"teams" : "7.6",
		"teamspitcher" : "MYR,LRA,ROM CARL,VEWL,SALL"
	},
	{
		"player" : "avilalu01",
		"teams" : "8.8",
		"teamspitcher" : "MSS,LRA SOUL,VEWL"
	},
	{
		"player" : "avilalu01",
		"teams" : "6.3",
		"teamspitcher" : "MSS,LRA SOUL,VEWL"
	},
	{
		"player" : "avilalu01",
		"teams" : "8.7",
		"teamspitcher" : "GWI,LRA IL,VEWL"
	},
	{
		"player" : "avilalu01",
		"teams" : "8.9",
		"teamspitcher" : "OKC,LRA PCL,VEWL"
	},
	{
		"player" : "avilalu01",
		"teams" : "4.5",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "neshepa01",
		"teams" : "4.3",
		"teamspitcher" : "ELZ APPY"
	},
	{
		"player" : "neshepa01",
		"teams" : "6.2",
		"teamspitcher" : "QDS,FTM,NBR MIDW,FLOR,EL"
	},
	{
		"player" : "neshepa01",
		"teams" : "8.4",
		"teamspitcher" : "NBR,FTM EL,FLOR"
	},
	{
		"player" : "neshepa01",
		"teams" : "7.5",
		"teamspitcher" : "NBR EL"
	},
	{
		"player" : "neshepa01",
		"teams" : "6.2",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "neshepa01",
		"teams" : "9.4",
		"teamspitcher" : "ROC,FTM IL,FLOR"
	},
	{
		"player" : "neshepa01",
		"teams" : "9.9",
		"teamspitcher" : "TUC PCL"
	},
	{
		"player" : "neshepa01",
		"teams" : "8.6",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "neshepa01",
		"teams" : "9.0",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "neshepa01",
		"teams" : "12.0",
		"teamspitcher" : "REA,CLW EL,FLOR"
	},
	{
		"player" : "riosya01",
		"teams" : "11.1",
		"teamspitcher" : "CLR GULF"
	},
	{
		"player" : "riosya01",
		"teams" : "13.2",
		"teamspitcher" : "CLR GULF"
	},
	{
		"player" : "riosya01",
		"teams" : "8.9",
		"teamspitcher" : "WPT NYPL"
	},
	{
		"player" : "riosya01",
		"teams" : "9.1",
		"teamspitcher" : "LWD,SNT SALL,PRWL"
	},
	{
		"player" : "riosya01",
		"teams" : "7.5",
		"teamspitcher" : "CLW,GLN FLOR,AZFL"
	},
	{
		"player" : "riosya01",
		"teams" : "9.3",
		"teamspitcher" : "CLW,MGZ,REA,CLR FLOR,PRWL,EL,GULF"
	},
	{
		"player" : "riosya01",
		"teams" : "5.5",
		"teamspitcher" : "REA,LHV,MGZ EL,IL,PRWL"
	},
	{
		"player" : "riosya01",
		"teams" : "7.1",
		"teamspitcher" : "LHV IL"
	},
	{
		"player" : "hunteto02",
		"teams" : "7.6",
		"teamspitcher" : "SPO NORW"
	},
	{
		"player" : "hunteto02",
		"teams" : "9.3",
		"teamspitcher" : "BAK,OKC,FRI CALL,PCL,TL"
	},
	{
		"player" : "hunteto02",
		"teams" : "10.5",
		"teamspitcher" : "OKC,FRI PCL,TL"
	},
	{
		"player" : "hunteto02",
		"teams" : "9.5",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "hunteto02",
		"teams" : "11.7",
		"teamspitcher" : "RRK,FRI PCL,TL"
	},
	{
		"player" : "hunteto02",
		"teams" : "7.1",
		"teamspitcher" : "NFK,BOW IL,EL"
	},
	{
		"player" : "hunteto02",
		"teams" : "0.0",
		"teamspitcher" : "DEL SALL"
	},
	{
		"player" : "hunteto02",
		"teams" : "8.4",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "hunteto02",
		"teams" : "27.0",
		"teamspitcher" : "POE FLOR"
	},
	{
		"player" : "hunteto02",
		"teams" : "3.9",
		"teamspitcher" : "CLW,REA FLOR,EL"
	},
	{
		"player" : "nerishe01",
		"teams" : "6.5",
		"teamspitcher" : "PHL DOSL"
	},
	{
		"player" : "nerishe01",
		"teams" : "7.8",
		"teamspitcher" : "LWD,WPT SALL,NYPL"
	},
	{
		"player" : "nerishe01",
		"teams" : "7.8",
		"teamspitcher" : "CLW,AZU FLOR,DOWL"
	},
	{
		"player" : "nerishe01",
		"teams" : "8.1",
		"teamspitcher" : "REA,AZU,LMO EL,DOWL,MXPW"
	},
	{
		"player" : "nerishe01",
		"teams" : "7.2",
		"teamspitcher" : "LHV,REA,AZU IL,EL,DOWL"
	},
	{
		"player" : "nerishe01",
		"teams" : "8.9",
		"teamspitcher" : "LHV,AZU IL,DOWL"
	},
	{
		"player" : "nerishe01",
		"teams" : "9.0",
		"teamspitcher" : "AZU DOWL"
	},
	{
		"player" : "nerishe01",
		"teams" : "4.3",
		"teamspitcher" : "LHV IL"
	},
	{
		"player" : "eickhje01",
		"teams" : "4.3",
		"teamspitcher" : "SPO,RGS NORW,ARIZ"
	},
	{
		"player" : "eickhje01",
		"teams" : "9.4",
		"teamspitcher" : "HCK SALL"
	},
	{
		"player" : "eickhje01",
		"teams" : "8.9",
		"teamspitcher" : "MYR,FRI CARL,TL"
	},
	{
		"player" : "eickhje01",
		"teams" : "7.5",
		"teamspitcher" : "FRI TL"
	},
	{
		"player" : "eickhje01",
		"teams" : "8.0",
		"teamspitcher" : "RRK,LHV,FRI PCL,IL,TL"
	},
	{
		"player" : "eickhje01",
		"teams" : "3.6",
		"teamspitcher" : "REA EL"
	},
	{
		"player" : "eickhje01",
		"teams" : "7.3",
		"teamspitcher" : "LHV,CLW,REA IL,FLOR,EL"
	},
	{
		"player" : "dominse01",
		"teams" : "8.4",
		"teamspitcher" : "PHL DOSL"
	},
	{
		"player" : "dominse01",
		"teams" : "7.1",
		"teamspitcher" : "PHL DOSL"
	},
	{
		"player" : "dominse01",
		"teams" : "9.0",
		"teamspitcher" : "CLR GULF"
	},
	{
		"player" : "dominse01",
		"teams" : "7.0",
		"teamspitcher" : "CLR GULF"
	},
	{
		"player" : "dominse01",
		"teams" : "5.9",
		"teamspitcher" : "LWD,WPT,GIG SALL,NYPL,DOWL"
	},
	{
		"player" : "dominse01",
		"teams" : "7.7",
		"teamspitcher" : "CLW,GIG,CLR FLOR,DOWL,GULF"
	},
	{
		"player" : "dominse01",
		"teams" : "4.3",
		"teamspitcher" : "REA,LHV EL,IL"
	},
	{
		"player" : "thompja03",
		"teams" : "4.4",
		"teamspitcher" : "LAT GULF"
	},
	{
		"player" : "thompja03",
		"teams" : "8.5",
		"teamspitcher" : "WMI MIDW"
	},
	{
		"player" : "thompja03",
		"teams" : "7.8",
		"teamspitcher" : "LAK,FRI,ERI FLOR,TL,EL"
	},
	{
		"player" : "thompja03",
		"teams" : "8.6",
		"teamspitcher" : "FRI,REA TL,EL"
	},
	{
		"player" : "thompja03",
		"teams" : "7.3",
		"teamspitcher" : "LHV IL"
	},
	{
		"player" : "thompja03",
		"teams" : "10.3",
		"teamspitcher" : "LHV IL"
	},
	{
		"player" : "thompja03",
		"teams" : "7.4",
		"teamspitcher" : "LHV,ESC,CSP IL,DOWL,PCL"
	},
	{
		"player" : "leitema02",
		"teams" : "6.8",
		"teamspitcher" : "CLR,LWD,CLW GULF,SALL,FLOR"
	},
	{
		"player" : "leitema02",
		"teams" : "9.7",
		"teamspitcher" : "LWD,CLW SALL,FLOR"
	},
	{
		"player" : "leitema02",
		"teams" : "8.5",
		"teamspitcher" : "CLW,REA FLOR,EL"
	},
	{
		"player" : "leitema02",
		"teams" : "7.9",
		"teamspitcher" : "REA EL"
	},
	{
		"player" : "leitema02",
		"teams" : "8.1",
		"teamspitcher" : "LHV IL"
	},
	{
		"player" : "leitema02",
		"teams" : "7.8",
		"teamspitcher" : "LHV,CLW IL,FLOR"
	},
	{
		"player" : "davisau01",
		"teams" : "9.5",
		"teamspitcher" : "CLR GULF"
	},
	{
		"player" : "davisau01",
		"teams" : "7.4",
		"teamspitcher" : "LWD SALL"
	},
	{
		"player" : "davisau01",
		"teams" : "7.2",
		"teamspitcher" : "CLW,LWD,CLR FLOR,SALL,GULF"
	},
	{
		"player" : "davisau01",
		"teams" : "8.3",
		"teamspitcher" : "REA,CLW EL,FLOR"
	},
	{
		"player" : "davisau01",
		"teams" : "7.0",
		"teamspitcher" : "LHV,REA IL,EL"
	},
	{
		"player" : "anderdr02",
		"teams" : "10.3",
		"teamspitcher" : "CLR GULF"
	},
	{
		"player" : "anderdr02",
		"teams" : "6.8",
		"teamspitcher" : "WPT NYPL"
	},
	{
		"player" : "anderdr02",
		"teams" : "9.2",
		"teamspitcher" : "LWD,CLR SALL,GULF"
	},
	{
		"player" : "anderdr02",
		"teams" : "7.1",
		"teamspitcher" : "LWD,CLW SALL,FLOR"
	},
	{
		"player" : "anderdr02",
		"teams" : "6.8",
		"teamspitcher" : "REA,LHV EL,IL"
	},
	{
		"player" : "anderdr02",
		"teams" : "7.9",
		"teamspitcher" : "LHV IL"
	},
	{
		"player" : "hutchdr01",
		"teams" : "6.7",
		"teamspitcher" : "AUB,LNS NYPL,MIDW"
	},
	{
		"player" : "hutchdr01",
		"teams" : "7.2",
		"teamspitcher" : "LNS,DUN,MAN MIDW,FLOR,EL"
	},
	{
		"player" : "hutchdr01",
		"teams" : "8.6",
		"teamspitcher" : "MAN EL"
	},
	{
		"player" : "hutchdr01",
		"teams" : "8.5",
		"teamspitcher" : "SRV,BFL,DUN,MAN AZFL,IL,FLOR,EL"
	},
	{
		"player" : "hutchdr01",
		"teams" : "6.8",
		"teamspitcher" : "BFL IL"
	},
	{
		"player" : "hutchdr01",
		"teams" : "7.5",
		"teamspitcher" : "BFL,INA IL"
	},
	{
		"player" : "hutchdr01",
		"teams" : "8.4",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "hutchdr01",
		"teams" : "8.1",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "delosen01",
		"teams" : "8.8",
		"teamspitcher" : "EVR,MRE NORW,ARIZ"
	},
	{
		"player" : "delosen01",
		"teams" : "8.0",
		"teamspitcher" : "LEL,FWA CALL,MIDW"
	},
	{
		"player" : "delosen01",
		"teams" : "7.9",
		"teamspitcher" : "SAN TL"
	},
	{
		"player" : "delosen01",
		"teams" : "7.4",
		"teamspitcher" : "LHV IL"
	},
	{
		"player" : "suarera01",
		"teams" : "3.6",
		"teamspitcher" : "TR1 VESL"
	},
	{
		"player" : "suarera01",
		"teams" : "9.5",
		"teamspitcher" : "TR1 VESL"
	},
	{
		"player" : "suarera01",
		"teams" : "7.5",
		"teamspitcher" : "TR1 VESL"
	},
	{
		"player" : "suarera01",
		"teams" : "4.9",
		"teamspitcher" : "CLR GULF"
	},
	{
		"player" : "suarera01",
		"teams" : "7.5",
		"teamspitcher" : "WPT NYPL"
	},
	{
		"player" : "suarera01",
		"teams" : "7.0",
		"teamspitcher" : "LWD,CLW SALL,FLOR"
	},
	{
		"player" : "suarera01",
		"teams" : "8.1",
		"teamspitcher" : "REA,LHV EL,IL"
	},
	{
		"player" : "livelbe01",
		"teams" : "5.0",
		"teamspitcher" : "BIL,DAY PION,MIDW"
	},
	{
		"player" : "livelbe01",
		"teams" : "7.0",
		"teamspitcher" : "BAK,PEN CALL,SOUL"
	},
	{
		"player" : "livelbe01",
		"teams" : "10.0",
		"teamspitcher" : "REA EL"
	},
	{
		"player" : "livelbe01",
		"teams" : "6.2",
		"teamspitcher" : "LHV,REA IL,EL"
	},
	{
		"player" : "livelbe01",
		"teams" : "8.4",
		"teamspitcher" : "LHV IL"
	},
	{
		"player" : "livelbe01",
		"teams" : "6.1",
		"teamspitcher" : "LHV,CLR,CL2 IL,GULF"
	},
	{
		"player" : "velasvi01",
		"teams" : "7.4",
		"teamspitcher" : "GRE APPY"
	},
	{
		"player" : "velasvi01",
		"teams" : "7.3",
		"teamspitcher" : "TRC NYPL"
	},
	{
		"player" : "velasvi01",
		"teams" : "7.5",
		"teamspitcher" : "DAV,LNR MIDW,CALL"
	},
	{
		"player" : "velasvi01",
		"teams" : "7.4",
		"teamspitcher" : "LNR,SRV,AST CALL,AZFL,GULF"
	},
	{
		"player" : "velasvi01",
		"teams" : "5.5",
		"teamspitcher" : "CPC TL"
	},
	{
		"player" : "velasvi01",
		"teams" : "3.6",
		"teamspitcher" : "REA EL"
	},
	{
		"player" : "velasvi01",
		"teams" : "5.4",
		"teamspitcher" : "CLW,REA,LHV FLOR,EL,IL"
	},
	{
		"player" : "pivetni01",
		"teams" : "7.9",
		"teamspitcher" : "AUB,NAT NYPL,GULF"
	},
	{
		"player" : "pivetni01",
		"teams" : "9.7",
		"teamspitcher" : "HGR SALL"
	},
	{
		"player" : "pivetni01",
		"teams" : "8.4",
		"teamspitcher" : "POT,REA,HRB CARL,EL"
	},
	{
		"player" : "pivetni01",
		"teams" : "7.7",
		"teamspitcher" : "REA,LHV EL,IL"
	},
	{
		"player" : "pivetni01",
		"teams" : "7.0",
		"teamspitcher" : "LHV IL"
	},
	{
		"player" : "eflinza01",
		"teams" : "11.6",
		"teamspitcher" : "PDS ARIZ"
	},
	{
		"player" : "eflinza01",
		"teams" : "8.3",
		"teamspitcher" : "FWA MIDW"
	},
	{
		"player" : "eflinza01",
		"teams" : "9.7",
		"teamspitcher" : "LEL CALL"
	},
	{
		"player" : "eflinza01",
		"teams" : "9.3",
		"teamspitcher" : "REA EL"
	},
	{
		"player" : "eflinza01",
		"teams" : "6.5",
		"teamspitcher" : "LHV IL"
	},
	{
		"player" : "eflinza01",
		"teams" : "8.8",
		"teamspitcher" : "LHV,CLR,CLW IL,GULF,FLOR"
	},
	{
		"player" : "eflinza01",
		"teams" : "9.0",
		"teamspitcher" : "LHV IL"
	},
	{
		"player" : "arrieja01",
		"teams" : "4.5",
		"teamspitcher" : "PHO AZFL"
	},
	{
		"player" : "arrieja01",
		"teams" : "6.4",
		"teamspitcher" : "FDK CARL"
	},
	{
		"player" : "arrieja01",
		"teams" : "8.5",
		"teamspitcher" : "NFK,BOW IL,EL"
	},
	{
		"player" : "arrieja01",
		"teams" : "5.9",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "arrieja01",
		"teams" : "7.4",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "arrieja01",
		"teams" : "8.7",
		"teamspitcher" : "NFK,IWA IL,PCL"
	},
	{
		"player" : "arrieja01",
		"teams" : "5.9",
		"teamspitcher" : "KNX,DYT SOUL,FLOR"
	},
	{
		"player" : "nolaaa01",
		"teams" : "8.0",
		"teamspitcher" : "CLW,REA FLOR,EL"
	},
	{
		"player" : "nolaaa01",
		"teams" : "8.0",
		"teamspitcher" : "REA,LHV EL,IL"
	},
	{
		"player" : "nolaaa01",
		"teams" : "5.2",
		"teamspitcher" : "LHV IL"
	},
	{
		"player" : "plouftr01",
		"teams" : "ELZ · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "plouftr01",
		"teams" : "BEL · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "plouftr01",
		"teams" : "FTM · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "plouftr01",
		"teams" : "NBR,PHO · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "plouftr01",
		"teams" : "ROC,NBR · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "plouftr01",
		"teams" : "ROC · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "plouftr01",
		"teams" : "ROC · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "plouftr01",
		"teams" : "ROC · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "plouftr01",
		"teams" : "ROC · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "plouftr01",
		"teams" : "ROC · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "plouftr01",
		"teams" : "ROC,FTM · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "plouftr01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "plouftr01",
		"teams" : "LHV,RRK · IL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "waldimi01",
		"teams" : "WPT · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "waldimi01",
		"teams" : "LWD · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "waldimi01",
		"teams" : "LWD,CBA · SALL,AUBL",
		"teamspitcher" : ""
	},
	{
		"player" : "waldimi01",
		"teams" : "CLW · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "waldimi01",
		"teams" : "CLW,REA,SCO · FLOR,EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "waldimi01",
		"teams" : "REA,LMO,CLR · EL,MXPW,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "waldimi01",
		"teams" : "LHV · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "cozendy01",
		"teams" : "CLR · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "cozendy01",
		"teams" : "WPT · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "cozendy01",
		"teams" : "LWD,MEL · SALL,AUBL",
		"teamspitcher" : ""
	},
	{
		"player" : "cozendy01",
		"teams" : "CLW,MGZ,REA,CLR · FLOR,PRWL,EL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "cozendy01",
		"teams" : "REA,AGU · EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "cozendy01",
		"teams" : "LHV · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "cozendy01",
		"teams" : "LHV · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "bourju01",
		"teams" : "BOI,CBZ · NORW,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "bourju01",
		"teams" : "PEO · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "bourju01",
		"teams" : "DYT · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "bourju01",
		"teams" : "KNX,CRO · SOUL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "bourju01",
		"teams" : "KNX · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "bourju01",
		"teams" : "NOR · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "bourju01",
		"teams" : "NOR · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "bourju01",
		"teams" : "NOR · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "bourju01",
		"teams" : "JCK,JUP · SOUL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "bautijo02",
		"teams" : "WPT · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "bautijo02",
		"teams" : "HCK · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "bautijo02",
		"teams" : "LBG,BRD · CARL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "bautijo02",
		"teams" : "ATO,INA · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "bautijo02",
		"teams" : "LCY,INA · DOWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "bautijo02",
		"teams" : "LCY,BRD · DOWL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "bautijo02",
		"teams" : "LCY,INA · DOWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "bautijo02",
		"teams" : "LCY · DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "bautijo02",
		"teams" : "MAN,BJY · EL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "bautijo02",
		"teams" : "BFL,DUN · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "bautijo02",
		"teams" : "GWI,FLF · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "floripe01",
		"teams" : "BLD,ADN · APPY,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "floripe01",
		"teams" : "DEL · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "floripe01",
		"teams" : "DEL · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "floripe01",
		"teams" : "FDK,BOW,ESC · CARL,EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "floripe01",
		"teams" : "FDK,BOW,ADN · CARL,EL,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "floripe01",
		"teams" : "BOW,ESC · EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "floripe01",
		"teams" : "ROC,ESC,NBR · IL,DOWL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "floripe01",
		"teams" : "ESC · DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "floripe01",
		"teams" : "ROC,ESC · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "floripe01",
		"teams" : "INA,ESS · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "floripe01",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "floripe01",
		"teams" : "LHV · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "floripe01",
		"teams" : "CLW,REA,LHV,CL2,CLR · FLOR,EL,IL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "valenje01",
		"teams" : "DGR,PCE · ARIZ,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "valenje01",
		"teams" : "OGD,GRL,PCE · PION,MIDW,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "valenje01",
		"teams" : "GRL,MGZ,CLW · MIDW,PRWL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "valenje01",
		"teams" : "MGZ,CLW · PRWL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "valenje01",
		"teams" : "REA,MGZ,LHV · EL,PRWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "valenje01",
		"teams" : "LHV,MGZ · IL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "valenje01",
		"teams" : "LHV · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "ramoswi01",
		"teams" : "TWN,ARA · GULF,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "ramoswi01",
		"teams" : "BEL,ARA · MIDW,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "ramoswi01",
		"teams" : "FTM,ARA · FLOR,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "ramoswi01",
		"teams" : "ARA,NBR,TWN · VEWL,EL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "ramoswi01",
		"teams" : "ROC,ARA,SYR · VEWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "ramoswi01",
		"teams" : "ARA · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "ramoswi01",
		"teams" : "ARA,POT,HRB,NAT · VEWL,CARL,EL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "ramoswi01",
		"teams" : "ARA,HRB,POT,HGR · VEWL,EL,CARL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "ramoswi01",
		"teams" : "DHM,POE · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "ramoswi01",
		"teams" : "CLW · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "crawfjp01",
		"teams" : "CLR,LWD · GULF,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "crawfjp01",
		"teams" : "CLW,LWD · FLOR,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "crawfjp01",
		"teams" : "REA,CLW,GLN · EL,FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "crawfjp01",
		"teams" : "LHV,REA · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "crawfjp01",
		"teams" : "LHV · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "crawfjp01",
		"teams" : "LHV,CLW,CLR · IL,FLOR,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "quinnro01",
		"teams" : "WPT · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "quinnro01",
		"teams" : "LWD · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "quinnro01",
		"teams" : "CLW,SCO · FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "quinnro01",
		"teams" : "REA,LCY · EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "quinnro01",
		"teams" : "REA,CLR · EL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "quinnro01",
		"teams" : "LHV,AZU · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "quinnro01",
		"teams" : "LHV,CLW,REA · IL,FLOR,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "cabreas01",
		"teams" : "EVR · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "cabreas01",
		"teams" : "SBR,APP,TAC · CALL,MIDW,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "cabreas01",
		"teams" : "TAC,BFL,LRA · PCL,IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "cabreas01",
		"teams" : "AKR,LRA,BFL · EL,VEWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "cabreas01",
		"teams" : "BFL,LRA · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "cabreas01",
		"teams" : "AKR · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "cabreas01",
		"teams" : "CCS,AKR,MHV · VEWL,EL,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "cabreas01",
		"teams" : "CCS · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "cabreas01",
		"teams" : "CCS · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "cabreas01",
		"teams" : "CCS · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "cabreas01",
		"teams" : "CCS,SCE · VEWL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "cabreas01",
		"teams" : "SCE,BNG · FLOR,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "knappan01",
		"teams" : "WPT · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "knappan01",
		"teams" : "LWD,CLW · SALL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "knappan01",
		"teams" : "CLW,REA,GLN · FLOR,EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "knappan01",
		"teams" : "LHV,AGU · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "knappan01",
		"teams" : "LHV · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "altheaa01",
		"teams" : "CLR · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "altheaa01",
		"teams" : "CLR,WPT · GULF,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "altheaa01",
		"teams" : "WPT,LWD · NYPL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "altheaa01",
		"teams" : "LWD · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "altheaa01",
		"teams" : "CLW,PEA · FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "altheaa01",
		"teams" : "REA,ZUL,CLW · EL,VEWL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "altheaa01",
		"teams" : "REA,LHV · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "altheaa01",
		"teams" : "CLR,REA,CLW,LHV · GULF,EL,FLOR,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "altheaa01",
		"teams" : "LHV · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "willini01",
		"teams" : "RGS · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "willini01",
		"teams" : "HCK · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "willini01",
		"teams" : "MYR,SPS,FRI,RGS · CARL,AZFL,TL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "willini01",
		"teams" : "FRI,REA · TL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "willini01",
		"teams" : "LHV · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "willini01",
		"teams" : "LHV · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "herreod01",
		"teams" : "RG2 · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "herreod01",
		"teams" : "RGS,SPO · ARIZ,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "herreod01",
		"teams" : "HCK · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "herreod01",
		"teams" : "MYR · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "herreod01",
		"teams" : "FRI,MYR · TL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "herreod01",
		"teams" : "FRI,LGU,MYR · TL,VEWL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "herreod01",
		"teams" : "LGU · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "herreod01",
		"teams" : "LHV,REA · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "hoskirh01",
		"teams" : "WPT · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "hoskirh01",
		"teams" : "LWD,CLW,SNY · SALL,FLOR,AUBL",
		"teamspitcher" : ""
	},
	{
		"player" : "hoskirh01",
		"teams" : "REA,GIG · EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "hoskirh01",
		"teams" : "LHV · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "francma02",
		"teams" : "CLR · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "francma02",
		"teams" : "WPT,LWD · NYPL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "francma02",
		"teams" : "LWD,GIG · SALL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "francma02",
		"teams" : "REA,CLW,GIG · EL,FLOR,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "francma02",
		"teams" : "LHV,GIG · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "francma02",
		"teams" : "LHV,GIG · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "kingesc01",
		"teams" : "LWD · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "kingesc01",
		"teams" : "CLW,REA,SCO · FLOR,EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "kingesc01",
		"teams" : "REA,LHV · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "hernace02",
		"teams" : "TR1 · VESL",
		"teamspitcher" : ""
	},
	{
		"player" : "hernace02",
		"teams" : "TR1,MGA · VESL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "hernace02",
		"teams" : "CLR · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "hernace02",
		"teams" : "WPT,MGA · NYPL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "hernace02",
		"teams" : "CLW,MGA · FLOR,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "hernace02",
		"teams" : "REA,MGA,LHV · EL,VEWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "hernace02",
		"teams" : "LHV,MGA,REA · IL,VEWL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "hernace02",
		"teams" : "LHV,LRA,REA · IL,VEWL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "hernace02",
		"teams" : "CLW · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "santaca01",
		"teams" : "DGR · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "santaca01",
		"teams" : "VRO,OGD · FLOR,PION",
		"teamspitcher" : ""
	},
	{
		"player" : "santaca01",
		"teams" : "GRL · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "santaca01",
		"teams" : "SBR,KIN,AKR · CALL,CARL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "santaca01",
		"teams" : "AKR,ESC · EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "santaca01",
		"teams" : "CLB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "santaca01",
		"teams" : "ESC,LCO · DOWL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "santaca01",
		"teams" : "ESC · DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "alfarjo01",
		"teams" : "RNG · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "alfarjo01",
		"teams" : "SPO · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "alfarjo01",
		"teams" : "HCK,PCE · SALL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "alfarjo01",
		"teams" : "HCK,SPS,RGS,MYR · SALL,AZFL,ARIZ,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "alfarjo01",
		"teams" : "MYR,FRI · CARL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "alfarjo01",
		"teams" : "FRI,LGU,CLR · TL,VEWL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "alfarjo01",
		"teams" : "REA,LGU · EL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "alfarjo01",
		"teams" : "LHV · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "brookaa01",
		"teams" : "10.1",
		"teamspitcher" : "IDF PION"
	},
	{
		"player" : "brookaa01",
		"teams" : "11.2",
		"teamspitcher" : "KNC MIDW"
	},
	{
		"player" : "brookaa01",
		"teams" : "9.7",
		"teamspitcher" : "NTA,WMT TL,CARL"
	},
	{
		"player" : "brookaa01",
		"teams" : "9.8",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "brookaa01",
		"teams" : "9.6",
		"teamspitcher" : "OMA,NVL PCL"
	},
	{
		"player" : "brookaa01",
		"teams" : "12.7",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "brookaa01",
		"teams" : "11.9",
		"teamspitcher" : "IWA,CSP PCL"
	},
	{
		"player" : "brookaa01",
		"teams" : "9.1",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "trivilo01",
		"teams" : "7.9",
		"teamspitcher" : "VMT NYPL"
	},
	{
		"player" : "trivilo01",
		"teams" : "10.3",
		"teamspitcher" : "BEL MIDW"
	},
	{
		"player" : "trivilo01",
		"teams" : "7.0",
		"teamspitcher" : "STK CALL"
	},
	{
		"player" : "trivilo01",
		"teams" : "7.8",
		"teamspitcher" : "STK,MDL CALL,TL"
	},
	{
		"player" : "trivilo01",
		"teams" : "8.4",
		"teamspitcher" : "NVL,MDL PCL,TL"
	},
	{
		"player" : "trivilo01",
		"teams" : "3.4",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "cahiltr01",
		"teams" : "2.0",
		"teamspitcher" : "ATH ARIZ"
	},
	{
		"player" : "cahiltr01",
		"teams" : "7.3",
		"teamspitcher" : "KNC MIDW"
	},
	{
		"player" : "cahiltr01",
		"teams" : "5.5",
		"teamspitcher" : "STK,MDL CALL,TL"
	},
	{
		"player" : "cahiltr01",
		"teams" : "7.3",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "cahiltr01",
		"teams" : "7.1",
		"teamspitcher" : "REN,DKS PCL,ARIZ"
	},
	{
		"player" : "cahiltr01",
		"teams" : "6.8",
		"teamspitcher" : "REN,VIS PCL,CALL"
	},
	{
		"player" : "cahiltr01",
		"teams" : "8.6",
		"teamspitcher" : "OKC,IWA,RCU,DGR PCL,CALL,ARIZ"
	},
	{
		"player" : "cahiltr01",
		"teams" : "11.4",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "cahiltr01",
		"teams" : "11.1",
		"teamspitcher" : "ELP,LEL PCL,CALL"
	},
	{
		"player" : "cahiltr01",
		"teams" : "4.6",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "ramirca01",
		"teams" : "8.4",
		"teamspitcher" : "BLD APPY"
	},
	{
		"player" : "ramirca01",
		"teams" : "10.9",
		"teamspitcher" : "LNS,DUN MIDW,FLOR"
	},
	{
		"player" : "ramirca01",
		"teams" : "7.0",
		"teamspitcher" : "DUN FLOR"
	},
	{
		"player" : "ramirca01",
		"teams" : "3.8",
		"teamspitcher" : "MAN,BFL EL,IL"
	},
	{
		"player" : "ramirca01",
		"teams" : "4.7",
		"teamspitcher" : "NVL,GIG,BFL PCL,DOWL,IL"
	},
	{
		"player" : "bassich01",
		"teams" : "7.5",
		"teamspitcher" : "KAN,BRS,WSM SALL,APPY,CARL"
	},
	{
		"player" : "bassich01",
		"teams" : "7.3",
		"teamspitcher" : "WSM CARL"
	},
	{
		"player" : "bassich01",
		"teams" : "7.5",
		"teamspitcher" : "WSM,BIR,GLN CARL,SOUL,AZFL"
	},
	{
		"player" : "bassich01",
		"teams" : "7.0",
		"teamspitcher" : "BIR,GLN,WSX SOUL,AZFL,ARIZ"
	},
	{
		"player" : "bassich01",
		"teams" : "7.7",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "bassich01",
		"teams" : "8.9",
		"teamspitcher" : "NVL,STK PCL,CALL"
	},
	{
		"player" : "bassich01",
		"teams" : "9.5",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "hatchch02",
		"teams" : "0.0",
		"teamspitcher" : "JCK SOUL"
	},
	{
		"player" : "hatchch02",
		"teams" : "0.0",
		"teamspitcher" : "JCK SOUL"
	},
	{
		"player" : "hatchch02",
		"teams" : "6.1",
		"teamspitcher" : "JCK SOUL"
	},
	{
		"player" : "hatchch02",
		"teams" : "6.3",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "hatchch02",
		"teams" : "9.2",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "hatchch02",
		"teams" : "6.4",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "hatchch02",
		"teams" : "11.0",
		"teamspitcher" : "OKC,RCU PCL,CALL"
	},
	{
		"player" : "hatchch02",
		"teams" : "6.0",
		"teamspitcher" : "OKC,DGR PCL,ARIZ"
	},
	{
		"player" : "hatchch02",
		"teams" : "10.4",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "hendrli01",
		"teams" : "8.4",
		"teamspitcher" : "TWN GULF"
	},
	{
		"player" : "hendrli01",
		"teams" : "9.9",
		"teamspitcher" : "BEL,ELZ MIDW,APPY"
	},
	{
		"player" : "hendrli01",
		"teams" : "7.3",
		"teamspitcher" : "FTM,BEL,PRH FLOR,MIDW,AUBL"
	},
	{
		"player" : "hendrli01",
		"teams" : "8.8",
		"teamspitcher" : "NBR,ROC EL,IL"
	},
	{
		"player" : "hendrli01",
		"teams" : "6.4",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "hendrli01",
		"teams" : "10.5",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "hendrli01",
		"teams" : "7.8",
		"teamspitcher" : "BFL,OMA,AGU IL,PCL,DOWL"
	},
	{
		"player" : "hendrli01",
		"teams" : "6.4",
		"teamspitcher" : "NVL,STK PCL,CALL"
	},
	{
		"player" : "hendrli01",
		"teams" : "7.5",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "triggan01",
		"teams" : "6.8",
		"teamspitcher" : "KNC,IDF MIDW,PION"
	},
	{
		"player" : "triggan01",
		"teams" : "8.1",
		"teamspitcher" : "WMT,NTA CARL,TL"
	},
	{
		"player" : "triggan01",
		"teams" : "8.9",
		"teamspitcher" : "NTA,ESS,OMA TL,DOWL,PCL"
	},
	{
		"player" : "triggan01",
		"teams" : "6.2",
		"teamspitcher" : "BOW EL"
	},
	{
		"player" : "triggan01",
		"teams" : "7.9",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "fontwi01",
		"teams" : "8.1",
		"teamspitcher" : "RGS ARIZ"
	},
	{
		"player" : "fontwi01",
		"teams" : "2.1",
		"teamspitcher" : "RGS ARIZ"
	},
	{
		"player" : "fontwi01",
		"teams" : "7.7",
		"teamspitcher" : "HCK SALL"
	},
	{
		"player" : "fontwi01",
		"teams" : "8.4",
		"teamspitcher" : "BAK,HCK CALL,SALL"
	},
	{
		"player" : "fontwi01",
		"teams" : "6.1",
		"teamspitcher" : "MYR,FRI CARL,TL"
	},
	{
		"player" : "fontwi01",
		"teams" : "4.4",
		"teamspitcher" : "FRI,RRK,CCS TL,PCL,VEWL"
	},
	{
		"player" : "fontwi01",
		"teams" : "7.3",
		"teamspitcher" : "FRI TL"
	},
	{
		"player" : "fontwi01",
		"teams" : "8.1",
		"teamspitcher" : "CCS VEWL"
	},
	{
		"player" : "fontwi01",
		"teams" : "9.3",
		"teamspitcher" : "CCS,MAN,BFL VEWL,EL,IL"
	},
	{
		"player" : "fontwi01",
		"teams" : "7.6",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "dullry01",
		"teams" : "8.2",
		"teamspitcher" : "VMT,ATH NYPL,ARIZ"
	},
	{
		"player" : "dullry01",
		"teams" : "7.0",
		"teamspitcher" : "BEL,STK,MDL,MES MIDW,CALL,TL,AZFL"
	},
	{
		"player" : "dullry01",
		"teams" : "8.3",
		"teamspitcher" : "MDL TL"
	},
	{
		"player" : "dullry01",
		"teams" : "5.8",
		"teamspitcher" : "MDL,NVL TL,PCL"
	},
	{
		"player" : "dullry01",
		"teams" : "2.5",
		"teamspitcher" : "NVL,ATH PCL,ARIZ"
	},
	{
		"player" : "dullry01",
		"teams" : "8.7",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "kiekhde01",
		"teams" : "9.4",
		"teamspitcher" : "DAV,JOH MIDW,APPY"
	},
	{
		"player" : "kiekhde01",
		"teams" : "5.5",
		"teamspitcher" : "DAV MIDW"
	},
	{
		"player" : "kiekhde01",
		"teams" : "9.1",
		"teamspitcher" : "PLM FLOR"
	},
	{
		"player" : "kiekhde01",
		"teams" : "10.2",
		"teamspitcher" : "PLM,SPD,SRV FLOR,TL,AZFL"
	},
	{
		"player" : "kiekhde01",
		"teams" : "8.3",
		"teamspitcher" : "MEM,SPD PCL,TL"
	},
	{
		"player" : "kiekhde01",
		"teams" : "9.5",
		"teamspitcher" : "MEM,SPS PCL,AZFL"
	},
	{
		"player" : "kiekhde01",
		"teams" : "8.3",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "kiekhde01",
		"teams" : "10.8",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "kiekhde01",
		"teams" : "10.0",
		"teamspitcher" : "NVL,PEN,MDL PCL,SOUL,TL"
	},
	{
		"player" : "treinbl01",
		"teams" : "6.9",
		"teamspitcher" : "BUR,ATH MIDW,ARIZ"
	},
	{
		"player" : "treinbl01",
		"teams" : "10.1",
		"teamspitcher" : "STK CALL"
	},
	{
		"player" : "treinbl01",
		"teams" : "9.1",
		"teamspitcher" : "HRB,AUB EL,NYPL"
	},
	{
		"player" : "treinbl01",
		"teams" : "8.7",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "treinbl01",
		"teams" : "4.5",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "gosseda01",
		"teams" : "6.0",
		"teamspitcher" : "VMT NYPL"
	},
	{
		"player" : "gosseda01",
		"teams" : "9.4",
		"teamspitcher" : "BEL MIDW"
	},
	{
		"player" : "gosseda01",
		"teams" : "7.3",
		"teamspitcher" : "MDL,STK,NVL TL,CALL,PCL"
	},
	{
		"player" : "gosseda01",
		"teams" : "8.3",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "gosseda01",
		"teams" : "6.1",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "paganem01",
		"teams" : "5.8",
		"teamspitcher" : "PUL,EVR APPY,NORW"
	},
	{
		"player" : "paganem01",
		"teams" : "6.8",
		"teamspitcher" : "CLI,CRO MIDW,PRWL"
	},
	{
		"player" : "paganem01",
		"teams" : "7.2",
		"teamspitcher" : "BAK CALL"
	},
	{
		"player" : "paganem01",
		"teams" : "7.0",
		"teamspitcher" : "TAC,WTN,PEA PCL,SOUL,AZFL"
	},
	{
		"player" : "paganem01",
		"teams" : "5.4",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "paganem01",
		"teams" : "7.5",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "kellesh01",
		"teams" : "10.8",
		"teamspitcher" : "APP,EVR MIDW,NORW"
	},
	{
		"player" : "kellesh01",
		"teams" : "7.4",
		"teamspitcher" : "WTN,LRA,HDS,APP SOUL,VEWL,CALL,MIDW"
	},
	{
		"player" : "kellesh01",
		"teams" : "0.0",
		"teamspitcher" : "MRE,TAC ARIZ,PCL"
	},
	{
		"player" : "kellesh01",
		"teams" : "2.5",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "kellesh01",
		"teams" : "7.6",
		"teamspitcher" : "TAC,WTN PCL,SOUL"
	},
	{
		"player" : "kellesh01",
		"teams" : "4.1",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "kellesh01",
		"teams" : "5.4",
		"teamspitcher" : "SWB,TRE IL,EL"
	},
	{
		"player" : "kellesh01",
		"teams" : "0.0",
		"teamspitcher" : "ELP,LEL PCL,CALL"
	},
	{
		"player" : "kellesh01",
		"teams" : "10.8",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "kellesh01",
		"teams" : "0.0",
		"teamspitcher" : "POT CARL"
	},
	{
		"player" : "buchtry01",
		"teams" : "11.9",
		"teamspitcher" : "NAT GULF"
	},
	{
		"player" : "buchtry01",
		"teams" : "11.7",
		"teamspitcher" : "VMT NYPL"
	},
	{
		"player" : "buchtry01",
		"teams" : "7.0",
		"teamspitcher" : "HGR,NAT SALL,GULF"
	},
	{
		"player" : "buchtry01",
		"teams" : "5.3",
		"teamspitcher" : "PEO MIDW"
	},
	{
		"player" : "buchtry01",
		"teams" : "9.2",
		"teamspitcher" : "KNX SOUL"
	},
	{
		"player" : "buchtry01",
		"teams" : "7.2",
		"teamspitcher" : "LBG,KNX,DYT CARL,SOUL,FLOR"
	},
	{
		"player" : "buchtry01",
		"teams" : "6.2",
		"teamspitcher" : "MSS,PHO,GWI SOUL,AZFL,IL"
	},
	{
		"player" : "buchtry01",
		"teams" : "4.9",
		"teamspitcher" : "GWI,CUL IL,MXPW"
	},
	{
		"player" : "buchtry01",
		"teams" : "7.3",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "buchtry01",
		"teams" : "5.9",
		"teamspitcher" : "OKC,CUL,IWA MXPW,PCL"
	},
	{
		"player" : "buchtry01",
		"teams" : "18.0",
		"teamspitcher" : "ELP PCL"
	},
	{
		"player" : "buchtry01",
		"teams" : "5.1",
		"teamspitcher" : "NVL,STK PCL,CALL"
	},
	{
		"player" : "garcija01",
		"teams" : "7.0",
		"teamspitcher" : "ATH ARIZ"
	},
	{
		"player" : "garcija01",
		"teams" : "9.0",
		"teamspitcher" : "ATH,VAN ARIZ,NORW"
	},
	{
		"player" : "garcija01",
		"teams" : "8.5",
		"teamspitcher" : "KNC MIDW"
	},
	{
		"player" : "garcija01",
		"teams" : "5.3",
		"teamspitcher" : "KNC,MDL,SAC MIDW,TL,PCL"
	},
	{
		"player" : "garcija01",
		"teams" : "7.5",
		"teamspitcher" : "SAC,MDL PCL,TL"
	},
	{
		"player" : "garcija01",
		"teams" : "7.4",
		"teamspitcher" : "SAC,ESC PCL,DOWL"
	},
	{
		"player" : "garcija01",
		"teams" : "6.0",
		"teamspitcher" : "SAC,ESC PCL,DOWL"
	},
	{
		"player" : "garcija01",
		"teams" : "4.6",
		"teamspitcher" : "ESC,SAC,STK DOWL,PCL,CALL"
	},
	{
		"player" : "garcija01",
		"teams" : "5.0",
		"teamspitcher" : "ESC,STK,SAC DOWL,CALL,PCL"
	},
	{
		"player" : "garcija01",
		"teams" : "3.9",
		"teamspitcher" : "FRE,ESC PCL,DOWL"
	},
	{
		"player" : "garcija01",
		"teams" : "6.8",
		"teamspitcher" : "FRE,SJO PCL,CALL"
	},
	{
		"player" : "garcija01",
		"teams" : "12.6",
		"teamspitcher" : "SJO CALL"
	},
	{
		"player" : "garcija01",
		"teams" : "0.0",
		"teamspitcher" : "SJO CALL"
	},
	{
		"player" : "garcija01",
		"teams" : "11.5",
		"teamspitcher" : "ABQ,STK PCL,CALL"
	},
	{
		"player" : "bleicje01",
		"teams" : "7.2",
		"teamspitcher" : "WKI,STI HIWB,NYPL"
	},
	{
		"player" : "bleicje01",
		"teams" : "10.2",
		"teamspitcher" : "TAM,TRE FLOR,EL"
	},
	{
		"player" : "bleicje01",
		"teams" : "7.6",
		"teamspitcher" : "TRE EL"
	},
	{
		"player" : "bleicje01",
		"teams" : "8.5",
		"teamspitcher" : "TAM,STI,YNK FLOR,NYPL,GULF"
	},
	{
		"player" : "bleicje01",
		"teams" : "7.9",
		"teamspitcher" : "TRE EL"
	},
	{
		"player" : "bleicje01",
		"teams" : "8.9",
		"teamspitcher" : "TRE,SWB EL,IL"
	},
	{
		"player" : "bleicje01",
		"teams" : "8.5",
		"teamspitcher" : "ATO,INA,BDT EL,IL,FLOR"
	},
	{
		"player" : "bleicje01",
		"teams" : "10.6",
		"teamspitcher" : "REA,GIG,LHV EL,DOWL,IL"
	},
	{
		"player" : "bleicje01",
		"teams" : "9.0",
		"teamspitcher" : "OKC,TUL PCL,TL"
	},
	{
		"player" : "bleicje01",
		"teams" : "8.2",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "petityu01",
		"teams" : "6.3",
		"teamspitcher" : "KPT,BKN APPY,NYPL"
	},
	{
		"player" : "petityu01",
		"teams" : "5.4",
		"teamspitcher" : "CLM,SCE,BNG SALL,FLOR,EL"
	},
	{
		"player" : "petityu01",
		"teams" : "7.8",
		"teamspitcher" : "BNG,NFK EL,IL"
	},
	{
		"player" : "petityu01",
		"teams" : "9.4",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "petityu01",
		"teams" : "8.1",
		"teamspitcher" : "TUC,MGL PCL,VEWL"
	},
	{
		"player" : "petityu01",
		"teams" : "10.3",
		"teamspitcher" : "TUC,MGL PCL,VEWL"
	},
	{
		"player" : "petityu01",
		"teams" : "11.5",
		"teamspitcher" : "MGL,REN VEWL,PCL"
	},
	{
		"player" : "petityu01",
		"teams" : "8.0",
		"teamspitcher" : "MGA,TAC VEWL,PCL"
	},
	{
		"player" : "petityu01",
		"teams" : "9.0",
		"teamspitcher" : "MGA,OAX VEWL,MEX"
	},
	{
		"player" : "petityu01",
		"teams" : "9.5",
		"teamspitcher" : "FRE,MGA PCL,VEWL"
	},
	{
		"player" : "petityu01",
		"teams" : "9.2",
		"teamspitcher" : "FRE,GNT PCL,ARIZ"
	},
	{
		"player" : "rodnefe01",
		"teams" : "6.7",
		"teamspitcher" : "TIG,LAK GULF,FLOR"
	},
	{
		"player" : "rodnefe01",
		"teams" : "8.1",
		"teamspitcher" : "WMI MIDW"
	},
	{
		"player" : "rodnefe01",
		"teams" : "8.6",
		"teamspitcher" : "LAK,ERI,LAT FLOR,EL,GULF"
	},
	{
		"player" : "rodnefe01",
		"teams" : "5.7",
		"teamspitcher" : "TOL,ERI IL,EL"
	},
	{
		"player" : "rodnefe01",
		"teams" : "4.9",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "rodnefe01",
		"teams" : "6.0",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "rodnefe01",
		"teams" : "12.0",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "rodnefe01",
		"teams" : "6.2",
		"teamspitcher" : "TOL,ESC IL,DOWL"
	},
	{
		"player" : "rodnefe01",
		"teams" : "6.3",
		"teamspitcher" : "ESC,SBR DOWL,CALL"
	},
	{
		"player" : "rodnefe01",
		"teams" : "0.0",
		"teamspitcher" : "ESC DOWL"
	},
	{
		"player" : "couloda01",
		"teams" : "6.4",
		"teamspitcher" : "GRL,OGD MIDW,PION"
	},
	{
		"player" : "couloda01",
		"teams" : "6.4",
		"teamspitcher" : "RCU,MGZ CALL,PRWL"
	},
	{
		"player" : "couloda01",
		"teams" : "6.8",
		"teamspitcher" : "RCU,CNG,GLN CALL,SOUL,AZFL"
	},
	{
		"player" : "couloda01",
		"teams" : "7.6",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "couloda01",
		"teams" : "6.5",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "couloda01",
		"teams" : "9.5",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "lucasjo02",
		"teams" : "10.4",
		"teamspitcher" : "CDS GULF"
	},
	{
		"player" : "lucasjo02",
		"teams" : "11.4",
		"teamspitcher" : "JOH APPY"
	},
	{
		"player" : "lucasjo02",
		"teams" : "15.9",
		"teamspitcher" : "PEO,SCS,CDS MIDW,NYPL,GULF"
	},
	{
		"player" : "lucasjo02",
		"teams" : "7.0",
		"teamspitcher" : "SCS,PEO,PLM NYPL,MIDW,FLOR"
	},
	{
		"player" : "lucasjo02",
		"teams" : "6.3",
		"teamspitcher" : "PLM,SPD FLOR,TL"
	},
	{
		"player" : "lucasjo02",
		"teams" : "8.4",
		"teamspitcher" : "SPD,MEM TL,PCL"
	},
	{
		"player" : "lucasjo02",
		"teams" : "9.0",
		"teamspitcher" : "MEM,SPS PCL,AZFL"
	},
	{
		"player" : "lucasjo02",
		"teams" : "6.5",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "familje01",
		"teams" : "8.0",
		"teamspitcher" : "MET GULF"
	},
	{
		"player" : "familje01",
		"teams" : "7.3",
		"teamspitcher" : "SAV SALL"
	},
	{
		"player" : "familje01",
		"teams" : "8.8",
		"teamspitcher" : "SCE,GIG FLOR,DOWL"
	},
	{
		"player" : "familje01",
		"teams" : "7.7",
		"teamspitcher" : "BNG,SCE,GIG EL,FLOR,DOWL"
	},
	{
		"player" : "familje01",
		"teams" : "9.5",
		"teamspitcher" : "BFL IL"
	},
	{
		"player" : "familje01",
		"teams" : "9.0",
		"teamspitcher" : "SCO,GIG,LVG,SCE,BKN AZFL,DOWL,PCL,FLOR,NYPL"
	},
	{
		"player" : "familje01",
		"teams" : "3.0",
		"teamspitcher" : "SCE,BKN,BNG FLOR,NYPL,EL"
	},
	{
		"player" : "fiersmi01",
		"teams" : "5.3",
		"teamspitcher" : "HEL,BRE,APP PION,FLOR,MIDW"
	},
	{
		"player" : "fiersmi01",
		"teams" : "7.6",
		"teamspitcher" : "BRE,HVL,SPS FLOR,SOUL,AZFL"
	},
	{
		"player" : "fiersmi01",
		"teams" : "6.0",
		"teamspitcher" : "NVL,HVL,CCS PCL,SOUL,VEWL"
	},
	{
		"player" : "fiersmi01",
		"teams" : "8.0",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "fiersmi01",
		"teams" : "9.2",
		"teamspitcher" : "NVL,CCS,BRE PCL,VEWL,FLOR"
	},
	{
		"player" : "fiersmi01",
		"teams" : "7.0",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "graveke01",
		"teams" : "9.3",
		"teamspitcher" : "LNS MIDW"
	},
	{
		"player" : "graveke01",
		"teams" : "7.6",
		"teamspitcher" : "DUN,BFL,LNS,MAN FLOR,IL,MIDW,EL"
	},
	{
		"player" : "graveke01",
		"teams" : "7.4",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "graveke01",
		"teams" : "16.2",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "graveke01",
		"teams" : "13.1",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "gearrco01",
		"teams" : "7.2",
		"teamspitcher" : "DAN APPY"
	},
	{
		"player" : "gearrco01",
		"teams" : "7.4",
		"teamspitcher" : "MYR,ROM CARL,SALL"
	},
	{
		"player" : "gearrco01",
		"teams" : "6.8",
		"teamspitcher" : "MYR,MSS CARL,SOUL"
	},
	{
		"player" : "gearrco01",
		"teams" : "8.0",
		"teamspitcher" : "GWI,PHO IL,AZFL"
	},
	{
		"player" : "gearrco01",
		"teams" : "7.6",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "gearrco01",
		"teams" : "7.1",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "gearrco01",
		"teams" : "8.0",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "gearrco01",
		"teams" : "5.6",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "wendejb01",
		"teams" : "4.6",
		"teamspitcher" : "RES GULF"
	},
	{
		"player" : "wendejb01",
		"teams" : "9.0",
		"teamspitcher" : "GRV,WSM,KAN SALL,CARL"
	},
	{
		"player" : "wendejb01",
		"teams" : "11.2",
		"teamspitcher" : "WSM CARL"
	},
	{
		"player" : "wendejb01",
		"teams" : "8.5",
		"teamspitcher" : "BIR,CHR,GLN SOUL,IL,AZFL"
	},
	{
		"player" : "wendejb01",
		"teams" : "9.4",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "wendejb01",
		"teams" : "7.4",
		"teamspitcher" : "NVL,MDL PCL,TL"
	},
	{
		"player" : "jacksed01",
		"teams" : "5.7",
		"teamspitcher" : "DGR GULF"
	},
	{
		"player" : "jacksed01",
		"teams" : "6.8",
		"teamspitcher" : "SGA SALL"
	},
	{
		"player" : "jacksed01",
		"teams" : "7.3",
		"teamspitcher" : "JCK SOUL"
	},
	{
		"player" : "jacksed01",
		"teams" : "8.9",
		"teamspitcher" : "LVG PCL"
	},
	{
		"player" : "jacksed01",
		"teams" : "9.8",
		"teamspitcher" : "JCK,LVG SOUL,PCL"
	},
	{
		"player" : "jacksed01",
		"teams" : "9.2",
		"teamspitcher" : "DHM,MGL IL,VEWL"
	},
	{
		"player" : "jacksed01",
		"teams" : "13.5",
		"teamspitcher" : "ELP,JUP PCL,FLOR"
	},
	{
		"player" : "jacksed01",
		"teams" : "6.4",
		"teamspitcher" : "NFK,SYR IL"
	},
	{
		"player" : "jacksed01",
		"teams" : "7.9",
		"teamspitcher" : "SYR,NVL IL,PCL"
	},
	{
		"player" : "blackpa01",
		"teams" : "10.0",
		"teamspitcher" : "CBZ ARIZ"
	},
	{
		"player" : "blackpa01",
		"teams" : "8.0",
		"teamspitcher" : "BOI NORW"
	},
	{
		"player" : "blackpa01",
		"teams" : "8.3",
		"teamspitcher" : "KNC MIDW"
	},
	{
		"player" : "blackpa01",
		"teams" : "8.9",
		"teamspitcher" : "MYR CARL"
	},
	{
		"player" : "blackpa01",
		"teams" : "8.7",
		"teamspitcher" : "KNX,WTN SOUL"
	},
	{
		"player" : "blackpa01",
		"teams" : "7.8",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "blackpa01",
		"teams" : "19.6",
		"teamspitcher" : "STK CALL"
	},
	{
		"player" : "mengdda01",
		"teams" : "7.4",
		"teamspitcher" : "AST,TRC GULF,NYPL"
	},
	{
		"player" : "mengdda01",
		"teams" : "8.8",
		"teamspitcher" : "LNR,STK,DAV CALL,MIDW"
	},
	{
		"player" : "mengdda01",
		"teams" : "6.3",
		"teamspitcher" : "NVL,MDL PCL,TL"
	},
	{
		"player" : "mengdda01",
		"teams" : "8.0",
		"teamspitcher" : "NVL,ATH PCL,ARIZ"
	},
	{
		"player" : "mengdda01",
		"teams" : "7.7",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "anderbr04",
		"teams" : "9.4",
		"teamspitcher" : "SBN,VIS MIDW,CALL"
	},
	{
		"player" : "anderbr04",
		"teams" : "8.1",
		"teamspitcher" : "STK,MDL CALL,TL"
	},
	{
		"player" : "anderbr04",
		"teams" : "14.0",
		"teamspitcher" : "SAC,ATH PCL,ARIZ"
	},
	{
		"player" : "anderbr04",
		"teams" : "11.0",
		"teamspitcher" : "SAC,STK PCL,CALL"
	},
	{
		"player" : "anderbr04",
		"teams" : "13.5",
		"teamspitcher" : "MDL,STK,SAC TL,CALL,PCL"
	},
	{
		"player" : "anderbr04",
		"teams" : "7.7",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "anderbr04",
		"teams" : "14.8",
		"teamspitcher" : "RCU,OKC CALL,PCL"
	},
	{
		"player" : "anderbr04",
		"teams" : "9.2",
		"teamspitcher" : "KNX,BFL SOUL,IL"
	},
	{
		"player" : "anderbr04",
		"teams" : "8.9",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "montafr02",
		"teams" : "11.6",
		"teamspitcher" : "RSX DOSL"
	},
	{
		"player" : "montafr02",
		"teams" : "5.0",
		"teamspitcher" : "RSX DOSL"
	},
	{
		"player" : "montafr02",
		"teams" : "7.9",
		"teamspitcher" : "RES,LOW GULF,NYPL"
	},
	{
		"player" : "montafr02",
		"teams" : "9.2",
		"teamspitcher" : "GRV,KAN,ESC SALL,DOWL"
	},
	{
		"player" : "montafr02",
		"teams" : "6.4",
		"teamspitcher" : "WSM,GLN,WSX,BIR CARL,AZFL,ARIZ,SOUL"
	},
	{
		"player" : "montafr02",
		"teams" : "7.2",
		"teamspitcher" : "BIR SOUL"
	},
	{
		"player" : "montafr02",
		"teams" : "5.7",
		"teamspitcher" : "MES,OKC,TUL AZFL,PCL,TL"
	},
	{
		"player" : "montafr02",
		"teams" : "7.7",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "montafr02",
		"teams" : "8.7",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "manaese01",
		"teams" : "7.5",
		"teamspitcher" : "WMT CARL"
	},
	{
		"player" : "manaese01",
		"teams" : "8.0",
		"teamspitcher" : "MDL,MES,WMT,NTA,ROY TL,AZFL,CARL,ARIZ"
	},
	{
		"player" : "manaese01",
		"teams" : "7.5",
		"teamspitcher" : "NVL,STK PCL,CALL"
	},
	{
		"player" : "manaese01",
		"teams" : "9.0",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "taylobe11",
		"teams" : "BUR,VMT · MIDW,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "taylobe11",
		"teams" : "STK,MDL · CALL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "taylobe11",
		"teams" : "MDL · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "taylobe11",
		"teams" : "MDL,STK · TL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "taylobe11",
		"teams" : "STK,MDL · CALL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "taylobe11",
		"teams" : "MDL,GIG · TL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "taylobe11",
		"teams" : "NVL,MDL,GIG · PCL,TL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "taylobe11",
		"teams" : "NVL · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "thomptr01",
		"teams" : "BRS,GRF · APPY,PION",
		"teamspitcher" : ""
	},
	{
		"player" : "thomptr01",
		"teams" : "KAN · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "thomptr01",
		"teams" : "KAN · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "thomptr01",
		"teams" : "WSM,BIR,SRV,CHR · CARL,SOUL,AZFL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "thomptr01",
		"teams" : "BIR,LGU · SOUL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "thomptr01",
		"teams" : "BIR · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "thomptr01",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "thomptr01",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "thomptr01",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "powelbo02",
		"teams" : "ATH · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "powelbo02",
		"teams" : "VMT · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "powelbo02",
		"teams" : "BEL,MES,STK · MIDW,AZFL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "powelbo02",
		"teams" : "MTG,DHM · SOUL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "powelbo02",
		"teams" : "TAC,AGU · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "powelbo02",
		"teams" : "TAC,NVL · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "powelbo02",
		"teams" : "NVL,STK · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "smolija01",
		"teams" : "NAT · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "smolija01",
		"teams" : "HGR,VMT,NAT · SALL,NYPL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "smolija01",
		"teams" : "GBO · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "smolija01",
		"teams" : "JUP · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "smolija01",
		"teams" : "JCK · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "smolija01",
		"teams" : "JCK · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "smolija01",
		"teams" : "NOR,JCK,JUM · PCL,SOUL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "smolija01",
		"teams" : "FRI,OBR,RRK · TL,MXPW,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "smolija01",
		"teams" : "NVL,RRK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "smolija01",
		"teams" : "NVL · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "smolija01",
		"teams" : "OBR,NVL,STK · MXPW,PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "smolija01",
		"teams" : "NVL · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "maxwebr01",
		"teams" : "VMT,ATH · NYPL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "maxwebr01",
		"teams" : "BEL,STK,MES · MIDW,CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "maxwebr01",
		"teams" : "STK,MDL · CALL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "maxwebr01",
		"teams" : "MDL · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "maxwebr01",
		"teams" : "NVL · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "maxwebr01",
		"teams" : "NVL · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "maxwebr01",
		"teams" : "NVL · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "barrefr02",
		"teams" : "BJY,BLD · GULF,APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "barrefr02",
		"teams" : "VAN · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "barrefr02",
		"teams" : "STK,ZUL · CALL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "barrefr02",
		"teams" : "MDL,MES,NVL · TL,AZFL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "barrefr02",
		"teams" : "NVL · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "barrefr02",
		"teams" : "NVL,ARA · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "phegljo01",
		"teams" : "KAN · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "phegljo01",
		"teams" : "WSM,BIR,BRS · CARL,SOUL,APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "phegljo01",
		"teams" : "BIR,CHR · SOUL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "phegljo01",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "phegljo01",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "phegljo01",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "phegljo01",
		"teams" : "NVL · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "phegljo01",
		"teams" : "NVL · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "phegljo01",
		"teams" : "NVL,STK · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "laurera01",
		"teams" : "GRE · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "laurera01",
		"teams" : "DAV · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "laurera01",
		"teams" : "LNR,CPC,GLN · CALL,TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "laurera01",
		"teams" : "CPC · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "laurera01",
		"teams" : "NVL · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "martini02",
		"teams" : "BAT · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "martini02",
		"teams" : "DAV · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "martini02",
		"teams" : "PEO · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "martini02",
		"teams" : "PLM,SPD · FLOR,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "martini02",
		"teams" : "SPD,MEM · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "martini02",
		"teams" : "MEM,SPD · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "martini02",
		"teams" : "MEM,SPD · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "martini02",
		"teams" : "NVL · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "fowledu01",
		"teams" : "YNK · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "fowledu01",
		"teams" : "CHS · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "fowledu01",
		"teams" : "TAM,CHS,SPS · FLOR,SALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "fowledu01",
		"teams" : "TRE · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "fowledu01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "fowledu01",
		"teams" : "NVL · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "joycema01",
		"teams" : "ONE · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "joycema01",
		"teams" : "WMI · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "joycema01",
		"teams" : "ERI · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "joycema01",
		"teams" : "TOL,MXL · IL,MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "joycema01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "joycema01",
		"teams" : "DHM,POE · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "joycema01",
		"teams" : "POE,DHM · FLOR,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "joycema01",
		"teams" : "GIG,SLK · DOWL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "joycema01",
		"teams" : "NVL · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "daviskh01",
		"teams" : "BRR,HEL · ARIZ,PION",
		"teamspitcher" : ""
	},
	{
		"player" : "daviskh01",
		"teams" : "APP · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "daviskh01",
		"teams" : "BRE,HVL · FLOR,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "daviskh01",
		"teams" : "HVL,NVL,PHO,BRR · SOUL,PCL,AZFL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "daviskh01",
		"teams" : "NVL · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "daviskh01",
		"teams" : "APP · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "piscost01",
		"teams" : "DAV · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "piscost01",
		"teams" : "PLM,SPD,SRV · FLOR,TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "piscost01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "piscost01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "piscost01",
		"teams" : "MEM,PEO,SPD · PCL,MIDW,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "canhama01",
		"teams" : "JAM,JUM · NYPL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "canhama01",
		"teams" : "GBO · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "canhama01",
		"teams" : "JUP · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "canhama01",
		"teams" : "JCK · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "canhama01",
		"teams" : "NOR,AGU · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "canhama01",
		"teams" : "NVL · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "canhama01",
		"teams" : "NVL · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "pindech01",
		"teams" : "VMT · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "pindech01",
		"teams" : "STK · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "pindech01",
		"teams" : "MDL,MES · TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "pindech01",
		"teams" : "NVL · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "pindech01",
		"teams" : "NVL · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "pindech01",
		"teams" : "STK · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "chapmma01",
		"teams" : "BEL,ATH,MDL · MIDW,ARIZ,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "chapmma01",
		"teams" : "STK · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "chapmma01",
		"teams" : "MDL,NVL · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "chapmma01",
		"teams" : "NVL,STK · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "chapmma01",
		"teams" : "STK · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "semiema01",
		"teams" : "KAN · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "semiema01",
		"teams" : "WSM · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "semiema01",
		"teams" : "BIR,CHR,GLN · SOUL,IL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "semiema01",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "semiema01",
		"teams" : "STK,NVL · CALL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "lowrije01",
		"teams" : "LOW · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "lowrije01",
		"teams" : "WMT · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "lowrije01",
		"teams" : "PRT,PAW,MES · EL,IL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "lowrije01",
		"teams" : "PAW · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "lowrije01",
		"teams" : "PAW,LOW,PRT · IL,NYPL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "lowrije01",
		"teams" : "LOW,PAW · NYPL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "lowrije01",
		"teams" : "PAW · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "lowrije01",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "lowrije01",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "lowrije01",
		"teams" : "CPC · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "lowrije01",
		"teams" : "NVL · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "olsonma02",
		"teams" : "ATH,VMT · ARIZ,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "olsonma02",
		"teams" : "BEL · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "olsonma02",
		"teams" : "STK,MES · CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "olsonma02",
		"teams" : "MDL · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "olsonma02",
		"teams" : "NVL · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "olsonma02",
		"teams" : "NVL · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "lucrojo01",
		"teams" : "HEL,NSE · PION,HIWB",
		"teamspitcher" : ""
	},
	{
		"player" : "lucrojo01",
		"teams" : "CHL,BRE · SALL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "lucrojo01",
		"teams" : "HVL,PEA · SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "lucrojo01",
		"teams" : "NVL,HVL · PCL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "lucrojo01",
		"teams" : "HVL · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "lucrojo01",
		"teams" : "APP,NVL · MIDW,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "lucrojo01",
		"teams" : "BRE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "happja01",
		"teams" : "5.6",
		"teamspitcher" : "BAT NYPL"
	},
	{
		"player" : "happja01",
		"teams" : "6.9",
		"teamspitcher" : "LWD,REA SALL,EL"
	},
	{
		"player" : "happja01",
		"teams" : "7.3",
		"teamspitcher" : "CLW,REA,PES,SWB FLOR,EL,AZFL,IL"
	},
	{
		"player" : "happja01",
		"teams" : "9.0",
		"teamspitcher" : "OTT IL"
	},
	{
		"player" : "happja01",
		"teams" : "7.7",
		"teamspitcher" : "LHV IL"
	},
	{
		"player" : "happja01",
		"teams" : "11.2",
		"teamspitcher" : "LHV,REA,CLW IL,EL,FLOR"
	},
	{
		"player" : "happja01",
		"teams" : "5.5",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "happja01",
		"teams" : "10.1",
		"teamspitcher" : "BFL,DUN,BJY IL,FLOR,GULF"
	},
	{
		"player" : "happja01",
		"teams" : "7.4",
		"teamspitcher" : "DUN,BFL FLOR,IL"
	},
	{
		"player" : "happja01",
		"teams" : "21.0",
		"teamspitcher" : "DUN FLOR"
	},
	{
		"player" : "warread01",
		"teams" : "7.8",
		"teamspitcher" : "STI NYPL"
	},
	{
		"player" : "warread01",
		"teams" : "8.0",
		"teamspitcher" : "TAM,TRE FLOR,EL"
	},
	{
		"player" : "warread01",
		"teams" : "8.6",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "warread01",
		"teams" : "9.8",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "warread01",
		"teams" : "6.2",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "warread01",
		"teams" : "4.9",
		"teamspitcher" : "TRE,SWB EL,IL"
	},
	{
		"player" : "shrevch01",
		"teams" : "9.0",
		"teamspitcher" : "DAN APPY"
	},
	{
		"player" : "shrevch01",
		"teams" : "9.9",
		"teamspitcher" : "ROM SALL"
	},
	{
		"player" : "shrevch01",
		"teams" : "8.5",
		"teamspitcher" : "LBG,MSS CARL,SOUL"
	},
	{
		"player" : "shrevch01",
		"teams" : "8.4",
		"teamspitcher" : "MSS,LBG SOUL,CARL"
	},
	{
		"player" : "shrevch01",
		"teams" : "7.2",
		"teamspitcher" : "MSS,GWI SOUL,IL"
	},
	{
		"player" : "shrevch01",
		"teams" : "15.4",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "shrevch01",
		"teams" : "2.2",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "shrevch01",
		"teams" : "5.6",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "coleaj01",
		"teams" : "9.0",
		"teamspitcher" : "VMT NYPL"
	},
	{
		"player" : "coleaj01",
		"teams" : "8.8",
		"teamspitcher" : "HGR SALL"
	},
	{
		"player" : "coleaj01",
		"teams" : "9.3",
		"teamspitcher" : "BUR,STK MIDW,CALL"
	},
	{
		"player" : "coleaj01",
		"teams" : "8.0",
		"teamspitcher" : "POT,HRB CARL,EL"
	},
	{
		"player" : "coleaj01",
		"teams" : "9.9",
		"teamspitcher" : "HRB,SYR EL,IL"
	},
	{
		"player" : "coleaj01",
		"teams" : "7.8",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "coleaj01",
		"teams" : "9.5",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "coleaj01",
		"teams" : "12.2",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "coleaj01",
		"teams" : "32.4",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "roberda08",
		"teams" : "4.8",
		"teamspitcher" : "CHS,TAM,TRE SALL,FLOR,EL"
	},
	{
		"player" : "roberda08",
		"teams" : "4.7",
		"teamspitcher" : "SWB,TRE IL,EL"
	},
	{
		"player" : "roberda08",
		"teams" : "6.1",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "roberda08",
		"teams" : "0.0",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "greench03",
		"teams" : "8.4",
		"teamspitcher" : "LAK,LAT FLOR,GULF"
	},
	{
		"player" : "greench03",
		"teams" : "8.4",
		"teamspitcher" : "WMI MIDW"
	},
	{
		"player" : "greench03",
		"teams" : "10.3",
		"teamspitcher" : "ERI EL"
	},
	{
		"player" : "greench03",
		"teams" : "6.5",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "greench03",
		"teams" : "10.0",
		"teamspitcher" : "SWB,TAM IL,FLOR"
	},
	{
		"player" : "kontoge01",
		"teams" : "7.4",
		"teamspitcher" : "STI NYPL"
	},
	{
		"player" : "kontoge01",
		"teams" : "9.1",
		"teamspitcher" : "TAM,HON FLOR,HIWB"
	},
	{
		"player" : "kontoge01",
		"teams" : "8.0",
		"teamspitcher" : "TRE EL"
	},
	{
		"player" : "kontoge01",
		"teams" : "7.9",
		"teamspitcher" : "SWB,TRE IL,EL"
	},
	{
		"player" : "kontoge01",
		"teams" : "9.8",
		"teamspitcher" : "TRE,PHO,TAM,SWB EL,AZFL,FLOR,IL"
	},
	{
		"player" : "kontoge01",
		"teams" : "7.3",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "kontoge01",
		"teams" : "6.8",
		"teamspitcher" : "FRE PCL"
	},
	{
		"player" : "kontoge01",
		"teams" : "7.2",
		"teamspitcher" : "FRE PCL"
	},
	{
		"player" : "kontoge01",
		"teams" : "7.7",
		"teamspitcher" : "FRE PCL"
	},
	{
		"player" : "kontoge01",
		"teams" : "12.3",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "kontoge01",
		"teams" : "9.2",
		"teamspitcher" : "CLB,SWB IL"
	},
	{
		"player" : "sabatc",
		"teams" : "10.0",
		"teamspitcher" : "BRL APPY"
	},
	{
		"player" : "sabatc",
		"teams" : "6.2",
		"teamspitcher" : "KIN,MHV,CBS CARL,NYPL,SALL"
	},
	{
		"player" : "sabatc",
		"teams" : "7.6",
		"teamspitcher" : "AKR,KIN EL,CARL"
	},
	{
		"player" : "sabatc",
		"teams" : "4.0",
		"teamspitcher" : "AKR EL"
	},
	{
		"player" : "sabatc",
		"teams" : "10.8",
		"teamspitcher" : "BFL IL"
	},
	{
		"player" : "sabatc",
		"teams" : "12.0",
		"teamspitcher" : "TRE,TAM EL,FLOR"
	},
	{
		"player" : "holdejo02",
		"teams" : "10.4",
		"teamspitcher" : "STI,YK2 NYPL,GULF"
	},
	{
		"player" : "holdejo02",
		"teams" : "7.7",
		"teamspitcher" : "TAM,YK2,SWB FLOR,GULF,IL"
	},
	{
		"player" : "holdejo02",
		"teams" : "5.0",
		"teamspitcher" : "TRE,SWB,TAM EL,IL,FLOR"
	},
	{
		"player" : "holdejo02",
		"teams" : "8.4",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "holdejo02",
		"teams" : "7.5",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "sheffju01",
		"teams" : "10.5",
		"teamspitcher" : "INS ARIZ"
	},
	{
		"player" : "sheffju01",
		"teams" : "9.5",
		"teamspitcher" : "LCO MIDW"
	},
	{
		"player" : "sheffju01",
		"teams" : "7.7",
		"teamspitcher" : "LBG,TAM,TRE CARL,FLOR,EL"
	},
	{
		"player" : "sheffju01",
		"teams" : "8.5",
		"teamspitcher" : "TRE,SCO,YK2 EL,AZFL,GULF"
	},
	{
		"player" : "sheffju01",
		"teams" : "6.4",
		"teamspitcher" : "SWB,TRE IL,EL"
	},
	{
		"player" : "adamsch01",
		"teams" : "6.1",
		"teamspitcher" : "TAM,CHS,STI FLOR,SALL,NYPL"
	},
	{
		"player" : "adamsch01",
		"teams" : "5.4",
		"teamspitcher" : "TRE,TAM EL,FLOR"
	},
	{
		"player" : "adamsch01",
		"teams" : "6.2",
		"teamspitcher" : "SWB,TRE IL,EL"
	},
	{
		"player" : "adamsch01",
		"teams" : "8.0",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "tarplst01",
		"teams" : "8.6",
		"teamspitcher" : "OLS GULF"
	},
	{
		"player" : "tarplst01",
		"teams" : "9.4",
		"teamspitcher" : "ADN NYPL"
	},
	{
		"player" : "tarplst01",
		"teams" : "8.4",
		"teamspitcher" : "CHL SALL"
	},
	{
		"player" : "tarplst01",
		"teams" : "8.6",
		"teamspitcher" : "BDT,TAM FLOR"
	},
	{
		"player" : "tarplst01",
		"teams" : "4.0",
		"teamspitcher" : "TAM,TRE FLOR,EL"
	},
	{
		"player" : "tarplst01",
		"teams" : "5.3",
		"teamspitcher" : "TRE,SWB EL,IL"
	},
	{
		"player" : "chapmar01",
		"teams" : "8.0",
		"teamspitcher" : "HLG CNS"
	},
	{
		"player" : "chapmar01",
		"teams" : "6.5",
		"teamspitcher" : "HLG CNS"
	},
	{
		"player" : "chapmar01",
		"teams" : "6.7",
		"teamspitcher" : "HLG CNS"
	},
	{
		"player" : "chapmar01",
		"teams" : "8.3",
		"teamspitcher" : "HLG CNS"
	},
	{
		"player" : "chapmar01",
		"teams" : "7.2",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "chapmar01",
		"teams" : "8.6",
		"teamspitcher" : "CAR,LOU,PHO SOUL,IL,AZFL"
	},
	{
		"player" : "chapmar01",
		"teams" : "21.0",
		"teamspitcher" : "DAY,LOU MIDW,IL"
	},
	{
		"player" : "chapmar01",
		"teams" : "0.0",
		"teamspitcher" : "TRE EL"
	},
	{
		"player" : "kahnlto01",
		"teams" : "1.7",
		"teamspitcher" : "STI NYPL"
	},
	{
		"player" : "kahnlto01",
		"teams" : "7.7",
		"teamspitcher" : "CHS SALL"
	},
	{
		"player" : "kahnlto01",
		"teams" : "5.1",
		"teamspitcher" : "TAM,TRE FLOR,EL"
	},
	{
		"player" : "kahnlto01",
		"teams" : "5.7",
		"teamspitcher" : "TRE EL"
	},
	{
		"player" : "kahnlto01",
		"teams" : "6.3",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "kahnlto01",
		"teams" : "5.7",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "kahnlto01",
		"teams" : "8.8",
		"teamspitcher" : "SWB,CHS IL,SALL"
	},
	{
		"player" : "brittza01",
		"teams" : "9.3",
		"teamspitcher" : "BLD APPY"
	},
	{
		"player" : "brittza01",
		"teams" : "9.0",
		"teamspitcher" : "ADN NYPL"
	},
	{
		"player" : "brittza01",
		"teams" : "7.2",
		"teamspitcher" : "DEL SALL"
	},
	{
		"player" : "brittza01",
		"teams" : "7.9",
		"teamspitcher" : "FDK CARL"
	},
	{
		"player" : "brittza01",
		"teams" : "8.2",
		"teamspitcher" : "BOW,NFK EL,IL"
	},
	{
		"player" : "brittza01",
		"teams" : "9.2",
		"teamspitcher" : "BOW,NFK EL,IL"
	},
	{
		"player" : "brittza01",
		"teams" : "8.1",
		"teamspitcher" : "NFK,BOW IL,EL"
	},
	{
		"player" : "brittza01",
		"teams" : "9.8",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "brittza01",
		"teams" : "6.2",
		"teamspitcher" : "BOW,DEL,FDK,ADN EL,SALL,CARL,NYPL"
	},
	{
		"player" : "brittza01",
		"teams" : "6.8",
		"teamspitcher" : "NFK,BOW,FDK IL,EL,CARL"
	},
	{
		"player" : "montgjo01",
		"teams" : "7.6",
		"teamspitcher" : "STI,YK2 NYPL,GULF"
	},
	{
		"player" : "montgjo01",
		"teams" : "7.9",
		"teamspitcher" : "TAM,CHS FLOR,SALL"
	},
	{
		"player" : "montgjo01",
		"teams" : "7.9",
		"teamspitcher" : "TRE,SWB EL,IL"
	},
	{
		"player" : "montgjo01",
		"teams" : "5.6",
		"teamspitcher" : "TAM,SWB FLOR,IL"
	},
	{
		"player" : "haleda02",
		"teams" : "3.9",
		"teamspitcher" : "DAN APPY"
	},
	{
		"player" : "haleda02",
		"teams" : "9.3",
		"teamspitcher" : "ROM SALL"
	},
	{
		"player" : "haleda02",
		"teams" : "9.4",
		"teamspitcher" : "LBG CARL"
	},
	{
		"player" : "haleda02",
		"teams" : "7.5",
		"teamspitcher" : "MSS SOUL"
	},
	{
		"player" : "haleda02",
		"teams" : "9.7",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "haleda02",
		"teams" : "12.0",
		"teamspitcher" : "ABQ,MOD PCL,CALL"
	},
	{
		"player" : "haleda02",
		"teams" : "12.4",
		"teamspitcher" : "NFK,ABQ IL,PCL"
	},
	{
		"player" : "haleda02",
		"teams" : "11.0",
		"teamspitcher" : "OKC,TUL PCL,TL"
	},
	{
		"player" : "haleda02",
		"teams" : "9.4",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "gallegi01",
		"teams" : "7.8",
		"teamspitcher" : "YNK,OBR GULF,MXPW"
	},
	{
		"player" : "gallegi01",
		"teams" : "10.0",
		"teamspitcher" : "STI,OBR NYPL,MXPW"
	},
	{
		"player" : "gallegi01",
		"teams" : "10.7",
		"teamspitcher" : "CHS,OBR SALL,MXPW"
	},
	{
		"player" : "gallegi01",
		"teams" : "6.9",
		"teamspitcher" : "TAM,OBR,TRE,SWB FLOR,MXPW,EL,IL"
	},
	{
		"player" : "gallegi01",
		"teams" : "5.5",
		"teamspitcher" : "SWB,TRE IL,EL"
	},
	{
		"player" : "gallegi01",
		"teams" : "5.8",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "gallegi01",
		"teams" : "6.3",
		"teamspitcher" : "SWB,MEM IL,PCL"
	},
	{
		"player" : "betande01",
		"teams" : "5.4",
		"teamspitcher" : "YNK GULF"
	},
	{
		"player" : "betande01",
		"teams" : "8.6",
		"teamspitcher" : "STI NYPL"
	},
	{
		"player" : "betande01",
		"teams" : "7.4",
		"teamspitcher" : "CHS,YNK SALL,GULF"
	},
	{
		"player" : "betande01",
		"teams" : "9.7",
		"teamspitcher" : "TAM FLOR"
	},
	{
		"player" : "betande01",
		"teams" : "5.6",
		"teamspitcher" : "TAM,TRE FLOR,EL"
	},
	{
		"player" : "betande01",
		"teams" : "7.3",
		"teamspitcher" : "TRE,SWB EL,IL"
	},
	{
		"player" : "betande01",
		"teams" : "9.9",
		"teamspitcher" : "SWB,TRE,SCO IL,EL,AZFL"
	},
	{
		"player" : "betande01",
		"teams" : "5.6",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "cessalu01",
		"teams" : "8.0",
		"teamspitcher" : "MET,MT2 GULF,DOSL"
	},
	{
		"player" : "cessalu01",
		"teams" : "8.0",
		"teamspitcher" : "BKN NYPL"
	},
	{
		"player" : "cessalu01",
		"teams" : "9.4",
		"teamspitcher" : "SAV SALL"
	},
	{
		"player" : "cessalu01",
		"teams" : "8.9",
		"teamspitcher" : "SCE,BNG FLOR,EL"
	},
	{
		"player" : "cessalu01",
		"teams" : "10.5",
		"teamspitcher" : "BNG,TOL,LVG EL,IL,PCL"
	},
	{
		"player" : "cessalu01",
		"teams" : "7.7",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "cessalu01",
		"teams" : "8.6",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "cessalu01",
		"teams" : "6.6",
		"teamspitcher" : "SWB,TRE,TAM IL,EL,FLOR"
	},
	{
		"player" : "germado01",
		"teams" : "5.6",
		"teamspitcher" : "MRL DOSL"
	},
	{
		"player" : "germado01",
		"teams" : "9.9",
		"teamspitcher" : "MRL DOSL"
	},
	{
		"player" : "germado01",
		"teams" : "6.9",
		"teamspitcher" : "JUM GULF"
	},
	{
		"player" : "germado01",
		"teams" : "6.4",
		"teamspitcher" : "BAT,JUM NYPL,GULF"
	},
	{
		"player" : "germado01",
		"teams" : "8.5",
		"teamspitcher" : "GBO SALL"
	},
	{
		"player" : "germado01",
		"teams" : "7.4",
		"teamspitcher" : "CHS,TAM SALL,FLOR"
	},
	{
		"player" : "germado01",
		"teams" : "7.7",
		"teamspitcher" : "SWB,TRE,AZU IL,EL,DOWL"
	},
	{
		"player" : "germado01",
		"teams" : "8.6",
		"teamspitcher" : "TAM,YNK,SWB FLOR,GULF,IL"
	},
	{
		"player" : "grayso01",
		"teams" : "7.8",
		"teamspitcher" : "MDL,ATH TL,ARIZ"
	},
	{
		"player" : "grayso01",
		"teams" : "9.4",
		"teamspitcher" : "MDL,SAC TL,PCL"
	},
	{
		"player" : "grayso01",
		"teams" : "8.9",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "grayso01",
		"teams" : "2.5",
		"teamspitcher" : "NVL,STK PCL,CALL"
	},
	{
		"player" : "loaisjo01",
		"teams" : "7.9",
		"teamspitcher" : "GIA DOSL"
	},
	{
		"player" : "loaisjo01",
		"teams" : "7.7",
		"teamspitcher" : "CHS SALL"
	},
	{
		"player" : "loaisjo01",
		"teams" : "5.5",
		"teamspitcher" : "STI,YNK,YK2 NYPL,GULF"
	},
	{
		"player" : "loaisjo01",
		"teams" : "9.2",
		"teamspitcher" : "TRE,TAM,YK2 EL,FLOR,GULF"
	},
	{
		"player" : "lynnla01",
		"teams" : "6.8",
		"teamspitcher" : "BAT,DAV NYPL,MIDW"
	},
	{
		"player" : "lynnla01",
		"teams" : "8.4",
		"teamspitcher" : "SPD,PLM,MEM TL,FLOR,PCL"
	},
	{
		"player" : "lynnla01",
		"teams" : "9.0",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "lynnla01",
		"teams" : "9.5",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "lynnla01",
		"teams" : "9.5",
		"teamspitcher" : "PLM,SPD FLOR,TL"
	},
	{
		"player" : "severlu01",
		"teams" : "6.4",
		"teamspitcher" : "YK1 DOSL"
	},
	{
		"player" : "severlu01",
		"teams" : "7.6",
		"teamspitcher" : "YNK,CHS GULF,SALL"
	},
	{
		"player" : "severlu01",
		"teams" : "7.4",
		"teamspitcher" : "CHS,TRE,TAM SALL,EL,FLOR"
	},
	{
		"player" : "severlu01",
		"teams" : "6.5",
		"teamspitcher" : "SWB,TRE IL,EL"
	},
	{
		"player" : "severlu01",
		"teams" : "8.6",
		"teamspitcher" : "SWB,TAM IL,FLOR"
	},
	{
		"player" : "tanakma01",
		"teams" : "8.8",
		"teamspitcher" : "TOH JPPL"
	},
	{
		"player" : "tanakma01",
		"teams" : "8.9",
		"teamspitcher" : "TOH JPPL"
	},
	{
		"player" : "tanakma01",
		"teams" : "8.1",
		"teamspitcher" : "TOH JPPL"
	},
	{
		"player" : "tanakma01",
		"teams" : "9.2",
		"teamspitcher" : "TOH JPPL"
	},
	{
		"player" : "tanakma01",
		"teams" : "6.8",
		"teamspitcher" : "TOH JPPL"
	},
	{
		"player" : "tanakma01",
		"teams" : "8.3",
		"teamspitcher" : "TOH JPPL"
	},
	{
		"player" : "tanakma01",
		"teams" : "7.1",
		"teamspitcher" : "TOH JPPL"
	},
	{
		"player" : "tanakma01",
		"teams" : "9.0",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "tanakma01",
		"teams" : "5.4",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "mckinbi01",
		"teams" : "ATH,VMT · ARIZ,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "mckinbi01",
		"teams" : "STK,DYT · CALL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "mckinbi01",
		"teams" : "KNX,MYR · SOUL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "mckinbi01",
		"teams" : "KNX,TRE · SOUL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "mckinbi01",
		"teams" : "TRE,SWB,SCO · EL,IL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "mckinbi01",
		"teams" : "SWB,BFL,TRE,TAM · IL,EL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "peterja01",
		"teams" : "EUG · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "peterja01",
		"teams" : "FWA · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "peterja01",
		"teams" : "LEL · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "peterja01",
		"teams" : "ELP,SPS,SAN · PCL,AZFL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "peterja01",
		"teams" : "GWI · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "peterja01",
		"teams" : "GWI · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "peterja01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "hechaad01",
		"teams" : "SOC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "hechaad01",
		"teams" : "SOC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "hechaad01",
		"teams" : "SOC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "hechaad01",
		"teams" : "MAN,DUN,PEA · EL,FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "hechaad01",
		"teams" : "MAN,LVG,PHO · EL,PCL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "hechaad01",
		"teams" : "LVG · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "hechaad01",
		"teams" : "JUP · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "hechaad01",
		"teams" : "JUP · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "hechaad01",
		"teams" : "JUP,JCK · FLOR,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "hechaad01",
		"teams" : "POE,DHM · FLOR,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "frazicl01",
		"teams" : "INS · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "frazicl01",
		"teams" : "LCO · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "frazicl01",
		"teams" : "LBG,SCO · CARL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "frazicl01",
		"teams" : "AKR,SWB,CLB · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "frazicl01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "frazicl01",
		"teams" : "SWB,TAM · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "robinsh01",
		"teams" : "DAV · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "robinsh01",
		"teams" : "PLM,CDS · FLOR,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "robinsh01",
		"teams" : "SPD,MEM,PES · TL,PCL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "robinsh01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "robinsh01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "robinsh01",
		"teams" : "MEM,SPD,CDS · PCL,TL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "robinsh01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "robinsh01",
		"teams" : "SPD · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "robinsh01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "robinsh01",
		"teams" : "SLK,SBR · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "robinsh01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "robinsh01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "drurybr01",
		"teams" : "KIS · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "drurybr01",
		"teams" : "DAN · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "drurybr01",
		"teams" : "ROM · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "drurybr01",
		"teams" : "SBN · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "drurybr01",
		"teams" : "VIS,MOB,SRV · CALL,SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "drurybr01",
		"teams" : "MOB,REN · SOUL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "drurybr01",
		"teams" : "REN · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "drurybr01",
		"teams" : "SWB,TRE · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "wadety01",
		"teams" : "YNK,STI · GULF,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "wadety01",
		"teams" : "CHS · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "wadety01",
		"teams" : "TAM,TRE,SPS · FLOR,EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "wadety01",
		"teams" : "TRE,SCO · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "wadety01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "wadety01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "higasky01",
		"teams" : "YNK · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "higasky01",
		"teams" : "STI · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "higasky01",
		"teams" : "CHS · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "higasky01",
		"teams" : "TAM,CHS · FLOR,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "higasky01",
		"teams" : "TAM,TRE · FLOR,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "higasky01",
		"teams" : "TRE · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "higasky01",
		"teams" : "TAM,YNK,SCO · FLOR,GULF,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "higasky01",
		"teams" : "TAM,SWB · FLOR,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "higasky01",
		"teams" : "TRE,SWB · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "higasky01",
		"teams" : "SWB,STI,PUL · IL,NYPL,APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "higasky01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "torrero01",
		"teams" : "VSR,RDL,DAY · VESL,ARIZ,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "torrero01",
		"teams" : "DAY · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "torrero01",
		"teams" : "DYT · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "torrero01",
		"teams" : "KNX,CPC · SOUL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "torrero01",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "torrero01",
		"teams" : "TUL,FRE,MAN,OKC · TL,EL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "torrero01",
		"teams" : "SWB,TAM · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "mccutan01",
		"teams" : "BRD,WPT · GULF,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "mccutan01",
		"teams" : "HCK,ATO · SALL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "mccutan01",
		"teams" : "ATO,PHO,INA · EL,AZFL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "mccutan01",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "mccutan01",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "austity01",
		"teams" : "YNK · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "austity01",
		"teams" : "STI,YNK · NYPL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "austity01",
		"teams" : "CHS,TAM,TRE,YNK · SALL,FLOR,EL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "austity01",
		"teams" : "TRE,SCO,YK2 · EL,AZFL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "austity01",
		"teams" : "TRE,SCO · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "austity01",
		"teams" : "SWB,SPS,TRE,ZUL · IL,AZFL,EL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "austity01",
		"teams" : "SWB,TRE · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "austity01",
		"teams" : "SWB,ESC,TRE · IL,DOWL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "austity01",
		"teams" : "SWB,ROC · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "voitlu01",
		"teams" : "SCS · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "voitlu01",
		"teams" : "PLM · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "voitlu01",
		"teams" : "PLM · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "voitlu01",
		"teams" : "SPD,AGU · TL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "voitlu01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "voitlu01",
		"teams" : "MEM,SWB,SPD · PCL,IL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "rominau01",
		"teams" : "YNK · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "rominau01",
		"teams" : "CHS,WKI · SALL,HIWB",
		"teamspitcher" : ""
	},
	{
		"player" : "rominau01",
		"teams" : "TAM,SPS · FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "rominau01",
		"teams" : "TRE,PHO · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "rominau01",
		"teams" : "TRE,SWB · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "rominau01",
		"teams" : "SCO,SWB,YNK,TAM · AZFL,IL,GULF,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "rominau01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "rominau01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "rominau01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "walkene01",
		"teams" : "BRD,WPT · GULF,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "walkene01",
		"teams" : "HCK,PES,LBG · SALL,AZFL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "walkene01",
		"teams" : "LBG,GCN,ATO · CARL,AZFL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "walkene01",
		"teams" : "ATO,MAZ,INA · EL,MXPW,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "walkene01",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "walkene01",
		"teams" : "INA,MGA,BRD · IL,VEWL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "walkene01",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "walkene01",
		"teams" : "ATO,INA · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "walkene01",
		"teams" : "BDT · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "walkene01",
		"teams" : "LVG · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "stantmi03",
		"teams" : "JAM,JUM · NYPL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "stantmi03",
		"teams" : "GBO · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "stantmi03",
		"teams" : "JCK,JUP,MES · SOUL,FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "stantmi03",
		"teams" : "JCK · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "stantmi03",
		"teams" : "JUP · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "stantmi03",
		"teams" : "JUP · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "stantmi03",
		"teams" : "JUP · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "judgeaa01",
		"teams" : "CHS,TAM,SCO · SALL,FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "judgeaa01",
		"teams" : "TRE,SWB · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "judgeaa01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "hicksaa01",
		"teams" : "TWN · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "hicksaa01",
		"teams" : "BEL · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "hicksaa01",
		"teams" : "BEL · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "hicksaa01",
		"teams" : "FTM,MES · FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "hicksaa01",
		"teams" : "NBR,MGA · EL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "hicksaa01",
		"teams" : "ROC · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "hicksaa01",
		"teams" : "NBR,ROC,MGA · EL,IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "hicksaa01",
		"teams" : "ROC · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "hicksaa01",
		"teams" : "SWB,TRE · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "hicksaa01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "gardnbr01",
		"teams" : "STI · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "gardnbr01",
		"teams" : "TAM,TRE,PES · FLOR,EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "gardnbr01",
		"teams" : "TRE,SWB,PEA · EL,IL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "gardnbr01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "gardnbr01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "gardnbr01",
		"teams" : "SWB,CHS · IL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "andujmi01",
		"teams" : "YNK · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "andujmi01",
		"teams" : "YK2 · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "andujmi01",
		"teams" : "CHS · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "andujmi01",
		"teams" : "TAM · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "andujmi01",
		"teams" : "TRE,TAM,SCO · EL,FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "andujmi01",
		"teams" : "TRE,SWB,GIG · EL,IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "gregodi01",
		"teams" : "RDL · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "gregodi01",
		"teams" : "BIL,SAR · PION,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "gregodi01",
		"teams" : "DAY,CBA,LBG · MIDW,AUBL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "gregodi01",
		"teams" : "BAK,CAR · CALL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "gregodi01",
		"teams" : "PEN,LOU,PEA · SOUL,IL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "gregodi01",
		"teams" : "REN · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "gregodi01",
		"teams" : "REN · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "gregodi01",
		"teams" : "TAM · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "torregl01",
		"teams" : "CBZ,BOI · ARIZ,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "torregl01",
		"teams" : "SBN,MYR · MIDW,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "torregl01",
		"teams" : "MYR,TAM,SCO · CARL,FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "torregl01",
		"teams" : "TRE,SWB · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "torregl01",
		"teams" : "SWB,TAM · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "birdgr01",
		"teams" : "YNK · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "birdgr01",
		"teams" : "YNK,STI · GULF,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "birdgr01",
		"teams" : "CHS · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "birdgr01",
		"teams" : "TAM,SCO,TRE · FLOR,AZFL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "birdgr01",
		"teams" : "TRE,SWB · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "birdgr01",
		"teams" : "SCO · AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "birdgr01",
		"teams" : "SWB,TAM · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "birdgr01",
		"teams" : "SWB,TRE,TAM · IL,EL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "sanchga02",
		"teams" : "YNK,STI · GULF,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "sanchga02",
		"teams" : "CHS,ESC · SALL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sanchga02",
		"teams" : "CHS,TAM,ESC · SALL,FLOR,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sanchga02",
		"teams" : "TAM,TRE,AZU · FLOR,EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sanchga02",
		"teams" : "TRE · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "sanchga02",
		"teams" : "TRE,SWB,SPS · EL,IL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "sanchga02",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "sanchga02",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "sanchga02",
		"teams" : "SWB,YNK · IL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "swarzan01",
		"teams" : "8.6",
		"teamspitcher" : "TWN GULF"
	},
	{
		"player" : "swarzan01",
		"teams" : "9.2",
		"teamspitcher" : "BEL,FTM MIDW,FLOR"
	},
	{
		"player" : "swarzan01",
		"teams" : "8.1",
		"teamspitcher" : "FTM FLOR"
	},
	{
		"player" : "swarzan01",
		"teams" : "8.1",
		"teamspitcher" : "NBR,PHO,FTM EL,AZFL,FLOR"
	},
	{
		"player" : "swarzan01",
		"teams" : "10.2",
		"teamspitcher" : "NBR,ROC EL,IL"
	},
	{
		"player" : "swarzan01",
		"teams" : "8.9",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "swarzan01",
		"teams" : "11.2",
		"teamspitcher" : "ROC,ARA IL,VEWL"
	},
	{
		"player" : "swarzan01",
		"teams" : "9.7",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "swarzan01",
		"teams" : "10.7",
		"teamspitcher" : "DOO,CLB KBO,IL"
	},
	{
		"player" : "swarzan01",
		"teams" : "9.1",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "swarzan01",
		"teams" : "9.8",
		"teamspitcher" : "LVG,BKN PCL,NYPL"
	},
	{
		"player" : "smithdr01",
		"teams" : "4.9",
		"teamspitcher" : "NCH,WMI,LAT NYPL,MIDW,GULF"
	},
	{
		"player" : "smithdr01",
		"teams" : "6.3",
		"teamspitcher" : "WMI MIDW"
	},
	{
		"player" : "smithdr01",
		"teams" : "6.0",
		"teamspitcher" : "POE,BNG,LAK,MTG,DHM EL,FLOR,SOUL,IL"
	},
	{
		"player" : "smithdr01",
		"teams" : "6.8",
		"teamspitcher" : "LVG,BNG PCL,EL"
	},
	{
		"player" : "wahlbo01",
		"teams" : "8.3",
		"teamspitcher" : "VMT,ATH NYPL,ARIZ"
	},
	{
		"player" : "wahlbo01",
		"teams" : "9.1",
		"teamspitcher" : "BEL,STK MIDW,CALL"
	},
	{
		"player" : "wahlbo01",
		"teams" : "10.0",
		"teamspitcher" : "MDL TL"
	},
	{
		"player" : "wahlbo01",
		"teams" : "6.0",
		"teamspitcher" : "MDL,NVL,STK TL,PCL,CALL"
	},
	{
		"player" : "wahlbo01",
		"teams" : "7.8",
		"teamspitcher" : "NVL,STK PCL,CALL"
	},
	{
		"player" : "wahlbo01",
		"teams" : "4.0",
		"teamspitcher" : "NVL,LVG PCL"
	},
	{
		"player" : "zamorda01",
		"teams" : "9.3",
		"teamspitcher" : "WVA NYPL"
	},
	{
		"player" : "zamorda01",
		"teams" : "7.4",
		"teamspitcher" : "CHL SALL"
	},
	{
		"player" : "zamorda01",
		"teams" : "8.0",
		"teamspitcher" : "BDT,ATO FLOR,EL"
	},
	{
		"player" : "zamorda01",
		"teams" : "6.4",
		"teamspitcher" : "BNG EL"
	},
	{
		"player" : "flexech01",
		"teams" : "10.7",
		"teamspitcher" : "KPT APPY"
	},
	{
		"player" : "flexech01",
		"teams" : "6.9",
		"teamspitcher" : "KPT APPY"
	},
	{
		"player" : "flexech01",
		"teams" : "9.8",
		"teamspitcher" : "SAV SALL"
	},
	{
		"player" : "flexech01",
		"teams" : "7.8",
		"teamspitcher" : "SAV,BKN,MET SALL,NYPL,GULF"
	},
	{
		"player" : "flexech01",
		"teams" : "8.4",
		"teamspitcher" : "SCE FLOR"
	},
	{
		"player" : "flexech01",
		"teams" : "5.9",
		"teamspitcher" : "BNG,SCE EL,FLOR"
	},
	{
		"player" : "flexech01",
		"teams" : "10.7",
		"teamspitcher" : "LVG PCL"
	},
	{
		"player" : "ramosaj01",
		"teams" : "5.9",
		"teamspitcher" : "JAM NYPL"
	},
	{
		"player" : "ramosaj01",
		"teams" : "6.2",
		"teamspitcher" : "GBO SALL"
	},
	{
		"player" : "ramosaj01",
		"teams" : "6.4",
		"teamspitcher" : "JUP,SPS FLOR,AZFL"
	},
	{
		"player" : "ramosaj01",
		"teams" : "4.7",
		"teamspitcher" : "JCK SOUL"
	},
	{
		"player" : "ramosaj01",
		"teams" : "18.0",
		"teamspitcher" : "JCK SOUL"
	},
	{
		"player" : "familje01",
		"teams" : "8.0",
		"teamspitcher" : "MET GULF"
	},
	{
		"player" : "familje01",
		"teams" : "7.3",
		"teamspitcher" : "SAV SALL"
	},
	{
		"player" : "familje01",
		"teams" : "8.8",
		"teamspitcher" : "SCE,GIG FLOR,DOWL"
	},
	{
		"player" : "familje01",
		"teams" : "7.7",
		"teamspitcher" : "BNG,SCE,GIG EL,FLOR,DOWL"
	},
	{
		"player" : "familje01",
		"teams" : "9.5",
		"teamspitcher" : "BFL IL"
	},
	{
		"player" : "familje01",
		"teams" : "9.0",
		"teamspitcher" : "SCO,GIG,LVG,SCE,BKN AZFL,DOWL,PCL,FLOR,NYPL"
	},
	{
		"player" : "familje01",
		"teams" : "3.0",
		"teamspitcher" : "SCE,BKN,BNG FLOR,NYPL,EL"
	},
	{
		"player" : "copelsc01",
		"teams" : "6.3",
		"teamspitcher" : "ADN,DEL NYPL,SALL"
	},
	{
		"player" : "copelsc01",
		"teams" : "10.2",
		"teamspitcher" : "DEL,FDK SALL,CARL"
	},
	{
		"player" : "copelsc01",
		"teams" : "11.2",
		"teamspitcher" : "FDK,DUN CARL,FLOR"
	},
	{
		"player" : "copelsc01",
		"teams" : "9.7",
		"teamspitcher" : "DUN FLOR"
	},
	{
		"player" : "copelsc01",
		"teams" : "8.6",
		"teamspitcher" : "MAN,ESS,BFL EL,DOWL,IL"
	},
	{
		"player" : "copelsc01",
		"teams" : "8.6",
		"teamspitcher" : "BFL IL"
	},
	{
		"player" : "copelsc01",
		"teams" : "9.2",
		"teamspitcher" : "LGK,BFL KBO,IL"
	},
	{
		"player" : "copelsc01",
		"teams" : "10.5",
		"teamspitcher" : "NOR,ESS PCL,DOWL"
	},
	{
		"player" : "copelsc01",
		"teams" : "9.6",
		"teamspitcher" : "BNG,LVG,HRM EL,PCL,MXPW"
	},
	{
		"player" : "hanhoer01",
		"teams" : "12.6",
		"teamspitcher" : "APP,BRR MIDW,ARIZ"
	},
	{
		"player" : "hanhoer01",
		"teams" : "10.7",
		"teamspitcher" : "BRE FLOR"
	},
	{
		"player" : "hanhoer01",
		"teams" : "10.0",
		"teamspitcher" : "CAR CARL"
	},
	{
		"player" : "hanhoer01",
		"teams" : "8.6",
		"teamspitcher" : "BNG,LVG,BKN,MET EL,PCL,NYPL,GULF"
	},
	{
		"player" : "bautige01",
		"teams" : "5.5",
		"teamspitcher" : "RSX DOSL"
	},
	{
		"player" : "bautige01",
		"teams" : "6.2",
		"teamspitcher" : "RES GULF"
	},
	{
		"player" : "bautige01",
		"teams" : "6.4",
		"teamspitcher" : "GRV,LOW SALL,NYPL"
	},
	{
		"player" : "bautige01",
		"teams" : "9.7",
		"teamspitcher" : "SAL,SCE CARL,FLOR"
	},
	{
		"player" : "bautige01",
		"teams" : "11.3",
		"teamspitcher" : "LVG,SCO,BNG PCL,AZFL,EL"
	},
	{
		"player" : "bashlty01",
		"teams" : "8.0",
		"teamspitcher" : "KPT APPY"
	},
	{
		"player" : "bashlty01",
		"teams" : "6.3",
		"teamspitcher" : "CBA,SCE SALL,FLOR"
	},
	{
		"player" : "bashlty01",
		"teams" : "7.2",
		"teamspitcher" : "SCE,BNG FLOR,EL"
	},
	{
		"player" : "bashlty01",
		"teams" : "5.3",
		"teamspitcher" : "BNG EL"
	},
	{
		"player" : "baumabu01",
		"teams" : "7.2",
		"teamspitcher" : "BRL APPY"
	},
	{
		"player" : "baumabu01",
		"teams" : "6.8",
		"teamspitcher" : "WMT CARL"
	},
	{
		"player" : "baumabu01",
		"teams" : "9.0",
		"teamspitcher" : "NTA,ROY TL,ARIZ"
	},
	{
		"player" : "baumabu01",
		"teams" : "7.2",
		"teamspitcher" : "NTA TL"
	},
	{
		"player" : "baumabu01",
		"teams" : "8.8",
		"teamspitcher" : "OMA,NTA,AZU PCL,TL,DOWL"
	},
	{
		"player" : "baumabu01",
		"teams" : "8.2",
		"teamspitcher" : "OMA,LGU PCL,VEWL"
	},
	{
		"player" : "baumabu01",
		"teams" : "7.7",
		"teamspitcher" : "OMA,LGU PCL,VEWL"
	},
	{
		"player" : "baumabu01",
		"teams" : "6.9",
		"teamspitcher" : "ELP PCL"
	},
	{
		"player" : "baumabu01",
		"teams" : "7.6",
		"teamspitcher" : "ELP,PD2,SAN,PDS PCL,ARIZ,TL"
	},
	{
		"player" : "baumabu01",
		"teams" : "8.2",
		"teamspitcher" : "LVG,ELP PCL"
	},
	{
		"player" : "robleha01",
		"teams" : "7.2",
		"teamspitcher" : "MTS DOSL"
	},
	{
		"player" : "robleha01",
		"teams" : "8.6",
		"teamspitcher" : "MT1 DOSL"
	},
	{
		"player" : "robleha01",
		"teams" : "6.8",
		"teamspitcher" : "KPT APPY"
	},
	{
		"player" : "robleha01",
		"teams" : "5.8",
		"teamspitcher" : "BKN NYPL"
	},
	{
		"player" : "robleha01",
		"teams" : "8.9",
		"teamspitcher" : "SCE,SCO,MET FLOR,AZFL,GULF"
	},
	{
		"player" : "robleha01",
		"teams" : "8.1",
		"teamspitcher" : "BNG,LCY EL,DOWL"
	},
	{
		"player" : "robleha01",
		"teams" : "7.0",
		"teamspitcher" : "LVG PCL"
	},
	{
		"player" : "robleha01",
		"teams" : "10.4",
		"teamspitcher" : "LVG PCL"
	},
	{
		"player" : "robleha01",
		"teams" : "8.2",
		"teamspitcher" : "LVG PCL"
	},
	{
		"player" : "beckch02",
		"teams" : "11.4",
		"teamspitcher" : "GRF PION"
	},
	{
		"player" : "beckch02",
		"teams" : "8.8",
		"teamspitcher" : "WSM,BIR CARL,SOUL"
	},
	{
		"player" : "beckch02",
		"teams" : "9.1",
		"teamspitcher" : "BIR,CHR SOUL,IL"
	},
	{
		"player" : "beckch02",
		"teams" : "8.3",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "beckch02",
		"teams" : "10.4",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "beckch02",
		"teams" : "6.8",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "beckch02",
		"teams" : "9.5",
		"teamspitcher" : "LVG,CHR PCL,IL"
	},
	{
		"player" : "rhameja01",
		"teams" : "8.7",
		"teamspitcher" : "OGD PION"
	},
	{
		"player" : "rhameja01",
		"teams" : "6.4",
		"teamspitcher" : "GRL MIDW"
	},
	{
		"player" : "rhameja01",
		"teams" : "5.7",
		"teamspitcher" : "TUL,RCU TL,CALL"
	},
	{
		"player" : "rhameja01",
		"teams" : "7.6",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "rhameja01",
		"teams" : "9.0",
		"teamspitcher" : "OKC,LVG PCL"
	},
	{
		"player" : "rhameja01",
		"teams" : "6.1",
		"teamspitcher" : "LVG PCL"
	},
	{
		"player" : "gagnodr01",
		"teams" : "11.8",
		"teamspitcher" : "HEL PION"
	},
	{
		"player" : "gagnodr01",
		"teams" : "7.4",
		"teamspitcher" : "APP,BRE MIDW,FLOR"
	},
	{
		"player" : "gagnodr01",
		"teams" : "9.7",
		"teamspitcher" : "HVL,BRE SOUL,FLOR"
	},
	{
		"player" : "gagnodr01",
		"teams" : "7.9",
		"teamspitcher" : "HVL SOUL"
	},
	{
		"player" : "gagnodr01",
		"teams" : "10.5",
		"teamspitcher" : "CSP,BIL PCL,SOUL"
	},
	{
		"player" : "gagnodr01",
		"teams" : "8.4",
		"teamspitcher" : "CSP,BIL PCL,SOUL"
	},
	{
		"player" : "gagnodr01",
		"teams" : "9.5",
		"teamspitcher" : "SLK,MGL PCL,VEWL"
	},
	{
		"player" : "gagnodr01",
		"teams" : "8.4",
		"teamspitcher" : "LVG,BNG PCL,EL"
	},
	{
		"player" : "blevije01",
		"teams" : "4.6",
		"teamspitcher" : "BOI NORW"
	},
	{
		"player" : "blevije01",
		"teams" : "8.8",
		"teamspitcher" : "PEO MIDW"
	},
	{
		"player" : "blevije01",
		"teams" : "11.3",
		"teamspitcher" : "BOI,DYT,WTN NORW,FLOR,SOUL"
	},
	{
		"player" : "blevije01",
		"teams" : "6.3",
		"teamspitcher" : "KNX,DYT,MDL,USA,SAC SOUL,FLOR,TL,AZFL,PCL"
	},
	{
		"player" : "blevije01",
		"teams" : "8.6",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "blevije01",
		"teams" : "9.2",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "blevije01",
		"teams" : "7.6",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "peterti01",
		"teams" : "11.0",
		"teamspitcher" : "BKN NYPL"
	},
	{
		"player" : "peterti01",
		"teams" : "7.4",
		"teamspitcher" : "SAV,BKN SALL,NYPL"
	},
	{
		"player" : "peterti01",
		"teams" : "8.1",
		"teamspitcher" : "SAV,SCE,BNG SALL,FLOR,EL"
	},
	{
		"player" : "peterti01",
		"teams" : "7.6",
		"teamspitcher" : "SAV SALL"
	},
	{
		"player" : "peterti01",
		"teams" : "7.9",
		"teamspitcher" : "BNG,SCE EL,FLOR"
	},
	{
		"player" : "peterti01",
		"teams" : "5.8",
		"teamspitcher" : "BNG,SCO,LVG EL,AZFL,PCL"
	},
	{
		"player" : "peterti01",
		"teams" : "5.8",
		"teamspitcher" : "LVG,AZU PCL,DOWL"
	},
	{
		"player" : "conlopj01",
		"teams" : "4.2",
		"teamspitcher" : "BKN NYPL"
	},
	{
		"player" : "conlopj01",
		"teams" : "7.3",
		"teamspitcher" : "CBA,SCE SALL,FLOR"
	},
	{
		"player" : "conlopj01",
		"teams" : "8.6",
		"teamspitcher" : "BNG EL"
	},
	{
		"player" : "conlopj01",
		"teams" : "11.6",
		"teamspitcher" : "LVG PCL"
	},
	{
		"player" : "gsellro01",
		"teams" : "10.4",
		"teamspitcher" : "MET GULF"
	},
	{
		"player" : "gsellro01",
		"teams" : "8.7",
		"teamspitcher" : "KPT APPY"
	},
	{
		"player" : "gsellro01",
		"teams" : "8.3",
		"teamspitcher" : "BKN,SAV,SCE NYPL,SALL,FLOR"
	},
	{
		"player" : "gsellro01",
		"teams" : "9.4",
		"teamspitcher" : "SAV SALL"
	},
	{
		"player" : "gsellro01",
		"teams" : "7.9",
		"teamspitcher" : "BNG,SCE EL,FLOR"
	},
	{
		"player" : "gsellro01",
		"teams" : "8.8",
		"teamspitcher" : "BNG,LVG EL,PCL"
	},
	{
		"player" : "gsellro01",
		"teams" : "12.3",
		"teamspitcher" : "BNG,LVG EL,PCL"
	},
	{
		"player" : "sewalpa01",
		"teams" : "8.2",
		"teamspitcher" : "BKN NYPL"
	},
	{
		"player" : "sewalpa01",
		"teams" : "7.7",
		"teamspitcher" : "SAV SALL"
	},
	{
		"player" : "sewalpa01",
		"teams" : "7.8",
		"teamspitcher" : "SCE,SCO,BNG FLOR,AZFL,EL"
	},
	{
		"player" : "sewalpa01",
		"teams" : "6.0",
		"teamspitcher" : "BNG EL"
	},
	{
		"player" : "sewalpa01",
		"teams" : "7.9",
		"teamspitcher" : "LVG,HRM PCL,MXPW"
	},
	{
		"player" : "sewalpa01",
		"teams" : "7.3",
		"teamspitcher" : "LVG PCL"
	},
	{
		"player" : "sewalpa01",
		"teams" : "7.9",
		"teamspitcher" : "LVG PCL"
	},
	{
		"player" : "harvema01",
		"teams" : "8.3",
		"teamspitcher" : "SCE,BNG FLOR,EL"
	},
	{
		"player" : "harvema01",
		"teams" : "7.9",
		"teamspitcher" : "BFL IL"
	},
	{
		"player" : "harvema01",
		"teams" : "8.5",
		"teamspitcher" : "BNG,BKN EL,NYPL"
	},
	{
		"player" : "lugose01",
		"teams" : "8.1",
		"teamspitcher" : "KPT APPY"
	},
	{
		"player" : "lugose01",
		"teams" : "7.6",
		"teamspitcher" : "BKN,SAV NYPL,SALL"
	},
	{
		"player" : "lugose01",
		"teams" : "8.6",
		"teamspitcher" : "SCE FLOR"
	},
	{
		"player" : "lugose01",
		"teams" : "8.9",
		"teamspitcher" : "BNG,LVG EL,PCL"
	},
	{
		"player" : "lugose01",
		"teams" : "12.6",
		"teamspitcher" : "LVG PCL"
	},
	{
		"player" : "lugose01",
		"teams" : "10.5",
		"teamspitcher" : "BNG,SCE EL,FLOR"
	},
	{
		"player" : "oswalco01",
		"teams" : "12.5",
		"teamspitcher" : "KPT APPY"
	},
	{
		"player" : "oswalco01",
		"teams" : "9.7",
		"teamspitcher" : "KPT APPY"
	},
	{
		"player" : "oswalco01",
		"teams" : "7.3",
		"teamspitcher" : "BKN NYPL"
	},
	{
		"player" : "oswalco01",
		"teams" : "10.7",
		"teamspitcher" : "SAV SALL"
	},
	{
		"player" : "oswalco01",
		"teams" : "9.2",
		"teamspitcher" : "SCE,SCO,MET FLOR,AZFL,GULF"
	},
	{
		"player" : "oswalco01",
		"teams" : "7.9",
		"teamspitcher" : "BNG EL"
	},
	{
		"player" : "oswalco01",
		"teams" : "10.0",
		"teamspitcher" : "LVG PCL"
	},
	{
		"player" : "vargaja01",
		"teams" : "6.6",
		"teamspitcher" : "JAM,GBO NYPL,SALL"
	},
	{
		"player" : "vargaja01",
		"teams" : "6.3",
		"teamspitcher" : "JUP,GBO,CAR FLOR,SALL,SOUL"
	},
	{
		"player" : "vargaja01",
		"teams" : "12.2",
		"teamspitcher" : "ABQ,ESC PCL,DOWL"
	},
	{
		"player" : "vargaja01",
		"teams" : "10.2",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "vargaja01",
		"teams" : "7.0",
		"teamspitcher" : "PES AZFL"
	},
	{
		"player" : "vargaja01",
		"teams" : "8.4",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "vargaja01",
		"teams" : "7.7",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "vargaja01",
		"teams" : "11.8",
		"teamspitcher" : "NTA TL"
	},
	{
		"player" : "vargaja01",
		"teams" : "11.3",
		"teamspitcher" : "OMA,ROY,NTA PCL,ARIZ,TL"
	},
	{
		"player" : "vargaja01",
		"teams" : "5.6",
		"teamspitcher" : "BKN,LVG NYPL,PCL"
	},
	{
		"player" : "syndeno01",
		"teams" : "7.4",
		"teamspitcher" : "BJY GULF"
	},
	{
		"player" : "syndeno01",
		"teams" : "7.0",
		"teamspitcher" : "BLD,VAN,LNS APPY,NORW,MIDW"
	},
	{
		"player" : "syndeno01",
		"teams" : "7.0",
		"teamspitcher" : "LNS MIDW"
	},
	{
		"player" : "syndeno01",
		"teams" : "8.2",
		"teamspitcher" : "SCE,BNG FLOR,EL"
	},
	{
		"player" : "syndeno01",
		"teams" : "10.4",
		"teamspitcher" : "LVG PCL"
	},
	{
		"player" : "syndeno01",
		"teams" : "6.1",
		"teamspitcher" : "LVG PCL"
	},
	{
		"player" : "syndeno01",
		"teams" : "12.0",
		"teamspitcher" : "BKN,MET NYPL,GULF"
	},
	{
		"player" : "syndeno01",
		"teams" : "3.6",
		"teamspitcher" : "BKN NYPL"
	},
	{
		"player" : "matzst01",
		"teams" : "5.0",
		"teamspitcher" : "KPT APPY"
	},
	{
		"player" : "matzst01",
		"teams" : "7.3",
		"teamspitcher" : "SAV SALL"
	},
	{
		"player" : "matzst01",
		"teams" : "8.4",
		"teamspitcher" : "BNG,SCE EL,FLOR"
	},
	{
		"player" : "matzst01",
		"teams" : "6.7",
		"teamspitcher" : "LVG,BNG,SCE PCL,EL,FLOR"
	},
	{
		"player" : "matzst01",
		"teams" : "8.3",
		"teamspitcher" : "LVG,SCE PCL,FLOR"
	},
	{
		"player" : "wheelza01",
		"teams" : "7.2",
		"teamspitcher" : "AUG SALL"
	},
	{
		"player" : "wheelza01",
		"teams" : "7.8",
		"teamspitcher" : "SJO,SCE CALL,FLOR"
	},
	{
		"player" : "wheelza01",
		"teams" : "6.9",
		"teamspitcher" : "BNG,BFL EL,IL"
	},
	{
		"player" : "wheelza01",
		"teams" : "8.0",
		"teamspitcher" : "LVG PCL"
	},
	{
		"player" : "wheelza01",
		"teams" : "0.0",
		"teamspitcher" : "SCE FLOR"
	},
	{
		"player" : "wheelza01",
		"teams" : "5.4",
		"teamspitcher" : "LVG PCL"
	},
	{
		"player" : "degroja01",
		"teams" : "12.1",
		"teamspitcher" : "KPT APPY"
	},
	{
		"player" : "degroja01",
		"teams" : "7.4",
		"teamspitcher" : "SAV,SCE SALL,FLOR"
	},
	{
		"player" : "degroja01",
		"teams" : "10.2",
		"teamspitcher" : "LVG,BNG,SCE PCL,EL,FLOR"
	},
	{
		"player" : "degroja01",
		"teams" : "9.2",
		"teamspitcher" : "LVG PCL"
	},
	{
		"player" : "wrighda03",
		"teams" : "KPT · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "wrighda03",
		"teams" : "CLM · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "wrighda03",
		"teams" : "SCE,PES · FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "wrighda03",
		"teams" : "BNG,NFK · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "wrighda03",
		"teams" : "SCE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "wrighda03",
		"teams" : "SCE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "wrighda03",
		"teams" : "SCE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "wrighda03",
		"teams" : "SCE,LVG · FLOR,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "kaczmke01",
		"teams" : "KPT · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "kaczmke01",
		"teams" : "CBA,SCE · SALL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "kaczmke01",
		"teams" : "BNG,SCO · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "kaczmke01",
		"teams" : "LVG,SCE · PCL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "kellyty01",
		"teams" : "ADN · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "kellyty01",
		"teams" : "DEL · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "kellyty01",
		"teams" : "DEL · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "kellyty01",
		"teams" : "FDK,BOW,NFK · CARL,EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "kellyty01",
		"teams" : "BOW,TAC · EL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "kellyty01",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "kellyty01",
		"teams" : "MEM,BFL · PCL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "kellyty01",
		"teams" : "LVG · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "kellyty01",
		"teams" : "LHV,BFL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "kellyty01",
		"teams" : "LVG · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "darnatr01",
		"teams" : "CLR · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "darnatr01",
		"teams" : "WPT,LWD · NYPL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "darnatr01",
		"teams" : "LWD · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "darnatr01",
		"teams" : "DUN · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "darnatr01",
		"teams" : "MAN · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "darnatr01",
		"teams" : "LVG · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "darnatr01",
		"teams" : "LVG,BNG,MET · PCL,EL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "darnatr01",
		"teams" : "LVG,BNG · PCL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "darnatr01",
		"teams" : "BNG,SCE,LVG · EL,FLOR,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "darnatr01",
		"teams" : "SCE,LVG · FLOR,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "darnatr01",
		"teams" : "LVG,SCE · PCL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "dendema01",
		"teams" : "SAV,MET · SALL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "dendema01",
		"teams" : "BNG,SCE · EL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "dendema01",
		"teams" : "BFL,BNG · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "dendema01",
		"teams" : "LVG,SCE · PCL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "dendema01",
		"teams" : "LVG · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "dendema01",
		"teams" : "SYR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "dendema01",
		"teams" : "SYR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "dendema01",
		"teams" : "TOL,NOR · IL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "dendema01",
		"teams" : "LVG · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "evansph01",
		"teams" : "MET,KPT,BKN · GULF,APPY,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "evansph01",
		"teams" : "BKN · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "evansph01",
		"teams" : "SAV · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "evansph01",
		"teams" : "SCE,MET · FLOR,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "evansph01",
		"teams" : "SCE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "evansph01",
		"teams" : "BNG,CGU,SCE · EL,PRWL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "evansph01",
		"teams" : "LVG · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "evansph01",
		"teams" : "LVG · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "reinhja01",
		"teams" : "EVR · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "reinhja01",
		"teams" : "CLI,HDS · MIDW,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "reinhja01",
		"teams" : "MOB,WTN,SRV · SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "reinhja01",
		"teams" : "REN · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "reinhja01",
		"teams" : "REN,SRV · PCL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "reinhja01",
		"teams" : "REN,LVG,DKS · PCL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "lobatjo01",
		"teams" : "IDF · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "lobatjo01",
		"teams" : "EUG · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "lobatjo01",
		"teams" : "FWA,EUG,PDS · MIDW,NORW,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "lobatjo01",
		"teams" : "LEL,FWA · CALL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "lobatjo01",
		"teams" : "LEL,CCS · CALL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "lobatjo01",
		"teams" : "SAN,CCS · TL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "lobatjo01",
		"teams" : "POR,MTG,CCS · PCL,SOUL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "lobatjo01",
		"teams" : "DHM,CCS,MTG · IL,VEWL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "lobatjo01",
		"teams" : "DHM,CCS,POE · IL,VEWL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "lobatjo01",
		"teams" : "DHM,MTG,POE · IL,SOUL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "lobatjo01",
		"teams" : "SYR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "lobatjo01",
		"teams" : "LVG · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "lagarju01",
		"teams" : "MTS · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "lagarju01",
		"teams" : "SAV · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "lagarju01",
		"teams" : "SAV,BKN · SALL,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "lagarju01",
		"teams" : "SAV,MET,AGU · SALL,GULF,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "lagarju01",
		"teams" : "SAV,SCE · SALL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "lagarju01",
		"teams" : "SCE,BNG,PEA,AGU · FLOR,EL,AZFL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "lagarju01",
		"teams" : "BNG,AGU · EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "lagarju01",
		"teams" : "AGU,LVG · DOWL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "lagarju01",
		"teams" : "LVG,BNG,MET,SCE · PCL,EL,GULF,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "lagarju01",
		"teams" : "AGU · DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "lagarju01",
		"teams" : "AGU,BNG · DOWL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "lagarju01",
		"teams" : "BNG,SCE · EL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "guilllu01",
		"teams" : "MET · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "guilllu01",
		"teams" : "KPT,SAV · APPY,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "guilllu01",
		"teams" : "SAV · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "guilllu01",
		"teams" : "SCE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "guilllu01",
		"teams" : "BNG,SCO · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "guilllu01",
		"teams" : "LVG · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "nidoto01",
		"teams" : "KPT · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "nidoto01",
		"teams" : "BKN · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "nidoto01",
		"teams" : "BKN · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "nidoto01",
		"teams" : "SAV · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "nidoto01",
		"teams" : "SCE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "nidoto01",
		"teams" : "BNG,SCO · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "nidoto01",
		"teams" : "BNG,LVG · EL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "smithdo02",
		"teams" : "MET,KPT · GULF,APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "smithdo02",
		"teams" : "SAV · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "smithdo02",
		"teams" : "SCE,SRV · FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "smithdo02",
		"teams" : "BNG · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "smithdo02",
		"teams" : "LVG · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "smithdo02",
		"teams" : "LVG,AZU · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "cespeyo01",
		"teams" : "GNM · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "cespeyo01",
		"teams" : "GNM · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "cespeyo01",
		"teams" : "GNM · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "cespeyo01",
		"teams" : "GNM · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "cespeyo01",
		"teams" : "GNM · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "cespeyo01",
		"teams" : "GNM · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "cespeyo01",
		"teams" : "GNM · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "cespeyo01",
		"teams" : "GNM · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "cespeyo01",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "cespeyo01",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "cespeyo01",
		"teams" : "SCE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "cespeyo01",
		"teams" : "SCE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "cespeyo01",
		"teams" : "MET,BNG · GULF,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaad01",
		"teams" : "MLN,UTI · GULF,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaad01",
		"teams" : "KNC · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaad01",
		"teams" : "PRT · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaad01",
		"teams" : "FRI,ABQ,CAR,PES · TL,PCL,SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaad01",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaad01",
		"teams" : "OKC,MAZ · PCL,MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaad01",
		"teams" : "MAZ · MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaad01",
		"teams" : "RCU,OKC · CALL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "mesorde01",
		"teams" : "RDL · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "mesorde01",
		"teams" : "DAY · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "mesorde01",
		"teams" : "SAR · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "mesorde01",
		"teams" : "CAR,LBG,PES,LOU · SOUL,CARL,AZFL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "mesorde01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "mesorde01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "mesorde01",
		"teams" : "LOU,PEN · IL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "mesorde01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "mesorde01",
		"teams" : "PEN,LOU · SOUL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "mcneije01",
		"teams" : "KPT · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "mcneije01",
		"teams" : "SAV,SCE · SALL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "mcneije01",
		"teams" : "SCE,SRV,BNG · FLOR,AZFL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "mcneije01",
		"teams" : "BNG · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "mcneije01",
		"teams" : "SCE,LVG · FLOR,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "mcneije01",
		"teams" : "BNG,LVG · EL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "reyesjo01",
		"teams" : "KPT · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "reyesjo01",
		"teams" : "CLM · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "reyesjo01",
		"teams" : "SCE,BNG · FLOR,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "reyesjo01",
		"teams" : "NFK · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "reyesjo01",
		"teams" : "SCE,BNG · FLOR,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "reyesjo01",
		"teams" : "SCE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "reyesjo01",
		"teams" : "BNG,BKN · EL,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "reyesjo01",
		"teams" : "BFL,DUN · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "reyesjo01",
		"teams" : "DUN · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "reyesjo01",
		"teams" : "BFL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "reyesjo01",
		"teams" : "ABQ,BNG,BKN · PCL,EL,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "bautijo02",
		"teams" : "WPT · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "bautijo02",
		"teams" : "HCK · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "bautijo02",
		"teams" : "LBG,BRD · CARL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "bautijo02",
		"teams" : "ATO,INA · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "bautijo02",
		"teams" : "LCY,INA · DOWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "bautijo02",
		"teams" : "LCY,BRD · DOWL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "bautijo02",
		"teams" : "LCY,INA · DOWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "bautijo02",
		"teams" : "LCY · DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "bautijo02",
		"teams" : "MAN,BJY · EL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "bautijo02",
		"teams" : "BFL,DUN · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "bautijo02",
		"teams" : "GWI,FLF · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "nimmobr01",
		"teams" : "MET,KPT · GULF,APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "nimmobr01",
		"teams" : "BKN · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "nimmobr01",
		"teams" : "SAV · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "nimmobr01",
		"teams" : "BNG,SCE,SCO · EL,FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "nimmobr01",
		"teams" : "BNG,LVG,SCE · EL,PCL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "nimmobr01",
		"teams" : "LVG · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "nimmobr01",
		"teams" : "LVG,SCE · PCL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "nimmobr01",
		"teams" : "SCE,LVG · FLOR,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "bruceja01",
		"teams" : "RDL,BIL · GULF,PION",
		"teamspitcher" : ""
	},
	{
		"player" : "bruceja01",
		"teams" : "DAY · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "bruceja01",
		"teams" : "SAR,LOU,CNG · FLOR,IL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "bruceja01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "bruceja01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "bruceja01",
		"teams" : "SCE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "jacksau01",
		"teams" : "YNK · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "jacksau01",
		"teams" : "CHS · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "jacksau01",
		"teams" : "TAM,CHS,HON,SWB · FLOR,SALL,HIWB,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "jacksau01",
		"teams" : "TRE,PEA · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "jacksau01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "jacksau01",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "jacksau01",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "jacksau01",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "jacksau01",
		"teams" : "CLB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "confomi01",
		"teams" : "BKN · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "confomi01",
		"teams" : "SCE,BNG · FLOR,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "confomi01",
		"teams" : "LVG · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "confomi01",
		"teams" : "SCE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "frazito01",
		"teams" : "BIL,DAY · PION,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "frazito01",
		"teams" : "SAR,DAY,WKI · FLOR,MIDW,HIWB",
		"teamspitcher" : ""
	},
	{
		"player" : "frazito01",
		"teams" : "CAR,LOU · SOUL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "frazito01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "frazito01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "frazito01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "frazito01",
		"teams" : "LVG,BKN,SCE · PCL,NYPL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "rosaram01",
		"teams" : "KPT · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "rosaram01",
		"teams" : "BKN,SAV · NYPL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "rosaram01",
		"teams" : "SCE,BNG · FLOR,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "rosaram01",
		"teams" : "SCE,BNG · FLOR,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "rosaram01",
		"teams" : "LVG · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "cabreas01",
		"teams" : "EVR · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "cabreas01",
		"teams" : "SBR,APP,TAC · CALL,MIDW,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "cabreas01",
		"teams" : "TAC,BFL,LRA · PCL,IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "cabreas01",
		"teams" : "AKR,LRA,BFL · EL,VEWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "cabreas01",
		"teams" : "BFL,LRA · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "cabreas01",
		"teams" : "AKR · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "cabreas01",
		"teams" : "CCS,AKR,MHV · VEWL,EL,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "cabreas01",
		"teams" : "CCS · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "cabreas01",
		"teams" : "CCS · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "cabreas01",
		"teams" : "CCS · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "cabreas01",
		"teams" : "CCS,SCE · VEWL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "cabreas01",
		"teams" : "SCE,BNG · FLOR,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "florewi01",
		"teams" : "KPT,BKN,SAV · APPY,NYPL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "florewi01",
		"teams" : "SAV · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "florewi01",
		"teams" : "SCE,SAV,MGA · FLOR,SALL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "florewi01",
		"teams" : "SCE,MGA · FLOR,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "florewi01",
		"teams" : "BNG,SCE,MGA · EL,FLOR,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "florewi01",
		"teams" : "LVG,MGA · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "florewi01",
		"teams" : "LVG,MGA · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "florewi01",
		"teams" : "MGA · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "florewi01",
		"teams" : "BNG · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "florewi01",
		"teams" : "SCE,LVG · FLOR,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "florewi01",
		"teams" : "SCE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "plaweke01",
		"teams" : "BKN · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "plaweke01",
		"teams" : "SAV,SCE · SALL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "plaweke01",
		"teams" : "BNG,LVG · EL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "plaweke01",
		"teams" : "LVG · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "plaweke01",
		"teams" : "LVG · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "plaweke01",
		"teams" : "LVG · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "plaweke01",
		"teams" : "LVG · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "dejonch01",
		"teams" : "5.3",
		"teamspitcher" : "BJY GULF"
	},
	{
		"player" : "dejonch01",
		"teams" : "9.3",
		"teamspitcher" : "BLD APPY"
	},
	{
		"player" : "dejonch01",
		"teams" : "10.5",
		"teamspitcher" : "LNS MIDW"
	},
	{
		"player" : "dejonch01",
		"teams" : "7.9",
		"teamspitcher" : "LNS,RCU MIDW,CALL"
	},
	{
		"player" : "dejonch01",
		"teams" : "6.9",
		"teamspitcher" : "TUL,OKC TL,PCL"
	},
	{
		"player" : "dejonch01",
		"teams" : "10.5",
		"teamspitcher" : "TAC,ARK PCL,TL"
	},
	{
		"player" : "dejonch01",
		"teams" : "8.9",
		"teamspitcher" : "ARK,ROC TL,IL"
	},
	{
		"player" : "rogerta01",
		"teams" : "7.5",
		"teamspitcher" : "BEL,ELZ MIDW,APPY"
	},
	{
		"player" : "rogerta01",
		"teams" : "8.5",
		"teamspitcher" : "FTM,CDR FLOR,MIDW"
	},
	{
		"player" : "rogerta01",
		"teams" : "9.2",
		"teamspitcher" : "NBR,SRV EL,AZFL"
	},
	{
		"player" : "rogerta01",
		"teams" : "9.4",
		"teamspitcher" : "ROC,SCO IL,AZFL"
	},
	{
		"player" : "rogerta01",
		"teams" : "12.0",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "drakeol01",
		"teams" : "6.5",
		"teamspitcher" : "BLD,ADN APPY,NYPL"
	},
	{
		"player" : "drakeol01",
		"teams" : "9.5",
		"teamspitcher" : "DEL SALL"
	},
	{
		"player" : "drakeol01",
		"teams" : "9.8",
		"teamspitcher" : "FDK,SCO CARL,AZFL"
	},
	{
		"player" : "drakeol01",
		"teams" : "8.6",
		"teamspitcher" : "FDK,BOW,NFK CARL,EL,IL"
	},
	{
		"player" : "drakeol01",
		"teams" : "4.0",
		"teamspitcher" : "BOW EL"
	},
	{
		"player" : "drakeol01",
		"teams" : "5.5",
		"teamspitcher" : "BOW EL"
	},
	{
		"player" : "drakeol01",
		"teams" : "7.5",
		"teamspitcher" : "BOW,AGU EL,DOWL"
	},
	{
		"player" : "drakeol01",
		"teams" : "4.7",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "drakeol01",
		"teams" : "7.0",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "drakeol01",
		"teams" : "3.5",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "moyaga01",
		"teams" : "5.8",
		"teamspitcher" : "DIA DOSL"
	},
	{
		"player" : "moyaga01",
		"teams" : "8.7",
		"teamspitcher" : "DIA,ZUL DOSL,VEWL"
	},
	{
		"player" : "moyaga01",
		"teams" : "11.9",
		"teamspitcher" : "MSO PION"
	},
	{
		"player" : "moyaga01",
		"teams" : "7.3",
		"teamspitcher" : "MSO,ZUL PION,VEWL"
	},
	{
		"player" : "moyaga01",
		"teams" : "6.2",
		"teamspitcher" : "VIS,KNC,ZUL CALL,MIDW,VEWL"
	},
	{
		"player" : "moyaga01",
		"teams" : "4.6",
		"teamspitcher" : "WTN,CNG SOUL"
	},
	{
		"player" : "moyaga01",
		"teams" : "8.0",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "gonsast01",
		"teams" : "5.7",
		"teamspitcher" : "TWN,ELZ GULF,APPY"
	},
	{
		"player" : "gonsast01",
		"teams" : "7.4",
		"teamspitcher" : "CDR,ELZ MIDW,APPY"
	},
	{
		"player" : "gonsast01",
		"teams" : "6.4",
		"teamspitcher" : "FTM,CDR FLOR,MIDW"
	},
	{
		"player" : "gonsast01",
		"teams" : "5.8",
		"teamspitcher" : "CNG,FTM,SPS SOUL,FLOR,AZFL"
	},
	{
		"player" : "gonsast01",
		"teams" : "7.7",
		"teamspitcher" : "CNG,ROC SOUL,IL"
	},
	{
		"player" : "gonsast01",
		"teams" : "5.7",
		"teamspitcher" : "ROC,CNG IL,SOUL"
	},
	{
		"player" : "slegeaa01",
		"teams" : "7.6",
		"teamspitcher" : "ELZ APPY"
	},
	{
		"player" : "slegeaa01",
		"teams" : "9.0",
		"teamspitcher" : "CDR,FTM MIDW,FLOR"
	},
	{
		"player" : "slegeaa01",
		"teams" : "8.3",
		"teamspitcher" : "FTM,CNG FLOR,SOUL"
	},
	{
		"player" : "slegeaa01",
		"teams" : "8.5",
		"teamspitcher" : "CNG SOUL"
	},
	{
		"player" : "slegeaa01",
		"teams" : "9.3",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "slegeaa01",
		"teams" : "9.0",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "hildetr01",
		"teams" : "8.4",
		"teamspitcher" : "TWN,ELZ GULF,APPY"
	},
	{
		"player" : "hildetr01",
		"teams" : "6.1",
		"teamspitcher" : "CDR,FTM,SCO MIDW,FLOR,AZFL"
	},
	{
		"player" : "hildetr01",
		"teams" : "6.0",
		"teamspitcher" : "CNG,FTM SOUL,FLOR"
	},
	{
		"player" : "hildetr01",
		"teams" : "7.9",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "vasquan02",
		"teams" : "7.3",
		"teamspitcher" : "TWN GULF"
	},
	{
		"player" : "vasquan02",
		"teams" : "4.5",
		"teamspitcher" : "CDR,ELZ MIDW,APPY"
	},
	{
		"player" : "vasquan02",
		"teams" : "7.1",
		"teamspitcher" : "FTM,CDR,SPS FLOR,MIDW,AZFL"
	},
	{
		"player" : "vasquan02",
		"teams" : "6.5",
		"teamspitcher" : "FTM,CNG,ROC FLOR,SOUL,IL"
	},
	{
		"player" : "pressry01",
		"teams" : "9.1",
		"teamspitcher" : "RES GULF"
	},
	{
		"player" : "pressry01",
		"teams" : "7.2",
		"teamspitcher" : "LOW NYPL"
	},
	{
		"player" : "pressry01",
		"teams" : "8.7",
		"teamspitcher" : "GRV SALL"
	},
	{
		"player" : "pressry01",
		"teams" : "8.7",
		"teamspitcher" : "SAL CARL"
	},
	{
		"player" : "pressry01",
		"teams" : "9.7",
		"teamspitcher" : "SAL,PRT,SPS CARL,EL,AZFL"
	},
	{
		"player" : "pressry01",
		"teams" : "8.2",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "pressry01",
		"teams" : "5.4",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "pressry01",
		"teams" : "4.5",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "maytr01",
		"teams" : "8.3",
		"teamspitcher" : "CLR GULF"
	},
	{
		"player" : "maytr01",
		"teams" : "6.8",
		"teamspitcher" : "LWD SALL"
	},
	{
		"player" : "maytr01",
		"teams" : "6.9",
		"teamspitcher" : "CLW,LWD FLOR,SALL"
	},
	{
		"player" : "maytr01",
		"teams" : "7.2",
		"teamspitcher" : "CLW FLOR"
	},
	{
		"player" : "maytr01",
		"teams" : "8.4",
		"teamspitcher" : "REA EL"
	},
	{
		"player" : "maytr01",
		"teams" : "8.8",
		"teamspitcher" : "NBR,GLN EL,AZFL"
	},
	{
		"player" : "maytr01",
		"teams" : "6.9",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "maytr01",
		"teams" : "2.5",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "maytr01",
		"teams" : "7.5",
		"teamspitcher" : "ROC,FTM IL,FLOR"
	},
	{
		"player" : "curtijo02",
		"teams" : "9.5",
		"teamspitcher" : "ELZ APPY"
	},
	{
		"player" : "curtijo02",
		"teams" : "11.5",
		"teamspitcher" : "CDR,TWN MIDW,GULF"
	},
	{
		"player" : "curtijo02",
		"teams" : "7.0",
		"teamspitcher" : "FTM,SPS,CDR FLOR,AZFL,MIDW"
	},
	{
		"player" : "curtijo02",
		"teams" : "4.2",
		"teamspitcher" : "CNG,ROC SOUL,IL"
	},
	{
		"player" : "curtijo02",
		"teams" : "6.7",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "rodnefe01",
		"teams" : "6.7",
		"teamspitcher" : "TIG,LAK GULF,FLOR"
	},
	{
		"player" : "rodnefe01",
		"teams" : "8.1",
		"teamspitcher" : "WMI MIDW"
	},
	{
		"player" : "rodnefe01",
		"teams" : "8.6",
		"teamspitcher" : "LAK,ERI,LAT FLOR,EL,GULF"
	},
	{
		"player" : "rodnefe01",
		"teams" : "5.7",
		"teamspitcher" : "TOL,ERI IL,EL"
	},
	{
		"player" : "rodnefe01",
		"teams" : "4.9",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "rodnefe01",
		"teams" : "6.0",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "rodnefe01",
		"teams" : "12.0",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "rodnefe01",
		"teams" : "6.2",
		"teamspitcher" : "TOL,ESC IL,DOWL"
	},
	{
		"player" : "rodnefe01",
		"teams" : "6.3",
		"teamspitcher" : "ESC,SBR DOWL,CALL"
	},
	{
		"player" : "rodnefe01",
		"teams" : "0.0",
		"teamspitcher" : "ESC DOWL"
	},
	{
		"player" : "hugheph01",
		"teams" : "7.2",
		"teamspitcher" : "YNK GULF"
	},
	{
		"player" : "hugheph01",
		"teams" : "5.6",
		"teamspitcher" : "CHS,TAM SALL,FLOR"
	},
	{
		"player" : "hugheph01",
		"teams" : "5.7",
		"teamspitcher" : "TRE,TAM EL,FLOR"
	},
	{
		"player" : "hugheph01",
		"teams" : "5.0",
		"teamspitcher" : "SWB,TRE,TAM IL,EL,FLOR"
	},
	{
		"player" : "hugheph01",
		"teams" : "7.9",
		"teamspitcher" : "PEA,SWB,CHS AZFL,IL,SALL"
	},
	{
		"player" : "hugheph01",
		"teams" : "7.9",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "hugheph01",
		"teams" : "5.8",
		"teamspitcher" : "TRE,STI EL,NYPL"
	},
	{
		"player" : "hugheph01",
		"teams" : "9.0",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "hugheph01",
		"teams" : "9.9",
		"teamspitcher" : "FTM FLOR"
	},
	{
		"player" : "stewako01",
		"teams" : "5.9",
		"teamspitcher" : "TWN,ELZ GULF,APPY"
	},
	{
		"player" : "stewako01",
		"teams" : "7.8",
		"teamspitcher" : "CDR MIDW"
	},
	{
		"player" : "stewako01",
		"teams" : "9.3",
		"teamspitcher" : "FTM FLOR"
	},
	{
		"player" : "stewako01",
		"teams" : "8.1",
		"teamspitcher" : "CNG,FTM SOUL,FLOR"
	},
	{
		"player" : "stewako01",
		"teams" : "8.7",
		"teamspitcher" : "CNG,ROC SOUL,IL"
	},
	{
		"player" : "stewako01",
		"teams" : "10.7",
		"teamspitcher" : "CNG,ROC SOUL,IL"
	},
	{
		"player" : "duffety01",
		"teams" : "4.7",
		"teamspitcher" : "ELZ APPY"
	},
	{
		"player" : "duffety01",
		"teams" : "8.6",
		"teamspitcher" : "FTM,CDR FLOR,MIDW"
	},
	{
		"player" : "duffety01",
		"teams" : "8.5",
		"teamspitcher" : "NBR,FTM,ROC EL,FLOR,IL"
	},
	{
		"player" : "duffety01",
		"teams" : "7.8",
		"teamspitcher" : "ROC,CNG IL,SOUL"
	},
	{
		"player" : "duffety01",
		"teams" : "7.0",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "duffety01",
		"teams" : "7.3",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "litteza01",
		"teams" : "10.5",
		"teamspitcher" : "MRE ARIZ"
	},
	{
		"player" : "litteza01",
		"teams" : "9.7",
		"teamspitcher" : "PUL APPY"
	},
	{
		"player" : "litteza01",
		"teams" : "9.7",
		"teamspitcher" : "CLI MIDW"
	},
	{
		"player" : "litteza01",
		"teams" : "8.6",
		"teamspitcher" : "CLI,BAK MIDW,CALL"
	},
	{
		"player" : "litteza01",
		"teams" : "7.7",
		"teamspitcher" : "TAM,TRE,CNG FLOR,EL,SOUL"
	},
	{
		"player" : "litteza01",
		"teams" : "8.9",
		"teamspitcher" : "ROC,CNG IL,SOUL"
	},
	{
		"player" : "busenal01",
		"teams" : "8.6",
		"teamspitcher" : "ORM PION"
	},
	{
		"player" : "busenal01",
		"teams" : "7.1",
		"teamspitcher" : "BUR MIDW"
	},
	{
		"player" : "busenal01",
		"teams" : "11.7",
		"teamspitcher" : "ARK,SBR,MES TL,CALL,AZFL"
	},
	{
		"player" : "busenal01",
		"teams" : "9.1",
		"teamspitcher" : "ARK,SLK,ROC,CNG TL,PCL,IL,SOUL"
	},
	{
		"player" : "busenal01",
		"teams" : "4.8",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "busenal01",
		"teams" : "7.2",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "kinlety01",
		"teams" : "13.5",
		"teamspitcher" : "JUM,BAT GULF,NYPL"
	},
	{
		"player" : "kinlety01",
		"teams" : "6.0",
		"teamspitcher" : "GBO SALL"
	},
	{
		"player" : "kinlety01",
		"teams" : "8.4",
		"teamspitcher" : "JUP,MES,JUM FLOR,AZFL,GULF"
	},
	{
		"player" : "kinlety01",
		"teams" : "8.8",
		"teamspitcher" : "JCK,NOR,ESS SOUL,PCL,DOWL"
	},
	{
		"player" : "kinlety01",
		"teams" : "6.0",
		"teamspitcher" : "JUP,JCK,LCY FLOR,SOUL,DOWL"
	},
	{
		"player" : "kinlety01",
		"teams" : "7.2",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "belisma01",
		"teams" : "10.9",
		"teamspitcher" : "DAN APPY"
	},
	{
		"player" : "belisma01",
		"teams" : "7.5",
		"teamspitcher" : "MAC,MYR SALL,CARL"
	},
	{
		"player" : "belisma01",
		"teams" : "",
		"teamspitcher" : ""
	},
	{
		"player" : "belisma01",
		"teams" : "9.2",
		"teamspitcher" : "GRV SOUL"
	},
	{
		"player" : "belisma01",
		"teams" : "9.2",
		"teamspitcher" : "GRV,LOU,RMD SOUL,IL"
	},
	{
		"player" : "belisma01",
		"teams" : "10.6",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "belisma01",
		"teams" : "5.5",
		"teamspitcher" : "LOU,DAY,CNG IL,MIDW,SOUL"
	},
	{
		"player" : "belisma01",
		"teams" : "10.5",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "belisma01",
		"teams" : "8.4",
		"teamspitcher" : "LOU,CNG,SAR IL,SOUL,FLOR"
	},
	{
		"player" : "belisma01",
		"teams" : "8.9",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "belisma01",
		"teams" : "12.3",
		"teamspitcher" : "HRB,POT,SYR EL,CARL,IL"
	},
	{
		"player" : "belisma01",
		"teams" : "8.4",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "reedad01",
		"teams" : "5.1",
		"teamspitcher" : "GRF PION"
	},
	{
		"player" : "reedad01",
		"teams" : "4.9",
		"teamspitcher" : "WSM,CHR,BIR,KAN CARL,IL,SOUL,SALL"
	},
	{
		"player" : "reedad01",
		"teams" : "7.0",
		"teamspitcher" : "REN PCL"
	},
	{
		"player" : "reedad01",
		"teams" : "9.0",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "haleda02",
		"teams" : "3.9",
		"teamspitcher" : "DAN APPY"
	},
	{
		"player" : "haleda02",
		"teams" : "9.3",
		"teamspitcher" : "ROM SALL"
	},
	{
		"player" : "haleda02",
		"teams" : "9.4",
		"teamspitcher" : "LBG CARL"
	},
	{
		"player" : "haleda02",
		"teams" : "7.5",
		"teamspitcher" : "MSS SOUL"
	},
	{
		"player" : "haleda02",
		"teams" : "9.7",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "haleda02",
		"teams" : "12.0",
		"teamspitcher" : "ABQ,MOD PCL,CALL"
	},
	{
		"player" : "haleda02",
		"teams" : "12.4",
		"teamspitcher" : "NFK,ABQ IL,PCL"
	},
	{
		"player" : "haleda02",
		"teams" : "11.0",
		"teamspitcher" : "OKC,TUL PCL,TL"
	},
	{
		"player" : "haleda02",
		"teams" : "9.4",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "santaer01",
		"teams" : "6.9",
		"teamspitcher" : "ANG,PVO ARIZ,PION"
	},
	{
		"player" : "santaer01",
		"teams" : "8.1",
		"teamspitcher" : "CDR MIDW"
	},
	{
		"player" : "santaer01",
		"teams" : "7.1",
		"teamspitcher" : "RCU,ARK CALL,TL"
	},
	{
		"player" : "santaer01",
		"teams" : "8.5",
		"teamspitcher" : "ARK TL"
	},
	{
		"player" : "santaer01",
		"teams" : "8.2",
		"teamspitcher" : "ARK,SLK TL,PCL"
	},
	{
		"player" : "santaer01",
		"teams" : "10.4",
		"teamspitcher" : "SLK,LCY PCL,DOWL"
	},
	{
		"player" : "santaer01",
		"teams" : "20.3",
		"teamspitcher" : "LCY DOWL"
	},
	{
		"player" : "santaer01",
		"teams" : "6.9",
		"teamspitcher" : "SLK,RCU,ANG PCL,CALL,ARIZ"
	},
	{
		"player" : "santaer01",
		"teams" : "13.5",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "santaer01",
		"teams" : "7.4",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "santaer01",
		"teams" : "5.9",
		"teamspitcher" : "ROC,FTM,CNG IL,FLOR,SOUL"
	},
	{
		"player" : "mejiaad01",
		"teams" : "6.9",
		"teamspitcher" : "GIA DOSL"
	},
	{
		"player" : "mejiaad01",
		"teams" : "10.3",
		"teamspitcher" : "AUG SALL"
	},
	{
		"player" : "mejiaad01",
		"teams" : "8.1",
		"teamspitcher" : "SJO,SCO,FRE CALL,AZFL,PCL"
	},
	{
		"player" : "mejiaad01",
		"teams" : "9.9",
		"teamspitcher" : "RMD EL"
	},
	{
		"player" : "mejiaad01",
		"teams" : "7.2",
		"teamspitcher" : "RMD,SCO,GIG EL,AZFL,DOWL"
	},
	{
		"player" : "mejiaad01",
		"teams" : "8.0",
		"teamspitcher" : "RMD,SAC,ROC EL,PCL,IL"
	},
	{
		"player" : "mejiaad01",
		"teams" : "8.3",
		"teamspitcher" : "ROC,GIG IL,DOWL"
	},
	{
		"player" : "mejiaad01",
		"teams" : "7.8",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "dukeza01",
		"teams" : "5.7",
		"teamspitcher" : "BRD GULF"
	},
	{
		"player" : "dukeza01",
		"teams" : "7.9",
		"teamspitcher" : "HCK SALL"
	},
	{
		"player" : "dukeza01",
		"teams" : "6.9",
		"teamspitcher" : "LBG,ATO CARL,EL"
	},
	{
		"player" : "dukeza01",
		"teams" : "9.0",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "dukeza01",
		"teams" : "8.4",
		"teamspitcher" : "BRD,SCS,INA GULF,NYPL,IL"
	},
	{
		"player" : "dukeza01",
		"teams" : "6.4",
		"teamspitcher" : "ATO EL"
	},
	{
		"player" : "dukeza01",
		"teams" : "10.5",
		"teamspitcher" : "REN,VIS PCL,CALL"
	},
	{
		"player" : "dukeza01",
		"teams" : "9.7",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "dukeza01",
		"teams" : "6.2",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "dukeza01",
		"teams" : "4.0",
		"teamspitcher" : "MEM,CDS,PLM PCL,GULF,FLOR"
	},
	{
		"player" : "magilma01",
		"teams" : "9.1",
		"teamspitcher" : "DGR GULF"
	},
	{
		"player" : "magilma01",
		"teams" : "7.4",
		"teamspitcher" : "OGD PION"
	},
	{
		"player" : "magilma01",
		"teams" : "6.2",
		"teamspitcher" : "GRL MIDW"
	},
	{
		"player" : "magilma01",
		"teams" : "10.1",
		"teamspitcher" : "RCU CALL"
	},
	{
		"player" : "magilma01",
		"teams" : "7.8",
		"teamspitcher" : "CNG SOUL"
	},
	{
		"player" : "magilma01",
		"teams" : "7.6",
		"teamspitcher" : "ABQ,MGZ,DGR PCL,PRWL,ARIZ"
	},
	{
		"player" : "magilma01",
		"teams" : "8.3",
		"teamspitcher" : "ABQ,GLN PCL,AZFL"
	},
	{
		"player" : "magilma01",
		"teams" : "14.5",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "magilma01",
		"teams" : "9.0",
		"teamspitcher" : "LOU,PEN IL,SOUL"
	},
	{
		"player" : "magilma01",
		"teams" : "9.8",
		"teamspitcher" : "ELP,PD2 PCL,ARIZ"
	},
	{
		"player" : "magilma01",
		"teams" : "5.2",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "lynnla01",
		"teams" : "6.8",
		"teamspitcher" : "BAT,DAV NYPL,MIDW"
	},
	{
		"player" : "lynnla01",
		"teams" : "8.4",
		"teamspitcher" : "SPD,PLM,MEM TL,FLOR,PCL"
	},
	{
		"player" : "lynnla01",
		"teams" : "9.0",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "lynnla01",
		"teams" : "9.5",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "lynnla01",
		"teams" : "9.5",
		"teamspitcher" : "PLM,SPD FLOR,TL"
	},
	{
		"player" : "gibsoky01",
		"teams" : "8.1",
		"teamspitcher" : "NBR,FTM,ROC EL,FLOR,IL"
	},
	{
		"player" : "gibsoky01",
		"teams" : "10.3",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "gibsoky01",
		"teams" : "9.9",
		"teamspitcher" : "PEA,TWN,FTM,ROC AZFL,GULF,FLOR,IL"
	},
	{
		"player" : "gibsoky01",
		"teams" : "7.5",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "gibsoky01",
		"teams" : "9.4",
		"teamspitcher" : "FTM,ROC FLOR,IL"
	},
	{
		"player" : "gibsoky01",
		"teams" : "6.8",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "romerfe01",
		"teams" : "7.5",
		"teamspitcher" : "TWI DOSL"
	},
	{
		"player" : "romerfe01",
		"teams" : "6.4",
		"teamspitcher" : "TWN GULF"
	},
	{
		"player" : "romerfe01",
		"teams" : "9.8",
		"teamspitcher" : "CDR MIDW"
	},
	{
		"player" : "romerfe01",
		"teams" : "6.6",
		"teamspitcher" : "FTM,CDR FLOR,MIDW"
	},
	{
		"player" : "romerfe01",
		"teams" : "8.9",
		"teamspitcher" : "CNG SOUL"
	},
	{
		"player" : "romerfe01",
		"teams" : "8.4",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "berrijo01",
		"teams" : "4.4",
		"teamspitcher" : "TWN,ELZ GULF,APPY"
	},
	{
		"player" : "berrijo01",
		"teams" : "9.1",
		"teamspitcher" : "CDR MIDW"
	},
	{
		"player" : "berrijo01",
		"teams" : "7.6",
		"teamspitcher" : "FTM,NBR,ROC FLOR,EL,IL"
	},
	{
		"player" : "berrijo01",
		"teams" : "7.4",
		"teamspitcher" : "CNG,ROC SOUL,IL"
	},
	{
		"player" : "berrijo01",
		"teams" : "6.0",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "berrijo01",
		"teams" : "5.4",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "odorija01",
		"teams" : "7.8",
		"teamspitcher" : "BRR ARIZ"
	},
	{
		"player" : "odorija01",
		"teams" : "10.5",
		"teamspitcher" : "HEL PION"
	},
	{
		"player" : "odorija01",
		"teams" : "7.4",
		"teamspitcher" : "APP MIDW"
	},
	{
		"player" : "odorija01",
		"teams" : "8.2",
		"teamspitcher" : "WMT,NTA CARL,TL"
	},
	{
		"player" : "odorija01",
		"teams" : "8.2",
		"teamspitcher" : "OMA,NTA PCL,TL"
	},
	{
		"player" : "odorija01",
		"teams" : "7.3",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "odorija01",
		"teams" : "3.7",
		"teamspitcher" : "POE FLOR"
	},
	{
		"player" : "odorija01",
		"teams" : "9.0",
		"teamspitcher" : "POE FLOR"
	},
	{
		"player" : "grateju01",
		"teams" : "RYL · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "grateju01",
		"teams" : "BRL · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "grateju01",
		"teams" : "IDF · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "grateju01",
		"teams" : "BUR,IDF · MIDW,PION",
		"teamspitcher" : ""
	},
	{
		"player" : "grateju01",
		"teams" : "BUR,WMT · MIDW,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "grateju01",
		"teams" : "KNC,WMT · MIDW,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "grateju01",
		"teams" : "WMT · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "grateju01",
		"teams" : "NTA,LGU · TL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "grateju01",
		"teams" : "NTA,OMA · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "grateju01",
		"teams" : "ZUL,SWB,TRE,CHS · VEWL,IL,EL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "grateju01",
		"teams" : "SLK,ARA · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "grateju01",
		"teams" : "BFL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "grateju01",
		"teams" : "ROC,SLK,CCS · IL,PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "motteta01",
		"teams" : "PRI,BWG · APPY,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "motteta01",
		"teams" : "BWG · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "motteta01",
		"teams" : "POE,DVS · FLOR,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "motteta01",
		"teams" : "MTG,MGA · SOUL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "motteta01",
		"teams" : "DHM,ESC · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "motteta01",
		"teams" : "DHM,OBR,ESC · IL,MXPW,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "motteta01",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "motteta01",
		"teams" : "ROC,TAC,AZU,CNG · IL,PCL,DOWL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "gimench01",
		"teams" : "MHV · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "gimench01",
		"teams" : "LCO · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "gimench01",
		"teams" : "LCO · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "gimench01",
		"teams" : "KIN,AKR,SPS,SCO · CARL,EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "gimench01",
		"teams" : "BFL,AKR,AGU · IL,EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "gimench01",
		"teams" : "CLB,CCS · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "gimench01",
		"teams" : "CLB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "gimench01",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "gimench01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "gimench01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "gimench01",
		"teams" : "RRK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "gimench01",
		"teams" : "RRK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "gimench01",
		"teams" : "FRI · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "gimench01",
		"teams" : "IWA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "fieldjo04",
		"teams" : "HDV · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "fieldjo04",
		"teams" : "BWG,BSB,POE · MIDW,AUBL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "fieldjo04",
		"teams" : "MTG · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "fieldjo04",
		"teams" : "DHM,MTG · IL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "fieldjo04",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "fieldjo04",
		"teams" : "DHM,ROC,CLB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "petitgr01",
		"teams" : "ATH · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "petitgr01",
		"teams" : "VAN · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "petitgr01",
		"teams" : "KNC · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "petitgr01",
		"teams" : "STK,CCS · CALL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "petitgr01",
		"teams" : "MDL,SAC,CCS · TL,PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "petitgr01",
		"teams" : "SAC,CCS · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "petitgr01",
		"teams" : "SAC,CCS · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "petitgr01",
		"teams" : "OKC,CCS · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "petitgr01",
		"teams" : "CCS · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "petitgr01",
		"teams" : "CLB,CCS · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "petitgr01",
		"teams" : "TUC,CCS · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "petitgr01",
		"teams" : "OKC,CCS · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "petitgr01",
		"teams" : "SWB,TAM · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "petitgr01",
		"teams" : "CCS,SLK · VEWL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "petitgr01",
		"teams" : "BFL,CCS,DUN · IL,VEWL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "petitgr01",
		"teams" : "ROC · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "castrja01",
		"teams" : "TRC,NSE · NYPL,HIWB",
		"teamspitcher" : ""
	},
	{
		"player" : "castrja01",
		"teams" : "CPC,LNR,PES · TL,CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "castrja01",
		"teams" : "RRK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "castrja01",
		"teams" : "SRV · AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "castrja01",
		"teams" : "OKC,CPC · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "buxtoby01",
		"teams" : "TWN,ELZ · GULF,APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "buxtoby01",
		"teams" : "CDR,FTM,GLN · MIDW,FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "buxtoby01",
		"teams" : "FTM,SRV,NBR · FLOR,AZFL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "buxtoby01",
		"teams" : "CNG,ROC · SOUL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "buxtoby01",
		"teams" : "ROC · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "buxtoby01",
		"teams" : "ROC · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "buxtoby01",
		"teams" : "ROC,FTM · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "astudwi01",
		"teams" : "TR1 · VESL",
		"teamspitcher" : ""
	},
	{
		"player" : "astudwi01",
		"teams" : "TR1 · VESL",
		"teamspitcher" : ""
	},
	{
		"player" : "astudwi01",
		"teams" : "TR1 · VESL",
		"teamspitcher" : ""
	},
	{
		"player" : "astudwi01",
		"teams" : "CLR · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "astudwi01",
		"teams" : "LWD,ORN · SALL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "astudwi01",
		"teams" : "CLW,ORN · FLOR,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "astudwi01",
		"teams" : "MSS,ORN · SOUL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "astudwi01",
		"teams" : "ORN,REN · VEWL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "astudwi01",
		"teams" : "ROC,ORN · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "lamarry01",
		"teams" : "DAY,LBG · MIDW,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "lamarry01",
		"teams" : "BAK,CAR · CALL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "lamarry01",
		"teams" : "PEN · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "lamarry01",
		"teams" : "PEN,LOU,GLN · SOUL,IL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "lamarry01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "lamarry01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "lamarry01",
		"teams" : "PAW · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "lamarry01",
		"teams" : "NVL,SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "lamarry01",
		"teams" : "ROC,CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "austity01",
		"teams" : "YNK · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "austity01",
		"teams" : "STI,YNK · NYPL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "austity01",
		"teams" : "CHS,TAM,TRE,YNK · SALL,FLOR,EL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "austity01",
		"teams" : "TRE,SCO,YK2 · EL,AZFL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "austity01",
		"teams" : "TRE,SCO · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "austity01",
		"teams" : "SWB,SPS,TRE,ZUL · IL,AZFL,EL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "austity01",
		"teams" : "SWB,TRE · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "austity01",
		"teams" : "SWB,ESC,TRE · IL,DOWL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "austity01",
		"teams" : "SWB,ROC · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "wilsobo02",
		"teams" : "PVO · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "wilsobo02",
		"teams" : "CDR · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "wilsobo02",
		"teams" : "RCU · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "wilsobo02",
		"teams" : "ARK,SCO · TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "wilsobo02",
		"teams" : "ARK,SLK · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "wilsobo02",
		"teams" : "SLK,ESS · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "wilsobo02",
		"teams" : "SLK,ARE · PCL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "wilsobo02",
		"teams" : "SLK,RCU · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "wilsobo02",
		"teams" : "SLK,SBR · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "wilsobo02",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "wilsobo02",
		"teams" : "REN · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "wilsobo02",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "wilsobo02",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "wilsobo02",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "wilsobo02",
		"teams" : "ROC · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "forsylo01",
		"teams" : "PDS,EUG · ARIZ,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "forsylo01",
		"teams" : "SAN,LEL · TL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "forsylo01",
		"teams" : "SAN · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "forsylo01",
		"teams" : "TUC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "forsylo01",
		"teams" : "TUC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "forsylo01",
		"teams" : "TUC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "forsylo01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "forsylo01",
		"teams" : "RCU · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "forsylo01",
		"teams" : "RCU · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "sanomi01",
		"teams" : "TWN,TWI · GULF,DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "sanomi01",
		"teams" : "ELZ · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "sanomi01",
		"teams" : "BEL,ESS · MIDW,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sanomi01",
		"teams" : "NBR,FTM,ESS · EL,FLOR,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sanomi01",
		"teams" : "CNG,ESS · SOUL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sanomi01",
		"teams" : "ROC · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "sanomi01",
		"teams" : "FTM,ROC · FLOR,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "morrilo01",
		"teams" : "JUM,JAM · GULF,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "morrilo01",
		"teams" : "GBO · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "morrilo01",
		"teams" : "JUP,MES · FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "morrilo01",
		"teams" : "JCK,JUP · SOUL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "morrilo01",
		"teams" : "NOR,JUP · PCL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "morrilo01",
		"teams" : "NOR,JUP · PCL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "morrilo01",
		"teams" : "JCK,JUP · SOUL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "morrilo01",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "morrilo01",
		"teams" : "POE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "adriaeh01",
		"teams" : "GIA · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "adriaeh01",
		"teams" : "GIA · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "adriaeh01",
		"teams" : "GNT,FRE,SLM · ARIZ,PCL,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "adriaeh01",
		"teams" : "AUG,LGU · SALL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "adriaeh01",
		"teams" : "SJO · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "adriaeh01",
		"teams" : "SJO,AUG,LGU · CALL,SALL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "adriaeh01",
		"teams" : "RMD,LGU · EL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "adriaeh01",
		"teams" : "RMD,FRE,LGU · EL,PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "adriaeh01",
		"teams" : "ORN,FRE · VEWL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "adriaeh01",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "adriaeh01",
		"teams" : "SAC,SJO,ORN · PCL,CALL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "adriaeh01",
		"teams" : "ROC,FTM · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "grossro01",
		"teams" : "BRD · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "grossro01",
		"teams" : "CHL · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "grossro01",
		"teams" : "BDT · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "grossro01",
		"teams" : "BDT,MES · FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "grossro01",
		"teams" : "ATO,CPC · EL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "grossro01",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "grossro01",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "grossro01",
		"teams" : "FRE,SNT · PCL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "grossro01",
		"teams" : "CLB,ROC · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "grossro01",
		"teams" : "ROC · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "grossro01",
		"teams" : "ROC · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "keplema01",
		"teams" : "TWN · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "keplema01",
		"teams" : "ELZ · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "keplema01",
		"teams" : "ELZ · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "keplema01",
		"teams" : "CDR,GLN · MIDW,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "keplema01",
		"teams" : "FTM,SRV · FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "keplema01",
		"teams" : "CNG,FTM · SOUL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "keplema01",
		"teams" : "ROC · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "caveja01",
		"teams" : "YNK · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "caveja01",
		"teams" : "CHS · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "caveja01",
		"teams" : "TAM,TRE · FLOR,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "caveja01",
		"teams" : "TRE,SWB · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "caveja01",
		"teams" : "SWB,TRE · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "caveja01",
		"teams" : "SWB,TRE · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "caveja01",
		"teams" : "ROC · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "rosared01",
		"teams" : "TWN,MGZ · GULF,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "rosared01",
		"teams" : "ELZ,MGZ · APPY,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "rosared01",
		"teams" : "BEL,MGZ,TWN · MIDW,PRWL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "rosared01",
		"teams" : "NBR,FTM,MGZ,GLN · EL,FLOR,PRWL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "rosared01",
		"teams" : "NBR,SRV,FTM · EL,AZFL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "rosared01",
		"teams" : "ROC · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "rosared01",
		"teams" : "ROC,MGZ · IL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "escobed01",
		"teams" : "VN2 · VESL",
		"teamspitcher" : ""
	},
	{
		"player" : "escobed01",
		"teams" : "WS2 · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "escobed01",
		"teams" : "KAN,GRF,LGU · SALL,PION,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "escobed01",
		"teams" : "KAN,LGU · SALL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "escobed01",
		"teams" : "WSM,BIR,PES,LGU · CARL,SOUL,AZFL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "escobed01",
		"teams" : "CHR,LGU · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "escobed01",
		"teams" : "ROC,ORN,LGU · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "escobed01",
		"teams" : "ORN,ROC · VEWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "escobed01",
		"teams" : "ARA · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "escobed01",
		"teams" : "ARA · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "escobed01",
		"teams" : "ARA,FTM · VEWL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "polanjo01",
		"teams" : "TWN,TWI · GULF,DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "polanjo01",
		"teams" : "TWN · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "polanjo01",
		"teams" : "ELZ · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "polanjo01",
		"teams" : "CDR,ESC · MIDW,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "polanjo01",
		"teams" : "FTM,NBR,ESC · FLOR,EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "polanjo01",
		"teams" : "CNG,ESC,ROC · SOUL,DOWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "polanjo01",
		"teams" : "ROC,ESC · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "polanjo01",
		"teams" : "ROC,FTM · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "doziebr01",
		"teams" : "ELZ,TWN · APPY,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "doziebr01",
		"teams" : "FTM,BEL · FLOR,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "doziebr01",
		"teams" : "NBR,FTM,MES · EL,FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "doziebr01",
		"teams" : "ROC,MGA · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "mauerjo01",
		"teams" : "ELZ · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "mauerjo01",
		"teams" : "QDS · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "mauerjo01",
		"teams" : "NBR,FTM,USA · EL,FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "mauerjo01",
		"teams" : "ROC,FTM · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "mauerjo01",
		"teams" : "FTM · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "mauerjo01",
		"teams" : "FTM · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "mauerjo01",
		"teams" : "FTM · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "mauerjo01",
		"teams" : "CDR · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "mauerjo01",
		"teams" : "ROC · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "garvemi01",
		"teams" : "ELZ · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "garvemi01",
		"teams" : "CDR · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "garvemi01",
		"teams" : "FTM,SCO · FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "garvemi01",
		"teams" : "CNG,ROC,SPS · SOUL,IL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "garvemi01",
		"teams" : "ROC · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "barneja01",
		"teams" : "7.6",
		"teamspitcher" : "HEL PION"
	},
	{
		"player" : "barneja01",
		"teams" : "8.4",
		"teamspitcher" : "APP MIDW"
	},
	{
		"player" : "barneja01",
		"teams" : "8.4",
		"teamspitcher" : "BRE FLOR"
	},
	{
		"player" : "barneja01",
		"teams" : "7.9",
		"teamspitcher" : "HVL,CGU,BRE SOUL,PRWL,FLOR"
	},
	{
		"player" : "barneja01",
		"teams" : "8.3",
		"teamspitcher" : "BIL,SPS SOUL,AZFL"
	},
	{
		"player" : "barneja01",
		"teams" : "5.8",
		"teamspitcher" : "CSP,BIL PCL,SOUL"
	},
	{
		"player" : "barneja01",
		"teams" : "3.9",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "drakeol01",
		"teams" : "6.5",
		"teamspitcher" : "BLD,ADN APPY,NYPL"
	},
	{
		"player" : "drakeol01",
		"teams" : "9.5",
		"teamspitcher" : "DEL SALL"
	},
	{
		"player" : "drakeol01",
		"teams" : "9.8",
		"teamspitcher" : "FDK,SCO CARL,AZFL"
	},
	{
		"player" : "drakeol01",
		"teams" : "8.6",
		"teamspitcher" : "FDK,BOW,NFK CARL,EL,IL"
	},
	{
		"player" : "drakeol01",
		"teams" : "4.0",
		"teamspitcher" : "BOW EL"
	},
	{
		"player" : "drakeol01",
		"teams" : "5.5",
		"teamspitcher" : "BOW EL"
	},
	{
		"player" : "drakeol01",
		"teams" : "7.5",
		"teamspitcher" : "BOW,AGU EL,DOWL"
	},
	{
		"player" : "drakeol01",
		"teams" : "4.7",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "drakeol01",
		"teams" : "7.0",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "drakeol01",
		"teams" : "3.5",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "alberma01",
		"teams" : "9.2",
		"teamspitcher" : "MTV APPY"
	},
	{
		"player" : "alberma01",
		"teams" : "7.2",
		"teamspitcher" : "TRC NYPL"
	},
	{
		"player" : "alberma01",
		"teams" : "7.7",
		"teamspitcher" : "LEX SALL"
	},
	{
		"player" : "alberma01",
		"teams" : "9.7",
		"teamspitcher" : "SAL CARL"
	},
	{
		"player" : "alberma01",
		"teams" : "7.7",
		"teamspitcher" : "CPC,RRK,MES TL,PCL,AZFL"
	},
	{
		"player" : "alberma01",
		"teams" : "8.5",
		"teamspitcher" : "RRK PCL"
	},
	{
		"player" : "alberma01",
		"teams" : "4.5",
		"teamspitcher" : "ADN NYPL"
	},
	{
		"player" : "alberma01",
		"teams" : "13.5",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "alberma01",
		"teams" : "3.0",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "alberma01",
		"teams" : "7.7",
		"teamspitcher" : "CHR,BIR IL,SOUL"
	},
	{
		"player" : "alberma01",
		"teams" : "4.1",
		"teamspitcher" : "BIL,CSP,APP SOUL,PCL,MIDW"
	},
	{
		"player" : "zagurmi01",
		"teams" : "9.4",
		"teamspitcher" : "BAT NYPL"
	},
	{
		"player" : "zagurmi01",
		"teams" : "7.3",
		"teamspitcher" : "LWD SALL"
	},
	{
		"player" : "zagurmi01",
		"teams" : "4.2",
		"teamspitcher" : "CLW,OTT,REA FLOR,IL,EL"
	},
	{
		"player" : "zagurmi01",
		"teams" : "7.1",
		"teamspitcher" : "REA,CLW EL,FLOR"
	},
	{
		"player" : "zagurmi01",
		"teams" : "7.6",
		"teamspitcher" : "LHV IL"
	},
	{
		"player" : "zagurmi01",
		"teams" : "7.1",
		"teamspitcher" : "LHV,ESS IL,DOWL"
	},
	{
		"player" : "zagurmi01",
		"teams" : "3.0",
		"teamspitcher" : "REN PCL"
	},
	{
		"player" : "zagurmi01",
		"teams" : "7.4",
		"teamspitcher" : "SWB,INA,SAC IL,PCL"
	},
	{
		"player" : "zagurmi01",
		"teams" : "6.2",
		"teamspitcher" : "BFL,CLB IL"
	},
	{
		"player" : "zagurmi01",
		"teams" : "7.8",
		"teamspitcher" : "HIR JPCL"
	},
	{
		"player" : "zagurmi01",
		"teams" : "10.2",
		"teamspitcher" : "YKO JPCL"
	},
	{
		"player" : "zagurmi01",
		"teams" : "8.2",
		"teamspitcher" : "ERI,TOL EL,IL"
	},
	{
		"player" : "zagurmi01",
		"teams" : "7.6",
		"teamspitcher" : "CSP,ESS PCL,DOWL"
	},
	{
		"player" : "asheral01",
		"teams" : "7.5",
		"teamspitcher" : "SPO NORW"
	},
	{
		"player" : "asheral01",
		"teams" : "8.1",
		"teamspitcher" : "MYR CARL"
	},
	{
		"player" : "asheral01",
		"teams" : "8.1",
		"teamspitcher" : "FRI TL"
	},
	{
		"player" : "asheral01",
		"teams" : "9.2",
		"teamspitcher" : "RRK,FRI,LHV PCL,TL,IL"
	},
	{
		"player" : "asheral01",
		"teams" : "6.3",
		"teamspitcher" : "GIG,LHV,REA,CLR DOWL,IL,EL,GULF"
	},
	{
		"player" : "asheral01",
		"teams" : "11.1",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "asheral01",
		"teams" : "10.9",
		"teamspitcher" : "CSP,OKC PCL"
	},
	{
		"player" : "cedenxa01",
		"teams" : "10.5",
		"teamspitcher" : "CAS PION"
	},
	{
		"player" : "cedenxa01",
		"teams" : "9.4",
		"teamspitcher" : "AVL SALL"
	},
	{
		"player" : "cedenxa01",
		"teams" : "9.3",
		"teamspitcher" : "MOD CALL"
	},
	{
		"player" : "cedenxa01",
		"teams" : "10.8",
		"teamspitcher" : "TUL,SNT TL,PRWL"
	},
	{
		"player" : "cedenxa01",
		"teams" : "8.8",
		"teamspitcher" : "TUL,MOD,CRO TL,CALL,PRWL"
	},
	{
		"player" : "cedenxa01",
		"teams" : "6.8",
		"teamspitcher" : "CRO PRWL"
	},
	{
		"player" : "cedenxa01",
		"teams" : "8.7",
		"teamspitcher" : "CPC,OKC,CRO TL,PCL,PRWL"
	},
	{
		"player" : "cedenxa01",
		"teams" : "8.3",
		"teamspitcher" : "OKC,SNT PCL,PRWL"
	},
	{
		"player" : "cedenxa01",
		"teams" : "5.5",
		"teamspitcher" : "SYR,SNT IL,PRWL"
	},
	{
		"player" : "cedenxa01",
		"teams" : "5.0",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "cedenxa01",
		"teams" : "5.0",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "housead01",
		"teams" : "9.2",
		"teamspitcher" : "GRE,AST APPY,GULF"
	},
	{
		"player" : "housead01",
		"teams" : "8.2",
		"teamspitcher" : "GRE APPY"
	},
	{
		"player" : "housead01",
		"teams" : "10.3",
		"teamspitcher" : "TRC NYPL"
	},
	{
		"player" : "housead01",
		"teams" : "8.2",
		"teamspitcher" : "DAV MIDW"
	},
	{
		"player" : "housead01",
		"teams" : "9.0",
		"teamspitcher" : "LNR,BIL,CPC,SPS CALL,SOUL,TL,AZFL"
	},
	{
		"player" : "housead01",
		"teams" : "9.7",
		"teamspitcher" : "BIL SOUL"
	},
	{
		"player" : "housead01",
		"teams" : "7.0",
		"teamspitcher" : "SRV,APP,BRR AZFL,MIDW,ARIZ"
	},
	{
		"player" : "housead01",
		"teams" : "11.0",
		"teamspitcher" : "CSP,BIL PCL,SOUL"
	},
	{
		"player" : "soriajo01",
		"teams" : "10.8",
		"teamspitcher" : "DGR GULF"
	},
	{
		"player" : "soriajo01",
		"teams" : "10.2",
		"teamspitcher" : "MCD MEX"
	},
	{
		"player" : "soriajo01",
		"teams" : "7.2",
		"teamspitcher" : "OBR,MCD,FWA MXPW,MEX,MIDW"
	},
	{
		"player" : "soriajo01",
		"teams" : "6.5",
		"teamspitcher" : "OBR MXPW"
	},
	{
		"player" : "soriajo01",
		"teams" : "1.3",
		"teamspitcher" : "FRI,RRK,RGS TL,PCL,ARIZ"
	},
	{
		"player" : "jeffrje01",
		"teams" : "8.0",
		"teamspitcher" : "BRR ARIZ"
	},
	{
		"player" : "jeffrje01",
		"teams" : "6.5",
		"teamspitcher" : "CHL SALL"
	},
	{
		"player" : "jeffrje01",
		"teams" : "8.2",
		"teamspitcher" : "BRE,HVL,PEA FLOR,SOUL,AZFL"
	},
	{
		"player" : "jeffrje01",
		"teams" : "6.3",
		"teamspitcher" : "BRE,HVL FLOR,SOUL"
	},
	{
		"player" : "jeffrje01",
		"teams" : "5.5",
		"teamspitcher" : "HVL,SPS,BRE,APP SOUL,AZFL,FLOR,MIDW"
	},
	{
		"player" : "jeffrje01",
		"teams" : "10.1",
		"teamspitcher" : "NTA,OMA,SPS TL,PCL,AZFL"
	},
	{
		"player" : "jeffrje01",
		"teams" : "7.6",
		"teamspitcher" : "OMA,MGA,NTA PCL,VEWL,TL"
	},
	{
		"player" : "jeffrje01",
		"teams" : "7.1",
		"teamspitcher" : "BFL,DUN,ESC IL,FLOR,DOWL"
	},
	{
		"player" : "jeffrje01",
		"teams" : "7.1",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "loganbo02",
		"teams" : "10.2",
		"teamspitcher" : "GRF PION"
	},
	{
		"player" : "loganbo02",
		"teams" : "10.4",
		"teamspitcher" : "GRF PION"
	},
	{
		"player" : "loganbo02",
		"teams" : "9.1",
		"teamspitcher" : "GRF,WSM PION,CARL"
	},
	{
		"player" : "loganbo02",
		"teams" : "7.3",
		"teamspitcher" : "CHR,LGU IL,VEWL"
	},
	{
		"player" : "loganbo02",
		"teams" : "8.6",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "loganbo02",
		"teams" : "10.0",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "loganbo02",
		"teams" : "6.6",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "loganbo02",
		"teams" : "7.6",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "loganbo02",
		"teams" : "4.5",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "loganbo02",
		"teams" : "0.0",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "loganbo02",
		"teams" : "6.8",
		"teamspitcher" : "BIL,CSP SOUL,PCL"
	},
	{
		"player" : "hoovejj01",
		"teams" : "7.7",
		"teamspitcher" : "DAN APPY"
	},
	{
		"player" : "hoovejj01",
		"teams" : "9.0",
		"teamspitcher" : "ROM,MYR SALL,CARL"
	},
	{
		"player" : "hoovejj01",
		"teams" : "8.3",
		"teamspitcher" : "MYR,MSS CARL,SOUL"
	},
	{
		"player" : "hoovejj01",
		"teams" : "7.0",
		"teamspitcher" : "MSS,GWI,SPS SOUL,IL,AZFL"
	},
	{
		"player" : "hoovejj01",
		"teams" : "3.6",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "hoovejj01",
		"teams" : "5.4",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "hoovejj01",
		"teams" : "9.2",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "hoovejj01",
		"teams" : "5.8",
		"teamspitcher" : "REN,DKS,KNC PCL,ARIZ,MIDW"
	},
	{
		"player" : "hoovejj01",
		"teams" : "13.5",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "knebeco01",
		"teams" : "4.8",
		"teamspitcher" : "WMI,MES MIDW,AZFL"
	},
	{
		"player" : "knebeco01",
		"teams" : "4.6",
		"teamspitcher" : "TOL,ERI,RRK IL,EL,PCL"
	},
	{
		"player" : "knebeco01",
		"teams" : "8.2",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "knebeco01",
		"teams" : "3.8",
		"teamspitcher" : "CSP,BRE PCL,FLOR"
	},
	{
		"player" : "knebeco01",
		"teams" : "4.9",
		"teamspitcher" : "BIL,CSP SOUL,PCL"
	},
	{
		"player" : "burneco01",
		"teams" : "5.8",
		"teamspitcher" : "APP,BRR MIDW,ARIZ"
	},
	{
		"player" : "burneco01",
		"teams" : "6.4",
		"teamspitcher" : "BIL,CAR SOUL,CARL"
	},
	{
		"player" : "burneco01",
		"teams" : "9.5",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "lopezjo02",
		"teams" : "10.1",
		"teamspitcher" : "BRR,MGZ ARIZ,PRWL"
	},
	{
		"player" : "lopezjo02",
		"teams" : "9.2",
		"teamspitcher" : "BRR,BWR ARIZ,DOSL"
	},
	{
		"player" : "lopezjo02",
		"teams" : "9.2",
		"teamspitcher" : "APP MIDW"
	},
	{
		"player" : "lopezjo02",
		"teams" : "9.2",
		"teamspitcher" : "BRE,MGZ FLOR,PRWL"
	},
	{
		"player" : "lopezjo02",
		"teams" : "6.6",
		"teamspitcher" : "BIL SOUL"
	},
	{
		"player" : "lopezjo02",
		"teams" : "9.2",
		"teamspitcher" : "CSP,BIL,MGZ PCL,SOUL,PRWL"
	},
	{
		"player" : "lopezjo02",
		"teams" : "8.0",
		"teamspitcher" : "BIL,AGU,MGZ SOUL,DOWL,PRWL"
	},
	{
		"player" : "lopezjo02",
		"teams" : "9.8",
		"teamspitcher" : "CSP,OMA PCL"
	},
	{
		"player" : "wilkeaa01",
		"teams" : "5.8",
		"teamspitcher" : "LOW NYPL"
	},
	{
		"player" : "wilkeaa01",
		"teams" : "7.3",
		"teamspitcher" : "SAL,PRT,GRV,SCO CARL,EL,SALL,AZFL"
	},
	{
		"player" : "wilkeaa01",
		"teams" : "8.3",
		"teamspitcher" : "CSP,PAW,PRT PCL,IL,EL"
	},
	{
		"player" : "wilkeaa01",
		"teams" : "7.4",
		"teamspitcher" : "BIL SOUL"
	},
	{
		"player" : "wilkeaa01",
		"teams" : "7.8",
		"teamspitcher" : "CSP,MES PCL,AZFL"
	},
	{
		"player" : "haderjo01",
		"teams" : "4.4",
		"teamspitcher" : "OLS,ADN GULF,NYPL"
	},
	{
		"player" : "haderjo01",
		"teams" : "6.8",
		"teamspitcher" : "DEL,DAV SALL,MIDW"
	},
	{
		"player" : "haderjo01",
		"teams" : "6.7",
		"teamspitcher" : "LNR,CPC CALL,TL"
	},
	{
		"player" : "haderjo01",
		"teams" : "7.1",
		"teamspitcher" : "CPC,BIL,SPS TL,SOUL,AZFL"
	},
	{
		"player" : "haderjo01",
		"teams" : "7.2",
		"teamspitcher" : "CSP,BIL PCL,SOUL"
	},
	{
		"player" : "haderjo01",
		"teams" : "8.5",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "jennida01",
		"teams" : "12.1",
		"teamspitcher" : "JAM NYPL"
	},
	{
		"player" : "jennida01",
		"teams" : "7.0",
		"teamspitcher" : "GBO,JUP,JCK SALL,FLOR,SOUL"
	},
	{
		"player" : "jennida01",
		"teams" : "8.4",
		"teamspitcher" : "JCK SOUL"
	},
	{
		"player" : "jennida01",
		"teams" : "9.6",
		"teamspitcher" : "NOR,JCK,SPS,SCO PCL,SOUL,AZFL"
	},
	{
		"player" : "jennida01",
		"teams" : "8.4",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "jennida01",
		"teams" : "6.8",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "jennida01",
		"teams" : "5.4",
		"teamspitcher" : "NOR,JUP,JUM PCL,FLOR,GULF"
	},
	{
		"player" : "jennida01",
		"teams" : "9.0",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "lylesjo01",
		"teams" : "8.3",
		"teamspitcher" : "GRE,TRC APPY,NYPL"
	},
	{
		"player" : "lylesjo01",
		"teams" : "8.3",
		"teamspitcher" : "LEX SALL"
	},
	{
		"player" : "lylesjo01",
		"teams" : "10.3",
		"teamspitcher" : "CPC,RRK TL,PCL"
	},
	{
		"player" : "lylesjo01",
		"teams" : "9.2",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "lylesjo01",
		"teams" : "9.1",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "lylesjo01",
		"teams" : "11.4",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "lylesjo01",
		"teams" : "6.5",
		"teamspitcher" : "CSP,MOD PCL,CALL"
	},
	{
		"player" : "lylesjo01",
		"teams" : "11.5",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "lylesjo01",
		"teams" : "9.0",
		"teamspitcher" : "ELP PCL"
	},
	{
		"player" : "lylesjo01",
		"teams" : "22.2",
		"teamspitcher" : "ELP PCL"
	},
	{
		"player" : "willita01",
		"teams" : "8.9",
		"teamspitcher" : "HEL PION"
	},
	{
		"player" : "willita01",
		"teams" : "7.3",
		"teamspitcher" : "APP,BRE MIDW,FLOR"
	},
	{
		"player" : "willita01",
		"teams" : "8.1",
		"teamspitcher" : "BIL SOUL"
	},
	{
		"player" : "willita01",
		"teams" : "9.0",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "gonzagi01",
		"teams" : "7.8",
		"teamspitcher" : "KAN,BRS SALL,APPY"
	},
	{
		"player" : "gonzagi01",
		"teams" : "6.7",
		"teamspitcher" : "WSM,KAN CARL,SALL"
	},
	{
		"player" : "gonzagi01",
		"teams" : "8.1",
		"teamspitcher" : "REA,PES EL,AZFL"
	},
	{
		"player" : "gonzagi01",
		"teams" : "7.0",
		"teamspitcher" : "BIR SOUL"
	},
	{
		"player" : "gonzagi01",
		"teams" : "7.8",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "gonzagi01",
		"teams" : "6.2",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "gonzagi01",
		"teams" : "10.6",
		"teamspitcher" : "POT CARL"
	},
	{
		"player" : "woodrbr01",
		"teams" : "9.3",
		"teamspitcher" : "HEL PION"
	},
	{
		"player" : "woodrbr01",
		"teams" : "9.2",
		"teamspitcher" : "BRE FLOR"
	},
	{
		"player" : "woodrbr01",
		"teams" : "6.9",
		"teamspitcher" : "BIL,BRE SOUL,FLOR"
	},
	{
		"player" : "woodrbr01",
		"teams" : "9.3",
		"teamspitcher" : "CSP,BRR PCL,ARIZ"
	},
	{
		"player" : "woodrbr01",
		"teams" : "8.5",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "davieza02",
		"teams" : "8.6",
		"teamspitcher" : "DEL SALL"
	},
	{
		"player" : "davieza02",
		"teams" : "8.8",
		"teamspitcher" : "FDK CARL"
	},
	{
		"player" : "davieza02",
		"teams" : "8.2",
		"teamspitcher" : "BOW,GLN EL,AZFL"
	},
	{
		"player" : "davieza02",
		"teams" : "9.0",
		"teamspitcher" : "NFK,CSP IL,PCL"
	},
	{
		"player" : "davieza02",
		"teams" : "6.0",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "davieza02",
		"teams" : "8.4",
		"teamspitcher" : "APP,CSP,BIL MIDW,PCL,SOUL"
	},
	{
		"player" : "peralfr01",
		"teams" : "6.2",
		"teamspitcher" : "MRN DOSL"
	},
	{
		"player" : "peralfr01",
		"teams" : "9.7",
		"teamspitcher" : "MRE ARIZ"
	},
	{
		"player" : "peralfr01",
		"teams" : "8.2",
		"teamspitcher" : "MRE ARIZ"
	},
	{
		"player" : "peralfr01",
		"teams" : "7.9",
		"teamspitcher" : "APP,BRE MIDW,FLOR"
	},
	{
		"player" : "peralfr01",
		"teams" : "5.8",
		"teamspitcher" : "BIL,CAR SOUL,CARL"
	},
	{
		"player" : "peralfr01",
		"teams" : "7.1",
		"teamspitcher" : "CSP,APP PCL,MIDW"
	},
	{
		"player" : "mileywa01",
		"teams" : "9.0",
		"teamspitcher" : "YAK NORW"
	},
	{
		"player" : "mileywa01",
		"teams" : "10.1",
		"teamspitcher" : "SBN,VIS MIDW,CALL"
	},
	{
		"player" : "mileywa01",
		"teams" : "8.3",
		"teamspitcher" : "VIS,MOB CALL,SOUL"
	},
	{
		"player" : "mileywa01",
		"teams" : "8.8",
		"teamspitcher" : "MOB,REN SOUL,PCL"
	},
	{
		"player" : "mileywa01",
		"teams" : "0.0",
		"teamspitcher" : "EVR NORW"
	},
	{
		"player" : "mileywa01",
		"teams" : "9.6",
		"teamspitcher" : "BIL SOUL"
	},
	{
		"player" : "suterbr01",
		"teams" : "10.3",
		"teamspitcher" : "HEL,APP PION,MIDW"
	},
	{
		"player" : "suterbr01",
		"teams" : "9.0",
		"teamspitcher" : "BRE,APP FLOR,MIDW"
	},
	{
		"player" : "suterbr01",
		"teams" : "8.5",
		"teamspitcher" : "HVL SOUL"
	},
	{
		"player" : "suterbr01",
		"teams" : "8.6",
		"teamspitcher" : "BIL,CSP,ARA SOUL,PCL,VEWL"
	},
	{
		"player" : "suterbr01",
		"teams" : "10.5",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "suterbr01",
		"teams" : "10.0",
		"teamspitcher" : "CSP,APP PCL,MIDW"
	},
	{
		"player" : "guerrju02",
		"teams" : "9.7",
		"teamspitcher" : "KIS,ROM,DAN GULF,SALL,APPY"
	},
	{
		"player" : "guerrju02",
		"teams" : "8.4",
		"teamspitcher" : "SAV,HON,SCE,LGU,KPT,BKN SALL,HIWB,FLOR,VEWL,APPY,NYPL"
	},
	{
		"player" : "guerrju02",
		"teams" : "9.7",
		"teamspitcher" : "LGU VEWL"
	},
	{
		"player" : "guerrju02",
		"teams" : "13.9",
		"teamspitcher" : "LGU VEWL"
	},
	{
		"player" : "guerrju02",
		"teams" : "11.4",
		"teamspitcher" : "LGU VEWL"
	},
	{
		"player" : "guerrju02",
		"teams" : "10.8",
		"teamspitcher" : "YUC,LGU MEX,VEWL"
	},
	{
		"player" : "guerrju02",
		"teams" : "7.9",
		"teamspitcher" : "LGU VEWL"
	},
	{
		"player" : "guerrju02",
		"teams" : "7.5",
		"teamspitcher" : "LGU VEWL"
	},
	{
		"player" : "guerrju02",
		"teams" : "7.2",
		"teamspitcher" : "CHR,LGU,BIR IL,VEWL,SOUL"
	},
	{
		"player" : "guerrju02",
		"teams" : "6.1",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "guerrju02",
		"teams" : "7.9",
		"teamspitcher" : "LGU,CSP,BIL VEWL,PCL,SOUL"
	},
	{
		"player" : "guerrju02",
		"teams" : "3.2",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "anderch01",
		"teams" : "6.9",
		"teamspitcher" : "MSO PION"
	},
	{
		"player" : "anderch01",
		"teams" : "7.8",
		"teamspitcher" : "VIS,SBN CALL,MIDW"
	},
	{
		"player" : "anderch01",
		"teams" : "9.5",
		"teamspitcher" : "VIS CALL"
	},
	{
		"player" : "anderch01",
		"teams" : "7.8",
		"teamspitcher" : "MOB,SRV SOUL,AZFL"
	},
	{
		"player" : "anderch01",
		"teams" : "10.9",
		"teamspitcher" : "REN PCL"
	},
	{
		"player" : "anderch01",
		"teams" : "5.1",
		"teamspitcher" : "MOB SOUL"
	},
	{
		"player" : "anderch01",
		"teams" : "9.0",
		"teamspitcher" : "DKS ARIZ"
	},
	{
		"player" : "anderch01",
		"teams" : "9.4",
		"teamspitcher" : "CSP,APP PCL,MIDW"
	},
	{
		"player" : "chacijh01",
		"teams" : "7.4",
		"teamspitcher" : "RCK DOSL"
	},
	{
		"player" : "chacijh01",
		"teams" : "8.3",
		"teamspitcher" : "CAS PION"
	},
	{
		"player" : "chacijh01",
		"teams" : "7.2",
		"teamspitcher" : "AVL,MOD SALL,CALL"
	},
	{
		"player" : "chacijh01",
		"teams" : "8.2",
		"teamspitcher" : "TUL,CCS,CSP TL,VEWL,PCL"
	},
	{
		"player" : "chacijh01",
		"teams" : "6.8",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "chacijh01",
		"teams" : "9.5",
		"teamspitcher" : "CCS,CSP,TUL,MOD VEWL,PCL,TL,CALL"
	},
	{
		"player" : "chacijh01",
		"teams" : "8.5",
		"teamspitcher" : "CSP,MOD PCL,CALL"
	},
	{
		"player" : "chacijh01",
		"teams" : "8.2",
		"teamspitcher" : "REN,CCS,CLB PCL,VEWL,IL"
	},
	{
		"player" : "chacijh01",
		"teams" : "9.0",
		"teamspitcher" : "CCS,GWI VEWL,IL"
	},
	{
		"player" : "frankni01",
		"teams" : "MRE,EVR · ARIZ,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "frankni01",
		"teams" : "CLI,WTN · MIDW,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "frankni01",
		"teams" : "HDS,PEA,WTN,MRE · CALL,AZFL,SOUL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "frankni01",
		"teams" : "TAC,WTN,PEA · PCL,SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "frankni01",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "frankni01",
		"teams" : "TAC,DHM · PCL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "frankni01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "frankni01",
		"teams" : "DHM,POE · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "frankni01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "frankni01",
		"teams" : "BIL,CAR,BRR · SOUL,CARL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "nottija01",
		"teams" : "AST · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "nottija01",
		"teams" : "GRE · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "nottija01",
		"teams" : "DAV,STK,LNR · MIDW,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "nottija01",
		"teams" : "BIL,SRV · SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "nottija01",
		"teams" : "BIL · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "nottija01",
		"teams" : "CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "phillbr02",
		"teams" : "AST · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "phillbr02",
		"teams" : "GRE,DAV · APPY,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "phillbr02",
		"teams" : "DAV,LNR · MIDW,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "phillbr02",
		"teams" : "LNR,CPC,BIL,SPS · CALL,TL,SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "phillbr02",
		"teams" : "BIL,SRV · SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "phillbr02",
		"teams" : "CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "phillbr02",
		"teams" : "CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "orfna01",
		"teams" : "HEL · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "orfna01",
		"teams" : "BRE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "orfna01",
		"teams" : "BIL,SPS · SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "orfna01",
		"teams" : "CSP,BIL · PCL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "orfna01",
		"teams" : "CSP,LGU · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "orfna01",
		"teams" : "CSP,ESC · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "choiji01",
		"teams" : "MRE,HDS · ARIZ,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "choiji01",
		"teams" : "CLI,ADG · MIDW,AUBL",
		"teamspitcher" : ""
	},
	{
		"player" : "choiji01",
		"teams" : "WTN,HDS,TAC · SOUL,CALL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "choiji01",
		"teams" : "TAC,ARA,WTN · PCL,VEWL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "choiji01",
		"teams" : "ESS,TAC,MRE · DOWL,PCL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "choiji01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "choiji01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "choiji01",
		"teams" : "CSP,DHM · PCL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "grandcu01",
		"teams" : "ONE · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "grandcu01",
		"teams" : "LAK · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "grandcu01",
		"teams" : "ERI,GCN · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "grandcu01",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "grandcu01",
		"teams" : "WMI,TOL · MIDW,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "grandcu01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "grandcu01",
		"teams" : "SWB,TAM,TRE · IL,FLOR,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "bandyje01",
		"teams" : "ANG,ORM,ARK,SLK · ARIZ,PION,TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "bandyje01",
		"teams" : "SBR · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "bandyje01",
		"teams" : "ARK,MES · TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "bandyje01",
		"teams" : "ARK,ESC · TL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "bandyje01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "bandyje01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "bandyje01",
		"teams" : "CSP,APP · PCL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "bandyje01",
		"teams" : "CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "millebr02",
		"teams" : "CLI · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "millebr02",
		"teams" : "HDS,WTN · CALL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "millebr02",
		"teams" : "WTN,TAC · SOUL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "millebr02",
		"teams" : "POE,DHM · FLOR,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "millebr02",
		"teams" : "CSP,POE · PCL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "broxtke01",
		"teams" : "MSO · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "broxtke01",
		"teams" : "SBN · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "broxtke01",
		"teams" : "VIS,SBN · CALL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "broxtke01",
		"teams" : "VIS · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "broxtke01",
		"teams" : "MOB,SNY · SOUL,AUBL",
		"teamspitcher" : ""
	},
	{
		"player" : "broxtke01",
		"teams" : "ATO · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "broxtke01",
		"teams" : "INA,ATO · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "broxtke01",
		"teams" : "CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "broxtke01",
		"teams" : "CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "broxtke01",
		"teams" : "CSP,APP · PCL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "sogarer01",
		"teams" : "EUG,FWA,POR · NORW,MIDW,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "sogarer01",
		"teams" : "LEL · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "sogarer01",
		"teams" : "SAN · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "sogarer01",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "sogarer01",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "sogarer01",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "sogarer01",
		"teams" : "STK · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "sogarer01",
		"teams" : "CSP,APP · PCL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "sogarer01",
		"teams" : "CSP,BRR · PCL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "saladty01",
		"teams" : "KAN,BRS · SALL,APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "saladty01",
		"teams" : "WSM,MES · CARL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "saladty01",
		"teams" : "BIR,CHR · SOUL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "saladty01",
		"teams" : "BIR · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "saladty01",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "saladty01",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "saladty01",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "saladty01",
		"teams" : "CSP,APP · PCL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "schoojo01",
		"teams" : "ORI · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "schoojo01",
		"teams" : "BLD,OLS,FDK · APPY,GULF,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "schoojo01",
		"teams" : "FDK,DEL · CARL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "schoojo01",
		"teams" : "BOW,MES · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "schoojo01",
		"teams" : "NFK,SPS,OLS,ADN · IL,AZFL,GULF,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "schoojo01",
		"teams" : "BOW,FDK · EL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "schoojo01",
		"teams" : "NFK,FDK,BOW · IL,CARL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "moustmi01",
		"teams" : "IDF · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "moustmi01",
		"teams" : "BUR · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "moustmi01",
		"teams" : "WMT,SPS · CARL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "moustmi01",
		"teams" : "NTA,OMA · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "moustmi01",
		"teams" : "OMA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "moustmi01",
		"teams" : "LRA · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "moustmi01",
		"teams" : "OMA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "moustmi01",
		"teams" : "NTA · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "kratzer01",
		"teams" : "MDH · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "kratzer01",
		"teams" : "AUB,CHL,NHV · NYPL,SALL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "kratzer01",
		"teams" : "DUN,AUB,MAN · FLOR,NYPL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "kratzer01",
		"teams" : "MAN,PES · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "kratzer01",
		"teams" : "MAN,SYR · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "kratzer01",
		"teams" : "MAN,SYR · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "kratzer01",
		"teams" : "SYR,MAN · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "kratzer01",
		"teams" : "INA,AGU · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "kratzer01",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "kratzer01",
		"teams" : "LHV · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "kratzer01",
		"teams" : "LHV · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "kratzer01",
		"teams" : "LHV,REA · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "kratzer01",
		"teams" : "BFL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "kratzer01",
		"teams" : "LHV,OMA,TAC · IL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "kratzer01",
		"teams" : "BFL,SLK · IL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "kratzer01",
		"teams" : "CLB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "kratzer01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "santado01",
		"teams" : "CLR · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "santado01",
		"teams" : "WPT,LWD · NYPL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "santado01",
		"teams" : "LWD,LEX,LCY · SALL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "santado01",
		"teams" : "LNR,LCY · CALL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "santado01",
		"teams" : "CPC,LCY · TL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "santado01",
		"teams" : "OKC,LCY · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "santado01",
		"teams" : "FRE,LCY,CSP · DOWL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "santado01",
		"teams" : "APP,CSP,LCY,BIL · MIDW,PCL,DOWL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "santado01",
		"teams" : "CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "thameer01",
		"teams" : "DUN,BJY · FLOR,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "thameer01",
		"teams" : "MAN,PEA · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "thameer01",
		"teams" : "LVG · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "thameer01",
		"teams" : "LVG · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "thameer01",
		"teams" : "TAC,NFK,CCS,OLS · PCL,IL,VEWL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "thameer01",
		"teams" : "NCD · KBO",
		"teamspitcher" : ""
	},
	{
		"player" : "thameer01",
		"teams" : "NCD · KBO",
		"teamspitcher" : ""
	},
	{
		"player" : "thameer01",
		"teams" : "NCD · KBO",
		"teamspitcher" : ""
	},
	{
		"player" : "thameer01",
		"teams" : "CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezhe01",
		"teams" : "CZA · VESL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezhe01",
		"teams" : "LAT,LAK,WMI,CCS · GULF,FLOR,MIDW,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezhe01",
		"teams" : "WMI · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "perezhe01",
		"teams" : "WMI,SRV,CCS · MIDW,AZFL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezhe01",
		"teams" : "LAK,CCS · FLOR,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezhe01",
		"teams" : "ERI,TOL,CCS,ZUL · EL,IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezhe01",
		"teams" : "TOL,ZUL · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezhe01",
		"teams" : "ARA · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezhe01",
		"teams" : "ARA,CSP · VEWL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezhe01",
		"teams" : "ARA · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "yelicch01",
		"teams" : "JUM,GBO · GULF,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "yelicch01",
		"teams" : "GBO · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "yelicch01",
		"teams" : "JUP,PHO,JUM · FLOR,AZFL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "yelicch01",
		"teams" : "JCK,JUP,JUM · SOUL,FLOR,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "yelicch01",
		"teams" : "NOR,JUP · PCL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "yelicch01",
		"teams" : "JUP · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "cainlo01",
		"teams" : "BRR,HEL · ARIZ,PION",
		"teamspitcher" : ""
	},
	{
		"player" : "cainlo01",
		"teams" : "CHL,NSE · SALL,HIWB",
		"teamspitcher" : ""
	},
	{
		"player" : "cainlo01",
		"teams" : "BRE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "cainlo01",
		"teams" : "BRE,HVL,PEA,NVL · FLOR,SOUL,AZFL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "cainlo01",
		"teams" : "HVL,PEA,APP,BRR · SOUL,AZFL,MIDW,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "cainlo01",
		"teams" : "HVL,NVL · SOUL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "cainlo01",
		"teams" : "OMA,MGL · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "cainlo01",
		"teams" : "OMA,NTA · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "cainlo01",
		"teams" : "OMA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "cainlo01",
		"teams" : "OMA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "braunry02",
		"teams" : "CHL,HEL · SALL,PION",
		"teamspitcher" : ""
	},
	{
		"player" : "braunry02",
		"teams" : "HVL,BRE,SCO · SOUL,FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "braunry02",
		"teams" : "NVL · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "braunry02",
		"teams" : "APP · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "shawtr01",
		"teams" : "LOW,GRV · NYPL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "shawtr01",
		"teams" : "SAL,PRT · CARL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "shawtr01",
		"teams" : "PRT,SPS · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "shawtr01",
		"teams" : "PAW,PRT · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "shawtr01",
		"teams" : "PAW,SNT · IL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "arciaor01",
		"teams" : "BWR · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "arciaor01",
		"teams" : "APP · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "arciaor01",
		"teams" : "BRE,ORN · FLOR,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "arciaor01",
		"teams" : "BIL,ORN · SOUL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "arciaor01",
		"teams" : "CSP,ORN · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "arciaor01",
		"teams" : "CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "villajo01",
		"teams" : "PHL · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "villajo01",
		"teams" : "CLR,WPT · GULF,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "villajo01",
		"teams" : "LWD,LNR,AGU · SALL,CALL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "villajo01",
		"teams" : "CPC,LNR,AGU · TL,CALL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "villajo01",
		"teams" : "CPC,AGU · TL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "villajo01",
		"teams" : "OKC,AGU · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "villajo01",
		"teams" : "OKC,AGU · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "villajo01",
		"teams" : "FRE,AGU · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "villajo01",
		"teams" : "AGU · DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "villajo01",
		"teams" : "APP,AGU · MIDW,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "villajo01",
		"teams" : "CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "aguilje01",
		"teams" : "IS1 · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "aguilje01",
		"teams" : "IS1 · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "aguilje01",
		"teams" : "MHV,INS · NYPL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "aguilje01",
		"teams" : "LCO,KIN,CCS,PHO · MIDW,CARL,VEWL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "aguilje01",
		"teams" : "CAR,AKR,CCS · CARL,EL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "aguilje01",
		"teams" : "AKR,CCS · EL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "aguilje01",
		"teams" : "CLB,CCS · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "aguilje01",
		"teams" : "CLB,CCS · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "aguilje01",
		"teams" : "CLB,CCS · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "aguilje01",
		"teams" : "CCS · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "pinama01",
		"teams" : "RGS · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "pinama01",
		"teams" : "RGS · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "pinama01",
		"teams" : "CLI,LGU · MIDW,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "pinama01",
		"teams" : "BAK,FRI · CALL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "pinama01",
		"teams" : "FRI,LGU · TL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "pinama01",
		"teams" : "NTA,OMA,MGA · TL,PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "pinama01",
		"teams" : "OMA,MGA,NTA · PCL,VEWL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "pinama01",
		"teams" : "NTA,MGA,ROY · TL,VEWL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "pinama01",
		"teams" : "NTA,OMA,MGA · TL,PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "pinama01",
		"teams" : "MGA,TOL,WTN,TAC · VEWL,IL,SOUL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "pinama01",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "pinama01",
		"teams" : "CSP,LRA · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "pinama01",
		"teams" : "APP · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "zieglbr01",
		"teams" : "7.5",
		"teamspitcher" : "BAT NYPL"
	},
	{
		"player" : "zieglbr01",
		"teams" : "9.2",
		"teamspitcher" : "MOD CALL"
	},
	{
		"player" : "zieglbr01",
		"teams" : "10.7",
		"teamspitcher" : "STK,MDL CALL,TL"
	},
	{
		"player" : "zieglbr01",
		"teams" : "10.1",
		"teamspitcher" : "MDL,SAC TL,PCL"
	},
	{
		"player" : "zieglbr01",
		"teams" : "7.5",
		"teamspitcher" : "SAC,MDL PCL,TL"
	},
	{
		"player" : "zieglbr01",
		"teams" : "5.5",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "zieglbr01",
		"teams" : "9.0",
		"teamspitcher" : "JUM,JUP GULF,FLOR"
	},
	{
		"player" : "guerrta01",
		"teams" : "7.2",
		"teamspitcher" : "PDR DOSL"
	},
	{
		"player" : "guerrta01",
		"teams" : "12.0",
		"teamspitcher" : "PDS ARIZ"
	},
	{
		"player" : "guerrta01",
		"teams" : "6.0",
		"teamspitcher" : "EUG,PDS NORW,ARIZ"
	},
	{
		"player" : "guerrta01",
		"teams" : "8.3",
		"teamspitcher" : "EUG,PDS,FWA NORW,ARIZ,MIDW"
	},
	{
		"player" : "guerrta01",
		"teams" : "6.9",
		"teamspitcher" : "FWA,LEL,SPS MIDW,CALL,AZFL"
	},
	{
		"player" : "guerrta01",
		"teams" : "7.0",
		"teamspitcher" : "SAN,ELP,ARA TL,PCL,VEWL"
	},
	{
		"player" : "guerrta01",
		"teams" : "7.9",
		"teamspitcher" : "SAN,JCK,ELP,ZUL TL,SOUL,PCL,VEWL"
	},
	{
		"player" : "guerrta01",
		"teams" : "7.2",
		"teamspitcher" : "JCK,NOR,JUP SOUL,PCL,FLOR"
	},
	{
		"player" : "guerrta01",
		"teams" : "3.0",
		"teamspitcher" : "JCK SOUL"
	},
	{
		"player" : "barraky01",
		"teams" : "6.6",
		"teamspitcher" : "BAT,DAV NYPL,MIDW"
	},
	{
		"player" : "barraky01",
		"teams" : "18.9",
		"teamspitcher" : "CDS GULF"
	},
	{
		"player" : "barraky01",
		"teams" : "7.5",
		"teamspitcher" : "PEO,PLM MIDW,FLOR"
	},
	{
		"player" : "barraky01",
		"teams" : "6.0",
		"teamspitcher" : "SPD,PLM,JCK TL,FLOR,SOUL"
	},
	{
		"player" : "barraky01",
		"teams" : "3.0",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "barraky01",
		"teams" : "4.5",
		"teamspitcher" : "JUM,JUP GULF,FLOR"
	},
	{
		"player" : "steckdr01",
		"teams" : "6.9",
		"teamspitcher" : "JAM NYPL"
	},
	{
		"player" : "steckdr01",
		"teams" : "6.9",
		"teamspitcher" : "GBO SALL"
	},
	{
		"player" : "steckdr01",
		"teams" : "0.0",
		"teamspitcher" : "JUM GULF"
	},
	{
		"player" : "steckdr01",
		"teams" : "9.1",
		"teamspitcher" : "JUP,GBO FLOR,SALL"
	},
	{
		"player" : "steckdr01",
		"teams" : "5.1",
		"teamspitcher" : "JCK,MES,NOR,JUP SOUL,AZFL,PCL,FLOR"
	},
	{
		"player" : "steckdr01",
		"teams" : "4.9",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "tazawju01",
		"teams" : "7.2",
		"teamspitcher" : "PRT,PAW EL,IL"
	},
	{
		"player" : "tazawju01",
		"teams" : "8.6",
		"teamspitcher" : "PRT,SAL,PAW EL,CARL,IL"
	},
	{
		"player" : "tazawju01",
		"teams" : "7.2",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "tazawju01",
		"teams" : "10.8",
		"teamspitcher" : "JCK,JUP,NOR SOUL,FLOR,PCL"
	},
	{
		"player" : "tazawju01",
		"teams" : "13.5",
		"teamspitcher" : "TOL,SLK IL,PCL"
	},
	{
		"player" : "turneja01",
		"teams" : "8.3",
		"teamspitcher" : "LAK,WMI FLOR,MIDW"
	},
	{
		"player" : "turneja01",
		"teams" : "8.0",
		"teamspitcher" : "ERI,TOL EL,IL"
	},
	{
		"player" : "turneja01",
		"teams" : "7.7",
		"teamspitcher" : "TOL,NOR,LAK IL,PCL,FLOR"
	},
	{
		"player" : "turneja01",
		"teams" : "9.4",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "turneja01",
		"teams" : "5.7",
		"teamspitcher" : "JUP FLOR"
	},
	{
		"player" : "turneja01",
		"teams" : "5.0",
		"teamspitcher" : "KNX SOUL"
	},
	{
		"player" : "turneja01",
		"teams" : "10.5",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "turneja01",
		"teams" : "9.9",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "turneja01",
		"teams" : "9.1",
		"teamspitcher" : "TOL,NOR IL,PCL"
	},
	{
		"player" : "wittgni01",
		"teams" : "7.3",
		"teamspitcher" : "JAM,GBO NYPL,SALL"
	},
	{
		"player" : "wittgni01",
		"teams" : "6.0",
		"teamspitcher" : "JUP,GLN,JCK FLOR,AZFL,SOUL"
	},
	{
		"player" : "wittgni01",
		"teams" : "10.0",
		"teamspitcher" : "JCK SOUL"
	},
	{
		"player" : "wittgni01",
		"teams" : "8.2",
		"teamspitcher" : "NOR,JCK PCL,SOUL"
	},
	{
		"player" : "wittgni01",
		"teams" : "4.3",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "wittgni01",
		"teams" : "5.4",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "wittgni01",
		"teams" : "11.2",
		"teamspitcher" : "NOR,JCK PCL,SOUL"
	},
	{
		"player" : "conlead01",
		"teams" : "4.5",
		"teamspitcher" : "JUM GULF"
	},
	{
		"player" : "conlead01",
		"teams" : "8.3",
		"teamspitcher" : "GBO,JUP SALL,FLOR"
	},
	{
		"player" : "conlead01",
		"teams" : "8.1",
		"teamspitcher" : "JCK SOUL"
	},
	{
		"player" : "conlead01",
		"teams" : "10.2",
		"teamspitcher" : "NOR,JUP PCL,FLOR"
	},
	{
		"player" : "conlead01",
		"teams" : "7.1",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "conlead01",
		"teams" : "10.0",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "conlead01",
		"teams" : "10.1",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "guerrja01",
		"teams" : "7.0",
		"teamspitcher" : "DGR GULF"
	},
	{
		"player" : "guerrja01",
		"teams" : "8.7",
		"teamspitcher" : "CBS SALL"
	},
	{
		"player" : "guerrja01",
		"teams" : "11.5",
		"teamspitcher" : "OGD,DGR PION,GULF"
	},
	{
		"player" : "guerrja01",
		"teams" : "10.6",
		"teamspitcher" : "SBR CALL"
	},
	{
		"player" : "guerrja01",
		"teams" : "8.8",
		"teamspitcher" : "SBR,WKI CALL,HIWB"
	},
	{
		"player" : "guerrja01",
		"teams" : "7.0",
		"teamspitcher" : "GRL,CNG,PEA MIDW,SOUL,AZFL"
	},
	{
		"player" : "guerrja01",
		"teams" : "8.3",
		"teamspitcher" : "CNG,PHO,DGR SOUL,AZFL,ARIZ"
	},
	{
		"player" : "guerrja01",
		"teams" : "4.2",
		"teamspitcher" : "CNG SOUL"
	},
	{
		"player" : "guerrja01",
		"teams" : "11.4",
		"teamspitcher" : "ABQ,RCU PCL,CALL"
	},
	{
		"player" : "guerrja01",
		"teams" : "10.0",
		"teamspitcher" : "ABQ,DGR PCL,ARIZ"
	},
	{
		"player" : "guerrja01",
		"teams" : "8.8",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "guerrja01",
		"teams" : "19.6",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "guerrja01",
		"teams" : "7.5",
		"teamspitcher" : "SLK,CUL PCL,MXPW"
	},
	{
		"player" : "guerrja01",
		"teams" : "8.0",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "guerrja01",
		"teams" : "4.9",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "ogradch01",
		"teams" : "10.6",
		"teamspitcher" : "ORM PION"
	},
	{
		"player" : "ogradch01",
		"teams" : "7.7",
		"teamspitcher" : "BUR,ORM MIDW,PION"
	},
	{
		"player" : "ogradch01",
		"teams" : "8.3",
		"teamspitcher" : "SBR,MES CALL,AZFL"
	},
	{
		"player" : "ogradch01",
		"teams" : "7.3",
		"teamspitcher" : "ARK,SLK TL,PCL"
	},
	{
		"player" : "ogradch01",
		"teams" : "9.5",
		"teamspitcher" : "ARK,SLK,ESS TL,PCL,DOWL"
	},
	{
		"player" : "ogradch01",
		"teams" : "7.2",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "kinlety01",
		"teams" : "13.5",
		"teamspitcher" : "JUM,BAT GULF,NYPL"
	},
	{
		"player" : "kinlety01",
		"teams" : "6.0",
		"teamspitcher" : "GBO SALL"
	},
	{
		"player" : "kinlety01",
		"teams" : "8.4",
		"teamspitcher" : "JUP,MES,JUM FLOR,AZFL,GULF"
	},
	{
		"player" : "kinlety01",
		"teams" : "8.8",
		"teamspitcher" : "JCK,NOR,ESS SOUL,PCL,DOWL"
	},
	{
		"player" : "kinlety01",
		"teams" : "6.0",
		"teamspitcher" : "JUP,JCK,LCY FLOR,SOUL,DOWL"
	},
	{
		"player" : "kinlety01",
		"teams" : "7.2",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "meyerbe02",
		"teams" : "7.5",
		"teamspitcher" : "JUP,JUM,GBO FLOR,GULF,SALL"
	},
	{
		"player" : "meyerbe02",
		"teams" : "8.6",
		"teamspitcher" : "GBO SALL"
	},
	{
		"player" : "meyerbe02",
		"teams" : "7.2",
		"teamspitcher" : "JUP,GBO,SRV FLOR,SALL,AZFL"
	},
	{
		"player" : "meyerbe02",
		"teams" : "9.5",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "gravebr01",
		"teams" : "9.8",
		"teamspitcher" : "VMT,ATH NYPL,ARIZ"
	},
	{
		"player" : "gravebr01",
		"teams" : "10.6",
		"teamspitcher" : "BEL MIDW"
	},
	{
		"player" : "gravebr01",
		"teams" : "9.0",
		"teamspitcher" : "STK CALL"
	},
	{
		"player" : "gravebr01",
		"teams" : "10.5",
		"teamspitcher" : "MDL,STK TL,CALL"
	},
	{
		"player" : "gravebr01",
		"teams" : "9.8",
		"teamspitcher" : "JCK,JUP SOUL,FLOR"
	},
	{
		"player" : "cloydty01",
		"teams" : "9.6",
		"teamspitcher" : "WPT,CLR NYPL,GULF"
	},
	{
		"player" : "cloydty01",
		"teams" : "9.4",
		"teamspitcher" : "LWD,CLW SALL,FLOR"
	},
	{
		"player" : "cloydty01",
		"teams" : "10.3",
		"teamspitcher" : "CLW,REA FLOR,EL"
	},
	{
		"player" : "cloydty01",
		"teams" : "8.6",
		"teamspitcher" : "REA,CLW,SCO EL,FLOR,AZFL"
	},
	{
		"player" : "cloydty01",
		"teams" : "6.8",
		"teamspitcher" : "LHV,REA IL,EL"
	},
	{
		"player" : "cloydty01",
		"teams" : "10.0",
		"teamspitcher" : "LHV IL"
	},
	{
		"player" : "cloydty01",
		"teams" : "9.8",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "cloydty01",
		"teams" : "10.7",
		"teamspitcher" : "SAM KBO"
	},
	{
		"player" : "cloydty01",
		"teams" : "5.9",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "cloydty01",
		"teams" : "9.5",
		"teamspitcher" : "TAC,EVR PCL,NORW"
	},
	{
		"player" : "cloydty01",
		"teams" : "10.1",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "despaod01",
		"teams" : "9.5",
		"teamspitcher" : "IDT CNS"
	},
	{
		"player" : "despaod01",
		"teams" : "9.7",
		"teamspitcher" : "IDT CNS"
	},
	{
		"player" : "despaod01",
		"teams" : "8.4",
		"teamspitcher" : "IDT CNS"
	},
	{
		"player" : "despaod01",
		"teams" : "10.1",
		"teamspitcher" : "IDT CNS"
	},
	{
		"player" : "despaod01",
		"teams" : "8.9",
		"teamspitcher" : "IDT CNS"
	},
	{
		"player" : "despaod01",
		"teams" : "9.9",
		"teamspitcher" : "IDT CNS"
	},
	{
		"player" : "despaod01",
		"teams" : "7.0",
		"teamspitcher" : "IDT CNS"
	},
	{
		"player" : "despaod01",
		"teams" : "8.7",
		"teamspitcher" : "IDT CNS"
	},
	{
		"player" : "despaod01",
		"teams" : "6.8",
		"teamspitcher" : "MXL MXPW"
	},
	{
		"player" : "despaod01",
		"teams" : "11.5",
		"teamspitcher" : "ELP,SAN PCL,TL"
	},
	{
		"player" : "despaod01",
		"teams" : "10.6",
		"teamspitcher" : "NFK,ARA IL,VEWL"
	},
	{
		"player" : "despaod01",
		"teams" : "7.5",
		"teamspitcher" : "NOR,JUP PCL,FLOR"
	},
	{
		"player" : "despaod01",
		"teams" : "10.8",
		"teamspitcher" : "NOR,JUP PCL,FLOR"
	},
	{
		"player" : "gonzame01",
		"teams" : "7.9",
		"teamspitcher" : "MT2 DOSL"
	},
	{
		"player" : "gonzame01",
		"teams" : "8.1",
		"teamspitcher" : "MT1,MT2 DOSL"
	},
	{
		"player" : "gonzame01",
		"teams" : "6.6",
		"teamspitcher" : "KPT,MET APPY,GULF"
	},
	{
		"player" : "gonzame01",
		"teams" : "8.5",
		"teamspitcher" : "BKN NYPL"
	},
	{
		"player" : "gonzame01",
		"teams" : "7.0",
		"teamspitcher" : "CBA,SCE,JUP SALL,FLOR"
	},
	{
		"player" : "gonzame01",
		"teams" : "8.4",
		"teamspitcher" : "JCK SOUL"
	},
	{
		"player" : "rucindr01",
		"teams" : "8.8",
		"teamspitcher" : "MHV,INS,LCO NYPL,ARIZ,MIDW"
	},
	{
		"player" : "rucindr01",
		"teams" : "9.0",
		"teamspitcher" : "SBR CALL"
	},
	{
		"player" : "rucindr01",
		"teams" : "8.6",
		"teamspitcher" : "ARK TL"
	},
	{
		"player" : "rucindr01",
		"teams" : "11.3",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "rucindr01",
		"teams" : "10.9",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "rucindr01",
		"teams" : "7.7",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "rucindr01",
		"teams" : "9.0",
		"teamspitcher" : "NOR,JUP PCL,FLOR"
	},
	{
		"player" : "brighje01",
		"teams" : "8.8",
		"teamspitcher" : "OGD PION"
	},
	{
		"player" : "brighje01",
		"teams" : "9.5",
		"teamspitcher" : "RCU,JUP,GRL CALL,FLOR,MIDW"
	},
	{
		"player" : "brighje01",
		"teams" : "8.6",
		"teamspitcher" : "JUP,MES FLOR,AZFL"
	},
	{
		"player" : "brighje01",
		"teams" : "7.5",
		"teamspitcher" : "JUP FLOR"
	},
	{
		"player" : "brighje01",
		"teams" : "7.7",
		"teamspitcher" : "NOR,JCK,JUM PCL,SOUL,GULF"
	},
	{
		"player" : "peterdi01",
		"teams" : "10.0",
		"teamspitcher" : "BAT,JUM NYPL,GULF"
	},
	{
		"player" : "peterdi01",
		"teams" : "8.3",
		"teamspitcher" : "JUP,JCK FLOR,SOUL"
	},
	{
		"player" : "peterdi01",
		"teams" : "5.9",
		"teamspitcher" : "JCK,JUP,JUM SOUL,FLOR,GULF"
	},
	{
		"player" : "peterdi01",
		"teams" : "11.3",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "garcija04",
		"teams" : "8.1",
		"teamspitcher" : "MRL DOSL"
	},
	{
		"player" : "garcija04",
		"teams" : "8.6",
		"teamspitcher" : "JUM GULF"
	},
	{
		"player" : "garcija04",
		"teams" : "7.5",
		"teamspitcher" : "BAT NYPL"
	},
	{
		"player" : "garcija04",
		"teams" : "10.2",
		"teamspitcher" : "GBO SALL"
	},
	{
		"player" : "garcija04",
		"teams" : "9.0",
		"teamspitcher" : "JUP,JCK FLOR,SOUL"
	},
	{
		"player" : "garcija04",
		"teams" : "7.8",
		"teamspitcher" : "JCK,MES,AZU,JUP,JUM SOUL,AZFL,DOWL,FLOR,GULF"
	},
	{
		"player" : "garcija04",
		"teams" : "6.4",
		"teamspitcher" : "JCK,AZU SOUL,DOWL"
	},
	{
		"player" : "garcija04",
		"teams" : "10.5",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "hernael01",
		"teams" : "9.5",
		"teamspitcher" : "ARS DOSL"
	},
	{
		"player" : "hernael01",
		"teams" : "5.7",
		"teamspitcher" : "ARS DOSL"
	},
	{
		"player" : "hernael01",
		"teams" : "6.3",
		"teamspitcher" : "AST,GRE GULF,APPY"
	},
	{
		"player" : "hernael01",
		"teams" : "7.9",
		"teamspitcher" : "DAV,TRC MIDW,NYPL"
	},
	{
		"player" : "hernael01",
		"teams" : "10.0",
		"teamspitcher" : "DAV,LNR MIDW,CALL"
	},
	{
		"player" : "hernael01",
		"teams" : "6.9",
		"teamspitcher" : "BUI,ZUL,AST CARL,VEWL,GULF"
	},
	{
		"player" : "hernael01",
		"teams" : "10.7",
		"teamspitcher" : "JCK,JUP,NOR SOUL,FLOR,PCL"
	},
	{
		"player" : "alcansa01",
		"teams" : "8.9",
		"teamspitcher" : "CRD DOSL"
	},
	{
		"player" : "alcansa01",
		"teams" : "8.3",
		"teamspitcher" : "CDS GULF"
	},
	{
		"player" : "alcansa01",
		"teams" : "7.6",
		"teamspitcher" : "PEO,PLM MIDW,FLOR"
	},
	{
		"player" : "alcansa01",
		"teams" : "8.7",
		"teamspitcher" : "SPD,SPS,GIG TL,AZFL,DOWL"
	},
	{
		"player" : "alcansa01",
		"teams" : "8.3",
		"teamspitcher" : "NOR,JUP PCL,FLOR"
	},
	{
		"player" : "lopezpa01",
		"teams" : "6.9",
		"teamspitcher" : "AGR VESL"
	},
	{
		"player" : "lopezpa01",
		"teams" : "8.9",
		"teamspitcher" : "MRE ARIZ"
	},
	{
		"player" : "lopezpa01",
		"teams" : "7.3",
		"teamspitcher" : "CLI MIDW"
	},
	{
		"player" : "lopezpa01",
		"teams" : "9.6",
		"teamspitcher" : "MOD,JUP CALL,FLOR"
	},
	{
		"player" : "lopezpa01",
		"teams" : "6.6",
		"teamspitcher" : "JCK,NOR SOUL,PCL"
	},
	{
		"player" : "smithca03",
		"teams" : "6.3",
		"teamspitcher" : "STI,TRE NYPL,EL"
	},
	{
		"player" : "smithca03",
		"teams" : "7.6",
		"teamspitcher" : "CHS,TAM SALL,FLOR"
	},
	{
		"player" : "smithca03",
		"teams" : "8.2",
		"teamspitcher" : "TRE,SWB EL,IL"
	},
	{
		"player" : "smithca03",
		"teams" : "9.3",
		"teamspitcher" : "TRE EL"
	},
	{
		"player" : "smithca03",
		"teams" : "6.8",
		"teamspitcher" : "SWB,TRE IL,EL"
	},
	{
		"player" : "richatr01",
		"teams" : "6.3",
		"teamspitcher" : "GBO,BAT SALL,NYPL"
	},
	{
		"player" : "richatr01",
		"teams" : "7.5",
		"teamspitcher" : "JCK,JUP SOUL,FLOR"
	},
	{
		"player" : "richatr01",
		"teams" : "7.1",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "chenwe02",
		"teams" : "13.5",
		"teamspitcher" : "CNI JPCL"
	},
	{
		"player" : "chenwe02",
		"teams" : "7.9",
		"teamspitcher" : "CNI JPCL"
	},
	{
		"player" : "chenwe02",
		"teams" : "6.2",
		"teamspitcher" : "CNI JPCL"
	},
	{
		"player" : "chenwe02",
		"teams" : "7.9",
		"teamspitcher" : "CNI JPCL"
	},
	{
		"player" : "chenwe02",
		"teams" : "7.5",
		"teamspitcher" : "CNI JPCL"
	},
	{
		"player" : "chenwe02",
		"teams" : "6.8",
		"teamspitcher" : "BOW EL"
	},
	{
		"player" : "chenwe02",
		"teams" : "3.0",
		"teamspitcher" : "FDK CARL"
	},
	{
		"player" : "chenwe02",
		"teams" : "11.6",
		"teamspitcher" : "JUP,JUM FLOR,GULF"
	},
	{
		"player" : "chenwe02",
		"teams" : "5.9",
		"teamspitcher" : "JUP FLOR"
	},
	{
		"player" : "straida01",
		"teams" : "10.1",
		"teamspitcher" : "VAN NORW"
	},
	{
		"player" : "straida01",
		"teams" : "8.4",
		"teamspitcher" : "KNC MIDW"
	},
	{
		"player" : "straida01",
		"teams" : "9.0",
		"teamspitcher" : "STK CALL"
	},
	{
		"player" : "straida01",
		"teams" : "6.5",
		"teamspitcher" : "MDL,SAC TL,PCL"
	},
	{
		"player" : "straida01",
		"teams" : "6.8",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "straida01",
		"teams" : "8.6",
		"teamspitcher" : "SAC,IWA PCL"
	},
	{
		"player" : "straida01",
		"teams" : "10.8",
		"teamspitcher" : "FRE PCL"
	},
	{
		"player" : "straida01",
		"teams" : "11.8",
		"teamspitcher" : "JUP,JCK FLOR,SOUL"
	},
	{
		"player" : "urenajo01",
		"teams" : "12.2",
		"teamspitcher" : "MRL DOSL"
	},
	{
		"player" : "urenajo01",
		"teams" : "8.3",
		"teamspitcher" : "MRL DOSL"
	},
	{
		"player" : "urenajo01",
		"teams" : "9.2",
		"teamspitcher" : "JAM NYPL"
	},
	{
		"player" : "urenajo01",
		"teams" : "9.3",
		"teamspitcher" : "GBO SALL"
	},
	{
		"player" : "urenajo01",
		"teams" : "8.9",
		"teamspitcher" : "JUP FLOR"
	},
	{
		"player" : "urenajo01",
		"teams" : "8.6",
		"teamspitcher" : "JCK SOUL"
	},
	{
		"player" : "urenajo01",
		"teams" : "8.3",
		"teamspitcher" : "NOR,AGU,JUP PCL,DOWL,FLOR"
	},
	{
		"player" : "urenajo01",
		"teams" : "7.1",
		"teamspitcher" : "NOR,AGU PCL,DOWL"
	},
	{
		"player" : "bostich01",
		"teams" : "ATH · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "bostich01",
		"teams" : "VMT · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "bostich01",
		"teams" : "BEL · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "bostich01",
		"teams" : "MYR · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "bostich01",
		"teams" : "HRB,POT,SRV · EL,CARL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "bostich01",
		"teams" : "HRB,SYR · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "bostich01",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "bostich01",
		"teams" : "INA,NOR,BRD · IL,PCL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "leebr01",
		"teams" : "HDV · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "leebr01",
		"teams" : "POE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "leebr01",
		"teams" : "MTG · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "leebr01",
		"teams" : "MTG,JCK,SRV · SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "leebr01",
		"teams" : "NOR,JCK,JUP · PCL,SOUL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "telisto01",
		"teams" : "RNG · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "telisto01",
		"teams" : "RGS,SPO · ARIZ,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "telisto01",
		"teams" : "RGS · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "telisto01",
		"teams" : "HCK · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "telisto01",
		"teams" : "MYR · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "telisto01",
		"teams" : "FRI,MGL · TL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "telisto01",
		"teams" : "FRI,RRK,MGL · TL,PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "telisto01",
		"teams" : "RRK,NOR,MGL · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "telisto01",
		"teams" : "NOR,ORN · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "telisto01",
		"teams" : "NOR,ORN · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "telisto01",
		"teams" : "NOR,ORN · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "coopega03",
		"teams" : "APP,HEL · MIDW,PION",
		"teamspitcher" : ""
	},
	{
		"player" : "coopega03",
		"teams" : "BRE,APP,BRR · FLOR,MIDW,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "coopega03",
		"teams" : "BRE,BIL · FLOR,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "coopega03",
		"teams" : "BIL,CSP · SOUL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "coopega03",
		"teams" : "CSP,TRE,SWB · PCL,EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "coopega03",
		"teams" : "NOR,JUP · PCL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "wallach01",
		"teams" : "BAT · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "wallach01",
		"teams" : "GBO,JUP,SRV · SALL,FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "wallach01",
		"teams" : "DYT,PEA · FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "wallach01",
		"teams" : "PEN,PEA · SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "wallach01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "wallach01",
		"teams" : "NOR,JUM · PCL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "gallois01",
		"teams" : "JUM · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "gallois01",
		"teams" : "GBO · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "gallois01",
		"teams" : "JUP · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "gallois01",
		"teams" : "GBO · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "gallois01",
		"teams" : "JUP · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "gallois01",
		"teams" : "JUP,JCK · FLOR,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "gallois01",
		"teams" : "JCK · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "gallois01",
		"teams" : "NOR,JCK · PCL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "gallois01",
		"teams" : "NOR · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "gallois01",
		"teams" : "NOR,JCK,JUM,JUP · PCL,SOUL,GULF,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "gallois01",
		"teams" : "NOR · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "obriepe01",
		"teams" : "STI,YNK · NYPL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "obriepe01",
		"teams" : "TAM,CHS,SCO · FLOR,SALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "obriepe01",
		"teams" : "TRE,TAM,SRV,MOB · EL,FLOR,AZFL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "obriepe01",
		"teams" : "REN,HRM · PCL,MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "obriepe01",
		"teams" : "REN · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "obriepe01",
		"teams" : "TUL,OMA,OBR,RRK,LOU,FRI · TL,MXPW,PCL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "obriepe01",
		"teams" : "JCK,NOR,TUL · SOUL,PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "deanau01",
		"teams" : "JUM · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "deanau01",
		"teams" : "BAT,GBO · NYPL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "deanau01",
		"teams" : "GBO · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "deanau01",
		"teams" : "JUP,MES · FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "deanau01",
		"teams" : "JCK · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "deanau01",
		"teams" : "JCK,JUM · SOUL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "deanau01",
		"teams" : "NOR,JCK · PCL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "shuckja01",
		"teams" : "TRC · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "shuckja01",
		"teams" : "LNR · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "shuckja01",
		"teams" : "CPC,RRK,PEA · TL,PCL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "shuckja01",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "shuckja01",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "shuckja01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "shuckja01",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "shuckja01",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "shuckja01",
		"teams" : "ROC · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "shuckja01",
		"teams" : "NOR · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "ortegra01",
		"teams" : "RCK,LGU · DOSL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "ortegra01",
		"teams" : "RCK,LGU · DOSL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "ortegra01",
		"teams" : "CAS,LGU · PION,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "ortegra01",
		"teams" : "AVL · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "ortegra01",
		"teams" : "MOD,LGU · CALL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "ortegra01",
		"teams" : "TUL,LGU · TL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "ortegra01",
		"teams" : "SPD,LGU,MEM,CDS · TL,VEWL,PCL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "ortegra01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "ortegra01",
		"teams" : "SLK,ORN · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "ortegra01",
		"teams" : "ELP,ORN · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "ortegra01",
		"teams" : "NOR,ORN · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sierrma01",
		"teams" : "CRD · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "sierrma01",
		"teams" : "CDS · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "sierrma01",
		"teams" : "JOH,PEO · APPY,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "sierrma01",
		"teams" : "PEO,AZU · MIDW,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sierrma01",
		"teams" : "SPD,PLM,AZU · TL,FLOR,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sierrma01",
		"teams" : "NOR,AZU · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "riverya01",
		"teams" : "BRR · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "riverya01",
		"teams" : "HEL,APP · PION,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "riverya01",
		"teams" : "APP,SNT · MIDW,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "riverya01",
		"teams" : "BRE,SNT · FLOR,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "riverya01",
		"teams" : "BRE,HVL,SNT · FLOR,SOUL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "riverya01",
		"teams" : "CSP,BIL,SNT,SPS · PCL,SOUL,PRWL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "riverya01",
		"teams" : "CSP,MGZ · PCL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "riverya01",
		"teams" : "CSP,MGZ,BRR · PCL,PRWL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "holadbr01",
		"teams" : "LAK · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "holadbr01",
		"teams" : "ERI · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "holadbr01",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "holadbr01",
		"teams" : "TOL,LCY · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "holadbr01",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "holadbr01",
		"teams" : "RRK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "holadbr01",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "maybica01",
		"teams" : "WMI · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "maybica01",
		"teams" : "LAK,PES,ERI,LAT · FLOR,AZFL,EL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "maybica01",
		"teams" : "CAR · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "maybica01",
		"teams" : "NOR · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "maybica01",
		"teams" : "NOR,JUM · PCL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "maybica01",
		"teams" : "TUC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "maybica01",
		"teams" : "TUC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "maybica01",
		"teams" : "ELP,AZU · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "maybica01",
		"teams" : "TOL,LAK · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "maybica01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "rojasmi02",
		"teams" : "CAG · VESL",
		"teamspitcher" : ""
	},
	{
		"player" : "rojasmi02",
		"teams" : "VN2,RDS · VESL,DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "rojasmi02",
		"teams" : "BIL · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "rojasmi02",
		"teams" : "DAY,LGU · MIDW,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "rojasmi02",
		"teams" : "LBG,LGU,CAR,RDL · CARL,VEWL,SOUL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "rojasmi02",
		"teams" : "CAR,LGU,RDL · SOUL,VEWL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "rojasmi02",
		"teams" : "PEN,LOU,LGU · SOUL,IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "rojasmi02",
		"teams" : "CNG,LGU · SOUL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "rojasmi02",
		"teams" : "ABQ,LGU · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "rojasmi02",
		"teams" : "NOR,LGU · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "rojasmi02",
		"teams" : "LGU · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "rojasmi02",
		"teams" : "JUP,JCK · FLOR,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "anderbr06",
		"teams" : "GBO,BAT · SALL,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "anderbr06",
		"teams" : "JUP,MES · FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "anderbr06",
		"teams" : "JCK,JUP,MES · SOUL,FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "anderbr06",
		"teams" : "JCK,NOR · SOUL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "brinsle01",
		"teams" : "RGS · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "brinsle01",
		"teams" : "HCK · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "brinsle01",
		"teams" : "MYR,HCK · CARL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "brinsle01",
		"teams" : "HDS,FRI,MGZ,SPS,RRK · CALL,TL,PRWL,AZFL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "brinsle01",
		"teams" : "FRI,CSP,RGS · TL,PCL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "brinsle01",
		"teams" : "CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "brinsle01",
		"teams" : "NOR,JCK · PCL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "dietrde01",
		"teams" : "HDV · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "dietrde01",
		"teams" : "BWG · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "dietrde01",
		"teams" : "POE,MTG · FLOR,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "dietrde01",
		"teams" : "JCK · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "dietrde01",
		"teams" : "NOR,AGU,JUP · PCL,DOWL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "dietrde01",
		"teams" : "NOR · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "dietrde01",
		"teams" : "JCK · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "pradoma01",
		"teams" : "BVS · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "pradoma01",
		"teams" : "ROM · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "pradoma01",
		"teams" : "MYR,MSS · CARL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "pradoma01",
		"teams" : "RMD,MSS,ARA · IL,SOUL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "pradoma01",
		"teams" : "RMD,ARA · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "pradoma01",
		"teams" : "ARA,MSS · VEWL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "pradoma01",
		"teams" : "ARA · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "pradoma01",
		"teams" : "GWI · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "pradoma01",
		"teams" : "GWI,MSS · IL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "pradoma01",
		"teams" : "JUP · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "pradoma01",
		"teams" : "JUP,JCK · FLOR,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "pradoma01",
		"teams" : "JUP · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "riddljt01",
		"teams" : "BAT · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "riddljt01",
		"teams" : "GBO · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "riddljt01",
		"teams" : "JUP,JCK,MES,NOR · FLOR,SOUL,AZFL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "riddljt01",
		"teams" : "JCK,NOR · SOUL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "riddljt01",
		"teams" : "NOR · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "riddljt01",
		"teams" : "NOR,JCK,JUP · PCL,SOUL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "castrst01",
		"teams" : "CUB · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "castrst01",
		"teams" : "CBZ · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "castrst01",
		"teams" : "DYT,KNX,MES,ESC · FLOR,SOUL,AZFL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "castrst01",
		"teams" : "KNX,ESC · SOUL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "castrst01",
		"teams" : "SWB,TRE · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "bourju01",
		"teams" : "BOI,CBZ · NORW,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "bourju01",
		"teams" : "PEO · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "bourju01",
		"teams" : "DYT · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "bourju01",
		"teams" : "KNX,CRO · SOUL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "bourju01",
		"teams" : "KNX · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "bourju01",
		"teams" : "NOR · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "bourju01",
		"teams" : "NOR · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "bourju01",
		"teams" : "NOR · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "bourju01",
		"teams" : "JCK,JUP · SOUL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "realmjt01",
		"teams" : "JUM · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "realmjt01",
		"teams" : "GBO · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "realmjt01",
		"teams" : "JUP,PHO · FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "realmjt01",
		"teams" : "JCK · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "realmjt01",
		"teams" : "JCK · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "realmjt01",
		"teams" : "NOR · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "realmjt01",
		"teams" : "JUP · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "florody01",
		"teams" : "7.8",
		"teamspitcher" : "HDV NYPL"
	},
	{
		"player" : "florody01",
		"teams" : "8.1",
		"teamspitcher" : "BWG,POE MIDW,FLOR"
	},
	{
		"player" : "florody01",
		"teams" : "10.5",
		"teamspitcher" : "MTG SOUL"
	},
	{
		"player" : "florody01",
		"teams" : "10.9",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "florody01",
		"teams" : "9.5",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "florody01",
		"teams" : "10.8",
		"teamspitcher" : "IWA,OKC PCL"
	},
	{
		"player" : "florody01",
		"teams" : "11.3",
		"teamspitcher" : "LOU,OKC IL,PCL"
	},
	{
		"player" : "cingrto01",
		"teams" : "6.1",
		"teamspitcher" : "BIL PION"
	},
	{
		"player" : "cingrto01",
		"teams" : "6.0",
		"teamspitcher" : "PEN,BAK SOUL,CALL"
	},
	{
		"player" : "cingrto01",
		"teams" : "4.0",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "cingrto01",
		"teams" : "7.3",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "cingrto01",
		"teams" : "0.0",
		"teamspitcher" : "LOU,DAY IL,MIDW"
	},
	{
		"player" : "vendipa01",
		"teams" : "3.6",
		"teamspitcher" : "STI NYPL"
	},
	{
		"player" : "vendipa01",
		"teams" : "8.5",
		"teamspitcher" : "TAM,CHS,ZUL FLOR,SALL,VEWL"
	},
	{
		"player" : "vendipa01",
		"teams" : "6.4",
		"teamspitcher" : "TAM,TRE FLOR,EL"
	},
	{
		"player" : "vendipa01",
		"teams" : "7.5",
		"teamspitcher" : "TRE,MXL EL,MXPW"
	},
	{
		"player" : "vendipa01",
		"teams" : "7.6",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "vendipa01",
		"teams" : "8.8",
		"teamspitcher" : "TRE,LMO,YK2,YNK,TAM EL,MXPW,GULF,FLOR"
	},
	{
		"player" : "vendipa01",
		"teams" : "7.5",
		"teamspitcher" : "SWB,TRE IL,EL"
	},
	{
		"player" : "vendipa01",
		"teams" : "6.0",
		"teamspitcher" : "NVL,STK PCL,CALL"
	},
	{
		"player" : "vendipa01",
		"teams" : "9.6",
		"teamspitcher" : "BFL,TAC IL,PCL"
	},
	{
		"player" : "vendipa01",
		"teams" : "7.0",
		"teamspitcher" : "LHV IL"
	},
	{
		"player" : "vendipa01",
		"teams" : "5.3",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "janseke01",
		"teams" : "10.5",
		"teamspitcher" : "SBR,PEA CALL,AZFL"
	},
	{
		"player" : "janseke01",
		"teams" : "5.8",
		"teamspitcher" : "CNG,SBR SOUL,CALL"
	},
	{
		"player" : "janseke01",
		"teams" : "2.3",
		"teamspitcher" : "CNG,RCU SOUL,CALL"
	},
	{
		"player" : "janseke01",
		"teams" : "10.1",
		"teamspitcher" : "RCU CALL"
	},
	{
		"player" : "rosscza01",
		"teams" : "9.1",
		"teamspitcher" : "PRI APPY"
	},
	{
		"player" : "rosscza01",
		"teams" : "6.5",
		"teamspitcher" : "HDV,DVS NYPL,GULF"
	},
	{
		"player" : "rosscza01",
		"teams" : "7.8",
		"teamspitcher" : "DYT FLOR"
	},
	{
		"player" : "rosscza01",
		"teams" : "4.9",
		"teamspitcher" : "KNX,PEO,CBZ SOUL,MIDW,ARIZ"
	},
	{
		"player" : "rosscza01",
		"teams" : "6.4",
		"teamspitcher" : "KNX,IWA SOUL,PCL"
	},
	{
		"player" : "rosscza01",
		"teams" : "5.4",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "rosscza01",
		"teams" : "5.7",
		"teamspitcher" : "IWA,KNX,CBZ PCL,SOUL,ARIZ"
	},
	{
		"player" : "rosscza01",
		"teams" : "6.5",
		"teamspitcher" : "IWA,ABQ PCL"
	},
	{
		"player" : "rosscza01",
		"teams" : "3.6",
		"teamspitcher" : "ABQ,RCU,OKC CALL,PCL"
	},
	{
		"player" : "goedder01",
		"teams" : "9.0",
		"teamspitcher" : "MET GULF"
	},
	{
		"player" : "goedder01",
		"teams" : "7.3",
		"teamspitcher" : "SAV,MET SALL,GULF"
	},
	{
		"player" : "goedder01",
		"teams" : "9.1",
		"teamspitcher" : "SCE FLOR"
	},
	{
		"player" : "goedder01",
		"teams" : "9.1",
		"teamspitcher" : "BNG EL"
	},
	{
		"player" : "goedder01",
		"teams" : "10.9",
		"teamspitcher" : "LVG PCL"
	},
	{
		"player" : "goedder01",
		"teams" : "11.0",
		"teamspitcher" : "BNG,SCE EL,FLOR"
	},
	{
		"player" : "goedder01",
		"teams" : "8.8",
		"teamspitcher" : "LVG PCL"
	},
	{
		"player" : "goedder01",
		"teams" : "10.6",
		"teamspitcher" : "LVG PCL"
	},
	{
		"player" : "goedder01",
		"teams" : "6.0",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "garciyi01",
		"teams" : "6.2",
		"teamspitcher" : "DDR DOSL"
	},
	{
		"player" : "garciyi01",
		"teams" : "13.8",
		"teamspitcher" : "DGR ARIZ"
	},
	{
		"player" : "garciyi01",
		"teams" : "7.9",
		"teamspitcher" : "OGD PION"
	},
	{
		"player" : "garciyi01",
		"teams" : "8.4",
		"teamspitcher" : "GRL,RCU MIDW,CALL"
	},
	{
		"player" : "garciyi01",
		"teams" : "5.5",
		"teamspitcher" : "CNG,GLN SOUL,AZFL"
	},
	{
		"player" : "garciyi01",
		"teams" : "8.6",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "garciyi01",
		"teams" : "7.6",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "garciyi01",
		"teams" : "8.6",
		"teamspitcher" : "TUL,RCU,DGR TL,CALL,ARIZ"
	},
	{
		"player" : "garciyi01",
		"teams" : "9.2",
		"teamspitcher" : "OKC,DGR PCL,ARIZ"
	},
	{
		"player" : "madsory01",
		"teams" : "9.5",
		"teamspitcher" : "MTV APPY"
	},
	{
		"player" : "madsory01",
		"teams" : "8.2",
		"teamspitcher" : "BAT NYPL"
	},
	{
		"player" : "madsory01",
		"teams" : "7.5",
		"teamspitcher" : "KAN SALL"
	},
	{
		"player" : "madsory01",
		"teams" : "10.5",
		"teamspitcher" : "CLW FLOR"
	},
	{
		"player" : "madsory01",
		"teams" : "7.9",
		"teamspitcher" : "REA EL"
	},
	{
		"player" : "madsory01",
		"teams" : "9.2",
		"teamspitcher" : "SWB,CLW IL,FLOR"
	},
	{
		"player" : "madsory01",
		"teams" : "13.5",
		"teamspitcher" : "REA EL"
	},
	{
		"player" : "madsory01",
		"teams" : "9.0",
		"teamspitcher" : "REA EL"
	},
	{
		"player" : "madsory01",
		"teams" : "6.4",
		"teamspitcher" : "CLW,REA,LHV FLOR,EL,IL"
	},
	{
		"player" : "madsory01",
		"teams" : "0.0",
		"teamspitcher" : "CLW FLOR"
	},
	{
		"player" : "madsory01",
		"teams" : "0.0",
		"teamspitcher" : "SBR CALL"
	},
	{
		"player" : "pareded02",
		"teams" : "4.6",
		"teamspitcher" : "MRN DOSL"
	},
	{
		"player" : "pareded02",
		"teams" : "7.4",
		"teamspitcher" : "EVR,TAC NORW,PCL"
	},
	{
		"player" : "pareded02",
		"teams" : "9.4",
		"teamspitcher" : "APP,WTN MIDW,SOUL"
	},
	{
		"player" : "pareded02",
		"teams" : "9.3",
		"teamspitcher" : "HDS,AGU,WTN CALL,DOWL,SOUL"
	},
	{
		"player" : "pareded02",
		"teams" : "8.8",
		"teamspitcher" : "WTN,TAC,AGU SOUL,PCL,DOWL"
	},
	{
		"player" : "pareded02",
		"teams" : "10.1",
		"teamspitcher" : "WTN,TAC,AGU SOUL,PCL,DOWL"
	},
	{
		"player" : "pareded02",
		"teams" : "5.1",
		"teamspitcher" : "AGU DOWL"
	},
	{
		"player" : "pareded02",
		"teams" : "11.1",
		"teamspitcher" : "AKR,AGU EL,DOWL"
	},
	{
		"player" : "pareded02",
		"teams" : "11.6",
		"teamspitcher" : "AGU DOWL"
	},
	{
		"player" : "pareded02",
		"teams" : "1.7",
		"teamspitcher" : "ESC DOWL"
	},
	{
		"player" : "pareded02",
		"teams" : "6.2",
		"teamspitcher" : "ARK,ESC TL,DOWL"
	},
	{
		"player" : "pareded02",
		"teams" : "6.9",
		"teamspitcher" : "TUL,OKC,ESC TL,PCL,DOWL"
	},
	{
		"player" : "pareded02",
		"teams" : "8.1",
		"teamspitcher" : "OKC,ESC PCL,DOWL"
	},
	{
		"player" : "nealza01",
		"teams" : "7.8",
		"teamspitcher" : "JAM,JUM NYPL,GULF"
	},
	{
		"player" : "nealza01",
		"teams" : "9.4",
		"teamspitcher" : "GBO SALL"
	},
	{
		"player" : "nealza01",
		"teams" : "9.4",
		"teamspitcher" : "JCK,JUP SOUL,FLOR"
	},
	{
		"player" : "nealza01",
		"teams" : "9.3",
		"teamspitcher" : "MDL TL"
	},
	{
		"player" : "nealza01",
		"teams" : "9.2",
		"teamspitcher" : "SAC,MDL,STK PCL,TL,CALL"
	},
	{
		"player" : "nealza01",
		"teams" : "10.4",
		"teamspitcher" : "NVL,MDL PCL,TL"
	},
	{
		"player" : "nealza01",
		"teams" : "9.0",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "nealza01",
		"teams" : "10.5",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "nealza01",
		"teams" : "10.5",
		"teamspitcher" : "OKC,LOU PCL,IL"
	},
	{
		"player" : "fieldjo03",
		"teams" : "7.9",
		"teamspitcher" : "WTN,PEA SOUL,AZFL"
	},
	{
		"player" : "fieldjo03",
		"teams" : "6.7",
		"teamspitcher" : "WTN,PEA SOUL,AZFL"
	},
	{
		"player" : "fieldjo03",
		"teams" : "6.1",
		"teamspitcher" : "WTN,PRT,TAC SOUL,EL,PCL"
	},
	{
		"player" : "fieldjo03",
		"teams" : "6.2",
		"teamspitcher" : "PRT,PAW,AGU EL,IL,DOWL"
	},
	{
		"player" : "fieldjo03",
		"teams" : "8.1",
		"teamspitcher" : "CPC,DAV TL,MIDW"
	},
	{
		"player" : "fieldjo03",
		"teams" : "0.0",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "fieldjo03",
		"teams" : "7.0",
		"teamspitcher" : "FRE,CPC PCL,TL"
	},
	{
		"player" : "fieldjo03",
		"teams" : "6.8",
		"teamspitcher" : "FRE,OKC PCL"
	},
	{
		"player" : "fieldjo03",
		"teams" : "3.0",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "fieldjo03",
		"teams" : "12.9",
		"teamspitcher" : "OKC,DGR PCL,ARIZ"
	},
	{
		"player" : "axforjo01",
		"teams" : "7.1",
		"teamspitcher" : "CHS,STI,TAM,SWB SALL,NYPL,FLOR,IL"
	},
	{
		"player" : "axforjo01",
		"teams" : "8.1",
		"teamspitcher" : "BRE FLOR"
	},
	{
		"player" : "axforjo01",
		"teams" : "5.8",
		"teamspitcher" : "NVL,BRE,HVL PCL,FLOR,SOUL"
	},
	{
		"player" : "axforjo01",
		"teams" : "9.5",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "axforjo01",
		"teams" : "5.4",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "corcida01",
		"teams" : "9.8",
		"teamspitcher" : "RDS DOSL"
	},
	{
		"player" : "corcida01",
		"teams" : "8.9",
		"teamspitcher" : "BIL,RDL PION,GULF"
	},
	{
		"player" : "corcida01",
		"teams" : "8.7",
		"teamspitcher" : "BIL,DAY PION,MIDW"
	},
	{
		"player" : "corcida01",
		"teams" : "8.3",
		"teamspitcher" : "DAY MIDW"
	},
	{
		"player" : "corcida01",
		"teams" : "7.4",
		"teamspitcher" : "PEN,ESC SOUL,DOWL"
	},
	{
		"player" : "corcida01",
		"teams" : "9.4",
		"teamspitcher" : "LOU,ESC IL,DOWL"
	},
	{
		"player" : "corcida01",
		"teams" : "7.6",
		"teamspitcher" : "PEN,LOU SOUL,IL"
	},
	{
		"player" : "corcida01",
		"teams" : "5.4",
		"teamspitcher" : "TUL,PEN TL,SOUL"
	},
	{
		"player" : "corcida01",
		"teams" : "6.9",
		"teamspitcher" : "TUL,ESC,RCU TL,DOWL,CALL"
	},
	{
		"player" : "corcida01",
		"teams" : "7.4",
		"teamspitcher" : "RCU,ESC,KNX,TUL CALL,DOWL,SOUL,TL"
	},
	{
		"player" : "corcida01",
		"teams" : "7.4",
		"teamspitcher" : "OKC,TUL,LCY PCL,TL,DOWL"
	},
	{
		"player" : "chargjt01",
		"teams" : "5.6",
		"teamspitcher" : "ELZ APPY"
	},
	{
		"player" : "chargjt01",
		"teams" : "7.1",
		"teamspitcher" : "CNG,FTM SOUL,FLOR"
	},
	{
		"player" : "chargjt01",
		"teams" : "6.8",
		"teamspitcher" : "ROC,CNG IL,SOUL"
	},
	{
		"player" : "chargjt01",
		"teams" : "3.4",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "chargjt01",
		"teams" : "7.8",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "liberad01",
		"teams" : "10.5",
		"teamspitcher" : "HDV NYPL"
	},
	{
		"player" : "liberad01",
		"teams" : "8.8",
		"teamspitcher" : "POE,SPS FLOR,AZFL"
	},
	{
		"player" : "liberad01",
		"teams" : "8.8",
		"teamspitcher" : "MTG,DHM SOUL,IL"
	},
	{
		"player" : "liberad01",
		"teams" : "7.8",
		"teamspitcher" : "DHM,ESS,MTG IL,DOWL,SOUL"
	},
	{
		"player" : "liberad01",
		"teams" : "6.0",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "liberad01",
		"teams" : "7.5",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "liberad01",
		"teams" : "4.5",
		"teamspitcher" : "OKC,RCU PCL,CALL"
	},
	{
		"player" : "liberad01",
		"teams" : "5.9",
		"teamspitcher" : "OKC,DGR,RCU PCL,ARIZ,CALL"
	},
	{
		"player" : "liberad01",
		"teams" : "15.1",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "uriasju01",
		"teams" : "7.3",
		"teamspitcher" : "GRL MIDW"
	},
	{
		"player" : "uriasju01",
		"teams" : "6.2",
		"teamspitcher" : "RCU CALL"
	},
	{
		"player" : "uriasju01",
		"teams" : "8.2",
		"teamspitcher" : "TUL,RCU,OKC,DGR TL,CALL,PCL,ARIZ"
	},
	{
		"player" : "uriasju01",
		"teams" : "6.2",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "uriasju01",
		"teams" : "5.7",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "uriasju01",
		"teams" : "7.7",
		"teamspitcher" : "RCU,DGR,OKC CALL,ARIZ,PCL"
	},
	{
		"player" : "hudsoda01",
		"teams" : "6.7",
		"teamspitcher" : "GRF PION"
	},
	{
		"player" : "hudsoda01",
		"teams" : "6.4",
		"teamspitcher" : "BIR,WSM,CHR,KAN SOUL,CARL,IL,SALL"
	},
	{
		"player" : "hudsoda01",
		"teams" : "7.8",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "hudsoda01",
		"teams" : "9.0",
		"teamspitcher" : "REN PCL"
	},
	{
		"player" : "hudsoda01",
		"teams" : "9.0",
		"teamspitcher" : "MOB SOUL"
	},
	{
		"player" : "hudsoda01",
		"teams" : "7.5",
		"teamspitcher" : "DKS,REN ARIZ,PCL"
	},
	{
		"player" : "hudsoda01",
		"teams" : "0.0",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "fontwi01",
		"teams" : "8.1",
		"teamspitcher" : "RGS ARIZ"
	},
	{
		"player" : "fontwi01",
		"teams" : "2.1",
		"teamspitcher" : "RGS ARIZ"
	},
	{
		"player" : "fontwi01",
		"teams" : "7.7",
		"teamspitcher" : "HCK SALL"
	},
	{
		"player" : "fontwi01",
		"teams" : "8.4",
		"teamspitcher" : "BAK,HCK CALL,SALL"
	},
	{
		"player" : "fontwi01",
		"teams" : "6.1",
		"teamspitcher" : "MYR,FRI CARL,TL"
	},
	{
		"player" : "fontwi01",
		"teams" : "4.4",
		"teamspitcher" : "FRI,RRK,CCS TL,PCL,VEWL"
	},
	{
		"player" : "fontwi01",
		"teams" : "7.3",
		"teamspitcher" : "FRI TL"
	},
	{
		"player" : "fontwi01",
		"teams" : "8.1",
		"teamspitcher" : "CCS VEWL"
	},
	{
		"player" : "fontwi01",
		"teams" : "9.3",
		"teamspitcher" : "CCS,MAN,BFL VEWL,EL,IL"
	},
	{
		"player" : "fontwi01",
		"teams" : "7.6",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "stewabr01",
		"teams" : "9.4",
		"teamspitcher" : "OGD PION"
	},
	{
		"player" : "stewabr01",
		"teams" : "10.1",
		"teamspitcher" : "RCU,GRL CALL,MIDW"
	},
	{
		"player" : "stewabr01",
		"teams" : "6.5",
		"teamspitcher" : "TUL,OKC,RCU TL,PCL,CALL"
	},
	{
		"player" : "stewabr01",
		"teams" : "11.2",
		"teamspitcher" : "OKC,RCU PCL,CALL"
	},
	{
		"player" : "stewabr01",
		"teams" : "7.8",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "santade01",
		"teams" : "5.0",
		"teamspitcher" : "DDR DOSL"
	},
	{
		"player" : "santade01",
		"teams" : "9.1",
		"teamspitcher" : "DGR,OGD ARIZ,PION"
	},
	{
		"player" : "santade01",
		"teams" : "6.8",
		"teamspitcher" : "GRL MIDW"
	},
	{
		"player" : "santade01",
		"teams" : "9.1",
		"teamspitcher" : "RCU,TUL CALL,TL"
	},
	{
		"player" : "santade01",
		"teams" : "6.5",
		"teamspitcher" : "TUL,OKC TL,PCL"
	},
	{
		"player" : "baezpe01",
		"teams" : "10.1",
		"teamspitcher" : "RCU,CNG,GLN CALL,SOUL,AZFL"
	},
	{
		"player" : "baezpe01",
		"teams" : "9.0",
		"teamspitcher" : "ABQ,CNG PCL,SOUL"
	},
	{
		"player" : "baezpe01",
		"teams" : "6.0",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "baezpe01",
		"teams" : "3.0",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "baezpe01",
		"teams" : "5.4",
		"teamspitcher" : "OKC,TUL PCL,TL"
	},
	{
		"player" : "ferguca01",
		"teams" : "10.4",
		"teamspitcher" : "DGR ARIZ"
	},
	{
		"player" : "ferguca01",
		"teams" : "7.7",
		"teamspitcher" : "GRL,OGD,DGR MIDW,PION,ARIZ"
	},
	{
		"player" : "ferguca01",
		"teams" : "8.3",
		"teamspitcher" : "RCU CALL"
	},
	{
		"player" : "ferguca01",
		"teams" : "7.1",
		"teamspitcher" : "TUL,OKC TL,PCL"
	},
	{
		"player" : "alexasc02",
		"teams" : "11.9",
		"teamspitcher" : "IDF PION"
	},
	{
		"player" : "alexasc02",
		"teams" : "8.6",
		"teamspitcher" : "KNC,ROY MIDW,ARIZ"
	},
	{
		"player" : "alexasc02",
		"teams" : "7.6",
		"teamspitcher" : "NTA,WMT,LEX TL,CARL,SALL"
	},
	{
		"player" : "alexasc02",
		"teams" : "8.2",
		"teamspitcher" : "NTA,OMA,GIG TL,PCL,DOWL"
	},
	{
		"player" : "alexasc02",
		"teams" : "6.8",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "alexasc02",
		"teams" : "9.6",
		"teamspitcher" : "OMA,ROY PCL,ARIZ"
	},
	{
		"player" : "alexasc02",
		"teams" : "10.6",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "alexasc02",
		"teams" : "9.0",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "ryuhy01",
		"teams" : "7.1",
		"teamspitcher" : "HWA KBO"
	},
	{
		"player" : "ryuhy01",
		"teams" : "8.3",
		"teamspitcher" : "HWA KBO"
	},
	{
		"player" : "ryuhy01",
		"teams" : "7.8",
		"teamspitcher" : "HWA KBO"
	},
	{
		"player" : "ryuhy01",
		"teams" : "8.6",
		"teamspitcher" : "HWA KBO"
	},
	{
		"player" : "ryuhy01",
		"teams" : "7.0",
		"teamspitcher" : "HWA KBO"
	},
	{
		"player" : "ryuhy01",
		"teams" : "7.2",
		"teamspitcher" : "HWA KBO"
	},
	{
		"player" : "ryuhy01",
		"teams" : "7.5",
		"teamspitcher" : "HWA KBO"
	},
	{
		"player" : "ryuhy01",
		"teams" : "10.4",
		"teamspitcher" : "RCU,OKC CALL,PCL"
	},
	{
		"player" : "ryuhy01",
		"teams" : "7.0",
		"teamspitcher" : "OKC,RCU PCL,CALL"
	},
	{
		"player" : "stripro01",
		"teams" : "6.4",
		"teamspitcher" : "OGD PION"
	},
	{
		"player" : "stripro01",
		"teams" : "8.1",
		"teamspitcher" : "CNG,RCU SOUL,CALL"
	},
	{
		"player" : "stripro01",
		"teams" : "7.8",
		"teamspitcher" : "TUL,GRL TL,MIDW"
	},
	{
		"player" : "stripro01",
		"teams" : "10.1",
		"teamspitcher" : "OKC,DGR PCL,ARIZ"
	},
	{
		"player" : "stripro01",
		"teams" : "8.1",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "maedake01",
		"teams" : "8.5",
		"teamspitcher" : "HIR JPCL"
	},
	{
		"player" : "maedake01",
		"teams" : "9.0",
		"teamspitcher" : "HIR JPCL"
	},
	{
		"player" : "maedake01",
		"teams" : "6.9",
		"teamspitcher" : "HIR JPCL"
	},
	{
		"player" : "maedake01",
		"teams" : "7.4",
		"teamspitcher" : "HIR JPCL"
	},
	{
		"player" : "maedake01",
		"teams" : "7.0",
		"teamspitcher" : "HIR JPCL"
	},
	{
		"player" : "maedake01",
		"teams" : "6.6",
		"teamspitcher" : "HIR JPCL"
	},
	{
		"player" : "maedake01",
		"teams" : "7.9",
		"teamspitcher" : "HIR JPCL"
	},
	{
		"player" : "maedake01",
		"teams" : "7.3",
		"teamspitcher" : "HIR JPCL"
	},
	{
		"player" : "maedake01",
		"teams" : "13.5",
		"teamspitcher" : "RCU CALL"
	},
	{
		"player" : "hillri01",
		"teams" : "9.6",
		"teamspitcher" : "BOI NORW"
	},
	{
		"player" : "hillri01",
		"teams" : "6.5",
		"teamspitcher" : "BOI,LNS NORW,MIDW"
	},
	{
		"player" : "hillri01",
		"teams" : "7.2",
		"teamspitcher" : "DYT FLOR"
	},
	{
		"player" : "hillri01",
		"teams" : "6.9",
		"teamspitcher" : "IWA,WTN,PEO PCL,SOUL,MIDW"
	},
	{
		"player" : "hillri01",
		"teams" : "5.6",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "hillri01",
		"teams" : "8.1",
		"teamspitcher" : "IWA,ARA,DYT,CBZ PCL,VEWL,FLOR,ARIZ"
	},
	{
		"player" : "hillri01",
		"teams" : "3.3",
		"teamspitcher" : "NFK,FDK IL,CARL"
	},
	{
		"player" : "hillri01",
		"teams" : "7.3",
		"teamspitcher" : "PAW,MEM IL,PCL"
	},
	{
		"player" : "hillri01",
		"teams" : "4.5",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "hillri01",
		"teams" : "3.9",
		"teamspitcher" : "PAW,SAL,GRV,RES,PRT IL,CARL,SALL,GULF,EL"
	},
	{
		"player" : "hillri01",
		"teams" : "6.5",
		"teamspitcher" : "PAW,SWB IL"
	},
	{
		"player" : "hillri01",
		"teams" : "6.5",
		"teamspitcher" : "PAW,SYR IL"
	},
	{
		"player" : "hillri01",
		"teams" : "12.0",
		"teamspitcher" : "STK CALL"
	},
	{
		"player" : "hillri01",
		"teams" : "4.8",
		"teamspitcher" : "RCU CALL"
	},
	{
		"player" : "hillri01",
		"teams" : "7.7",
		"teamspitcher" : "RCU CALL"
	},
	{
		"player" : "buehlwa01",
		"teams" : "0.0",
		"teamspitcher" : "GRL,DGR MIDW,ARIZ"
	},
	{
		"player" : "buehlwa01",
		"teams" : "6.8",
		"teamspitcher" : "TUL,OKC,RCU TL,PCL,CALL"
	},
	{
		"player" : "buehlwa01",
		"teams" : "6.8",
		"teamspitcher" : "OKC,RCU PCL,CALL"
	},
	{
		"player" : "woodal02",
		"teams" : "6.7",
		"teamspitcher" : "ROM SALL"
	},
	{
		"player" : "woodal02",
		"teams" : "6.4",
		"teamspitcher" : "MSS,GWI SOUL,IL"
	},
	{
		"player" : "woodal02",
		"teams" : "7.3",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "kershcl01",
		"teams" : "6.8",
		"teamspitcher" : "DGR GULF"
	},
	{
		"player" : "kershcl01",
		"teams" : "6.6",
		"teamspitcher" : "GRL,JCK MIDW,SOUL"
	},
	{
		"player" : "kershcl01",
		"teams" : "5.7",
		"teamspitcher" : "JCK SOUL"
	},
	{
		"player" : "kershcl01",
		"teams" : "7.2",
		"teamspitcher" : "CNG,RCU SOUL,CALL"
	},
	{
		"player" : "kershcl01",
		"teams" : "3.0",
		"teamspitcher" : "RCU CALL"
	},
	{
		"player" : "kershcl01",
		"teams" : "3.6",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "galero01",
		"teams" : "EUG · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "galero01",
		"teams" : "FWA,LEL,SAN,TUC · MIDW,CALL,TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "galero01",
		"teams" : "TUC,LEL,SAN · PCL,CALL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "galero01",
		"teams" : "SAN,TUC · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "galero01",
		"teams" : "ELP,ADG · PCL,AUBL",
		"teamspitcher" : ""
	},
	{
		"player" : "galero01",
		"teams" : "ELP,ESC · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "galero01",
		"teams" : "SAN,ELP · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "galero01",
		"teams" : "ELP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "galero01",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "locasti01",
		"teams" : "BLD · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "locasti01",
		"teams" : "VAN · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "locasti01",
		"teams" : "LNS,RCU · MIDW,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "locasti01",
		"teams" : "RCU,TUL,GLN · CALL,TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "locasti01",
		"teams" : "TUL,OKC · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "locasti01",
		"teams" : "OKC,DGR · PCL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "tolesan01",
		"teams" : "PRI · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "tolesan01",
		"teams" : "BWG · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "tolesan01",
		"teams" : "POE,DVS · FLOR,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "tolesan01",
		"teams" : "TUL,RCU,OKC · TL,CALL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "tolesan01",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "valerbr01",
		"teams" : "SJ2 · VESL",
		"teamspitcher" : ""
	},
	{
		"player" : "valerbr01",
		"teams" : "CDS,JOH · GULF,APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "valerbr01",
		"teams" : "BAT,SPD,MGA · NYPL,TL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "valerbr01",
		"teams" : "PEO,MGA · MIDW,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "valerbr01",
		"teams" : "PLM,SPD,MGA,PEA · FLOR,TL,VEWL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "valerbr01",
		"teams" : "SPD,MGA,PLM · TL,VEWL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "valerbr01",
		"teams" : "MGA,MEM,SPD · VEWL,PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "valerbr01",
		"teams" : "MEM,MGA · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "valerbr01",
		"teams" : "OKC,NFK · PCL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "freesda01",
		"teams" : "FWA,EUG · MIDW,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "freesda01",
		"teams" : "LEL · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "freesda01",
		"teams" : "MEM,ORN · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "freesda01",
		"teams" : "MEM,SPD,CDS · PCL,TL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "freesda01",
		"teams" : "SPD · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "freesda01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "freesda01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "freesda01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "freesda01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "farmeky01",
		"teams" : "OGD · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "farmeky01",
		"teams" : "GRL,RCU · MIDW,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "farmeky01",
		"teams" : "TUL,RCU,GLN · TL,CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "farmeky01",
		"teams" : "TUL,DGR · TL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "farmeky01",
		"teams" : "OKC,TUL · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "farmeky01",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "verdual01",
		"teams" : "DGR,OGD · ARIZ,PION",
		"teamspitcher" : ""
	},
	{
		"player" : "verdual01",
		"teams" : "GRL,RCU · MIDW,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "verdual01",
		"teams" : "TUL,GLN · TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "verdual01",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "verdual01",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "seageco01",
		"teams" : "OGD · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "seageco01",
		"teams" : "GRL,RCU,GLN · MIDW,CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "seageco01",
		"teams" : "RCU,CNG,GLN · CALL,SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "seageco01",
		"teams" : "OKC,TUL · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "doziebr01",
		"teams" : "ELZ,TWN · APPY,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "doziebr01",
		"teams" : "FTM,BEL · FLOR,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "doziebr01",
		"teams" : "NBR,FTM,MES · EL,FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "doziebr01",
		"teams" : "ROC,MGA · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "utleych01",
		"teams" : "BAT · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "utleych01",
		"teams" : "CLW · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "utleych01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "utleych01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "utleych01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "utleych01",
		"teams" : "REA · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "utleych01",
		"teams" : "CLW · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "utleych01",
		"teams" : "CLW · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "utleych01",
		"teams" : "CLW,LHV · FLOR,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "utleych01",
		"teams" : "REA · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "utleych01",
		"teams" : "REA,LHV · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "barneau01",
		"teams" : "JAM · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "barneau01",
		"teams" : "GBO · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "barneau01",
		"teams" : "JUP,JCK · FLOR,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "barneau01",
		"teams" : "JCK,JUP · SOUL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "barneau01",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "barneau01",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "machama01",
		"teams" : "ADN,OLS · NYPL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "machama01",
		"teams" : "FDK,DEL · CARL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "machama01",
		"teams" : "BOW · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "machama01",
		"teams" : "FDK · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "muncyma01",
		"teams" : "BUR · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "muncyma01",
		"teams" : "STK,MDL,MES · CALL,TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "muncyma01",
		"teams" : "MDL · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "muncyma01",
		"teams" : "NVL,JAL · PCL,MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "muncyma01",
		"teams" : "NVL · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "muncyma01",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "muncyma01",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "kempma01",
		"teams" : "DGR · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "kempma01",
		"teams" : "CBS,VRO · SALL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "kempma01",
		"teams" : "VRO,PHO · FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "kempma01",
		"teams" : "JCK,LVG,ESS · SOUL,PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "kempma01",
		"teams" : "LVG · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "kempma01",
		"teams" : "ABQ,RCU · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "kempma01",
		"teams" : "RCU,ABQ · CALL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "kempma01",
		"teams" : "GWI · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "puigya01",
		"teams" : "CIE · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "puigya01",
		"teams" : "CIE · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "puigya01",
		"teams" : "MGZ,RCU,DGR · PRWL,CALL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "puigya01",
		"teams" : "CNG · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "puigya01",
		"teams" : "RCU · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "puigya01",
		"teams" : "OKC,RCU · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "puigya01",
		"teams" : "OKC,RCU · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "hernaen02",
		"teams" : "AST · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "hernaen02",
		"teams" : "TRC,PCE · NYPL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "hernaen02",
		"teams" : "LEX,CRO · SALL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "hernaen02",
		"teams" : "LNR,CRO,CPC · CALL,PRWL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "hernaen02",
		"teams" : "CPC,CRO · TL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "hernaen02",
		"teams" : "OKC,NOR,CRO,CPC · PCL,PRWL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "hernaen02",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "hernaen02",
		"teams" : "CRO,RCU,TUL,DGR · PRWL,CALL,TL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "pederjo01",
		"teams" : "DGR · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "pederjo01",
		"teams" : "OGD,GRL · PION,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "pederjo01",
		"teams" : "RCU,MES · CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "pederjo01",
		"teams" : "CNG,LRA · SOUL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "pederjo01",
		"teams" : "ABQ,ESC · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "pederjo01",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "pederjo01",
		"teams" : "OKC,RCU · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "turneju01",
		"teams" : "BIL · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "turneju01",
		"teams" : "DAY,SAR · MIDW,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "turneju01",
		"teams" : "CNG,SAR,PEA · SOUL,FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "turneju01",
		"teams" : "NFK · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "turneju01",
		"teams" : "BFL,NFK,ESC · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "turneju01",
		"teams" : "BFL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "turneju01",
		"teams" : "ESC,BFL · DOWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "turneju01",
		"teams" : "BNG,BKN,MET,SCE · EL,NYPL,GULF,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "turneju01",
		"teams" : "RCU · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "turneju01",
		"teams" : "RCU · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "turneju01",
		"teams" : "RCU · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "tayloch03",
		"teams" : "EVR,CLI · NORW,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "tayloch03",
		"teams" : "HDS,WTN,PEA · CALL,SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "tayloch03",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "tayloch03",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "tayloch03",
		"teams" : "TAC,OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "tayloch03",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "forsylo01",
		"teams" : "PDS,EUG · ARIZ,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "forsylo01",
		"teams" : "SAN,LEL · TL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "forsylo01",
		"teams" : "SAN · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "forsylo01",
		"teams" : "TUC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "forsylo01",
		"teams" : "TUC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "forsylo01",
		"teams" : "TUC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "forsylo01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "forsylo01",
		"teams" : "RCU · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "forsylo01",
		"teams" : "RCU · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "bellico01",
		"teams" : "DGR · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "bellico01",
		"teams" : "OGD,DGR · PION,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "bellico01",
		"teams" : "RCU · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "bellico01",
		"teams" : "TUL,GLN,OKC · TL,AZFL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "bellico01",
		"teams" : "OKC,DGR · PCL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "grandya01",
		"teams" : "RDL · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "grandya01",
		"teams" : "BAK,CAR,PHO,LOU · CALL,SOUL,AZFL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "grandya01",
		"teams" : "TUC,LEL · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "grandya01",
		"teams" : "TUC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "grandya01",
		"teams" : "AZU · DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "grandya01",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "grandya01",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "richaga01",
		"teams" : "9.4",
		"teamspitcher" : "ORM PION"
	},
	{
		"player" : "richaga01",
		"teams" : "8.2",
		"teamspitcher" : "CDR,RCU MIDW,CALL"
	},
	{
		"player" : "richaga01",
		"teams" : "7.7",
		"teamspitcher" : "ARK TL"
	},
	{
		"player" : "richaga01",
		"teams" : "10.2",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "richaga01",
		"teams" : "12.6",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "richaga01",
		"teams" : "22.5",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "richaga01",
		"teams" : "18.9",
		"teamspitcher" : "SBR CALL"
	},
	{
		"player" : "drakeol01",
		"teams" : "6.5",
		"teamspitcher" : "BLD,ADN APPY,NYPL"
	},
	{
		"player" : "drakeol01",
		"teams" : "9.5",
		"teamspitcher" : "DEL SALL"
	},
	{
		"player" : "drakeol01",
		"teams" : "9.8",
		"teamspitcher" : "FDK,SCO CARL,AZFL"
	},
	{
		"player" : "drakeol01",
		"teams" : "8.6",
		"teamspitcher" : "FDK,BOW,NFK CARL,EL,IL"
	},
	{
		"player" : "drakeol01",
		"teams" : "4.0",
		"teamspitcher" : "BOW EL"
	},
	{
		"player" : "drakeol01",
		"teams" : "5.5",
		"teamspitcher" : "BOW EL"
	},
	{
		"player" : "drakeol01",
		"teams" : "7.5",
		"teamspitcher" : "BOW,AGU EL,DOWL"
	},
	{
		"player" : "drakeol01",
		"teams" : "4.7",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "drakeol01",
		"teams" : "7.0",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "drakeol01",
		"teams" : "3.5",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "jerezwi01",
		"teams" : "8.7",
		"teamspitcher" : "RES,LOW GULF,NYPL"
	},
	{
		"player" : "jerezwi01",
		"teams" : "8.9",
		"teamspitcher" : "GRV,PRT,SAL SALL,EL,CARL"
	},
	{
		"player" : "jerezwi01",
		"teams" : "9.7",
		"teamspitcher" : "PRT EL"
	},
	{
		"player" : "jerezwi01",
		"teams" : "8.1",
		"teamspitcher" : "PRT,PAW,ESS EL,IL,DOWL"
	},
	{
		"player" : "jerezwi01",
		"teams" : "9.1",
		"teamspitcher" : "PAW,SLK IL,PCL"
	},
	{
		"player" : "parkebl01",
		"teams" : "8.5",
		"teamspitcher" : "CBZ,BOI ARIZ,NORW"
	},
	{
		"player" : "parkebl01",
		"teams" : "7.1",
		"teamspitcher" : "PEO,DYT,WKI,IWA MIDW,FLOR,HIWB,PCL"
	},
	{
		"player" : "parkebl01",
		"teams" : "6.7",
		"teamspitcher" : "IWA,KNX,MES PCL,SOUL,AZFL"
	},
	{
		"player" : "parkebl01",
		"teams" : "8.5",
		"teamspitcher" : "IWA,KNX PCL,SOUL"
	},
	{
		"player" : "parkebl01",
		"teams" : "6.6",
		"teamspitcher" : "IWA,HRM,KNX PCL,MXPW,SOUL"
	},
	{
		"player" : "parkebl01",
		"teams" : "6.1",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "parkebl01",
		"teams" : "4.1",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "parkebl01",
		"teams" : "7.1",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "parkebl01",
		"teams" : "9.5",
		"teamspitcher" : "IWA,MXL PCL,MXPW"
	},
	{
		"player" : "parkebl01",
		"teams" : "5.4",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "buttrty01",
		"teams" : "9.0",
		"teamspitcher" : "RES GULF"
	},
	{
		"player" : "buttrty01",
		"teams" : "8.0",
		"teamspitcher" : "LOW NYPL"
	},
	{
		"player" : "buttrty01",
		"teams" : "10.3",
		"teamspitcher" : "GRV,LOW,RES SALL,NYPL,GULF"
	},
	{
		"player" : "buttrty01",
		"teams" : "8.8",
		"teamspitcher" : "SAL,GRV CARL,SALL"
	},
	{
		"player" : "buttrty01",
		"teams" : "9.1",
		"teamspitcher" : "PRT EL"
	},
	{
		"player" : "buttrty01",
		"teams" : "8.6",
		"teamspitcher" : "PRT,PAW,PEA EL,IL,AZFL"
	},
	{
		"player" : "buttrty01",
		"teams" : "7.0",
		"teamspitcher" : "PAW,SLK,ANG IL,PCL,ARIZ"
	},
	{
		"player" : "bedroca01",
		"teams" : "9.8",
		"teamspitcher" : "ANG ARIZ"
	},
	{
		"player" : "bedroca01",
		"teams" : "9.9",
		"teamspitcher" : "CDR MIDW"
	},
	{
		"player" : "bedroca01",
		"teams" : "8.0",
		"teamspitcher" : "BUR,MES,SBR MIDW,AZFL,CALL"
	},
	{
		"player" : "bedroca01",
		"teams" : "3.2",
		"teamspitcher" : "ARK,SLK,SBR TL,PCL,CALL"
	},
	{
		"player" : "bedroca01",
		"teams" : "8.1",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "bedroca01",
		"teams" : "7.6",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "bedroca01",
		"teams" : "12.3",
		"teamspitcher" : "SBR CALL"
	},
	{
		"player" : "alvarjo02",
		"teams" : "7.9",
		"teamspitcher" : "RSX,ORN DOSL,VEWL"
	},
	{
		"player" : "alvarjo02",
		"teams" : "6.5",
		"teamspitcher" : "RES,ORN GULF,VEWL"
	},
	{
		"player" : "alvarjo02",
		"teams" : "9.7",
		"teamspitcher" : "GRV,ORN SALL,VEWL"
	},
	{
		"player" : "alvarjo02",
		"teams" : "8.3",
		"teamspitcher" : "LOW,SAL,ORN NYPL,CARL,VEWL"
	},
	{
		"player" : "alvarjo02",
		"teams" : "9.3",
		"teamspitcher" : "GBO,ORN SALL,VEWL"
	},
	{
		"player" : "alvarjo02",
		"teams" : "9.3",
		"teamspitcher" : "JUP,JCK,ORN FLOR,SOUL,VEWL"
	},
	{
		"player" : "alvarjo02",
		"teams" : "8.7",
		"teamspitcher" : "JCK,ORN SOUL,VEWL"
	},
	{
		"player" : "alvarjo02",
		"teams" : "8.0",
		"teamspitcher" : "TOL,ORN IL,VEWL"
	},
	{
		"player" : "alvarjo02",
		"teams" : "7.6",
		"teamspitcher" : "ORN,SLK,ANG VEWL,PCL,ARIZ"
	},
	{
		"player" : "alvarjo02",
		"teams" : "6.1",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "alvarjo02",
		"teams" : "7.7",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "coleta01",
		"teams" : "9.4",
		"teamspitcher" : "VAN NORW"
	},
	{
		"player" : "coleta01",
		"teams" : "4.9",
		"teamspitcher" : "VAN NORW"
	},
	{
		"player" : "coleta01",
		"teams" : "9.7",
		"teamspitcher" : "LNS,DUN MIDW,FLOR"
	},
	{
		"player" : "coleta01",
		"teams" : "7.9",
		"teamspitcher" : "DUN,MAN FLOR,EL"
	},
	{
		"player" : "coleta01",
		"teams" : "9.5",
		"teamspitcher" : "MAN EL"
	},
	{
		"player" : "coleta01",
		"teams" : "10.5",
		"teamspitcher" : "MAN,DUN EL,FLOR"
	},
	{
		"player" : "coleta01",
		"teams" : "4.3",
		"teamspitcher" : "BFL,BJY,DUN IL,GULF,FLOR"
	},
	{
		"player" : "coleta01",
		"teams" : "8.9",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "moralos01",
		"teams" : "4.3",
		"teamspitcher" : "AGR VESL"
	},
	{
		"player" : "moralos01",
		"teams" : "13.5",
		"teamspitcher" : "AGR VESL"
	},
	{
		"player" : "moralos01",
		"teams" : "10.9",
		"teamspitcher" : "AGR VESL"
	},
	{
		"player" : "moralos01",
		"teams" : "4.9",
		"teamspitcher" : "AGR VESL"
	},
	{
		"player" : "moralos01",
		"teams" : "7.7",
		"teamspitcher" : "MRE,LRA ARIZ,VEWL"
	},
	{
		"player" : "moralos01",
		"teams" : "7.8",
		"teamspitcher" : "CLI,LRA MIDW,VEWL"
	},
	{
		"player" : "moralos01",
		"teams" : "8.9",
		"teamspitcher" : "BAK,LRA,CLI CALL,VEWL,MIDW"
	},
	{
		"player" : "moralos01",
		"teams" : "9.4",
		"teamspitcher" : "MOB,SLK,LRA SOUL,PCL,VEWL"
	},
	{
		"player" : "moralos01",
		"teams" : "11.1",
		"teamspitcher" : "SLK,LRA PCL,VEWL"
	},
	{
		"player" : "woodbl01",
		"teams" : "8.7",
		"teamspitcher" : "IDF PION"
	},
	{
		"player" : "woodbl01",
		"teams" : "8.5",
		"teamspitcher" : "BUR,WOA,ROY,WMT MIDW,HIWB,ARIZ,CARL"
	},
	{
		"player" : "woodbl01",
		"teams" : "8.0",
		"teamspitcher" : "NTA,WMT TL,CARL"
	},
	{
		"player" : "woodbl01",
		"teams" : "10.7",
		"teamspitcher" : "NTA,SPS,ROY TL,AZFL,ARIZ"
	},
	{
		"player" : "woodbl01",
		"teams" : "6.5",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "woodbl01",
		"teams" : "3.6",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "woodbl01",
		"teams" : "7.5",
		"teamspitcher" : "CLB,AKR,LCO,MHV IL,EL,MIDW,NYPL"
	},
	{
		"player" : "woodbl01",
		"teams" : "8.4",
		"teamspitcher" : "OMA,WMT,CLB,NTA PCL,CARL,IL,TL"
	},
	{
		"player" : "woodbl01",
		"teams" : "8.0",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "woodbl01",
		"teams" : "15.4",
		"teamspitcher" : "SBR CALL"
	},
	{
		"player" : "morriak01",
		"teams" : "4.7",
		"teamspitcher" : "MET GULF"
	},
	{
		"player" : "morriak01",
		"teams" : "5.3",
		"teamspitcher" : "KPT APPY"
	},
	{
		"player" : "morriak01",
		"teams" : "8.9",
		"teamspitcher" : "KPT APPY"
	},
	{
		"player" : "morriak01",
		"teams" : "5.8",
		"teamspitcher" : "BKN NYPL"
	},
	{
		"player" : "morriak01",
		"teams" : "3.0",
		"teamspitcher" : "SAV SALL"
	},
	{
		"player" : "morriak01",
		"teams" : "4.1",
		"teamspitcher" : "SCE,BNG FLOR,EL"
	},
	{
		"player" : "morriak01",
		"teams" : "7.2",
		"teamspitcher" : "MSS,BNG,SRV SOUL,EL,AZFL"
	},
	{
		"player" : "morriak01",
		"teams" : "6.6",
		"teamspitcher" : "GWI,MSS IL,SOUL"
	},
	{
		"player" : "morriak01",
		"teams" : "8.9",
		"teamspitcher" : "SLK,LRA PCL,VEWL"
	},
	{
		"player" : "lambjo02",
		"teams" : "7.5",
		"teamspitcher" : "IDF,BRL PION,APPY"
	},
	{
		"player" : "lambjo02",
		"teams" : "7.4",
		"teamspitcher" : "WMT,BUR,NTA CARL,MIDW,TL"
	},
	{
		"player" : "lambjo02",
		"teams" : "8.5",
		"teamspitcher" : "NTA TL"
	},
	{
		"player" : "lambjo02",
		"teams" : "10.4",
		"teamspitcher" : "IDF,ROY PION,ARIZ"
	},
	{
		"player" : "lambjo02",
		"teams" : "10.3",
		"teamspitcher" : "WMT,OMA CARL,PCL"
	},
	{
		"player" : "lambjo02",
		"teams" : "8.9",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "lambjo02",
		"teams" : "7.6",
		"teamspitcher" : "OMA,LOU PCL,IL"
	},
	{
		"player" : "lambjo02",
		"teams" : "10.7",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "lambjo02",
		"teams" : "10.8",
		"teamspitcher" : "SLK,MGL PCL,VEWL"
	},
	{
		"player" : "lambjo02",
		"teams" : "8.9",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "skaggty01",
		"teams" : "8.1",
		"teamspitcher" : "ANG,ORM ARIZ,PION"
	},
	{
		"player" : "skaggty01",
		"teams" : "8.3",
		"teamspitcher" : "CDR,SBN MIDW"
	},
	{
		"player" : "skaggty01",
		"teams" : "7.2",
		"teamspitcher" : "VIS,MOB CALL,SOUL"
	},
	{
		"player" : "skaggty01",
		"teams" : "8.2",
		"teamspitcher" : "MOB,REN SOUL,PCL"
	},
	{
		"player" : "skaggty01",
		"teams" : "9.8",
		"teamspitcher" : "REN,VIS PCL,CALL"
	},
	{
		"player" : "skaggty01",
		"teams" : "15.0",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "skaggty01",
		"teams" : "5.9",
		"teamspitcher" : "SLK,SBR,ANG PCL,CALL,ARIZ"
	},
	{
		"player" : "skaggty01",
		"teams" : "10.5",
		"teamspitcher" : "SLK,ANG PCL,ARIZ"
	},
	{
		"player" : "bardlu01",
		"teams" : "6.4",
		"teamspitcher" : "TWN,ELZ GULF,APPY"
	},
	{
		"player" : "bardlu01",
		"teams" : "5.1",
		"teamspitcher" : "ELZ,TWN,FTM APPY,GULF,FLOR"
	},
	{
		"player" : "bardlu01",
		"teams" : "7.7",
		"teamspitcher" : "CDR MIDW"
	},
	{
		"player" : "bardlu01",
		"teams" : "8.7",
		"teamspitcher" : "FTM,CNG FLOR,SOUL"
	},
	{
		"player" : "bardlu01",
		"teams" : "8.7",
		"teamspitcher" : "CNG,ROC SOUL,IL"
	},
	{
		"player" : "bardlu01",
		"teams" : "10.1",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "tazawju01",
		"teams" : "7.2",
		"teamspitcher" : "PRT,PAW EL,IL"
	},
	{
		"player" : "tazawju01",
		"teams" : "8.6",
		"teamspitcher" : "PRT,SAL,PAW EL,CARL,IL"
	},
	{
		"player" : "tazawju01",
		"teams" : "7.2",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "tazawju01",
		"teams" : "10.8",
		"teamspitcher" : "JCK,JUP,NOR SOUL,FLOR,PCL"
	},
	{
		"player" : "tazawju01",
		"teams" : "13.5",
		"teamspitcher" : "TOL,SLK IL,PCL"
	},
	{
		"player" : "jewelja01",
		"teams" : "9.5",
		"teamspitcher" : "ANG,ORM ARIZ,PION"
	},
	{
		"player" : "jewelja01",
		"teams" : "8.9",
		"teamspitcher" : "BUR MIDW"
	},
	{
		"player" : "jewelja01",
		"teams" : "12.5",
		"teamspitcher" : "SBR CALL"
	},
	{
		"player" : "jewelja01",
		"teams" : "9.4",
		"teamspitcher" : "MOB,SBR SOUL,CALL"
	},
	{
		"player" : "jewelja01",
		"teams" : "9.0",
		"teamspitcher" : "SLK,MOB PCL,SOUL"
	},
	{
		"player" : "ramirno01",
		"teams" : "9.5",
		"teamspitcher" : "GRV SALL"
	},
	{
		"player" : "ramirno01",
		"teams" : "7.2",
		"teamspitcher" : "SAL,PRT,SPS CARL,EL,AZFL"
	},
	{
		"player" : "ramirno01",
		"teams" : "7.5",
		"teamspitcher" : "PRT EL"
	},
	{
		"player" : "ramirno01",
		"teams" : "7.0",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "ramirno01",
		"teams" : "8.0",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "ramirno01",
		"teams" : "7.1",
		"teamspitcher" : "PAW,SLK IL,PCL"
	},
	{
		"player" : "shoemma01",
		"teams" : "13.5",
		"teamspitcher" : "ANG ARIZ"
	},
	{
		"player" : "shoemma01",
		"teams" : "7.4",
		"teamspitcher" : "CDR,RCU MIDW,CALL"
	},
	{
		"player" : "shoemma01",
		"teams" : "10.3",
		"teamspitcher" : "RCU,SLK CALL,PCL"
	},
	{
		"player" : "shoemma01",
		"teams" : "8.1",
		"teamspitcher" : "ARK,SLK TL,PCL"
	},
	{
		"player" : "shoemma01",
		"teams" : "11.1",
		"teamspitcher" : "SLK,MGL PCL,VEWL"
	},
	{
		"player" : "shoemma01",
		"teams" : "10.4",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "shoemma01",
		"teams" : "11.9",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "shoemma01",
		"teams" : "7.5",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "shoemma01",
		"teams" : "9.0",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "shoemma01",
		"teams" : "6.0",
		"teamspitcher" : "SBR CALL"
	},
	{
		"player" : "shoemma01",
		"teams" : "0.0",
		"teamspitcher" : "SBR CALL"
	},
	{
		"player" : "pareded01",
		"teams" : "6.8",
		"teamspitcher" : "ANS DOSL"
	},
	{
		"player" : "pareded01",
		"teams" : "10.9",
		"teamspitcher" : "ANS DOSL"
	},
	{
		"player" : "pareded01",
		"teams" : "3.5",
		"teamspitcher" : "ORM PION"
	},
	{
		"player" : "pareded01",
		"teams" : "7.2",
		"teamspitcher" : "BUR,SBR MIDW,CALL"
	},
	{
		"player" : "pareded01",
		"teams" : "8.6",
		"teamspitcher" : "ARK,SBR,SCO TL,CALL,AZFL"
	},
	{
		"player" : "pareded01",
		"teams" : "6.9",
		"teamspitcher" : "SLK,MOB PCL,SOUL"
	},
	{
		"player" : "pareded01",
		"teams" : "9.9",
		"teamspitcher" : "SLK,ZUL PCL,VEWL"
	},
	{
		"player" : "bridwpa01",
		"teams" : "6.4",
		"teamspitcher" : "ADN,OLS NYPL,GULF"
	},
	{
		"player" : "bridwpa01",
		"teams" : "9.4",
		"teamspitcher" : "ADN,DEL NYPL,SALL"
	},
	{
		"player" : "bridwpa01",
		"teams" : "9.6",
		"teamspitcher" : "DEL SALL"
	},
	{
		"player" : "bridwpa01",
		"teams" : "8.9",
		"teamspitcher" : "DEL SALL"
	},
	{
		"player" : "bridwpa01",
		"teams" : "7.8",
		"teamspitcher" : "FDK,GLN CARL,AZFL"
	},
	{
		"player" : "bridwpa01",
		"teams" : "8.9",
		"teamspitcher" : "BOW EL"
	},
	{
		"player" : "bridwpa01",
		"teams" : "7.9",
		"teamspitcher" : "BOW,NFK,PEA,OLS,ADN EL,IL,AZFL,GULF,NYPL"
	},
	{
		"player" : "bridwpa01",
		"teams" : "10.0",
		"teamspitcher" : "SLK,MOB,NFK PCL,SOUL,IL"
	},
	{
		"player" : "bridwpa01",
		"teams" : "16.1",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "robleha01",
		"teams" : "7.2",
		"teamspitcher" : "MTS DOSL"
	},
	{
		"player" : "robleha01",
		"teams" : "8.6",
		"teamspitcher" : "MT1 DOSL"
	},
	{
		"player" : "robleha01",
		"teams" : "6.8",
		"teamspitcher" : "KPT APPY"
	},
	{
		"player" : "robleha01",
		"teams" : "5.8",
		"teamspitcher" : "BKN NYPL"
	},
	{
		"player" : "robleha01",
		"teams" : "8.9",
		"teamspitcher" : "SCE,SCO,MET FLOR,AZFL,GULF"
	},
	{
		"player" : "robleha01",
		"teams" : "8.1",
		"teamspitcher" : "BNG,LCY EL,DOWL"
	},
	{
		"player" : "robleha01",
		"teams" : "7.0",
		"teamspitcher" : "LVG PCL"
	},
	{
		"player" : "robleha01",
		"teams" : "10.4",
		"teamspitcher" : "LVG PCL"
	},
	{
		"player" : "robleha01",
		"teams" : "8.2",
		"teamspitcher" : "LVG PCL"
	},
	{
		"player" : "almonmi01",
		"teams" : "8.5",
		"teamspitcher" : "RYL DOSL"
	},
	{
		"player" : "almonmi01",
		"teams" : "6.5",
		"teamspitcher" : "RYL,ROY DOSL,ARIZ"
	},
	{
		"player" : "almonmi01",
		"teams" : "7.9",
		"teamspitcher" : "LEX SALL"
	},
	{
		"player" : "almonmi01",
		"teams" : "8.1",
		"teamspitcher" : "WMT,GIG,PEA CARL,DOWL,AZFL"
	},
	{
		"player" : "almonmi01",
		"teams" : "8.5",
		"teamspitcher" : "NTA,OMA TL,PCL"
	},
	{
		"player" : "almonmi01",
		"teams" : "10.7",
		"teamspitcher" : "OMA,NTA,GIG PCL,TL,DOWL"
	},
	{
		"player" : "almonmi01",
		"teams" : "8.8",
		"teamspitcher" : "NTA,OMA,GIG TL,PCL,DOWL"
	},
	{
		"player" : "almonmi01",
		"teams" : "14.8",
		"teamspitcher" : "SLK,ANG PCL,ARIZ"
	},
	{
		"player" : "krolia01",
		"teams" : "12.5",
		"teamspitcher" : "VAN,ATH NORW,ARIZ"
	},
	{
		"player" : "krolia01",
		"teams" : "7.5",
		"teamspitcher" : "KNC,STK MIDW,CALL"
	},
	{
		"player" : "krolia01",
		"teams" : "0.0",
		"teamspitcher" : "ATH ARIZ"
	},
	{
		"player" : "krolia01",
		"teams" : "9.8",
		"teamspitcher" : "STK,MDL CALL,TL"
	},
	{
		"player" : "krolia01",
		"teams" : "4.9",
		"teamspitcher" : "HRB,SYR EL,IL"
	},
	{
		"player" : "krolia01",
		"teams" : "12.4",
		"teamspitcher" : "TOL,WMI IL,MIDW"
	},
	{
		"player" : "krolia01",
		"teams" : "6.0",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "krolia01",
		"teams" : "7.3",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "krolia01",
		"teams" : "3.6",
		"teamspitcher" : "KIS,FLF,GWI GULF,FLOR,IL"
	},
	{
		"player" : "krolia01",
		"teams" : "10.1",
		"teamspitcher" : "LVG,SLK PCL"
	},
	{
		"player" : "middlke01",
		"teams" : "9.9",
		"teamspitcher" : "ORM,ANG PION,ARIZ"
	},
	{
		"player" : "middlke01",
		"teams" : "9.3",
		"teamspitcher" : "ORM PION"
	},
	{
		"player" : "middlke01",
		"teams" : "10.6",
		"teamspitcher" : "BUR MIDW"
	},
	{
		"player" : "middlke01",
		"teams" : "6.4",
		"teamspitcher" : "SBR,ARK,SLK CALL,TL,PCL"
	},
	{
		"player" : "middlke01",
		"teams" : "7.8",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "middlke01",
		"teams" : "0.0",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "anderju01",
		"teams" : "12.4",
		"teamspitcher" : "ORM,ANG PION,ARIZ"
	},
	{
		"player" : "anderju01",
		"teams" : "9.3",
		"teamspitcher" : "BUR MIDW"
	},
	{
		"player" : "anderju01",
		"teams" : "11.8",
		"teamspitcher" : "SBR,SCO CALL,AZFL"
	},
	{
		"player" : "anderju01",
		"teams" : "8.4",
		"teamspitcher" : "MOB,SBR SOUL,CALL"
	},
	{
		"player" : "anderju01",
		"teams" : "2.1",
		"teamspitcher" : "SLK,MOB PCL,SOUL"
	},
	{
		"player" : "tropeni01",
		"teams" : "7.1",
		"teamspitcher" : "TRC NYPL"
	},
	{
		"player" : "tropeni01",
		"teams" : "8.3",
		"teamspitcher" : "LEX,LNR,MES SALL,CALL,AZFL"
	},
	{
		"player" : "tropeni01",
		"teams" : "9.4",
		"teamspitcher" : "CPC TL"
	},
	{
		"player" : "tropeni01",
		"teams" : "6.5",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "tropeni01",
		"teams" : "9.8",
		"teamspitcher" : "SLK,ANG PCL,ARIZ"
	},
	{
		"player" : "tropeni01",
		"teams" : "7.7",
		"teamspitcher" : "SLK,SBR PCL,CALL"
	},
	{
		"player" : "tropeni01",
		"teams" : "8.5",
		"teamspitcher" : "SBR,SLK CALL,PCL"
	},
	{
		"player" : "johnsji04",
		"teams" : "8.2",
		"teamspitcher" : "OLS GULF"
	},
	{
		"player" : "johnsji04",
		"teams" : "8.4",
		"teamspitcher" : "BLD APPY"
	},
	{
		"player" : "johnsji04",
		"teams" : "10.9",
		"teamspitcher" : "BLD APPY"
	},
	{
		"player" : "johnsji04",
		"teams" : "8.5",
		"teamspitcher" : "DEL,FDK SALL,CARL"
	},
	{
		"player" : "johnsji04",
		"teams" : "7.7",
		"teamspitcher" : "FDK,BOW CARL,EL"
	},
	{
		"player" : "johnsji04",
		"teams" : "9.5",
		"teamspitcher" : "BOW EL"
	},
	{
		"player" : "johnsji04",
		"teams" : "9.6",
		"teamspitcher" : "NFK,PHO IL,AZFL"
	},
	{
		"player" : "johnsji04",
		"teams" : "4.5",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "johnsji04",
		"teams" : "9.7",
		"teamspitcher" : "BOW,OLS,FDK,NFK EL,GULF,CARL,IL"
	},
	{
		"player" : "johnsji04",
		"teams" : "7.7",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "johnsji04",
		"teams" : "9.0",
		"teamspitcher" : "GWI,ROM IL,SALL"
	},
	{
		"player" : "johnsji04",
		"teams" : "15.0",
		"teamspitcher" : "SLK,SBR PCL,CALL"
	},
	{
		"player" : "ramirjc01",
		"teams" : "6.0",
		"teamspitcher" : "AGR VESL"
	},
	{
		"player" : "ramirjc01",
		"teams" : "7.3",
		"teamspitcher" : "EVR NORW"
	},
	{
		"player" : "ramirjc01",
		"teams" : "8.1",
		"teamspitcher" : "APP MIDW"
	},
	{
		"player" : "ramirjc01",
		"teams" : "9.7",
		"teamspitcher" : "HDS CALL"
	},
	{
		"player" : "ramirjc01",
		"teams" : "9.6",
		"teamspitcher" : "REA,CLW EL,FLOR"
	},
	{
		"player" : "ramirjc01",
		"teams" : "9.0",
		"teamspitcher" : "REA EL"
	},
	{
		"player" : "ramirjc01",
		"teams" : "8.0",
		"teamspitcher" : "LHV,REA,LGU IL,EL,VEWL"
	},
	{
		"player" : "ramirjc01",
		"teams" : "8.6",
		"teamspitcher" : "LHV,REA,LGU IL,EL,VEWL"
	},
	{
		"player" : "ramirjc01",
		"teams" : "8.0",
		"teamspitcher" : "CLB,CRO,AKR IL,PRWL,EL"
	},
	{
		"player" : "ramirjc01",
		"teams" : "7.9",
		"teamspitcher" : "REN,CUL,TAC MXPW,PCL"
	},
	{
		"player" : "ramirjc01",
		"teams" : "6.0",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "despaod01",
		"teams" : "9.5",
		"teamspitcher" : "IDT CNS"
	},
	{
		"player" : "despaod01",
		"teams" : "9.7",
		"teamspitcher" : "IDT CNS"
	},
	{
		"player" : "despaod01",
		"teams" : "8.4",
		"teamspitcher" : "IDT CNS"
	},
	{
		"player" : "despaod01",
		"teams" : "10.1",
		"teamspitcher" : "IDT CNS"
	},
	{
		"player" : "despaod01",
		"teams" : "8.9",
		"teamspitcher" : "IDT CNS"
	},
	{
		"player" : "despaod01",
		"teams" : "9.9",
		"teamspitcher" : "IDT CNS"
	},
	{
		"player" : "despaod01",
		"teams" : "7.0",
		"teamspitcher" : "IDT CNS"
	},
	{
		"player" : "despaod01",
		"teams" : "8.7",
		"teamspitcher" : "IDT CNS"
	},
	{
		"player" : "despaod01",
		"teams" : "6.8",
		"teamspitcher" : "MXL MXPW"
	},
	{
		"player" : "despaod01",
		"teams" : "11.5",
		"teamspitcher" : "ELP,SAN PCL,TL"
	},
	{
		"player" : "despaod01",
		"teams" : "10.6",
		"teamspitcher" : "NFK,ARA IL,VEWL"
	},
	{
		"player" : "despaod01",
		"teams" : "7.5",
		"teamspitcher" : "NOR,JUP PCL,FLOR"
	},
	{
		"player" : "despaod01",
		"teams" : "10.8",
		"teamspitcher" : "NOR,JUP PCL,FLOR"
	},
	{
		"player" : "mcguide02",
		"teams" : "7.8",
		"teamspitcher" : "DUN,MAN FLOR,EL"
	},
	{
		"player" : "mcguide02",
		"teams" : "9.8",
		"teamspitcher" : "MAN,SRV EL,AZFL"
	},
	{
		"player" : "mcguide02",
		"teams" : "8.5",
		"teamspitcher" : "MAN EL"
	},
	{
		"player" : "mcguide02",
		"teams" : "9.8",
		"teamspitcher" : "MAN,BFL,SAC EL,IL,PCL"
	},
	{
		"player" : "mcguide02",
		"teams" : "8.4",
		"teamspitcher" : "TUL,OKC TL,PCL"
	},
	{
		"player" : "mcguide02",
		"teams" : "8.7",
		"teamspitcher" : "MEM,SPD PCL,TL"
	},
	{
		"player" : "mcguide02",
		"teams" : "6.7",
		"teamspitcher" : "PEN SOUL"
	},
	{
		"player" : "mcguide02",
		"teams" : "7.4",
		"teamspitcher" : "BFL,SLK,RRK IL,PCL"
	},
	{
		"player" : "barrija01",
		"teams" : "23.4",
		"teamspitcher" : "ANS DOSL"
	},
	{
		"player" : "barrija01",
		"teams" : "8.6",
		"teamspitcher" : "ANS DOSL"
	},
	{
		"player" : "barrija01",
		"teams" : "11.0",
		"teamspitcher" : "ANG,ORM ARIZ,PION"
	},
	{
		"player" : "barrija01",
		"teams" : "10.2",
		"teamspitcher" : "BUR MIDW"
	},
	{
		"player" : "barrija01",
		"teams" : "7.7",
		"teamspitcher" : "SBR,MOB,SLK CALL,SOUL,PCL"
	},
	{
		"player" : "barrija01",
		"teams" : "10.0",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "penafe01",
		"teams" : "9.5",
		"teamspitcher" : "CB2 DOSL"
	},
	{
		"player" : "penafe01",
		"teams" : "7.0",
		"teamspitcher" : "CUB DOSL"
	},
	{
		"player" : "penafe01",
		"teams" : "11.1",
		"teamspitcher" : "CBZ ARIZ"
	},
	{
		"player" : "penafe01",
		"teams" : "8.5",
		"teamspitcher" : "BOI,PEO NORW,MIDW"
	},
	{
		"player" : "penafe01",
		"teams" : "8.9",
		"teamspitcher" : "KNC MIDW"
	},
	{
		"player" : "penafe01",
		"teams" : "8.6",
		"teamspitcher" : "DYT,KNX FLOR,SOUL"
	},
	{
		"player" : "penafe01",
		"teams" : "7.7",
		"teamspitcher" : "KNX,ESS SOUL,DOWL"
	},
	{
		"player" : "penafe01",
		"teams" : "6.5",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "penafe01",
		"teams" : "10.3",
		"teamspitcher" : "IWA,ESS PCL,DOWL"
	},
	{
		"player" : "penafe01",
		"teams" : "8.1",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "heanean01",
		"teams" : "10.7",
		"teamspitcher" : "GBO,JUM SALL,GULF"
	},
	{
		"player" : "heanean01",
		"teams" : "7.0",
		"teamspitcher" : "JUP,JCK,GLN FLOR,SOUL,AZFL"
	},
	{
		"player" : "heanean01",
		"teams" : "7.9",
		"teamspitcher" : "NOR,JCK PCL,SOUL"
	},
	{
		"player" : "heanean01",
		"teams" : "10.9",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "heanean01",
		"teams" : "9.1",
		"teamspitcher" : "SLK,ANG PCL,ARIZ"
	},
	{
		"player" : "heanean01",
		"teams" : "2.8",
		"teamspitcher" : "SBR CALL"
	},
	{
		"player" : "grateju01",
		"teams" : "RYL · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "grateju01",
		"teams" : "BRL · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "grateju01",
		"teams" : "IDF · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "grateju01",
		"teams" : "BUR,IDF · MIDW,PION",
		"teamspitcher" : ""
	},
	{
		"player" : "grateju01",
		"teams" : "BUR,WMT · MIDW,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "grateju01",
		"teams" : "KNC,WMT · MIDW,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "grateju01",
		"teams" : "WMT · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "grateju01",
		"teams" : "NTA,LGU · TL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "grateju01",
		"teams" : "NTA,OMA · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "grateju01",
		"teams" : "ZUL,SWB,TRE,CHS · VEWL,IL,EL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "grateju01",
		"teams" : "SLK,ARA · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "grateju01",
		"teams" : "BFL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "grateju01",
		"teams" : "ROC,SLK,CCS · IL,PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "schimry01",
		"teams" : "AUB,BJY · NYPL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "schimry01",
		"teams" : "LNS,DUN · MIDW,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "schimry01",
		"teams" : "DUN · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "schimry01",
		"teams" : "DUN,MAN · FLOR,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "schimry01",
		"teams" : "MAN · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "schimry01",
		"teams" : "BFL,MAN,MAZ · IL,EL,MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "schimry01",
		"teams" : "MAN,BFL · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "schimry01",
		"teams" : "ELP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "schimry01",
		"teams" : "ELP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "schimry01",
		"teams" : "SLK,HRM · PCL,MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "johnssh01",
		"teams" : "ORM · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "johnssh01",
		"teams" : "BUR,SBR · MIDW,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "johnssh01",
		"teams" : "SBR · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "johnssh01",
		"teams" : "ARK · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "johnssh01",
		"teams" : "SLK,ARK · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "johnssh01",
		"teams" : "SLK,MOB · PCL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "johnssh01",
		"teams" : "SLK,MAZ,MOB · PCL,MXPW,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "fontano01",
		"teams" : "LEX · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "fontano01",
		"teams" : "LNR,PEA · CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "fontano01",
		"teams" : "CPC,SAJ · TL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "fontano01",
		"teams" : "FRE · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "fontano01",
		"teams" : "FRE,CPC · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "fontano01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "fontano01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "hudsojo03",
		"teams" : "DAY · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "hudsojo03",
		"teams" : "DAY,BAK · MIDW,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "hudsojo03",
		"teams" : "DYT · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "hudsojo03",
		"teams" : "PEN · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "hudsojo03",
		"teams" : "PEN · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "hudsojo03",
		"teams" : "SLK,LOU,MOB · PCL,IL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "blashja01",
		"teams" : "PUL · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "blashja01",
		"teams" : "EVR,CLI · NORW,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "blashja01",
		"teams" : "CLI · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "blashja01",
		"teams" : "HDS,WTN · CALL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "blashja01",
		"teams" : "TAC,WTN · PCL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "blashja01",
		"teams" : "WTN,TAC · SOUL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "blashja01",
		"teams" : "ELP,ESC · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "blashja01",
		"teams" : "ELP,JAL · PCL,MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "blashja01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "hermomi01",
		"teams" : "ANG · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "hermomi01",
		"teams" : "ORM · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "hermomi01",
		"teams" : "BUR,ORM · MIDW,PION",
		"teamspitcher" : ""
	},
	{
		"player" : "hermomi01",
		"teams" : "SBR,BUR,SCO · CALL,MIDW,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "hermomi01",
		"teams" : "MOB,SLK,SBR · SOUL,PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "hermomi01",
		"teams" : "SLK,LCY · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "riverre01",
		"teams" : "MRE,EVR · ARIZ,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "riverre01",
		"teams" : "EVR · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "riverre01",
		"teams" : "APP · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "riverre01",
		"teams" : "SBR,TAC,CRO · CALL,PCL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "riverre01",
		"teams" : "SAN,TAC,CRO · TL,PCL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "riverre01",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "riverre01",
		"teams" : "WTN · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "riverre01",
		"teams" : "JCK,LVG,ARE · SOUL,PCL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "riverre01",
		"teams" : "BFL,ARE · IL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "riverre01",
		"teams" : "SAJ,TRE,SWB · PRWL,EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "riverre01",
		"teams" : "ROC,CRO,LCY · IL,PRWL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "riverre01",
		"teams" : "ROC,GIG · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "riverre01",
		"teams" : "TUC,PCE,MGZ · PCL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "riverre01",
		"teams" : "SAJ · PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "riverre01",
		"teams" : "SNT · PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "riverre01",
		"teams" : "LVG · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "riverre01",
		"teams" : "SBR · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "arciafr01",
		"teams" : "YK2 · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "arciafr01",
		"teams" : "YNK · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "arciafr01",
		"teams" : "YNK · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "arciafr01",
		"teams" : "STI,CHS · NYPL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "arciafr01",
		"teams" : "CHS · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "arciafr01",
		"teams" : "CHS,ZUL · SALL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "arciafr01",
		"teams" : "TAM,TRE,ZUL · FLOR,EL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "arciafr01",
		"teams" : "SWB,TRE,ZUL · IL,EL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "arciafr01",
		"teams" : "TRE,ZUL · EL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "arciafr01",
		"teams" : "JCK,ZUL,NOR · SOUL,VEWL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "arciafr01",
		"teams" : "MOB,ARA,SLK,ZUL · SOUL,PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "arciafr01",
		"teams" : "SLK,LRA,MOB · PCL,VEWL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "younger03",
		"teams" : "CAS · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "younger03",
		"teams" : "CAS · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "younger03",
		"teams" : "AVL,WKI · SALL,HIWB",
		"teamspitcher" : ""
	},
	{
		"player" : "younger03",
		"teams" : "MOD · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "younger03",
		"teams" : "TUL,PHO · TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "younger03",
		"teams" : "CSP,ESC · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "younger03",
		"teams" : "CSP,TUL · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "younger03",
		"teams" : "CSP,MGA · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "younger03",
		"teams" : "BNG,SCE · EL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "younger03",
		"teams" : "GWI,LVG · IL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "younger03",
		"teams" : "CSP,HRM · PCL,MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "younger03",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "younger03",
		"teams" : "SLK,HRM · PCL,MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "fernajo03",
		"teams" : "MTZ · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "fernajo03",
		"teams" : "MTZ · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "fernajo03",
		"teams" : "MTZ · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "fernajo03",
		"teams" : "MTZ · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "fernajo03",
		"teams" : "MTZ · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "fernajo03",
		"teams" : "MTZ · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "fernajo03",
		"teams" : "MTZ · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "fernajo03",
		"teams" : "MTZ · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "fernajo03",
		"teams" : "AGU · DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "fernajo03",
		"teams" : "TUL,OKC · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "fernajo03",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "cowarka01",
		"teams" : "ANG,ORM · ARIZ,PION",
		"teamspitcher" : ""
	},
	{
		"player" : "cowarka01",
		"teams" : "ORM · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "cowarka01",
		"teams" : "CDR,SBR,SCO · MIDW,CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "cowarka01",
		"teams" : "ARK · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "cowarka01",
		"teams" : "ARK,MES · TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "cowarka01",
		"teams" : "SLK,SBR · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "cowarka01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "cowarka01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "cowarka01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "youngch04",
		"teams" : "WHS · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "youngch04",
		"teams" : "BRS,GRF · APPY,PION",
		"teamspitcher" : ""
	},
	{
		"player" : "youngch04",
		"teams" : "KAN · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "youngch04",
		"teams" : "BIR,PES · SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "youngch04",
		"teams" : "TUC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "youngch04",
		"teams" : "REN · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "youngch04",
		"teams" : "VIS,REN · CALL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "youngch04",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "youngch04",
		"teams" : "SWB,LVG · IL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "youngch04",
		"teams" : "PAW · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "bricejo01",
		"teams" : "RCK · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "bricejo01",
		"teams" : "RCK · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "bricejo01",
		"teams" : "GRJ · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "bricejo01",
		"teams" : "GRJ,AVL · PION,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "bricejo01",
		"teams" : "AVL,MGL · SALL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "bricejo01",
		"teams" : "CAR,MGL · CARL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "bricejo01",
		"teams" : "ARK,SBR,SLK · TL,CALL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "bricejo01",
		"teams" : "MOB,MGL,SLK · SOUL,VEWL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "bricejo01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "wardta01",
		"teams" : "ORM,BUR · PION,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "wardta01",
		"teams" : "SBR,SCO · CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "wardta01",
		"teams" : "SBR,MOB,SCO · CALL,SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "wardta01",
		"teams" : "SLK,MOB · PCL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "marteje01",
		"teams" : "MET · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "marteje01",
		"teams" : "SAV · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "marteje01",
		"teams" : "SAV · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "marteje01",
		"teams" : "SCE,PEA · FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "marteje01",
		"teams" : "BNG,AZU · EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "marteje01",
		"teams" : "MDL,AZU,ATH · TL,DOWL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "marteje01",
		"teams" : "MDL,AZU · TL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "marteje01",
		"teams" : "TOL,AZU · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "marteje01",
		"teams" : "SLK,AZU · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "marteje01",
		"teams" : "SLK,AZU · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "marteje01",
		"teams" : "SBR · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "cozarza01",
		"teams" : "DAY · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "cozarza01",
		"teams" : "DAY · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "cozarza01",
		"teams" : "CAR,PES · SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "cozarza01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "cozarza01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "fletcda02",
		"teams" : "ORM,BUR · PION,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "fletcda02",
		"teams" : "SBR,ARK,SCO · CALL,TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "fletcda02",
		"teams" : "MOB,SLK · SOUL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "fletcda02",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "ohtansh01",
		"teams" : "NPN · JPPL",
		"teamspitcher" : ""
	},
	{
		"player" : "ohtansh01",
		"teams" : "NPN · JPPL",
		"teamspitcher" : ""
	},
	{
		"player" : "ohtansh01",
		"teams" : "NPN · JPPL",
		"teamspitcher" : ""
	},
	{
		"player" : "ohtansh01",
		"teams" : "NPN · JPPL",
		"teamspitcher" : ""
	},
	{
		"player" : "ohtansh01",
		"teams" : "NPN · JPPL",
		"teamspitcher" : ""
	},
	{
		"player" : "calhoko01",
		"teams" : "ORM · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "calhoko01",
		"teams" : "SBR,MGL · CALL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "calhoko01",
		"teams" : "SLK,ESC · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "calhoko01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "calhoko01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "calhoko01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "troutmi01",
		"teams" : "ANG,CDR · ARIZ,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "troutmi01",
		"teams" : "CDR,RCU · MIDW,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "troutmi01",
		"teams" : "ARK,SCO · TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "troutmi01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "troutmi01",
		"teams" : "SBR · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "uptonju01",
		"teams" : "SBN · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "uptonju01",
		"teams" : "MOB,VIS · SOUL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "uptonju01",
		"teams" : "TUC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "uptonju01",
		"teams" : "VIS · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "valbulu01",
		"teams" : "AGR · VESL",
		"teamspitcher" : ""
	},
	{
		"player" : "valbulu01",
		"teams" : "EVR,TAC · NORW,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "valbulu01",
		"teams" : "APP,SBR,LRA · MIDW,CALL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "valbulu01",
		"teams" : "WTN,LRA · SOUL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "valbulu01",
		"teams" : "WTN,TAC,LRA · SOUL,PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "valbulu01",
		"teams" : "LRA,CLB · VEWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "valbulu01",
		"teams" : "LRA,CLB · VEWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "valbulu01",
		"teams" : "CLB,LRA · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "valbulu01",
		"teams" : "IWA,LRA · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "valbulu01",
		"teams" : "LRA,CBZ,KNC · VEWL,ARIZ,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "valbulu01",
		"teams" : "LRA · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "valbulu01",
		"teams" : "LRA · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "valbulu01",
		"teams" : "SBR · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "valbulu01",
		"teams" : "LRA · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "simmoan01",
		"teams" : "DAN · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "simmoan01",
		"teams" : "LBG · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "simmoan01",
		"teams" : "MSS · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "simmoan01",
		"teams" : "SLK,SBR · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "kinslia01",
		"teams" : "SPO · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "kinslia01",
		"teams" : "FRI,CLI,PES · TL,MIDW,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "kinslia01",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "kinslia01",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "kinslia01",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "kinslia01",
		"teams" : "FRI · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "kinslia01",
		"teams" : "FRI · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "kinslia01",
		"teams" : "FRI · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "pujolal01",
		"teams" : "PEO,POT,MEM · MIDW,CARL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "maldoma01",
		"teams" : "ANG,MGZ · ARIZ,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "maldoma01",
		"teams" : "ANG,ORM · ARIZ,PION",
		"teamspitcher" : ""
	},
	{
		"player" : "maldoma01",
		"teams" : "ANG · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "maldoma01",
		"teams" : "CHL · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "maldoma01",
		"teams" : "HVL,BRE,MGZ · SOUL,FLOR,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "maldoma01",
		"teams" : "BRE,MGZ,APP,NVL · FLOR,PRWL,MIDW,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "maldoma01",
		"teams" : "NVL,HVL,MGZ,BRE · PCL,SOUL,PRWL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "maldoma01",
		"teams" : "HVL,NVL,MGZ · SOUL,PCL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "maldoma01",
		"teams" : "NVL,MGZ · PCL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "maldoma01",
		"teams" : "MGZ · PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "maldoma01",
		"teams" : "MGZ · PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "maldoma01",
		"teams" : "MGZ · PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "mccarke01",
		"teams" : "10.4",
		"teamspitcher" : "BRL APPY"
	},
	{
		"player" : "mccarke01",
		"teams" : "4.5",
		"teamspitcher" : "LEX SALL"
	},
	{
		"player" : "mccarke01",
		"teams" : "8.6",
		"teamspitcher" : "WMT,NTA,LEX,SPS CARL,TL,SALL,AZFL"
	},
	{
		"player" : "mccarke01",
		"teams" : "7.3",
		"teamspitcher" : "NTA,OMA,ESC TL,PCL,DOWL"
	},
	{
		"player" : "mccarke01",
		"teams" : "9.0",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "mccarke01",
		"teams" : "13.5",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "romeren01",
		"teams" : "6.1",
		"teamspitcher" : "DRY DOSL"
	},
	{
		"player" : "romeren01",
		"teams" : "8.7",
		"teamspitcher" : "DVS GULF"
	},
	{
		"player" : "romeren01",
		"teams" : "6.3",
		"teamspitcher" : "PRI,HDV APPY,NYPL"
	},
	{
		"player" : "romeren01",
		"teams" : "8.2",
		"teamspitcher" : "BWG MIDW"
	},
	{
		"player" : "romeren01",
		"teams" : "6.6",
		"teamspitcher" : "POE,ESC FLOR,DOWL"
	},
	{
		"player" : "romeren01",
		"teams" : "6.9",
		"teamspitcher" : "MTG,DHM SOUL,IL"
	},
	{
		"player" : "romeren01",
		"teams" : "9.6",
		"teamspitcher" : "DHM,ESC IL,DOWL"
	},
	{
		"player" : "romeren01",
		"teams" : "9.2",
		"teamspitcher" : "DHM,ESC,POE IL,DOWL,FLOR"
	},
	{
		"player" : "romeren01",
		"teams" : "5.7",
		"teamspitcher" : "ESC,POE DOWL,FLOR"
	},
	{
		"player" : "romeren01",
		"teams" : "9.0",
		"teamspitcher" : "SYR,ESC IL,DOWL"
	},
	{
		"player" : "romeren01",
		"teams" : "4.9",
		"teamspitcher" : "ESC,INA,ATO,BDT DOWL,IL,EL,FLOR"
	},
	{
		"player" : "herreke01",
		"teams" : "6.3",
		"teamspitcher" : "RYL DOSL"
	},
	{
		"player" : "herreke01",
		"teams" : "8.7",
		"teamspitcher" : "BRL,BUR APPY,MIDW"
	},
	{
		"player" : "herreke01",
		"teams" : "5.4",
		"teamspitcher" : "BUR MIDW"
	},
	{
		"player" : "herreke01",
		"teams" : "8.3",
		"teamspitcher" : "BUR MIDW"
	},
	{
		"player" : "herreke01",
		"teams" : "5.9",
		"teamspitcher" : "NTA,ESC,OMA,WMT TL,DOWL,PCL,CARL"
	},
	{
		"player" : "herreke01",
		"teams" : "4.3",
		"teamspitcher" : "OMA,ESC,NTA PCL,DOWL,TL"
	},
	{
		"player" : "boyerbl01",
		"teams" : "6.7",
		"teamspitcher" : "BVS GULF"
	},
	{
		"player" : "boyerbl01",
		"teams" : "8.6",
		"teamspitcher" : "DAN APPY"
	},
	{
		"player" : "boyerbl01",
		"teams" : "6.7",
		"teamspitcher" : "MAC SALL"
	},
	{
		"player" : "boyerbl01",
		"teams" : "9.6",
		"teamspitcher" : "ROM SALL"
	},
	{
		"player" : "boyerbl01",
		"teams" : "8.1",
		"teamspitcher" : "MYR CARL"
	},
	{
		"player" : "boyerbl01",
		"teams" : "11.5",
		"teamspitcher" : "MSS SOUL"
	},
	{
		"player" : "boyerbl01",
		"teams" : "9.3",
		"teamspitcher" : "RMD IL"
	},
	{
		"player" : "boyerbl01",
		"teams" : "7.5",
		"teamspitcher" : "REN PCL"
	},
	{
		"player" : "boyerbl01",
		"teams" : "14.0",
		"teamspitcher" : "MEM,PLM,INA PCL,FLOR,IL"
	},
	{
		"player" : "boyerbl01",
		"teams" : "7.5",
		"teamspitcher" : "HAN,OMA JPCL,PCL"
	},
	{
		"player" : "boyerbl01",
		"teams" : "8.1",
		"teamspitcher" : "ELP PCL"
	},
	{
		"player" : "boyerbl01",
		"teams" : "7.6",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "boyerbl01",
		"teams" : "9.7",
		"teamspitcher" : "OMA,NTA PCL,TL"
	},
	{
		"player" : "smithbu03",
		"teams" : "13.5",
		"teamspitcher" : "PDS ARIZ"
	},
	{
		"player" : "smithbu03",
		"teams" : "8.9",
		"teamspitcher" : "LEL CALL"
	},
	{
		"player" : "smithbu03",
		"teams" : "7.1",
		"teamspitcher" : "TUC,SAN PCL,TL"
	},
	{
		"player" : "smithbu03",
		"teams" : "14.0",
		"teamspitcher" : "SPS,ELP AZFL,PCL"
	},
	{
		"player" : "smithbu03",
		"teams" : "6.0",
		"teamspitcher" : "POE,SPS,DHM,DVS FLOR,AZFL,IL,GULF"
	},
	{
		"player" : "lopezjo02",
		"teams" : "10.1",
		"teamspitcher" : "BRR,MGZ ARIZ,PRWL"
	},
	{
		"player" : "lopezjo02",
		"teams" : "9.2",
		"teamspitcher" : "BRR,BWR ARIZ,DOSL"
	},
	{
		"player" : "lopezjo02",
		"teams" : "9.2",
		"teamspitcher" : "APP MIDW"
	},
	{
		"player" : "lopezjo02",
		"teams" : "9.2",
		"teamspitcher" : "BRE,MGZ FLOR,PRWL"
	},
	{
		"player" : "lopezjo02",
		"teams" : "6.6",
		"teamspitcher" : "BIL SOUL"
	},
	{
		"player" : "lopezjo02",
		"teams" : "9.2",
		"teamspitcher" : "CSP,BIL,MGZ PCL,SOUL,PRWL"
	},
	{
		"player" : "lopezjo02",
		"teams" : "8.0",
		"teamspitcher" : "BIL,AGU,MGZ SOUL,DOWL,PRWL"
	},
	{
		"player" : "lopezjo02",
		"teams" : "9.8",
		"teamspitcher" : "CSP,OMA PCL"
	},
	{
		"player" : "adamja01",
		"teams" : "8.1",
		"teamspitcher" : "KNC MIDW"
	},
	{
		"player" : "adamja01",
		"teams" : "8.4",
		"teamspitcher" : "WMT CARL"
	},
	{
		"player" : "adamja01",
		"teams" : "9.3",
		"teamspitcher" : "NTA,PEA TL,AZFL"
	},
	{
		"player" : "adamja01",
		"teams" : "10.5",
		"teamspitcher" : "NTA,OMA,SRV,NBR TL,PCL,AZFL,EL"
	},
	{
		"player" : "adamja01",
		"teams" : "6.0",
		"teamspitcher" : "NTA,PDS,PD2,SAN TL,ARIZ"
	},
	{
		"player" : "adamja01",
		"teams" : "4.1",
		"teamspitcher" : "OMA,NTA PCL,TL"
	},
	{
		"player" : "barlosc01",
		"teams" : "27.0",
		"teamspitcher" : "DGR ARIZ"
	},
	{
		"player" : "barlosc01",
		"teams" : "10.6",
		"teamspitcher" : "OGD PION"
	},
	{
		"player" : "barlosc01",
		"teams" : "9.6",
		"teamspitcher" : "GRL MIDW"
	},
	{
		"player" : "barlosc01",
		"teams" : "8.8",
		"teamspitcher" : "RCU,DGR,GLN,GRL,OKC CALL,ARIZ,AZFL,MIDW,PCL"
	},
	{
		"player" : "barlosc01",
		"teams" : "9.0",
		"teamspitcher" : "TUL TL"
	},
	{
		"player" : "barlosc01",
		"teams" : "6.3",
		"teamspitcher" : "TUL,OKC TL,PCL"
	},
	{
		"player" : "barlosc01",
		"teams" : "9.5",
		"teamspitcher" : "OMA,GIG,NTA,ROY PCL,DOWL,TL,ARIZ"
	},
	{
		"player" : "peralwi01",
		"teams" : "12.1",
		"teamspitcher" : "BRR ARIZ"
	},
	{
		"player" : "peralwi01",
		"teams" : "7.6",
		"teamspitcher" : "HEL,CHL PION,SALL"
	},
	{
		"player" : "peralwi01",
		"teams" : "7.9",
		"teamspitcher" : "APP MIDW"
	},
	{
		"player" : "peralwi01",
		"teams" : "8.9",
		"teamspitcher" : "BRE,HVL FLOR,SOUL"
	},
	{
		"player" : "peralwi01",
		"teams" : "7.7",
		"teamspitcher" : "HVL,NVL,GIG SOUL,PCL,DOWL"
	},
	{
		"player" : "peralwi01",
		"teams" : "9.5",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "peralwi01",
		"teams" : "5.6",
		"teamspitcher" : "BIL,APP SOUL,MIDW"
	},
	{
		"player" : "peralwi01",
		"teams" : "12.0",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "peralwi01",
		"teams" : "7.3",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "peralwi01",
		"teams" : "9.3",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "livelbe01",
		"teams" : "5.0",
		"teamspitcher" : "BIL,DAY PION,MIDW"
	},
	{
		"player" : "livelbe01",
		"teams" : "7.0",
		"teamspitcher" : "BAK,PEN CALL,SOUL"
	},
	{
		"player" : "livelbe01",
		"teams" : "10.0",
		"teamspitcher" : "REA EL"
	},
	{
		"player" : "livelbe01",
		"teams" : "6.2",
		"teamspitcher" : "LHV,REA IL,EL"
	},
	{
		"player" : "livelbe01",
		"teams" : "8.4",
		"teamspitcher" : "LHV IL"
	},
	{
		"player" : "livelbe01",
		"teams" : "6.1",
		"teamspitcher" : "LHV,CLR,CL2 IL,GULF"
	},
	{
		"player" : "grimmju01",
		"teams" : "8.3",
		"teamspitcher" : "MYR,HCK CARL,SALL"
	},
	{
		"player" : "grimmju01",
		"teams" : "8.2",
		"teamspitcher" : "FRI,RRK TL,PCL"
	},
	{
		"player" : "grimmju01",
		"teams" : "9.4",
		"teamspitcher" : "IWA,RRK PCL"
	},
	{
		"player" : "grimmju01",
		"teams" : "0.0",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "grimmju01",
		"teams" : "9.0",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "grimmju01",
		"teams" : "7.7",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "grimmju01",
		"teams" : "10.1",
		"teamspitcher" : "TAC,OMA,EVR PCL,NORW"
	},
	{
		"player" : "newbeja01",
		"teams" : "7.3",
		"teamspitcher" : "ROY ARIZ"
	},
	{
		"player" : "newbeja01",
		"teams" : "7.5",
		"teamspitcher" : "BRL APPY"
	},
	{
		"player" : "newbeja01",
		"teams" : "9.8",
		"teamspitcher" : "IDF PION"
	},
	{
		"player" : "newbeja01",
		"teams" : "9.8",
		"teamspitcher" : "LEX SALL"
	},
	{
		"player" : "newbeja01",
		"teams" : "7.6",
		"teamspitcher" : "WMT,LEX,CGU,SPS CARL,SALL,PRWL,AZFL"
	},
	{
		"player" : "newbeja01",
		"teams" : "8.0",
		"teamspitcher" : "NTA,OMA TL,PCL"
	},
	{
		"player" : "newbeja01",
		"teams" : "7.6",
		"teamspitcher" : "NTA,OMA TL,PCL"
	},
	{
		"player" : "vastoje01",
		"teams" : "0.0",
		"teamspitcher" : "TRI NORW"
	},
	{
		"player" : "vastoje01",
		"teams" : "6.5",
		"teamspitcher" : "AVL SALL"
	},
	{
		"player" : "vastoje01",
		"teams" : "8.3",
		"teamspitcher" : "HRT,MOD,SRV EL,CALL,AZFL"
	},
	{
		"player" : "vastoje01",
		"teams" : "11.1",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "vastoje01",
		"teams" : "8.1",
		"teamspitcher" : "ABQ,OMA PCL"
	},
	{
		"player" : "maurebr01",
		"teams" : "7.7",
		"teamspitcher" : "MRE ARIZ"
	},
	{
		"player" : "maurebr01",
		"teams" : "9.0",
		"teamspitcher" : "PUL APPY"
	},
	{
		"player" : "maurebr01",
		"teams" : "7.2",
		"teamspitcher" : "ADG,MRE,CLI AUBL,ARIZ,MIDW"
	},
	{
		"player" : "maurebr01",
		"teams" : "8.5",
		"teamspitcher" : "HDS,CLI CALL,MIDW"
	},
	{
		"player" : "maurebr01",
		"teams" : "8.7",
		"teamspitcher" : "WTN SOUL"
	},
	{
		"player" : "maurebr01",
		"teams" : "9.4",
		"teamspitcher" : "TAC,PEA PCL,AZFL"
	},
	{
		"player" : "maurebr01",
		"teams" : "8.4",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "maurebr01",
		"teams" : "9.0",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "oakstr01",
		"teams" : "10.3",
		"teamspitcher" : "OGD PION"
	},
	{
		"player" : "oakstr01",
		"teams" : "8.0",
		"teamspitcher" : "GRL,RCU MIDW,CALL"
	},
	{
		"player" : "oakstr01",
		"teams" : "8.7",
		"teamspitcher" : "TUL,OKC,RCU TL,PCL,CALL"
	},
	{
		"player" : "oakstr01",
		"teams" : "9.7",
		"teamspitcher" : "OKC,OGD,DGR PCL,PION,ARIZ"
	},
	{
		"player" : "oakstr01",
		"teams" : "9.1",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "sparkgl01",
		"teams" : "6.1",
		"teamspitcher" : "IDF PION"
	},
	{
		"player" : "sparkgl01",
		"teams" : "7.0",
		"teamspitcher" : "WMT CARL"
	},
	{
		"player" : "sparkgl01",
		"teams" : "7.7",
		"teamspitcher" : "NTA TL"
	},
	{
		"player" : "sparkgl01",
		"teams" : "10.4",
		"teamspitcher" : "NTA,ROY,LEX,WMT TL,ARIZ,SALL,CARL"
	},
	{
		"player" : "sparkgl01",
		"teams" : "8.0",
		"teamspitcher" : "NTA,MAN,BFL,DUN TL,EL,IL,FLOR"
	},
	{
		"player" : "sparkgl01",
		"teams" : "9.9",
		"teamspitcher" : "OMA,NTA PCL,TL"
	},
	{
		"player" : "stouter01",
		"teams" : "8.5",
		"teamspitcher" : "IDF PION"
	},
	{
		"player" : "stouter01",
		"teams" : "8.3",
		"teamspitcher" : "LEX,ROY,IDF,NTA SALL,ARIZ,PION,TL"
	},
	{
		"player" : "stouter01",
		"teams" : "8.2",
		"teamspitcher" : "NTA,SPS TL,AZFL"
	},
	{
		"player" : "stouter01",
		"teams" : "7.5",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "stouter01",
		"teams" : "11.5",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "flynnbr01",
		"teams" : "7.7",
		"teamspitcher" : "WMI MIDW"
	},
	{
		"player" : "flynnbr01",
		"teams" : "9.8",
		"teamspitcher" : "LAK,JCK,PHO,ERI FLOR,SOUL,AZFL,EL"
	},
	{
		"player" : "flynnbr01",
		"teams" : "8.1",
		"teamspitcher" : "NOR,JCK PCL,SOUL"
	},
	{
		"player" : "flynnbr01",
		"teams" : "10.9",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "flynnbr01",
		"teams" : "13.5",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "flynnbr01",
		"teams" : "8.4",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "flynnbr01",
		"teams" : "12.2",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "hillti01",
		"teams" : "2.9",
		"teamspitcher" : "LEX,IDF SALL,PION"
	},
	{
		"player" : "hillti01",
		"teams" : "7.9",
		"teamspitcher" : "NTA,WMT,LCY TL,CARL,DOWL"
	},
	{
		"player" : "hillti01",
		"teams" : "10.0",
		"teamspitcher" : "NTA,WMT TL,CARL"
	},
	{
		"player" : "kenneia01",
		"teams" : "9.5",
		"teamspitcher" : "WOA,STI HIWB,NYPL"
	},
	{
		"player" : "kenneia01",
		"teams" : "5.6",
		"teamspitcher" : "TAM,TRE,SWB FLOR,EL,IL"
	},
	{
		"player" : "kenneia01",
		"teams" : "6.1",
		"teamspitcher" : "SWB,MGZ,TAM,YNK IL,PRWL,FLOR,GULF"
	},
	{
		"player" : "kenneia01",
		"teams" : "8.3",
		"teamspitcher" : "SPS,SWB AZFL,IL"
	},
	{
		"player" : "kenneia01",
		"teams" : "12.9",
		"teamspitcher" : "NTA,OMA TL,PCL"
	},
	{
		"player" : "duffyda01",
		"teams" : "5.8",
		"teamspitcher" : "ROY ARIZ"
	},
	{
		"player" : "duffyda01",
		"teams" : "6.2",
		"teamspitcher" : "BUR MIDW"
	},
	{
		"player" : "duffyda01",
		"teams" : "7.7",
		"teamspitcher" : "WMT CARL"
	},
	{
		"player" : "duffyda01",
		"teams" : "8.0",
		"teamspitcher" : "NTA,SPS,WMT,IDF,ROY TL,AZFL,CARL,PION,ARIZ"
	},
	{
		"player" : "duffyda01",
		"teams" : "7.9",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "duffyda01",
		"teams" : "8.6",
		"teamspitcher" : "OMA,NTA PCL,TL"
	},
	{
		"player" : "duffyda01",
		"teams" : "7.5",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "duffyda01",
		"teams" : "5.6",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "duffyda01",
		"teams" : "7.4",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "junisja01",
		"teams" : "10.1",
		"teamspitcher" : "BRL APPY"
	},
	{
		"player" : "junisja01",
		"teams" : "12.8",
		"teamspitcher" : "IDF PION"
	},
	{
		"player" : "junisja01",
		"teams" : "9.0",
		"teamspitcher" : "LEX SALL"
	},
	{
		"player" : "junisja01",
		"teams" : "8.6",
		"teamspitcher" : "WMT,NTA CARL,TL"
	},
	{
		"player" : "junisja01",
		"teams" : "9.0",
		"teamspitcher" : "NTA,OMA TL,PCL"
	},
	{
		"player" : "junisja01",
		"teams" : "7.7",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "skogler01",
		"teams" : "11.7",
		"teamspitcher" : "IDF PION"
	},
	{
		"player" : "skogler01",
		"teams" : "8.9",
		"teamspitcher" : "WMT CARL"
	},
	{
		"player" : "skogler01",
		"teams" : "7.8",
		"teamspitcher" : "NTA TL"
	},
	{
		"player" : "skogler01",
		"teams" : "10.0",
		"teamspitcher" : "OMA,NTA PCL,TL"
	},
	{
		"player" : "skogler01",
		"teams" : "9.7",
		"teamspitcher" : "NTA,OMA,ROY TL,PCL,ARIZ"
	},
	{
		"player" : "kellebr01",
		"teams" : "8.5",
		"teamspitcher" : "DKS,MSO ARIZ,PION"
	},
	{
		"player" : "kellebr01",
		"teams" : "10.3",
		"teamspitcher" : "MSO,DKS,HIL PION,ARIZ,NORW"
	},
	{
		"player" : "kellebr01",
		"teams" : "8.1",
		"teamspitcher" : "KNC MIDW"
	},
	{
		"player" : "kellebr01",
		"teams" : "9.8",
		"teamspitcher" : "VIS CALL"
	},
	{
		"player" : "kellebr01",
		"teams" : "9.8",
		"teamspitcher" : "WTN SOUL"
	},
	{
		"player" : "hammeja01",
		"teams" : "12.3",
		"teamspitcher" : "HDV,PRI NYPL,APPY"
	},
	{
		"player" : "hammeja01",
		"teams" : "8.2",
		"teamspitcher" : "CHS SALL"
	},
	{
		"player" : "hammeja01",
		"teams" : "7.9",
		"teamspitcher" : "CHS,BAK SALL,CALL"
	},
	{
		"player" : "hammeja01",
		"teams" : "8.4",
		"teamspitcher" : "MTG,DHM SOUL,IL"
	},
	{
		"player" : "hammeja01",
		"teams" : "9.4",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "hammeja01",
		"teams" : "7.2",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "hammeja01",
		"teams" : "11.6",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "hammeja01",
		"teams" : "5.4",
		"teamspitcher" : "FDK CARL"
	},
	{
		"player" : "hammeja01",
		"teams" : "8.1",
		"teamspitcher" : "ADN,BOW NYPL,EL"
	},
	{
		"player" : "fillmhe01",
		"teams" : "4.7",
		"teamspitcher" : "ATH ARIZ"
	},
	{
		"player" : "fillmhe01",
		"teams" : "10.1",
		"teamspitcher" : "BEL MIDW"
	},
	{
		"player" : "fillmhe01",
		"teams" : "8.9",
		"teamspitcher" : "STK,MDL CALL,TL"
	},
	{
		"player" : "fillmhe01",
		"teams" : "9.5",
		"teamspitcher" : "MDL TL"
	},
	{
		"player" : "fillmhe01",
		"teams" : "11.0",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "vilorme01",
		"teams" : "RYL,BRL · DOSL,APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "vilorme01",
		"teams" : "BRL · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "vilorme01",
		"teams" : "IDF · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "vilorme01",
		"teams" : "LEX · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "vilorme01",
		"teams" : "WMT · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "torrera01",
		"teams" : "RYL · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "torrera01",
		"teams" : "RYL · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "torrera01",
		"teams" : "ROY · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "torrera01",
		"teams" : "BRL,LEX · APPY,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "torrera01",
		"teams" : "LEX,WMT · SALL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "torrera01",
		"teams" : "WMT,NTA,SPS,GIG · CARL,TL,AZFL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "torrera01",
		"teams" : "OMA,NTA,GIG · PCL,TL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "torrera01",
		"teams" : "OMA,GIG · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "torrera01",
		"teams" : "OMA,GIG · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "gallaca01",
		"teams" : "ROY,IDF · ARIZ,PION",
		"teamspitcher" : ""
	},
	{
		"player" : "gallaca01",
		"teams" : "BRL · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "gallaca01",
		"teams" : "LEX · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "gallaca01",
		"teams" : "WMT · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "gallaca01",
		"teams" : "WMT,SPS · CARL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "gallaca01",
		"teams" : "NTA · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "gallaca01",
		"teams" : "OMA,LCY · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "gallaca01",
		"teams" : "OMA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "orlanpa01",
		"teams" : "KAN · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "orlanpa01",
		"teams" : "WSM · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "orlanpa01",
		"teams" : "WSM,WMT · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "orlanpa01",
		"teams" : "WMT · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "orlanpa01",
		"teams" : "NTA,SAJ · TL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "orlanpa01",
		"teams" : "OMA,NTA · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "orlanpa01",
		"teams" : "NTA,LRA · TL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "orlanpa01",
		"teams" : "OMA,LRA · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "orlanpa01",
		"teams" : "OMA,LRA · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "orlanpa01",
		"teams" : "OMA,LRA · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "orlanpa01",
		"teams" : "LRA · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "orlanpa01",
		"teams" : "OMA,NTA · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "orlanpa01",
		"teams" : "OMA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "goodwbr01",
		"teams" : "HGR,HRB,SRV · SALL,EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "goodwbr01",
		"teams" : "HRB,MES · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "goodwbr01",
		"teams" : "SYR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "goodwbr01",
		"teams" : "HRB,MGA · EL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "goodwbr01",
		"teams" : "SYR,HRM · IL,MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "goodwbr01",
		"teams" : "SYR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "goodwbr01",
		"teams" : "OMA,HRB · PCL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "cuthbch01",
		"teams" : "ROY,IDF · ARIZ,PION",
		"teamspitcher" : ""
	},
	{
		"player" : "cuthbch01",
		"teams" : "KNC · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "cuthbch01",
		"teams" : "WMT · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "cuthbch01",
		"teams" : "NTA,WMT,PEA · TL,CARL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "cuthbch01",
		"teams" : "NTA,OMA · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "cuthbch01",
		"teams" : "OMA,GIG · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "cuthbch01",
		"teams" : "OMA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "cuthbch01",
		"teams" : "OMA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "cuthbch01",
		"teams" : "OBR,OMA · MXPW,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "goinsry01",
		"teams" : "AUB,LNS,BJY · NYPL,MIDW,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "goinsry01",
		"teams" : "LNS,DUN · MIDW,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "goinsry01",
		"teams" : "DUN,BJY · FLOR,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "goinsry01",
		"teams" : "MAN,SRV · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "goinsry01",
		"teams" : "BFL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "goinsry01",
		"teams" : "BFL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "goinsry01",
		"teams" : "BFL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "goinsry01",
		"teams" : "BFL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "goinsry01",
		"teams" : "LHV · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "phillbr02",
		"teams" : "AST · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "phillbr02",
		"teams" : "GRE,DAV · APPY,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "phillbr02",
		"teams" : "DAV,LNR · MIDW,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "phillbr02",
		"teams" : "LNR,CPC,BIL,SPS · CALL,TL,SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "phillbr02",
		"teams" : "BIL,SRV · SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "phillbr02",
		"teams" : "CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "phillbr02",
		"teams" : "CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "buterdr01",
		"teams" : "BKN · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "buterdr01",
		"teams" : "HGR,NSE · SALL,HIWB",
		"teamspitcher" : ""
	},
	{
		"player" : "buterdr01",
		"teams" : "SCE,BNG,NBR,PHO · FLOR,EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "buterdr01",
		"teams" : "NBR · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "buterdr01",
		"teams" : "ROC,ARE · IL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "buterdr01",
		"teams" : "ESS,ROC · DOWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "buterdr01",
		"teams" : "ROC,ABQ · IL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "solerjo01",
		"teams" : "HAV · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "solerjo01",
		"teams" : "HAV · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "solerjo01",
		"teams" : "PEO,CBZ · MIDW,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "solerjo01",
		"teams" : "DYT,MES · FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "solerjo01",
		"teams" : "IWA,KNX,CBZ · PCL,SOUL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "solerjo01",
		"teams" : "IWA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "solerjo01",
		"teams" : "KNX,IWA · SOUL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "solerjo01",
		"teams" : "OMA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "solerjo01",
		"teams" : "OMA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "jayjo02",
		"teams" : "DAV · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "jayjo02",
		"teams" : "PLM,SPD,CDS · FLOR,TL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "jayjo02",
		"teams" : "SPD,MEM · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "jayjo02",
		"teams" : "MEM,CCS · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "jayjo02",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "jayjo02",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "jayjo02",
		"teams" : "MEM,PEO · PCL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "jayjo02",
		"teams" : "LEL · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "herrero02",
		"teams" : "RCK · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "herrero02",
		"teams" : "CAS · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "herrero02",
		"teams" : "AVL,TRI · SALL,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "herrero02",
		"teams" : "AVL · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "herrero02",
		"teams" : "MOD · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "herrero02",
		"teams" : "MOD · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "herrero02",
		"teams" : "HRT,GIG · EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "herrero02",
		"teams" : "ABQ,GIG · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "herrero02",
		"teams" : "LOU,GIG,OMA · IL,DOWL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "mondera02",
		"teams" : "IDF · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "mondera02",
		"teams" : "LEX · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "mondera02",
		"teams" : "WMT,PEA · CARL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "mondera02",
		"teams" : "NTA,LCY · TL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "mondera02",
		"teams" : "NTA,OMA,WMT,LCY · TL,PCL,CARL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "mondera02",
		"teams" : "OMA,LCY · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "mondera02",
		"teams" : "OMA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "doziehu01",
		"teams" : "IDF,LEX · PION,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "doziehu01",
		"teams" : "NTA,WMT,PEA · TL,CARL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "doziehu01",
		"teams" : "NTA · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "doziehu01",
		"teams" : "OMA,NTA,LCY · PCL,TL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "doziehu01",
		"teams" : "OMA,HRM,NTA,WMT · PCL,MXPW,TL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "doziehu01",
		"teams" : "OMA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "ohearry01",
		"teams" : "IDF · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "ohearry01",
		"teams" : "LEX,WMT · SALL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "ohearry01",
		"teams" : "NTA,WMT,SPS · TL,CARL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "ohearry01",
		"teams" : "OMA,NTA · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "ohearry01",
		"teams" : "OMA,GIG · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "bonifjo01",
		"teams" : "RYL,ROY · DOSL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "bonifjo01",
		"teams" : "BRL · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "bonifjo01",
		"teams" : "KNC,LCY · MIDW,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "bonifjo01",
		"teams" : "WMT,NTA,PEA,ROY · CARL,TL,AZFL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "bonifjo01",
		"teams" : "NTA,LCY · TL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "bonifjo01",
		"teams" : "NTA,LCY · TL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "bonifjo01",
		"teams" : "OMA,LCY · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "bonifjo01",
		"teams" : "LCY,OMA · DOWL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "bonifjo01",
		"teams" : "OMA,LCY · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "almonab01",
		"teams" : "YK1 · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "almonab01",
		"teams" : "YNK · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "almonab01",
		"teams" : "CHS,ESC · SALL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "almonab01",
		"teams" : "CHS,ESC · SALL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "almonab01",
		"teams" : "TAM · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "almonab01",
		"teams" : "TAM,ESC · FLOR,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "almonab01",
		"teams" : "TRE,ESC,YNK · EL,DOWL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "almonab01",
		"teams" : "TAC,WTN,ESC · PCL,SOUL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "almonab01",
		"teams" : "TAC,AZU · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "almonab01",
		"teams" : "ELP,AZU,CLB · PCL,DOWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "almonab01",
		"teams" : "AZU,CLB · DOWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "almonab01",
		"teams" : "CLB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "almonab01",
		"teams" : "AZU · DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "gordoal01",
		"teams" : "SPS · AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "gordoal01",
		"teams" : "WCH · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "gordoal01",
		"teams" : "OMA,NTA,ROY · PCL,TL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "gordoal01",
		"teams" : "OMA,WMT · PCL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "gordoal01",
		"teams" : "OMA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "gordoal01",
		"teams" : "NTA,OMA · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "gordoal01",
		"teams" : "OMA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "moustmi01",
		"teams" : "IDF · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "moustmi01",
		"teams" : "BUR · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "moustmi01",
		"teams" : "WMT,SPS · CARL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "moustmi01",
		"teams" : "NTA,OMA · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "moustmi01",
		"teams" : "OMA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "moustmi01",
		"teams" : "LRA · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "moustmi01",
		"teams" : "OMA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "moustmi01",
		"teams" : "NTA · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "escobal02",
		"teams" : "HEL · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "escobal02",
		"teams" : "CHL,PEA · SALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "escobal02",
		"teams" : "BRE,LRA · FLOR,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "escobal02",
		"teams" : "BRE,HVL,LRA · FLOR,SOUL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "escobal02",
		"teams" : "HVL,LRA · SOUL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "escobal02",
		"teams" : "NVL,LRA · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "escobal02",
		"teams" : "LRA · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "escobal02",
		"teams" : "LRA · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "escobal02",
		"teams" : "LRA · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "merriwh01",
		"teams" : "BUR · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "merriwh01",
		"teams" : "WMT · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "merriwh01",
		"teams" : "WMT,NTA,SPS · CARL,TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "merriwh01",
		"teams" : "NTA · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "merriwh01",
		"teams" : "OMA,NTA,CUL · PCL,TL,MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "merriwh01",
		"teams" : "OMA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "merriwh01",
		"teams" : "OMA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "merriwh01",
		"teams" : "OMA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "dudalu01",
		"teams" : "BKN,WKI · NYPL,HIWB",
		"teamspitcher" : ""
	},
	{
		"player" : "dudalu01",
		"teams" : "SCE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "dudalu01",
		"teams" : "BNG,SPS · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "dudalu01",
		"teams" : "BFL,BNG · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "dudalu01",
		"teams" : "BFL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "dudalu01",
		"teams" : "BFL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "dudalu01",
		"teams" : "LVG,SCE,MET · PCL,FLOR,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "dudalu01",
		"teams" : "BNG · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "dudalu01",
		"teams" : "SCE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "dudalu01",
		"teams" : "OMA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezsa02",
		"teams" : "ROY · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "perezsa02",
		"teams" : "IDF,BRL · PION,APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "perezsa02",
		"teams" : "IDF,BUR · PION,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "perezsa02",
		"teams" : "WMT,SPS · CARL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezsa02",
		"teams" : "NTA,OMA · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezsa02",
		"teams" : "LGU,OMA · VEWL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezsa02",
		"teams" : "LGU · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezsa02",
		"teams" : "OMA,NTA · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "rondohe01",
		"teams" : "10.6",
		"teamspitcher" : "INS GULF"
	},
	{
		"player" : "rondohe01",
		"teams" : "9.5",
		"teamspitcher" : "LCO SALL"
	},
	{
		"player" : "rondohe01",
		"teams" : "8.1",
		"teamspitcher" : "KIN CARL"
	},
	{
		"player" : "rondohe01",
		"teams" : "8.7",
		"teamspitcher" : "CLB,AKR,CCS IL,EL,VEWL"
	},
	{
		"player" : "rondohe01",
		"teams" : "13.6",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "rondohe01",
		"teams" : "6.9",
		"teamspitcher" : "CCS,MHV VEWL,NYPL"
	},
	{
		"player" : "rondohe01",
		"teams" : "6.1",
		"teamspitcher" : "CCS,AKR,INS VEWL,EL,ARIZ"
	},
	{
		"player" : "rondohe01",
		"teams" : "11.7",
		"teamspitcher" : "CCS VEWL"
	},
	{
		"player" : "osunaro01",
		"teams" : "11.4",
		"teamspitcher" : "MCD MEX"
	},
	{
		"player" : "osunaro01",
		"teams" : "6.6",
		"teamspitcher" : "BLD,VAN APPY,NORW"
	},
	{
		"player" : "osunaro01",
		"teams" : "8.3",
		"teamspitcher" : "LNS MIDW"
	},
	{
		"player" : "osunaro01",
		"teams" : "12.7",
		"teamspitcher" : "DUN,MES,BJY FLOR,AZFL,GULF"
	},
	{
		"player" : "osunaro01",
		"teams" : "10.3",
		"teamspitcher" : "BFL,DUN,CPC,BJY IL,FLOR,TL,GULF"
	},
	{
		"player" : "valdefr01",
		"teams" : "8.8",
		"teamspitcher" : "ARS DOSL"
	},
	{
		"player" : "valdefr01",
		"teams" : "8.3",
		"teamspitcher" : "DAV,TRC,GRE,LNR MIDW,NYPL,APPY,CALL"
	},
	{
		"player" : "valdefr01",
		"teams" : "8.7",
		"teamspitcher" : "BUI,CPC,MES CARL,TL,AZFL"
	},
	{
		"player" : "valdefr01",
		"teams" : "8.5",
		"teamspitcher" : "CPC,FRE,AGU TL,PCL,DOWL"
	},
	{
		"player" : "hoytja01",
		"teams" : "8.1",
		"teamspitcher" : "VIL MEX"
	},
	{
		"player" : "hoytja01",
		"teams" : "6.1",
		"teamspitcher" : "LBG,MSS CARL,SOUL"
	},
	{
		"player" : "hoytja01",
		"teams" : "8.3",
		"teamspitcher" : "MSS,GWI,GIG SOUL,IL,DOWL"
	},
	{
		"player" : "hoytja01",
		"teams" : "8.3",
		"teamspitcher" : "FRE,LRA PCL,VEWL"
	},
	{
		"player" : "hoytja01",
		"teams" : "4.7",
		"teamspitcher" : "FRE PCL"
	},
	{
		"player" : "hoytja01",
		"teams" : "6.4",
		"teamspitcher" : "FRE PCL"
	},
	{
		"player" : "hoytja01",
		"teams" : "7.0",
		"teamspitcher" : "FRE,CLB PCL,IL"
	},
	{
		"player" : "smithjo05",
		"teams" : "6.1",
		"teamspitcher" : "BKN,BNG NYPL,EL"
	},
	{
		"player" : "smithjo05",
		"teams" : "7.0",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "smithjo05",
		"teams" : "7.2",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "smithjo05",
		"teams" : "6.7",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "smithjo05",
		"teams" : "2.5",
		"teamspitcher" : "AKR EL"
	},
	{
		"player" : "smithjo05",
		"teams" : "2.3",
		"teamspitcher" : "SBR,IWA CALL,PCL"
	},
	{
		"player" : "smithjo05",
		"teams" : "11.6",
		"teamspitcher" : "BFL IL"
	},
	{
		"player" : "smithjo05",
		"teams" : "18.0",
		"teamspitcher" : "CPC TL"
	},
	{
		"player" : "harriwi10",
		"teams" : "5.8",
		"teamspitcher" : "TRI NORW"
	},
	{
		"player" : "harriwi10",
		"teams" : "7.2",
		"teamspitcher" : "AVL SALL"
	},
	{
		"player" : "harriwi10",
		"teams" : "7.4",
		"teamspitcher" : "MOD CALL"
	},
	{
		"player" : "harriwi10",
		"teams" : "9.0",
		"teamspitcher" : "TRI NORW"
	},
	{
		"player" : "harriwi10",
		"teams" : "8.6",
		"teamspitcher" : "MOD CALL"
	},
	{
		"player" : "harriwi10",
		"teams" : "6.1",
		"teamspitcher" : "TUL,CSP TL,PCL"
	},
	{
		"player" : "harriwi10",
		"teams" : "9.3",
		"teamspitcher" : "REN PCL"
	},
	{
		"player" : "harriwi10",
		"teams" : "6.7",
		"teamspitcher" : "REN PCL"
	},
	{
		"player" : "harriwi10",
		"teams" : "6.0",
		"teamspitcher" : "BUI,CPC,FRE CARL,TL,PCL"
	},
	{
		"player" : "sippto01",
		"teams" : "7.0",
		"teamspitcher" : "MHV NYPL"
	},
	{
		"player" : "sippto01",
		"teams" : "6.3",
		"teamspitcher" : "LCO,KIN SALL,CARL"
	},
	{
		"player" : "sippto01",
		"teams" : "6.1",
		"teamspitcher" : "AKR,PEA EL,AZFL"
	},
	{
		"player" : "sippto01",
		"teams" : "6.1",
		"teamspitcher" : "AKR,KIN,INS EL,CARL,GULF"
	},
	{
		"player" : "sippto01",
		"teams" : "9.0",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "sippto01",
		"teams" : "2.7",
		"teamspitcher" : "REN PCL"
	},
	{
		"player" : "sippto01",
		"teams" : "8.6",
		"teamspitcher" : "ELP PCL"
	},
	{
		"player" : "sippto01",
		"teams" : "6.0",
		"teamspitcher" : "FRE,CPC PCL,TL"
	},
	{
		"player" : "devench02",
		"teams" : "9.0",
		"teamspitcher" : "GRF PION"
	},
	{
		"player" : "devench02",
		"teams" : "8.5",
		"teamspitcher" : "KAN,LEX SALL"
	},
	{
		"player" : "devench02",
		"teams" : "12.6",
		"teamspitcher" : "LNR,DAV CALL,MIDW"
	},
	{
		"player" : "devench02",
		"teams" : "7.9",
		"teamspitcher" : "LNR,CPC CALL,TL"
	},
	{
		"player" : "devench02",
		"teams" : "9.2",
		"teamspitcher" : "CPC,LGU TL,VEWL"
	},
	{
		"player" : "devench02",
		"teams" : "21.2",
		"teamspitcher" : "CPC,FRE TL,PCL"
	},
	{
		"player" : "jamesjo02",
		"teams" : "7.9",
		"teamspitcher" : "GRE APPY"
	},
	{
		"player" : "jamesjo02",
		"teams" : "7.9",
		"teamspitcher" : "DAV MIDW"
	},
	{
		"player" : "jamesjo02",
		"teams" : "9.8",
		"teamspitcher" : "LNR CALL"
	},
	{
		"player" : "jamesjo02",
		"teams" : "9.4",
		"teamspitcher" : "CPC TL"
	},
	{
		"player" : "jamesjo02",
		"teams" : "6.2",
		"teamspitcher" : "FRE,CPC PCL,TL"
	},
	{
		"player" : "pressry01",
		"teams" : "9.1",
		"teamspitcher" : "RES GULF"
	},
	{
		"player" : "pressry01",
		"teams" : "7.2",
		"teamspitcher" : "LOW NYPL"
	},
	{
		"player" : "pressry01",
		"teams" : "8.7",
		"teamspitcher" : "GRV SALL"
	},
	{
		"player" : "pressry01",
		"teams" : "8.7",
		"teamspitcher" : "SAL CARL"
	},
	{
		"player" : "pressry01",
		"teams" : "9.7",
		"teamspitcher" : "SAL,PRT,SPS CARL,EL,AZFL"
	},
	{
		"player" : "pressry01",
		"teams" : "8.2",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "pressry01",
		"teams" : "5.4",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "pressry01",
		"teams" : "4.5",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "perezci01",
		"teams" : "8.9",
		"teamspitcher" : "MTZ CNS"
	},
	{
		"player" : "perezci01",
		"teams" : "7.4",
		"teamspitcher" : "MTZ CNS"
	},
	{
		"player" : "perezci01",
		"teams" : "9.0",
		"teamspitcher" : "DAV,BUI,CPC MIDW,CARL,TL"
	},
	{
		"player" : "perezci01",
		"teams" : "7.2",
		"teamspitcher" : "CPC,FRE TL,PCL"
	},
	{
		"player" : "deetzde01",
		"teams" : "10.7",
		"teamspitcher" : "GRE APPY"
	},
	{
		"player" : "deetzde01",
		"teams" : "5.5",
		"teamspitcher" : "DAV,TRC MIDW,NYPL"
	},
	{
		"player" : "deetzde01",
		"teams" : "7.9",
		"teamspitcher" : "LNR,CPC CALL,TL"
	},
	{
		"player" : "deetzde01",
		"teams" : "7.7",
		"teamspitcher" : "FRE,CPC,MES PCL,TL,AZFL"
	},
	{
		"player" : "deetzde01",
		"teams" : "6.0",
		"teamspitcher" : "FRE,CPC,DAV PCL,TL,MIDW"
	},
	{
		"player" : "mchugco01",
		"teams" : "10.3",
		"teamspitcher" : "KPT APPY"
	},
	{
		"player" : "mchugco01",
		"teams" : "7.3",
		"teamspitcher" : "BKN NYPL"
	},
	{
		"player" : "mchugco01",
		"teams" : "9.5",
		"teamspitcher" : "SAV SALL"
	},
	{
		"player" : "mchugco01",
		"teams" : "9.6",
		"teamspitcher" : "BNG,SCE,PEA EL,FLOR,AZFL"
	},
	{
		"player" : "mchugco01",
		"teams" : "7.5",
		"teamspitcher" : "BNG,BFL EL,IL"
	},
	{
		"player" : "mchugco01",
		"teams" : "9.0",
		"teamspitcher" : "LVG,CSP,CCS,TUL PCL,VEWL,TL"
	},
	{
		"player" : "mchugco01",
		"teams" : "7.1",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "mchugco01",
		"teams" : "11.8",
		"teamspitcher" : "CPC,FRE TL,PCL"
	},
	{
		"player" : "gileske01",
		"teams" : "11.6",
		"teamspitcher" : "CLR GULF"
	},
	{
		"player" : "gileske01",
		"teams" : "7.0",
		"teamspitcher" : "LWD,CLW SALL,FLOR"
	},
	{
		"player" : "gileske01",
		"teams" : "7.8",
		"teamspitcher" : "CLW,PEA FLOR,AZFL"
	},
	{
		"player" : "gileske01",
		"teams" : "5.7",
		"teamspitcher" : "REA,LHV EL,IL"
	},
	{
		"player" : "gileske01",
		"teams" : "15.2",
		"teamspitcher" : "FRE PCL"
	},
	{
		"player" : "guduare01",
		"teams" : "16.8",
		"teamspitcher" : "ARS DOSL"
	},
	{
		"player" : "guduare01",
		"teams" : "6.1",
		"teamspitcher" : "ARS DOSL"
	},
	{
		"player" : "guduare01",
		"teams" : "12.8",
		"teamspitcher" : "AST GULF"
	},
	{
		"player" : "guduare01",
		"teams" : "7.8",
		"teamspitcher" : "AST,OKC GULF,PCL"
	},
	{
		"player" : "guduare01",
		"teams" : "10.8",
		"teamspitcher" : "GRE APPY"
	},
	{
		"player" : "guduare01",
		"teams" : "8.0",
		"teamspitcher" : "LNR,CPC,DAV,GIG CALL,TL,MIDW,DOWL"
	},
	{
		"player" : "guduare01",
		"teams" : "8.7",
		"teamspitcher" : "FRE,CPC,GIG PCL,TL,DOWL"
	},
	{
		"player" : "guduare01",
		"teams" : "12.0",
		"teamspitcher" : "FRE,GIG PCL,DOWL"
	},
	{
		"player" : "guduare01",
		"teams" : "7.5",
		"teamspitcher" : "FRE PCL"
	},
	{
		"player" : "peacobr01",
		"teams" : "8.7",
		"teamspitcher" : "NAT GULF"
	},
	{
		"player" : "peacobr01",
		"teams" : "8.7",
		"teamspitcher" : "VMT,HGR NYPL,SALL"
	},
	{
		"player" : "peacobr01",
		"teams" : "9.1",
		"teamspitcher" : "HGR,POT SALL,CARL"
	},
	{
		"player" : "peacobr01",
		"teams" : "8.9",
		"teamspitcher" : "POT,HRB,SCO CARL,EL,AZFL"
	},
	{
		"player" : "peacobr01",
		"teams" : "6.0",
		"teamspitcher" : "HRB,SYR EL,IL"
	},
	{
		"player" : "peacobr01",
		"teams" : "9.8",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "peacobr01",
		"teams" : "7.4",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "peacobr01",
		"teams" : "11.1",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "peacobr01",
		"teams" : "2.7",
		"teamspitcher" : "FRE,CPC PCL,TL"
	},
	{
		"player" : "peacobr01",
		"teams" : "9.4",
		"teamspitcher" : "FRE PCL"
	},
	{
		"player" : "mcculla02",
		"teams" : "6.9",
		"teamspitcher" : "GRE,AST APPY,GULF"
	},
	{
		"player" : "mcculla02",
		"teams" : "7.9",
		"teamspitcher" : "DAV MIDW"
	},
	{
		"player" : "mcculla02",
		"teams" : "8.8",
		"teamspitcher" : "LNR CALL"
	},
	{
		"player" : "mcculla02",
		"teams" : "4.5",
		"teamspitcher" : "CPC TL"
	},
	{
		"player" : "mcculla02",
		"teams" : "5.6",
		"teamspitcher" : "FRE,CPC PCL,TL"
	},
	{
		"player" : "mcculla02",
		"teams" : "9.0",
		"teamspitcher" : "CPC,FRE TL,PCL"
	},
	{
		"player" : "keuchda01",
		"teams" : "8.3",
		"teamspitcher" : "TRC NYPL"
	},
	{
		"player" : "keuchda01",
		"teams" : "9.7",
		"teamspitcher" : "LNR,CPC CALL,TL"
	},
	{
		"player" : "keuchda01",
		"teams" : "9.6",
		"teamspitcher" : "CPC,OKC,SRV TL,PCL,AZFL"
	},
	{
		"player" : "keuchda01",
		"teams" : "9.0",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "keuchda01",
		"teams" : "4.5",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "keuchda01",
		"teams" : "5.6",
		"teamspitcher" : "TRC,CPC NYPL,TL"
	},
	{
		"player" : "verlaju01",
		"teams" : "6.1",
		"teamspitcher" : "LAK,ERI FLOR,EL"
	},
	{
		"player" : "verlaju01",
		"teams" : "10.8",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "mortoch02",
		"teams" : "8.4",
		"teamspitcher" : "BVS GULF"
	},
	{
		"player" : "mortoch02",
		"teams" : "10.8",
		"teamspitcher" : "DAN APPY"
	},
	{
		"player" : "mortoch02",
		"teams" : "10.8",
		"teamspitcher" : "ROM SALL"
	},
	{
		"player" : "mortoch02",
		"teams" : "9.0",
		"teamspitcher" : "ROM SALL"
	},
	{
		"player" : "mortoch02",
		"teams" : "10.4",
		"teamspitcher" : "MYR CARL"
	},
	{
		"player" : "mortoch02",
		"teams" : "8.5",
		"teamspitcher" : "MSS,PEA SOUL,AZFL"
	},
	{
		"player" : "mortoch02",
		"teams" : "5.8",
		"teamspitcher" : "RMD IL"
	},
	{
		"player" : "mortoch02",
		"teams" : "7.0",
		"teamspitcher" : "GWI,INA IL"
	},
	{
		"player" : "mortoch02",
		"teams" : "8.9",
		"teamspitcher" : "INA,AZU IL,DOWL"
	},
	{
		"player" : "mortoch02",
		"teams" : "7.0",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "mortoch02",
		"teams" : "6.4",
		"teamspitcher" : "INA,ATO,BDT IL,EL,FLOR"
	},
	{
		"player" : "mortoch02",
		"teams" : "9.0",
		"teamspitcher" : "ATO EL"
	},
	{
		"player" : "mortoch02",
		"teams" : "6.6",
		"teamspitcher" : "INA,ATO IL,EL"
	},
	{
		"player" : "mortoch02",
		"teams" : "4.4",
		"teamspitcher" : "FRE,CPC PCL,TL"
	},
	{
		"player" : "colege01",
		"teams" : "6.0",
		"teamspitcher" : "MES AZFL"
	},
	{
		"player" : "colege01",
		"teams" : "7.7",
		"teamspitcher" : "BDT,ATO,INA FLOR,EL,IL"
	},
	{
		"player" : "colege01",
		"teams" : "5.8",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "colege01",
		"teams" : "8.5",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "colege01",
		"teams" : "4.5",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "reedaj01",
		"teams" : "DAV,TRC · MIDW,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "reedaj01",
		"teams" : "LNR,CPC,GLN · CALL,TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "reedaj01",
		"teams" : "FRE · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "reedaj01",
		"teams" : "FRE · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "reedaj01",
		"teams" : "FRE · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "strawmy01",
		"teams" : "GRE · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "strawmy01",
		"teams" : "DAV,LNR · MIDW,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "strawmy01",
		"teams" : "BUI,CPC · CARL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "strawmy01",
		"teams" : "FRE,CPC · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "federti01",
		"teams" : "LOW · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "federti01",
		"teams" : "GRV,SAL · SALL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "federti01",
		"teams" : "SAL · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "federti01",
		"teams" : "PRT,ABQ,LCY · EL,PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "federti01",
		"teams" : "ABQ,LCY · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "federti01",
		"teams" : "ABQ · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "federti01",
		"teams" : "ABQ,NAV · PCL,MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "federti01",
		"teams" : "ELP,FWA · PCL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "federti01",
		"teams" : "IWA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "federti01",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "federti01",
		"teams" : "FRE,LOU · PCL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "tuckeky01",
		"teams" : "AST,GRE · GULF,APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "tuckeky01",
		"teams" : "DAV,LNR · MIDW,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "tuckeky01",
		"teams" : "CPC,BUI,MES · TL,CARL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "tuckeky01",
		"teams" : "FRE · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "fishede01",
		"teams" : "TRC,AST · NYPL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "fishede01",
		"teams" : "LNR,DAV,GLN · CALL,MIDW,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "fishede01",
		"teams" : "CPC,FRE · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "fishede01",
		"teams" : "FRE · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "fishede01",
		"teams" : "FRE · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "davisjd01",
		"teams" : "DAV,TRC · MIDW,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "davisjd01",
		"teams" : "LNR,GLN · CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "davisjd01",
		"teams" : "CPC · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "davisjd01",
		"teams" : "CPC,FRE · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "davisjd01",
		"teams" : "FRE · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "maldoma01",
		"teams" : "ANG,MGZ · ARIZ,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "maldoma01",
		"teams" : "ANG,ORM · ARIZ,PION",
		"teamspitcher" : ""
	},
	{
		"player" : "maldoma01",
		"teams" : "ANG · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "maldoma01",
		"teams" : "CHL · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "maldoma01",
		"teams" : "HVL,BRE,MGZ · SOUL,FLOR,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "maldoma01",
		"teams" : "BRE,MGZ,APP,NVL · FLOR,PRWL,MIDW,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "maldoma01",
		"teams" : "NVL,HVL,MGZ,BRE · PCL,SOUL,PRWL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "maldoma01",
		"teams" : "HVL,NVL,MGZ · SOUL,PCL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "maldoma01",
		"teams" : "NVL,MGZ · PCL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "maldoma01",
		"teams" : "MGZ · PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "maldoma01",
		"teams" : "MGZ · PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "maldoma01",
		"teams" : "MGZ · PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "mccanbr01",
		"teams" : "BVS · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "mccanbr01",
		"teams" : "ROM · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "mccanbr01",
		"teams" : "MYR,GCN · CARL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "mccanbr01",
		"teams" : "MSS · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "mccanbr01",
		"teams" : "ROM · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "mccanbr01",
		"teams" : "MYR,GWI · CARL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "mccanbr01",
		"teams" : "GWI · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "mccanbr01",
		"teams" : "ROM,GWI · SALL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "mccanbr01",
		"teams" : "CPC,FRE · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "whitety01",
		"teams" : "TRC,GRE,AST · NYPL,APPY,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "whitety01",
		"teams" : "DAV,LNR · MIDW,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "whitety01",
		"teams" : "FRE,CPC,ESS · PCL,TL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "whitety01",
		"teams" : "FRE · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "whitety01",
		"teams" : "FRE · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "whitety01",
		"teams" : "FRE · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "kempto01",
		"teams" : "TRC,DAV · NYPL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "kempto01",
		"teams" : "LNR,CPC · CALL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "kempto01",
		"teams" : "FRE,CPC · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "kempto01",
		"teams" : "FRE · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "kempto01",
		"teams" : "FRE · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "kempto01",
		"teams" : "FRE · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "springe01",
		"teams" : "TRC · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "springe01",
		"teams" : "LNR,CPC,MES · CALL,TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "springe01",
		"teams" : "CPC,OKC · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "springe01",
		"teams" : "OKC,DAV · PCL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "springe01",
		"teams" : "CPC · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "gattiev01",
		"teams" : "DAN · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "gattiev01",
		"teams" : "ROM · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "gattiev01",
		"teams" : "ZUL,MSS,LBG,KIS · VEWL,SOUL,CARL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "gattiev01",
		"teams" : "GWI · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "gattiev01",
		"teams" : "GWI · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "gattiev01",
		"teams" : "CPC · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "gattiev01",
		"teams" : "CPC · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "reddijo01",
		"teams" : "GRV,PRT · SALL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "reddijo01",
		"teams" : "LNR,PRT,SCO,GRV · CALL,EL,AZFL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "reddijo01",
		"teams" : "PRT,PAW · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "reddijo01",
		"teams" : "PAW,GIG · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "reddijo01",
		"teams" : "PAW · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "reddijo01",
		"teams" : "SAC,STK · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "reddijo01",
		"teams" : "STK,SAC · CALL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "reddijo01",
		"teams" : "STK · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "reddijo01",
		"teams" : "NVL · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "reddijo01",
		"teams" : "CPC · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "marisja01",
		"teams" : "LNS,BJY · MIDW,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "marisja01",
		"teams" : "LNS · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "marisja01",
		"teams" : "DUN,MAN,SRV · FLOR,EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "marisja01",
		"teams" : "JCK,JUP · SOUL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "marisja01",
		"teams" : "NOR · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "marisja01",
		"teams" : "FRE · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "marisja01",
		"teams" : "FRE · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "marisja01",
		"teams" : "CPC · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "marisja01",
		"teams" : "FRE,CPC · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzama01",
		"teams" : "CBZ,CUB · ARIZ,DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzama01",
		"teams" : "CBZ · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzama01",
		"teams" : "BOI,PEO,CCS · NORW,MIDW,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzama01",
		"teams" : "DYT,CCS · FLOR,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzama01",
		"teams" : "KNX,CCS,DYT · SOUL,VEWL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzama01",
		"teams" : "KNX,IWA,CCS · SOUL,PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzama01",
		"teams" : "CCS,OKC · VEWL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzama01",
		"teams" : "OKC,ZUL · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzama01",
		"teams" : "ARA · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "bregmal01",
		"teams" : "LNR,DAV · CALL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "bregmal01",
		"teams" : "CPC,FRE · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "correca01",
		"teams" : "AST,CRO,GRE · GULF,PRWL,APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "correca01",
		"teams" : "DAV · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "correca01",
		"teams" : "LNR · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "correca01",
		"teams" : "CPC,FRE · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "correca01",
		"teams" : "FRE,CPC · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "correca01",
		"teams" : "CPC · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "altuvjo01",
		"teams" : "VN1 · VESL",
		"teamspitcher" : ""
	},
	{
		"player" : "altuvjo01",
		"teams" : "GRE · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "altuvjo01",
		"teams" : "GRE,TRC · APPY,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "altuvjo01",
		"teams" : "LEX,MGL,LNR · SALL,VEWL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "altuvjo01",
		"teams" : "MGL,LNR,CPC · VEWL,CALL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "altuvjo01",
		"teams" : "MGL · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "altuvjo01",
		"teams" : "FRE · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "gourryu01",
		"teams" : "SNC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "gourryu01",
		"teams" : "SNC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "gourryu01",
		"teams" : "SNC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "gourryu01",
		"teams" : "SNC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "gourryu01",
		"teams" : "SNC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "gourryu01",
		"teams" : "SNC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "gourryu01",
		"teams" : "SNC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "gourryu01",
		"teams" : "SNC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "gourryu01",
		"teams" : "SNC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "gourryu01",
		"teams" : "SNC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "gourryu01",
		"teams" : "SNC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "gourryu01",
		"teams" : "SNC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "gourryu01",
		"teams" : "IDT · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "gourryu01",
		"teams" : "YKO,IDT · JPCL,CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "gourryu01",
		"teams" : "IDT · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "gourryu01",
		"teams" : "FRE,CPC,LNR,AST · PCL,TL,CALL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "gourryu01",
		"teams" : "CPC · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "stassma01",
		"teams" : "VAN,ATH · NORW,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "stassma01",
		"teams" : "KNC · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "stassma01",
		"teams" : "STK · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "stassma01",
		"teams" : "STK,PHO · CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "stassma01",
		"teams" : "CPC · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "stassma01",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "stassma01",
		"teams" : "FRE,MGZ · PCL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "stassma01",
		"teams" : "FRE,AZU · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "stassma01",
		"teams" : "FRE,CPC · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "reiniza01",
		"teams" : "5.7",
		"teamspitcher" : "NCH NYPL"
	},
	{
		"player" : "reiniza01",
		"teams" : "7.5",
		"teamspitcher" : "WMI,GLN MIDW,AZFL"
	},
	{
		"player" : "reiniza01",
		"teams" : "9.5",
		"teamspitcher" : "LAK,ERI FLOR,EL"
	},
	{
		"player" : "reiniza01",
		"teams" : "3.1",
		"teamspitcher" : "TGW,LAK GULF,FLOR"
	},
	{
		"player" : "reiniza01",
		"teams" : "5.9",
		"teamspitcher" : "LAK,ERI,TOL FLOR,EL,IL"
	},
	{
		"player" : "reiniza01",
		"teams" : "8.1",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "greensh02",
		"teams" : "11.7",
		"teamspitcher" : "YNK GULF"
	},
	{
		"player" : "greensh02",
		"teams" : "9.3",
		"teamspitcher" : "STI,CHS NYPL,SALL"
	},
	{
		"player" : "greensh02",
		"teams" : "9.2",
		"teamspitcher" : "CHS SALL"
	},
	{
		"player" : "greensh02",
		"teams" : "9.1",
		"teamspitcher" : "TAM FLOR"
	},
	{
		"player" : "greensh02",
		"teams" : "10.2",
		"teamspitcher" : "TRE,TAM EL,FLOR"
	},
	{
		"player" : "greensh02",
		"teams" : "10.7",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "greensh02",
		"teams" : "9.5",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "greensh02",
		"teams" : "9.0",
		"teamspitcher" : "TOL,WMI IL,MIDW"
	},
	{
		"player" : "hardybl01",
		"teams" : "8.8",
		"teamspitcher" : "IDF PION"
	},
	{
		"player" : "hardybl01",
		"teams" : "6.9",
		"teamspitcher" : "BUR MIDW"
	},
	{
		"player" : "hardybl01",
		"teams" : "7.3",
		"teamspitcher" : "OMA,NTA,ESC PCL,TL,DOWL"
	},
	{
		"player" : "hardybl01",
		"teams" : "8.7",
		"teamspitcher" : "NTA,OMA TL,PCL"
	},
	{
		"player" : "hardybl01",
		"teams" : "10.2",
		"teamspitcher" : "OMA,NTA,MGA PCL,TL,VEWL"
	},
	{
		"player" : "hardybl01",
		"teams" : "6.8",
		"teamspitcher" : "TOL,ERI,MES IL,EL,AZFL"
	},
	{
		"player" : "hardybl01",
		"teams" : "6.7",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "hardybl01",
		"teams" : "5.8",
		"teamspitcher" : "TOL,LAK IL,FLOR"
	},
	{
		"player" : "hardybl01",
		"teams" : "7.1",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "hardybl01",
		"teams" : "4.8",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "mcallza01",
		"teams" : "9.0",
		"teamspitcher" : "YNK GULF"
	},
	{
		"player" : "mcallza01",
		"teams" : "10.1",
		"teamspitcher" : "STI NYPL"
	},
	{
		"player" : "mcallza01",
		"teams" : "7.9",
		"teamspitcher" : "TAM,CHS FLOR,SALL"
	},
	{
		"player" : "mcallza01",
		"teams" : "7.3",
		"teamspitcher" : "TRE EL"
	},
	{
		"player" : "mcallza01",
		"teams" : "11.1",
		"teamspitcher" : "SWB,CLB IL"
	},
	{
		"player" : "mcallza01",
		"teams" : "9.0",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "mcallza01",
		"teams" : "8.4",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "mcallza01",
		"teams" : "5.8",
		"teamspitcher" : "CLB,AKR IL,EL"
	},
	{
		"player" : "mcallza01",
		"teams" : "8.1",
		"teamspitcher" : "CLB,LCO IL,MIDW"
	},
	{
		"player" : "mcallza01",
		"teams" : "9.0",
		"teamspitcher" : "CLB,AKR IL,EL"
	},
	{
		"player" : "mcallza01",
		"teams" : "9.0",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "wilsoal01",
		"teams" : "2.5",
		"teamspitcher" : "LOW NYPL"
	},
	{
		"player" : "wilsoal01",
		"teams" : "9.3",
		"teamspitcher" : "PRT,SAL EL,CARL"
	},
	{
		"player" : "wilsoal01",
		"teams" : "8.3",
		"teamspitcher" : "PRT,PAW EL,IL"
	},
	{
		"player" : "wilsoal01",
		"teams" : "9.4",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "wilsoal01",
		"teams" : "9.0",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "wilsoal01",
		"teams" : "8.3",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "wilsoal01",
		"teams" : "6.8",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "wilsoal01",
		"teams" : "16.2",
		"teamspitcher" : "LAK,TOL FLOR,IL"
	},
	{
		"player" : "wilsoal01",
		"teams" : "0.0",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "alcanvi01",
		"teams" : "6.4",
		"teamspitcher" : "ANS DOSL"
	},
	{
		"player" : "alcanvi01",
		"teams" : "11.1",
		"teamspitcher" : "ORM PION"
	},
	{
		"player" : "alcanvi01",
		"teams" : "7.0",
		"teamspitcher" : "BUR MIDW"
	},
	{
		"player" : "alcanvi01",
		"teams" : "10.1",
		"teamspitcher" : "SBR CALL"
	},
	{
		"player" : "alcanvi01",
		"teams" : "9.0",
		"teamspitcher" : "ARK,SCO TL,AZFL"
	},
	{
		"player" : "alcanvi01",
		"teams" : "8.2",
		"teamspitcher" : "ERI,TOL EL,IL"
	},
	{
		"player" : "alcanvi01",
		"teams" : "9.1",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "hallma02",
		"teams" : "8.7",
		"teamspitcher" : "NCH,LAT NYPL,GULF"
	},
	{
		"player" : "hallma02",
		"teams" : "7.8",
		"teamspitcher" : "WMI,LAK MIDW,FLOR"
	},
	{
		"player" : "hallma02",
		"teams" : "8.3",
		"teamspitcher" : "LAK,ERI FLOR,EL"
	},
	{
		"player" : "hallma02",
		"teams" : "6.2",
		"teamspitcher" : "TOL,ERI IL,EL"
	},
	{
		"player" : "colemlo01",
		"teams" : "4.2",
		"teamspitcher" : "WMT,BUR CARL,MIDW"
	},
	{
		"player" : "colemlo01",
		"teams" : "6.1",
		"teamspitcher" : "NTA,OMA,ESC TL,PCL,DOWL"
	},
	{
		"player" : "colemlo01",
		"teams" : "5.1",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "colemlo01",
		"teams" : "5.9",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "colemlo01",
		"teams" : "6.9",
		"teamspitcher" : "OMA,WMT PCL,CARL"
	},
	{
		"player" : "colemlo01",
		"teams" : "7.3",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "colemlo01",
		"teams" : "6.8",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "colemlo01",
		"teams" : "11.3",
		"teamspitcher" : "OKC,DGR PCL,ARIZ"
	},
	{
		"player" : "colemlo01",
		"teams" : "6.2",
		"teamspitcher" : "LOU,REN IL,PCL"
	},
	{
		"player" : "colemlo01",
		"teams" : "4.8",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "smokejo01",
		"teams" : "4.5",
		"teamspitcher" : "VMT NYPL"
	},
	{
		"player" : "smokejo01",
		"teams" : "10.4",
		"teamspitcher" : "NAT,HGR GULF,SALL"
	},
	{
		"player" : "smokejo01",
		"teams" : "9.7",
		"teamspitcher" : "NAT GULF"
	},
	{
		"player" : "smokejo01",
		"teams" : "10.4",
		"teamspitcher" : "HGR SALL"
	},
	{
		"player" : "smokejo01",
		"teams" : "5.7",
		"teamspitcher" : "POT CARL"
	},
	{
		"player" : "smokejo01",
		"teams" : "7.4",
		"teamspitcher" : "NAT,HGR,POT GULF,SALL,CARL"
	},
	{
		"player" : "smokejo01",
		"teams" : "7.2",
		"teamspitcher" : "SCE,BNG,SAV FLOR,EL,SALL"
	},
	{
		"player" : "smokejo01",
		"teams" : "10.4",
		"teamspitcher" : "LVG PCL"
	},
	{
		"player" : "smokejo01",
		"teams" : "7.7",
		"teamspitcher" : "LVG,SCE,BNG PCL,FLOR,EL"
	},
	{
		"player" : "smokejo01",
		"teams" : "8.9",
		"teamspitcher" : "INA,TOL IL"
	},
	{
		"player" : "turneja01",
		"teams" : "8.3",
		"teamspitcher" : "LAK,WMI FLOR,MIDW"
	},
	{
		"player" : "turneja01",
		"teams" : "8.0",
		"teamspitcher" : "ERI,TOL EL,IL"
	},
	{
		"player" : "turneja01",
		"teams" : "7.7",
		"teamspitcher" : "TOL,NOR,LAK IL,PCL,FLOR"
	},
	{
		"player" : "turneja01",
		"teams" : "9.4",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "turneja01",
		"teams" : "5.7",
		"teamspitcher" : "JUP FLOR"
	},
	{
		"player" : "turneja01",
		"teams" : "5.0",
		"teamspitcher" : "KNX SOUL"
	},
	{
		"player" : "turneja01",
		"teams" : "10.5",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "turneja01",
		"teams" : "9.9",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "turneja01",
		"teams" : "9.1",
		"teamspitcher" : "TOL,NOR IL,PCL"
	},
	{
		"player" : "jimenjo02",
		"teams" : "4.5",
		"teamspitcher" : "LAT GULF"
	},
	{
		"player" : "jimenjo02",
		"teams" : "5.7",
		"teamspitcher" : "NCH,CRO NYPL,PRWL"
	},
	{
		"player" : "jimenjo02",
		"teams" : "5.4",
		"teamspitcher" : "WMI,CRO MIDW,PRWL"
	},
	{
		"player" : "jimenjo02",
		"teams" : "4.4",
		"teamspitcher" : "ERI,LAK,TOL EL,FLOR,IL"
	},
	{
		"player" : "jimenjo02",
		"teams" : "6.9",
		"teamspitcher" : "TOL,LAK IL,FLOR"
	},
	{
		"player" : "baezsa01",
		"teams" : "10.2",
		"teamspitcher" : "TGR DOSL"
	},
	{
		"player" : "baezsa01",
		"teams" : "6.0",
		"teamspitcher" : "TGR DOSL"
	},
	{
		"player" : "baezsa01",
		"teams" : "9.0",
		"teamspitcher" : "LAT GULF"
	},
	{
		"player" : "baezsa01",
		"teams" : "10.1",
		"teamspitcher" : "NCH NYPL"
	},
	{
		"player" : "baezsa01",
		"teams" : "9.9",
		"teamspitcher" : "WMI MIDW"
	},
	{
		"player" : "baezsa01",
		"teams" : "8.8",
		"teamspitcher" : "LAK,ERI FLOR,EL"
	},
	{
		"player" : "baezsa01",
		"teams" : "10.4",
		"teamspitcher" : "ERI,MES EL,AZFL"
	},
	{
		"player" : "farmebu01",
		"teams" : "9.0",
		"teamspitcher" : "NCH NYPL"
	},
	{
		"player" : "farmebu01",
		"teams" : "8.2",
		"teamspitcher" : "WMI,ERI,TOL MIDW,EL,IL"
	},
	{
		"player" : "farmebu01",
		"teams" : "8.8",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "farmebu01",
		"teams" : "9.5",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "farmebu01",
		"teams" : "9.7",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "carpery01",
		"teams" : "3.4",
		"teamspitcher" : "HDV NYPL"
	},
	{
		"player" : "carpery01",
		"teams" : "9.2",
		"teamspitcher" : "BWG MIDW"
	},
	{
		"player" : "carpery01",
		"teams" : "10.0",
		"teamspitcher" : "POE FLOR"
	},
	{
		"player" : "carpery01",
		"teams" : "8.6",
		"teamspitcher" : "MOD CALL"
	},
	{
		"player" : "carpery01",
		"teams" : "8.9",
		"teamspitcher" : "NBR EL"
	},
	{
		"player" : "carpery01",
		"teams" : "13.4",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "carpery01",
		"teams" : "9.3",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "carpery01",
		"teams" : "11.0",
		"teamspitcher" : "TOL,LAK,TGW IL,FLOR,GULF"
	},
	{
		"player" : "fiersmi01",
		"teams" : "5.3",
		"teamspitcher" : "HEL,BRE,APP PION,FLOR,MIDW"
	},
	{
		"player" : "fiersmi01",
		"teams" : "7.6",
		"teamspitcher" : "BRE,HVL,SPS FLOR,SOUL,AZFL"
	},
	{
		"player" : "fiersmi01",
		"teams" : "6.0",
		"teamspitcher" : "NVL,HVL,CCS PCL,SOUL,VEWL"
	},
	{
		"player" : "fiersmi01",
		"teams" : "8.0",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "fiersmi01",
		"teams" : "9.2",
		"teamspitcher" : "NVL,CCS,BRE PCL,VEWL,FLOR"
	},
	{
		"player" : "fiersmi01",
		"teams" : "7.0",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "lewicar01",
		"teams" : "6.8",
		"teamspitcher" : "WMI,LAT MIDW,GULF"
	},
	{
		"player" : "lewicar01",
		"teams" : "9.9",
		"teamspitcher" : "WMI MIDW"
	},
	{
		"player" : "lewicar01",
		"teams" : "9.4",
		"teamspitcher" : "ERI,LAK,SRV EL,FLOR,AZFL"
	},
	{
		"player" : "lewicar01",
		"teams" : "8.6",
		"teamspitcher" : "ERI,TOL EL,IL"
	},
	{
		"player" : "lewicar01",
		"teams" : "9.3",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "barbajo01",
		"teams" : "8.2",
		"teamspitcher" : "EUG NORW"
	},
	{
		"player" : "barbajo01",
		"teams" : "6.4",
		"teamspitcher" : "FWA MIDW"
	},
	{
		"player" : "barbajo01",
		"teams" : "9.6",
		"teamspitcher" : "LEL,PEA CALL,AZFL"
	},
	{
		"player" : "barbajo01",
		"teams" : "7.5",
		"teamspitcher" : "SAN TL"
	},
	{
		"player" : "barbajo01",
		"teams" : "7.4",
		"teamspitcher" : "TRE,SWB EL,IL"
	},
	{
		"player" : "barbajo01",
		"teams" : "7.1",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "barbajo01",
		"teams" : "7.6",
		"teamspitcher" : "INA,SWB IL"
	},
	{
		"player" : "barbajo01",
		"teams" : "6.2",
		"teamspitcher" : "TOL,LAT,LAK IL,GULF,FLOR"
	},
	{
		"player" : "bellch02",
		"teams" : "7.4",
		"teamspitcher" : "HCK,SPO SALL,NORW"
	},
	{
		"player" : "bellch02",
		"teams" : "8.4",
		"teamspitcher" : "MYR CARL"
	},
	{
		"player" : "bellch02",
		"teams" : "8.1",
		"teamspitcher" : "RRK,FRI,MYR,LCY PCL,TL,CARL,DOWL"
	},
	{
		"player" : "bellch02",
		"teams" : "10.5",
		"teamspitcher" : "MYR,HCK,RRK CARL,SALL,PCL"
	},
	{
		"player" : "bellch02",
		"teams" : "9.8",
		"teamspitcher" : "FRI TL"
	},
	{
		"player" : "bellch02",
		"teams" : "8.3",
		"teamspitcher" : "TOL,RRK IL,PCL"
	},
	{
		"player" : "bellch02",
		"teams" : "8.9",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "bellch02",
		"teams" : "10.8",
		"teamspitcher" : "GWI,TOL IL"
	},
	{
		"player" : "stumpda01",
		"teams" : "6.2",
		"teamspitcher" : "BRL APPY"
	},
	{
		"player" : "stumpda01",
		"teams" : "6.7",
		"teamspitcher" : "LEX SALL"
	},
	{
		"player" : "stumpda01",
		"teams" : "9.5",
		"teamspitcher" : "WMT,PEA CARL,AZFL"
	},
	{
		"player" : "stumpda01",
		"teams" : "6.7",
		"teamspitcher" : "NTA,SNT TL,PRWL"
	},
	{
		"player" : "stumpda01",
		"teams" : "7.2",
		"teamspitcher" : "NTA,AZU,REA,CLW,LHV TL,DOWL,EL,FLOR,IL"
	},
	{
		"player" : "stumpda01",
		"teams" : "8.0",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "stumpda01",
		"teams" : "10.5",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "saupowa01",
		"teams" : "10.0",
		"teamspitcher" : "PRH AUBL"
	},
	{
		"player" : "saupowa01",
		"teams" : "5.5",
		"teamspitcher" : "PRH AUBL"
	},
	{
		"player" : "saupowa01",
		"teams" : "8.6",
		"teamspitcher" : "WMI,LAK,PRH MIDW,FLOR,AUBL"
	},
	{
		"player" : "saupowa01",
		"teams" : "8.6",
		"teamspitcher" : "ERI,PRH EL,AUBL"
	},
	{
		"player" : "saupowa01",
		"teams" : "9.2",
		"teamspitcher" : "ERI,PRH EL,AUBL"
	},
	{
		"player" : "saupowa01",
		"teams" : "8.8",
		"teamspitcher" : "ERI,PRH,TOL EL,AUBL,IL"
	},
	{
		"player" : "saupowa01",
		"teams" : "8.1",
		"teamspitcher" : "TOL,PRH,LAK IL,AUBL,FLOR"
	},
	{
		"player" : "saupowa01",
		"teams" : "8.4",
		"teamspitcher" : "TOL,PRH IL,AUBL"
	},
	{
		"player" : "saupowa01",
		"teams" : "10.0",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "verhadr01",
		"teams" : "7.3",
		"teamspitcher" : "LAK,LAT FLOR,GULF"
	},
	{
		"player" : "verhadr01",
		"teams" : "7.2",
		"teamspitcher" : "LAK,ERI FLOR,EL"
	},
	{
		"player" : "verhadr01",
		"teams" : "9.5",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "verhadr01",
		"teams" : "8.4",
		"teamspitcher" : "TOL,ERI IL,EL"
	},
	{
		"player" : "verhadr01",
		"teams" : "13.5",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "verhadr01",
		"teams" : "10.0",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "verhadr01",
		"teams" : "5.0",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "norrida01",
		"teams" : "12.2",
		"teamspitcher" : "BLD,VAN APPY,NORW"
	},
	{
		"player" : "norrida01",
		"teams" : "8.4",
		"teamspitcher" : "LNS,DUN MIDW,FLOR"
	},
	{
		"player" : "norrida01",
		"teams" : "6.9",
		"teamspitcher" : "DUN,MAN,BFL FLOR,EL,IL"
	},
	{
		"player" : "norrida01",
		"teams" : "9.5",
		"teamspitcher" : "BFL IL"
	},
	{
		"player" : "norrida01",
		"teams" : "9.6",
		"teamspitcher" : "TOL,ERI,LAK IL,EL,FLOR"
	},
	{
		"player" : "norrida01",
		"teams" : "14.1",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "norrida01",
		"teams" : "6.8",
		"teamspitcher" : "AGU,TOL,LAK,TGW,LAT DOWL,IL,FLOR,GULF"
	},
	{
		"player" : "liriafr01",
		"teams" : "7.4",
		"teamspitcher" : "GNT,SKZ ARIZ,NORW"
	},
	{
		"player" : "liriafr01",
		"teams" : "6.9",
		"teamspitcher" : "HGR SALL"
	},
	{
		"player" : "liriafr01",
		"teams" : "10.0",
		"teamspitcher" : "GNT,SJO ARIZ,CALL"
	},
	{
		"player" : "liriafr01",
		"teams" : "9.4",
		"teamspitcher" : "FTM,NBR FLOR,EL"
	},
	{
		"player" : "liriafr01",
		"teams" : "6.8",
		"teamspitcher" : "ROC,NBR IL,EL"
	},
	{
		"player" : "liriafr01",
		"teams" : "7.8",
		"teamspitcher" : "ROC,ESC,FTM IL,DOWL,FLOR"
	},
	{
		"player" : "liriafr01",
		"teams" : "6.2",
		"teamspitcher" : "ESC DOWL"
	},
	{
		"player" : "liriafr01",
		"teams" : "7.9",
		"teamspitcher" : "INA,BDT,ATO IL,FLOR,EL"
	},
	{
		"player" : "liriafr01",
		"teams" : "4.5",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "liriafr01",
		"teams" : "6.2",
		"teamspitcher" : "BFL IL"
	},
	{
		"player" : "liriafr01",
		"teams" : "24.8",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "zimmejo02",
		"teams" : "7.6",
		"teamspitcher" : "VMT NYPL"
	},
	{
		"player" : "zimmejo02",
		"teams" : "7.0",
		"teamspitcher" : "HRB,POT EL,CARL"
	},
	{
		"player" : "zimmejo02",
		"teams" : "6.2",
		"teamspitcher" : "SYR,POT IL,CARL"
	},
	{
		"player" : "zimmejo02",
		"teams" : "6.1",
		"teamspitcher" : "SYR,POT,HGR,HRB IL,CARL,SALL,EL"
	},
	{
		"player" : "zimmejo02",
		"teams" : "8.4",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "zimmejo02",
		"teams" : "14.8",
		"teamspitcher" : "WMI,TOL MIDW,IL"
	},
	{
		"player" : "boydma01",
		"teams" : "5.3",
		"teamspitcher" : "LNS,DUN MIDW,FLOR"
	},
	{
		"player" : "boydma01",
		"teams" : "8.1",
		"teamspitcher" : "DUN,MAN FLOR,EL"
	},
	{
		"player" : "boydma01",
		"teams" : "5.6",
		"teamspitcher" : "MAN,BFL,TOL EL,IL"
	},
	{
		"player" : "boydma01",
		"teams" : "7.5",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "boydma01",
		"teams" : "6.2",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "turnbsp01",
		"teams" : "9.5",
		"teamspitcher" : "NCH,LAT NYPL,GULF"
	},
	{
		"player" : "turnbsp01",
		"teams" : "8.2",
		"teamspitcher" : "WMI MIDW"
	},
	{
		"player" : "turnbsp01",
		"teams" : "6.5",
		"teamspitcher" : "LAK,SRV,TGW,LAT FLOR,AZFL,GULF"
	},
	{
		"player" : "turnbsp01",
		"teams" : "8.3",
		"teamspitcher" : "LAK,MES,ERI,TGW FLOR,AZFL,EL,GULF"
	},
	{
		"player" : "turnbsp01",
		"teams" : "7.8",
		"teamspitcher" : "ERI,TOL,LAK,TGW EL,IL,FLOR,GULF"
	},
	{
		"player" : "fulmemi01",
		"teams" : "15.2",
		"teamspitcher" : "MET GULF"
	},
	{
		"player" : "fulmemi01",
		"teams" : "7.6",
		"teamspitcher" : "SAV SALL"
	},
	{
		"player" : "fulmemi01",
		"teams" : "6.5",
		"teamspitcher" : "SCE,MET FLOR,GULF"
	},
	{
		"player" : "fulmemi01",
		"teams" : "10.8",
		"teamspitcher" : "SCE,BNG FLOR,EL"
	},
	{
		"player" : "fulmemi01",
		"teams" : "7.5",
		"teamspitcher" : "BNG,ERI,SCE EL,FLOR"
	},
	{
		"player" : "fulmemi01",
		"teams" : "9.4",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "fulmemi01",
		"teams" : "1.5",
		"teamspitcher" : "LAK FLOR"
	},
	{
		"player" : "saltaja01",
		"teams" : "BVS · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "saltaja01",
		"teams" : "ROM · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "saltaja01",
		"teams" : "MYR,PHO · CARL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "saltaja01",
		"teams" : "MSS,PEA · SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "saltaja01",
		"teams" : "MSS · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "saltaja01",
		"teams" : "ESC,OKC · DOWL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "saltaja01",
		"teams" : "AZU,FRI · DOWL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "saltaja01",
		"teams" : "OKC,PAW · PCL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "saltaja01",
		"teams" : "JUP · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "saltaja01",
		"teams" : "REN,DKS · PCL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "saltaja01",
		"teams" : "BFL,JAL · IL,MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "saltaja01",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "castrha01",
		"teams" : "CZA · VESL",
		"teamspitcher" : ""
	},
	{
		"player" : "castrha01",
		"teams" : "LAT · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "castrha01",
		"teams" : "WMI,LAK · MIDW,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "castrha01",
		"teams" : "LAK,WMI · FLOR,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "castrha01",
		"teams" : "ERI,CCS · EL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "castrha01",
		"teams" : "ERI,CCS · EL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "castrha01",
		"teams" : "ERI,CCS,LAK · EL,VEWL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "castrha01",
		"teams" : "TOL,ERI,CCS · IL,EL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "gerbemi01",
		"teams" : "NCH,WMI · NYPL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "gerbemi01",
		"teams" : "WMI,SCO · MIDW,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "gerbemi01",
		"teams" : "LAK,ERI · FLOR,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "gerbemi01",
		"teams" : "ERI,LAK,TOL · EL,FLOR,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "gerbemi01",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "stewach02",
		"teams" : "WMI,NCH,LAT · MIDW,NYPL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "stewach02",
		"teams" : "LAK,ERI,SRV · FLOR,EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "stewach02",
		"teams" : "ERI · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "stewach02",
		"teams" : "TOL,LAT,TGW · IL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "kozmape01",
		"teams" : "JOH,BAT,CDS · APPY,NYPL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "kozmape01",
		"teams" : "DAV,PLM · MIDW,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "kozmape01",
		"teams" : "SPD,PLM · TL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "kozmape01",
		"teams" : "SPD,SPS · TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "kozmape01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "kozmape01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "kozmape01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "kozmape01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "kozmape01",
		"teams" : "RRK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "kozmape01",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "lugoda01",
		"teams" : "BJY · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "lugoda01",
		"teams" : "BLD,VAN · APPY,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "lugoda01",
		"teams" : "LNS · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "lugoda01",
		"teams" : "DUN,LNS,KNC · FLOR,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "lugoda01",
		"teams" : "VIS,MOB,SRV · CALL,SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "lugoda01",
		"teams" : "WTN,ERI,LCY · SOUL,EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "lugoda01",
		"teams" : "TOL,LCY · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "greingr01",
		"teams" : "WMI · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "greingr01",
		"teams" : "LAK · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "greingr01",
		"teams" : "ERI,LAK,SRV,TOL · EL,FLOR,AZFL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "greingr01",
		"teams" : "ERI,TOL · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "greingr01",
		"teams" : "TOL,ESC · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "cabremi01",
		"teams" : "MLN,UTI · GULF,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "cabremi01",
		"teams" : "KNC · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "cabremi01",
		"teams" : "JUP · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "cabremi01",
		"teams" : "CAR · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "cabremi01",
		"teams" : "ARA · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "cabremi01",
		"teams" : "ARA · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "adducji02",
		"teams" : "JUM · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "adducji02",
		"teams" : "JUM · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "adducji02",
		"teams" : "JUM,GBO · GULF,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "adducji02",
		"teams" : "PEO,DYT · MIDW,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "adducji02",
		"teams" : "DYT · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "adducji02",
		"teams" : "KNX,HRM · SOUL,MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "adducji02",
		"teams" : "IWA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "adducji02",
		"teams" : "KNX,CBZ · SOUL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "adducji02",
		"teams" : "KNX,IWA · SOUL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "adducji02",
		"teams" : "RRK,AZU · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "adducji02",
		"teams" : "RRK,FRI · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "adducji02",
		"teams" : "LTG · KBO",
		"teamspitcher" : ""
	},
	{
		"player" : "adducji02",
		"teams" : "LTG,OBR,ESS · KBO,MXPW,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "adducji02",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "adducji02",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "rodriro03",
		"teams" : "LCO,ESS · MIDW,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "rodriro03",
		"teams" : "CAR,SCO,ESS · CARL,AZFL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "rodriro03",
		"teams" : "AKR,ESS · EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "rodriro03",
		"teams" : "AKR,ESS · EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "rodriro03",
		"teams" : "AKR,AGU,ESS · EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "rodriro03",
		"teams" : "CLB,AGU · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "rodriro03",
		"teams" : "CLB,AGU · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "rodriro03",
		"teams" : "TOL,AGU · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "reyesvi01",
		"teams" : "BV1 · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "reyesvi01",
		"teams" : "KIS,DAN · GULF,APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "reyesvi01",
		"teams" : "ROM · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "reyesvi01",
		"teams" : "KNC · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "reyesvi01",
		"teams" : "VIS,CCS · CALL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "reyesvi01",
		"teams" : "WTN,SRV · SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "reyesvi01",
		"teams" : "CCS · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "mahtomi01",
		"teams" : "SPS · AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "mahtomi01",
		"teams" : "POE,MTG · FLOR,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "mahtomi01",
		"teams" : "MTG · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "mahtomi01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "mahtomi01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "mahtomi01",
		"teams" : "DHM,POE,DVS · IL,FLOR,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "mahtomi01",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "goodrni01",
		"teams" : "TWN · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "goodrni01",
		"teams" : "ELZ · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "goodrni01",
		"teams" : "ELZ · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "goodrni01",
		"teams" : "CDR · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "goodrni01",
		"teams" : "FTM · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "goodrni01",
		"teams" : "CNG,FTM · SOUL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "goodrni01",
		"teams" : "CNG,ORN,FTM · SOUL,VEWL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "goodrni01",
		"teams" : "ROC · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "martivi01",
		"teams" : "MHV · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "martivi01",
		"teams" : "KIN,CBS · CARL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "martivi01",
		"teams" : "KIN · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "martivi01",
		"teams" : "AKR · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "martivi01",
		"teams" : "BFL,AKR · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "martivi01",
		"teams" : "BFL,AKR · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "martivi01",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "martivi01",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "casteni01",
		"teams" : "LAT · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "casteni01",
		"teams" : "WMI · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "casteni01",
		"teams" : "ERI,LAK,MES · EL,FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "casteni01",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "martile01",
		"teams" : "VLC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "martile01",
		"teams" : "VLC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "martile01",
		"teams" : "VLC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "martile01",
		"teams" : "VLC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "martile01",
		"teams" : "VLC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "martile01",
		"teams" : "RRK,FRI,SPS,RGS · PCL,TL,AZFL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "martile01",
		"teams" : "RRK,LCY · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "martile01",
		"teams" : "LCY · DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "martile01",
		"teams" : "RRK,LCY · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "martile01",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "martile01",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "jonesja07",
		"teams" : "JAM · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "jonesja07",
		"teams" : "CHL · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "jonesja07",
		"teams" : "BDT,ERI,SCO,ATO · FLOR,AZFL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "jonesja07",
		"teams" : "TOL,SRV,ERI · IL,AZFL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "jonesja07",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "jonesja07",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "candeje01",
		"teams" : "CB2 · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "candeje01",
		"teams" : "BOI · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "candeje01",
		"teams" : "KNC,AGU · MIDW,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "candeje01",
		"teams" : "KNC,DYT,AZU · MIDW,FLOR,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "candeje01",
		"teams" : "MYR,KNX,MES · CARL,SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "candeje01",
		"teams" : "IWA,KNX · PCL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "candeje01",
		"teams" : "IWA,TOL,AZU · PCL,IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "candeje01",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "iglesjo01",
		"teams" : "HAV · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "iglesjo01",
		"teams" : "HAV · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "iglesjo01",
		"teams" : "MES · AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "iglesjo01",
		"teams" : "PRT,PEA,LOW · EL,AZFL,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "iglesjo01",
		"teams" : "PAW · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "iglesjo01",
		"teams" : "PAW,LOW · IL,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "iglesjo01",
		"teams" : "PAW · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "iglesjo01",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "machadi01",
		"teams" : "CZA · VESL",
		"teamspitcher" : ""
	},
	{
		"player" : "machadi01",
		"teams" : "LAT,NCH · GULF,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "machadi01",
		"teams" : "WMI,SRV · MIDW,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "machadi01",
		"teams" : "LAK · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "machadi01",
		"teams" : "LAK,MES,LAT · FLOR,AZFL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "machadi01",
		"teams" : "ERI,LAK · EL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "machadi01",
		"teams" : "TOL,CCS · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "machadi01",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "machadi01",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "hicksjo02",
		"teams" : "CLI · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "hicksjo02",
		"teams" : "HDS · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "hicksjo02",
		"teams" : "WTN · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "hicksjo02",
		"teams" : "WTN,TAC,SPS · SOUL,PCL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "hicksjo02",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "hicksjo02",
		"teams" : "TOL,ERI,ROC · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "hicksjo02",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "mccanja02",
		"teams" : "WMI,LAT · MIDW,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "mccanja02",
		"teams" : "ERI,LAK,MES · EL,FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "mccanja02",
		"teams" : "ERI,ESC · EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "mccanja02",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "mccanja02",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "mccanja02",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "ottavad01",
		"teams" : "7.0",
		"teamspitcher" : "DAV,SCS MIDW,NYPL"
	},
	{
		"player" : "ottavad01",
		"teams" : "8.2",
		"teamspitcher" : "PLM FLOR"
	},
	{
		"player" : "ottavad01",
		"teams" : "10.8",
		"teamspitcher" : "SPD,PES TL,AZFL"
	},
	{
		"player" : "ottavad01",
		"teams" : "8.8",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "ottavad01",
		"teams" : "8.1",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "ottavad01",
		"teams" : "9.8",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "ottavad01",
		"teams" : "10.1",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "ottavad01",
		"teams" : "8.6",
		"teamspitcher" : "ABQ,MOD PCL,CALL"
	},
	{
		"player" : "daviswa01",
		"teams" : "11.1",
		"teamspitcher" : "PRI APPY"
	},
	{
		"player" : "daviswa01",
		"teams" : "7.8",
		"teamspitcher" : "HDV NYPL"
	},
	{
		"player" : "daviswa01",
		"teams" : "7.6",
		"teamspitcher" : "BTC MIDW"
	},
	{
		"player" : "daviswa01",
		"teams" : "7.3",
		"teamspitcher" : "MTG,VRO SOUL,FLOR"
	},
	{
		"player" : "daviswa01",
		"teams" : "8.0",
		"teamspitcher" : "MTG,DHM SOUL,IL"
	},
	{
		"player" : "daviswa01",
		"teams" : "7.9",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "daviswa01",
		"teams" : "4.5",
		"teamspitcher" : "WMT CARL"
	},
	{
		"player" : "daviswa01",
		"teams" : "9.0",
		"teamspitcher" : "OMA,ROY PCL,ARIZ"
	},
	{
		"player" : "shawbr01",
		"teams" : "9.5",
		"teamspitcher" : "SBN,MSO MIDW,PION"
	},
	{
		"player" : "shawbr01",
		"teams" : "8.0",
		"teamspitcher" : "VIS CALL"
	},
	{
		"player" : "shawbr01",
		"teams" : "9.3",
		"teamspitcher" : "MOB,SCO SOUL,AZFL"
	},
	{
		"player" : "shawbr01",
		"teams" : "6.8",
		"teamspitcher" : "MOB,REN SOUL,PCL"
	},
	{
		"player" : "shawbr01",
		"teams" : "6.8",
		"teamspitcher" : "REN PCL"
	},
	{
		"player" : "shawbr01",
		"teams" : "13.5",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "ohse01",
		"teams" : "4.2",
		"teamspitcher" : "SAM KBO"
	},
	{
		"player" : "ohse01",
		"teams" : "4.9",
		"teamspitcher" : "SAM KBO"
	},
	{
		"player" : "ohse01",
		"teams" : "5.7",
		"teamspitcher" : "SAM KBO"
	},
	{
		"player" : "ohse01",
		"teams" : "5.3",
		"teamspitcher" : "SAM KBO"
	},
	{
		"player" : "ohse01",
		"teams" : "8.0",
		"teamspitcher" : "SAM KBO"
	},
	{
		"player" : "ohse01",
		"teams" : "8.4",
		"teamspitcher" : "SAM KBO"
	},
	{
		"player" : "ohse01",
		"teams" : "4.3",
		"teamspitcher" : "SAM KBO"
	},
	{
		"player" : "ohse01",
		"teams" : "5.3",
		"teamspitcher" : "SAM KBO"
	},
	{
		"player" : "ohse01",
		"teams" : "5.7",
		"teamspitcher" : "SAM KBO"
	},
	{
		"player" : "ohse01",
		"teams" : "5.5",
		"teamspitcher" : "HAN JPCL"
	},
	{
		"player" : "ohse01",
		"teams" : "8.3",
		"teamspitcher" : "HAN JPCL"
	},
	{
		"player" : "dunnmi01",
		"teams" : "5.6",
		"teamspitcher" : "YNK,WOA,STI GULF,HIWB,NYPL"
	},
	{
		"player" : "dunnmi01",
		"teams" : "8.5",
		"teamspitcher" : "CHS SALL"
	},
	{
		"player" : "dunnmi01",
		"teams" : "8.9",
		"teamspitcher" : "TAM,TRE FLOR,EL"
	},
	{
		"player" : "dunnmi01",
		"teams" : "7.4",
		"teamspitcher" : "TRE,SWB,SPS EL,IL,AZFL"
	},
	{
		"player" : "dunnmi01",
		"teams" : "5.9",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "dunnmi01",
		"teams" : "9.7",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "dunnmi01",
		"teams" : "6.0",
		"teamspitcher" : "JUP FLOR"
	},
	{
		"player" : "dunnmi01",
		"teams" : "7.9",
		"teamspitcher" : "ABQ,LNR PCL,CALL"
	},
	{
		"player" : "poundbr01",
		"teams" : "7.2",
		"teamspitcher" : "BRD GULF"
	},
	{
		"player" : "poundbr01",
		"teams" : "8.5",
		"teamspitcher" : "SCS NYPL"
	},
	{
		"player" : "poundbr01",
		"teams" : "8.3",
		"teamspitcher" : "CHL SALL"
	},
	{
		"player" : "poundbr01",
		"teams" : "9.3",
		"teamspitcher" : "WMT,KNC CARL,MIDW"
	},
	{
		"player" : "poundbr01",
		"teams" : "8.3",
		"teamspitcher" : "NTA TL"
	},
	{
		"player" : "poundbr01",
		"teams" : "8.5",
		"teamspitcher" : "WMT,IDF CARL,PION"
	},
	{
		"player" : "poundbr01",
		"teams" : "6.9",
		"teamspitcher" : "NTA,SPS,WMT,ROY,IDF TL,AZFL,CARL,ARIZ,PION"
	},
	{
		"player" : "poundbr01",
		"teams" : "7.5",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "poundbr01",
		"teams" : "7.4",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "poundbr01",
		"teams" : "8.1",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "johnsdj01",
		"teams" : "9.8",
		"teamspitcher" : "DVS GULF"
	},
	{
		"player" : "johnsdj01",
		"teams" : "5.5",
		"teamspitcher" : "MSO PION"
	},
	{
		"player" : "johnsdj01",
		"teams" : "9.5",
		"teamspitcher" : "SBN,VIS MIDW,CALL"
	},
	{
		"player" : "johnsdj01",
		"teams" : "9.9",
		"teamspitcher" : "FTM FLOR"
	},
	{
		"player" : "johnsdj01",
		"teams" : "8.7",
		"teamspitcher" : "CNG,FTM SOUL,FLOR"
	},
	{
		"player" : "johnsdj01",
		"teams" : "10.1",
		"teamspitcher" : "ARK TL"
	},
	{
		"player" : "johnsdj01",
		"teams" : "7.7",
		"teamspitcher" : "HRT,LMO EL,MXPW"
	},
	{
		"player" : "johnsdj01",
		"teams" : "9.1",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "obergsc01",
		"teams" : "6.7",
		"teamspitcher" : "GRJ PION"
	},
	{
		"player" : "obergsc01",
		"teams" : "5.7",
		"teamspitcher" : "MOD CALL"
	},
	{
		"player" : "obergsc01",
		"teams" : "7.2",
		"teamspitcher" : "TUL TL"
	},
	{
		"player" : "obergsc01",
		"teams" : "15.8",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "obergsc01",
		"teams" : "4.9",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "obergsc01",
		"teams" : "4.2",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "obergsc01",
		"teams" : "7.7",
		"teamspitcher" : "ABQ,LNR PCL,CALL"
	},
	{
		"player" : "mcgeeja01",
		"teams" : "7.8",
		"teamspitcher" : "PRI APPY"
	},
	{
		"player" : "mcgeeja01",
		"teams" : "7.5",
		"teamspitcher" : "HDV NYPL"
	},
	{
		"player" : "mcgeeja01",
		"teams" : "6.9",
		"teamspitcher" : "BTC MIDW"
	},
	{
		"player" : "mcgeeja01",
		"teams" : "6.8",
		"teamspitcher" : "VRO,MTG FLOR,SOUL"
	},
	{
		"player" : "mcgeeja01",
		"teams" : "7.5",
		"teamspitcher" : "MTG SOUL"
	},
	{
		"player" : "mcgeeja01",
		"teams" : "9.3",
		"teamspitcher" : "POE,DVS FLOR,GULF"
	},
	{
		"player" : "mcgeeja01",
		"teams" : "7.7",
		"teamspitcher" : "MTG,DHM SOUL,IL"
	},
	{
		"player" : "mcgeeja01",
		"teams" : "8.1",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "mcgeeja01",
		"teams" : "3.0",
		"teamspitcher" : "DHM,POE IL,FLOR"
	},
	{
		"player" : "mcgeeja01",
		"teams" : "0.0",
		"teamspitcher" : "MOD CALL"
	},
	{
		"player" : "howarsa01",
		"teams" : "12.3",
		"teamspitcher" : "GRJ PION"
	},
	{
		"player" : "howarsa01",
		"teams" : "8.8",
		"teamspitcher" : "AVL SALL"
	},
	{
		"player" : "howarsa01",
		"teams" : "9.0",
		"teamspitcher" : "HRT,MOD EL,CALL"
	},
	{
		"player" : "howarsa01",
		"teams" : "8.0",
		"teamspitcher" : "ABQ,HRT PCL,EL"
	},
	{
		"player" : "howarsa01",
		"teams" : "9.9",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "vastoje01",
		"teams" : "0.0",
		"teamspitcher" : "TRI NORW"
	},
	{
		"player" : "vastoje01",
		"teams" : "6.5",
		"teamspitcher" : "AVL SALL"
	},
	{
		"player" : "vastoje01",
		"teams" : "8.3",
		"teamspitcher" : "HRT,MOD,SRV EL,CALL,AZFL"
	},
	{
		"player" : "vastoje01",
		"teams" : "11.1",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "vastoje01",
		"teams" : "8.1",
		"teamspitcher" : "ABQ,OMA PCL"
	},
	{
		"player" : "almonye01",
		"teams" : "15.0",
		"teamspitcher" : "ANG ARIZ"
	},
	{
		"player" : "almonye01",
		"teams" : "11.1",
		"teamspitcher" : "ORM PION"
	},
	{
		"player" : "almonye01",
		"teams" : "9.3",
		"teamspitcher" : "BUR,ANG MIDW,ARIZ"
	},
	{
		"player" : "almonye01",
		"teams" : "7.9",
		"teamspitcher" : "KAN,WSM SALL,CARL"
	},
	{
		"player" : "almonye01",
		"teams" : "7.8",
		"teamspitcher" : "MOD,HRT CALL,EL"
	},
	{
		"player" : "almonye01",
		"teams" : "8.7",
		"teamspitcher" : "HRT,ABQ,SRV EL,PCL,AZFL"
	},
	{
		"player" : "almonye01",
		"teams" : "9.1",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "hoffmje02",
		"teams" : "8.2",
		"teamspitcher" : "DUN,NBR,MAN FLOR,EL"
	},
	{
		"player" : "hoffmje02",
		"teams" : "8.9",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "hoffmje02",
		"teams" : "8.0",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "hoffmje02",
		"teams" : "9.1",
		"teamspitcher" : "ABQ,LNR PCL,CALL"
	},
	{
		"player" : "musgrha01",
		"teams" : "11.3",
		"teamspitcher" : "GRJ PION"
	},
	{
		"player" : "musgrha01",
		"teams" : "8.3",
		"teamspitcher" : "MOD,NBR CALL,EL"
	},
	{
		"player" : "musgrha01",
		"teams" : "8.1",
		"teamspitcher" : "ABQ,HRT PCL,EL"
	},
	{
		"player" : "musgrha01",
		"teams" : "10.6",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "musgrha01",
		"teams" : "12.4",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "rusinch01",
		"teams" : "8.5",
		"teamspitcher" : "BOI,CBZ NORW,ARIZ"
	},
	{
		"player" : "rusinch01",
		"teams" : "8.2",
		"teamspitcher" : "DYT,KNX FLOR,SOUL"
	},
	{
		"player" : "rusinch01",
		"teams" : "9.5",
		"teamspitcher" : "KNX,IWA,ESC SOUL,PCL,DOWL"
	},
	{
		"player" : "rusinch01",
		"teams" : "9.2",
		"teamspitcher" : "IWA,KNX PCL,SOUL"
	},
	{
		"player" : "rusinch01",
		"teams" : "8.4",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "rusinch01",
		"teams" : "10.0",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "rusinch01",
		"teams" : "12.3",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "rusinch01",
		"teams" : "12.5",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "rusinch01",
		"teams" : "6.8",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "rusinch01",
		"teams" : "8.1",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "senzaan01",
		"teams" : "5.7",
		"teamspitcher" : "RCK DOSL"
	},
	{
		"player" : "senzaan01",
		"teams" : "7.7",
		"teamspitcher" : "RCK,TRI DOSL,NORW"
	},
	{
		"player" : "senzaan01",
		"teams" : "8.3",
		"teamspitcher" : "AVL SALL"
	},
	{
		"player" : "senzaan01",
		"teams" : "8.1",
		"teamspitcher" : "MOD,MGL CALL,VEWL"
	},
	{
		"player" : "senzaan01",
		"teams" : "7.0",
		"teamspitcher" : "HRT EL"
	},
	{
		"player" : "senzaan01",
		"teams" : "10.8",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "senzaan01",
		"teams" : "6.9",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "bettich01",
		"teams" : "7.8",
		"teamspitcher" : "TRI,AVL NORW,SALL"
	},
	{
		"player" : "bettich01",
		"teams" : "7.5",
		"teamspitcher" : "MOD CALL"
	},
	{
		"player" : "bettich01",
		"teams" : "8.6",
		"teamspitcher" : "TUL TL"
	},
	{
		"player" : "bettich01",
		"teams" : "7.3",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "bettich01",
		"teams" : "9.1",
		"teamspitcher" : "ABQ,NBR PCL,EL"
	},
	{
		"player" : "bettich01",
		"teams" : "9.6",
		"teamspitcher" : "ABQ,HRT PCL,EL"
	},
	{
		"player" : "bettich01",
		"teams" : "10.3",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "anderty01",
		"teams" : "7.6",
		"teamspitcher" : "AVL SALL"
	},
	{
		"player" : "anderty01",
		"teams" : "7.1",
		"teamspitcher" : "MOD,TRI CALL,NORW"
	},
	{
		"player" : "anderty01",
		"teams" : "6.9",
		"teamspitcher" : "TUL TL"
	},
	{
		"player" : "anderty01",
		"teams" : "6.8",
		"teamspitcher" : "ABQ,HRT,MOD PCL,EL,CALL"
	},
	{
		"player" : "anderty01",
		"teams" : "10.2",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "grayjo02",
		"teams" : "6.0",
		"teamspitcher" : "MOD,GRJ CALL,PION"
	},
	{
		"player" : "grayjo02",
		"teams" : "7.7",
		"teamspitcher" : "TUL TL"
	},
	{
		"player" : "grayjo02",
		"teams" : "10.2",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "grayjo02",
		"teams" : "8.3",
		"teamspitcher" : "MOD CALL"
	},
	{
		"player" : "grayjo02",
		"teams" : "9.5",
		"teamspitcher" : "ABQ,LNR PCL,CALL"
	},
	{
		"player" : "grayjo02",
		"teams" : "5.9",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "marquge01",
		"teams" : "11.3",
		"teamspitcher" : "VN2 VESL"
	},
	{
		"player" : "marquge01",
		"teams" : "7.8",
		"teamspitcher" : "PRI APPY"
	},
	{
		"player" : "marquge01",
		"teams" : "7.6",
		"teamspitcher" : "BWG MIDW"
	},
	{
		"player" : "marquge01",
		"teams" : "9.5",
		"teamspitcher" : "POE FLOR"
	},
	{
		"player" : "marquge01",
		"teams" : "8.3",
		"teamspitcher" : "HRT,ABQ EL,PCL"
	},
	{
		"player" : "marquge01",
		"teams" : "7.2",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "freelky01",
		"teams" : "6.9",
		"teamspitcher" : "AVL,GRJ SALL,PION"
	},
	{
		"player" : "freelky01",
		"teams" : "9.5",
		"teamspitcher" : "MOD,SRV,GRJ CALL,AZFL,PION"
	},
	{
		"player" : "freelky01",
		"teams" : "9.2",
		"teamspitcher" : "HRT,ABQ EL,PCL"
	},
	{
		"player" : "buterdr01",
		"teams" : "BKN · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "buterdr01",
		"teams" : "HGR,NSE · SALL,HIWB",
		"teamspitcher" : ""
	},
	{
		"player" : "buterdr01",
		"teams" : "SCE,BNG,NBR,PHO · FLOR,EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "buterdr01",
		"teams" : "NBR · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "buterdr01",
		"teams" : "ROC,ARE · IL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "buterdr01",
		"teams" : "ESS,ROC · DOWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "buterdr01",
		"teams" : "ROC,ABQ · IL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "tapiara01",
		"teams" : "RCK · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "tapiara01",
		"teams" : "RCK · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "tapiara01",
		"teams" : "GRJ · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "tapiara01",
		"teams" : "AVL · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "tapiara01",
		"teams" : "MOD,SRV · CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "tapiara01",
		"teams" : "HRT,ABQ,ESS · EL,PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "tapiara01",
		"teams" : "ABQ,ESS · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "tapiara01",
		"teams" : "ABQ · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "tauchmi01",
		"teams" : "TRI · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "tauchmi01",
		"teams" : "MOD,TRI · CALL,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "tauchmi01",
		"teams" : "NBR · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "tauchmi01",
		"teams" : "ABQ,ZUL · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "tauchmi01",
		"teams" : "ABQ · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "tauchmi01",
		"teams" : "ABQ · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "castrda01",
		"teams" : "BV1 · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "castrda01",
		"teams" : "BV1 · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "castrda01",
		"teams" : "SLT,OBR,NAV · MEX,MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "castrda01",
		"teams" : "SLT,LBG,OBR · MEX,CARL,MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "castrda01",
		"teams" : "LBG,MSS,PEA,OBR · CARL,SOUL,AZFL,MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "castrda01",
		"teams" : "GWI,OBR,MSS · IL,MXPW,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "castrda01",
		"teams" : "GWI,OBR · IL,MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "castrda01",
		"teams" : "ABQ,MXL · PCL,MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "castrda01",
		"teams" : "ABQ,MXL · PCL,MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "hampsga01",
		"teams" : "BOI · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "hampsga01",
		"teams" : "LNR · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "hampsga01",
		"teams" : "ABQ,HRT · PCL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "hollima01",
		"teams" : "RKS · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "hollima01",
		"teams" : "AVL · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "hollima01",
		"teams" : "SAL · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "hollima01",
		"teams" : "SAL · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "hollima01",
		"teams" : "CAR · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "hollima01",
		"teams" : "TUL,MES · TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "hollima01",
		"teams" : "CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "hollima01",
		"teams" : "TUL · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "hollima01",
		"teams" : "CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "hollima01",
		"teams" : "TAM,SWB · FLOR,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "hollima01",
		"teams" : "ABQ,GRJ · PCL,PION",
		"teamspitcher" : ""
	},
	{
		"player" : "murphto04",
		"teams" : "TRI · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "murphto04",
		"teams" : "AVL,TUL · SALL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "murphto04",
		"teams" : "TUL · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "murphto04",
		"teams" : "NBR,ABQ · EL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "murphto04",
		"teams" : "ABQ · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "murphto04",
		"teams" : "ABQ · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "murphto04",
		"teams" : "ABQ · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "valaipa01",
		"teams" : "TRI · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "valaipa01",
		"teams" : "MOD,AVL · CALL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "valaipa01",
		"teams" : "NBR · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "valaipa01",
		"teams" : "HRT,ABQ,SRV · EL,PCL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "valaipa01",
		"teams" : "ABQ · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "valaipa01",
		"teams" : "ABQ · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "cuevano01",
		"teams" : "DGR · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "cuevano01",
		"teams" : "OGD,RCU,CGU · PION,CALL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "cuevano01",
		"teams" : "GRL,DGR,OGD · MIDW,ARIZ,PION",
		"teamspitcher" : ""
	},
	{
		"player" : "cuevano01",
		"teams" : "RCU,MGZ · CALL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "cuevano01",
		"teams" : "CNG,MGZ · SOUL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "cuevano01",
		"teams" : "NBR · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "cuevano01",
		"teams" : "HRT,ABQ,SRV,AGU · EL,PCL,AZFL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "cuevano01",
		"teams" : "ABQ,LMO · PCL,MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "cuevano01",
		"teams" : "ABQ · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "mcmahry01",
		"teams" : "GRJ · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "mcmahry01",
		"teams" : "AVL · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "mcmahry01",
		"teams" : "MOD · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "mcmahry01",
		"teams" : "HRT,SRV · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "mcmahry01",
		"teams" : "ABQ,HRT · PCL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "mcmahry01",
		"teams" : "ABQ · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "wolteto01",
		"teams" : "INS · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "wolteto01",
		"teams" : "MHV · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "wolteto01",
		"teams" : "CAR · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "wolteto01",
		"teams" : "CAR,SPS · CARL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "wolteto01",
		"teams" : "AKR,PEA · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "wolteto01",
		"teams" : "AKR · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "wolteto01",
		"teams" : "ABQ · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "wolteto01",
		"teams" : "ABQ · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "dahlda01",
		"teams" : "GRJ · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "dahlda01",
		"teams" : "AVL · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "dahlda01",
		"teams" : "AVL,MOD · SALL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "dahlda01",
		"teams" : "NBR,BOI · EL,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "dahlda01",
		"teams" : "HRT,ABQ · EL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "dahlda01",
		"teams" : "ABQ,LNR · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "dahlda01",
		"teams" : "ABQ · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaca01",
		"teams" : "MSO · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaca01",
		"teams" : "YAK,SBN · NORW,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaca01",
		"teams" : "SBN · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaca01",
		"teams" : "LNR,ZUL,KNX · CALL,VEWL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaca01",
		"teams" : "MOB,ZUL,TUC · SOUL,VEWL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaca01",
		"teams" : "SAC,ZUL · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaca01",
		"teams" : "CSP,ZUL · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaca01",
		"teams" : "CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaca01",
		"teams" : "CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaca01",
		"teams" : "CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "blackch02",
		"teams" : "TRI · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "blackch02",
		"teams" : "MOD · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "blackch02",
		"teams" : "TUL,SCO · TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "blackch02",
		"teams" : "CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "blackch02",
		"teams" : "CSP,AZU,TRI · PCL,DOWL,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "blackch02",
		"teams" : "CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "blackch02",
		"teams" : "MOD · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "parrage01",
		"teams" : "MSO,ZUL · PION,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "parrage01",
		"teams" : "SBN,ZUL,VIS · MIDW,VEWL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "parrage01",
		"teams" : "MOB,ZUL,VIS · SOUL,VEWL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "parrage01",
		"teams" : "MOB,ZUL · SOUL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "parrage01",
		"teams" : "ZUL,REN · VEWL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "parrage01",
		"teams" : "ZUL · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "parrage01",
		"teams" : "ZUL · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "parrage01",
		"teams" : "CCS · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "parrage01",
		"teams" : "ABQ,HRT · PCL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "parrage01",
		"teams" : "ABQ · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "arenano01",
		"teams" : "CAS · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "arenano01",
		"teams" : "AVL · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "arenano01",
		"teams" : "MOD,SRV · CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "arenano01",
		"teams" : "TUL · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "arenano01",
		"teams" : "CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "arenano01",
		"teams" : "CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "storytr01",
		"teams" : "CAS · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "storytr01",
		"teams" : "AVL · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "storytr01",
		"teams" : "MOD · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "storytr01",
		"teams" : "TUL,MOD,SRV,TRI · TL,CALL,AZFL,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "storytr01",
		"teams" : "ABQ,NBR · PCL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "storytr01",
		"teams" : "ABQ · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "lemahdj01",
		"teams" : "PEO,CBZ · MIDW,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "lemahdj01",
		"teams" : "DYT · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "lemahdj01",
		"teams" : "IWA,KNX,MES · PCL,SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "lemahdj01",
		"teams" : "CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "lemahdj01",
		"teams" : "CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "desmoia01",
		"teams" : "EXO,VMT · GULF,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "desmoia01",
		"teams" : "SAV,POT · SALL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "desmoia01",
		"teams" : "POT,HRB,WKI · CARL,EL,HIWB",
		"teamspitcher" : ""
	},
	{
		"player" : "desmoia01",
		"teams" : "POT · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "desmoia01",
		"teams" : "HRB,PES,NAT · EL,AZFL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "desmoia01",
		"teams" : "SYR,HRB,LCY · IL,EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "desmoia01",
		"teams" : "ABQ · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "iannech01",
		"teams" : "AVL · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "iannech01",
		"teams" : "MOD,TUL,PEA · CALL,TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "iannech01",
		"teams" : "TUL,CSP · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "iannech01",
		"teams" : "CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "iannech01",
		"teams" : "CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "iannech01",
		"teams" : "CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "iannech01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "ogandal01",
		"teams" : "6.2",
		"teamspitcher" : "RNG DOSL"
	},
	{
		"player" : "ogandal01",
		"teams" : "8.0",
		"teamspitcher" : "RNG DOSL"
	},
	{
		"player" : "ogandal01",
		"teams" : "7.4",
		"teamspitcher" : "RNG,AZU DOSL,DOWL"
	},
	{
		"player" : "ogandal01",
		"teams" : "4.1",
		"teamspitcher" : "FRI,OKC TL,PCL"
	},
	{
		"player" : "ogandal01",
		"teams" : "3.0",
		"teamspitcher" : "RRK PCL"
	},
	{
		"player" : "ogandal01",
		"teams" : "7.6",
		"teamspitcher" : "RRK,FRI PCL,TL"
	},
	{
		"player" : "ogandal01",
		"teams" : "9.8",
		"teamspitcher" : "AZU,REN DOWL,PCL"
	},
	{
		"player" : "ogandal01",
		"teams" : "9.5",
		"teamspitcher" : "HWA,AZU KBO,DOWL"
	},
	{
		"player" : "ogandal01",
		"teams" : "10.1",
		"teamspitcher" : "CLB,AZU IL,DOWL"
	},
	{
		"player" : "rzepcma01",
		"teams" : "6.5",
		"teamspitcher" : "AUB NYPL"
	},
	{
		"player" : "rzepcma01",
		"teams" : "7.4",
		"teamspitcher" : "LNS MIDW"
	},
	{
		"player" : "rzepcma01",
		"teams" : "8.9",
		"teamspitcher" : "MAN,LVG EL,PCL"
	},
	{
		"player" : "rzepcma01",
		"teams" : "9.6",
		"teamspitcher" : "LVG,PEA PCL,AZFL"
	},
	{
		"player" : "rzepcma01",
		"teams" : "9.0",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "rzepcma01",
		"teams" : "14.3",
		"teamspitcher" : "TAC,CLB PCL,IL"
	},
	{
		"player" : "drakeol01",
		"teams" : "6.5",
		"teamspitcher" : "BLD,ADN APPY,NYPL"
	},
	{
		"player" : "drakeol01",
		"teams" : "9.5",
		"teamspitcher" : "DEL SALL"
	},
	{
		"player" : "drakeol01",
		"teams" : "9.8",
		"teamspitcher" : "FDK,SCO CARL,AZFL"
	},
	{
		"player" : "drakeol01",
		"teams" : "8.6",
		"teamspitcher" : "FDK,BOW,NFK CARL,EL,IL"
	},
	{
		"player" : "drakeol01",
		"teams" : "4.0",
		"teamspitcher" : "BOW EL"
	},
	{
		"player" : "drakeol01",
		"teams" : "5.5",
		"teamspitcher" : "BOW EL"
	},
	{
		"player" : "drakeol01",
		"teams" : "7.5",
		"teamspitcher" : "BOW,AGU EL,DOWL"
	},
	{
		"player" : "drakeol01",
		"teams" : "4.7",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "drakeol01",
		"teams" : "7.0",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "drakeol01",
		"teams" : "3.5",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "cimbead01",
		"teams" : "7.1",
		"teamspitcher" : "EUG NORW"
	},
	{
		"player" : "cimbead01",
		"teams" : "9.3",
		"teamspitcher" : "LEL CALL"
	},
	{
		"player" : "cimbead01",
		"teams" : "9.3",
		"teamspitcher" : "SAN,ELP TL,PCL"
	},
	{
		"player" : "cimbead01",
		"teams" : "8.8",
		"teamspitcher" : "SAN,ELP TL,PCL"
	},
	{
		"player" : "cimbead01",
		"teams" : "7.0",
		"teamspitcher" : "ELP,SAN PCL,TL"
	},
	{
		"player" : "kontoge01",
		"teams" : "7.4",
		"teamspitcher" : "STI NYPL"
	},
	{
		"player" : "kontoge01",
		"teams" : "9.1",
		"teamspitcher" : "TAM,HON FLOR,HIWB"
	},
	{
		"player" : "kontoge01",
		"teams" : "8.0",
		"teamspitcher" : "TRE EL"
	},
	{
		"player" : "kontoge01",
		"teams" : "7.9",
		"teamspitcher" : "SWB,TRE IL,EL"
	},
	{
		"player" : "kontoge01",
		"teams" : "9.8",
		"teamspitcher" : "TRE,PHO,TAM,SWB EL,AZFL,FLOR,IL"
	},
	{
		"player" : "kontoge01",
		"teams" : "7.3",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "kontoge01",
		"teams" : "6.8",
		"teamspitcher" : "FRE PCL"
	},
	{
		"player" : "kontoge01",
		"teams" : "7.2",
		"teamspitcher" : "FRE PCL"
	},
	{
		"player" : "kontoge01",
		"teams" : "7.7",
		"teamspitcher" : "FRE PCL"
	},
	{
		"player" : "kontoge01",
		"teams" : "12.3",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "kontoge01",
		"teams" : "9.2",
		"teamspitcher" : "CLB,SWB IL"
	},
	{
		"player" : "marshev01",
		"teams" : "7.5",
		"teamspitcher" : "VIS,YAK,MOB CALL,NORW,SOUL"
	},
	{
		"player" : "marshev01",
		"teams" : "10.3",
		"teamspitcher" : "MOB,SRV SOUL,AZFL"
	},
	{
		"player" : "marshev01",
		"teams" : "11.6",
		"teamspitcher" : "REN PCL"
	},
	{
		"player" : "marshev01",
		"teams" : "5.4",
		"teamspitcher" : "REN PCL"
	},
	{
		"player" : "marshev01",
		"teams" : "13.1",
		"teamspitcher" : "REN PCL"
	},
	{
		"player" : "marshev01",
		"teams" : "9.7",
		"teamspitcher" : "REN PCL"
	},
	{
		"player" : "marshev01",
		"teams" : "12.0",
		"teamspitcher" : "TAC,MAZ,ARK,MRE PCL,MXPW,TL,ARIZ"
	},
	{
		"player" : "marshev01",
		"teams" : "7.4",
		"teamspitcher" : "CLB,MAZ,IN2 IL,MXPW,ARIZ"
	},
	{
		"player" : "oteroda01",
		"teams" : "4.8",
		"teamspitcher" : "SLM NORW"
	},
	{
		"player" : "oteroda01",
		"teams" : "9.3",
		"teamspitcher" : "AUG,SJO SALL,CALL"
	},
	{
		"player" : "oteroda01",
		"teams" : "9.2",
		"teamspitcher" : "NCH EL"
	},
	{
		"player" : "oteroda01",
		"teams" : "6.8",
		"teamspitcher" : "SJO,GNT CALL,ARIZ"
	},
	{
		"player" : "oteroda01",
		"teams" : "8.8",
		"teamspitcher" : "RMD,FRE EL,PCL"
	},
	{
		"player" : "oteroda01",
		"teams" : "10.2",
		"teamspitcher" : "FRE PCL"
	},
	{
		"player" : "oteroda01",
		"teams" : "4.6",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "oteroda01",
		"teams" : "7.5",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "handbr01",
		"teams" : "6.8",
		"teamspitcher" : "JUM,JAM GULF,NYPL"
	},
	{
		"player" : "handbr01",
		"teams" : "9.2",
		"teamspitcher" : "GBO SALL"
	},
	{
		"player" : "handbr01",
		"teams" : "9.6",
		"teamspitcher" : "JUP,JCK FLOR,SOUL"
	},
	{
		"player" : "handbr01",
		"teams" : "7.5",
		"teamspitcher" : "JCK,JUP SOUL,FLOR"
	},
	{
		"player" : "handbr01",
		"teams" : "7.8",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "handbr01",
		"teams" : "7.4",
		"teamspitcher" : "NOR,JUM PCL,GULF"
	},
	{
		"player" : "handbr01",
		"teams" : "5.8",
		"teamspitcher" : "NOR,JUP PCL,FLOR"
	},
	{
		"player" : "perezol01",
		"teams" : "8.9",
		"teamspitcher" : "PDS ARIZ"
	},
	{
		"player" : "perezol01",
		"teams" : "8.4",
		"teamspitcher" : "YUC,IDF MEX,PION"
	},
	{
		"player" : "perezol01",
		"teams" : "7.5",
		"teamspitcher" : "FWA,LEL MIDW,CALL"
	},
	{
		"player" : "perezol01",
		"teams" : "5.9",
		"teamspitcher" : "LEL,MOB CALL,SOUL"
	},
	{
		"player" : "perezol01",
		"teams" : "8.3",
		"teamspitcher" : "POR PCL"
	},
	{
		"player" : "perezol01",
		"teams" : "12.6",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "perezol01",
		"teams" : "8.1",
		"teamspitcher" : "INA,NFK IL"
	},
	{
		"player" : "perezol01",
		"teams" : "4.5",
		"teamspitcher" : "MET GULF"
	},
	{
		"player" : "perezol01",
		"teams" : "8.8",
		"teamspitcher" : "BFL,BKN,SCE IL,NYPL,FLOR"
	},
	{
		"player" : "perezol01",
		"teams" : "7.5",
		"teamspitcher" : "CUL,SCE,BFL MXPW,FLOR,IL"
	},
	{
		"player" : "perezol01",
		"teams" : "8.6",
		"teamspitcher" : "HRB,CUL EL,MXPW"
	},
	{
		"player" : "perezol01",
		"teams" : "9.3",
		"teamspitcher" : "TAC,CUL PCL,MXPW"
	},
	{
		"player" : "perezol01",
		"teams" : "3.9",
		"teamspitcher" : "CUL MXPW"
	},
	{
		"player" : "perezol01",
		"teams" : "5.9",
		"teamspitcher" : "CUL MXPW"
	},
	{
		"player" : "perezol01",
		"teams" : "10.9",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "mcallza01",
		"teams" : "9.0",
		"teamspitcher" : "YNK GULF"
	},
	{
		"player" : "mcallza01",
		"teams" : "10.1",
		"teamspitcher" : "STI NYPL"
	},
	{
		"player" : "mcallza01",
		"teams" : "7.9",
		"teamspitcher" : "TAM,CHS FLOR,SALL"
	},
	{
		"player" : "mcallza01",
		"teams" : "7.3",
		"teamspitcher" : "TRE EL"
	},
	{
		"player" : "mcallza01",
		"teams" : "11.1",
		"teamspitcher" : "SWB,CLB IL"
	},
	{
		"player" : "mcallza01",
		"teams" : "9.0",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "mcallza01",
		"teams" : "8.4",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "mcallza01",
		"teams" : "5.8",
		"teamspitcher" : "CLB,AKR IL,EL"
	},
	{
		"player" : "mcallza01",
		"teams" : "8.1",
		"teamspitcher" : "CLB,LCO IL,MIDW"
	},
	{
		"player" : "mcallza01",
		"teams" : "9.0",
		"teamspitcher" : "CLB,AKR IL,EL"
	},
	{
		"player" : "mcallza01",
		"teams" : "9.0",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "goodyni01",
		"teams" : "5.6",
		"teamspitcher" : "CHS,TAM,STI SALL,FLOR,NYPL"
	},
	{
		"player" : "goodyni01",
		"teams" : "6.0",
		"teamspitcher" : "TAM FLOR"
	},
	{
		"player" : "goodyni01",
		"teams" : "8.6",
		"teamspitcher" : "TRE,TAM EL,FLOR"
	},
	{
		"player" : "goodyni01",
		"teams" : "6.2",
		"teamspitcher" : "TRE,SWB EL,IL"
	},
	{
		"player" : "goodyni01",
		"teams" : "4.6",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "goodyni01",
		"teams" : "4.2",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "tomlijo01",
		"teams" : "6.5",
		"teamspitcher" : "MHV NYPL"
	},
	{
		"player" : "tomlijo01",
		"teams" : "8.7",
		"teamspitcher" : "LCO,KIN SALL,CARL"
	},
	{
		"player" : "tomlijo01",
		"teams" : "8.1",
		"teamspitcher" : "KIN,SPS,BFL CARL,AZFL,IL"
	},
	{
		"player" : "tomlijo01",
		"teams" : "9.2",
		"teamspitcher" : "AKR EL"
	},
	{
		"player" : "tomlijo01",
		"teams" : "7.0",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "tomlijo01",
		"teams" : "5.6",
		"teamspitcher" : "CLB,AKR,LCO,INS IL,EL,MIDW,ARIZ"
	},
	{
		"player" : "tomlijo01",
		"teams" : "5.9",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "tomlijo01",
		"teams" : "10.3",
		"teamspitcher" : "CLB,MHV,AKR,INS IL,NYPL,EL,ARIZ"
	},
	{
		"player" : "tomlijo01",
		"teams" : "19.6",
		"teamspitcher" : "MHV NYPL"
	},
	{
		"player" : "tomlijo01",
		"teams" : "14.6",
		"teamspitcher" : "CLB,AKR IL,EL"
	},
	{
		"player" : "olsonty01",
		"teams" : "10.2",
		"teamspitcher" : "EVR NORW"
	},
	{
		"player" : "olsonty01",
		"teams" : "8.9",
		"teamspitcher" : "WTN,HDS SOUL,CALL"
	},
	{
		"player" : "olsonty01",
		"teams" : "10.2",
		"teamspitcher" : "TAC,GIG PCL,DOWL"
	},
	{
		"player" : "olsonty01",
		"teams" : "10.8",
		"teamspitcher" : "SWB,CLB,OMA IL,PCL"
	},
	{
		"player" : "olsonty01",
		"teams" : "6.0",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "olsonty01",
		"teams" : "5.8",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "belivje01",
		"teams" : "6.6",
		"teamspitcher" : "BOI,CBZ NORW,ARIZ"
	},
	{
		"player" : "belivje01",
		"teams" : "7.2",
		"teamspitcher" : "PEO MIDW"
	},
	{
		"player" : "belivje01",
		"teams" : "6.6",
		"teamspitcher" : "DYT,PEO FLOR,MIDW"
	},
	{
		"player" : "belivje01",
		"teams" : "6.1",
		"teamspitcher" : "KNX,DYT,MES SOUL,FLOR,AZFL"
	},
	{
		"player" : "belivje01",
		"teams" : "9.0",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "belivje01",
		"teams" : "7.8",
		"teamspitcher" : "DHM,MTG,RRK IL,SOUL,PCL"
	},
	{
		"player" : "belivje01",
		"teams" : "4.8",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "belivje01",
		"teams" : "4.9",
		"teamspitcher" : "FDK,BOW CARL,EL"
	},
	{
		"player" : "belivje01",
		"teams" : "6.1",
		"teamspitcher" : "BFL IL"
	},
	{
		"player" : "belivje01",
		"teams" : "8.0",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "allenco01",
		"teams" : "5.8",
		"teamspitcher" : "MHV,LCO,KIN,AKR NYPL,MIDW,CARL,EL"
	},
	{
		"player" : "allenco01",
		"teams" : "5.2",
		"teamspitcher" : "CLB,AKR,CAR IL,EL,CARL"
	},
	{
		"player" : "taylobe10",
		"teams" : "8.3",
		"teamspitcher" : "GRV,LOW SALL,NYPL"
	},
	{
		"player" : "taylobe10",
		"teams" : "7.2",
		"teamspitcher" : "SAL,PRT CARL,EL"
	},
	{
		"player" : "taylobe10",
		"teams" : "4.6",
		"teamspitcher" : "PAW,LOW IL,NYPL"
	},
	{
		"player" : "taylobe10",
		"teams" : "6.6",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "edwarjo02",
		"teams" : "5.7",
		"teamspitcher" : "SPO,MYR,RGS,FRI,PCE NORW,CARL,ARIZ,TL,PRWL"
	},
	{
		"player" : "edwarjo02",
		"teams" : "7.0",
		"teamspitcher" : "MYR,FRI CARL,TL"
	},
	{
		"player" : "edwarjo02",
		"teams" : "7.7",
		"teamspitcher" : "FRI,RRK TL,PCL"
	},
	{
		"player" : "edwarjo02",
		"teams" : "5.2",
		"teamspitcher" : "RRK,ELP PCL"
	},
	{
		"player" : "edwarjo02",
		"teams" : "0.0",
		"teamspitcher" : "LEL CALL"
	},
	{
		"player" : "edwarjo02",
		"teams" : "6.6",
		"teamspitcher" : "CLB,AKR IL,EL"
	},
	{
		"player" : "belisma01",
		"teams" : "10.9",
		"teamspitcher" : "DAN APPY"
	},
	{
		"player" : "belisma01",
		"teams" : "7.5",
		"teamspitcher" : "MAC,MYR SALL,CARL"
	},
	{
		"player" : "belisma01",
		"teams" : "",
		"teamspitcher" : ""
	},
	{
		"player" : "belisma01",
		"teams" : "9.2",
		"teamspitcher" : "GRV SOUL"
	},
	{
		"player" : "belisma01",
		"teams" : "9.2",
		"teamspitcher" : "GRV,LOU,RMD SOUL,IL"
	},
	{
		"player" : "belisma01",
		"teams" : "10.6",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "belisma01",
		"teams" : "5.5",
		"teamspitcher" : "LOU,DAY,CNG IL,MIDW,SOUL"
	},
	{
		"player" : "belisma01",
		"teams" : "10.5",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "belisma01",
		"teams" : "8.4",
		"teamspitcher" : "LOU,CNG,SAR IL,SOUL,FLOR"
	},
	{
		"player" : "belisma01",
		"teams" : "8.9",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "belisma01",
		"teams" : "12.3",
		"teamspitcher" : "HRB,POT,SYR EL,CARL,IL"
	},
	{
		"player" : "belisma01",
		"teams" : "8.4",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "millean01",
		"teams" : "3.6",
		"teamspitcher" : "LAK FLOR"
	},
	{
		"player" : "millean01",
		"teams" : "8.2",
		"teamspitcher" : "LAK,ERI,TOL FLOR,EL,IL"
	},
	{
		"player" : "millean01",
		"teams" : "6.5",
		"teamspitcher" : "JUP,CAR,JUM FLOR,SOUL,GULF"
	},
	{
		"player" : "millean01",
		"teams" : "7.8",
		"teamspitcher" : "MES,NOR,JUM,JCK,JUP AZFL,PCL,GULF,SOUL,FLOR"
	},
	{
		"player" : "millean01",
		"teams" : "9.4",
		"teamspitcher" : "JCK,JUP SOUL,FLOR"
	},
	{
		"player" : "millean01",
		"teams" : "5.8",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "millean01",
		"teams" : "4.2",
		"teamspitcher" : "PAW,GRV IL,SALL"
	},
	{
		"player" : "millean01",
		"teams" : "18.0",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "millean01",
		"teams" : "0.0",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "millean01",
		"teams" : "11.1",
		"teamspitcher" : "CLB,LCO,AKR IL,MIDW,EL"
	},
	{
		"player" : "ramirne01",
		"teams" : "5.1",
		"teamspitcher" : "SPO NORW"
	},
	{
		"player" : "ramirne01",
		"teams" : "7.9",
		"teamspitcher" : "HCK SALL"
	},
	{
		"player" : "ramirne01",
		"teams" : "9.6",
		"teamspitcher" : "HCK SALL"
	},
	{
		"player" : "ramirne01",
		"teams" : "6.9",
		"teamspitcher" : "RRK,FRI,SPS,MYR PCL,TL,AZFL,CARL"
	},
	{
		"player" : "ramirne01",
		"teams" : "9.1",
		"teamspitcher" : "RRK,FRI PCL,TL"
	},
	{
		"player" : "ramirne01",
		"teams" : "6.5",
		"teamspitcher" : "FRI,KNX TL,SOUL"
	},
	{
		"player" : "ramirne01",
		"teams" : "9.7",
		"teamspitcher" : "IWA,CBZ PCL,ARIZ"
	},
	{
		"player" : "ramirne01",
		"teams" : "6.0",
		"teamspitcher" : "KNX,IWA SOUL,PCL"
	},
	{
		"player" : "ramirne01",
		"teams" : "6.2",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "ramirne01",
		"teams" : "14.1",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "ramirne01",
		"teams" : "7.3",
		"teamspitcher" : "CLB,AKR IL,EL"
	},
	{
		"player" : "plutkad01",
		"teams" : "8.9",
		"teamspitcher" : "CAR,LCO CARL,MIDW"
	},
	{
		"player" : "plutkad01",
		"teams" : "6.8",
		"teamspitcher" : "AKR,LBG EL,CARL"
	},
	{
		"player" : "plutkad01",
		"teams" : "8.4",
		"teamspitcher" : "CLB,AKR IL,EL"
	},
	{
		"player" : "plutkad01",
		"teams" : "10.1",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "plutkad01",
		"teams" : "5.0",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "bauertr01",
		"teams" : "9.5",
		"teamspitcher" : "MOB,VIS SOUL,CALL"
	},
	{
		"player" : "bauertr01",
		"teams" : "7.4",
		"teamspitcher" : "REN,MOB PCL,SOUL"
	},
	{
		"player" : "bauertr01",
		"teams" : "8.8",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "bauertr01",
		"teams" : "7.0",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "clevimi01",
		"teams" : "6.8",
		"teamspitcher" : "ORM PION"
	},
	{
		"player" : "clevimi01",
		"teams" : "8.1",
		"teamspitcher" : "CDR MIDW"
	},
	{
		"player" : "clevimi01",
		"teams" : "12.7",
		"teamspitcher" : "ANG,ORM ARIZ,PION"
	},
	{
		"player" : "clevimi01",
		"teams" : "8.5",
		"teamspitcher" : "SBR,BUR,CAR CALL,MIDW,CARL"
	},
	{
		"player" : "clevimi01",
		"teams" : "7.2",
		"teamspitcher" : "AKR EL"
	},
	{
		"player" : "clevimi01",
		"teams" : "7.5",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "clevimi01",
		"teams" : "7.4",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "carraca01",
		"teams" : "9.9",
		"teamspitcher" : "CLR GULF"
	},
	{
		"player" : "carraca01",
		"teams" : "11.9",
		"teamspitcher" : "LWD,BAT,CLR SALL,NYPL,GULF"
	},
	{
		"player" : "carraca01",
		"teams" : "5.8",
		"teamspitcher" : "LWD SALL"
	},
	{
		"player" : "carraca01",
		"teams" : "7.3",
		"teamspitcher" : "REA,CLW EL,FLOR"
	},
	{
		"player" : "carraca01",
		"teams" : "8.5",
		"teamspitcher" : "REA,CCS,LHV EL,VEWL,IL"
	},
	{
		"player" : "carraca01",
		"teams" : "8.5",
		"teamspitcher" : "LHV,CLB IL"
	},
	{
		"player" : "carraca01",
		"teams" : "8.3",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "carraca01",
		"teams" : "9.8",
		"teamspitcher" : "AKR EL"
	},
	{
		"player" : "carraca01",
		"teams" : "7.4",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "carraca01",
		"teams" : "15.8",
		"teamspitcher" : "AKR EL"
	},
	{
		"player" : "carraca01",
		"teams" : "2.3",
		"teamspitcher" : "AKR EL"
	},
	{
		"player" : "biebesh01",
		"teams" : "3.8",
		"teamspitcher" : "MHV NYPL"
	},
	{
		"player" : "biebesh01",
		"teams" : "9.6",
		"teamspitcher" : "LBG,AKR,LCO CARL,EL,MIDW"
	},
	{
		"player" : "biebesh01",
		"teams" : "6.3",
		"teamspitcher" : "CLB,AKR IL,EL"
	},
	{
		"player" : "klubeco01",
		"teams" : "7.6",
		"teamspitcher" : "EUG NORW"
	},
	{
		"player" : "klubeco01",
		"teams" : "9.0",
		"teamspitcher" : "LEL,FWA CALL,MIDW"
	},
	{
		"player" : "klubeco01",
		"teams" : "9.1",
		"teamspitcher" : "LEL,SAN CALL,TL"
	},
	{
		"player" : "klubeco01",
		"teams" : "9.5",
		"teamspitcher" : "SAN,AKR,CLB TL,EL,IL"
	},
	{
		"player" : "klubeco01",
		"teams" : "9.1",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "klubeco01",
		"teams" : "8.7",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "klubeco01",
		"teams" : "10.2",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "klubeco01",
		"teams" : "1.8",
		"teamspitcher" : "AKR EL"
	},
	{
		"player" : "mejiafr01",
		"teams" : "INS · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "mejiafr01",
		"teams" : "MHV · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "mejiafr01",
		"teams" : "LCO · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "mejiafr01",
		"teams" : "LCO,LBG,ESS · MIDW,CARL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "mejiafr01",
		"teams" : "AKR,GLN,ESS · EL,AZFL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "mejiafr01",
		"teams" : "CLB,ELP · IL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "martile01",
		"teams" : "VLC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "martile01",
		"teams" : "VLC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "martile01",
		"teams" : "VLC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "martile01",
		"teams" : "VLC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "martile01",
		"teams" : "VLC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "martile01",
		"teams" : "RRK,FRI,SPS,RGS · PCL,TL,AZFL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "martile01",
		"teams" : "RRK,LCY · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "martile01",
		"teams" : "LCY · DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "martile01",
		"teams" : "RRK,LCY · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "martile01",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "martile01",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "haaseer01",
		"teams" : "INS · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "haaseer01",
		"teams" : "INS,MHV · ARIZ,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "haaseer01",
		"teams" : "LCO · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "haaseer01",
		"teams" : "LCO,CAR · MIDW,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "haaseer01",
		"teams" : "LBG · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "haaseer01",
		"teams" : "AKR,MES · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "haaseer01",
		"teams" : "AKR,ESC,CLB · EL,DOWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "haaseer01",
		"teams" : "CLB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "barnebr02",
		"teams" : "GRE · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "barnebr02",
		"teams" : "GRE · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "barnebr02",
		"teams" : "TRC · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "barnebr02",
		"teams" : "LEX · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "barnebr02",
		"teams" : "LNR,LEX,CPC · CALL,SALL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "barnebr02",
		"teams" : "LNR,PEA,RRK · CALL,AZFL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "barnebr02",
		"teams" : "OKC,CPC,SNY · PCL,TL,AUBL",
		"teamspitcher" : ""
	},
	{
		"player" : "barnebr02",
		"teams" : "OKC,CPC,CCS · PCL,TL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "barnebr02",
		"teams" : "ABQ · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "barnebr02",
		"teams" : "ABQ · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "barnebr02",
		"teams" : "NOR · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "barnebr02",
		"teams" : "CLB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "rosalad01",
		"teams" : "BIL,DAY · PION,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "rosalad01",
		"teams" : "DAY,SAR · MIDW,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "rosalad01",
		"teams" : "CNG,SAR,SPS · SOUL,FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "rosalad01",
		"teams" : "LOU,ARE · IL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "rosalad01",
		"teams" : "MXL,LOU · MXPW,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "rosalad01",
		"teams" : "SAC,MXL · PCL,MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "rosalad01",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "rosalad01",
		"teams" : "SAC,STK · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "rosalad01",
		"teams" : "RRK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "rosalad01",
		"teams" : "CLB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "donaljo02",
		"teams" : "BOI,CBZ · NORW,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "donaljo02",
		"teams" : "PEO,STK,PHO · MIDW,CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "donaljo02",
		"teams" : "MDL · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "donaljo02",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "donaljo02",
		"teams" : "SAC,ESC · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "donaljo02",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "donaljo02",
		"teams" : "DUN · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "donaljo02",
		"teams" : "DUN,CLB · FLOR,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "chiselo01",
		"teams" : "MHV · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "chiselo01",
		"teams" : "KIN,AKR · CARL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "chiselo01",
		"teams" : "AKR · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "chiselo01",
		"teams" : "CLB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "chiselo01",
		"teams" : "CLB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "chiselo01",
		"teams" : "CLB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "chiselo01",
		"teams" : "CLB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "chiselo01",
		"teams" : "AKR,CLB · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "chiselo01",
		"teams" : "CLB,AKR · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "chiselo01",
		"teams" : "CLB,AKR · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "zimmebr01",
		"teams" : "MHV,LCO · NYPL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "zimmebr01",
		"teams" : "LBG,AKR · CARL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "zimmebr01",
		"teams" : "AKR,CLB,MES · EL,IL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "zimmebr01",
		"teams" : "CLB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "zimmebr01",
		"teams" : "CLB,AKR · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "diazya01",
		"teams" : "VLC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "diazya01",
		"teams" : "VLC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "diazya01",
		"teams" : "VLC · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "diazya01",
		"teams" : "CAR · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "diazya01",
		"teams" : "AKR,SCO,CLB · EL,AZFL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "diazya01",
		"teams" : "CLB,CCS,AKR · IL,VEWL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "diazya01",
		"teams" : "CLB,CCS · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "diazya01",
		"teams" : "CLB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaer01",
		"teams" : "IS1 · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaer01",
		"teams" : "IS1 · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaer01",
		"teams" : "INS · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaer01",
		"teams" : "MHV · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaer01",
		"teams" : "LCO,ESC,CAR · MIDW,DOWL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaer01",
		"teams" : "CAR,AKR,ESC · CARL,EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaer01",
		"teams" : "AKR,CLB,ESC · EL,IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaer01",
		"teams" : "CLB,ESC · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaer01",
		"teams" : "CLB,ESC · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaer01",
		"teams" : "ESC · DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "naquity01",
		"teams" : "MHV · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "naquity01",
		"teams" : "CAR,SPS,AKR · CARL,AZFL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "naquity01",
		"teams" : "AKR,GIG · EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "naquity01",
		"teams" : "CLB,AKR · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "naquity01",
		"teams" : "CLB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "naquity01",
		"teams" : "CLB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "naquity01",
		"teams" : "CLB,AKR · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezro02",
		"teams" : "INS,LCO,MHV,MGZ · ARIZ,SALL,NYPL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezro02",
		"teams" : "LCO,PEA,MGZ · MIDW,AZFL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezro02",
		"teams" : "KIN,PHO,MGZ · CARL,AZFL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezro02",
		"teams" : "AKR,MGZ · EL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezro02",
		"teams" : "CLB,AKR,MGZ · IL,EL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezro02",
		"teams" : "CLB,MGZ · IL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezro02",
		"teams" : "MGZ · PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezro02",
		"teams" : "INS,CLB,LCO · ARIZ,IL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "perezro02",
		"teams" : "LCY · DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "davisra01",
		"teams" : "BRD,WPT · GULF,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "davisra01",
		"teams" : "BRD,HCK,WPT · GULF,SALL,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "davisra01",
		"teams" : "HCK · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "davisra01",
		"teams" : "LBG · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "davisra01",
		"teams" : "ATO,GUA · EL,MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "davisra01",
		"teams" : "INA,CCS · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "davisra01",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "davisra01",
		"teams" : "ORN · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "davisra01",
		"teams" : "MAN,DUN · EL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "davisra01",
		"teams" : "DUN · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "davisra01",
		"teams" : "AKR · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "guyerbr01",
		"teams" : "CBZ,BOI · ARIZ,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "guyerbr01",
		"teams" : "PEO · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "guyerbr01",
		"teams" : "DYT,KNX · FLOR,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "guyerbr01",
		"teams" : "KNX,ARA · SOUL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "guyerbr01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "guyerbr01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "guyerbr01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "guyerbr01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "guyerbr01",
		"teams" : "POE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "guyerbr01",
		"teams" : "CLB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "guyerbr01",
		"teams" : "CLB,AKR · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "encared01",
		"teams" : "RGS · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "encared01",
		"teams" : "BIL,SAV,DAY · PION,SALL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "encared01",
		"teams" : "DAY · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "encared01",
		"teams" : "CNG,POT · SOUL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "encared01",
		"teams" : "CNG · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "encared01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "encared01",
		"teams" : "LOU,AGU · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "encared01",
		"teams" : "AGU,LOU · DOWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "encared01",
		"teams" : "AGU · DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "encared01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "encared01",
		"teams" : "AGU,LVG,DUN · DOWL,PCL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "encared01",
		"teams" : "AGU · DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "encared01",
		"teams" : "BFL,DUN · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "cabreme01",
		"teams" : "STI · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "cabreme01",
		"teams" : "TAM,BTC · FLOR,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "cabreme01",
		"teams" : "TRE,CLB · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "cabreme01",
		"teams" : "CLB,AGU · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "cabreme01",
		"teams" : "AGU,SWB · DOWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "cabreme01",
		"teams" : "MAN,DUN,BFL · EL,FLOR,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "cabreme01",
		"teams" : "CLB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "allengr01",
		"teams" : "MHV · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "allengr01",
		"teams" : "LCO,LBG · MIDW,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "allengr01",
		"teams" : "LBG,AKR,MES · CARL,EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "allengr01",
		"teams" : "AKR,INS · EL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "allengr01",
		"teams" : "CLB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "brantmi02",
		"teams" : "BRR,HEL · ARIZ,PION",
		"teamspitcher" : ""
	},
	{
		"player" : "brantmi02",
		"teams" : "CHL · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "brantmi02",
		"teams" : "CHL,HVL · SALL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "brantmi02",
		"teams" : "HVL · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "brantmi02",
		"teams" : "CLB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "brantmi02",
		"teams" : "CLB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "brantmi02",
		"teams" : "AKR,CLB,LCO,MHV · EL,IL,MIDW,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "ramirjo01",
		"teams" : "INS · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "ramirjo01",
		"teams" : "LCO,AZU,MHV · MIDW,DOWL,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "ramirjo01",
		"teams" : "AKR,AZU · EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "ramirjo01",
		"teams" : "CLB,AZU · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "ramirjo01",
		"teams" : "CLB,AZU · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "lindofr01",
		"teams" : "MHV · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "lindofr01",
		"teams" : "LCO · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "lindofr01",
		"teams" : "CAR,AKR · CARL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "lindofr01",
		"teams" : "AKR,CLB,PEA · EL,IL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "lindofr01",
		"teams" : "CLB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "kipnija01",
		"teams" : "MHV · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "kipnija01",
		"teams" : "AKR,KIN,PEA · EL,CARL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "kipnija01",
		"teams" : "CLB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "kipnija01",
		"teams" : "CLB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "kipnija01",
		"teams" : "CLB,AKR · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "alonsyo01",
		"teams" : "WKI,SAR · HIWB,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "alonsyo01",
		"teams" : "SAR,CAR,PES,CGU,RDL · FLOR,SOUL,AZFL,PRWL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "alonsyo01",
		"teams" : "LOU,CAR · IL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "alonsyo01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "alonsyo01",
		"teams" : "TUC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "alonsyo01",
		"teams" : "ELP,PDS · PCL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "alonsyo01",
		"teams" : "ELP,LEL · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "gomesya01",
		"teams" : "AUB,BJY · NYPL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "gomesya01",
		"teams" : "DUN,LNS · FLOR,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "gomesya01",
		"teams" : "MAN,PHO,LVG · EL,AZFL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "gomesya01",
		"teams" : "LVG,AZU · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "gomesya01",
		"teams" : "CLB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "gomesya01",
		"teams" : "CLB,LCO · IL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "gomesya01",
		"teams" : "AKR · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "wislema01",
		"teams" : "",
		"teamspitcher" : "PDS ARIZ"
	},
	{
		"player" : "wislema01",
		"teams" : "7.5",
		"teamspitcher" : "FWA MIDW"
	},
	{
		"player" : "wislema01",
		"teams" : "7.1",
		"teamspitcher" : "SAN,LEL TL,CALL"
	},
	{
		"player" : "wislema01",
		"teams" : "9.6",
		"teamspitcher" : "ELP,SAN PCL,TL"
	},
	{
		"player" : "wislema01",
		"teams" : "9.4",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "wislema01",
		"teams" : "8.1",
		"teamspitcher" : "GWI,LCY IL,DOWL"
	},
	{
		"player" : "wislema01",
		"teams" : "9.7",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "wislema01",
		"teams" : "9.8",
		"teamspitcher" : "GWI,LOU IL"
	},
	{
		"player" : "weissza01",
		"teams" : "9.7",
		"teamspitcher" : "BIL,RDL PION,ARIZ"
	},
	{
		"player" : "weissza01",
		"teams" : "7.1",
		"teamspitcher" : "DAY MIDW"
	},
	{
		"player" : "weissza01",
		"teams" : "6.6",
		"teamspitcher" : "PEN,DYT,PEA SOUL,FLOR,AZFL"
	},
	{
		"player" : "weissza01",
		"teams" : "6.6",
		"teamspitcher" : "PEN,DYT SOUL,FLOR"
	},
	{
		"player" : "weissza01",
		"teams" : "8.6",
		"teamspitcher" : "LOU,PEN,RDL IL,SOUL,ARIZ"
	},
	{
		"player" : "hugheja02",
		"teams" : "7.6",
		"teamspitcher" : "HCK,WPT SALL,NYPL"
	},
	{
		"player" : "hugheja02",
		"teams" : "10.0",
		"teamspitcher" : "HCK SALL"
	},
	{
		"player" : "hugheja02",
		"teams" : "10.0",
		"teamspitcher" : "LBG,ATO,SCO CARL,EL,AZFL"
	},
	{
		"player" : "hugheja02",
		"teams" : "10.0",
		"teamspitcher" : "ATO,BRD EL,GULF"
	},
	{
		"player" : "hugheja02",
		"teams" : "9.9",
		"teamspitcher" : "ATO EL"
	},
	{
		"player" : "hugheja02",
		"teams" : "8.4",
		"teamspitcher" : "ATO,INA EL,IL"
	},
	{
		"player" : "hugheja02",
		"teams" : "4.5",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "hugheja02",
		"teams" : "7.0",
		"teamspitcher" : "INA,ATO IL,EL"
	},
	{
		"player" : "hugheja02",
		"teams" : "5.9",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "hugheja02",
		"teams" : "10.5",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "reyesje01",
		"teams" : "8.2",
		"teamspitcher" : "RDL ARIZ"
	},
	{
		"player" : "reyesje01",
		"teams" : "7.0",
		"teamspitcher" : "DAY MIDW"
	},
	{
		"player" : "reyesje01",
		"teams" : "8.8",
		"teamspitcher" : "DYT,PEN FLOR,SOUL"
	},
	{
		"player" : "reyesje01",
		"teams" : "8.6",
		"teamspitcher" : "PEN,LOU SOUL,IL"
	},
	{
		"player" : "gallayo01",
		"teams" : "8.8",
		"teamspitcher" : "BRR,BEL ARIZ,MIDW"
	},
	{
		"player" : "gallayo01",
		"teams" : "7.4",
		"teamspitcher" : "CHL SALL"
	},
	{
		"player" : "gallayo01",
		"teams" : "6.0",
		"teamspitcher" : "BRE,HVL FLOR,SOUL"
	},
	{
		"player" : "gallayo01",
		"teams" : "6.1",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "gallayo01",
		"teams" : "11.5",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "gallayo01",
		"teams" : "8.3",
		"teamspitcher" : "NFK,FDK IL,CARL"
	},
	{
		"player" : "gallayo01",
		"teams" : "8.9",
		"teamspitcher" : "RRK PCL"
	},
	{
		"player" : "quackke01",
		"teams" : "5.4",
		"teamspitcher" : "FWA,EUG MIDW,NORW"
	},
	{
		"player" : "quackke01",
		"teams" : "6.0",
		"teamspitcher" : "LEL,PEA CALL,AZFL"
	},
	{
		"player" : "quackke01",
		"teams" : "6.8",
		"teamspitcher" : "TUC,SAN PCL,TL"
	},
	{
		"player" : "quackke01",
		"teams" : "5.7",
		"teamspitcher" : "ELP PCL"
	},
	{
		"player" : "quackke01",
		"teams" : "4.6",
		"teamspitcher" : "ELP PCL"
	},
	{
		"player" : "quackke01",
		"teams" : "8.3",
		"teamspitcher" : "ELP PCL"
	},
	{
		"player" : "quackke01",
		"teams" : "9.1",
		"teamspitcher" : "ELP PCL"
	},
	{
		"player" : "quackke01",
		"teams" : "7.5",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "crockky01",
		"teams" : "5.8",
		"teamspitcher" : "AKR,MHV,LCO EL,NYPL,MIDW"
	},
	{
		"player" : "crockky01",
		"teams" : "5.5",
		"teamspitcher" : "AKR,CLB EL,IL"
	},
	{
		"player" : "crockky01",
		"teams" : "13.2",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "crockky01",
		"teams" : "8.7",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "crockky01",
		"teams" : "7.9",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "crockky01",
		"teams" : "8.5",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "raineta01",
		"teams" : "8.8",
		"teamspitcher" : "BIL PION"
	},
	{
		"player" : "raineta01",
		"teams" : "9.5",
		"teamspitcher" : "DAY MIDW"
	},
	{
		"player" : "raineta01",
		"teams" : "4.2",
		"teamspitcher" : "DYT,PEN FLOR,SOUL"
	},
	{
		"player" : "raineta01",
		"teams" : "4.4",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "simslu01",
		"teams" : "7.4",
		"teamspitcher" : "DAN,KIS APPY,GULF"
	},
	{
		"player" : "simslu01",
		"teams" : "6.4",
		"teamspitcher" : "ROM SALL"
	},
	{
		"player" : "simslu01",
		"teams" : "8.4",
		"teamspitcher" : "LBG CARL"
	},
	{
		"player" : "simslu01",
		"teams" : "7.2",
		"teamspitcher" : "MSS,CAR,PEA,KIS SOUL,CARL,AZFL,GULF"
	},
	{
		"player" : "simslu01",
		"teams" : "7.7",
		"teamspitcher" : "MSS,GWI SOUL,IL"
	},
	{
		"player" : "simslu01",
		"teams" : "7.4",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "simslu01",
		"teams" : "7.6",
		"teamspitcher" : "GWI,LOU IL"
	},
	{
		"player" : "hernada01",
		"teams" : "8.9",
		"teamspitcher" : "ADN NYPL"
	},
	{
		"player" : "hernada01",
		"teams" : "8.3",
		"teamspitcher" : "DEL SALL"
	},
	{
		"player" : "hernada01",
		"teams" : "8.6",
		"teamspitcher" : "FDK CARL"
	},
	{
		"player" : "hernada01",
		"teams" : "7.1",
		"teamspitcher" : "BOW EL"
	},
	{
		"player" : "hernada01",
		"teams" : "6.5",
		"teamspitcher" : "NFK,BOW IL,EL"
	},
	{
		"player" : "hernada01",
		"teams" : "4.5",
		"teamspitcher" : "BOW EL"
	},
	{
		"player" : "hernada01",
		"teams" : "5.6",
		"teamspitcher" : "REN PCL"
	},
	{
		"player" : "hernada01",
		"teams" : "1.5",
		"teamspitcher" : "MOB,VIS SOUL,CALL"
	},
	{
		"player" : "hernada01",
		"teams" : "4.5",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "hernada01",
		"teams" : "23.1",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "shackke01",
		"teams" : "7.4",
		"teamspitcher" : "BRR ARIZ"
	},
	{
		"player" : "shackke01",
		"teams" : "10.2",
		"teamspitcher" : "HEL PION"
	},
	{
		"player" : "shackke01",
		"teams" : "9.8",
		"teamspitcher" : "APP MIDW"
	},
	{
		"player" : "shackke01",
		"teams" : "9.0",
		"teamspitcher" : "BRE,HVL,SPS FLOR,SOUL,AZFL"
	},
	{
		"player" : "shackke01",
		"teams" : "10.1",
		"teamspitcher" : "HVL,BRE SOUL,FLOR"
	},
	{
		"player" : "shackke01",
		"teams" : "10.5",
		"teamspitcher" : "PEN SOUL"
	},
	{
		"player" : "shackke01",
		"teams" : "7.3",
		"teamspitcher" : "LOU,PEN IL,SOUL"
	},
	{
		"player" : "shackke01",
		"teams" : "6.3",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "shackke01",
		"teams" : "5.4",
		"teamspitcher" : "LOU,PEN IL,SOUL"
	},
	{
		"player" : "briceau01",
		"teams" : "7.6",
		"teamspitcher" : "JUM GULF"
	},
	{
		"player" : "briceau01",
		"teams" : "5.9",
		"teamspitcher" : "JUM GULF"
	},
	{
		"player" : "briceau01",
		"teams" : "7.9",
		"teamspitcher" : "GBO SALL"
	},
	{
		"player" : "briceau01",
		"teams" : "9.4",
		"teamspitcher" : "GBO SALL"
	},
	{
		"player" : "briceau01",
		"teams" : "8.1",
		"teamspitcher" : "JUP FLOR"
	},
	{
		"player" : "briceau01",
		"teams" : "8.5",
		"teamspitcher" : "JCK,MES SOUL,AZFL"
	},
	{
		"player" : "briceau01",
		"teams" : "7.2",
		"teamspitcher" : "JCK,NOR SOUL,PCL"
	},
	{
		"player" : "briceau01",
		"teams" : "8.9",
		"teamspitcher" : "LOU,PEN IL,SOUL"
	},
	{
		"player" : "briceau01",
		"teams" : "6.9",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "mellake01",
		"teams" : "7.7",
		"teamspitcher" : "GIA DOSL"
	},
	{
		"player" : "mellake01",
		"teams" : "8.5",
		"teamspitcher" : "GNT ARIZ"
	},
	{
		"player" : "mellake01",
		"teams" : "8.9",
		"teamspitcher" : "AUG,SLM SALL,NORW"
	},
	{
		"player" : "mellake01",
		"teams" : "6.7",
		"teamspitcher" : "SJO,DYT CALL,FLOR"
	},
	{
		"player" : "mellake01",
		"teams" : "9.9",
		"teamspitcher" : "DYT,LOU FLOR,IL"
	},
	{
		"player" : "mellake01",
		"teams" : "8.9",
		"teamspitcher" : "PEN,AZU SOUL,DOWL"
	},
	{
		"player" : "mellake01",
		"teams" : "7.5",
		"teamspitcher" : "PEN,LOU SOUL,IL"
	},
	{
		"player" : "garream01",
		"teams" : "8.1",
		"teamspitcher" : "RDL,BIL ARIZ,PION"
	},
	{
		"player" : "garream01",
		"teams" : "9.7",
		"teamspitcher" : "DAY,BIL MIDW,PION"
	},
	{
		"player" : "garream01",
		"teams" : "7.8",
		"teamspitcher" : "DAY MIDW"
	},
	{
		"player" : "garream01",
		"teams" : "7.5",
		"teamspitcher" : "DYT FLOR"
	},
	{
		"player" : "garream01",
		"teams" : "6.2",
		"teamspitcher" : "PEN,LOU SOUL,IL"
	},
	{
		"player" : "garream01",
		"teams" : "10.5",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "iglesra01",
		"teams" : "8.2",
		"teamspitcher" : "IDJ CNS"
	},
	{
		"player" : "iglesra01",
		"teams" : "8.5",
		"teamspitcher" : "IDJ CNS"
	},
	{
		"player" : "iglesra01",
		"teams" : "7.8",
		"teamspitcher" : "IDJ CNS"
	},
	{
		"player" : "iglesra01",
		"teams" : "1.3",
		"teamspitcher" : "SPS AZFL"
	},
	{
		"player" : "iglesra01",
		"teams" : "8.1",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "iglesra01",
		"teams" : "5.4",
		"teamspitcher" : "PEN SOUL"
	},
	{
		"player" : "stephro01",
		"teams" : "7.5",
		"teamspitcher" : "DAY,BIL MIDW,PION"
	},
	{
		"player" : "stephro01",
		"teams" : "7.2",
		"teamspitcher" : "DAY,BAK,PEN MIDW,CALL,SOUL"
	},
	{
		"player" : "stephro01",
		"teams" : "7.5",
		"teamspitcher" : "PEN SOUL"
	},
	{
		"player" : "stephro01",
		"teams" : "7.0",
		"teamspitcher" : "PEN,LOU SOUL,IL"
	},
	{
		"player" : "stephro01",
		"teams" : "7.6",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "stephro01",
		"teams" : "6.0",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "stephro01",
		"teams" : "5.9",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "stephja01",
		"teams" : "9.7",
		"teamspitcher" : "RDL ARIZ"
	},
	{
		"player" : "stephja01",
		"teams" : "11.0",
		"teamspitcher" : "DAY MIDW"
	},
	{
		"player" : "stephja01",
		"teams" : "9.4",
		"teamspitcher" : "DAY MIDW"
	},
	{
		"player" : "stephja01",
		"teams" : "9.7",
		"teamspitcher" : "DYT FLOR"
	},
	{
		"player" : "stephja01",
		"teams" : "8.8",
		"teamspitcher" : "PEN SOUL"
	},
	{
		"player" : "stephja01",
		"teams" : "10.1",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "stephja01",
		"teams" : "9.4",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "peralwa01",
		"teams" : "6.5",
		"teamspitcher" : "RDS DOSL"
	},
	{
		"player" : "peralwa01",
		"teams" : "7.0",
		"teamspitcher" : "RDS DOSL"
	},
	{
		"player" : "peralwa01",
		"teams" : "12.3",
		"teamspitcher" : "RDL ARIZ"
	},
	{
		"player" : "peralwa01",
		"teams" : "9.6",
		"teamspitcher" : "DAY MIDW"
	},
	{
		"player" : "peralwa01",
		"teams" : "10.4",
		"teamspitcher" : "BAK CALL"
	},
	{
		"player" : "peralwa01",
		"teams" : "9.6",
		"teamspitcher" : "PEN,AGU SOUL,DOWL"
	},
	{
		"player" : "peralwa01",
		"teams" : "7.3",
		"teamspitcher" : "LOU,PEN IL,SOUL"
	},
	{
		"player" : "peralwa01",
		"teams" : "6.6",
		"teamspitcher" : "LOU,AGU IL,DOWL"
	},
	{
		"player" : "florody01",
		"teams" : "7.8",
		"teamspitcher" : "HDV NYPL"
	},
	{
		"player" : "florody01",
		"teams" : "8.1",
		"teamspitcher" : "BWG,POE MIDW,FLOR"
	},
	{
		"player" : "florody01",
		"teams" : "10.5",
		"teamspitcher" : "MTG SOUL"
	},
	{
		"player" : "florody01",
		"teams" : "10.9",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "florody01",
		"teams" : "9.5",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "florody01",
		"teams" : "10.8",
		"teamspitcher" : "IWA,OKC PCL"
	},
	{
		"player" : "florody01",
		"teams" : "11.3",
		"teamspitcher" : "LOU,OKC IL,PCL"
	},
	{
		"player" : "finnebr01",
		"teams" : "6.7",
		"teamspitcher" : "WMT,NTA CARL,TL"
	},
	{
		"player" : "finnebr01",
		"teams" : "9.1",
		"teamspitcher" : "LOU,OMA,NTA IL,PCL,TL"
	},
	{
		"player" : "finnebr01",
		"teams" : "4.5",
		"teamspitcher" : "PEN,LOU SOUL,IL"
	},
	{
		"player" : "finnebr01",
		"teams" : "12.0",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "reedco01",
		"teams" : "9.4",
		"teamspitcher" : "IDF PION"
	},
	{
		"player" : "reedco01",
		"teams" : "11.3",
		"teamspitcher" : "LEX SALL"
	},
	{
		"player" : "reedco01",
		"teams" : "7.8",
		"teamspitcher" : "WMT,PEN,NTA CARL,SOUL,TL"
	},
	{
		"player" : "reedco01",
		"teams" : "8.8",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "reedco01",
		"teams" : "8.9",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "reedco01",
		"teams" : "9.3",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "mahlety01",
		"teams" : "8.4",
		"teamspitcher" : "RDL ARIZ"
	},
	{
		"player" : "mahlety01",
		"teams" : "9.4",
		"teamspitcher" : "BIL PION"
	},
	{
		"player" : "mahlety01",
		"teams" : "8.6",
		"teamspitcher" : "DAY MIDW"
	},
	{
		"player" : "mahlety01",
		"teams" : "8.1",
		"teamspitcher" : "DYT,PEN FLOR,SOUL"
	},
	{
		"player" : "mahlety01",
		"teams" : "6.8",
		"teamspitcher" : "PEN,LOU SOUL,IL"
	},
	{
		"player" : "mahlety01",
		"teams" : "6.7",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "lorenmi01",
		"teams" : "11.5",
		"teamspitcher" : "GLN,DAY,PEN,BAK,RDL AZFL,MIDW,SOUL,CALL,ARIZ"
	},
	{
		"player" : "lorenmi01",
		"teams" : "8.4",
		"teamspitcher" : "PEN SOUL"
	},
	{
		"player" : "lorenmi01",
		"teams" : "7.1",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "lorenmi01",
		"teams" : "4.5",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "lorenmi01",
		"teams" : "2.3",
		"teamspitcher" : "PEN SOUL"
	},
	{
		"player" : "baileho02",
		"teams" : "10.2",
		"teamspitcher" : "RDL GULF"
	},
	{
		"player" : "baileho02",
		"teams" : "7.7",
		"teamspitcher" : "DAY MIDW"
	},
	{
		"player" : "baileho02",
		"teams" : "6.4",
		"teamspitcher" : "SAR,CNG FLOR,SOUL"
	},
	{
		"player" : "baileho02",
		"teams" : "7.6",
		"teamspitcher" : "LOU,SAR IL,FLOR"
	},
	{
		"player" : "baileho02",
		"teams" : "9.5",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "baileho02",
		"teams" : "8.7",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "baileho02",
		"teams" : "7.4",
		"teamspitcher" : "LOU,DAY IL,MIDW"
	},
	{
		"player" : "baileho02",
		"teams" : "10.2",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "baileho02",
		"teams" : "7.9",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "baileho02",
		"teams" : "11.9",
		"teamspitcher" : "LOU,PEN IL,SOUL"
	},
	{
		"player" : "baileho02",
		"teams" : "5.9",
		"teamspitcher" : "DAY,LOU,PEN MIDW,IL,SOUL"
	},
	{
		"player" : "baileho02",
		"teams" : "9.8",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "romansa01",
		"teams" : "10.4",
		"teamspitcher" : "BIL PION"
	},
	{
		"player" : "romansa01",
		"teams" : "10.0",
		"teamspitcher" : "DAY MIDW"
	},
	{
		"player" : "romansa01",
		"teams" : "10.2",
		"teamspitcher" : "DAY MIDW"
	},
	{
		"player" : "romansa01",
		"teams" : "9.8",
		"teamspitcher" : "DYT,PEN FLOR,SOUL"
	},
	{
		"player" : "romansa01",
		"teams" : "9.1",
		"teamspitcher" : "PEN SOUL"
	},
	{
		"player" : "romansa01",
		"teams" : "8.9",
		"teamspitcher" : "LOU IL"
	},
	{
		"player" : "desclan01",
		"teams" : "10.6",
		"teamspitcher" : "LNS MIDW"
	},
	{
		"player" : "desclan01",
		"teams" : "8.5",
		"teamspitcher" : "JCK,JUP SOUL,FLOR"
	},
	{
		"player" : "desclan01",
		"teams" : "8.1",
		"teamspitcher" : "NOR,JCK,SRV PCL,SOUL,AZFL"
	},
	{
		"player" : "desclan01",
		"teams" : "7.8",
		"teamspitcher" : "LOU,DAY,PEN IL,MIDW,SOUL"
	},
	{
		"player" : "desclan01",
		"teams" : "17.6",
		"teamspitcher" : "DAY,RDL MIDW,ARIZ"
	},
	{
		"player" : "desclan01",
		"teams" : "9.3",
		"teamspitcher" : "LOU,PEN IL,SOUL"
	},
	{
		"player" : "harvema01",
		"teams" : "8.3",
		"teamspitcher" : "SCE,BNG FLOR,EL"
	},
	{
		"player" : "harvema01",
		"teams" : "7.9",
		"teamspitcher" : "BFL IL"
	},
	{
		"player" : "harvema01",
		"teams" : "8.5",
		"teamspitcher" : "BNG,BKN EL,NYPL"
	},
	{
		"player" : "castilu02",
		"teams" : "7.8",
		"teamspitcher" : "GIA DOSL"
	},
	{
		"player" : "castilu02",
		"teams" : "4.8",
		"teamspitcher" : "GIA DOSL"
	},
	{
		"player" : "castilu02",
		"teams" : "8.6",
		"teamspitcher" : "AUG SALL"
	},
	{
		"player" : "castilu02",
		"teams" : "8.7",
		"teamspitcher" : "GBO,JUP SALL,FLOR"
	},
	{
		"player" : "castilu02",
		"teams" : "7.3",
		"teamspitcher" : "JUP,JCK FLOR,SOUL"
	},
	{
		"player" : "castilu02",
		"teams" : "7.6",
		"teamspitcher" : "PEN SOUL"
	},
	{
		"player" : "aquinar01",
		"teams" : "RDS · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "aquinar01",
		"teams" : "RDS · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "aquinar01",
		"teams" : "RDL,BIL · ARIZ,PION",
		"teamspitcher" : ""
	},
	{
		"player" : "aquinar01",
		"teams" : "BIL · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "aquinar01",
		"teams" : "DAY,BIL,ESC · MIDW,PION,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "aquinar01",
		"teams" : "DYT,ESC · FLOR,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "aquinar01",
		"teams" : "PEN,ESC · SOUL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "aquinar01",
		"teams" : "PEN,LCY · SOUL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "federti01",
		"teams" : "LOW · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "federti01",
		"teams" : "GRV,SAL · SALL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "federti01",
		"teams" : "SAL · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "federti01",
		"teams" : "PRT,ABQ,LCY · EL,PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "federti01",
		"teams" : "ABQ,LCY · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "federti01",
		"teams" : "ABQ · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "federti01",
		"teams" : "ABQ,NAV · PCL,MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "federti01",
		"teams" : "ELP,FWA · PCL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "federti01",
		"teams" : "IWA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "federti01",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "federti01",
		"teams" : "FRE,LOU · PCL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "herrero02",
		"teams" : "RCK · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "herrero02",
		"teams" : "CAS · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "herrero02",
		"teams" : "AVL,TRI · SALL,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "herrero02",
		"teams" : "AVL · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "herrero02",
		"teams" : "MOD · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "herrero02",
		"teams" : "MOD · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "herrero02",
		"teams" : "HRT,GIG · EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "herrero02",
		"teams" : "ABQ,GIG · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "herrero02",
		"teams" : "LOU,GIG,OMA · IL,DOWL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "trahabl01",
		"teams" : "BIL,DYT · PION,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "trahabl01",
		"teams" : "DYT · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "trahabl01",
		"teams" : "PEN,SCO · SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "trahabl01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "guerrga01",
		"teams" : "MRN · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "guerrga01",
		"teams" : "MRN,MRE · DOSL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "guerrga01",
		"teams" : "CLI · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "guerrga01",
		"teams" : "HDS · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "guerrga01",
		"teams" : "MOB,WTN,SRV · SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "guerrga01",
		"teams" : "MOB,ESS,REN · SOUL,DOWL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "guerrga01",
		"teams" : "PEN,ESS · SOUL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "guerrga01",
		"teams" : "LOU,PEN,ESS · IL,SOUL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "cruzto03",
		"teams" : "DAV,CDS,JOH,BAT · MIDW,GULF,APPY,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "cruzto03",
		"teams" : "PLM,HON · FLOR,HIWB",
		"teamspitcher" : ""
	},
	{
		"player" : "cruzto03",
		"teams" : "SPD,ESS · TL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "cruzto03",
		"teams" : "PLM,SPD,SPS,MEM · FLOR,TL,AZFL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "cruzto03",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "cruzto03",
		"teams" : "SPD · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "cruzto03",
		"teams" : "OMA,LCY · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "cruzto03",
		"teams" : "ELP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "cruzto03",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "gosseph01",
		"teams" : "ROM,MYR · SALL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "gosseph01",
		"teams" : "LBG · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "gosseph01",
		"teams" : "MSS · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "gosseph01",
		"teams" : "MSS,GWI · SOUL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "gosseph01",
		"teams" : "GWI · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "gosseph01",
		"teams" : "VIS,REN,DKS · CALL,PCL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "gosseph01",
		"teams" : "INA,RRK · IL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "gosseph01",
		"teams" : "GWI,LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "pennicl01",
		"teams" : "KNC · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "pennicl01",
		"teams" : "STK,ATH · CALL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "pennicl01",
		"teams" : "STK,MDL,PHO · CALL,TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "pennicl01",
		"teams" : "SAC,MDL · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "pennicl01",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "pennicl01",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "pennicl01",
		"teams" : "DKS,REN · ARIZ,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "pennicl01",
		"teams" : "SLK,SBR · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "pennicl01",
		"teams" : "RRK,LOU · PCL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "tuckepr01",
		"teams" : "TRC · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "tuckepr01",
		"teams" : "LNR,CPC · CALL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "tuckepr01",
		"teams" : "OKC,CPC · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "tuckepr01",
		"teams" : "FRE · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "tuckepr01",
		"teams" : "FRE,CPC · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "tuckepr01",
		"teams" : "FRE · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "tuckepr01",
		"teams" : "GWI,LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "mesorde01",
		"teams" : "RDL · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "mesorde01",
		"teams" : "DAY · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "mesorde01",
		"teams" : "SAR · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "mesorde01",
		"teams" : "CAR,LBG,PES,LOU · SOUL,CARL,AZFL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "mesorde01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "mesorde01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "mesorde01",
		"teams" : "LOU,PEN · IL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "mesorde01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "mesorde01",
		"teams" : "PEN,LOU · SOUL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "herredi01",
		"teams" : "SJQ · VESL",
		"teamspitcher" : ""
	},
	{
		"player" : "herredi01",
		"teams" : "BRD,SCS · GULF,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "herredi01",
		"teams" : "CHL,SAV · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "herredi01",
		"teams" : "SCE,BNG,LCY · FLOR,EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "herredi01",
		"teams" : "LVG,SCE · PCL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "herredi01",
		"teams" : "LVG,LOU · PCL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "herredi01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "herredi01",
		"teams" : "LOU,DYT,LCY · IL,FLOR,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "dixonbr01",
		"teams" : "GRL · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "dixonbr01",
		"teams" : "RCU,ADG,DGR · CALL,AUBL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "dixonbr01",
		"teams" : "TUL,RCU,GLN · TL,CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "dixonbr01",
		"teams" : "PEN,PEA · SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "dixonbr01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "dixonbr01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "willima10",
		"teams" : "YNK · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "willima10",
		"teams" : "STI · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "willima10",
		"teams" : "CHS,TAM · SALL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "willima10",
		"teams" : "TAM,SCO,TRE · FLOR,AZFL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "willima10",
		"teams" : "TRE · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "willima10",
		"teams" : "TRE,SWB · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "willima10",
		"teams" : "SWB,TAM,YNK · IL,FLOR,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "willima10",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "willima10",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "blandal01",
		"teams" : "DAY,BIL · MIDW,PION",
		"teamspitcher" : ""
	},
	{
		"player" : "blandal01",
		"teams" : "DYT,PEN,PEA · FLOR,SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "blandal01",
		"teams" : "PEN · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "blandal01",
		"teams" : "PEN,LOU · SOUL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "blandal01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "casalcu01",
		"teams" : "WMI,NCH · MIDW,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "casalcu01",
		"teams" : "WMI,LAK · MIDW,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "casalcu01",
		"teams" : "POE,MTG,SRV · FLOR,SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "casalcu01",
		"teams" : "DHM,MTG,POE · IL,SOUL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "casalcu01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "casalcu01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "casalcu01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "casalcu01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "ervinph01",
		"teams" : "BIL,DAY · PION,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "ervinph01",
		"teams" : "DAY · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "ervinph01",
		"teams" : "DYT,PEA,PEN · FLOR,AZFL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "ervinph01",
		"teams" : "PEN · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "ervinph01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "ervinph01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "winkeje01",
		"teams" : "BIL · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "winkeje01",
		"teams" : "DAY · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "winkeje01",
		"teams" : "BAK,PEN,SPS · CALL,SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "winkeje01",
		"teams" : "PEN · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "winkeje01",
		"teams" : "LOU,RDL · IL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "winkeje01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "schebsc01",
		"teams" : "DGR · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "schebsc01",
		"teams" : "OGD · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "schebsc01",
		"teams" : "GRL · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "schebsc01",
		"teams" : "RCU · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "schebsc01",
		"teams" : "CNG,GLN · SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "schebsc01",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "schebsc01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "schebsc01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "schebsc01",
		"teams" : "PEN,LOU · SOUL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "hamilbi02",
		"teams" : "RDL · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "hamilbi02",
		"teams" : "BIL · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "hamilbi02",
		"teams" : "DAY,PCE · MIDW,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "hamilbi02",
		"teams" : "BAK,PEN,PEA · CALL,SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "hamilbi02",
		"teams" : "LOU,SNT · IL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "hamilbi02",
		"teams" : "PEN · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "duvalad01",
		"teams" : "SLM · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "duvalad01",
		"teams" : "AUG · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "duvalad01",
		"teams" : "SJO · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "duvalad01",
		"teams" : "RMD,MGA · EL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "duvalad01",
		"teams" : "FRE,MGA · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "duvalad01",
		"teams" : "SAC,LOU · PCL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "suareeu01",
		"teams" : "CZA · VESL",
		"teamspitcher" : ""
	},
	{
		"player" : "suareeu01",
		"teams" : "CZA · VESL",
		"teamspitcher" : ""
	},
	{
		"player" : "suareeu01",
		"teams" : "NCH,LAT · NYPL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "suareeu01",
		"teams" : "WMI,CCS · MIDW,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "suareeu01",
		"teams" : "ERI,LAK,CCS · EL,FLOR,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "suareeu01",
		"teams" : "ERI,CCS,TOL · EL,VEWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "suareeu01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "suareeu01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "perazjo01",
		"teams" : "BV1 · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "perazjo01",
		"teams" : "DAN,KIS · APPY,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "perazjo01",
		"teams" : "ROM · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "perazjo01",
		"teams" : "LBG,MSS · CARL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "perazjo01",
		"teams" : "GWI,OKC · IL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "perazjo01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "perazjo01",
		"teams" : "MGL · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "gennesc01",
		"teams" : "APP · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "gennesc01",
		"teams" : "BRE,PEA · FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "gennesc01",
		"teams" : "HVL · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "gennesc01",
		"teams" : "NVL · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "gennesc01",
		"teams" : "CSP,APP · PCL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "gennesc01",
		"teams" : "BRE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "vottojo01",
		"teams" : "RDL · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "vottojo01",
		"teams" : "BIL,DAY · PION,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "vottojo01",
		"teams" : "DAY,POT · MIDW,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "vottojo01",
		"teams" : "SAR,MES · FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "vottojo01",
		"teams" : "CNG,ESC · SOUL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "vottojo01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "vottojo01",
		"teams" : "DAY,SAR · MIDW,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "vottojo01",
		"teams" : "LOU,DAY · IL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "vottojo01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "barnhtu01",
		"teams" : "RDL · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "barnhtu01",
		"teams" : "BIL · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "barnhtu01",
		"teams" : "DAY · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "barnhtu01",
		"teams" : "BAK,PEN · CALL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "barnhtu01",
		"teams" : "PEN,GLN · SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "barnhtu01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "barnhtu01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "danisty01",
		"teams" : "5.1",
		"teamspitcher" : "BRS,KAN APPY,SALL"
	},
	{
		"player" : "danisty01",
		"teams" : "8.0",
		"teamspitcher" : "WSM,KAN CARL,SALL"
	},
	{
		"player" : "danisty01",
		"teams" : "11.1",
		"teamspitcher" : "BIR SOUL"
	},
	{
		"player" : "danisty01",
		"teams" : "9.5",
		"teamspitcher" : "BIR,CHR SOUL,IL"
	},
	{
		"player" : "danisty01",
		"teams" : "11.4",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "danisty01",
		"teams" : "7.9",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "fryja01",
		"teams" : "6.5",
		"teamspitcher" : "GRF PION"
	},
	{
		"player" : "fryja01",
		"teams" : "10.4",
		"teamspitcher" : "WSM CARL"
	},
	{
		"player" : "fryja01",
		"teams" : "7.1",
		"teamspitcher" : "BIR,GLN SOUL,AZFL"
	},
	{
		"player" : "fryja01",
		"teams" : "4.1",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "farquda01",
		"teams" : "5.6",
		"teamspitcher" : "AUB,LNS NYPL,MIDW"
	},
	{
		"player" : "farquda01",
		"teams" : "5.9",
		"teamspitcher" : "MAN,DUN EL,FLOR"
	},
	{
		"player" : "farquda01",
		"teams" : "6.0",
		"teamspitcher" : "MAN,PEA EL,AZFL"
	},
	{
		"player" : "farquda01",
		"teams" : "10.6",
		"teamspitcher" : "LVG,SAC PCL"
	},
	{
		"player" : "farquda01",
		"teams" : "6.8",
		"teamspitcher" : "MAN,LRA,TAC,TRE,SAC,SWB VEWL,PCL,EL,IL"
	},
	{
		"player" : "farquda01",
		"teams" : "7.7",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "farquda01",
		"teams" : "9.5",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "farquda01",
		"teams" : "7.8",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "farquda01",
		"teams" : "5.7",
		"teamspitcher" : "CHR,DHM IL"
	},
	{
		"player" : "minayju01",
		"teams" : "7.7",
		"teamspitcher" : "AST GULF"
	},
	{
		"player" : "minayju01",
		"teams" : "7.8",
		"teamspitcher" : "LEX SALL"
	},
	{
		"player" : "minayju01",
		"teams" : "10.4",
		"teamspitcher" : "LEX SALL"
	},
	{
		"player" : "minayju01",
		"teams" : "8.3",
		"teamspitcher" : "TRC NYPL"
	},
	{
		"player" : "minayju01",
		"teams" : "10.4",
		"teamspitcher" : "DAV MIDW"
	},
	{
		"player" : "minayju01",
		"teams" : "8.7",
		"teamspitcher" : "LNR,CPC CALL,TL"
	},
	{
		"player" : "minayju01",
		"teams" : "9.1",
		"teamspitcher" : "CPC,FRE,GIG TL,PCL,DOWL"
	},
	{
		"player" : "minayju01",
		"teams" : "8.7",
		"teamspitcher" : "CHR,FRE,GIG IL,PCL,DOWL"
	},
	{
		"player" : "minayju01",
		"teams" : "8.1",
		"teamspitcher" : "CHR,GIG IL,DOWL"
	},
	{
		"player" : "minayju01",
		"teams" : "6.9",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "kopecmi01",
		"teams" : "7.2",
		"teamspitcher" : "RES GULF"
	},
	{
		"player" : "kopecmi01",
		"teams" : "7.3",
		"teamspitcher" : "GRV SALL"
	},
	{
		"player" : "kopecmi01",
		"teams" : "5.4",
		"teamspitcher" : "SAL,SPS,LOW CARL,AZFL,NYPL"
	},
	{
		"player" : "kopecmi01",
		"teams" : "6.2",
		"teamspitcher" : "BIR,CHR SOUL,IL"
	},
	{
		"player" : "kopecmi01",
		"teams" : "7.2",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "jonesna01",
		"teams" : "8.4",
		"teamspitcher" : "BRS APPY"
	},
	{
		"player" : "jonesna01",
		"teams" : "9.5",
		"teamspitcher" : "KAN,BRS,WSM SALL,APPY,CARL"
	},
	{
		"player" : "jonesna01",
		"teams" : "6.9",
		"teamspitcher" : "WSM,KAN CARL,SALL"
	},
	{
		"player" : "jonesna01",
		"teams" : "10.4",
		"teamspitcher" : "WSM CARL"
	},
	{
		"player" : "jonesna01",
		"teams" : "8.3",
		"teamspitcher" : "BIR,MGZ SOUL,PRWL"
	},
	{
		"player" : "jonesna01",
		"teams" : "5.2",
		"teamspitcher" : "CHR,WSM IL,CARL"
	},
	{
		"player" : "gonzami03",
		"teams" : "8.0",
		"teamspitcher" : "CDR,RCU,ANG MIDW,CALL,ARIZ"
	},
	{
		"player" : "gonzami03",
		"teams" : "7.5",
		"teamspitcher" : "ARK,MAZ,RCU TL,MXPW,CALL"
	},
	{
		"player" : "gonzami03",
		"teams" : "8.8",
		"teamspitcher" : "ARK,MAZ TL,MXPW"
	},
	{
		"player" : "gonzami03",
		"teams" : "6.5",
		"teamspitcher" : "MAZ MXPW"
	},
	{
		"player" : "gonzami03",
		"teams" : "10.2",
		"teamspitcher" : "SAL,MAZ CARL,MXPW"
	},
	{
		"player" : "gonzami03",
		"teams" : "8.5",
		"teamspitcher" : "PRT,MAZ,SAL,PAW EL,MXPW,CARL,IL"
	},
	{
		"player" : "gonzami03",
		"teams" : "4.4",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "gonzami03",
		"teams" : "6.8",
		"teamspitcher" : "NFK,BOW IL,EL"
	},
	{
		"player" : "gonzami03",
		"teams" : "7.2",
		"teamspitcher" : "BOW EL"
	},
	{
		"player" : "gonzami03",
		"teams" : "11.4",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "gonzami03",
		"teams" : "14.0",
		"teamspitcher" : "CHR,BIR IL,SOUL"
	},
	{
		"player" : "gonzami03",
		"teams" : "3.0",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "vieirth01",
		"teams" : "10.0",
		"teamspitcher" : "AGR VESL"
	},
	{
		"player" : "vieirth01",
		"teams" : "11.0",
		"teamspitcher" : "AGR VESL"
	},
	{
		"player" : "vieirth01",
		"teams" : "7.9",
		"teamspitcher" : "EVR NORW"
	},
	{
		"player" : "vieirth01",
		"teams" : "7.0",
		"teamspitcher" : "CLI MIDW"
	},
	{
		"player" : "vieirth01",
		"teams" : "10.2",
		"teamspitcher" : "CLI MIDW"
	},
	{
		"player" : "vieirth01",
		"teams" : "7.4",
		"teamspitcher" : "BAK,PEA CALL,AZFL"
	},
	{
		"player" : "vieirth01",
		"teams" : "8.0",
		"teamspitcher" : "ARK,TAC TL,PCL"
	},
	{
		"player" : "vieirth01",
		"teams" : "8.8",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "ruizjo01",
		"teams" : "3.4",
		"teamspitcher" : "TRI,MGL,LEL,PDS NORW,VEWL,CALL,ARIZ"
	},
	{
		"player" : "ruizjo01",
		"teams" : "9.9",
		"teamspitcher" : "LEL,MGL CALL,VEWL"
	},
	{
		"player" : "ruizjo01",
		"teams" : "6.0",
		"teamspitcher" : "BIR,WSM SOUL,CARL"
	},
	{
		"player" : "volstch01",
		"teams" : "9.4",
		"teamspitcher" : "JAM,JUM NYPL,GULF"
	},
	{
		"player" : "volstch01",
		"teams" : "9.5",
		"teamspitcher" : "GBO SALL"
	},
	{
		"player" : "volstch01",
		"teams" : "10.3",
		"teamspitcher" : "JUP,CAR FLOR,SOUL"
	},
	{
		"player" : "volstch01",
		"teams" : "8.5",
		"teamspitcher" : "CAR SOUL"
	},
	{
		"player" : "volstch01",
		"teams" : "11.3",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "volstch01",
		"teams" : "6.9",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "volstch01",
		"teams" : "9.8",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "volstch01",
		"teams" : "10.9",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "volstch01",
		"teams" : "10.8",
		"teamspitcher" : "CSP,LCY PCL,DOWL"
	},
	{
		"player" : "volstch01",
		"teams" : "11.7",
		"teamspitcher" : "DOO,SLK KBO,PCL"
	},
	{
		"player" : "volstch01",
		"teams" : "9.2",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "volstch01",
		"teams" : "9.8",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "volstch01",
		"teams" : "12.3",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "volstch01",
		"teams" : "11.6",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "scahiro01",
		"teams" : "8.3",
		"teamspitcher" : "TRI NORW"
	},
	{
		"player" : "scahiro01",
		"teams" : "10.0",
		"teamspitcher" : "MOD CALL"
	},
	{
		"player" : "scahiro01",
		"teams" : "9.5",
		"teamspitcher" : "TUL,SRV TL,AZFL"
	},
	{
		"player" : "scahiro01",
		"teams" : "9.9",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "scahiro01",
		"teams" : "10.4",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "scahiro01",
		"teams" : "9.1",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "scahiro01",
		"teams" : "6.9",
		"teamspitcher" : "INA,ATO,BRD IL,EL,GULF"
	},
	{
		"player" : "scahiro01",
		"teams" : "11.2",
		"teamspitcher" : "INA,CSP IL,PCL"
	},
	{
		"player" : "scahiro01",
		"teams" : "8.7",
		"teamspitcher" : "CSP,ESC PCL,DOWL"
	},
	{
		"player" : "scahiro01",
		"teams" : "10.4",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "fulmeca01",
		"teams" : "6.7",
		"teamspitcher" : "WSM,WSX CARL,ARIZ"
	},
	{
		"player" : "fulmeca01",
		"teams" : "8.4",
		"teamspitcher" : "BIR,CHR SOUL,IL"
	},
	{
		"player" : "fulmeca01",
		"teams" : "9.4",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "fulmeca01",
		"teams" : "9.3",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "bummeaa01",
		"teams" : "7.4",
		"teamspitcher" : "GRF PION"
	},
	{
		"player" : "bummeaa01",
		"teams" : "8.6",
		"teamspitcher" : "GRF,WSM,WSX PION,CARL,ARIZ"
	},
	{
		"player" : "bummeaa01",
		"teams" : "8.1",
		"teamspitcher" : "BIR,WSM,CHR SOUL,CARL,IL"
	},
	{
		"player" : "bummeaa01",
		"teams" : "7.9",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "rodonca01",
		"teams" : "7.3",
		"teamspitcher" : "CHR,WSM,WSX IL,CARL,ARIZ"
	},
	{
		"player" : "rodonca01",
		"teams" : "7.2",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "rodonca01",
		"teams" : "12.3",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "rodonca01",
		"teams" : "11.1",
		"teamspitcher" : "CHR,WSM IL,CARL"
	},
	{
		"player" : "rodonca01",
		"teams" : "6.6",
		"teamspitcher" : "CHR,KAN IL,SALL"
	},
	{
		"player" : "frareca01",
		"teams" : "6.7",
		"teamspitcher" : "YNK GULF"
	},
	{
		"player" : "frareca01",
		"teams" : "9.4",
		"teamspitcher" : "CHS,TAM SALL,FLOR"
	},
	{
		"player" : "frareca01",
		"teams" : "6.1",
		"teamspitcher" : "TAM FLOR"
	},
	{
		"player" : "frareca01",
		"teams" : "6.9",
		"teamspitcher" : "TRE,TAM EL,FLOR"
	},
	{
		"player" : "frareca01",
		"teams" : "5.0",
		"teamspitcher" : "TRE,CHR,SWB EL,IL"
	},
	{
		"player" : "rondobr01",
		"teams" : "7.8",
		"teamspitcher" : "CZA VESL"
	},
	{
		"player" : "rondobr01",
		"teams" : "9.9",
		"teamspitcher" : "LAT,CZA,MGA GULF,VESL,VEWL"
	},
	{
		"player" : "rondobr01",
		"teams" : "4.6",
		"teamspitcher" : "LAT,MGL,LAK GULF,VEWL,FLOR"
	},
	{
		"player" : "rondobr01",
		"teams" : "5.3",
		"teamspitcher" : "WMI,MGL MIDW,VEWL"
	},
	{
		"player" : "rondobr01",
		"teams" : "6.2",
		"teamspitcher" : "LAK,ERI,MGL,TOL FLOR,EL,VEWL,IL"
	},
	{
		"player" : "rondobr01",
		"teams" : "4.7",
		"teamspitcher" : "TOL,MGL IL,VEWL"
	},
	{
		"player" : "rondobr01",
		"teams" : "10.8",
		"teamspitcher" : "TOL,MGL IL,VEWL"
	},
	{
		"player" : "rondobr01",
		"teams" : "9.6",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "rondobr01",
		"teams" : "8.3",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "rondobr01",
		"teams" : "9.0",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "cedenxa01",
		"teams" : "10.5",
		"teamspitcher" : "CAS PION"
	},
	{
		"player" : "cedenxa01",
		"teams" : "9.4",
		"teamspitcher" : "AVL SALL"
	},
	{
		"player" : "cedenxa01",
		"teams" : "9.3",
		"teamspitcher" : "MOD CALL"
	},
	{
		"player" : "cedenxa01",
		"teams" : "10.8",
		"teamspitcher" : "TUL,SNT TL,PRWL"
	},
	{
		"player" : "cedenxa01",
		"teams" : "8.8",
		"teamspitcher" : "TUL,MOD,CRO TL,CALL,PRWL"
	},
	{
		"player" : "cedenxa01",
		"teams" : "6.8",
		"teamspitcher" : "CRO PRWL"
	},
	{
		"player" : "cedenxa01",
		"teams" : "8.7",
		"teamspitcher" : "CPC,OKC,CRO TL,PCL,PRWL"
	},
	{
		"player" : "cedenxa01",
		"teams" : "8.3",
		"teamspitcher" : "OKC,SNT PCL,PRWL"
	},
	{
		"player" : "cedenxa01",
		"teams" : "5.5",
		"teamspitcher" : "SYR,SNT IL,PRWL"
	},
	{
		"player" : "cedenxa01",
		"teams" : "5.0",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "cedenxa01",
		"teams" : "5.0",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "burrry01",
		"teams" : "5.0",
		"teamspitcher" : "KNC,HIL MIDW,NORW"
	},
	{
		"player" : "burrry01",
		"teams" : "9.4",
		"teamspitcher" : "KNC,DKS MIDW,ARIZ"
	},
	{
		"player" : "burrry01",
		"teams" : "6.5",
		"teamspitcher" : "KNC,VIS,WSM MIDW,CALL,CARL"
	},
	{
		"player" : "burrry01",
		"teams" : "6.0",
		"teamspitcher" : "BIR,CHR SOUL,IL"
	},
	{
		"player" : "soriajo01",
		"teams" : "10.8",
		"teamspitcher" : "DGR GULF"
	},
	{
		"player" : "soriajo01",
		"teams" : "10.2",
		"teamspitcher" : "MCD MEX"
	},
	{
		"player" : "soriajo01",
		"teams" : "7.2",
		"teamspitcher" : "OBR,MCD,FWA MXPW,MEX,MIDW"
	},
	{
		"player" : "soriajo01",
		"teams" : "6.5",
		"teamspitcher" : "OBR MXPW"
	},
	{
		"player" : "soriajo01",
		"teams" : "1.3",
		"teamspitcher" : "FRI,RRK,RGS TL,PCL,ARIZ"
	},
	{
		"player" : "hamilia01",
		"teams" : "6.1",
		"teamspitcher" : "KAN,WSX SALL,ARIZ"
	},
	{
		"player" : "hamilia01",
		"teams" : "7.4",
		"teamspitcher" : "WSM,BIR CARL,SOUL"
	},
	{
		"player" : "hamilia01",
		"teams" : "6.6",
		"teamspitcher" : "CHR,BIR IL,SOUL"
	},
	{
		"player" : "gomezje01",
		"teams" : "8.3",
		"teamspitcher" : "INS GULF"
	},
	{
		"player" : "gomezje01",
		"teams" : "9.7",
		"teamspitcher" : "LCO SALL"
	},
	{
		"player" : "gomezje01",
		"teams" : "10.0",
		"teamspitcher" : "KIN CARL"
	},
	{
		"player" : "gomezje01",
		"teams" : "8.2",
		"teamspitcher" : "AKR,KIN EL,CARL"
	},
	{
		"player" : "gomezje01",
		"teams" : "10.0",
		"teamspitcher" : "CLB IL"
	},
	{
		"player" : "gomezje01",
		"teams" : "8.1",
		"teamspitcher" : "CLB,MHV IL,NYPL"
	},
	{
		"player" : "gomezje01",
		"teams" : "10.4",
		"teamspitcher" : "CLB,LGU IL,VEWL"
	},
	{
		"player" : "gomezje01",
		"teams" : "3.4",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "gomezje01",
		"teams" : "6.6",
		"teamspitcher" : "CSP,TAC,BRR PCL,ARIZ"
	},
	{
		"player" : "gomezje01",
		"teams" : "7.9",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "infangr01",
		"teams" : "9.8",
		"teamspitcher" : "VN2 VESL"
	},
	{
		"player" : "infangr01",
		"teams" : "6.7",
		"teamspitcher" : "BRS APPY"
	},
	{
		"player" : "infangr01",
		"teams" : "8.1",
		"teamspitcher" : "BRS,KAN,LGU APPY,SALL,VEWL"
	},
	{
		"player" : "infangr01",
		"teams" : "7.8",
		"teamspitcher" : "KAN,WSM SALL,CARL"
	},
	{
		"player" : "infangr01",
		"teams" : "8.2",
		"teamspitcher" : "WSM,BIR,LGU CARL,SOUL,VEWL"
	},
	{
		"player" : "infangr01",
		"teams" : "8.3",
		"teamspitcher" : "CHR,LGU,BIR IL,VEWL,SOUL"
	},
	{
		"player" : "infangr01",
		"teams" : "8.7",
		"teamspitcher" : "CHR,LGU,BIR IL,VEWL,SOUL"
	},
	{
		"player" : "infangr01",
		"teams" : "8.1",
		"teamspitcher" : "CNG,ABQ,LGU SOUL,PCL,VEWL"
	},
	{
		"player" : "infangr01",
		"teams" : "7.2",
		"teamspitcher" : "MAN,LGU,BFL EL,VEWL,IL"
	},
	{
		"player" : "infangr01",
		"teams" : "8.5",
		"teamspitcher" : "BFL,LGU,MAN IL,VEWL,EL"
	},
	{
		"player" : "infangr01",
		"teams" : "8.0",
		"teamspitcher" : "REA,LGU,LHV EL,VEWL,IL"
	},
	{
		"player" : "infangr01",
		"teams" : "7.3",
		"teamspitcher" : "CHR,LGU IL,VEWL"
	},
	{
		"player" : "infangr01",
		"teams" : "9.1",
		"teamspitcher" : "CHR,LGU IL,VEWL"
	},
	{
		"player" : "lopezre01",
		"teams" : "10.1",
		"teamspitcher" : "NTL DOSL"
	},
	{
		"player" : "lopezre01",
		"teams" : "25.3",
		"teamspitcher" : "HGR,AUB SALL,NYPL"
	},
	{
		"player" : "lopezre01",
		"teams" : "4.5",
		"teamspitcher" : "HGR,AUB SALL,NYPL"
	},
	{
		"player" : "lopezre01",
		"teams" : "8.5",
		"teamspitcher" : "POT CARL"
	},
	{
		"player" : "lopezre01",
		"teams" : "7.4",
		"teamspitcher" : "HRB,SYR EL,IL"
	},
	{
		"player" : "lopezre01",
		"teams" : "7.5",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "avilalu01",
		"teams" : "9.9",
		"teamspitcher" : "BV1 DOSL"
	},
	{
		"player" : "avilalu01",
		"teams" : "6.9",
		"teamspitcher" : "BV1 DOSL"
	},
	{
		"player" : "avilalu01",
		"teams" : "7.3",
		"teamspitcher" : "KIS GULF"
	},
	{
		"player" : "avilalu01",
		"teams" : "7.2",
		"teamspitcher" : "DAN,LRA APPY,VEWL"
	},
	{
		"player" : "avilalu01",
		"teams" : "7.6",
		"teamspitcher" : "MYR,LRA,ROM CARL,VEWL,SALL"
	},
	{
		"player" : "avilalu01",
		"teams" : "8.8",
		"teamspitcher" : "MSS,LRA SOUL,VEWL"
	},
	{
		"player" : "avilalu01",
		"teams" : "6.3",
		"teamspitcher" : "MSS,LRA SOUL,VEWL"
	},
	{
		"player" : "avilalu01",
		"teams" : "8.7",
		"teamspitcher" : "GWI,LRA IL,VEWL"
	},
	{
		"player" : "avilalu01",
		"teams" : "8.9",
		"teamspitcher" : "OKC,LRA PCL,VEWL"
	},
	{
		"player" : "avilalu01",
		"teams" : "4.5",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "beckch02",
		"teams" : "11.4",
		"teamspitcher" : "GRF PION"
	},
	{
		"player" : "beckch02",
		"teams" : "8.8",
		"teamspitcher" : "WSM,BIR CARL,SOUL"
	},
	{
		"player" : "beckch02",
		"teams" : "9.1",
		"teamspitcher" : "BIR,CHR SOUL,IL"
	},
	{
		"player" : "beckch02",
		"teams" : "8.3",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "beckch02",
		"teams" : "10.4",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "beckch02",
		"teams" : "6.8",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "beckch02",
		"teams" : "9.5",
		"teamspitcher" : "LVG,CHR PCL,IL"
	},
	{
		"player" : "coveydy01",
		"teams" : "11.1",
		"teamspitcher" : "BEL,VMT MIDW,NYPL"
	},
	{
		"player" : "coveydy01",
		"teams" : "9.5",
		"teamspitcher" : "BEL,STK MIDW,CALL"
	},
	{
		"player" : "coveydy01",
		"teams" : "8.7",
		"teamspitcher" : "STK CALL"
	},
	{
		"player" : "coveydy01",
		"teams" : "8.2",
		"teamspitcher" : "MDL,MES TL,AZFL"
	},
	{
		"player" : "coveydy01",
		"teams" : "9.0",
		"teamspitcher" : "GLN,CHR,WSX AZFL,IL,ARIZ"
	},
	{
		"player" : "coveydy01",
		"teams" : "7.4",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "santihe01",
		"teams" : "5.2",
		"teamspitcher" : "BRS APPY"
	},
	{
		"player" : "santihe01",
		"teams" : "7.6",
		"teamspitcher" : "KAN,CGU SALL,PRWL"
	},
	{
		"player" : "santihe01",
		"teams" : "8.5",
		"teamspitcher" : "WSM,CGU CARL,PRWL"
	},
	{
		"player" : "santihe01",
		"teams" : "8.3",
		"teamspitcher" : "WSM,CRO CARL,PRWL"
	},
	{
		"player" : "santihe01",
		"teams" : "7.6",
		"teamspitcher" : "BIR,WSM,CRO SOUL,CARL,PRWL"
	},
	{
		"player" : "santihe01",
		"teams" : "6.4",
		"teamspitcher" : "CRO,CHR PRWL,IL"
	},
	{
		"player" : "santihe01",
		"teams" : "11.8",
		"teamspitcher" : "SLK,CRO PCL,PRWL"
	},
	{
		"player" : "santihe01",
		"teams" : "8.0",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "giolilu01",
		"teams" : "9.0",
		"teamspitcher" : "NAT GULF"
	},
	{
		"player" : "giolilu01",
		"teams" : "6.9",
		"teamspitcher" : "NAT,AUB GULF,NYPL"
	},
	{
		"player" : "giolilu01",
		"teams" : "6.4",
		"teamspitcher" : "HGR SALL"
	},
	{
		"player" : "giolilu01",
		"teams" : "8.7",
		"teamspitcher" : "POT,HRB CARL,EL"
	},
	{
		"player" : "giolilu01",
		"teams" : "8.1",
		"teamspitcher" : "HRB,SYR,HGR EL,IL,SALL"
	},
	{
		"player" : "giolilu01",
		"teams" : "8.5",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "shielja02",
		"teams" : "8.2",
		"teamspitcher" : "CHS,HDV SALL,NYPL"
	},
	{
		"player" : "shielja02",
		"teams" : "",
		"teamspitcher" : ""
	},
	{
		"player" : "shielja02",
		"teams" : "10.1",
		"teamspitcher" : "BAK CALL"
	},
	{
		"player" : "shielja02",
		"teams" : "9.5",
		"teamspitcher" : "BAK,MTG CALL,SOUL"
	},
	{
		"player" : "shielja02",
		"teams" : "7.8",
		"teamspitcher" : "MTG,PHO,DHM SOUL,AZFL,IL"
	},
	{
		"player" : "shielja02",
		"teams" : "8.8",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "shielja02",
		"teams" : "8.4",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "garnedu01",
		"teams" : "CAS · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "garnedu01",
		"teams" : "TRI,MOD · NORW,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "garnedu01",
		"teams" : "AVL · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "garnedu01",
		"teams" : "MOD · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "garnedu01",
		"teams" : "TUL,SRV · TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "garnedu01",
		"teams" : "CSP,TUL,AZU · PCL,TL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "garnedu01",
		"teams" : "ABQ,LCY · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "garnedu01",
		"teams" : "ABQ · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "garnedu01",
		"teams" : "ABQ · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "garnedu01",
		"teams" : "CHR,NVL · IL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "saladty01",
		"teams" : "KAN,BRS · SALL,APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "saladty01",
		"teams" : "WSM,MES · CARL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "saladty01",
		"teams" : "BIR,CHR · SOUL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "saladty01",
		"teams" : "BIR · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "saladty01",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "saladty01",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "saladty01",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "saladty01",
		"teams" : "CSP,APP · PCL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaal04",
		"teams" : "ARS · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaal04",
		"teams" : "AST · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaal04",
		"teams" : "AST · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaal04",
		"teams" : "GRE · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaal04",
		"teams" : "TRC · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaal04",
		"teams" : "LNR,CPC,DAV · CALL,TL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaal04",
		"teams" : "CPC,BIR,CCS,CHR · TL,SOUL,VEWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaal04",
		"teams" : "BIR,CCS · SOUL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "gonzaal04",
		"teams" : "CHR,BIR · IL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "skolema01",
		"teams" : "AUB · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "skolema01",
		"teams" : "HGR,POT,SRV · SALL,CARL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "skolema01",
		"teams" : "MES,HRB · AZFL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "skolema01",
		"teams" : "HRB · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "skolema01",
		"teams" : "HRB,SYR · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "skolema01",
		"teams" : "SYR,HRM · IL,MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "skolema01",
		"teams" : "SYR,AUB · IL,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "skolema01",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "cordery01",
		"teams" : "SPO · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "cordery01",
		"teams" : "HCK,MYR · SALL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "cordery01",
		"teams" : "HDS,FRI,MGL · CALL,TL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "cordery01",
		"teams" : "FRI,AZU · TL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "cordery01",
		"teams" : "CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "cordery01",
		"teams" : "CHR,WSX,BIR · IL,ARIZ,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "lamarry01",
		"teams" : "DAY,LBG · MIDW,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "lamarry01",
		"teams" : "BAK,CAR · CALL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "lamarry01",
		"teams" : "PEN · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "lamarry01",
		"teams" : "PEN,LOU,GLN · SOUL,IL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "lamarry01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "lamarry01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "lamarry01",
		"teams" : "PAW · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "lamarry01",
		"teams" : "NVL,SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "lamarry01",
		"teams" : "ROC,CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "rondojo02",
		"teams" : "ANS · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "rondojo02",
		"teams" : "ANG,ORM · ARIZ,PION",
		"teamspitcher" : ""
	},
	{
		"player" : "rondojo02",
		"teams" : "ORM · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "rondojo02",
		"teams" : "SBR,LEL,MGL,ANG · CALL,VEWL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "rondojo02",
		"teams" : "LEL,SAN · CALL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "rondojo02",
		"teams" : "SAN,MGL,ELP,ARA · TL,PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "rondojo02",
		"teams" : "SAN,ELP,ARA,PDS,PD2 · TL,PCL,VEWL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "rondojo02",
		"teams" : "CHR,CCS · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "tilsoch01",
		"teams" : "JOH,CDS · APPY,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "tilsoch01",
		"teams" : "PEO,PLM · MIDW,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "tilsoch01",
		"teams" : "PLM,SPD · FLOR,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "tilsoch01",
		"teams" : "SPD,SPS · TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "tilsoch01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "tilsoch01",
		"teams" : "GLN · AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "tilsoch01",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "thomptr01",
		"teams" : "BRS,GRF · APPY,PION",
		"teamspitcher" : ""
	},
	{
		"player" : "thomptr01",
		"teams" : "KAN · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "thomptr01",
		"teams" : "KAN · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "thomptr01",
		"teams" : "WSM,BIR,SRV,CHR · CARL,SOUL,AZFL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "thomptr01",
		"teams" : "BIR,LGU · SOUL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "thomptr01",
		"teams" : "BIR · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "thomptr01",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "thomptr01",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "thomptr01",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "castiwe01",
		"teams" : "CBZ,BOI · ARIZ,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "castiwe01",
		"teams" : "PEO · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "castiwe01",
		"teams" : "KNX,DYT,LCY,IWA · SOUL,FLOR,DOWL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "castiwe01",
		"teams" : "KNX,MES · SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "castiwe01",
		"teams" : "IWA,LCY · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "castiwe01",
		"teams" : "IWA,DYT,CBZ,LCY · PCL,FLOR,ARIZ,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "castiwe01",
		"teams" : "IWA,KNX · PCL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "castiwe01",
		"teams" : "IWA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "castiwe01",
		"teams" : "BOW · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "castiwe01",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "smithke04",
		"teams" : "GRF,BRS · PION,APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "smithke04",
		"teams" : "KAN,WSM · SALL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "smithke04",
		"teams" : "WSM · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "smithke04",
		"teams" : "BIR,GLN · SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "smithke04",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "smithke04",
		"teams" : "CHR,WSX · IL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "smithke04",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "smithke04",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "garcile02",
		"teams" : "RGS · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "garcile02",
		"teams" : "HCK · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "garcile02",
		"teams" : "HCK,RGS · SALL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "garcile02",
		"teams" : "MYR,SPS,GIG · CARL,AZFL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "garcile02",
		"teams" : "FRI,GIG · TL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "garcile02",
		"teams" : "RRK,GIG,CHR · PCL,DOWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "garcile02",
		"teams" : "GIG · DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "garcile02",
		"teams" : "CHR,GIG · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "garcile02",
		"teams" : "CHR,GIG · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "garcile02",
		"teams" : "GIG,WSX,CHR · DOWL,ARIZ,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "garcile02",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "palkada01",
		"teams" : "MSO,HIL · PION,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "palkada01",
		"teams" : "SBN · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "palkada01",
		"teams" : "VIS,SRV · CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "palkada01",
		"teams" : "CNG,ROC,ESC · SOUL,IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "palkada01",
		"teams" : "ROC,MGL,TWN · IL,VEWL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "palkada01",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "davidma02",
		"teams" : "YAK · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "davidma02",
		"teams" : "SBN,VIS · MIDW,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "davidma02",
		"teams" : "VIS · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "davidma02",
		"teams" : "MOB,SRV · SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "davidma02",
		"teams" : "REN · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "davidma02",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "davidma02",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "davidma02",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "davidma02",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "garciav01",
		"teams" : "CZA · VESL",
		"teamspitcher" : ""
	},
	{
		"player" : "garciav01",
		"teams" : "WMI,LAK,ORN · MIDW,FLOR,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "garciav01",
		"teams" : "WMI,ORN · MIDW,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "garciav01",
		"teams" : "LAK,ORN · FLOR,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "garciav01",
		"teams" : "LAK,ERI,ORN · FLOR,EL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "garciav01",
		"teams" : "TOL,CHR,LAK · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "garciav01",
		"teams" : "ARA,CHR · VEWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "garciav01",
		"teams" : "ARA,CHR · VEWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "garciav01",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "garciav01",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "engelad01",
		"teams" : "GRF · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "engelad01",
		"teams" : "KAN,MEL,WSM,WSX · SALL,AUBL,CARL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "engelad01",
		"teams" : "WSM,GLN · CARL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "engelad01",
		"teams" : "BIR,CHR,WSM · SOUL,IL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "engelad01",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "delmoni01",
		"teams" : "DEL · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "delmoni01",
		"teams" : "FDK,BRE · CARL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "delmoni01",
		"teams" : "BRE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "delmoni01",
		"teams" : "BIR,GLN,KAN · SOUL,AZFL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "delmoni01",
		"teams" : "CHR,BIR · IL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "delmoni01",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "delmoni01",
		"teams" : "CHR,BIR · IL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "sanchca01",
		"teams" : "WSX · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "sanchca01",
		"teams" : "WSX · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "sanchca01",
		"teams" : "KAN,BRS,LGU · SALL,APPY,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sanchca01",
		"teams" : "WSM,BIR,SRV,CHR,LGU · CARL,SOUL,AZFL,IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sanchca01",
		"teams" : "CHR,LGU · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sanchca01",
		"teams" : "CHR,LGU · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sanchca01",
		"teams" : "CHR,LGU · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sanchca01",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "anderti01",
		"teams" : "KAN · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "anderti01",
		"teams" : "WSM,GLN,BIR,WSX · CARL,AZFL,SOUL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "anderti01",
		"teams" : "BIR · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "anderti01",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "moncayo01",
		"teams" : "CIE · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "moncayo01",
		"teams" : "CIE · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "moncayo01",
		"teams" : "GRV · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "moncayo01",
		"teams" : "SAL,PRT,SPS · CARL,EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "moncayo01",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "abreujo02",
		"teams" : "CIE · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "abreujo02",
		"teams" : "CIE · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "abreujo02",
		"teams" : "CIE · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "abreujo02",
		"teams" : "CIE · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "abreujo02",
		"teams" : "CIE · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "abreujo02",
		"teams" : "CIE · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "abreujo02",
		"teams" : "CIE · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "abreujo02",
		"teams" : "CIE · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "abreujo02",
		"teams" : "CIE · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "abreujo02",
		"teams" : "CIE · CNS",
		"teamspitcher" : ""
	},
	{
		"player" : "narvaom01",
		"teams" : "VN2 · VESL",
		"teamspitcher" : ""
	},
	{
		"player" : "narvaom01",
		"teams" : "VN2 · VESL",
		"teamspitcher" : ""
	},
	{
		"player" : "narvaom01",
		"teams" : "DVS · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "narvaom01",
		"teams" : "PRI · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "narvaom01",
		"teams" : "HDV · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "narvaom01",
		"teams" : "WSM,KAN · CARL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "narvaom01",
		"teams" : "WSM,MGA · CARL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "narvaom01",
		"teams" : "CHR,BIR · IL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "mazzoco01",
		"teams" : "8.3",
		"teamspitcher" : "SCE,BKN FLOR,NYPL"
	},
	{
		"player" : "mazzoco01",
		"teams" : "9.6",
		"teamspitcher" : "BNG,SCE EL,FLOR"
	},
	{
		"player" : "mazzoco01",
		"teams" : "9.5",
		"teamspitcher" : "BNG EL"
	},
	{
		"player" : "mazzoco01",
		"teams" : "9.4",
		"teamspitcher" : "LVG,BNG,SCE,MET PCL,EL,FLOR,GULF"
	},
	{
		"player" : "mazzoco01",
		"teams" : "6.6",
		"teamspitcher" : "ELP PCL"
	},
	{
		"player" : "mazzoco01",
		"teams" : "6.8",
		"teamspitcher" : "ELP PCL"
	},
	{
		"player" : "mazzoco01",
		"teams" : "7.5",
		"teamspitcher" : "ELP,PDS,PD2 PCL,ARIZ"
	},
	{
		"player" : "mazzoco01",
		"teams" : "8.7",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "mapledi01",
		"teams" : "5.2",
		"teamspitcher" : "CBZ ARIZ"
	},
	{
		"player" : "mapledi01",
		"teams" : "8.2",
		"teamspitcher" : "BOI,KNC NORW,MIDW"
	},
	{
		"player" : "mapledi01",
		"teams" : "11.3",
		"teamspitcher" : "BOI,CBZ NORW,ARIZ"
	},
	{
		"player" : "mapledi01",
		"teams" : "8.9",
		"teamspitcher" : "SBN,EUG MIDW,NORW"
	},
	{
		"player" : "mapledi01",
		"teams" : "7.6",
		"teamspitcher" : "SBN,MYR MIDW,CARL"
	},
	{
		"player" : "mapledi01",
		"teams" : "6.3",
		"teamspitcher" : "MYR,IWA,KNX CARL,PCL,SOUL"
	},
	{
		"player" : "mapledi01",
		"teams" : "5.1",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "chaveje01",
		"teams" : "10.2",
		"teamspitcher" : "SPO NORW"
	},
	{
		"player" : "chaveje01",
		"teams" : "10.8",
		"teamspitcher" : "CLI MIDW"
	},
	{
		"player" : "chaveje01",
		"teams" : "9.6",
		"teamspitcher" : "FRI,BAK TL,CALL"
	},
	{
		"player" : "chaveje01",
		"teams" : "7.9",
		"teamspitcher" : "FRI,INA,GCN,OKC TL,IL,AZFL,PCL"
	},
	{
		"player" : "chaveje01",
		"teams" : "11.1",
		"teamspitcher" : "INA,PHO IL,AZFL"
	},
	{
		"player" : "chaveje01",
		"teams" : "7.9",
		"teamspitcher" : "INA,GIG IL,DOWL"
	},
	{
		"player" : "chaveje01",
		"teams" : "10.0",
		"teamspitcher" : "OMA,CUL PCL,MXPW"
	},
	{
		"player" : "chaveje01",
		"teams" : "8.4",
		"teamspitcher" : "LVG,SAC PCL"
	},
	{
		"player" : "chaveje01",
		"teams" : "10.5",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "webstal01",
		"teams" : "5.9",
		"teamspitcher" : "DGR GULF"
	},
	{
		"player" : "webstal01",
		"teams" : "7.6",
		"teamspitcher" : "DGR,OGD ARIZ,PION"
	},
	{
		"player" : "webstal01",
		"teams" : "8.2",
		"teamspitcher" : "GRL MIDW"
	},
	{
		"player" : "webstal01",
		"teams" : "9.1",
		"teamspitcher" : "CNG,RCU SOUL,CALL"
	},
	{
		"player" : "webstal01",
		"teams" : "9.2",
		"teamspitcher" : "CNG,PRT SOUL,EL"
	},
	{
		"player" : "webstal01",
		"teams" : "6.8",
		"teamspitcher" : "PAW,ESC IL,DOWL"
	},
	{
		"player" : "webstal01",
		"teams" : "7.9",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "webstal01",
		"teams" : "13.7",
		"teamspitcher" : "REN PCL"
	},
	{
		"player" : "webstal01",
		"teams" : "9.1",
		"teamspitcher" : "SAM KBO"
	},
	{
		"player" : "webstal01",
		"teams" : "11.9",
		"teamspitcher" : "RRK PCL"
	},
	{
		"player" : "webstal01",
		"teams" : "9.5",
		"teamspitcher" : "CB2,KNX,IWA ARIZ,SOUL,PCL"
	},
	{
		"player" : "zastrro01",
		"teams" : "9.0",
		"teamspitcher" : "BOI,KNC NORW,MIDW"
	},
	{
		"player" : "zastrro01",
		"teams" : "9.9",
		"teamspitcher" : "DYT FLOR"
	},
	{
		"player" : "zastrro01",
		"teams" : "10.4",
		"teamspitcher" : "KNX,MES,CBZ SOUL,AZFL,ARIZ"
	},
	{
		"player" : "zastrro01",
		"teams" : "7.8",
		"teamspitcher" : "IWA,KNX PCL,SOUL"
	},
	{
		"player" : "zastrro01",
		"teams" : "9.5",
		"teamspitcher" : "IWA,CBZ PCL,ARIZ"
	},
	{
		"player" : "zastrro01",
		"teams" : "7.6",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "rosajo01",
		"teams" : "9.9",
		"teamspitcher" : "MSO,DBK,HDS PION,ARIZ,CALL"
	},
	{
		"player" : "rosajo01",
		"teams" : "8.8",
		"teamspitcher" : "MTY MEX"
	},
	{
		"player" : "rosajo01",
		"teams" : "9.3",
		"teamspitcher" : "TRE,SAR EL,FLOR"
	},
	{
		"player" : "rosajo01",
		"teams" : "7.9",
		"teamspitcher" : "SAR,TRE FLOR,EL"
	},
	{
		"player" : "rosajo01",
		"teams" : "8.3",
		"teamspitcher" : "PRT,PAW EL,IL"
	},
	{
		"player" : "rosajo01",
		"teams" : "8.4",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "rosajo01",
		"teams" : "8.0",
		"teamspitcher" : "HVL,HRM SOUL,MXPW"
	},
	{
		"player" : "rosajo01",
		"teams" : "12.5",
		"teamspitcher" : "WCH,HRM TL,MXPW"
	},
	{
		"player" : "rosajo01",
		"teams" : "7.4",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "rosajo01",
		"teams" : "10.4",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "rosajo01",
		"teams" : "12.0",
		"teamspitcher" : "CSP,MOD,TUL,GRJ PCL,CALL,TL,PION"
	},
	{
		"player" : "rosajo01",
		"teams" : "9.0",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "rosajo01",
		"teams" : "8.6",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "edwarca01",
		"teams" : "4.3",
		"teamspitcher" : "SPO,RGS NORW,ARIZ"
	},
	{
		"player" : "edwarca01",
		"teams" : "5.9",
		"teamspitcher" : "HCK,DYT SALL,FLOR"
	},
	{
		"player" : "edwarca01",
		"teams" : "5.2",
		"teamspitcher" : "KNX,MES,CBZ SOUL,AZFL,ARIZ"
	},
	{
		"player" : "edwarca01",
		"teams" : "4.2",
		"teamspitcher" : "IWA,KNX PCL,SOUL"
	},
	{
		"player" : "edwarca01",
		"teams" : "6.0",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "edwarca01",
		"teams" : "9.0",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "tsengje01",
		"teams" : "6.5",
		"teamspitcher" : "KNC MIDW"
	},
	{
		"player" : "tsengje01",
		"teams" : "8.7",
		"teamspitcher" : "MYR CARL"
	},
	{
		"player" : "tsengje01",
		"teams" : "11.0",
		"teamspitcher" : "KNX SOUL"
	},
	{
		"player" : "tsengje01",
		"teams" : "7.9",
		"teamspitcher" : "KNX,IWA SOUL,PCL"
	},
	{
		"player" : "tsengje01",
		"teams" : "10.5",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "garcija02",
		"teams" : "8.7",
		"teamspitcher" : "DAV,PLM,HRM MIDW,FLOR,MXPW"
	},
	{
		"player" : "garcija02",
		"teams" : "8.1",
		"teamspitcher" : "SPD TL"
	},
	{
		"player" : "garcija02",
		"teams" : "8.5",
		"teamspitcher" : "MEM,SPD PCL,TL"
	},
	{
		"player" : "garcija02",
		"teams" : "6.0",
		"teamspitcher" : "MEM,PLM,CDS PCL,FLOR,GULF"
	},
	{
		"player" : "garcija02",
		"teams" : "8.2",
		"teamspitcher" : "SPD,MEM,CDS TL,PCL,GULF"
	},
	{
		"player" : "garcija02",
		"teams" : "7.7",
		"teamspitcher" : "MEM,SPD PCL,TL"
	},
	{
		"player" : "garcija02",
		"teams" : "7.9",
		"teamspitcher" : "SPD,PEO,MEM TL,MIDW,PCL"
	},
	{
		"player" : "garcija02",
		"teams" : "0.0",
		"teamspitcher" : "DUN FLOR"
	},
	{
		"player" : "bassan01",
		"teams" : "6.6",
		"teamspitcher" : "EUG NORW"
	},
	{
		"player" : "bassan01",
		"teams" : "8.2",
		"teamspitcher" : "FWA,LEL MIDW,CALL"
	},
	{
		"player" : "bassan01",
		"teams" : "8.5",
		"teamspitcher" : "LEL,POR CALL,PCL"
	},
	{
		"player" : "bassan01",
		"teams" : "8.7",
		"teamspitcher" : "SAN,PEA,TUC TL,AZFL,PCL"
	},
	{
		"player" : "bassan01",
		"teams" : "9.0",
		"teamspitcher" : "TUC PCL"
	},
	{
		"player" : "bassan01",
		"teams" : "12.3",
		"teamspitcher" : "TUC PCL"
	},
	{
		"player" : "bassan01",
		"teams" : "7.5",
		"teamspitcher" : "OKC,DAV PCL,MIDW"
	},
	{
		"player" : "bassan01",
		"teams" : "18.7",
		"teamspitcher" : "RRK PCL"
	},
	{
		"player" : "bassan01",
		"teams" : "8.9",
		"teamspitcher" : "NPN JPPL"
	},
	{
		"player" : "bassan01",
		"teams" : "9.6",
		"teamspitcher" : "RRK,RGS PCL,ARIZ"
	},
	{
		"player" : "bassan01",
		"teams" : "9.6",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "wilsoju10",
		"teams" : "9.2",
		"teamspitcher" : "LBG CARL"
	},
	{
		"player" : "wilsoju10",
		"teams" : "7.2",
		"teamspitcher" : "ATO,MES EL,AZFL"
	},
	{
		"player" : "wilsoju10",
		"teams" : "8.8",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "wilsoju10",
		"teams" : "6.0",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "kintzbr01",
		"teams" : "9.5",
		"teamspitcher" : "PDS,EUG ARIZ,NORW"
	},
	{
		"player" : "kintzbr01",
		"teams" : "9.1",
		"teamspitcher" : "FWA,PDS,EUG MIDW,ARIZ,NORW"
	},
	{
		"player" : "kintzbr01",
		"teams" : "10.3",
		"teamspitcher" : "HVL SOUL"
	},
	{
		"player" : "kintzbr01",
		"teams" : "6.5",
		"teamspitcher" : "NVL,HVL,SPS PCL,SOUL,AZFL"
	},
	{
		"player" : "kintzbr01",
		"teams" : "11.6",
		"teamspitcher" : "PEA,NVL AZFL,PCL"
	},
	{
		"player" : "kintzbr01",
		"teams" : "8.4",
		"teamspitcher" : "HVL,NVL,BRE SOUL,PCL,FLOR"
	},
	{
		"player" : "kintzbr01",
		"teams" : "10.1",
		"teamspitcher" : "CSP,BRR PCL,ARIZ"
	},
	{
		"player" : "kintzbr01",
		"teams" : "8.8",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "kintzbr01",
		"teams" : "0.0",
		"teamspitcher" : "POT CARL"
	},
	{
		"player" : "underdu01",
		"teams" : "7.3",
		"teamspitcher" : "CBZ ARIZ"
	},
	{
		"player" : "underdu01",
		"teams" : "10.3",
		"teamspitcher" : "BOI NORW"
	},
	{
		"player" : "underdu01",
		"teams" : "7.6",
		"teamspitcher" : "KNC MIDW"
	},
	{
		"player" : "underdu01",
		"teams" : "6.3",
		"teamspitcher" : "MYR,CBZ CARL,ARIZ"
	},
	{
		"player" : "underdu01",
		"teams" : "9.5",
		"teamspitcher" : "KNX,SBN,MES,MYR,CBZ SOUL,MIDW,AZFL,CARL,ARIZ"
	},
	{
		"player" : "underdu01",
		"teams" : "8.5",
		"teamspitcher" : "KNX SOUL"
	},
	{
		"player" : "underdu01",
		"teams" : "9.6",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "morrobr01",
		"teams" : "5.6",
		"teamspitcher" : "MRE,SBR ARIZ,CALL"
	},
	{
		"player" : "morrobr01",
		"teams" : "8.4",
		"teamspitcher" : "LRA VEWL"
	},
	{
		"player" : "morrobr01",
		"teams" : "5.9",
		"teamspitcher" : "TAC,WTN PCL,SOUL"
	},
	{
		"player" : "morrobr01",
		"teams" : "8.2",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "morrobr01",
		"teams" : "12.5",
		"teamspitcher" : "DUN FLOR"
	},
	{
		"player" : "morrobr01",
		"teams" : "8.0",
		"teamspitcher" : "MAN,DUN EL,FLOR"
	},
	{
		"player" : "morrobr01",
		"teams" : "22.5",
		"teamspitcher" : "DUN FLOR"
	},
	{
		"player" : "morrobr01",
		"teams" : "5.4",
		"teamspitcher" : "BFL,DUN IL,FLOR"
	},
	{
		"player" : "morrobr01",
		"teams" : "13.0",
		"teamspitcher" : "SAN,ELP TL,PCL"
	},
	{
		"player" : "morrobr01",
		"teams" : "13.1",
		"teamspitcher" : "ELP,LEL,SAN,PDS PCL,CALL,TL,ARIZ"
	},
	{
		"player" : "morrobr01",
		"teams" : "11.3",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "duensbr01",
		"teams" : "8.8",
		"teamspitcher" : "ELZ APPY"
	},
	{
		"player" : "duensbr01",
		"teams" : "9.3",
		"teamspitcher" : "BEL,NBR,FTM MIDW,EL,FLOR"
	},
	{
		"player" : "duensbr01",
		"teams" : "8.7",
		"teamspitcher" : "ROC,NBR,USA IL,EL,AZFL"
	},
	{
		"player" : "duensbr01",
		"teams" : "9.7",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "duensbr01",
		"teams" : "10.4",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "duensbr01",
		"teams" : "7.5",
		"teamspitcher" : "OMA,BOW,NFK,OLS PCL,EL,IL,GULF"
	},
	{
		"player" : "duensbr01",
		"teams" : "3.0",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "duensbr01",
		"teams" : "9.5",
		"teamspitcher" : "IWA,KNX PCL,SOUL"
	},
	{
		"player" : "stroppe01",
		"teams" : "6.5",
		"teamspitcher" : "AVL,CAS SALL,PION"
	},
	{
		"player" : "stroppe01",
		"teams" : "7.1",
		"teamspitcher" : "MOD CALL"
	},
	{
		"player" : "stroppe01",
		"teams" : "7.7",
		"teamspitcher" : "TUL TL"
	},
	{
		"player" : "stroppe01",
		"teams" : "8.6",
		"teamspitcher" : "FRI,OKC,GIG TL,PCL,DOWL"
	},
	{
		"player" : "stroppe01",
		"teams" : "7.7",
		"teamspitcher" : "OKC,GIG PCL,DOWL"
	},
	{
		"player" : "stroppe01",
		"teams" : "10.0",
		"teamspitcher" : "RRK PCL"
	},
	{
		"player" : "stroppe01",
		"teams" : "3.7",
		"teamspitcher" : "ESC DOWL"
	},
	{
		"player" : "hancoju01",
		"teams" : "12.5",
		"teamspitcher" : "PDS ARIZ"
	},
	{
		"player" : "hancoju01",
		"teams" : "8.1",
		"teamspitcher" : "EUG,FWA NORW,MIDW"
	},
	{
		"player" : "hancoju01",
		"teams" : "9.3",
		"teamspitcher" : "FWA,LEL MIDW,CALL"
	},
	{
		"player" : "hancoju01",
		"teams" : "10.7",
		"teamspitcher" : "SAN,SPS,PDS TL,AZFL,ARIZ"
	},
	{
		"player" : "hancoju01",
		"teams" : "9.8",
		"teamspitcher" : "SAN,ELP TL,PCL"
	},
	{
		"player" : "hancoju01",
		"teams" : "24.0",
		"teamspitcher" : "ELP PCL"
	},
	{
		"player" : "hancoju01",
		"teams" : "10.7",
		"teamspitcher" : "IWA,KNX,SAN PCL,SOUL,TL"
	},
	{
		"player" : "hancoju01",
		"teams" : "10.4",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "rosarra01",
		"teams" : "7.2",
		"teamspitcher" : "TWI DOSL"
	},
	{
		"player" : "rosarra01",
		"teams" : "4.5",
		"teamspitcher" : "TWN GULF"
	},
	{
		"player" : "rosarra01",
		"teams" : "8.5",
		"teamspitcher" : "ELZ APPY"
	},
	{
		"player" : "rosarra01",
		"teams" : "11.6",
		"teamspitcher" : "CDR MIDW"
	},
	{
		"player" : "rosarra01",
		"teams" : "8.8",
		"teamspitcher" : "CDR,TWN MIDW,GULF"
	},
	{
		"player" : "rosarra01",
		"teams" : "10.0",
		"teamspitcher" : "FTM,SPS,CNG FLOR,AZFL,SOUL"
	},
	{
		"player" : "rosarra01",
		"teams" : "8.9",
		"teamspitcher" : "CNG,FTM,GIG SOUL,FLOR,DOWL"
	},
	{
		"player" : "rosarra01",
		"teams" : "5.2",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "norwoja01",
		"teams" : "9.0",
		"teamspitcher" : "BOI,CBZ NORW,ARIZ"
	},
	{
		"player" : "norwoja01",
		"teams" : "8.8",
		"teamspitcher" : "SBN,CBZ MIDW,ARIZ"
	},
	{
		"player" : "norwoja01",
		"teams" : "10.5",
		"teamspitcher" : "SBN,MYR MIDW,CARL"
	},
	{
		"player" : "norwoja01",
		"teams" : "8.4",
		"teamspitcher" : "MYR,KNX CARL,SOUL"
	},
	{
		"player" : "norwoja01",
		"teams" : "6.4",
		"teamspitcher" : "KNX,IWA SOUL,PCL"
	},
	{
		"player" : "butleed01",
		"teams" : "7.8",
		"teamspitcher" : "GRJ PION"
	},
	{
		"player" : "butleed01",
		"teams" : "5.8",
		"teamspitcher" : "MOD,AVL,TUL CALL,SALL,TL"
	},
	{
		"player" : "butleed01",
		"teams" : "8.7",
		"teamspitcher" : "TUL,CSP,MOD TL,PCL,CALL"
	},
	{
		"player" : "butleed01",
		"teams" : "10.1",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "butleed01",
		"teams" : "9.4",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "butleed01",
		"teams" : "9.7",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "butleed01",
		"teams" : "14.2",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "millsal02",
		"teams" : "10.3",
		"teamspitcher" : "IDF PION"
	},
	{
		"player" : "millsal02",
		"teams" : "5.6",
		"teamspitcher" : "LEX SALL"
	},
	{
		"player" : "millsal02",
		"teams" : "7.1",
		"teamspitcher" : "LEX,IDF SALL,PION"
	},
	{
		"player" : "millsal02",
		"teams" : "9.7",
		"teamspitcher" : "WMT CARL"
	},
	{
		"player" : "millsal02",
		"teams" : "8.5",
		"teamspitcher" : "NTA,OMA TL,PCL"
	},
	{
		"player" : "millsal02",
		"teams" : "8.5",
		"teamspitcher" : "MES,IWA,MYR,CBZ AZFL,PCL,CARL,ARIZ"
	},
	{
		"player" : "millsal02",
		"teams" : "8.7",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "farrelu01",
		"teams" : "10.8",
		"teamspitcher" : "IDF PION"
	},
	{
		"player" : "farrelu01",
		"teams" : "9.6",
		"teamspitcher" : "LEX,NTA SALL,TL"
	},
	{
		"player" : "farrelu01",
		"teams" : "8.5",
		"teamspitcher" : "NTA,WMT TL,CARL"
	},
	{
		"player" : "farrelu01",
		"teams" : "8.1",
		"teamspitcher" : "OMA,LCY,ROY PCL,DOWL,ARIZ"
	},
	{
		"player" : "farrelu01",
		"teams" : "8.3",
		"teamspitcher" : "OMA,LOU,OKC IL,PCL"
	},
	{
		"player" : "farrelu01",
		"teams" : "6.6",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "cishest01",
		"teams" : "5.6",
		"teamspitcher" : "JAM NYPL"
	},
	{
		"player" : "cishest01",
		"teams" : "8.2",
		"teamspitcher" : "GBO SALL"
	},
	{
		"player" : "cishest01",
		"teams" : "5.7",
		"teamspitcher" : "JUP FLOR"
	},
	{
		"player" : "cishest01",
		"teams" : "8.4",
		"teamspitcher" : "JUP,JCK,PHO FLOR,SOUL,AZFL"
	},
	{
		"player" : "cishest01",
		"teams" : "7.0",
		"teamspitcher" : "NOR PCL"
	},
	{
		"player" : "cishest01",
		"teams" : "7.5",
		"teamspitcher" : "JCK SOUL"
	},
	{
		"player" : "cishest01",
		"teams" : "22.5",
		"teamspitcher" : "EVR NORW"
	},
	{
		"player" : "cishest01",
		"teams" : "9.0",
		"teamspitcher" : "ARK,TAC TL,PCL"
	},
	{
		"player" : "darviyu01",
		"teams" : "9.3",
		"teamspitcher" : "NPN JPPL"
	},
	{
		"player" : "darviyu01",
		"teams" : "7.7",
		"teamspitcher" : "NPN JPPL"
	},
	{
		"player" : "darviyu01",
		"teams" : "5.3",
		"teamspitcher" : "NPN JPPL"
	},
	{
		"player" : "darviyu01",
		"teams" : "6.1",
		"teamspitcher" : "NPN JPPL"
	},
	{
		"player" : "darviyu01",
		"teams" : "5.8",
		"teamspitcher" : "NPN JPPL"
	},
	{
		"player" : "darviyu01",
		"teams" : "7.0",
		"teamspitcher" : "NPN JPPL"
	},
	{
		"player" : "darviyu01",
		"teams" : "6.1",
		"teamspitcher" : "NPN JPPL"
	},
	{
		"player" : "darviyu01",
		"teams" : "5.7",
		"teamspitcher" : "FRI,RRK TL,PCL"
	},
	{
		"player" : "darviyu01",
		"teams" : "6.0",
		"teamspitcher" : "SBN MIDW"
	},
	{
		"player" : "hamelco01",
		"teams" : "5.4",
		"teamspitcher" : "LWD,CLW SALL,FLOR"
	},
	{
		"player" : "hamelco01",
		"teams" : "5.6",
		"teamspitcher" : "CLW FLOR"
	},
	{
		"player" : "hamelco01",
		"teams" : "4.4",
		"teamspitcher" : "REA,CLW EL,FLOR"
	},
	{
		"player" : "hamelco01",
		"teams" : "5.3",
		"teamspitcher" : "SWB,CLW,LWD IL,FLOR,SALL"
	},
	{
		"player" : "hamelco01",
		"teams" : "6.4",
		"teamspitcher" : "CLW FLOR"
	},
	{
		"player" : "hamelco01",
		"teams" : "3.1",
		"teamspitcher" : "FRI TL"
	},
	{
		"player" : "chatwty01",
		"teams" : "5.9",
		"teamspitcher" : "ANG ARIZ"
	},
	{
		"player" : "chatwty01",
		"teams" : "7.7",
		"teamspitcher" : "CDR MIDW"
	},
	{
		"player" : "chatwty01",
		"teams" : "8.8",
		"teamspitcher" : "RCU,ARK,SLK CALL,TL,PCL"
	},
	{
		"player" : "chatwty01",
		"teams" : "11.8",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "chatwty01",
		"teams" : "9.8",
		"teamspitcher" : "CSP,TUL,SRV PCL,TL,AZFL"
	},
	{
		"player" : "chatwty01",
		"teams" : "9.8",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "chatwty01",
		"teams" : "7.1",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "chatwty01",
		"teams" : "6.8",
		"teamspitcher" : "MOD CALL"
	},
	{
		"player" : "chatwty01",
		"teams" : "4.8",
		"teamspitcher" : "MOD,HRT CALL,EL"
	},
	{
		"player" : "chatwty01",
		"teams" : "6.8",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "montgmi01",
		"teams" : "6.5",
		"teamspitcher" : "ROY ARIZ"
	},
	{
		"player" : "montgmi01",
		"teams" : "6.5",
		"teamspitcher" : "BUR,WMT MIDW,CARL"
	},
	{
		"player" : "montgmi01",
		"teams" : "7.8",
		"teamspitcher" : "NTA,WMT,SPS,ROY TL,CARL,AZFL,ARIZ"
	},
	{
		"player" : "montgmi01",
		"teams" : "9.4",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "montgmi01",
		"teams" : "10.8",
		"teamspitcher" : "OMA,NTA PCL,TL"
	},
	{
		"player" : "montgmi01",
		"teams" : "9.0",
		"teamspitcher" : "DHM,SRV,POE IL,AZFL,FLOR"
	},
	{
		"player" : "montgmi01",
		"teams" : "8.4",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "montgmi01",
		"teams" : "8.1",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "quintjo01",
		"teams" : "10.1",
		"teamspitcher" : "TR2 VESL"
	},
	{
		"player" : "quintjo01",
		"teams" : "5.9",
		"teamspitcher" : "YK2 DOSL"
	},
	{
		"player" : "quintjo01",
		"teams" : "4.5",
		"teamspitcher" : "YK2 DOSL"
	},
	{
		"player" : "quintjo01",
		"teams" : "5.8",
		"teamspitcher" : "YNK,CHS GULF,SALL"
	},
	{
		"player" : "quintjo01",
		"teams" : "7.6",
		"teamspitcher" : "TAM FLOR"
	},
	{
		"player" : "quintjo01",
		"teams" : "8.0",
		"teamspitcher" : "BIR SOUL"
	},
	{
		"player" : "lestejo01",
		"teams" : "67.5",
		"teamspitcher" : "RES GULF"
	},
	{
		"player" : "lestejo01",
		"teams" : "8.7",
		"teamspitcher" : "AUG SALL"
	},
	{
		"player" : "lestejo01",
		"teams" : "8.1",
		"teamspitcher" : "SAR,RES FLOR,GULF"
	},
	{
		"player" : "lestejo01",
		"teams" : "6.9",
		"teamspitcher" : "PRT EL"
	},
	{
		"player" : "lestejo01",
		"teams" : "8.3",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "lestejo01",
		"teams" : "8.2",
		"teamspitcher" : "PAW,GRV,PRT IL,SALL,EL"
	},
	{
		"player" : "hendrky01",
		"teams" : "6.1",
		"teamspitcher" : "SPO,FRI NORW,TL"
	},
	{
		"player" : "hendrky01",
		"teams" : "8.5",
		"teamspitcher" : "MYR,DYT CARL,FLOR"
	},
	{
		"player" : "hendrky01",
		"teams" : "7.7",
		"teamspitcher" : "KNX,IWA SOUL,PCL"
	},
	{
		"player" : "hendrky01",
		"teams" : "8.6",
		"teamspitcher" : "IWA PCL"
	},
	{
		"player" : "hendrky01",
		"teams" : "2.2",
		"teamspitcher" : "KNX SOUL"
	},
	{
		"player" : "freemmi01",
		"teams" : "YAK · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "freemmi01",
		"teams" : "SBN · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "freemmi01",
		"teams" : "VIS · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "freemmi01",
		"teams" : "MOB,SRV · SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "freemmi01",
		"teams" : "REN,MOB · PCL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "freemmi01",
		"teams" : "REN,MGL,HIL · PCL,VEWL,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "freemmi01",
		"teams" : "REN,TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "freemmi01",
		"teams" : "OKC,IWA,TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "freemmi01",
		"teams" : "IWA,CBZ · PCL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "gorete01",
		"teams" : "ROY · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "gorete01",
		"teams" : "BRL · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "gorete01",
		"teams" : "LEX · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "gorete01",
		"teams" : "WMT,OMA · CARL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "gorete01",
		"teams" : "NTA · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "gorete01",
		"teams" : "NTA · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "gorete01",
		"teams" : "OMA,NTA · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "gorete01",
		"teams" : "OMA,IWA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "zagunma01",
		"teams" : "BOI,KNC,CBZ · NORW,MIDW,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "zagunma01",
		"teams" : "MYR,MES · CARL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "zagunma01",
		"teams" : "IWA,KNX · PCL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "zagunma01",
		"teams" : "IWA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "zagunma01",
		"teams" : "IWA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "davista01",
		"teams" : "CBZ · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "davista01",
		"teams" : "DYT,PEO · FLOR,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "davista01",
		"teams" : "DYT,KNX · FLOR,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "davista01",
		"teams" : "KNX · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "davista01",
		"teams" : "IWA,KNX,AZU · PCL,SOUL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "davista01",
		"teams" : "IWA,KNX,EUG,ESS · PCL,SOUL,NORW,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "davista01",
		"teams" : "IWA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "davista01",
		"teams" : "IWA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "navaref01",
		"teams" : "ORM,ANG · PION,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "navaref01",
		"teams" : "CDR,RCU · MIDW,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "navaref01",
		"teams" : "RCU · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "navaref01",
		"teams" : "ARK · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "navaref01",
		"teams" : "SLK,AGU · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "navaref01",
		"teams" : "SLK,AGU · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "navaref01",
		"teams" : "SLK,HRM · PCL,MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "navaref01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "navaref01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "navaref01",
		"teams" : "TAC,HRM,MEM,TIJ · PCL,MXPW,MEX",
		"teamspitcher" : ""
	},
	{
		"player" : "navaref01",
		"teams" : "TOL,HRM · IL,MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "navaref01",
		"teams" : "HAN,IWA · JPCL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "gimench01",
		"teams" : "MHV · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "gimench01",
		"teams" : "LCO · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "gimench01",
		"teams" : "LCO · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "gimench01",
		"teams" : "KIN,AKR,SPS,SCO · CARL,EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "gimench01",
		"teams" : "BFL,AKR,AGU · IL,EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "gimench01",
		"teams" : "CLB,CCS · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "gimench01",
		"teams" : "CLB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "gimench01",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "gimench01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "gimench01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "gimench01",
		"teams" : "RRK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "gimench01",
		"teams" : "RRK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "gimench01",
		"teams" : "FRI · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "gimench01",
		"teams" : "IWA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "murphda08",
		"teams" : "KPT,BKN,MET · APPY,NYPL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "murphda08",
		"teams" : "SCE,WKI · FLOR,HIWB",
		"teamspitcher" : ""
	},
	{
		"player" : "murphda08",
		"teams" : "BNG,PES,BKN,NOR · EL,AZFL,NYPL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "murphda08",
		"teams" : "AGU,BFL,SCE · DOWL,IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "murphda08",
		"teams" : "SCE,MET · FLOR,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "murphda08",
		"teams" : "HRB · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "lasteto01",
		"teams" : "ROM · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "lasteto01",
		"teams" : "LBG,KIS · CARL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "lasteto01",
		"teams" : "MSS,SCO,LBG · SOUL,AZFL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "lasteto01",
		"teams" : "GWI · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "lasteto01",
		"teams" : "KNX,IWA · SOUL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "lasteto01",
		"teams" : "IWA,KNX · PCL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "lasteto01",
		"teams" : "IWA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "caratvi01",
		"teams" : "DAN,PCE · APPY,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "caratvi01",
		"teams" : "ROM,KNC · SALL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "caratvi01",
		"teams" : "MYR · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "caratvi01",
		"teams" : "KNX,MES · SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "caratvi01",
		"teams" : "IWA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "caratvi01",
		"teams" : "IWA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "boteda01",
		"teams" : "CBZ · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "boteda01",
		"teams" : "BOI,KNC,DYT · NORW,MIDW,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "boteda01",
		"teams" : "KNC,BOI,IWA · MIDW,NORW,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "boteda01",
		"teams" : "SBN · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "boteda01",
		"teams" : "MYR,KNX,IWA · CARL,SOUL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "boteda01",
		"teams" : "KNX,MES · SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "boteda01",
		"teams" : "IWA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "happia01",
		"teams" : "SBN,EUG · MIDW,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "happia01",
		"teams" : "KNX,MYR,MES · SOUL,CARL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "happia01",
		"teams" : "IWA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "zobribe01",
		"teams" : "TRC · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "zobribe01",
		"teams" : "LEX,SAL · SALL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "zobribe01",
		"teams" : "CPC,PHO,DHM · TL,AZFL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "zobribe01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "zobribe01",
		"teams" : "DHM,VRO · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "zobribe01",
		"teams" : "POE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "zobribe01",
		"teams" : "NVL,STK · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "zobribe01",
		"teams" : "KNX · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "heywaja01",
		"teams" : "KIS,DAN · GULF,APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "heywaja01",
		"teams" : "ROM,MYR · SALL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "heywaja01",
		"teams" : "MYR,MSS,PES,GWI · CARL,SOUL,AZFL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "heywaja01",
		"teams" : "GWI · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "heywaja01",
		"teams" : "GWI · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "heywaja01",
		"teams" : "SBN · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "almoral01",
		"teams" : "CBZ,BOI · ARIZ,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "almoral01",
		"teams" : "KNC,MES · MIDW,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "almoral01",
		"teams" : "DYT,KNX · FLOR,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "almoral01",
		"teams" : "KNX · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "almoral01",
		"teams" : "IWA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "schwaky01",
		"teams" : "DYT,KNC,BOI · FLOR,MIDW,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "schwaky01",
		"teams" : "KNX,IWA · SOUL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "schwaky01",
		"teams" : "MES · AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "schwaky01",
		"teams" : "IWA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "bryankr01",
		"teams" : "MES,BOI,DYT,CBZ · AZFL,NORW,FLOR,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "bryankr01",
		"teams" : "KNX,IWA · SOUL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "bryankr01",
		"teams" : "IWA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "bryankr01",
		"teams" : "IWA,KNX · PCL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "russead02",
		"teams" : "ATH,BUR,VMT · ARIZ,MIDW,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "russead02",
		"teams" : "STK,MES,SAC · CALL,AZFL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "russead02",
		"teams" : "KNX,MDL,MES,STK · SOUL,TL,AZFL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "russead02",
		"teams" : "IWA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "russead02",
		"teams" : "IWA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "baezja01",
		"teams" : "CBZ,BOI · ARIZ,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "baezja01",
		"teams" : "PEO,DYT,MES · MIDW,FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "baezja01",
		"teams" : "DYT,KNX · FLOR,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "baezja01",
		"teams" : "IWA,SNT · PCL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "baezja01",
		"teams" : "IWA,SNT,CBZ · PCL,PRWL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "baezja01",
		"teams" : "IWA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "rizzoan01",
		"teams" : "RES · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "rizzoan01",
		"teams" : "GRV · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "rizzoan01",
		"teams" : "GRV,SAL · SALL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "rizzoan01",
		"teams" : "PRT,SAL · EL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "rizzoan01",
		"teams" : "TUC,AZU · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "rizzoan01",
		"teams" : "IWA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "contrwi01",
		"teams" : "CB2 · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "contrwi01",
		"teams" : "CB2 · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "contrwi01",
		"teams" : "BOI · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "contrwi01",
		"teams" : "BOI · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "contrwi01",
		"teams" : "KNC,ARA · MIDW,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "contrwi01",
		"teams" : "DYT,ARA · FLOR,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "contrwi01",
		"teams" : "KNX,MES · SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "contrwi01",
		"teams" : "IWA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "waldema01",
		"teams" : "9.1",
		"teamspitcher" : "BJY GULF"
	},
	{
		"player" : "waldema01",
		"teams" : "10.5",
		"teamspitcher" : "AUB NYPL"
	},
	{
		"player" : "waldema01",
		"teams" : "16.2",
		"teamspitcher" : "DUN FLOR"
	},
	{
		"player" : "waldema01",
		"teams" : "8.1",
		"teamspitcher" : "LNS MIDW"
	},
	{
		"player" : "waldema01",
		"teams" : "7.2",
		"teamspitcher" : "DUN,LNS FLOR,MIDW"
	},
	{
		"player" : "waldema01",
		"teams" : "10.2",
		"teamspitcher" : "MAN EL"
	},
	{
		"player" : "waldema01",
		"teams" : "10.1",
		"teamspitcher" : "SAC,MDL,BFL PCL,TL,IL"
	},
	{
		"player" : "waldema01",
		"teams" : "9.6",
		"teamspitcher" : "ARA,PEN VEWL,SOUL"
	},
	{
		"player" : "waldema01",
		"teams" : "6.3",
		"teamspitcher" : "ROC,CNG,ARA IL,SOUL,VEWL"
	},
	{
		"player" : "waldema01",
		"teams" : "8.8",
		"teamspitcher" : "PAW,AZU IL,DOWL"
	},
	{
		"player" : "waldema01",
		"teams" : "11.7",
		"teamspitcher" : "PAW,LOW IL,NYPL"
	},
	{
		"player" : "scottro02",
		"teams" : "4.2",
		"teamspitcher" : "RES,LOW GULF,NYPL"
	},
	{
		"player" : "scottro02",
		"teams" : "5.8",
		"teamspitcher" : "RES GULF"
	},
	{
		"player" : "scottro02",
		"teams" : "6.8",
		"teamspitcher" : "SAL CARL"
	},
	{
		"player" : "scottro02",
		"teams" : "8.2",
		"teamspitcher" : "PRT,SPS EL,AZFL"
	},
	{
		"player" : "scottro02",
		"teams" : "9.4",
		"teamspitcher" : "PRT,PAW EL,IL"
	},
	{
		"player" : "scottro02",
		"teams" : "6.6",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "scottro02",
		"teams" : "3.7",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "scottro02",
		"teams" : "6.5",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "barnema01",
		"teams" : "7.3",
		"teamspitcher" : "SAL,GRV CARL,SALL"
	},
	{
		"player" : "barnema01",
		"teams" : "9.1",
		"teamspitcher" : "PRT,PAW EL,IL"
	},
	{
		"player" : "barnema01",
		"teams" : "8.4",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "barnema01",
		"teams" : "8.6",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "barnema01",
		"teams" : "9.0",
		"teamspitcher" : "PRT EL"
	},
	{
		"player" : "thornty01",
		"teams" : "5.8",
		"teamspitcher" : "HEL PION"
	},
	{
		"player" : "thornty01",
		"teams" : "6.1",
		"teamspitcher" : "APP,BRE,PEA MIDW,FLOR,AZFL"
	},
	{
		"player" : "thornty01",
		"teams" : "7.6",
		"teamspitcher" : "HVL,NVL SOUL,PCL"
	},
	{
		"player" : "thornty01",
		"teams" : "10.8",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "thornty01",
		"teams" : "10.8",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "thornty01",
		"teams" : "8.3",
		"teamspitcher" : "PAW,PRT IL,EL"
	},
	{
		"player" : "brasiry01",
		"teams" : "6.5",
		"teamspitcher" : "ORM PION"
	},
	{
		"player" : "brasiry01",
		"teams" : "6.9",
		"teamspitcher" : "CDR,ANG,RCU MIDW,ARIZ,CALL"
	},
	{
		"player" : "brasiry01",
		"teams" : "9.5",
		"teamspitcher" : "RCU,ARK CALL,TL"
	},
	{
		"player" : "brasiry01",
		"teams" : "8.1",
		"teamspitcher" : "ARK,MES TL,AZFL"
	},
	{
		"player" : "brasiry01",
		"teams" : "7.6",
		"teamspitcher" : "SLK,ARK PCL,TL"
	},
	{
		"player" : "brasiry01",
		"teams" : "9.0",
		"teamspitcher" : "SLK,HRM PCL,MXPW"
	},
	{
		"player" : "brasiry01",
		"teams" : "11.0",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "brasiry01",
		"teams" : "6.4",
		"teamspitcher" : "ATH,NVL ARIZ,PCL"
	},
	{
		"player" : "brasiry01",
		"teams" : "7.4",
		"teamspitcher" : "NVL PCL"
	},
	{
		"player" : "brasiry01",
		"teams" : "9.6",
		"teamspitcher" : "HIR JPCL"
	},
	{
		"player" : "brasiry01",
		"teams" : "6.5",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "cuevawi01",
		"teams" : "8.2",
		"teamspitcher" : "RSX DOSL"
	},
	{
		"player" : "cuevawi01",
		"teams" : "8.8",
		"teamspitcher" : "RSX DOSL"
	},
	{
		"player" : "cuevawi01",
		"teams" : "7.3",
		"teamspitcher" : "RES,RSX GULF,DOSL"
	},
	{
		"player" : "cuevawi01",
		"teams" : "6.4",
		"teamspitcher" : "LOW NYPL"
	},
	{
		"player" : "cuevawi01",
		"teams" : "9.2",
		"teamspitcher" : "SAL CARL"
	},
	{
		"player" : "cuevawi01",
		"teams" : "8.7",
		"teamspitcher" : "SAL,LGU CARL,VEWL"
	},
	{
		"player" : "cuevawi01",
		"teams" : "7.6",
		"teamspitcher" : "PRT,PAW,LGU EL,IL,VEWL"
	},
	{
		"player" : "cuevawi01",
		"teams" : "8.3",
		"teamspitcher" : "PAW,LGU IL,VEWL"
	},
	{
		"player" : "cuevawi01",
		"teams" : "8.5",
		"teamspitcher" : "NOR,TOL PCL,IL"
	},
	{
		"player" : "cuevawi01",
		"teams" : "8.0",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "haleyju01",
		"teams" : "6.2",
		"teamspitcher" : "LOW NYPL"
	},
	{
		"player" : "haleyju01",
		"teams" : "7.0",
		"teamspitcher" : "GRV SALL"
	},
	{
		"player" : "haleyju01",
		"teams" : "7.4",
		"teamspitcher" : "SAL,PRT CARL,EL"
	},
	{
		"player" : "haleyju01",
		"teams" : "9.9",
		"teamspitcher" : "PRT,SCO EL,AZFL"
	},
	{
		"player" : "haleyju01",
		"teams" : "6.9",
		"teamspitcher" : "PAW,PRT,ESC IL,EL,DOWL"
	},
	{
		"player" : "haleyju01",
		"teams" : "8.3",
		"teamspitcher" : "PAW,ESC,ROC,FTM,TWN IL,DOWL,FLOR,GULF"
	},
	{
		"player" : "haleyju01",
		"teams" : "9.8",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "priceda01",
		"teams" : "7.6",
		"teamspitcher" : "MTG,VRO,DHM SOUL,FLOR,IL"
	},
	{
		"player" : "priceda01",
		"teams" : "7.3",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "priceda01",
		"teams" : "4.9",
		"teamspitcher" : "POE FLOR"
	},
	{
		"player" : "priceda01",
		"teams" : "19.1",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "kellyjo05",
		"teams" : "9.8",
		"teamspitcher" : "BAT NYPL"
	},
	{
		"player" : "kellyjo05",
		"teams" : "9.0",
		"teamspitcher" : "DAV MIDW"
	},
	{
		"player" : "kellyjo05",
		"teams" : "8.6",
		"teamspitcher" : "PLM,SPD FLOR,TL"
	},
	{
		"player" : "kellyjo05",
		"teams" : "9.3",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "kellyjo05",
		"teams" : "7.0",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "kellyjo05",
		"teams" : "6.6",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "kellyjo05",
		"teams" : "7.6",
		"teamspitcher" : "PAW,LOW IL,NYPL"
	},
	{
		"player" : "kellyjo05",
		"teams" : "0.0",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "workmbr01",
		"teams" : "8.8",
		"teamspitcher" : "GRV SALL"
	},
	{
		"player" : "workmbr01",
		"teams" : "8.2",
		"teamspitcher" : "SAL,PRT CARL,EL"
	},
	{
		"player" : "workmbr01",
		"teams" : "8.0",
		"teamspitcher" : "PRT,PAW EL,IL"
	},
	{
		"player" : "workmbr01",
		"teams" : "9.0",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "workmbr01",
		"teams" : "11.7",
		"teamspitcher" : "PRT,LOW,RES EL,NYPL,GULF"
	},
	{
		"player" : "workmbr01",
		"teams" : "5.0",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "workmbr01",
		"teams" : "6.3",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "kimbrcr01",
		"teams" : "4.1",
		"teamspitcher" : "DAN,ROM,MYR APPY,SALL,CARL"
	},
	{
		"player" : "kimbrcr01",
		"teams" : "4.7",
		"teamspitcher" : "MYR,ROM,MSS,PES,GWI CARL,SALL,SOUL,AZFL,IL"
	},
	{
		"player" : "kimbrcr01",
		"teams" : "4.5",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "kimbrcr01",
		"teams" : "27.0",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "poynebo01",
		"teams" : "11.0",
		"teamspitcher" : "LOW NYPL"
	},
	{
		"player" : "poynebo01",
		"teams" : "7.5",
		"teamspitcher" : "SAL,GRV CARL,SALL"
	},
	{
		"player" : "poynebo01",
		"teams" : "6.3",
		"teamspitcher" : "PRT,SAL,PEA EL,CARL,AZFL"
	},
	{
		"player" : "poynebo01",
		"teams" : "9.0",
		"teamspitcher" : "PAW,PRT IL,EL"
	},
	{
		"player" : "pomerdr01",
		"teams" : "6.1",
		"teamspitcher" : "KIN,AKR,TUL CARL,EL,TL"
	},
	{
		"player" : "pomerdr01",
		"teams" : "9.9",
		"teamspitcher" : "CSP,TUL PCL,TL"
	},
	{
		"player" : "pomerdr01",
		"teams" : "9.2",
		"teamspitcher" : "CSP,TUL PCL,TL"
	},
	{
		"player" : "pomerdr01",
		"teams" : "8.7",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "pomerdr01",
		"teams" : "0.0",
		"teamspitcher" : "STK CALL"
	},
	{
		"player" : "pomerdr01",
		"teams" : "7.2",
		"teamspitcher" : "PAW,PRT IL,EL"
	},
	{
		"player" : "wrighst01",
		"teams" : "9.8",
		"teamspitcher" : "LCO,KIN SALL,CARL"
	},
	{
		"player" : "wrighst01",
		"teams" : "8.5",
		"teamspitcher" : "AKR,KIN EL,CARL"
	},
	{
		"player" : "wrighst01",
		"teams" : "8.1",
		"teamspitcher" : "AKR,ORN,CLB EL,VEWL,IL"
	},
	{
		"player" : "wrighst01",
		"teams" : "10.3",
		"teamspitcher" : "AKR,CLB EL,IL"
	},
	{
		"player" : "wrighst01",
		"teams" : "9.9",
		"teamspitcher" : "AKR,LCO,KIN,CLB EL,MIDW,CARL,IL"
	},
	{
		"player" : "wrighst01",
		"teams" : "7.2",
		"teamspitcher" : "AKR,ESC,PAW,PRT EL,DOWL,IL"
	},
	{
		"player" : "wrighst01",
		"teams" : "8.6",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "wrighst01",
		"teams" : "8.2",
		"teamspitcher" : "PAW,PRT IL,EL"
	},
	{
		"player" : "wrighst01",
		"teams" : "9.5",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "wrighst01",
		"teams" : "10.8",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "beeksja02",
		"teams" : "5.4",
		"teamspitcher" : "RES GULF"
	},
	{
		"player" : "beeksja02",
		"teams" : "9.6",
		"teamspitcher" : "GRV SALL"
	},
	{
		"player" : "beeksja02",
		"teams" : "9.6",
		"teamspitcher" : "SAL,PRT,SPS CARL,EL,AZFL"
	},
	{
		"player" : "beeksja02",
		"teams" : "7.5",
		"teamspitcher" : "PAW,PRT IL,EL"
	},
	{
		"player" : "beeksja02",
		"teams" : "7.2",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "smithca02",
		"teams" : "7.6",
		"teamspitcher" : "HDS,PEA CALL,AZFL"
	},
	{
		"player" : "smithca02",
		"teams" : "6.5",
		"teamspitcher" : "WTN,PEA SOUL,AZFL"
	},
	{
		"player" : "smithca02",
		"teams" : "9.2",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "smithca02",
		"teams" : "0.0",
		"teamspitcher" : "PRT EL"
	},
	{
		"player" : "smithca02",
		"teams" : "10.0",
		"teamspitcher" : "PAW,PRT IL,EL"
	},
	{
		"player" : "hembrhe01",
		"teams" : "7.4",
		"teamspitcher" : "GNT ARIZ"
	},
	{
		"player" : "hembrhe01",
		"teams" : "6.1",
		"teamspitcher" : "RMD,SJO EL,CALL"
	},
	{
		"player" : "hembrhe01",
		"teams" : "6.4",
		"teamspitcher" : "FRE,SCO,SJO PCL,AZFL,CALL"
	},
	{
		"player" : "hembrhe01",
		"teams" : "8.8",
		"teamspitcher" : "FRE PCL"
	},
	{
		"player" : "hembrhe01",
		"teams" : "8.8",
		"teamspitcher" : "FRE,PAW PCL,IL"
	},
	{
		"player" : "hembrhe01",
		"teams" : "6.9",
		"teamspitcher" : "PAW,RES IL,GULF"
	},
	{
		"player" : "hembrhe01",
		"teams" : "4.1",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "velazhe01",
		"teams" : "9.1",
		"teamspitcher" : "CMP,OBR MEX,MXPW"
	},
	{
		"player" : "velazhe01",
		"teams" : "9.7",
		"teamspitcher" : "CMP,OBR MEX,MXPW"
	},
	{
		"player" : "velazhe01",
		"teams" : "9.8",
		"teamspitcher" : "CMP,NAV MEX,MXPW"
	},
	{
		"player" : "velazhe01",
		"teams" : "8.9",
		"teamspitcher" : "CMP,NAV MEX,MXPW"
	},
	{
		"player" : "velazhe01",
		"teams" : "9.6",
		"teamspitcher" : "CMP,NAV MEX,MXPW"
	},
	{
		"player" : "velazhe01",
		"teams" : "8.5",
		"teamspitcher" : "CMP,NAV MEX,MXPW"
	},
	{
		"player" : "velazhe01",
		"teams" : "8.0",
		"teamspitcher" : "MVA,NAV MEX,MXPW"
	},
	{
		"player" : "velazhe01",
		"teams" : "6.8",
		"teamspitcher" : "PAW,NAV IL,MXPW"
	},
	{
		"player" : "velazhe01",
		"teams" : "0.0",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "rodried05",
		"teams" : "6.7",
		"teamspitcher" : "ORI DOSL"
	},
	{
		"player" : "rodried05",
		"teams" : "6.3",
		"teamspitcher" : "OLS,ADN GULF,NYPL"
	},
	{
		"player" : "rodried05",
		"teams" : "8.7",
		"teamspitcher" : "DEL SALL"
	},
	{
		"player" : "rodried05",
		"teams" : "8.3",
		"teamspitcher" : "FDK,BOW,SPS CARL,EL,AZFL"
	},
	{
		"player" : "rodried05",
		"teams" : "9.0",
		"teamspitcher" : "BOW,PRT EL"
	},
	{
		"player" : "rodried05",
		"teams" : "8.6",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "rodried05",
		"teams" : "8.3",
		"teamspitcher" : "PAW,MGL IL,VEWL"
	},
	{
		"player" : "rodried05",
		"teams" : "12.8",
		"teamspitcher" : "PAW,PRT IL,EL"
	},
	{
		"player" : "rodried05",
		"teams" : "3.4",
		"teamspitcher" : "PRT EL"
	},
	{
		"player" : "salech01",
		"teams" : "5.2",
		"teamspitcher" : "CHR,WSM IL,CARL"
	},
	{
		"player" : "salech01",
		"teams" : "2.3",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "eovalna01",
		"teams" : "5.9",
		"teamspitcher" : "DGR,OGD GULF,PION"
	},
	{
		"player" : "eovalna01",
		"teams" : "8.9",
		"teamspitcher" : "GRL MIDW"
	},
	{
		"player" : "eovalna01",
		"teams" : "9.9",
		"teamspitcher" : "SBR,DGR,OGD CALL,ARIZ,PION"
	},
	{
		"player" : "eovalna01",
		"teams" : "6.6",
		"teamspitcher" : "CNG SOUL"
	},
	{
		"player" : "eovalna01",
		"teams" : "7.7",
		"teamspitcher" : "CNG SOUL"
	},
	{
		"player" : "eovalna01",
		"teams" : "9.6",
		"teamspitcher" : "JCK,JUP SOUL,FLOR"
	},
	{
		"player" : "eovalna01",
		"teams" : "14.4",
		"teamspitcher" : "POE,DHM FLOR,IL"
	},
	{
		"player" : "johnsbr02",
		"teams" : "3.2",
		"teamspitcher" : "LOW NYPL"
	},
	{
		"player" : "johnsbr02",
		"teams" : "6.4",
		"teamspitcher" : "GRV,SAL,RES SALL,CARL,GULF"
	},
	{
		"player" : "johnsbr02",
		"teams" : "6.3",
		"teamspitcher" : "PRT,SAL EL,CARL"
	},
	{
		"player" : "johnsbr02",
		"teams" : "6.9",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "johnsbr02",
		"teams" : "8.3",
		"teamspitcher" : "PAW,LOW,RES IL,NYPL,GULF"
	},
	{
		"player" : "johnsbr02",
		"teams" : "8.1",
		"teamspitcher" : "PAW,LOW IL,NYPL"
	},
	{
		"player" : "porceri01",
		"teams" : "8.4",
		"teamspitcher" : "LAK FLOR"
	},
	{
		"player" : "porceri01",
		"teams" : "7.7",
		"teamspitcher" : "TOL IL"
	},
	{
		"player" : "porceri01",
		"teams" : "5.8",
		"teamspitcher" : "PAW,LOW IL,NYPL"
	},
	{
		"player" : "rendato01",
		"teams" : "AUB · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "rendato01",
		"teams" : "HGR · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "rendato01",
		"teams" : "POT,MES · CARL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "rendato01",
		"teams" : "TRE,HRB · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "rendato01",
		"teams" : "PEN,LOU · SOUL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "rendato01",
		"teams" : "LOU,REN · IL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "rendato01",
		"teams" : "PAW,PRT · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "butleda01",
		"teams" : "LOW,SAL · NYPL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "butleda01",
		"teams" : "GRV,SAL,PAW · SALL,CARL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "butleda01",
		"teams" : "SAL,PRT,SCO,PAW · CARL,EL,AZFL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "butleda01",
		"teams" : "PRT,PAW,AZU · EL,IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "butleda01",
		"teams" : "PAW,AZU · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "butleda01",
		"teams" : "PAW · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "butleda01",
		"teams" : "SYR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "butleda01",
		"teams" : "PAW · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "butleda01",
		"teams" : "PAW · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "butleda01",
		"teams" : "PAW · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "pedrodu01",
		"teams" : "SAR,AUG,SCO · FLOR,SALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "pedrodu01",
		"teams" : "PRT,PAW · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "pedrodu01",
		"teams" : "PAW · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "pedrodu01",
		"teams" : "PAW · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "pedrodu01",
		"teams" : "PAW · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "phillbr01",
		"teams" : "EXO · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "phillbr01",
		"teams" : "FAY · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "phillbr01",
		"teams" : "HRB,JUP · EL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "phillbr01",
		"teams" : "HRB,BFL,OTT · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "phillbr01",
		"teams" : "BFL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "phillbr01",
		"teams" : "BFL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "phillbr01",
		"teams" : "BFL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "phillbr01",
		"teams" : "LOU,DAY · IL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "phillbr01",
		"teams" : "PAW,LOW · IL,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "travisa01",
		"teams" : "LOW,GRV · NYPL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "travisa01",
		"teams" : "SAL,PRT,SCO · CARL,EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "travisa01",
		"teams" : "PAW · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "travisa01",
		"teams" : "PAW,GIG · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "travisa01",
		"teams" : "PAW · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "lintz02",
		"teams" : "RES · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "lintz02",
		"teams" : "LOW · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "lintz02",
		"teams" : "GRV · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "lintz02",
		"teams" : "SAL,PRT,SCO · CARL,EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "lintz02",
		"teams" : "PRT · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "lintz02",
		"teams" : "PRT,PAW · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "lintz02",
		"teams" : "PAW · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "kinslia01",
		"teams" : "SPO · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "kinslia01",
		"teams" : "FRI,CLI,PES · TL,MIDW,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "kinslia01",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "kinslia01",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "kinslia01",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "kinslia01",
		"teams" : "FRI · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "kinslia01",
		"teams" : "FRI · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "kinslia01",
		"teams" : "FRI · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "pearcst01",
		"teams" : "WPT · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "pearcst01",
		"teams" : "LBG,HCK · CARL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "pearcst01",
		"teams" : "ATO,INA,LBG,USA · EL,IL,CARL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "pearcst01",
		"teams" : "INA,MAZ · IL,MXPW",
		"teamspitcher" : ""
	},
	{
		"player" : "pearcst01",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "pearcst01",
		"teams" : "INA,BDT · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "pearcst01",
		"teams" : "INA,BDT,BRD · IL,FLOR,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "pearcst01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "pearcst01",
		"teams" : "FDK,OLS · CARL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "pearcst01",
		"teams" : "OLS,BOW · GULF,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "pearcst01",
		"teams" : "POE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "pearcst01",
		"teams" : "MAN,BFL · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "pearcst01",
		"teams" : "BFL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "ramirha01",
		"teams" : "RES,LOW · GULF,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "ramirha01",
		"teams" : "AUG · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "ramirha01",
		"teams" : "SAR,PRT,RES · FLOR,EL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "ramirha01",
		"teams" : "PRT · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "ramirha01",
		"teams" : "LCY · DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "ramirha01",
		"teams" : "JUP · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "ramirha01",
		"teams" : "LCY · DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "ramirha01",
		"teams" : "RCU · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "ramirha01",
		"teams" : "LCY · DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "swihabl01",
		"teams" : "RES · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "swihabl01",
		"teams" : "GRV · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "swihabl01",
		"teams" : "SAL · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "swihabl01",
		"teams" : "PRT,PAW · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "swihabl01",
		"teams" : "PAW,PRT · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "swihabl01",
		"teams" : "PAW · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "swihabl01",
		"teams" : "PAW,RES,ESC · IL,GULF,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "swihabl01",
		"teams" : "LOW · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "vazquch01",
		"teams" : "RES · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "vazquch01",
		"teams" : "LOW,RES · NYPL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "vazquch01",
		"teams" : "GRV · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "vazquch01",
		"teams" : "GRV,MGZ · SALL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "vazquch01",
		"teams" : "SAL,PRT,SPS,MTI · CARL,EL,AZFL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "vazquch01",
		"teams" : "PRT,SNT,PAW · EL,PRWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "vazquch01",
		"teams" : "PAW,SAJ · IL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "vazquch01",
		"teams" : "SNT,MGZ · PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "vazquch01",
		"teams" : "PAW,SNT · IL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "vazquch01",
		"teams" : "PAW,PRT · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "holtbr01",
		"teams" : "SCS · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "holtbr01",
		"teams" : "BDT · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "holtbr01",
		"teams" : "ATO,MES · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "holtbr01",
		"teams" : "ATO,INA · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "holtbr01",
		"teams" : "PAW · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "holtbr01",
		"teams" : "PAW · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "holtbr01",
		"teams" : "PAW · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "holtbr01",
		"teams" : "PAW,PRT · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "holtbr01",
		"teams" : "PAW · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "martijd02",
		"teams" : "TRC,GRE · NYPL,APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "martijd02",
		"teams" : "LEX,CPC · SALL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "martijd02",
		"teams" : "CPC · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "martijd02",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "martijd02",
		"teams" : "CCS,CPC · VEWL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "martijd02",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "martijd02",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "martijd02",
		"teams" : "TOL,LAK · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "bettsmo01",
		"teams" : "RES · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "bettsmo01",
		"teams" : "LOW · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "bettsmo01",
		"teams" : "GRV,SAL,SPS · SALL,CARL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "bettsmo01",
		"teams" : "PRT,PAW · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "bettsmo01",
		"teams" : "PRT · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "bradlja02",
		"teams" : "LOW,GRV · NYPL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "bradlja02",
		"teams" : "SAL,PRT · CARL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "bradlja02",
		"teams" : "PAW · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "bradlja02",
		"teams" : "PAW · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "bradlja02",
		"teams" : "PAW · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "bradlja02",
		"teams" : "PAW · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "beninan01",
		"teams" : "LOW,GRV · NYPL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "beninan01",
		"teams" : "PRT,SAL · EL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "deverra01",
		"teams" : "RES,RSX · GULF,DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "deverra01",
		"teams" : "GRV,ESC · SALL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "deverra01",
		"teams" : "SAL,ESC · CARL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "deverra01",
		"teams" : "PRT,PAW · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "deverra01",
		"teams" : "PAW,LOW · IL,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "bogaexa01",
		"teams" : "RSX · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "bogaexa01",
		"teams" : "GRV · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "bogaexa01",
		"teams" : "SAL,PRT · CARL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "bogaexa01",
		"teams" : "PAW,PRT · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "bogaexa01",
		"teams" : "PAW · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "nunezed02",
		"teams" : "STI · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "nunezed02",
		"teams" : "CHS,TAM · SALL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "nunezed02",
		"teams" : "CHS,TAM · SALL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "nunezed02",
		"teams" : "TAM · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "nunezed02",
		"teams" : "TRE,AZU · EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "nunezed02",
		"teams" : "SWB,AZU · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "nunezed02",
		"teams" : "SWB,AZU,YNK,TAM · IL,DOWL,GULF,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "nunezed02",
		"teams" : "AZU,TRE,CHS,TAM · DOWL,EL,SALL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "nunezed02",
		"teams" : "ROC,NBR · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "nunezed02",
		"teams" : "AZU · DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "nunezed02",
		"teams" : "SJO,RMD · CALL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "morelmi01",
		"teams" : "SPO · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "morelmi01",
		"teams" : "CLI · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "morelmi01",
		"teams" : "FRI,BAK,SPS · TL,CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "morelmi01",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "morelmi01",
		"teams" : "FRI,RRK · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "morelmi01",
		"teams" : "FRI · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "morelmi01",
		"teams" : "RRK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "leonsa01",
		"teams" : "NAT · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "leonsa01",
		"teams" : "NAT · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "leonsa01",
		"teams" : "VMT,HGR · NYPL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "leonsa01",
		"teams" : "HGR,ZUL · SALL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "leonsa01",
		"teams" : "POT,ZUL · CARL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "leonsa01",
		"teams" : "HRB,ZUL,SYR,AUB · EL,VEWL,IL,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "leonsa01",
		"teams" : "HRB,ZUL,AUB · EL,VEWL,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "leonsa01",
		"teams" : "SYR,ZUL · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "leonsa01",
		"teams" : "ARA,PAW · VEWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "leonsa01",
		"teams" : "PAW · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "odayda01",
		"teams" : "7.4",
		"teamspitcher" : "CDR,ORM MIDW,PION"
	},
	{
		"player" : "odayda01",
		"teams" : "6.3",
		"teamspitcher" : "ARK,RCU,SPS TL,CALL,AZFL"
	},
	{
		"player" : "odayda01",
		"teams" : "7.9",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "odayda01",
		"teams" : "7.2",
		"teamspitcher" : "RRK,FRI PCL,TL"
	},
	{
		"player" : "odayda01",
		"teams" : "9.0",
		"teamspitcher" : "BOW EL"
	},
	{
		"player" : "odayda01",
		"teams" : "0.0",
		"teamspitcher" : "FDK CARL"
	},
	{
		"player" : "ortizlu02",
		"teams" : "7.1",
		"teamspitcher" : "RGS,HCK ARIZ,SALL"
	},
	{
		"player" : "ortizlu02",
		"teams" : "8.2",
		"teamspitcher" : "HCK,SPS SALL,AZFL"
	},
	{
		"player" : "ortizlu02",
		"teams" : "9.5",
		"teamspitcher" : "FRI,HDS,BIL TL,CALL,SOUL"
	},
	{
		"player" : "ortizlu02",
		"teams" : "7.5",
		"teamspitcher" : "BIL SOUL"
	},
	{
		"player" : "ortizlu02",
		"teams" : "8.8",
		"teamspitcher" : "BIL,NFK SOUL,IL"
	},
	{
		"player" : "castrmi01",
		"teams" : "7.1",
		"teamspitcher" : "BLJ DOSL"
	},
	{
		"player" : "castrmi01",
		"teams" : "6.7",
		"teamspitcher" : "BLJ,BJY,BLD DOSL,GULF,APPY"
	},
	{
		"player" : "castrmi01",
		"teams" : "5.6",
		"teamspitcher" : "VAN,LNS,DUN NORW,MIDW,FLOR"
	},
	{
		"player" : "castrmi01",
		"teams" : "7.5",
		"teamspitcher" : "BFL,ABQ,DUN IL,PCL,FLOR"
	},
	{
		"player" : "castrmi01",
		"teams" : "12.1",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "castrmi01",
		"teams" : "8.5",
		"teamspitcher" : "BOW EL"
	},
	{
		"player" : "phillev01",
		"teams" : "6.4",
		"teamspitcher" : "ROM,DAN SALL,APPY"
	},
	{
		"player" : "phillev01",
		"teams" : "7.0",
		"teamspitcher" : "MSS,CAR,SRV SOUL,CARL,AZFL"
	},
	{
		"player" : "phillev01",
		"teams" : "9.1",
		"teamspitcher" : "GWI,MSS IL,SOUL"
	},
	{
		"player" : "phillev01",
		"teams" : "6.0",
		"teamspitcher" : "GWI,NFK IL"
	},
	{
		"player" : "tillmch01",
		"teams" : "10.0",
		"teamspitcher" : "EVR,MRE NORW,ARIZ"
	},
	{
		"player" : "tillmch01",
		"teams" : "9.2",
		"teamspitcher" : "HDS,APP CALL,MIDW"
	},
	{
		"player" : "tillmch01",
		"teams" : "7.6",
		"teamspitcher" : "BOW EL"
	},
	{
		"player" : "tillmch01",
		"teams" : "7.9",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "tillmch01",
		"teams" : "8.9",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "tillmch01",
		"teams" : "9.1",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "tillmch01",
		"teams" : "8.6",
		"teamspitcher" : "NFK,BOW IL,EL"
	},
	{
		"player" : "tillmch01",
		"teams" : "11.0",
		"teamspitcher" : "BOW,FDK,NFK EL,CARL,IL"
	},
	{
		"player" : "tillmch01",
		"teams" : "11.9",
		"teamspitcher" : "NFK,RRK,FDK,DEL,ADN IL,PCL,CARL,SALL,NYPL"
	},
	{
		"player" : "brachbr01",
		"teams" : "8.5",
		"teamspitcher" : "PDS ARIZ"
	},
	{
		"player" : "brachbr01",
		"teams" : "5.1",
		"teamspitcher" : "FWA MIDW"
	},
	{
		"player" : "brachbr01",
		"teams" : "6.7",
		"teamspitcher" : "LEL,PES CALL,AZFL"
	},
	{
		"player" : "brachbr01",
		"teams" : "7.5",
		"teamspitcher" : "SAN,TUC TL,PCL"
	},
	{
		"player" : "brachbr01",
		"teams" : "10.2",
		"teamspitcher" : "TUC PCL"
	},
	{
		"player" : "brachbr01",
		"teams" : "8.7",
		"teamspitcher" : "TUC PCL"
	},
	{
		"player" : "brachbr01",
		"teams" : "10.0",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "givenmy01",
		"teams" : "7.2",
		"teamspitcher" : "DEL SALL"
	},
	{
		"player" : "givenmy01",
		"teams" : "6.7",
		"teamspitcher" : "FDK,BOW,GLN CARL,EL,AZFL"
	},
	{
		"player" : "givenmy01",
		"teams" : "6.0",
		"teamspitcher" : "BOW EL"
	},
	{
		"player" : "rogerjo01",
		"teams" : "9.5",
		"teamspitcher" : "STI,CHS NYPL,SALL"
	},
	{
		"player" : "rogerjo01",
		"teams" : "8.3",
		"teamspitcher" : "TAM,CHS FLOR,SALL"
	},
	{
		"player" : "rogerjo01",
		"teams" : "7.9",
		"teamspitcher" : "TAM,TRE FLOR,EL"
	},
	{
		"player" : "rogerjo01",
		"teams" : "9.3",
		"teamspitcher" : "SWB,NFK IL"
	},
	{
		"player" : "hartdo01",
		"teams" : "9.0",
		"teamspitcher" : "ADN NYPL"
	},
	{
		"player" : "hartdo01",
		"teams" : "7.7",
		"teamspitcher" : "DEL SALL"
	},
	{
		"player" : "hartdo01",
		"teams" : "8.5",
		"teamspitcher" : "FDK,DEL,PEA,BOW CARL,SALL,AZFL,EL"
	},
	{
		"player" : "hartdo01",
		"teams" : "8.0",
		"teamspitcher" : "BOW EL"
	},
	{
		"player" : "hartdo01",
		"teams" : "10.0",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "hartdo01",
		"teams" : "9.2",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "meansjo01",
		"teams" : "10.4",
		"teamspitcher" : "ADN,OLS NYPL,GULF"
	},
	{
		"player" : "meansjo01",
		"teams" : "10.3",
		"teamspitcher" : "DEL,FDK SALL,CARL"
	},
	{
		"player" : "meansjo01",
		"teams" : "9.6",
		"teamspitcher" : "BOW,FDK EL,CARL"
	},
	{
		"player" : "meansjo01",
		"teams" : "10.0",
		"teamspitcher" : "BOW EL"
	},
	{
		"player" : "meansjo01",
		"teams" : "9.5",
		"teamspitcher" : "NFK,BOW IL,EL"
	},
	{
		"player" : "frypa01",
		"teams" : "10.9",
		"teamspitcher" : "MRE ARIZ"
	},
	{
		"player" : "frypa01",
		"teams" : "7.1",
		"teamspitcher" : "CLI MIDW"
	},
	{
		"player" : "frypa01",
		"teams" : "8.8",
		"teamspitcher" : "BAK,WTN,PEA CALL,SOUL,AZFL"
	},
	{
		"player" : "frypa01",
		"teams" : "8.3",
		"teamspitcher" : "TAC,MGZ PCL,PRWL"
	},
	{
		"player" : "frypa01",
		"teams" : "9.0",
		"teamspitcher" : "NFK,BOW,TAC IL,EL,PCL"
	},
	{
		"player" : "frypa01",
		"teams" : "6.8",
		"teamspitcher" : "NFK,BOW IL,EL"
	},
	{
		"player" : "carroco01",
		"teams" : "5.6",
		"teamspitcher" : "PUL APPY"
	},
	{
		"player" : "carroco01",
		"teams" : "8.8",
		"teamspitcher" : "CHS SALL"
	},
	{
		"player" : "carroco01",
		"teams" : "5.5",
		"teamspitcher" : "TRE,TAM,SCO EL,FLOR,AZFL"
	},
	{
		"player" : "carroco01",
		"teams" : "6.0",
		"teamspitcher" : "SWB,NFK IL"
	},
	{
		"player" : "yacabji01",
		"teams" : "4.6",
		"teamspitcher" : "ADN NYPL"
	},
	{
		"player" : "yacabji01",
		"teams" : "7.2",
		"teamspitcher" : "FDK,DEL CARL,SALL"
	},
	{
		"player" : "yacabji01",
		"teams" : "10.6",
		"teamspitcher" : "FDK CARL"
	},
	{
		"player" : "yacabji01",
		"teams" : "7.7",
		"teamspitcher" : "BOW,FDK,PEA EL,CARL,AZFL"
	},
	{
		"player" : "yacabji01",
		"teams" : "4.4",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "yacabji01",
		"teams" : "7.2",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "cortene01",
		"teams" : "10.8",
		"teamspitcher" : "YNK GULF"
	},
	{
		"player" : "cortene01",
		"teams" : "9.9",
		"teamspitcher" : "YK2 GULF"
	},
	{
		"player" : "cortene01",
		"teams" : "6.8",
		"teamspitcher" : "PUL APPY"
	},
	{
		"player" : "cortene01",
		"teams" : "5.3",
		"teamspitcher" : "CHS,TAM,SCO,SWB,TRE SALL,FLOR,AZFL,IL,EL"
	},
	{
		"player" : "cortene01",
		"teams" : "6.5",
		"teamspitcher" : "TRE,SWB,ESS,TAM EL,IL,DOWL,FLOR"
	},
	{
		"player" : "cortene01",
		"teams" : "7.0",
		"teamspitcher" : "SWB,ESS,TRE IL,DOWL,EL"
	},
	{
		"player" : "araujpe01",
		"teams" : "8.3",
		"teamspitcher" : "CB2 DOSL"
	},
	{
		"player" : "araujpe01",
		"teams" : "8.5",
		"teamspitcher" : "CB2 DOSL"
	},
	{
		"player" : "araujpe01",
		"teams" : "5.3",
		"teamspitcher" : "CUB DOSL"
	},
	{
		"player" : "araujpe01",
		"teams" : "7.2",
		"teamspitcher" : "CUB,CBZ DOSL,ARIZ"
	},
	{
		"player" : "araujpe01",
		"teams" : "7.7",
		"teamspitcher" : "EUG NORW"
	},
	{
		"player" : "araujpe01",
		"teams" : "6.2",
		"teamspitcher" : "SBN,MYR,AGU MIDW,CARL,DOWL"
	},
	{
		"player" : "araujpe01",
		"teams" : "5.6",
		"teamspitcher" : "MYR,MES,KNX CARL,AZFL,SOUL"
	},
	{
		"player" : "araujpe01",
		"teams" : "5.6",
		"teamspitcher" : "AGU DOWL"
	},
	{
		"player" : "scottta01",
		"teams" : "8.2",
		"teamspitcher" : "OLS GULF"
	},
	{
		"player" : "scottta01",
		"teams" : "7.2",
		"teamspitcher" : "ADN,DEL,PEA NYPL,SALL,AZFL"
	},
	{
		"player" : "scottta01",
		"teams" : "6.4",
		"teamspitcher" : "FDK,BOW,PEA CARL,EL,AZFL"
	},
	{
		"player" : "scottta01",
		"teams" : "6.4",
		"teamspitcher" : "BOW,SRV EL,AZFL"
	},
	{
		"player" : "scottta01",
		"teams" : "7.5",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "gilmase01",
		"teams" : "8.3",
		"teamspitcher" : "SPS,ROM,KIS AZFL,SALL,GULF"
	},
	{
		"player" : "gilmase01",
		"teams" : "8.7",
		"teamspitcher" : "MSS,GWI SOUL,IL"
	},
	{
		"player" : "gilmase01",
		"teams" : "10.0",
		"teamspitcher" : "GWI,KIS,ROM IL,GULF,SALL"
	},
	{
		"player" : "gilmase01",
		"teams" : "9.0",
		"teamspitcher" : "ROC,NBR IL,EL"
	},
	{
		"player" : "gilmase01",
		"teams" : "10.2",
		"teamspitcher" : "LVG PCL"
	},
	{
		"player" : "gilmase01",
		"teams" : "11.4",
		"teamspitcher" : "LVG,MEM,CDS PCL,GULF"
	},
	{
		"player" : "gilmase01",
		"teams" : "9.0",
		"teamspitcher" : "MEM,NFK PCL,IL"
	},
	{
		"player" : "bleieri01",
		"teams" : "8.8",
		"teamspitcher" : "SPO NORW"
	},
	{
		"player" : "bleieri01",
		"teams" : "9.9",
		"teamspitcher" : "BAK,HCK CALL,SALL"
	},
	{
		"player" : "bleieri01",
		"teams" : "10.5",
		"teamspitcher" : "FRI TL"
	},
	{
		"player" : "bleieri01",
		"teams" : "12.6",
		"teamspitcher" : "FRI TL"
	},
	{
		"player" : "bleieri01",
		"teams" : "9.6",
		"teamspitcher" : "FRI TL"
	},
	{
		"player" : "bleieri01",
		"teams" : "9.3",
		"teamspitcher" : "FRI,RRK TL,PCL"
	},
	{
		"player" : "bleieri01",
		"teams" : "10.8",
		"teamspitcher" : "MAN,ESS,BFL EL,DOWL,IL"
	},
	{
		"player" : "bleieri01",
		"teams" : "8.9",
		"teamspitcher" : "HRB,SYR,ESS EL,IL,DOWL"
	},
	{
		"player" : "bleieri01",
		"teams" : "10.2",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "bleieri01",
		"teams" : "5.5",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "meisiry01",
		"teams" : "5.7",
		"teamspitcher" : "ADN,OLS NYPL,GULF"
	},
	{
		"player" : "meisiry01",
		"teams" : "7.0",
		"teamspitcher" : "FDK,DEL CARL,SALL"
	},
	{
		"player" : "meisiry01",
		"teams" : "7.3",
		"teamspitcher" : "BOW,SRV EL,AZFL"
	},
	{
		"player" : "meisiry01",
		"teams" : "8.4",
		"teamspitcher" : "NFK,BOW IL,EL"
	},
	{
		"player" : "marinjh01",
		"teams" : "11.0",
		"teamspitcher" : "MRL DOSL"
	},
	{
		"player" : "marinjh01",
		"teams" : "6.5",
		"teamspitcher" : "MRL,JUM DOSL,GULF"
	},
	{
		"player" : "marinjh01",
		"teams" : "10.7",
		"teamspitcher" : "JUM GULF"
	},
	{
		"player" : "marinjh01",
		"teams" : "5.9",
		"teamspitcher" : "JUP FLOR"
	},
	{
		"player" : "marinjh01",
		"teams" : "4.5",
		"teamspitcher" : "JUP,JCK FLOR,SOUL"
	},
	{
		"player" : "marinjh01",
		"teams" : "7.1",
		"teamspitcher" : "JCK,AZU SOUL,DOWL"
	},
	{
		"player" : "marinjh01",
		"teams" : "6.4",
		"teamspitcher" : "CHR,AZU IL,DOWL"
	},
	{
		"player" : "marinjh01",
		"teams" : "7.5",
		"teamspitcher" : "CHR,AZU,BRS IL,DOWL,APPY"
	},
	{
		"player" : "marinjh01",
		"teams" : "8.0",
		"teamspitcher" : "CNG,TOL,AZU SOUL,IL,DOWL"
	},
	{
		"player" : "marinjh01",
		"teams" : "7.7",
		"teamspitcher" : "DHM,AZU,MTG IL,DOWL,SOUL"
	},
	{
		"player" : "marinjh01",
		"teams" : "11.3",
		"teamspitcher" : "DHM,AZU IL,DOWL"
	},
	{
		"player" : "marinjh01",
		"teams" : "7.8",
		"teamspitcher" : "AZU DOWL"
	},
	{
		"player" : "marinjh01",
		"teams" : "8.9",
		"teamspitcher" : "NFK,AZU,OLS IL,DOWL,GULF"
	},
	{
		"player" : "brittza01",
		"teams" : "9.3",
		"teamspitcher" : "BLD APPY"
	},
	{
		"player" : "brittza01",
		"teams" : "9.0",
		"teamspitcher" : "ADN NYPL"
	},
	{
		"player" : "brittza01",
		"teams" : "7.2",
		"teamspitcher" : "DEL SALL"
	},
	{
		"player" : "brittza01",
		"teams" : "7.9",
		"teamspitcher" : "FDK CARL"
	},
	{
		"player" : "brittza01",
		"teams" : "8.2",
		"teamspitcher" : "BOW,NFK EL,IL"
	},
	{
		"player" : "brittza01",
		"teams" : "9.2",
		"teamspitcher" : "BOW,NFK EL,IL"
	},
	{
		"player" : "brittza01",
		"teams" : "8.1",
		"teamspitcher" : "NFK,BOW IL,EL"
	},
	{
		"player" : "brittza01",
		"teams" : "9.8",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "brittza01",
		"teams" : "6.2",
		"teamspitcher" : "BOW,DEL,FDK,ADN EL,SALL,CARL,NYPL"
	},
	{
		"player" : "brittza01",
		"teams" : "6.8",
		"teamspitcher" : "NFK,BOW,FDK IL,EL,CARL"
	},
	{
		"player" : "wrighmi01",
		"teams" : "9.9",
		"teamspitcher" : "ADN,DEL,OLS NYPL,SALL,GULF"
	},
	{
		"player" : "wrighmi01",
		"teams" : "10.8",
		"teamspitcher" : "BOW,FDK,MES EL,CARL,AZFL"
	},
	{
		"player" : "wrighmi01",
		"teams" : "9.5",
		"teamspitcher" : "BOW,NFK EL,IL"
	},
	{
		"player" : "wrighmi01",
		"teams" : "10.0",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "wrighmi01",
		"teams" : "6.6",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "wrighmi01",
		"teams" : "8.5",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "wrighmi01",
		"teams" : "9.2",
		"teamspitcher" : "NFK,OLS IL,GULF"
	},
	{
		"player" : "gausmke01",
		"teams" : "6.6",
		"teamspitcher" : "FDK,ADN CARL,NYPL"
	},
	{
		"player" : "gausmke01",
		"teams" : "8.8",
		"teamspitcher" : "BOW,NFK EL,IL"
	},
	{
		"player" : "gausmke01",
		"teams" : "8.3",
		"teamspitcher" : "NFK,ADN IL,NYPL"
	},
	{
		"player" : "gausmke01",
		"teams" : "6.4",
		"teamspitcher" : "NFK,FDK,BOW IL,CARL,EL"
	},
	{
		"player" : "gausmke01",
		"teams" : "9.8",
		"teamspitcher" : "NFK,FDK,BOW IL,CARL,EL"
	},
	{
		"player" : "ramirye01",
		"teams" : "9.5",
		"teamspitcher" : "DIA DOSL"
	},
	{
		"player" : "ramirye01",
		"teams" : "8.4",
		"teamspitcher" : "DIA DOSL"
	},
	{
		"player" : "ramirye01",
		"teams" : "7.7",
		"teamspitcher" : "DKS,MSO ARIZ,PION"
	},
	{
		"player" : "ramirye01",
		"teams" : "8.9",
		"teamspitcher" : "MSO PION"
	},
	{
		"player" : "ramirye01",
		"teams" : "5.9",
		"teamspitcher" : "TAM,CHS FLOR,SALL"
	},
	{
		"player" : "ramirye01",
		"teams" : "7.3",
		"teamspitcher" : "TRE,BOW,AZU EL,DOWL"
	},
	{
		"player" : "ramirye01",
		"teams" : "7.8",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "cashnan01",
		"teams" : "10.8",
		"teamspitcher" : "BOI,DYT,CBZ NORW,FLOR,ARIZ"
	},
	{
		"player" : "cashnan01",
		"teams" : "7.4",
		"teamspitcher" : "KNX,DYT,MES SOUL,FLOR,AZFL"
	},
	{
		"player" : "cashnan01",
		"teams" : "6.2",
		"teamspitcher" : "KNX,IWA SOUL,PCL"
	},
	{
		"player" : "cashnan01",
		"teams" : "11.5",
		"teamspitcher" : "MES,KNX,IWA AZFL,SOUL,PCL"
	},
	{
		"player" : "cashnan01",
		"teams" : "6.9",
		"teamspitcher" : "SAN,TUC TL,PCL"
	},
	{
		"player" : "cashnan01",
		"teams" : "7.4",
		"teamspitcher" : "ELP,LEL PCL,CALL"
	},
	{
		"player" : "cashnan01",
		"teams" : "6.0",
		"teamspitcher" : "LEL CALL"
	},
	{
		"player" : "hessda01",
		"teams" : "7.8",
		"teamspitcher" : "ADN,DEL NYPL,SALL"
	},
	{
		"player" : "hessda01",
		"teams" : "7.7",
		"teamspitcher" : "FDK,BOW CARL,EL"
	},
	{
		"player" : "hessda01",
		"teams" : "11.5",
		"teamspitcher" : "BOW EL"
	},
	{
		"player" : "hessda01",
		"teams" : "8.0",
		"teamspitcher" : "BOW EL"
	},
	{
		"player" : "hessda01",
		"teams" : "7.5",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "bundydy01",
		"teams" : "5.8",
		"teamspitcher" : "FDK,DEL,BOW CARL,SALL,EL"
	},
	{
		"player" : "bundydy01",
		"teams" : "8.3",
		"teamspitcher" : "FDK,ADN CARL,NYPL"
	},
	{
		"player" : "bundydy01",
		"teams" : "8.6",
		"teamspitcher" : "BOW,PEA EL,AZFL"
	},
	{
		"player" : "cobbal01",
		"teams" : "9.3",
		"teamspitcher" : "PRI APPY"
	},
	{
		"player" : "cobbal01",
		"teams" : "8.6",
		"teamspitcher" : "HDV NYPL"
	},
	{
		"player" : "cobbal01",
		"teams" : "7.3",
		"teamspitcher" : "CBS SALL"
	},
	{
		"player" : "cobbal01",
		"teams" : "8.4",
		"teamspitcher" : "POE FLOR"
	},
	{
		"player" : "cobbal01",
		"teams" : "9.4",
		"teamspitcher" : "MTG,PES SOUL,AZFL"
	},
	{
		"player" : "cobbal01",
		"teams" : "8.2",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "cobbal01",
		"teams" : "9.6",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "cobbal01",
		"teams" : "8.6",
		"teamspitcher" : "POE FLOR"
	},
	{
		"player" : "cobbal01",
		"teams" : "5.4",
		"teamspitcher" : "POE FLOR"
	},
	{
		"player" : "cobbal01",
		"teams" : "12.9",
		"teamspitcher" : "DHM,POE IL,FLOR"
	},
	{
		"player" : "vielmen01",
		"teams" : "TWI · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "vielmen01",
		"teams" : "TWN,ELZ · GULF,APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "vielmen01",
		"teams" : "CDR · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "vielmen01",
		"teams" : "FTM,ARA · FLOR,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "vielmen01",
		"teams" : "CNG,FTM · SOUL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "vielmen01",
		"teams" : "ROC,CNG,ARA · IL,SOUL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "vielmen01",
		"teams" : "NFK · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "josepco01",
		"teams" : "YNK · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "josepco01",
		"teams" : "CHS · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "josepco01",
		"teams" : "TAM,TRE · FLOR,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "josepco01",
		"teams" : "TRE,PHO · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "josepco01",
		"teams" : "SWB,TRE · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "josepco01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "josepco01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "josepco01",
		"teams" : "BOW,MSS · EL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "josepco01",
		"teams" : "NFK,BOW · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "josepco01",
		"teams" : "HRB,SYR · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "josepco01",
		"teams" : "BOW · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "sardilu01",
		"teams" : "RGS · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "sardilu01",
		"teams" : "RGS · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "sardilu01",
		"teams" : "HCK,SPS · SALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "sardilu01",
		"teams" : "MYR,FRI,LGU · CARL,TL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sardilu01",
		"teams" : "RRK,LGU,FRI · PCL,VEWL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "sardilu01",
		"teams" : "CSP,LGU · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sardilu01",
		"teams" : "TAC,ELP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "sardilu01",
		"teams" : "NFK,LGU · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "sardilu01",
		"teams" : "NFK,ORN · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "susacan01",
		"teams" : "SJO · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "susacan01",
		"teams" : "RMD,SCO · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "susacan01",
		"teams" : "FRE · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "susacan01",
		"teams" : "SAC,SJO · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "susacan01",
		"teams" : "SAC,CSP,SJO · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "susacan01",
		"teams" : "CSP,APP · PCL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "susacan01",
		"teams" : "NFK · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "valerbr01",
		"teams" : "SJ2 · VESL",
		"teamspitcher" : ""
	},
	{
		"player" : "valerbr01",
		"teams" : "CDS,JOH · GULF,APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "valerbr01",
		"teams" : "BAT,SPD,MGA · NYPL,TL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "valerbr01",
		"teams" : "PEO,MGA · MIDW,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "valerbr01",
		"teams" : "PLM,SPD,MGA,PEA · FLOR,TL,VEWL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "valerbr01",
		"teams" : "SPD,MGA,PLM · TL,VEWL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "valerbr01",
		"teams" : "MGA,MEM,SPD · VEWL,PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "valerbr01",
		"teams" : "MEM,MGA · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "valerbr01",
		"teams" : "OKC,NFK · PCL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "stewadj01",
		"teams" : "ADN · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "stewadj01",
		"teams" : "DEL,FDK,PEA · SALL,CARL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "stewadj01",
		"teams" : "BOW · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "stewadj01",
		"teams" : "NFK · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "wilkest01",
		"teams" : "ADN · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "wilkest01",
		"teams" : "DEL · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "wilkest01",
		"teams" : "FDK,BOW · CARL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "wilkest01",
		"teams" : "BOW,FDK,SRV · EL,CARL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "wilkest01",
		"teams" : "NFK,BOW,OLS · IL,EL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "rasmuco01",
		"teams" : "JOH · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "rasmuco01",
		"teams" : "DAV,PLM · MIDW,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "rasmuco01",
		"teams" : "SPD,USA · TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "rasmuco01",
		"teams" : "MEM,PLM,CDS · PCL,FLOR,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "rasmuco01",
		"teams" : "BFL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "rasmuco01",
		"teams" : "MTG,POE · SOUL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "rasmuco01",
		"teams" : "FDK,BOW · CARL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "andrejo03",
		"teams" : "PEO,CBZ · MIDW,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "andrejo03",
		"teams" : "DYT · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "andrejo03",
		"teams" : "DYT,KNX · FLOR,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "andrejo03",
		"teams" : "KNX,SAJ · SOUL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "andrejo03",
		"teams" : "IWA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "andrejo03",
		"teams" : "IWA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "andrejo03",
		"teams" : "IWA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "andrejo03",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "santaan02",
		"teams" : "INS · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "santaan02",
		"teams" : "LCO · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "santaan02",
		"teams" : "LCO · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "santaan02",
		"teams" : "LCO,MHV,MGL · MIDW,NYPL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "santaan02",
		"teams" : "LBG · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "santaan02",
		"teams" : "SRV,BOW,FDK · AZFL,EL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "santaan02",
		"teams" : "BOW,ARA,NFK,ADN · EL,VEWL,IL,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "wynnsau01",
		"teams" : "ADN · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "wynnsau01",
		"teams" : "DEL,FDK · SALL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "wynnsau01",
		"teams" : "FDK,BOW · CARL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "wynnsau01",
		"teams" : "FDK,BOW,AZU,PEA,NFK · CARL,EL,DOWL,AZFL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "wynnsau01",
		"teams" : "BOW,AZU · EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "wynnsau01",
		"teams" : "NFK · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "alvarpe01",
		"teams" : "LBG,ATO · CARL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "alvarpe01",
		"teams" : "INA · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "alvarpe01",
		"teams" : "INA,BDT,BRD · IL,FLOR,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "alvarpe01",
		"teams" : "NFK · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "alvarpe01",
		"teams" : "NFK · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "gentrcr01",
		"teams" : "SPO · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "gentrcr01",
		"teams" : "CLI,BAK,WOA,RGS · MIDW,CALL,HIWB,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "gentrcr01",
		"teams" : "FRI,OKC · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "gentrcr01",
		"teams" : "FRI · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "gentrcr01",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "gentrcr01",
		"teams" : "RRK,ESC · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "gentrcr01",
		"teams" : "FRI · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "gentrcr01",
		"teams" : "SAC,STK · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "gentrcr01",
		"teams" : "NVL · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "gentrcr01",
		"teams" : "SLK,SBR,ANG · PCL,CALL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "gentrcr01",
		"teams" : "NFK · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "gentrcr01",
		"teams" : "FDK,BOW · CARL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "siscoch01",
		"teams" : "OLS,ADN · GULF,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "siscoch01",
		"teams" : "DEL · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "siscoch01",
		"teams" : "FDK,BOW,PEA · CARL,EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "siscoch01",
		"teams" : "BOW,NFK · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "siscoch01",
		"teams" : "NFK · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "siscoch01",
		"teams" : "NFK · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "mullice01",
		"teams" : "ADN · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "mullice01",
		"teams" : "DEL · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "mullice01",
		"teams" : "BOW · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "mullice01",
		"teams" : "NFK,BOW · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "peterja01",
		"teams" : "EUG · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "peterja01",
		"teams" : "FWA · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "peterja01",
		"teams" : "LEL · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "peterja01",
		"teams" : "ELP,SPS,SAN · PCL,AZFL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "peterja01",
		"teams" : "GWI · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "peterja01",
		"teams" : "GWI · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "peterja01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "villajo01",
		"teams" : "PHL · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "villajo01",
		"teams" : "CLR,WPT · GULF,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "villajo01",
		"teams" : "LWD,LNR,AGU · SALL,CALL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "villajo01",
		"teams" : "CPC,LNR,AGU · TL,CALL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "villajo01",
		"teams" : "CPC,AGU · TL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "villajo01",
		"teams" : "OKC,AGU · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "villajo01",
		"teams" : "OKC,AGU · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "villajo01",
		"teams" : "FRE,AGU · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "villajo01",
		"teams" : "AGU · DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "villajo01",
		"teams" : "APP,AGU · MIDW,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "villajo01",
		"teams" : "CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "valenda01",
		"teams" : "ELZ · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "valenda01",
		"teams" : "BEL,FTM · MIDW,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "valenda01",
		"teams" : "NBR,FTM,PHO · EL,FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "valenda01",
		"teams" : "ROC,NBR,MGZ · IL,EL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "valenda01",
		"teams" : "ROC · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "valenda01",
		"teams" : "ROC,PAW · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "valenda01",
		"teams" : "NFK · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "valenda01",
		"teams" : "OMA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "valenda01",
		"teams" : "STK · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "beckhti01",
		"teams" : "PRI,HDV · APPY,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "beckhti01",
		"teams" : "BWG · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "beckhti01",
		"teams" : "POE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "beckhti01",
		"teams" : "MTG,DHM,SPS · SOUL,IL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "beckhti01",
		"teams" : "DHM,PHO · IL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "beckhti01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "beckhti01",
		"teams" : "DHM,DVS,POE · IL,GULF,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "beckhti01",
		"teams" : "DHM,POE · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "beckhti01",
		"teams" : "DHM · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "beckhti01",
		"teams" : "NFK,BOW · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "trumbma01",
		"teams" : "ORM · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "trumbma01",
		"teams" : "CDR · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "trumbma01",
		"teams" : "CDR · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "trumbma01",
		"teams" : "RCU,SCO,ARK · CALL,AZFL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "trumbma01",
		"teams" : "ARK,GIG · TL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "trumbma01",
		"teams" : "SLK,MGL · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "trumbma01",
		"teams" : "DKS,REN · ARIZ,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "trumbma01",
		"teams" : "NFK,BOW · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "rickajo01",
		"teams" : "HDV · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "rickajo01",
		"teams" : "BWG,BSB · MIDW,AUBL",
		"teamspitcher" : ""
	},
	{
		"player" : "rickajo01",
		"teams" : "MTG · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "rickajo01",
		"teams" : "MTG,ESC,DHM,POE · SOUL,DOWL,IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "rickajo01",
		"teams" : "NFK,DEL · IL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "rickajo01",
		"teams" : "NFK · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "jonesad01",
		"teams" : "MRE,EVR · ARIZ,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "jonesad01",
		"teams" : "APP · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "jonesad01",
		"teams" : "SBR,SAN,PEA · CALL,TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "jonesad01",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "jonesad01",
		"teams" : "TAC,LRA · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "mancitr01",
		"teams" : "ADN · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "mancitr01",
		"teams" : "FDK,DEL · CARL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "mancitr01",
		"teams" : "BOW,FDK · EL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "mancitr01",
		"teams" : "NFK,BOW · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "nunezre01",
		"teams" : "AT1 · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "nunezre01",
		"teams" : "ATH · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "nunezre01",
		"teams" : "BEL · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "nunezre01",
		"teams" : "STK,ARA · CALL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "nunezre01",
		"teams" : "MDL,MES · TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "nunezre01",
		"teams" : "NVL,ARA · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "nunezre01",
		"teams" : "NVL,ARA · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "nunezre01",
		"teams" : "NFK,NVL · IL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "machama01",
		"teams" : "ADN,OLS · NYPL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "machama01",
		"teams" : "FDK,DEL · CARL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "machama01",
		"teams" : "BOW · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "machama01",
		"teams" : "FDK · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "schoojo01",
		"teams" : "ORI · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "schoojo01",
		"teams" : "BLD,OLS,FDK · APPY,GULF,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "schoojo01",
		"teams" : "FDK,DEL · CARL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "schoojo01",
		"teams" : "BOW,MES · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "schoojo01",
		"teams" : "NFK,SPS,OLS,ADN · IL,AZFL,GULF,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "schoojo01",
		"teams" : "BOW,FDK · EL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "schoojo01",
		"teams" : "NFK,FDK,BOW · IL,CARL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "davisch02",
		"teams" : "SPO · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "davisch02",
		"teams" : "BAK,FRI,SPS · CALL,TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "davisch02",
		"teams" : "FRI,OKC · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "davisch02",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "davisch02",
		"teams" : "OKC,ESS · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "davisch02",
		"teams" : "RRK,BOW · PCL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "davisch02",
		"teams" : "BOW · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "davisch02",
		"teams" : "DEL,FDK · SALL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "josepca01",
		"teams" : "ADN · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "josepca01",
		"teams" : "FDK · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "josepca01",
		"teams" : "BOW,SCO,PHO · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "josepca01",
		"teams" : "BOW · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "josepca01",
		"teams" : "BOW,NFK · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "josepca01",
		"teams" : "BOW,MGA · EL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "josepca01",
		"teams" : "NFK · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "josepca01",
		"teams" : "NFK,BOW,FDK · IL,EL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "josepca01",
		"teams" : "NFK · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "ravinjo01",
		"teams" : "7.7",
		"teamspitcher" : "RDL,BIL GULF,PION"
	},
	{
		"player" : "ravinjo01",
		"teams" : "9.9",
		"teamspitcher" : "BIL PION"
	},
	{
		"player" : "ravinjo01",
		"teams" : "9.0",
		"teamspitcher" : "DAY,BIL MIDW,PION"
	},
	{
		"player" : "ravinjo01",
		"teams" : "7.2",
		"teamspitcher" : "DAY MIDW"
	},
	{
		"player" : "ravinjo01",
		"teams" : "9.2",
		"teamspitcher" : "DAY,LBG,RDL MIDW,CARL,ARIZ"
	},
	{
		"player" : "ravinjo01",
		"teams" : "7.9",
		"teamspitcher" : "BAK,CAR CALL,SOUL"
	},
	{
		"player" : "ravinjo01",
		"teams" : "8.9",
		"teamspitcher" : "PEN,PEA,BAK SOUL,AZFL,CALL"
	},
	{
		"player" : "ravinjo01",
		"teams" : "9.9",
		"teamspitcher" : "PEN,LOU SOUL,IL"
	},
	{
		"player" : "ravinjo01",
		"teams" : "7.8",
		"teamspitcher" : "CNG,ABQ,MAZ SOUL,PCL,MXPW"
	},
	{
		"player" : "ravinjo01",
		"teams" : "7.4",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "ravinjo01",
		"teams" : "3.6",
		"teamspitcher" : "DGR,OKC,RCU ARIZ,PCL,CALL"
	},
	{
		"player" : "ravinjo01",
		"teams" : "7.5",
		"teamspitcher" : "OKC,RCU PCL,CALL"
	},
	{
		"player" : "ravinjo01",
		"teams" : "5.3",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "whitlch01",
		"teams" : "4.6",
		"teamspitcher" : "STI,TAM NYPL,FLOR"
	},
	{
		"player" : "whitlch01",
		"teams" : "8.3",
		"teamspitcher" : "TAM,TRE,PHO FLOR,EL,AZFL"
	},
	{
		"player" : "whitlch01",
		"teams" : "6.6",
		"teamspitcher" : "SWB,TRE IL,EL"
	},
	{
		"player" : "whitlch01",
		"teams" : "8.1",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "whitlch01",
		"teams" : "6.3",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "whitlch01",
		"teams" : "6.9",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "whitlch01",
		"teams" : "5.6",
		"teamspitcher" : "MTG,POE SOUL,FLOR"
	},
	{
		"player" : "whitlch01",
		"teams" : "13.0",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "whitlch01",
		"teams" : "9.1",
		"teamspitcher" : "GWI,FLF,KIS IL,FLOR,GULF"
	},
	{
		"player" : "moylape01",
		"teams" : "10.7",
		"teamspitcher" : "TWN GULF"
	},
	{
		"player" : "moylape01",
		"teams" : "10.4",
		"teamspitcher" : "TWN GULF"
	},
	{
		"player" : "moylape01",
		"teams" : "9.7",
		"teamspitcher" : "RMD IL"
	},
	{
		"player" : "moylape01",
		"teams" : "0.0",
		"teamspitcher" : "RMD IL"
	},
	{
		"player" : "moylape01",
		"teams" : "7.5",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "moylape01",
		"teams" : "10.7",
		"teamspitcher" : "GWI,KIS,ROM,MSS IL,GULF,SALL,SOUL"
	},
	{
		"player" : "moylape01",
		"teams" : "7.4",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "moylape01",
		"teams" : "6.7",
		"teamspitcher" : "GWI,MEL IL,AUBL"
	},
	{
		"player" : "moylape01",
		"teams" : "6.4",
		"teamspitcher" : "OMA,MEL PCL,AUBL"
	},
	{
		"player" : "moylape01",
		"teams" : "9.0",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "phillev01",
		"teams" : "6.4",
		"teamspitcher" : "ROM,DAN SALL,APPY"
	},
	{
		"player" : "phillev01",
		"teams" : "7.0",
		"teamspitcher" : "MSS,CAR,SRV SOUL,CARL,AZFL"
	},
	{
		"player" : "phillev01",
		"teams" : "9.1",
		"teamspitcher" : "GWI,MSS IL,SOUL"
	},
	{
		"player" : "phillev01",
		"teams" : "6.0",
		"teamspitcher" : "GWI,NFK IL"
	},
	{
		"player" : "vizcaar01",
		"teams" : "7.8",
		"teamspitcher" : "YNK GULF"
	},
	{
		"player" : "vizcaar01",
		"teams" : "7.2",
		"teamspitcher" : "STI NYPL"
	},
	{
		"player" : "vizcaar01",
		"teams" : "8.3",
		"teamspitcher" : "ROM,MYR SALL,CARL"
	},
	{
		"player" : "vizcaar01",
		"teams" : "7.5",
		"teamspitcher" : "MSS,LBG,GWI,LCY SOUL,CARL,IL,DOWL"
	},
	{
		"player" : "vizcaar01",
		"teams" : "8.3",
		"teamspitcher" : "IWA,KNX,DYT PCL,SOUL,FLOR"
	},
	{
		"player" : "vizcaar01",
		"teams" : "10.0",
		"teamspitcher" : "MSS,ROM,GWI SOUL,SALL,IL"
	},
	{
		"player" : "vizcaar01",
		"teams" : "9.0",
		"teamspitcher" : "KIS,ROM GULF,SALL"
	},
	{
		"player" : "vizcaar01",
		"teams" : "0.0",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "vizcaar01",
		"teams" : "0.0",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "wrighky01",
		"teams" : "5.8",
		"teamspitcher" : "FLF,KIS FLOR,GULF"
	},
	{
		"player" : "wrighky01",
		"teams" : "7.7",
		"teamspitcher" : "MSS,GWI SOUL,IL"
	},
	{
		"player" : "minteaj01",
		"teams" : "4.7",
		"teamspitcher" : "MSS,CAR,ROM SOUL,CARL,SALL"
	},
	{
		"player" : "minteaj01",
		"teams" : "7.4",
		"teamspitcher" : "GWI,FLF,MSS,ROM IL,FLOR,SOUL,SALL"
	},
	{
		"player" : "brachbr01",
		"teams" : "8.5",
		"teamspitcher" : "PDS ARIZ"
	},
	{
		"player" : "brachbr01",
		"teams" : "5.1",
		"teamspitcher" : "FWA MIDW"
	},
	{
		"player" : "brachbr01",
		"teams" : "6.7",
		"teamspitcher" : "LEL,PES CALL,AZFL"
	},
	{
		"player" : "brachbr01",
		"teams" : "7.5",
		"teamspitcher" : "SAN,TUC TL,PCL"
	},
	{
		"player" : "brachbr01",
		"teams" : "10.2",
		"teamspitcher" : "TUC PCL"
	},
	{
		"player" : "brachbr01",
		"teams" : "8.7",
		"teamspitcher" : "TUC PCL"
	},
	{
		"player" : "brachbr01",
		"teams" : "10.0",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "ramirjo02",
		"teams" : "8.1",
		"teamspitcher" : "YK2 DOSL"
	},
	{
		"player" : "ramirjo02",
		"teams" : "4.8",
		"teamspitcher" : "YNK,TAM GULF,FLOR"
	},
	{
		"player" : "ramirjo02",
		"teams" : "8.3",
		"teamspitcher" : "CHS SALL"
	},
	{
		"player" : "ramirjo02",
		"teams" : "10.4",
		"teamspitcher" : "CHS,TAM SALL,FLOR"
	},
	{
		"player" : "ramirjo02",
		"teams" : "8.1",
		"teamspitcher" : "TAM,GIG FLOR,DOWL"
	},
	{
		"player" : "ramirjo02",
		"teams" : "7.0",
		"teamspitcher" : "TRE,SWB EL,IL"
	},
	{
		"player" : "ramirjo02",
		"teams" : "9.5",
		"teamspitcher" : "SWB IL"
	},
	{
		"player" : "ramirjo02",
		"teams" : "8.6",
		"teamspitcher" : "SWB,TAC,GIG IL,PCL,DOWL"
	},
	{
		"player" : "ramirjo02",
		"teams" : "7.4",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "ramirjo02",
		"teams" : "0.0",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "brothre01",
		"teams" : "6.8",
		"teamspitcher" : "TRI,AVL NORW,SALL"
	},
	{
		"player" : "brothre01",
		"teams" : "6.1",
		"teamspitcher" : "MOD,TUL,SCO CALL,TL,AZFL"
	},
	{
		"player" : "brothre01",
		"teams" : "9.3",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "brothre01",
		"teams" : "5.1",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "brothre01",
		"teams" : "5.7",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "brothre01",
		"teams" : "5.9",
		"teamspitcher" : "MSS,GWI SOUL,IL"
	},
	{
		"player" : "brothre01",
		"teams" : "7.3",
		"teamspitcher" : "GWI,MSS IL,SOUL"
	},
	{
		"player" : "mccread01",
		"teams" : "5.5",
		"teamspitcher" : "ANG ARIZ"
	},
	{
		"player" : "mccread01",
		"teams" : "4.8",
		"teamspitcher" : "ANG ARIZ"
	},
	{
		"player" : "mccread01",
		"teams" : "8.7",
		"teamspitcher" : "DAN,ROM APPY,SALL"
	},
	{
		"player" : "mccread01",
		"teams" : "6.8",
		"teamspitcher" : "ROM,FLF SALL,FLOR"
	},
	{
		"player" : "mccread01",
		"teams" : "8.2",
		"teamspitcher" : "MSS,GWI,PEA SOUL,IL,AZFL"
	},
	{
		"player" : "socolmi01",
		"teams" : "7.1",
		"teamspitcher" : "RES GULF"
	},
	{
		"player" : "socolmi01",
		"teams" : "8.5",
		"teamspitcher" : "LOW,GRV NYPL,SALL"
	},
	{
		"player" : "socolmi01",
		"teams" : "8.6",
		"teamspitcher" : "KAN SALL"
	},
	{
		"player" : "socolmi01",
		"teams" : "9.4",
		"teamspitcher" : "WSM,CCS,BIR CARL,VEWL,SOUL"
	},
	{
		"player" : "socolmi01",
		"teams" : "6.4",
		"teamspitcher" : "BIR,CHR,CCS SOUL,IL,VEWL"
	},
	{
		"player" : "socolmi01",
		"teams" : "7.6",
		"teamspitcher" : "CHR,CCS,BIR IL,VEWL,SOUL"
	},
	{
		"player" : "socolmi01",
		"teams" : "5.9",
		"teamspitcher" : "NFK,IWA IL,PCL"
	},
	{
		"player" : "socolmi01",
		"teams" : "6.2",
		"teamspitcher" : "CCS,HIR VEWL,JPCL"
	},
	{
		"player" : "socolmi01",
		"teams" : "9.1",
		"teamspitcher" : "LVG,CCS PCL,VEWL"
	},
	{
		"player" : "socolmi01",
		"teams" : "5.0",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "socolmi01",
		"teams" : "7.3",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "socolmi01",
		"teams" : "7.6",
		"teamspitcher" : "MEM,CCS PCL,VEWL"
	},
	{
		"player" : "socolmi01",
		"teams" : "9.4",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "ventejo01",
		"teams" : "11.3",
		"teamspitcher" : "KIS GULF"
	},
	{
		"player" : "ventejo01",
		"teams" : "8.7",
		"teamspitcher" : "ROM SALL"
	},
	{
		"player" : "ventejo01",
		"teams" : "6.8",
		"teamspitcher" : "MYR CARL"
	},
	{
		"player" : "ventejo01",
		"teams" : "10.2",
		"teamspitcher" : "HON,MYR,MSS,KIS HIWB,CARL,SOUL,GULF"
	},
	{
		"player" : "ventejo01",
		"teams" : "9.4",
		"teamspitcher" : "GWI,MSS IL,SOUL"
	},
	{
		"player" : "ventejo01",
		"teams" : "5.4",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "ventejo01",
		"teams" : "0.0",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "ventejo01",
		"teams" : "15.8",
		"teamspitcher" : "POE FLOR"
	},
	{
		"player" : "ventejo01",
		"teams" : "5.7",
		"teamspitcher" : "POE,MTG,DVS,DHM FLOR,SOUL,GULF,IL"
	},
	{
		"player" : "ventejo01",
		"teams" : "7.0",
		"teamspitcher" : "DHM,POE IL,FLOR"
	},
	{
		"player" : "sobotch01",
		"teams" : "11.2",
		"teamspitcher" : "ROM,KIS,DAN SALL,GULF,APPY"
	},
	{
		"player" : "sobotch01",
		"teams" : "8.1",
		"teamspitcher" : "ROM,CAR,MSS SALL,CARL,SOUL"
	},
	{
		"player" : "sobotch01",
		"teams" : "9.5",
		"teamspitcher" : "MSS,FLF SOUL,FLOR"
	},
	{
		"player" : "sobotch01",
		"teams" : "4.7",
		"teamspitcher" : "MSS,FLF,GWI SOUL,FLOR,IL"
	},
	{
		"player" : "simslu01",
		"teams" : "7.4",
		"teamspitcher" : "DAN,KIS APPY,GULF"
	},
	{
		"player" : "simslu01",
		"teams" : "6.4",
		"teamspitcher" : "ROM SALL"
	},
	{
		"player" : "simslu01",
		"teams" : "8.4",
		"teamspitcher" : "LBG CARL"
	},
	{
		"player" : "simslu01",
		"teams" : "7.2",
		"teamspitcher" : "MSS,CAR,PEA,KIS SOUL,CARL,AZFL,GULF"
	},
	{
		"player" : "simslu01",
		"teams" : "7.7",
		"teamspitcher" : "MSS,GWI SOUL,IL"
	},
	{
		"player" : "simslu01",
		"teams" : "7.4",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "simslu01",
		"teams" : "7.6",
		"teamspitcher" : "GWI,LOU IL"
	},
	{
		"player" : "winklda01",
		"teams" : "10.0",
		"teamspitcher" : "CAS PION"
	},
	{
		"player" : "winklda01",
		"teams" : "9.4",
		"teamspitcher" : "AVL SALL"
	},
	{
		"player" : "winklda01",
		"teams" : "6.1",
		"teamspitcher" : "MOD,TUL CALL,TL"
	},
	{
		"player" : "winklda01",
		"teams" : "4.2",
		"teamspitcher" : "TUL TL"
	},
	{
		"player" : "winklda01",
		"teams" : "5.0",
		"teamspitcher" : "PEA AZFL"
	},
	{
		"player" : "winklda01",
		"teams" : "10.3",
		"teamspitcher" : "GWI,FLF,ROM IL,FLOR,SALL"
	},
	{
		"player" : "freemsa01",
		"teams" : "7.9",
		"teamspitcher" : "JOH,PLM APPY,FLOR"
	},
	{
		"player" : "freemsa01",
		"teams" : "5.9",
		"teamspitcher" : "PLM,SPD FLOR,TL"
	},
	{
		"player" : "freemsa01",
		"teams" : "7.8",
		"teamspitcher" : "SPD,MGA,PLM TL,VEWL,FLOR"
	},
	{
		"player" : "freemsa01",
		"teams" : "7.9",
		"teamspitcher" : "MEM,SPD,SPS PCL,TL,AZFL"
	},
	{
		"player" : "freemsa01",
		"teams" : "7.4",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "freemsa01",
		"teams" : "11.1",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "freemsa01",
		"teams" : "5.6",
		"teamspitcher" : "RRK PCL"
	},
	{
		"player" : "freemsa01",
		"teams" : "10.2",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "freemsa01",
		"teams" : "4.4",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "freemsa01",
		"teams" : "6.8",
		"teamspitcher" : "GWI,ROM IL,SALL"
	},
	{
		"player" : "parsowe01",
		"teams" : "7.5",
		"teamspitcher" : "ROM SALL"
	},
	{
		"player" : "parsowe01",
		"teams" : "9.5",
		"teamspitcher" : "LBG CARL"
	},
	{
		"player" : "parsowe01",
		"teams" : "7.8",
		"teamspitcher" : "KIS,ROM,CAR GULF,SALL,CARL"
	},
	{
		"player" : "parsowe01",
		"teams" : "8.8",
		"teamspitcher" : "CAR,KIS,MSS CARL,GULF,SOUL"
	},
	{
		"player" : "parsowe01",
		"teams" : "8.2",
		"teamspitcher" : "MSS,GWI SOUL,IL"
	},
	{
		"player" : "parsowe01",
		"teams" : "7.6",
		"teamspitcher" : "GWI,MSS,ESS IL,SOUL,DOWL"
	},
	{
		"player" : "biddlje01",
		"teams" : "8.2",
		"teamspitcher" : "CLR,WPT GULF,NYPL"
	},
	{
		"player" : "biddlje01",
		"teams" : "7.0",
		"teamspitcher" : "LWD SALL"
	},
	{
		"player" : "biddlje01",
		"teams" : "8.1",
		"teamspitcher" : "CLW FLOR"
	},
	{
		"player" : "biddlje01",
		"teams" : "6.8",
		"teamspitcher" : "REA EL"
	},
	{
		"player" : "biddlje01",
		"teams" : "8.3",
		"teamspitcher" : "REA,CLW,MGZ,CLR EL,FLOR,PRWL,GULF"
	},
	{
		"player" : "biddlje01",
		"teams" : "10.6",
		"teamspitcher" : "REA,LHV EL,IL"
	},
	{
		"player" : "biddlje01",
		"teams" : "8.7",
		"teamspitcher" : "MSS SOUL"
	},
	{
		"player" : "biddlje01",
		"teams" : "4.3",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "goharlu01",
		"teams" : "9.1",
		"teamspitcher" : "PUL APPY"
	},
	{
		"player" : "goharlu01",
		"teams" : "10.3",
		"teamspitcher" : "EVR,MRE NORW,ARIZ"
	},
	{
		"player" : "goharlu01",
		"teams" : "10.9",
		"teamspitcher" : "EVR,CLI NORW,MIDW"
	},
	{
		"player" : "goharlu01",
		"teams" : "7.9",
		"teamspitcher" : "CLI,EVR,PEA MIDW,NORW,AZFL"
	},
	{
		"player" : "goharlu01",
		"teams" : "7.7",
		"teamspitcher" : "MSS,FLF,GWI SOUL,FLOR,IL"
	},
	{
		"player" : "goharlu01",
		"teams" : "9.2",
		"teamspitcher" : "GWI,MSS IL,SOUL"
	},
	{
		"player" : "wilsobr02",
		"teams" : "5.4",
		"teamspitcher" : "KIS GULF"
	},
	{
		"player" : "wilsobr02",
		"teams" : "6.9",
		"teamspitcher" : "ROM SALL"
	},
	{
		"player" : "wilsobr02",
		"teams" : "8.1",
		"teamspitcher" : "MSS,FLF,GWI SOUL,FLOR,IL"
	},
	{
		"player" : "jackslu01",
		"teams" : "10.0",
		"teamspitcher" : "HCK SALL"
	},
	{
		"player" : "jackslu01",
		"teams" : "9.0",
		"teamspitcher" : "MYR,HCK CARL,SALL"
	},
	{
		"player" : "jackslu01",
		"teams" : "6.5",
		"teamspitcher" : "MYR,FRI CARL,TL"
	},
	{
		"player" : "jackslu01",
		"teams" : "8.3",
		"teamspitcher" : "FRI,RRK TL,PCL"
	},
	{
		"player" : "jackslu01",
		"teams" : "7.9",
		"teamspitcher" : "RRK,ESC PCL,DOWL"
	},
	{
		"player" : "jackslu01",
		"teams" : "7.8",
		"teamspitcher" : "FRI,RRK TL,PCL"
	},
	{
		"player" : "jackslu01",
		"teams" : "9.6",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "jackslu01",
		"teams" : "4.6",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "allarko01",
		"teams" : "1.5",
		"teamspitcher" : "KIS GULF"
	},
	{
		"player" : "allarko01",
		"teams" : "7.4",
		"teamspitcher" : "ROM,DAN SALL,APPY"
	},
	{
		"player" : "allarko01",
		"teams" : "8.8",
		"teamspitcher" : "MSS SOUL"
	},
	{
		"player" : "allarko01",
		"teams" : "8.2",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "carlesh01",
		"teams" : "8.4",
		"teamspitcher" : "JAM NYPL"
	},
	{
		"player" : "carlesh01",
		"teams" : "9.9",
		"teamspitcher" : "CHL,BDT SALL,FLOR"
	},
	{
		"player" : "carlesh01",
		"teams" : "9.5",
		"teamspitcher" : "NBR,ABQ EL,PCL"
	},
	{
		"player" : "carlesh01",
		"teams" : "11.4",
		"teamspitcher" : "ABQ,SRV PCL,AZFL"
	},
	{
		"player" : "carlesh01",
		"teams" : "10.7",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "carlesh01",
		"teams" : "9.0",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "friedma01",
		"teams" : "7.1",
		"teamspitcher" : "PDS ARIZ"
	},
	{
		"player" : "friedma01",
		"teams" : "8.1",
		"teamspitcher" : "FWA MIDW"
	},
	{
		"player" : "friedma01",
		"teams" : "12.7",
		"teamspitcher" : "FWA,PDS MIDW,ARIZ"
	},
	{
		"player" : "friedma01",
		"teams" : "7.6",
		"teamspitcher" : "ROM SALL"
	},
	{
		"player" : "friedma01",
		"teams" : "7.9",
		"teamspitcher" : "MSS,PEA,GWI SOUL,AZFL,IL"
	},
	{
		"player" : "friedma01",
		"teams" : "8.1",
		"teamspitcher" : "GWI,MSS IL,SOUL"
	},
	{
		"player" : "sorokmi01",
		"teams" : "8.7",
		"teamspitcher" : "DAN,KIS APPY,GULF"
	},
	{
		"player" : "sorokmi01",
		"teams" : "8.2",
		"teamspitcher" : "ROM SALL"
	},
	{
		"player" : "sorokmi01",
		"teams" : "7.8",
		"teamspitcher" : "MSS SOUL"
	},
	{
		"player" : "sorokmi01",
		"teams" : "5.9",
		"teamspitcher" : "GWI,ROM IL,SALL"
	},
	{
		"player" : "wislema01",
		"teams" : "",
		"teamspitcher" : "PDS ARIZ"
	},
	{
		"player" : "wislema01",
		"teams" : "7.5",
		"teamspitcher" : "FWA MIDW"
	},
	{
		"player" : "wislema01",
		"teams" : "7.1",
		"teamspitcher" : "SAN,LEL TL,CALL"
	},
	{
		"player" : "wislema01",
		"teams" : "9.6",
		"teamspitcher" : "ELP,SAN PCL,TL"
	},
	{
		"player" : "wislema01",
		"teams" : "9.4",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "wislema01",
		"teams" : "8.1",
		"teamspitcher" : "GWI,LCY IL,DOWL"
	},
	{
		"player" : "wislema01",
		"teams" : "9.7",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "wislema01",
		"teams" : "9.8",
		"teamspitcher" : "GWI,LOU IL"
	},
	{
		"player" : "toussto01",
		"teams" : "11.9",
		"teamspitcher" : "DKS,MSO ARIZ,PION"
	},
	{
		"player" : "toussto01",
		"teams" : "7.3",
		"teamspitcher" : "ROM,KNC SALL,MIDW"
	},
	{
		"player" : "toussto01",
		"teams" : "7.1",
		"teamspitcher" : "ROM SALL"
	},
	{
		"player" : "toussto01",
		"teams" : "8.1",
		"teamspitcher" : "FLF,MSS,PEA FLOR,SOUL,AZFL"
	},
	{
		"player" : "toussto01",
		"teams" : "6.7",
		"teamspitcher" : "MSS,GWI SOUL,IL"
	},
	{
		"player" : "gausmke01",
		"teams" : "6.6",
		"teamspitcher" : "FDK,ADN CARL,NYPL"
	},
	{
		"player" : "gausmke01",
		"teams" : "8.8",
		"teamspitcher" : "BOW,NFK EL,IL"
	},
	{
		"player" : "gausmke01",
		"teams" : "8.3",
		"teamspitcher" : "NFK,ADN IL,NYPL"
	},
	{
		"player" : "gausmke01",
		"teams" : "6.4",
		"teamspitcher" : "NFK,FDK,BOW IL,CARL,EL"
	},
	{
		"player" : "gausmke01",
		"teams" : "9.8",
		"teamspitcher" : "NFK,FDK,BOW IL,CARL,EL"
	},
	{
		"player" : "mccarbr01",
		"teams" : "9.0",
		"teamspitcher" : "WHS ARIZ"
	},
	{
		"player" : "mccarbr01",
		"teams" : "9.4",
		"teamspitcher" : "GRF PION"
	},
	{
		"player" : "mccarbr01",
		"teams" : "7.0",
		"teamspitcher" : "KAN,WSM,BIR SALL,CARL,SOUL"
	},
	{
		"player" : "mccarbr01",
		"teams" : "7.8",
		"teamspitcher" : "CHR IL"
	},
	{
		"player" : "mccarbr01",
		"teams" : "6.2",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "mccarbr01",
		"teams" : "8.0",
		"teamspitcher" : "OKC,RGS PCL,ARIZ"
	},
	{
		"player" : "mccarbr01",
		"teams" : "8.3",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "mccarbr01",
		"teams" : "8.1",
		"teamspitcher" : "OKC,AZU PCL,DOWL"
	},
	{
		"player" : "mccarbr01",
		"teams" : "6.3",
		"teamspitcher" : "STK CALL"
	},
	{
		"player" : "mccarbr01",
		"teams" : "8.4",
		"teamspitcher" : "SAC PCL"
	},
	{
		"player" : "mccarbr01",
		"teams" : "13.1",
		"teamspitcher" : "REN PCL"
	},
	{
		"player" : "mccarbr01",
		"teams" : "12.2",
		"teamspitcher" : "RCU,OKC CALL,PCL"
	},
	{
		"player" : "mccarbr01",
		"teams" : "10.8",
		"teamspitcher" : "RCU CALL"
	},
	{
		"player" : "mccarbr01",
		"teams" : "13.5",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "sanchan01",
		"teams" : "",
		"teamspitcher" : ""
	},
	{
		"player" : "sanchan01",
		"teams" : "5.1",
		"teamspitcher" : "LOW NYPL"
	},
	{
		"player" : "sanchan01",
		"teams" : "7.0",
		"teamspitcher" : "WMT,PRT CARL,EL"
	},
	{
		"player" : "sanchan01",
		"teams" : "8.6",
		"teamspitcher" : "CAR SOUL"
	},
	{
		"player" : "sanchan01",
		"teams" : "10.0",
		"teamspitcher" : "CAR,JUP,MGL,JUM SOUL,FLOR,VEWL,GULF"
	},
	{
		"player" : "sanchan01",
		"teams" : "5.1",
		"teamspitcher" : "JUP,JCK,JUM FLOR,SOUL,GULF"
	},
	{
		"player" : "sanchan01",
		"teams" : "10.8",
		"teamspitcher" : "LAK FLOR"
	},
	{
		"player" : "sanchan01",
		"teams" : "10.1",
		"teamspitcher" : "TOL,WMI IL,MIDW"
	},
	{
		"player" : "sanchan01",
		"teams" : "12.2",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "newcose01",
		"teams" : "9.8",
		"teamspitcher" : "BUR,ANG MIDW,ARIZ"
	},
	{
		"player" : "newcose01",
		"teams" : "6.4",
		"teamspitcher" : "SBR,ARK,BUR CALL,TL,MIDW"
	},
	{
		"player" : "newcose01",
		"teams" : "7.3",
		"teamspitcher" : "MSS SOUL"
	},
	{
		"player" : "newcose01",
		"teams" : "7.0",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "teherju01",
		"teams" : "10.8",
		"teamspitcher" : "DAN APPY"
	},
	{
		"player" : "teherju01",
		"teams" : "8.6",
		"teamspitcher" : "DAN,ROM APPY,SALL"
	},
	{
		"player" : "teherju01",
		"teams" : "6.8",
		"teamspitcher" : "MYR,MSS,ROM CARL,SOUL,SALL"
	},
	{
		"player" : "teherju01",
		"teams" : "7.7",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "teherju01",
		"teams" : "9.5",
		"teamspitcher" : "GWI,LCY IL,DOWL"
	},
	{
		"player" : "teherju01",
		"teams" : "5.4",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "foltymi01",
		"teams" : "9.3",
		"teamspitcher" : "GRE APPY"
	},
	{
		"player" : "foltymi01",
		"teams" : "10.0",
		"teamspitcher" : "LEX SALL"
	},
	{
		"player" : "foltymi01",
		"teams" : "8.6",
		"teamspitcher" : "LEX SALL"
	},
	{
		"player" : "foltymi01",
		"teams" : "7.4",
		"teamspitcher" : "CPC,LNR TL,CALL"
	},
	{
		"player" : "foltymi01",
		"teams" : "8.6",
		"teamspitcher" : "OKC PCL"
	},
	{
		"player" : "foltymi01",
		"teams" : "8.3",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "foltymi01",
		"teams" : "4.3",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "peterdu01",
		"teams" : "PDS · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "peterdu01",
		"teams" : "FWA · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "peterdu01",
		"teams" : "CAR · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "peterdu01",
		"teams" : "MSS,SRV · SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "peterdu01",
		"teams" : "GWI · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "peterdu01",
		"teams" : "GWI · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "riverre01",
		"teams" : "MRE,EVR · ARIZ,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "riverre01",
		"teams" : "EVR · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "riverre01",
		"teams" : "APP · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "riverre01",
		"teams" : "SBR,TAC,CRO · CALL,PCL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "riverre01",
		"teams" : "SAN,TAC,CRO · TL,PCL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "riverre01",
		"teams" : "TAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "riverre01",
		"teams" : "WTN · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "riverre01",
		"teams" : "JCK,LVG,ARE · SOUL,PCL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "riverre01",
		"teams" : "BFL,ARE · IL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "riverre01",
		"teams" : "SAJ,TRE,SWB · PRWL,EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "riverre01",
		"teams" : "ROC,CRO,LCY · IL,PRWL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "riverre01",
		"teams" : "ROC,GIG · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "riverre01",
		"teams" : "TUC,PCE,MGZ · PCL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "riverre01",
		"teams" : "SAJ · PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "riverre01",
		"teams" : "SNT · PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "riverre01",
		"teams" : "LVG · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "riverre01",
		"teams" : "SBR · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "reedmi02",
		"teams" : "BRR · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "reedmi02",
		"teams" : "HEL,BRE,HVL · PION,FLOR,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "reedmi02",
		"teams" : "APP · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "reedmi02",
		"teams" : "BRE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "reedmi02",
		"teams" : "BIL,CSP,SPS · SOUL,PCL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "reedmi02",
		"teams" : "CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "reedmi02",
		"teams" : "BIL · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "reedmi02",
		"teams" : "GWI,MSS · IL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "ruizri01",
		"teams" : "AST,GRE · GULF,APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "ruizri01",
		"teams" : "DAV · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "ruizri01",
		"teams" : "LNR,SRV · CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "ruizri01",
		"teams" : "MSS · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "ruizri01",
		"teams" : "GWI · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "ruizri01",
		"teams" : "GWI · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "ruizri01",
		"teams" : "GWI · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "stewach01",
		"teams" : "BRS · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "stewach01",
		"teams" : "WSM · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "stewach01",
		"teams" : "BIR,CHR · SOUL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "stewach01",
		"teams" : "BIR · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "stewach01",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "stewach01",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "stewach01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "stewach01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "stewach01",
		"teams" : "POR · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "stewach01",
		"teams" : "FRE · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "stewach01",
		"teams" : "INA,BDT · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "stewach01",
		"teams" : "INA,ATO · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "stewach01",
		"teams" : "ATO · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "stewach01",
		"teams" : "GWI · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezca02",
		"teams" : "BLJ · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezca02",
		"teams" : "BJY · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "perezca02",
		"teams" : "AUB · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezca02",
		"teams" : "LNS,CCS · MIDW,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezca02",
		"teams" : "LNS,LNR · MIDW,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezca02",
		"teams" : "OKC,CCS,CPC · PCL,VEWL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezca02",
		"teams" : "OKC,CCS · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezca02",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezca02",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezca02",
		"teams" : "SLK,CCS · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "perezca02",
		"teams" : "RRK,FRI · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "dudalu01",
		"teams" : "BKN,WKI · NYPL,HIWB",
		"teamspitcher" : ""
	},
	{
		"player" : "dudalu01",
		"teams" : "SCE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "dudalu01",
		"teams" : "BNG,SPS · EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "dudalu01",
		"teams" : "BFL,BNG · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "dudalu01",
		"teams" : "BFL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "dudalu01",
		"teams" : "BFL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "dudalu01",
		"teams" : "LVG,SCE,MET · PCL,FLOR,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "dudalu01",
		"teams" : "BNG · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "dudalu01",
		"teams" : "SCE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "dudalu01",
		"teams" : "OMA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "adamsla01",
		"teams" : "ROY · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "adamsla01",
		"teams" : "IDF · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "adamsla01",
		"teams" : "BRL,KNC,ROY · APPY,MIDW,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "adamsla01",
		"teams" : "WMT,KNC · CARL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "adamsla01",
		"teams" : "WMT,NTA,PEA · CARL,TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "adamsla01",
		"teams" : "NTA,BRL · TL,APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "adamsla01",
		"teams" : "NTA,OMA,ZUL · TL,PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "adamsla01",
		"teams" : "TRE,KNX,SWB,IWA · EL,SOUL,IL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "adamsla01",
		"teams" : "GWI · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "adamsla01",
		"teams" : "GWI,IWA · IL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "santada01",
		"teams" : "TWI · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "santada01",
		"teams" : "TWN · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "santada01",
		"teams" : "ELZ,BEL · APPY,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "santada01",
		"teams" : "BEL · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "santada01",
		"teams" : "FTM · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "santada01",
		"teams" : "NBR,AGU · EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "santada01",
		"teams" : "ROC,FTM · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "santada01",
		"teams" : "ROC,AGU · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "santada01",
		"teams" : "AGU,ROC,FTM · DOWL,IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "santada01",
		"teams" : "AGU,GWI · DOWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "santada01",
		"teams" : "GWI,AGU · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "bautijo02",
		"teams" : "WPT · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "bautijo02",
		"teams" : "HCK · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "bautijo02",
		"teams" : "LBG,BRD · CARL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "bautijo02",
		"teams" : "ATO,INA · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "bautijo02",
		"teams" : "LCY,INA · DOWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "bautijo02",
		"teams" : "LCY,BRD · DOWL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "bautijo02",
		"teams" : "LCY,INA · DOWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "bautijo02",
		"teams" : "LCY · DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "bautijo02",
		"teams" : "MAN,BJY · EL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "bautijo02",
		"teams" : "BFL,DUN · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "bautijo02",
		"teams" : "GWI,FLF · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "bourjpe01",
		"teams" : "ORM · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "bourjpe01",
		"teams" : "CDR,ANG · MIDW,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "bourjpe01",
		"teams" : "RCU · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "bourjpe01",
		"teams" : "ARK · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "bourjpe01",
		"teams" : "SLK,ESC · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "bourjpe01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "bourjpe01",
		"teams" : "SLK,SBR · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "bourjpe01",
		"teams" : "LHV · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "bourjpe01",
		"teams" : "POE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "bourjpe01",
		"teams" : "SAC,GWI · PCL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "duvalad01",
		"teams" : "SLM · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "duvalad01",
		"teams" : "AUG · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "duvalad01",
		"teams" : "SJO · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "duvalad01",
		"teams" : "RMD,MGA · EL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "duvalad01",
		"teams" : "FRE,MGA · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "duvalad01",
		"teams" : "SAC,LOU · PCL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "tuckepr01",
		"teams" : "TRC · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "tuckepr01",
		"teams" : "LNR,CPC · CALL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "tuckepr01",
		"teams" : "OKC,CPC · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "tuckepr01",
		"teams" : "FRE · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "tuckepr01",
		"teams" : "FRE,CPC · PCL,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "tuckepr01",
		"teams" : "FRE · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "tuckepr01",
		"teams" : "GWI,LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "flahery01",
		"teams" : "BOI · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "flahery01",
		"teams" : "PEO · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "flahery01",
		"teams" : "DYT,MES,KNX · FLOR,AZFL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "flahery01",
		"teams" : "KNX,IWA · SOUL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "flahery01",
		"teams" : "ESC,NFK · DOWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "flahery01",
		"teams" : "NFK,DEL,FDK · IL,SALL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "flahery01",
		"teams" : "BOW,NFK · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "flahery01",
		"teams" : "NFK · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "flahery01",
		"teams" : "BOW,FDK · EL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "flahery01",
		"teams" : "GWI · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "flowety01",
		"teams" : "DAN · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "flowety01",
		"teams" : "ROM,HON · SALL,HIWB",
		"teamspitcher" : ""
	},
	{
		"player" : "flowety01",
		"teams" : "MYR,MES · CARL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "flowety01",
		"teams" : "BIR,CHR · SOUL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "flowety01",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "flowety01",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "flowety01",
		"teams" : "GWI,ROM,KIS · IL,SALL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "flowety01",
		"teams" : "GWI,MSS · IL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "culbech01",
		"teams" : "GNT · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "culbech01",
		"teams" : "AUG · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "culbech01",
		"teams" : "AUG · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "culbech01",
		"teams" : "SJO,SCO · CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "culbech01",
		"teams" : "RMD · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "culbech01",
		"teams" : "FRE,CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "culbech01",
		"teams" : "CSP,AZU · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "culbech01",
		"teams" : "CSP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "culbech01",
		"teams" : "GIG,ABQ · DOWL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "culbech01",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "culbech01",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "markani01",
		"teams" : "ADN · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "markani01",
		"teams" : "DEL · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "markani01",
		"teams" : "FDK,BOW,PEA · CARL,EL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "markani01",
		"teams" : "BOW · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "inciaen01",
		"teams" : "DBR · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "inciaen01",
		"teams" : "MSO · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "inciaen01",
		"teams" : "SBN,YAK,ZUL · MIDW,NORW,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "inciaen01",
		"teams" : "SBN,ZUL · MIDW,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "inciaen01",
		"teams" : "VIS,SBN,ZUL · CALL,MIDW,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "inciaen01",
		"teams" : "MOB,ZUL · SOUL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "inciaen01",
		"teams" : "ZUL,REN · VEWL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "inciaen01",
		"teams" : "MOB,DKS · SOUL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "inciaen01",
		"teams" : "GWI · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "acunaro01",
		"teams" : "KIS,DAN · GULF,APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "acunaro01",
		"teams" : "ROM,MEL,KIS · SALL,AUBL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "acunaro01",
		"teams" : "MSS,GWI,FLF,PEA · SOUL,IL,FLOR,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "acunaro01",
		"teams" : "GWI · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "camarjo01",
		"teams" : "BV1 · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "camarjo01",
		"teams" : "DAN · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "camarjo01",
		"teams" : "ROM,LBG · SALL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "camarjo01",
		"teams" : "CAR,PEA · CARL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "camarjo01",
		"teams" : "MSS,AGU · SOUL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "camarjo01",
		"teams" : "GWI,AGU,KIS · IL,DOWL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "camarjo01",
		"teams" : "GWI,FLF · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "swansda01",
		"teams" : "HIL · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "swansda01",
		"teams" : "MSS,CAR · SOUL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "swansda01",
		"teams" : "GWI · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "swansda01",
		"teams" : "ROM · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "albieoz01",
		"teams" : "DAN,KIS · APPY,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "albieoz01",
		"teams" : "ROM · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "albieoz01",
		"teams" : "MSS,GWI · SOUL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "albieoz01",
		"teams" : "GWI · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "freemfr01",
		"teams" : "KIS · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "freemfr01",
		"teams" : "ROM · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "freemfr01",
		"teams" : "MYR,MSS,PES · CARL,SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "freemfr01",
		"teams" : "GWI,PHO · IL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "freemfr01",
		"teams" : "GWI · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "freemfr01",
		"teams" : "KIS,GWI · GULF,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "freemfr01",
		"teams" : "GWI · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "suzukku01",
		"teams" : "VAN · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "suzukku01",
		"teams" : "STK,PHO · CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "suzukku01",
		"teams" : "MDL · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "suzukku01",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "suzukku01",
		"teams" : "SAC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "sherfji01",
		"teams" : "6.8",
		"teamspitcher" : "HIL,SBN NORW,MIDW"
	},
	{
		"player" : "sherfji01",
		"teams" : "6.9",
		"teamspitcher" : "MOB,VIS,SRV SOUL,CALL,AZFL"
	},
	{
		"player" : "sherfji01",
		"teams" : "9.1",
		"teamspitcher" : "MOB SOUL"
	},
	{
		"player" : "sherfji01",
		"teams" : "5.0",
		"teamspitcher" : "REN,MOB,VIS PCL,SOUL,CALL"
	},
	{
		"player" : "sherfji01",
		"teams" : "6.8",
		"teamspitcher" : "REN PCL"
	},
	{
		"player" : "sherfji01",
		"teams" : "6.2",
		"teamspitcher" : "REN PCL"
	},
	{
		"player" : "brachsi01",
		"teams" : "6.4",
		"teamspitcher" : "DIA DOSL"
	},
	{
		"player" : "brachsi01",
		"teams" : "7.0",
		"teamspitcher" : "MSO,ZUL PION,VEWL"
	},
	{
		"player" : "brachsi01",
		"teams" : "4.4",
		"teamspitcher" : "SBN,ZUL MIDW,VEWL"
	},
	{
		"player" : "brachsi01",
		"teams" : "6.7",
		"teamspitcher" : "MOB,ZUL,VIS SOUL,VEWL,CALL"
	},
	{
		"player" : "brachsi01",
		"teams" : "8.5",
		"teamspitcher" : "REN,ZUL PCL,VEWL"
	},
	{
		"player" : "brachsi01",
		"teams" : "6.4",
		"teamspitcher" : "REN PCL"
	},
	{
		"player" : "brachsi01",
		"teams" : "10.2",
		"teamspitcher" : "REN PCL"
	},
	{
		"player" : "lopezyo01",
		"teams" : "9.1",
		"teamspitcher" : "IDJ CNS"
	},
	{
		"player" : "lopezyo01",
		"teams" : "9.2",
		"teamspitcher" : "IDJ CNS"
	},
	{
		"player" : "lopezyo01",
		"teams" : "9.0",
		"teamspitcher" : "IDJ CNS"
	},
	{
		"player" : "lopezyo01",
		"teams" : "9.4",
		"teamspitcher" : "MOB,SRV,DKS SOUL,AZFL,ARIZ"
	},
	{
		"player" : "lopezyo01",
		"teams" : "9.7",
		"teamspitcher" : "MOB,DKS SOUL,ARIZ"
	},
	{
		"player" : "lopezyo01",
		"teams" : "5.5",
		"teamspitcher" : "VIS,SRV,DKS CALL,AZFL,ARIZ"
	},
	{
		"player" : "lopezyo01",
		"teams" : "5.5",
		"teamspitcher" : "WTN SOUL"
	},
	{
		"player" : "diekmja01",
		"teams" : "6.6",
		"teamspitcher" : "CLR,WPT GULF,NYPL"
	},
	{
		"player" : "diekmja01",
		"teams" : "10.3",
		"teamspitcher" : "LWD,WPT SALL,NYPL"
	},
	{
		"player" : "diekmja01",
		"teams" : "9.5",
		"teamspitcher" : "LWD SALL"
	},
	{
		"player" : "diekmja01",
		"teams" : "7.9",
		"teamspitcher" : "CLW,LWD,MES FLOR,SALL,AZFL"
	},
	{
		"player" : "diekmja01",
		"teams" : "5.9",
		"teamspitcher" : "REA,SCO EL,AZFL"
	},
	{
		"player" : "diekmja01",
		"teams" : "6.4",
		"teamspitcher" : "LHV IL"
	},
	{
		"player" : "diekmja01",
		"teams" : "9.3",
		"teamspitcher" : "LHV IL"
	},
	{
		"player" : "diekmja01",
		"teams" : "6.4",
		"teamspitcher" : "LHV IL"
	},
	{
		"player" : "diekmja01",
		"teams" : "4.3",
		"teamspitcher" : "FRI,RRK TL,PCL"
	},
	{
		"player" : "barreja01",
		"teams" : "10.2",
		"teamspitcher" : "SBN MIDW"
	},
	{
		"player" : "barreja01",
		"teams" : "7.3",
		"teamspitcher" : "VIS,MOB,SRV CALL,SOUL,AZFL"
	},
	{
		"player" : "barreja01",
		"teams" : "7.6",
		"teamspitcher" : "REN,MOB PCL,SOUL"
	},
	{
		"player" : "barreja01",
		"teams" : "10.4",
		"teamspitcher" : "MOB,REN SOUL,PCL"
	},
	{
		"player" : "barreja01",
		"teams" : "6.8",
		"teamspitcher" : "REN PCL"
	},
	{
		"player" : "barreja01",
		"teams" : "7.7",
		"teamspitcher" : "REN,VIS PCL,CALL"
	},
	{
		"player" : "barreja01",
		"teams" : "6.2",
		"teamspitcher" : "REN PCL"
	},
	{
		"player" : "boxbebr01",
		"teams" : "12.1",
		"teamspitcher" : "PES AZFL"
	},
	{
		"player" : "boxbebr01",
		"teams" : "9.0",
		"teamspitcher" : "LBG,CAR CARL,SOUL"
	},
	{
		"player" : "boxbebr01",
		"teams" : "5.4",
		"teamspitcher" : "CAR,LOU,PHO SOUL,IL,AZFL"
	},
	{
		"player" : "boxbebr01",
		"teams" : "7.7",
		"teamspitcher" : "TUC PCL"
	},
	{
		"player" : "boxbebr01",
		"teams" : "7.8",
		"teamspitcher" : "TUC PCL"
	},
	{
		"player" : "boxbebr01",
		"teams" : "3.9",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "boxbebr01",
		"teams" : "10.2",
		"teamspitcher" : "POE,DHM,MTG FLOR,IL,SOUL"
	},
	{
		"player" : "boxbebr01",
		"teams" : "9.4",
		"teamspitcher" : "POE,DHM FLOR,IL"
	},
	{
		"player" : "delgara01",
		"teams" : "6.8",
		"teamspitcher" : "BV1 DOSL"
	},
	{
		"player" : "delgara01",
		"teams" : "8.2",
		"teamspitcher" : "DAN APPY"
	},
	{
		"player" : "delgara01",
		"teams" : "8.9",
		"teamspitcher" : "ROM SALL"
	},
	{
		"player" : "delgara01",
		"teams" : "7.0",
		"teamspitcher" : "MYR,MSS CARL,SOUL"
	},
	{
		"player" : "delgara01",
		"teams" : "8.7",
		"teamspitcher" : "MSS,GWI SOUL,IL"
	},
	{
		"player" : "delgara01",
		"teams" : "9.3",
		"teamspitcher" : "GWI,LCY IL,DOWL"
	},
	{
		"player" : "delgara01",
		"teams" : "9.7",
		"teamspitcher" : "REN PCL"
	},
	{
		"player" : "delgara01",
		"teams" : "7.9",
		"teamspitcher" : "LCY DOWL"
	},
	{
		"player" : "delgara01",
		"teams" : "9.0",
		"teamspitcher" : "MOB,DKS SOUL,ARIZ"
	},
	{
		"player" : "delgara01",
		"teams" : "5.3",
		"teamspitcher" : "REN,VIS PCL,CALL"
	},
	{
		"player" : "bradlar01",
		"teams" : "4.5",
		"teamspitcher" : "MSO PION"
	},
	{
		"player" : "bradlar01",
		"teams" : "5.8",
		"teamspitcher" : "SBN MIDW"
	},
	{
		"player" : "bradlar01",
		"teams" : "6.8",
		"teamspitcher" : "MOB,VIS SOUL,CALL"
	},
	{
		"player" : "bradlar01",
		"teams" : "9.3",
		"teamspitcher" : "MOB,REN,SRV,DKS SOUL,PCL,AZFL,ARIZ"
	},
	{
		"player" : "bradlar01",
		"teams" : "9.5",
		"teamspitcher" : "REN,VIS,DKS PCL,CALL,ARIZ"
	},
	{
		"player" : "bradlar01",
		"teams" : "5.8",
		"teamspitcher" : "REN PCL"
	},
	{
		"player" : "chafian01",
		"teams" : "9.0",
		"teamspitcher" : "DKS ARIZ"
	},
	{
		"player" : "chafian01",
		"teams" : "8.2",
		"teamspitcher" : "VIS CALL"
	},
	{
		"player" : "chafian01",
		"teams" : "8.7",
		"teamspitcher" : "MOB,VIS,SRV SOUL,CALL,AZFL"
	},
	{
		"player" : "chafian01",
		"teams" : "9.8",
		"teamspitcher" : "REN,MOB PCL,SOUL"
	},
	{
		"player" : "chafian01",
		"teams" : "0.0",
		"teamspitcher" : "REN PCL"
	},
	{
		"player" : "chafian01",
		"teams" : "3.8",
		"teamspitcher" : "REN,VIS,DKS PCL,CALL,ARIZ"
	},
	{
		"player" : "scribtr01",
		"teams" : "6.3",
		"teamspitcher" : "AST,TRC,GRE GULF,NYPL,APPY"
	},
	{
		"player" : "scribtr01",
		"teams" : "6.9",
		"teamspitcher" : "TRC,DAV,CPC NYPL,MIDW,TL"
	},
	{
		"player" : "scribtr01",
		"teams" : "8.5",
		"teamspitcher" : "LNR CALL"
	},
	{
		"player" : "scribtr01",
		"teams" : "6.7",
		"teamspitcher" : "ARK,SLK TL,PCL"
	},
	{
		"player" : "scribtr01",
		"teams" : "8.7",
		"teamspitcher" : "SLK PCL"
	},
	{
		"player" : "scribtr01",
		"teams" : "7.6",
		"teamspitcher" : "REN,DKS,HIL PCL,ARIZ,NORW"
	},
	{
		"player" : "salasfe01",
		"teams" : "10.9",
		"teamspitcher" : "SLT MEX"
	},
	{
		"player" : "salasfe01",
		"teams" : "6.6",
		"teamspitcher" : "SLT,MAZ MEX,MXPW"
	},
	{
		"player" : "salasfe01",
		"teams" : "9.4",
		"teamspitcher" : "PLM,MAZ,SLT FLOR,MXPW,MEX"
	},
	{
		"player" : "salasfe01",
		"teams" : "8.0",
		"teamspitcher" : "SPD,MAZ TL,MXPW"
	},
	{
		"player" : "salasfe01",
		"teams" : "8.4",
		"teamspitcher" : "MEM,HRM,SPD,CDS PCL,MXPW,TL,GULF"
	},
	{
		"player" : "salasfe01",
		"teams" : "6.6",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "salasfe01",
		"teams" : "6.0",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "salasfe01",
		"teams" : "13.5",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "salasfe01",
		"teams" : "5.2",
		"teamspitcher" : "MEM,HRM PCL,MXPW"
	},
	{
		"player" : "salasfe01",
		"teams" : "4.9",
		"teamspitcher" : "SLK,SBR PCL,CALL"
	},
	{
		"player" : "salasfe01",
		"teams" : "2.7",
		"teamspitcher" : "HRM,SLK MXPW,PCL"
	},
	{
		"player" : "salasfe01",
		"teams" : "21.0",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "andrima01",
		"teams" : "6.3",
		"teamspitcher" : "EUG NORW"
	},
	{
		"player" : "andrima01",
		"teams" : "8.6",
		"teamspitcher" : "LEL CALL"
	},
	{
		"player" : "andrima01",
		"teams" : "9.0",
		"teamspitcher" : "SAN,TUC TL,PCL"
	},
	{
		"player" : "andrima01",
		"teams" : "8.5",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "andrima01",
		"teams" : "9.0",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "andrima01",
		"teams" : "8.4",
		"teamspitcher" : "DHM IL"
	},
	{
		"player" : "andrima01",
		"teams" : "12.3",
		"teamspitcher" : "DHM,POE IL,FLOR"
	},
	{
		"player" : "andrima01",
		"teams" : "2.5",
		"teamspitcher" : "VIS CALL"
	},
	{
		"player" : "medlekr01",
		"teams" : "5.7",
		"teamspitcher" : "DAN APPY"
	},
	{
		"player" : "medlekr01",
		"teams" : "7.2",
		"teamspitcher" : "MYR,ROM,HON,MSS CARL,SALL,HIWB,SOUL"
	},
	{
		"player" : "medlekr01",
		"teams" : "8.7",
		"teamspitcher" : "MSS,MES SOUL,AZFL"
	},
	{
		"player" : "medlekr01",
		"teams" : "4.8",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "medlekr01",
		"teams" : "10.1",
		"teamspitcher" : "GWI IL"
	},
	{
		"player" : "medlekr01",
		"teams" : "8.6",
		"teamspitcher" : "OMA,NTA PCL,TL"
	},
	{
		"player" : "medlekr01",
		"teams" : "12.5",
		"teamspitcher" : "OMA,NTA,ROY PCL,TL,ARIZ"
	},
	{
		"player" : "medlekr01",
		"teams" : "9.7",
		"teamspitcher" : "GWI,FLF,MSS IL,FLOR,SOUL"
	},
	{
		"player" : "medlekr01",
		"teams" : "10.3",
		"teamspitcher" : "REN PCL"
	},
	{
		"player" : "hiranyo01",
		"teams" : "9.5",
		"teamspitcher" : "ORX JPPL"
	},
	{
		"player" : "hiranyo01",
		"teams" : "9.0",
		"teamspitcher" : "ORX JPPL"
	},
	{
		"player" : "hiranyo01",
		"teams" : "10.2",
		"teamspitcher" : "ORX JPPL"
	},
	{
		"player" : "hiranyo01",
		"teams" : "7.5",
		"teamspitcher" : "ORX JPPL"
	},
	{
		"player" : "hiranyo01",
		"teams" : "5.2",
		"teamspitcher" : "ORX JPPL"
	},
	{
		"player" : "hiranyo01",
		"teams" : "7.3",
		"teamspitcher" : "ORX JPPL"
	},
	{
		"player" : "hiranyo01",
		"teams" : "8.2",
		"teamspitcher" : "ORX JPPL"
	},
	{
		"player" : "hiranyo01",
		"teams" : "7.8",
		"teamspitcher" : "ORX JPPL"
	},
	{
		"player" : "hiranyo01",
		"teams" : "8.4",
		"teamspitcher" : "ORX JPPL"
	},
	{
		"player" : "hiranyo01",
		"teams" : "6.5",
		"teamspitcher" : "ORX JPPL"
	},
	{
		"player" : "hiranyo01",
		"teams" : "8.9",
		"teamspitcher" : "ORX JPPL"
	},
	{
		"player" : "rosajo01",
		"teams" : "9.9",
		"teamspitcher" : "MSO,DBK,HDS PION,ARIZ,CALL"
	},
	{
		"player" : "rosajo01",
		"teams" : "8.8",
		"teamspitcher" : "MTY MEX"
	},
	{
		"player" : "rosajo01",
		"teams" : "9.3",
		"teamspitcher" : "TRE,SAR EL,FLOR"
	},
	{
		"player" : "rosajo01",
		"teams" : "7.9",
		"teamspitcher" : "SAR,TRE FLOR,EL"
	},
	{
		"player" : "rosajo01",
		"teams" : "8.3",
		"teamspitcher" : "PRT,PAW EL,IL"
	},
	{
		"player" : "rosajo01",
		"teams" : "8.4",
		"teamspitcher" : "INA IL"
	},
	{
		"player" : "rosajo01",
		"teams" : "8.0",
		"teamspitcher" : "HVL,HRM SOUL,MXPW"
	},
	{
		"player" : "rosajo01",
		"teams" : "12.5",
		"teamspitcher" : "WCH,HRM TL,MXPW"
	},
	{
		"player" : "rosajo01",
		"teams" : "7.4",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "rosajo01",
		"teams" : "10.4",
		"teamspitcher" : "CSP PCL"
	},
	{
		"player" : "rosajo01",
		"teams" : "12.0",
		"teamspitcher" : "CSP,MOD,TUL,GRJ PCL,CALL,TL,PION"
	},
	{
		"player" : "rosajo01",
		"teams" : "9.0",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "rosajo01",
		"teams" : "8.6",
		"teamspitcher" : "ABQ PCL"
	},
	{
		"player" : "shiplbr01",
		"teams" : "10.0",
		"teamspitcher" : "SBN,HIL MIDW,NORW"
	},
	{
		"player" : "shiplbr01",
		"teams" : "8.4",
		"teamspitcher" : "VIS,SBN,MOB CALL,MIDW,SOUL"
	},
	{
		"player" : "shiplbr01",
		"teams" : "8.4",
		"teamspitcher" : "MOB SOUL"
	},
	{
		"player" : "shiplbr01",
		"teams" : "9.9",
		"teamspitcher" : "REN PCL"
	},
	{
		"player" : "shiplbr01",
		"teams" : "11.1",
		"teamspitcher" : "REN,DKS PCL,ARIZ"
	},
	{
		"player" : "shiplbr01",
		"teams" : "11.3",
		"teamspitcher" : "REN PCL"
	},
	{
		"player" : "walketa01",
		"teams" : "2.6",
		"teamspitcher" : "MRE ARIZ"
	},
	{
		"player" : "walketa01",
		"teams" : "6.4",
		"teamspitcher" : "CLI MIDW"
	},
	{
		"player" : "walketa01",
		"teams" : "8.8",
		"teamspitcher" : "WTN SOUL"
	},
	{
		"player" : "walketa01",
		"teams" : "7.1",
		"teamspitcher" : "WTN,TAC SOUL,PCL"
	},
	{
		"player" : "walketa01",
		"teams" : "8.1",
		"teamspitcher" : "TAC,SPS,WTN,HDS PCL,AZFL,SOUL,CALL"
	},
	{
		"player" : "walketa01",
		"teams" : "7.2",
		"teamspitcher" : "TAC PCL"
	},
	{
		"player" : "millesh01",
		"teams" : "15.0",
		"teamspitcher" : "DAV MIDW"
	},
	{
		"player" : "millesh01",
		"teams" : "8.4",
		"teamspitcher" : "DAV MIDW"
	},
	{
		"player" : "millesh01",
		"teams" : "7.2",
		"teamspitcher" : "SPD,PLM TL,FLOR"
	},
	{
		"player" : "millesh01",
		"teams" : "9.1",
		"teamspitcher" : "MEM PCL"
	},
	{
		"player" : "millesh01",
		"teams" : "9.0",
		"teamspitcher" : "REN,VIS PCL,CALL"
	},
	{
		"player" : "millesh01",
		"teams" : "9.3",
		"teamspitcher" : "VIS,WTN CALL,SOUL"
	},
	{
		"player" : "mcfartj01",
		"teams" : "11.5",
		"teamspitcher" : "INS GULF"
	},
	{
		"player" : "mcfartj01",
		"teams" : "9.5",
		"teamspitcher" : "LCO SALL"
	},
	{
		"player" : "mcfartj01",
		"teams" : "9.0",
		"teamspitcher" : "KIN,AKR CARL,EL"
	},
	{
		"player" : "mcfartj01",
		"teams" : "9.1",
		"teamspitcher" : "AKR,PHO,KIN EL,AZFL,CARL"
	},
	{
		"player" : "mcfartj01",
		"teams" : "9.6",
		"teamspitcher" : "CLB,AKR IL,EL"
	},
	{
		"player" : "mcfartj01",
		"teams" : "8.9",
		"teamspitcher" : "ORN VEWL"
	},
	{
		"player" : "mcfartj01",
		"teams" : "7.6",
		"teamspitcher" : "NFK,ADN IL,NYPL"
	},
	{
		"player" : "mcfartj01",
		"teams" : "7.2",
		"teamspitcher" : "NFK IL"
	},
	{
		"player" : "mcfartj01",
		"teams" : "11.4",
		"teamspitcher" : "NFK,OLS,BOW,FDK IL,GULF,EL,CARL"
	},
	{
		"player" : "mcfartj01",
		"teams" : "4.9",
		"teamspitcher" : "REN PCL"
	},
	{
		"player" : "kochma01",
		"teams" : "9.6",
		"teamspitcher" : "BKN NYPL"
	},
	{
		"player" : "kochma01",
		"teams" : "10.9",
		"teamspitcher" : "SAV SALL"
	},
	{
		"player" : "kochma01",
		"teams" : "10.5",
		"teamspitcher" : "SCE FLOR"
	},
	{
		"player" : "kochma01",
		"teams" : "9.1",
		"teamspitcher" : "BNG,MOB EL,SOUL"
	},
	{
		"player" : "kochma01",
		"teams" : "9.5",
		"teamspitcher" : "MOB,REN,LCY SOUL,PCL,DOWL"
	},
	{
		"player" : "kochma01",
		"teams" : "13.0",
		"teamspitcher" : "REN,HIL PCL,NORW"
	},
	{
		"player" : "kochma01",
		"teams" : "10.9",
		"teamspitcher" : "REN PCL"
	},
	{
		"player" : "buchhcl01",
		"teams" : "7.4",
		"teamspitcher" : "LOW NYPL"
	},
	{
		"player" : "buchhcl01",
		"teams" : "6.7",
		"teamspitcher" : "GRV,WMT SALL,CARL"
	},
	{
		"player" : "buchhcl01",
		"teams" : "6.2",
		"teamspitcher" : "PRT,PAW EL,IL"
	},
	{
		"player" : "buchhcl01",
		"teams" : "6.9",
		"teamspitcher" : "PAW,SCO,PRT IL,AZFL,EL"
	},
	{
		"player" : "buchhcl01",
		"teams" : "6.1",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "buchhcl01",
		"teams" : "9.8",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "buchhcl01",
		"teams" : "3.9",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "buchhcl01",
		"teams" : "18.0",
		"teamspitcher" : "PAW,LOW IL,NYPL"
	},
	{
		"player" : "buchhcl01",
		"teams" : "5.1",
		"teamspitcher" : "PAW IL"
	},
	{
		"player" : "buchhcl01",
		"teams" : "7.0",
		"teamspitcher" : "REN,OMA,VIS,NTA PCL,CALL,TL"
	},
	{
		"player" : "rayro02",
		"teams" : "0.0",
		"teamspitcher" : "VMT NYPL"
	},
	{
		"player" : "rayro02",
		"teams" : "7.2",
		"teamspitcher" : "HGR SALL"
	},
	{
		"player" : "rayro02",
		"teams" : "10.4",
		"teamspitcher" : "POT CARL"
	},
	{
		"player" : "rayro02",
		"teams" : "7.4",
		"teamspitcher" : "POT,HRB CARL,EL"
	},
	{
		"player" : "rayro02",
		"teams" : "9.3",
		"teamspitcher" : "TOL,GLN IL,AZFL"
	},
	{
		"player" : "rayro02",
		"teams" : "9.5",
		"teamspitcher" : "REN PCL"
	},
	{
		"player" : "rayro02",
		"teams" : "7.7",
		"teamspitcher" : "VIS CALL"
	},
	{
		"player" : "rayro02",
		"teams" : "10.8",
		"teamspitcher" : "REN,VIS PCL,CALL"
	},
	{
		"player" : "godleza01",
		"teams" : "7.4",
		"teamspitcher" : "BOI,CBZ NORW,ARIZ"
	},
	{
		"player" : "godleza01",
		"teams" : "8.0",
		"teamspitcher" : "DYT,KNC FLOR,MIDW"
	},
	{
		"player" : "godleza01",
		"teams" : "7.7",
		"teamspitcher" : "VIS,MOB CALL,SOUL"
	},
	{
		"player" : "godleza01",
		"teams" : "9.3",
		"teamspitcher" : "MOB,REN SOUL,PCL"
	},
	{
		"player" : "godleza01",
		"teams" : "4.5",
		"teamspitcher" : "REN PCL"
	},
	{
		"player" : "corbipa01",
		"teams" : "11.5",
		"teamspitcher" : "ORM PION"
	},
	{
		"player" : "corbipa01",
		"teams" : "7.8",
		"teamspitcher" : "RCU,CDR,VIS CALL,MIDW"
	},
	{
		"player" : "corbipa01",
		"teams" : "9.7",
		"teamspitcher" : "MOB SOUL"
	},
	{
		"player" : "corbipa01",
		"teams" : "9.0",
		"teamspitcher" : "REN,MOB PCL,SOUL"
	},
	{
		"player" : "corbipa01",
		"teams" : "9.0",
		"teamspitcher" : "MOB,VIS SOUL,CALL"
	},
	{
		"player" : "greinza01",
		"teams" : "10.3",
		"teamspitcher" : "DVT,SPO,WMT GULF,NORW,CARL"
	},
	{
		"player" : "greinza01",
		"teams" : "7.3",
		"teamspitcher" : "WMT,WCH CARL,TL"
	},
	{
		"player" : "greinza01",
		"teams" : "7.8",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "greinza01",
		"teams" : "8.2",
		"teamspitcher" : "WCH TL"
	},
	{
		"player" : "greinza01",
		"teams" : "9.3",
		"teamspitcher" : "NVL,BRE PCL,FLOR"
	},
	{
		"player" : "greinza01",
		"teams" : "12.5",
		"teamspitcher" : "RCU CALL"
	},
	{
		"player" : "greinza01",
		"teams" : "14.6",
		"teamspitcher" : "REN,DKS PCL,ARIZ"
	},
	{
		"player" : "stewach01",
		"teams" : "BRS · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "stewach01",
		"teams" : "WSM · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "stewach01",
		"teams" : "BIR,CHR · SOUL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "stewach01",
		"teams" : "BIR · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "stewach01",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "stewach01",
		"teams" : "OKC · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "stewach01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "stewach01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "stewach01",
		"teams" : "POR · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "stewach01",
		"teams" : "FRE · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "stewach01",
		"teams" : "INA,BDT · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "stewach01",
		"teams" : "INA,ATO · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "stewach01",
		"teams" : "ATO · EL",
		"teamspitcher" : ""
	},
	{
		"player" : "stewach01",
		"teams" : "GWI · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "negrokr01",
		"teams" : "RES,LOW · GULF,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "negrokr01",
		"teams" : "GRV,LNR · SALL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "negrokr01",
		"teams" : "GRV,LNR,PRT · SALL,CALL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "negrokr01",
		"teams" : "SAL,CAR,SAR · CARL,SOUL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "negrokr01",
		"teams" : "CAR,PES,LOU · SOUL,AZFL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "negrokr01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "negrokr01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "negrokr01",
		"teams" : "LOU,CGU · IL,PRWL",
		"teamspitcher" : ""
	},
	{
		"player" : "negrokr01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "negrokr01",
		"teams" : "LOU · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "negrokr01",
		"teams" : "IWA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "negrokr01",
		"teams" : "REN · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "negrokr01",
		"teams" : "REN · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "kivlepa01",
		"teams" : "EVR · NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "kivlepa01",
		"teams" : "HDS,CLI,PEA · CALL,MIDW,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "kivlepa01",
		"teams" : "WTN,HDS,SPS · SOUL,CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "kivlepa01",
		"teams" : "TAC,ESC · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "kivlepa01",
		"teams" : "TAC,RRK,ELP · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "kivlepa01",
		"teams" : "ESC · DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "kivlepa01",
		"teams" : "LVG,LOU · PCL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "vargail01",
		"teams" : "SJ2 · VESL",
		"teamspitcher" : ""
	},
	{
		"player" : "vargail01",
		"teams" : "SJ2 · VESL",
		"teamspitcher" : ""
	},
	{
		"player" : "vargail01",
		"teams" : "CDS · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "vargail01",
		"teams" : "CDS · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "vargail01",
		"teams" : "JOH,ORN,PLM,BAT · APPY,VEWL,FLOR,NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "vargail01",
		"teams" : "PEO,ORN · MIDW,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "vargail01",
		"teams" : "PLM,SPD · FLOR,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "vargail01",
		"teams" : "KNC,LRA · MIDW,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "vargail01",
		"teams" : "MOB,LRA,REN,VIS · SOUL,VEWL,PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "vargail01",
		"teams" : "REN,LRA,DKS · PCL,VEWL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "vargail01",
		"teams" : "REN,LRA · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "britoso01",
		"teams" : "DIA · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "britoso01",
		"teams" : "DKS · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "britoso01",
		"teams" : "MSO · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "britoso01",
		"teams" : "SBN · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "britoso01",
		"teams" : "VIS,ESS · CALL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "britoso01",
		"teams" : "MOB,ESS · SOUL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "britoso01",
		"teams" : "REN,VIS,DKS · PCL,CALL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "britoso01",
		"teams" : "REN,ESS · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "britoso01",
		"teams" : "REN · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "walkech02",
		"teams" : "ADN · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "walkech02",
		"teams" : "FDK,DEL,BOW · CARL,SALL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "walkech02",
		"teams" : "BOW,NFK · EL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "walkech02",
		"teams" : "NFK · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "walkech02",
		"teams" : "NFK · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "walkech02",
		"teams" : "REN · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "walkech02",
		"teams" : "REN · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "marrede01",
		"teams" : "LOW · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "marrede01",
		"teams" : "SAL,PRT · CARL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "marrede01",
		"teams" : "PRT,PAW,SPS · EL,IL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "marrede01",
		"teams" : "PAW · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "marrede01",
		"teams" : "PAW · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "marrede01",
		"teams" : "PAW,AZU · IL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "marrede01",
		"teams" : "REN,DKS · PCL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "murphjr01",
		"teams" : "YNK · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "murphjr01",
		"teams" : "CHS · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "murphjr01",
		"teams" : "CHS,TAM · SALL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "murphjr01",
		"teams" : "TAM,TRE · FLOR,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "murphjr01",
		"teams" : "SWB,TRE · IL,EL",
		"teamspitcher" : ""
	},
	{
		"player" : "murphjr01",
		"teams" : "SWB · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "murphjr01",
		"teams" : "ROC · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "murphjr01",
		"teams" : "ROC,REN · IL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "escobed01",
		"teams" : "VN2 · VESL",
		"teamspitcher" : ""
	},
	{
		"player" : "escobed01",
		"teams" : "WS2 · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "escobed01",
		"teams" : "KAN,GRF,LGU · SALL,PION,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "escobed01",
		"teams" : "KAN,LGU · SALL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "escobed01",
		"teams" : "WSM,BIR,PES,LGU · CARL,SOUL,AZFL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "escobed01",
		"teams" : "CHR,LGU · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "escobed01",
		"teams" : "ROC,ORN,LGU · IL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "escobed01",
		"teams" : "ORN,ROC · VEWL,IL",
		"teamspitcher" : ""
	},
	{
		"player" : "escobed01",
		"teams" : "ARA · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "escobed01",
		"teams" : "ARA · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "escobed01",
		"teams" : "ARA,FTM · VEWL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "avilaal01",
		"teams" : "WMI · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "avilaal01",
		"teams" : "ERI,ESC · EL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "avilaal01",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "avilaal01",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "avilaal01",
		"teams" : "TOL · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "avilaal01",
		"teams" : "CHR · IL",
		"teamspitcher" : ""
	},
	{
		"player" : "dysonja01",
		"teams" : "ROY · ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "dysonja01",
		"teams" : "BUR · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "dysonja01",
		"teams" : "WMT · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "dysonja01",
		"teams" : "NTA,SPS,BUR · TL,AZFL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "dysonja01",
		"teams" : "OMA,SAJ,WMT,NTA,ROY · PCL,PRWL,CARL,TL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "dysonja01",
		"teams" : "OMA,CCS · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "dysonja01",
		"teams" : "OMA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "dysonja01",
		"teams" : "OMA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "dysonja01",
		"teams" : "OMA · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "dysonja01",
		"teams" : "REN · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "owingch01",
		"teams" : "MSO · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "owingch01",
		"teams" : "SBN · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "owingch01",
		"teams" : "VIS · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "owingch01",
		"teams" : "MOB,VIS,SRV · SOUL,CALL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "owingch01",
		"teams" : "REN · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "owingch01",
		"teams" : "REN,DKS · PCL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "owingch01",
		"teams" : "REN,DKS · PCL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "owingch01",
		"teams" : "REN · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "jayjo02",
		"teams" : "DAV · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "jayjo02",
		"teams" : "PLM,SPD,CDS · FLOR,TL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "jayjo02",
		"teams" : "SPD,MEM · TL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "jayjo02",
		"teams" : "MEM,CCS · PCL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "jayjo02",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "jayjo02",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "jayjo02",
		"teams" : "MEM,PEO · PCL,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "jayjo02",
		"teams" : "LEL · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "descada01",
		"teams" : "BAT · NYPL",
		"teamspitcher" : ""
	},
	{
		"player" : "descada01",
		"teams" : "PLM,SPD · FLOR,TL",
		"teamspitcher" : ""
	},
	{
		"player" : "descada01",
		"teams" : "SPD,MEM,SPS · TL,PCL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "descada01",
		"teams" : "MEM · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "descada01",
		"teams" : "ABQ · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "souzast01",
		"teams" : "NAT · GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "souzast01",
		"teams" : "VMT,HGR · NYPL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "souzast01",
		"teams" : "HGR · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "souzast01",
		"teams" : "HGR · SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "souzast01",
		"teams" : "POT · CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "souzast01",
		"teams" : "HGR,POT · SALL,CARL",
		"teamspitcher" : ""
	},
	{
		"player" : "souzast01",
		"teams" : "HRB,MES,NAT · EL,AZFL,GULF",
		"teamspitcher" : ""
	},
	{
		"player" : "souzast01",
		"teams" : "SYR,POT,HGR · IL,CARL,SALL",
		"teamspitcher" : ""
	},
	{
		"player" : "souzast01",
		"teams" : "DHM,POE · IL,FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "souzast01",
		"teams" : "POE · FLOR",
		"teamspitcher" : ""
	},
	{
		"player" : "souzast01",
		"teams" : "REN,VIS · PCL,CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "polloaj01",
		"teams" : "SBN · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "polloaj01",
		"teams" : "SCO · AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "polloaj01",
		"teams" : "MOB · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "polloaj01",
		"teams" : "REN · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "polloaj01",
		"teams" : "REN,DKS · PCL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "polloaj01",
		"teams" : "REN,VIS,DKS · PCL,CALL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "polloaj01",
		"teams" : "REN · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "polloaj01",
		"teams" : "REN · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "peralda01",
		"teams" : "JOH · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "peralda01",
		"teams" : "JOH · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "peralda01",
		"teams" : "MGA · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "peralda01",
		"teams" : "MGA · VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "peralda01",
		"teams" : "VIS,MGA · CALL,VEWL",
		"teamspitcher" : ""
	},
	{
		"player" : "peralda01",
		"teams" : "MGA,MOB · VEWL,SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "peralda01",
		"teams" : "REN,MOB,DKS · PCL,SOUL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "lambja01",
		"teams" : "MSO · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "lambja01",
		"teams" : "VIS,SRV,DKS · CALL,AZFL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "lambja01",
		"teams" : "MOB,REN · SOUL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "lambja01",
		"teams" : "REN · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "lambja01",
		"teams" : "VIS · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "ahmedni01",
		"teams" : "DAN · APPY",
		"teamspitcher" : ""
	},
	{
		"player" : "ahmedni01",
		"teams" : "LBG,PHO · CARL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "ahmedni01",
		"teams" : "MOB,SRV · SOUL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "ahmedni01",
		"teams" : "REN · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "ahmedni01",
		"teams" : "DKS,REN · ARIZ,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "marteke01",
		"teams" : "MRN · DOSL",
		"teamspitcher" : ""
	},
	{
		"player" : "marteke01",
		"teams" : "EVR,CLI · NORW,MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "marteke01",
		"teams" : "CLI,HDS,GIG · MIDW,CALL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "marteke01",
		"teams" : "WTN,TAC,GIG · SOUL,PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "marteke01",
		"teams" : "TAC,GIG,WTN,MRE · PCL,DOWL,SOUL,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "marteke01",
		"teams" : "TAC,EVR · PCL,NORW",
		"teamspitcher" : ""
	},
	{
		"player" : "marteke01",
		"teams" : "REN,GIG · PCL,DOWL",
		"teamspitcher" : ""
	},
	{
		"player" : "goldspa01",
		"teams" : "MSO · PION",
		"teamspitcher" : ""
	},
	{
		"player" : "goldspa01",
		"teams" : "VIS · CALL",
		"teamspitcher" : ""
	},
	{
		"player" : "goldspa01",
		"teams" : "MOB · SOUL",
		"teamspitcher" : ""
	},
	{
		"player" : "mathije01",
		"teams" : "PVO,ANG · PION,ARIZ",
		"teamspitcher" : ""
	},
	{
		"player" : "mathije01",
		"teams" : "CDR · MIDW",
		"teamspitcher" : ""
	},
	{
		"player" : "mathije01",
		"teams" : "RCU,ARK,SCO · CALL,TL,AZFL",
		"teamspitcher" : ""
	},
	{
		"player" : "mathije01",
		"teams" : "ARK · TL",
		"teamspitcher" : ""
	},
	{
		"player" : "mathije01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "mathije01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "mathije01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "mathije01",
		"teams" : "SLK · PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "mathije01",
		"teams" : "JUP,JCK,NOR · FLOR,SOUL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "mathije01",
		"teams" : "JCK,NOR · SOUL,PCL",
		"teamspitcher" : ""
	},
	{
		"player" : "colliti01",
		"teams" : "9.0",
		"teamspitcher" : "BJY GULF"
	},
	{
		"player" : "colliti01",
		"teams" : "4.7",
		"teamspitcher" : "LNS MIDW"
	},
	{
		"player" : "colliti01",
		"teams" : "6.9",
		"teamspitcher" : "DUN,MAN FLOR,EL"
	},
	{
		"player" : "colliti01",
		"teams" : "5.0",
		"teamspitcher" : "MAN,OMA,MSS EL,PCL,SOUL"
	},
	{
		"player" : "colliti01",
		"teams" : "5.5",
		"teamspitcher" : "OMA PCL"
	},
	{
		"player" : "colliti01",
		"teams" : "8.8",
		"teamspitcher" : "HRB,NAT,POT EL,GULF,CARL"
	},
	{
		"player" : "colliti01",
		"teams" : "7.3",
		"teamspitcher" : "SYR IL"
	},
	{
		"player" : "gloveko01",
		"teams" : "6.6",
		"teamspitcher" : "HGR,AUB SALL,NYPL"
	},
	{
		"player" : "gloveko01",
		"teams" : "6.3",
		"teamspitcher" : "SYR,HRB,POT IL,EL,CARL"
	},
	{
		"player" : "gloveko01",
		"teams" : "9.0",
		"teamspitcher" : "HRB EL"
	},
	{
		"player" : "gloveko01",
		"teams" : "9.3",
		"teamspitcher" : "SYR,NAT,POT IL,GULF,CARL"
	},
	{
		"player" : "kintzbr01",
		"teams" : "9.5",
		"teamspitcher" : "PDS,EUG ARIZ,NORW"
	},
	{
		"player" : "kintzbr01",
		"teams" : "9.1",
		"teamspitcher" : "FWA,PDS,EUG MIDW,ARIZ,NORW"
	},
	{
		"player" : "kintzbr01",
		"teams" : "10.3",
		"teamspitcher" : "HVL SOUL"
	},
	{
		"player" : "kintzbr01",
		"teams" : "6.5",
		"teamspitcher" : "NVL,HVL,SPS PCL,SOUL,AZFL"
	},
	{
		"player" : "kintzbr01",
		"teams" : "11.6",
		"teamspitcher" : "PEA,NVL AZFL,PCL"
	},
	{
		"player" : "kintzbr01",
		"teams" : "8.4",
		"teamspitcher" : "HVL,NVL,BRE SOUL,PCL,FLOR"
	},
	{
		"player" : "kintzbr01",
		"teams" : "10.1",
		"teamspitcher" : "CSP,BRR PCL,ARIZ"
	},
	{
		"player" : "kintzbr01",
		"teams" : "8.8",
		"teamspitcher" : "ROC IL"
	},
	{
		"player" : "kintzbr01",
		"teams" : "0.0",
		"teamspitcher" : "POT CARL"
	}
]
const connection = mysql.createConnection({
    host: 'steveport.com',
    port: '3306',
    user: 'tranch5_sjr',
    password: 'modernWater360',
    database: 'tranch5_milb'
});
connection.connect();
console.log(chalk.white.underline.bold(rawPlayers.length))
var reformed = {}
var reform = rawPlayers.map((tm, idx) => {

	tm.teamspitcher.match(/[A-Z]/) ? tm.resolved = tm.teamspitcher : null
	tm.teams.match(/[A-Z]/) ? tm.resolved = tm.teams  : null

return tm
})

var parsedRef = reform.map((tmb, idx) => {
	delete tmb.teams
	delete tmb.teamspitcher

	return tmb
})


var sqlArr=[]
var sqlObj = {}
var allArr = []

for(var i = 0; i < parsedRef.length; i++) {
	if(!parsedRef[i].resolved){
			parsedRef.splice(i, 1)
	}

var tst = parsedRef[i].resolved.split(',')
for(let j = 0; j < tst.length; j++){
	sqlObj = {
		rawPlayers: parsedRef[i].player,
		team: tst[j], 
		
}
console.log(sqlObj)
    connection.query(`INSERT INTO  playerteam (player, team) 
        VALUES ("${sqlObj.rawPlayers}","${sqlObj.team}")`) 
connection.end
}

}


return sqlArr

parsedRef()
























