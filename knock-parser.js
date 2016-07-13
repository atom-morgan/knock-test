var Util = require('./util');

/* Solutions */
function averageLength(input) {
  var tokens = input.toLowerCase().split(' ');

  var words = tokens
                .filter(Util.removeNumbers)
                .map(Util.trimPunctuation);

  var total = words.reduce(function(previous, current) {
    return previous + current.length;
  }, 0);

  return Math.floor(total / words.length);
}

function mostCommonWord(input) {
  var tokens = input.toLowerCase().split(' ');
  var wordList = [];

  var words = tokens
                .filter(Util.removeNumbers)
                .map(Util.trimPunctuation);

  var dictionary = Util.createDictionary(words);
  wordList = Util.convertDictionaryToArray(dictionary);
  wordList = Util.sortByTwoKeys(wordList, 'count', 'word');

  return wordList[0].word;
}

function medianFrequency(input) {
  var tokens = input.toLowerCase().split(' ');
  var wordList = [];

  var words = tokens
                .filter(Util.removeNumbers)
                .map(Util.trimPunctuation);

  var dictionary = Util.createDictionary(words);
  wordList = Util.convertDictionaryToArray(dictionary);
  wordList = Util.sortByTwoKeys(wordList, 'count', 'word');

  var middle = Math.floor((wordList.length - 1) / 2);
  if (wordList.length % 2 !== 0) {
    return wordList[middle].word;
  }
  return [wordList[middle].word, wordList[middle + 1].word];
}

module.exports = {
  averageLength: averageLength,
  mostCommonWord: mostCommonWord,
  medianFrequency: medianFrequency
};
