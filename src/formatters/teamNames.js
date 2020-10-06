const get = (arg) => {
  let teamName = arg.split("");
  return teamName[0] + teamName[1] + teamName[2];
};

module.exports = {
  get,
};
