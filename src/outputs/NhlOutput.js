const fs = require("fs");

const print = (lines, teamName) => {
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
