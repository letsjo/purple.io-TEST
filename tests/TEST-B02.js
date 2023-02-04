const foo = (arr) => {
  return arr.indexOf([...arr].sort((a, b) => b - a)[1]);
};

console.log(foo([5, 1, 2]));