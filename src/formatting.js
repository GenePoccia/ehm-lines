const parse = require('./src')

const lines = (unformattedLines) => {
    let lines = {
        lineOne : {
          LW: unformattedLines.LINE_1[2],
          C: unformattedLines.LINE_1[4],
          RW: unformattedLines.LINE_1[6],
          LD: unformattedLines.LINE_1[8],
          RD: unformattedLines.LINE_1[10],
          TACTIC: parse.parseTactics(unformattedLines.LINE_1[11]),
          SHIFT: parse.parseTime(unformattedLines.LINE_1[12]),
        },
        lineTwo : {
          LW: unformattedLines.LINE_2[2],
          C:  unformattedLines.LINE_2[4],
          RW:  unformattedLines.LINE_2[6],
          LD:  unformattedLines.LINE_2[8],
          RD:  unformattedLines.LINE_2[10],
          TACTIC: parse.parseTactics(unformattedLines.LINE_2[11]),
          SHIFT: parse.parseTime(unformattedLines.LINE_2[12]),
        },
        lineThree : {
          LW: unformattedLines.LINE_3[2],
          C:  unformattedLines.LINE_3[4],
          RW:  unformattedLines.LINE_3[6],
          LD:  unformattedLines.LINE_3[8],
          RD:  unformattedLines.LINE_3[10],
          TACTIC: parse.parseTactics(unformattedLines.LINE_3[11]),
          SHIFT: parse.parseTime(unformattedLines.LINE_3[12]),
        },
        lineFour : {
          LW: unformattedLines.LINE_4[2],
          C:  unformattedLines.LINE_4[4],
          RW:  unformattedLines.LINE_4[6],
          TACTIC: unformattedLines.LINE_4[11],
          SHIFT: unformattedLines.LINE_4[12],
          TACTIC: parse.parseTactics(unformattedLines.LINE_4[11]),
          SHIFT: parse.parseTime(unformattedLines.LINE_4[12]),
        },
        PP1 : {
          LW: unformattedLines.PP_1[2],
          C:  unformattedLines.PP_1[4],
          RW:  unformattedLines.PP_1[6],
          LD:  unformattedLines.PP_1[8],
          RD:  unformattedLines.PP_1[10],
          TACTIC: parse.parseTactics(unformattedLines.PP_1[11]),
          SHIFT: parse.parseTime(unformattedLines.PP_1[12]),
        },
        PP2 : {
          LW: unformattedLines.PP_2[2],
          C:  unformattedLines.PP_2[4],
          RW:  unformattedLines.PP_2[6],
          LD:  unformattedLines.PP_2[8],
          RD:  unformattedLines.PP_2[10],
          TACTIC: parse.parseTactics(unformattedLines.PP_2[11]),
          SHIFT: parse.parseTime(unformattedLines.PP_2[12]),
        },
        PK1 : {
          LW: unformattedLines.PK_1[2],
          C:  unformattedLines.PK_1[4],
          LD:  unformattedLines.PK_1[6],
          RD:  unformattedLines.PK_1[8],
          TACTIC: parse.parseTactics(unformattedLines.PK_1[11]),
          SHIFT: parse.parseTime(unformattedLines.PK_1[12]),
        },
        PK2 : {
          LW: unformattedLines.PK_2[2],
          C:  unformattedLines.PK_2[4],
          LD:  unformattedLines.PK_2[6],
          RD:  unformattedLines.PK_2[8],
          TACTIC: parse.parseTactics(unformattedLines.PK_2[11]),
          SHIFT: parse.parseTime(unformattedLines.PK_2[12]),
        },
        goalies: {
          starter : unformattedLines.startingGoalie[2],
          backup: unformattedLines.backupGoalie[2]
        }
      }
      return lines;
}

module.exports = {
    lines
}