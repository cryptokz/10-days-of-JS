/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  const vowels = "aeiou";
  let consonants = [];
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      console.log(s[i]);
    } else {
      consonants += s[i] + "\n";
    }
  }
  console.log(consonants);
}
