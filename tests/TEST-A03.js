const foo = (games) => {
  return games.reduce((score, game) => {
    const [A, B] = game.split(':').map(Number);
    if (A > B) return score + 3;
    if (A === B) return score + 1;
    return score;
  }, 0);
}

console.log(foo(["3:1", "2:2", "1:3"]));