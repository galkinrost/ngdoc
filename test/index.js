var chai = require('chai');
var esprima = require('esprima');
var fs = require('fs');
var parser = require('../lib/parser');

describe('Parser', function () {

    it('#moduleParser', function () {
        var str = fs.readFileSync(__dirname + '/fixture/module.js', 'utf8');
        var expect = fs.readFileSync(__dirname + '/expects/parser/module.js', 'utf8');

        var ast = esprima.parse(str);

        var result = parser.moduleParser(ast);
        chai.expect(JSON.stringify(result)).to.equal(expect);
    });
});