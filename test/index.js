var chai = require('chai');
var esprima = require('esprima');
var path = require('path');
var fs = require('fs');
var parser = require('../lib/parser');

function expect(obj, fixtureFilename) {
    var expected = fs.readFileSync(path.join(__dirname, 'expects', fixtureFilename), 'utf8');
    expected = expected.replace(/(\r\n|\n|\r|\s)/gm, '');
    chai.expect(JSON.stringify(obj)).to.equal(expected);
}

describe('Parser', function () {

    it('#moduleParser', function () {
        var str = fs.readFileSync(__dirname + '/fixture/module.js', 'utf8');

        var ast = esprima.parse(str);

        var result = parser.moduleParser(ast);

        expect(result, 'module.js');
    });
});