const format = require("./formatters/linesFormatter");
const lnsFormat = require("./formatters/lnsFormatter")
const output = require("./outputs/NhlOutput");
const substitute = require ('./formatters/substitute')


const parseLines = (params) => {
  for (let i = 0; i < params.range.length; i++) {
    params.sheets.spreadsheets.values.get(
      {
        spreadsheetId: params.sheetId,
        range: params.range[i],
      },
      (err, res) => {
        if (err) return console.log("The API returned an error: " + err);
        const rows = res.data.values;
        if (rows.length) {
          let unformattedLines = format.sheetToLines(rows)
          let linesJSON = format.linesToJson(unformattedLines);
          let linesLNS = lnsFormat.jsonToLns(linesJSON);
          //get team (Takes the first 3 letters from ranges.json (ANA!A:M) to correspond to the tab)
          let NhlTeamName = substitute.teamName(params.range[i]);

          //store NHL Lines
          output.print(linesLNS, NhlTeamName);
          //store NHL lines in json for tests
          output.printTests(linesJSON, NhlTeamName)

        } else {
          console.log("No data found.");
        }
      }
    );
  }
};

module.exports = {
  parseLines,
};
