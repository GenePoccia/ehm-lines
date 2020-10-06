const sheetToLines = (rows) => {
  let lines = {
    LINE_1: rows[1],
    LINE_2: rows[2],
    LINE_3: rows[3],
    LINE_4: rows[4],
    PP_1: rows[6],
    PP_2: rows[7],
    PK_1: rows[9],
    PK_2: rows[10],
    startingGoalie: rows[12],
    backupGoalie: rows[13],
  };
  return lines;
};

module.exports = {
    sheetToLines
}