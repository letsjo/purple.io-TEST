const foo = (str) => {
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  return [...str].filter((letter) => vowel.includes(letter)).length;
}

console.log(foo("abracadabra"));