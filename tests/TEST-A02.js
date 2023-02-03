const foo = (ids) => {
  let number = 0;
  ids.every((v, i) => (ids.includes(i) ? number += 1 : false));
  return number;
}

console.log(foo([0, 1, 2, 4]));
console.log(foo([0, 1, 2, 3, 4, 5, 6]));