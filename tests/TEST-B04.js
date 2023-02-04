const foo = (numbers) => {
  const odd = [];
  const even = [];
  let isOdd = true;
  numbers.split(' ').some((number, index) => {
    number % 2 === 1 ? odd.push(index) : even.push(index);
    if (odd.length >= 2 && even.length === 1) {
      isOdd = false;
      return true;
    }
    if (even.length >= 2 && odd.length === 1) {
      isOdd = true;
      return true;
    }
  })
  return isOdd ? odd[0] + 1 : even[0] + 1;
}

console.log(foo("2 4 7 8 10"));
console.log(foo("1 2 1 1"));