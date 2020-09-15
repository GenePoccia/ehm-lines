const format = require('./formatting')
const parseLines = (params) => {
    for(let i = 0; i < params.range.length; i ++) {
        params.sheets.spreadsheets.values.get({
          spreadsheetId: params.sheetId,
          range: params.range[i]
        }, (err, res) => {
          if (err) return console.log('The API returned an error: ' + err);
          const rows = res.data.values;
          if (rows.length) {
            let unformattedLines = {
                LINE_1 : rows[1],
                LINE_2 : rows[2],
                LINE_3 : rows[3],
                LINE_4 : rows[4],
                PP_1 : rows[6],
                PP_2 : rows[7],
                PK_1 : rows[9],
                PK_2 : rows[10],
                startingGoalie : rows[12],
                backupGoalie : rows[13]
            }

            let formattedLines = format.lines(unformattedLines)
            console.log(formattedLines)
    
            //odd = names (column 1,3,5,7,9)
            //even = ID (column 2,4,6,8,10)
            
    
            //get team (Takes the first 3 letters from ranges.json (ANA!A:K) to correspond to the tab)
            // let teamName = ranges[i][0] + ranges[i][1] + ranges[i][2]
    
            //store lines
            // saveLines.print(lines, teamName)
    
          } else {
            console.log('No data found.');
          }
        });
      }
}

module.exports = {
    parseLines
}