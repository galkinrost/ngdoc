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

    describe('module', function () {
        var ast;
        beforeEach(function () {
            var str = fs.readFileSync(__dirname + '/fixture/module.js', 'utf8');
            ast = esprima.parse(str);
        });

        it('#moduleParser', function () {
            var result = parser.moduleParser(ast);
            expect(result, 'ast_module.js');
        });

        it('#moduleFormatter', function () {
            var moduleAsts = parser.moduleParser(ast);

            var result = parser.moduleFormatter(moduleAsts);
            expect(result, 'data_module.js');
        });
    });

    describe('services',function(){
        var ast;
        beforeEach(function () {
            var str = fs.readFileSync(__dirname + '/fixture/services.js', 'utf8');
            ast = esprima.parse(str);
        });

        it('#serviceParser', function () {
            var result = parser.serviceParser(ast);
            expect(result, 'ast_service.js');
        });

        it('#serviceFormatter', function () {
            var serviceAsts = parser.serviceParser(ast);

            var result = parser.serviceFormatter(serviceAsts);
            expect(result, 'data_service.js');
        });
    });

});