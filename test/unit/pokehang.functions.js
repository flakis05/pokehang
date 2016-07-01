var expect = require('chai').expect;
var randomNumber = require('../../public/javascripts/pokehang.functions').randomNumber;
var isUnique = require('../../public/javascripts/pokehang.functions').isUnique;

describe('#randomNumber', function() {
  it('should return a number between 1 and 721', function() {
    expect(randomNumber()).to.be.above(0);
    expect(randomNumber()).to.be.below(722);
    expect(randomNumber()).to.be.above(0);
    expect(randomNumber()).to.be.below(722);
    expect(randomNumber()).to.be.above(0);
    expect(randomNumber()).to.be.below(722);
    expect(randomNumber()).to.be.above(0);
    expect(randomNumber()).to.be.below(722);
    expect(randomNumber()).to.be.above(0);
    expect(randomNumber()).to.be.below(722);
    expect(randomNumber()).to.be.above(0);
    expect(randomNumber()).to.be.below(722);
    expect(randomNumber()).to.be.above(0);
    expect(randomNumber()).to.be.below(722);
    expect(randomNumber()).to.be.above(0);
    expect(randomNumber()).to.be.below(722);
  });
});
describe('#isUnique', function() {
  it('should return true when given an array and a character when that character does not exist in the array', function() {
    expect(isUnique([], 'b')).to.be.true;
  });
  it('should return false when given an array and a charater that does exist in the array', function() {
    expect(isUnique(['a'], 'a')).to.be.false;
  });
  it('should return false when given an array and a charater that does exist in the array', function() {
    expect(isUnique(['a', 'b', 'c', 'd'], 'a')).to.be.false;
  });
});
