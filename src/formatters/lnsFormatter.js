const jsonToLns = (json) => {
 let str =
 ` `+ json.goalies.starter+ ` ` + '\n'+
 ` ` +json.goalies.backup+ ` \n`+
 ` ` +json.lineOne.LD+ ` \n`+
 ` ` +json.lineTwo.LD+ ` \n`+
 ` `+ json.lineThree.LD+ ` \n`+
 ` `+ json.lineOne.RD+ ` \n`+
 ` `+ json.lineTwo.RD+ ` \n`+
 ` `+ json.lineThree.RD+ ` \n`+
 ` `+ json.lineOne.LW+ ` \n`+
 ` `+ json.lineTwo.LW+ ` \n`+
 ` `+ json.lineThree.LW+ ` \n`+
 ` `+ json.lineFour.LW+ ` \n`+
 ` `+ json.lineOne.C+ ` \n`+
 ` `+ json.lineTwo.C+ ` \n`+
 ` `+ json.lineThree.C+ ` \n`+
 ` `+ json.lineFour.C+ ` \n`+
 ` `+ json.lineOne.RW+ ` \n`+
 ` `+ json.lineTwo.RW+ ` \n`+
 ` `+ json.lineThree.RW+ ` \n`+
 ` `+ json.lineFour.RW+ ` \n`+
 ` `+ json.PP1.LD+ ` \n`+
 ` `+ json.PP1.RD+ ` \n`+
 ` `+ json.PP1.LW+ ` \n`+
 ` `+ json.PP1.C+ ` \n`+
 ` `+ json.PP1.RW+ ` \n`+
 ` `+ json.PP2.LD+ ` \n`+
 ` `+ json.PP2.RD+ ` \n`+
 ` `+ json.PP2.LW+ ` \n`+
 ` `+ json.PP2.C+ ` \n`+
 ` `+ json.PP2.RW+ ` \n`+
 ` `+ json.PK1.LD+ ` \n`+
 ` `+ json.PK1.RD+ ` \n`+
 ` `+ json.PK1.LW+ ` \n`+
 ` `+ json.PK1.C+ ` \n`+
 ` `+ json.goalies.starter+ ` \n`+
 ` `+ json.PK2.LD+ ` \n`+
 ` `+ json.PK2.RD+ ` \n`+
 ` `+ json.PK2.LW+ ` \n`+
 ` `+ json.PK2.C+ ` \n`+
 ` `+json.goalies.starter+ ` \n`+
 ` `+json.lineOne.TACTIC+ ` `+ json.lineTwo.TACTIC+ ` `+ json.lineThree.TACTIC+ ` `+ json.lineFour.TACTIC+ ` `+ json.PP1.TACTIC+ ` `+ json.PP2.TACTIC+ ` `+ json.PK1.TACTIC+ ` `+ json.PK2.TACTIC+ ` \n`+
 ` `+json.lineOne.SHIFT + ` ` + json.lineTwo.SHIFT + ` ` + json.lineThree.SHIFT + ` ` + json.lineFour.SHIFT + ` ` + json.PP1.SHIFT + ` ` + json.PP2.SHIFT + ` ` + json.PK1.SHIFT + ` ` + json.PK2.SHIFT+ ` `

 return str
}

module.exports = {
    jsonToLns
}