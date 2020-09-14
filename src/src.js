const fs = require('fs')
const path = require('path')

const print = (lines, teamName) => {
    let teamPath = __dirname + `/../teams/${teamName}`
    if(!fs.existsSync(teamPath)) {
        fs.writeFileSync(__dirname + `/../teams/${teamName}` + '_lines.json', JSON.stringify(lines, null, 4))
    }
}

const dirCheck = (path) => {

}

const parseTeamName = (str) => {

}

module.exports = {
    print,
    parseTeamName
}