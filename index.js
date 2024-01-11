function superbowlWin(record) {
    const winningGame = record.find(game => game.result === "W");
  
    if (winningGame) {
      return winningGame.year;
    } else {
      return undefined;
    }
  }

  const games = [
    { year: 2019, result: "L" },
    { year: 2020, result: "W" },
    { year: 2021, result: "L" },
  ];
  
  console.log(superbowlWin(games)); 
  