require('../helper');
var http = require('http'),
    server;

before(function() {
  server = http.createServer(require('../../app'));
  server.listen(0);
  browser.baseUrl = 'http://localhost:' + server.address().port;
});

beforeEach(function() {
  return browser.ignoreSynchronization = true;
});

after(function(){
  server.close();
});

describe('#pokehang', function() {
  it('should have all elements', function() {
    browser.get('/');
    // element(by.tagName('h1')).getText().then(function(text) {
    //   expect(text).to.equal('Hang Some Pokemon!!!');
    // });
    // ele
    expect(element(by.tagName('h1')).isPresent()).to.eventually.be.true;
    expect(element(by.css('div.spaceContainer')).isPresent()).to.eventually.be.true;
    expect(element(by.css('div.selectedContainer')).isPresent()).to.eventually.be.true;
    expect(element(by.css('div.spriteContainer')).isPresent()).to.eventually.be.true;

  });

  it('should have an equal number of empty spaces as the name of the pokemon', function(){
    element(by.tagName('h6')).getText().then(function(length) {
      element.all(by.css('div.space')).count().then(function(count){
        expect(count).to.equal(Number(length));
      });
    });
  });

  it('should allow users to hit a key and see that key in selectedContainer', function(){
    element(by.tagName('body')).sendKeys('a');
    expect(element(by.css('[code="65"]')).isPresent()).to.eventually.be.true;
  })

  it('should not allow user to repeat a key from the selectedContainer', function(){
    element(by.tagName('body')).sendKeys('a');
    element(by.tagName('body')).sendKeys('a');
    expect(element.all(by.css('[code="65"]')).count()).to.eventually.equal(1);
  })

  it('should add the key where appropriate if it exists in the pokemon name', function() {
    browser.get('/');
    element.all(by.css('div.space')).getAttribute('letter').then(function(letters) {
      console.log(letters);
      var pokemon = letters.join('');
      // for (var i = 0; i < letters.length; i++) {
      //   element(by.tagName('body')).sendKeys(letters[i]);
      // }
      element(by.tagName('body')).sendKeys(letters[0]).then(function(wtf) {
        expect(element(by.css('[answer="yesss"]')).getText()).to.eventually.equal(letters[0])
      })
    });
  });
});
