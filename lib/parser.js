var astra = require('astra');
var patterns = require('./astra_patterns');
var lodash = require('lodash');

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

function moduleFormatter(moduleAsts) {
    var modules = [];

    function add(data) {
        var module = lodash.find(modules, {
            name: data.name
        });

        if (!module) {
            module = {
                name: data.name,
                dependencies: [],
                ast: []
            };
            modules.push(module);
        }

        if (data.elements) {
            data.elements.forEach(function (element) {
                module.dependencies.push(element.value);
            });
        }

        if (data.ast) {
            module.ast.push(data.ast);
        }

        return module;
    }

    function formatAst(ast) {
        astra(ast)
            .when(patterns.moduleArguments, function (chunk) {
                var module = {};
                module.name = chunk.arguments[0].value;
                module.ast = ast;
                if (chunk.arguments.length > 1) {
                    module.elements = chunk.arguments[1].elements;
                }

                add(module);
            })
            .run();
    }

    moduleAsts.forEach(formatAst);
    return modules;
}

exports.moduleFormatter = moduleFormatter;