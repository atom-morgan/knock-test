var Util = require('../util');

describe('Util', function() {
  describe('removeNumbers', function() {
    it('should return false if the input is a number', function() {
      expect(Util.removeNumbers('10')).toEqual(false);
    });

    it('should return false if the input is not a number', function() {
      expect(Util.removeNumbers('test')).toEqual(true);
    });
  });

  describe('trimPunctuation', function() {
    it('should trim trailing commas', function() {
      expect(Util.trimPunctuation('finally,')).toEqual('finally');
    });

    it('should trim trailing periods', function() {
      expect(Util.trimPunctuation('done.')).toEqual('done');
    });

    it('should trim trailing periods', function() {
      expect(Util.trimPunctuation('done!')).toEqual('done');
    });

    it('should trim trailing periods', function() {
      expect(Util.trimPunctuation('done?')).toEqual('done');
    });
  });

  describe('createDictionary', function() {
    it('should create an object with key-value pairs for words and occurrences', function() {
      expect(Util.createDictionary(['hello', 'world', 'apple', 'hello'])).toEqual({
        'world': 1,
        'apple': 1,
        'hello': 2
      });
    });
  });

  describe('convertDictionaryToArray', function() {
    var words = {
        'world': 1,
        'apple': 1,
        'hello': 2
    };
    it('should create an array of objects', function() {
      expect(Util.convertDictionaryToArray(words)).toEqual([
        { word: 'world', count: 1 },
        { word: 'apple', count: 1 },
        { word: 'hello', count: 2 }
      ]);
    });
  });

  describe('sortByTwoKeys', function() {
    var words = [
      { word: 'grape', count: 1 },
      { word: 'apple', count: 3 },
      { word: 'banana', count: 4 },
      { word: 'cherry', count: 3 },
      { word: 'watermelon', count: 2 }
    ];
    var sortedWords = [
      { word: 'banana', count: 4 },
      { word: 'apple', count: 3 },
      { word: 'cherry', count: 3 },
      { word: 'watermelon', count: 2 },
      { word: 'grape', count: 1 }
    ];
    it('should sort by the primary key and the secondary key in the case of a tie', function() {
      expect(Util.sortByTwoKeys(words, 'count', 'word')).toEqual(sortedWords);
    });
  });
});
