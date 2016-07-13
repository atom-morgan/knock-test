var KnockParser = require('../knock-parser');

describe('KnockParser', function() {
  describe('averageLength', function() {
    it('should calculate average length of all words', function() {
      expect(KnockParser.averageLength('The quick brown fox jumped over the lazy dogs.')).toEqual(4);
    });

    it('should calculate average length of all words excluding numbers', function() {
      expect(KnockParser.averageLength('The quick brown fox jumped over the 123 lazy dogs.')).toEqual(4);
    });
  });

  describe('mostCommonWord', function() {
    it('should find the most common word', function() {
      expect(KnockParser.mostCommonWord('The quick brown fox jumped over the lazy dogs.')).toEqual('the');
    });

    it('should find the most common word excluding numbers', function() {
      expect(KnockParser.mostCommonWord('At 10 in the morning 10 quick brown foxes jumped over a few of the lazy dogs.')).toEqual('the');
    });

    it('should find the most common word in alphabetical order if there\'s a tie', function() {
      expect(KnockParser.mostCommonWord('At 10 in the morning 10 quick brown foxes jumped over at least a few of the lazy dogs.')).toEqual('at');
    });
  });

  describe('medianFrequency', function() {
    it('should find one word with the median frequency in an odd distribution of words', function() {
      expect(KnockParser.medianFrequency('At 10 in the morning 10 quick brown foxes jumped over at least a few of the lazy dogs.')).toEqual('in');
    });

    it('should find two words with the median frequency in an even distribution of words', function() {
      expect(KnockParser.medianFrequency('At 10 in the morning 10 brown foxes jumped over at least a few of the lazy dogs.')).toEqual(['foxes', 'in']);
    });
  });
});
