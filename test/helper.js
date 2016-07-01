process.env.NODE_ENV = 'test';
var chaiAsPromised = require('chai-as-promised');

var chai = require('chai');
chai.use(chaiAsPromised);
global.expect = chai.expect;
