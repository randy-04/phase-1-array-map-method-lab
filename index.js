const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = () => {
  return tutorials.map((tutorial) => {
    // form an array of words separated using .split
    const newWords = tutorial.split(" ");

    const casing = newWords.map((newWord) => newWord.charAt(0).toUpperCase() + newWord.slice(1))

    // console.log(casing)
    return casing.join(" ")
  })
}

console.log(titleCased())