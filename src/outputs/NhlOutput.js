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

const printTests = (lines, teamName) => {
  let nhlTeamTestDir = __dirname + `/../../tests/NhlTeamsTests/`
  let ahlTeamTestDir = __dirname + `/../../tests/AhlTeamsTests/`

  if(!fs.existsSync(nhlTeamTestDir)) {
    fs.mkdirSync(nhlTeamTestDir)
  }
  if(!fs.existsSync(ahlTeamTestDir)) {
    fs.mkdirSync(ahlTeamTestDir)
  }

  let teamPath = __dirname + `/../../tests/NhlTeamsTests/${teamName}`;

  if (!fs.existsSync(teamPath)) {
    fs.writeFileSync(
      __dirname + `/../../tests/NhlTeamsTests/${teamName}` + "_lines.json",
      lines
    );
  }
}


module.exports = {
    print,
    printTests
  };
