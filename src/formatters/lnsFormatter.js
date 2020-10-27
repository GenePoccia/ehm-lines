const jsonToLns = (json) => {
 let str =
 ` `+ json.goalies.starter+ ` \r\n`+
 ` ` +json.goalies.backup+ ` \r\n`+
 ` ` +json.lineOne.LD+ ` \r\n`+
 ` ` +json.lineTwo.LD+ ` \r\n`+
 ` `+ json.lineThree.LD+ ` \r\n`+
 ` `+ json.lineOne.RD+ ` \r\n`+
 ` `+ json.lineTwo.RD+ ` \r\n`+
 ` `+ json.lineThree.RD+ ` \r\n`+
 ` `+ json.lineOne.LW+ ` \r\n`+
 ` `+ json.lineTwo.LW+ ` \r\n`+
 ` `+ json.lineThree.LW+ ` \r\n`+
 ` `+ json.lineFour.LW+ ` \r\n`+
 ` `+ json.lineOne.C+ ` \r\n`+
 ` `+ json.lineTwo.C+ ` \r\n`+
 ` `+ json.lineThree.C+ ` \r\n`+
 ` `+ json.lineFour.C+ ` \r\n`+
 ` `+ json.lineOne.RW+ ` \r\n`+
 ` `+ json.lineTwo.RW+ ` \r\n`+
 ` `+ json.lineThree.RW+ ` \r\n`+
 ` `+ json.lineFour.RW+ ` \r\n`+
 ` `+ json.PP1.LD+ ` \r\n`+
 ` `+ json.PP1.RD+ ` \r\n`+
 ` `+ json.PP1.LW+ ` \r\n`+
 ` `+ json.PP1.C+ ` \r\n`+
 ` `+ json.PP1.RW+ ` \r\n`+
 ` `+ json.PP2.LD+ ` \r\n`+
 ` `+ json.PP2.RD+ ` \r\n`+
 ` `+ json.PP2.LW+ ` \r\n`+
 ` `+ json.PP2.C+ ` \r\n`+
 ` `+ json.PP2.RW+ ` \r\n`+
 ` `+ json.PK1.LD+ ` \r\n`+
 ` `+ json.PK1.RD+ ` \r\n`+
 ` `+ json.PK1.LW+ ` \r\n`+
 ` `+ json.PK1.C+ ` \r\n`+
 ` `+ json.goalies.starter+ ` \r\n`+
 ` `+ json.PK2.LD+ ` \r\n`+
 ` `+ json.PK2.RD+ ` \r\n`+
 ` `+ json.PK2.LW+ ` \r\n`+
 ` `+ json.PK2.C+ ` \r\n`+
 ` `+json.goalies.starter+ ` \r\n`+
 ` `+json.lineOne.TACTIC+ `  `+ json.lineTwo.TACTIC+ `  `+ json.lineThree.TACTIC+ `  `+ json.lineFour.TACTIC+ `  `+ json.PP1.TACTIC+ `  `+ json.PP2.TACTIC+ `  `+ json.PK1.TACTIC+ `  `+ json.PK2.TACTIC+ ` \r\n`+
 ` `+json.lineOne.SHIFT + `  ` + json.lineTwo.SHIFT + `  ` + json.lineThree.SHIFT + `  ` + json.lineFour.SHIFT + `  ` + json.PP1.SHIFT + `  ` + json.PP2.SHIFT + `  ` + json.PK1.SHIFT + `  ` + json.PK2.SHIFT+ ` \r\n`

 return str
}

module.exports = {
    jsonToLns
}