function removeNumbers(token) {
  return /[^\d]/.test(token);
}

function trimPunctuation(token) {
  return token.replace(/[.,!?]/g, '');
}

function createDictionary(words) {
  return words.reduce(function(previous, current) {
    if (previous[current]) {
      previous[current] += 1;
    } else {
      previous[current] = 1;
    }
    return previous;
  }, {});
}

function convertDictionaryToArray(dict) {
  var words = [];
  for (var key in dict) {
    words.push({ word: key, count: dict[key] });
  }
  return words;
}

function sortByTwoKeys(words, primary, secondary) {
  return words.sort(function(a, b) {
    if (a[primary] < b[primary]) {
      return 1;
    }
    if (a[primary] > b[primary]) {
      return -1;
    }
    if (a[secondary] < b[secondary]) {
      return -1;
    }
    if (a[secondary] > b[secondary]) {
      return 1;
    }
    return 0;
  });
}

module.exports = {
  removeNumbers: removeNumbers,
  trimPunctuation: trimPunctuation,
  createDictionary: createDictionary,
  convertDictionaryToArray: convertDictionaryToArray,
  sortByTwoKeys: sortByTwoKeys
};
