var astra = require('astra');
var patterns = require('./astra_patterns');

function moduleParser(ast) {
    var modules = [];
    astra(ast)
        .when(patterns.module, function (chunk) {
            modules.push(chunk);
        })
        .run();
    return modules;
}

exports.moduleParser = moduleParser;