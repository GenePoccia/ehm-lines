const parseLines = (params) => {
    for(let i = 0; i < params.range.length; i ++) {
        params.sheets.spreadsheets.values.get({
          spreadsheetId: params.sheetId,
          range: params.range[i]
        }, (err, res) => {
          if (err) return console.log('The API returned an error: ' + err);
          const rows = res.data.values;
          if (rows.length) {
            let LINE_1 = rows[1]
            let LINE_2 = rows[2]
            let LINE_3 = rows[3]
            let LINE_4 = rows[4]
            let PP_1 = rows[6]
            let PP_2 = rows[7]
            let PK_1 = rows[9]
            let PK_2 = rows[10]
            let startingGoalie = rows[12]
            let backupGoalie = rows[13]
    
            //odd = names (column 1,3,5,7,9)
            //even = ID (column 2,4,6,8,10)
            let lines = {
              lineOne : {
                LW: LINE_1[1],
                C: LINE_1[3],
                RW: LINE_1[5],
                LD: LINE_1[7],
                RD: LINE_1[9]
              },
              lineTwo : {
                LW: LINE_2[1],
                C:  LINE_2[3],
                RW:  LINE_2[5],
                LD:  LINE_2[7],
                RD:  LINE_2[9]
              },
              lineThree : {
                LW: LINE_3[1],
                C:  LINE_3[3],
                RW:  LINE_3[5],
                LD:  LINE_3[7],
                RD:  LINE_3[9]
              },
              lineFour : {
                LW: LINE_4[1],
                C:  LINE_4[3],
                RW:  LINE_4[5],
              },
              PP1 : {
                LW: PP_1[1],
                C:  PP_1[3],
                RW:  PP_1[5],
                LD:  PP_1[7],
                RD:  PP_1[9]
              },
              PP2 : {
                LW: PP_2[1],
                C:  PP_2[3],
                RW:  PP_2[5],
                LD:  PP_2[7],
                RD:  PP_2[9]
              },
              PK1 : {
                LW: PK_1[1],
                C:  PK_1[3],
                LD:  PK_1[5],
                RD:  PK_1[7]
              },
              PK2 : {
                LW: PK_2[1],
                C:  PK_2[3],
                LD:  PK_2[5],
                RD:  PK_2[7]
              },
              goalies: {
                starter : startingGoalie[1],
                backup: backupGoalie[1]
              }
            }
    
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