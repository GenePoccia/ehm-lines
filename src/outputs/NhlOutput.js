const fs = require("fs");

const print = (lines, teamName) => {
  let nhlTeamDir = __dirname + `/../../NhlTeams/`
  let ahlTeamDir = __dirname + `/../../AhlTeams/`

  if(!fs.existsSync(nhlTeamDir)) {
    fs.mkdirSync(nhlTeamDir)
  }
  if(!fs.existsSync(ahlTeamDir)) {
    fs.mkdirSync(ahlTeamDir)
  }

  let teamPath = __dirname + `/../../NhlTeams/${teamName}`;
  if (!fs.existsSync(teamPath)) {
    fs.writeFileSync(
      __dirname + `/../../NhlTeams/${teamName}` + "_lines.lns",
      lines
    );
  }
};


module.exports = {
    print
  };
