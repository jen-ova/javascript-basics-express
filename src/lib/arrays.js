const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.join(",");
};

const csvStringToArray = string => {
  return string.split(",");
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  let array2 = array.concat(element);
  return array2;
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(string => string.split("").reverse().join(""));
};

const onlyEven = numbers => {
  return numbers.filter(number => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  return array.filter(element => element !== array[index]);
};
 
const elementsStartingWithAVowel = strings => {
  return strings.filter(str => /^[aeiou]/i.test(str))
};

const removeSpaces = string => {
  string = string.replace(/\s/g,'')
  return string;
};

const sumNumbers = numbers => {
  let initialValue = 0;
  let sum = numbers.reduce((acc, totalValue) => acc + totalValue, initialValue);
  return sum;
};

const sortByLastLetter = strings => {
  const reversed = reverseWordsInArray(strings);
  reversed.sort();
  return reverseWordsInArray(reversed);
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
