const getResults = (userOne, userTwo) => {
  if (userOne === userTwo) {
    return "IT'S A TIE!";
  } else if (
    (userOne === "rock" && userTwo === "scissor") ||
    (userOne === "paper" && userTwo === "rock") ||
    (userOne === "scissor" && userTwo === "paper")
  ) {
    return "YOU WIN!";
  } else {
    return "YOUR OPPONENT WINS!";
  }
};

const randomizeWeapon = () => {
  const weapons = ["rock", "paper", "scissor"];
  const randomWeapon = weapons[Math.floor(Math.random() * weapons.length)];
  return randomWeapon;
};

const playGame = (userOne, userTwo) => {
  let winner = getResults(userOne, userTwo);
  return {
    winner: winner,
  };
};

export { playGame, randomizeWeapon };
