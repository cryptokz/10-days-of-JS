function getLetter(s) {
  let letter;

  switch (true) {
    case ["a", "e", "i", "o", "u"].includes(letter):
      letter = "A";
      break;
    case ["b", "c", "d", "f", "g"].includes(letter):
      letter = "B";
      break;
    case ["h", "j", "k", "l", "m"].includes(letter):
      letter = "C";
      break;
    case ["n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"].includes(
      letter
    ):
      letter = "D";
      break;
  }
  return letter;
}
