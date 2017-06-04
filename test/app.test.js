const expect = require('chai').expect;
const {total} = require('./sum.js');

describe ('total', function () {
  it('should add two positive numbers', function() {
      const result = total(2,2)
      expect(result).to.equal(4)
  })
});
