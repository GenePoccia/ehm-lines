const lines = (unformattedLines) => {
    let lines = {
        lineOne : {
          LW: unformattedLines.LINE_1[1],
          C: unformattedLines.LINE_1[3],
          RW: unformattedLines.LINE_1[5],
          LD: unformattedLines.LINE_1[7],
          RD: unformattedLines.LINE_1[9]
        },
        lineTwo : {
          LW: unformattedLines.LINE_2[1],
          C:  unformattedLines.LINE_2[3],
          RW:  unformattedLines.LINE_2[5],
          LD:  unformattedLines.LINE_2[7],
          RD:  unformattedLines.LINE_2[9]
        },
        lineThree : {
          LW: unformattedLines.LINE_3[1],
          C:  unformattedLines.LINE_3[3],
          RW:  unformattedLines.LINE_3[5],
          LD:  unformattedLines.LINE_3[7],
          RD:  unformattedLines.LINE_3[9]
        },
        lineFour : {
          LW: unformattedLines.LINE_4[1],
          C:  unformattedLines.LINE_4[3],
          RW:  unformattedLines.LINE_4[5],
        },
        PP1 : {
          LW: unformattedLines.PP_1[1],
          C:  unformattedLines.PP_1[3],
          RW:  unformattedLines.PP_1[5],
          LD:  unformattedLines.PP_1[7],
          RD:  unformattedLines.PP_1[9]
        },
        PP2 : {
          LW: unformattedLines.PP_2[1],
          C:  unformattedLines.PP_2[3],
          RW:  unformattedLines.PP_2[5],
          LD:  unformattedLines.PP_2[7],
          RD:  unformattedLines.PP_2[9]
        },
        PK1 : {
          LW: unformattedLines.PK_1[1],
          C:  unformattedLines.PK_1[3],
          LD:  unformattedLines.PK_1[5],
          RD:  unformattedLines.PK_1[7]
        },
        PK2 : {
          LW: unformattedLines.PK_2[1],
          C:  unformattedLines.PK_2[3],
          LD:  unformattedLines.PK_2[5],
          RD:  unformattedLines.PK_2[7]
        },
        goalies: {
          starter : unformattedLines.startingGoalie[1],
          backup: unformattedLines.backupGoalie[1]
        }
      }
      return lines;
}

module.exports = {
    lines
}