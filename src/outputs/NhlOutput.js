const fs = require("fs");

const print = (lines, teamName) => {
  let teamPath = __dirname + `/../teams/${teamName}`;
  if (!fs.existsSync(teamPath)) {
    fs.writeFileSync(
      __dirname + `/../../teams/${teamName}` + "_lines.lns",
      lines
    );
  }
};


module.exports = {
    print
  };
