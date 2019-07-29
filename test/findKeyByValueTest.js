const chai = require('chai');
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', () => {
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  const bestMoviesByGenre = {
    action: "End Game",
    comedy: "22 Jump Street",
    drama:  "Hateful Eight"
  };

  
  it('should return "drama"', () => {
    chai.expect(findKeyByValue(bestTVShowsByGenre, "The Wire")).to.eql('drama');
  });

  it('should return undefined', () => {
    chai.expect(findKeyByValue(bestTVShowsByGenre, "That '70s Show")).to.eql(undefined);
  });
  
  it('should return undefined for empty input', () => {
    chai.expect(findKeyByValue(bestTVShowsByGenre, "")).to.eql(undefined);
  });
  
  it('should return "action"', () => {
    chai.expect(findKeyByValue(bestMoviesByGenre, "End Game")).to.eql('action');
  });
  it('should return "comedy"', () => {
    chai.expect(findKeyByValue(bestMoviesByGenre, "22 Jump Street")).to.eql('comedy');
  });
  it('should return "drama"', () => {
    chai.expect(findKeyByValue(bestMoviesByGenre, "Hateful Eight")).to.eql('drama');
  });

});