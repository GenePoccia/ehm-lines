const teamName = (arg) => {
  let teamName = arg.split("");
  return teamName[0] + teamName[1] + teamName[2];
};


const tactics = (tactic) => {
  if (
    tactic === "run and gun" ||
    tactic === "shooting" ||
    tactic === "aggressive"
  )
    return "0";
  if (
    tactic === "passing" ||
    tactic === "screen and shoot" ||
    tactic === "loose"
  )
    return "1";
  if (
    tactic === "dump and chase" ||
    tactic === "passing" ||
    tactic === "passive box"
  )
    return "2";
  if (
    tactic === "hit and grind" ||
    tactic === "crash the net" ||
    tactic === "small"
  )
    return "3";
  if (
    tactic === "neutral zone trap" ||
    tactic === "shoot from point" ||
    tactic === "tight"
  )
    return "4";
};

const time = (time) => {
  if (time === "10") return "1";
  if (time === "20") return "2";
  if (time === "30") return "3";
  if (time === "40") return "4";
  if (time === "50") return "5";
  if (time === "60") return "6";
  if (time === "70") return "7";
  if (time === "80") return "8";
  if (time === "90") return "9";
};

module.exports = {
  teamName,
  tactics,
  time,
};
