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

function serviceParser(ast) {
    var services = [];
    astra(ast)
        .when(patterns.service, function (chunk) {
            services.push(chunk);
        })
        .run();
    return services;
}

exports.serviceParser = serviceParser;

function serviceFormatter(serviceAsts) {
    var services = [];

    function add(data) {
        var module = lodash.find(services, {
            name: data.name
        });

        if (!module) {
            module = {
                name: data.name,
                dependencies: [],
                ast: []
            };
            services.push(module);
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
        function getDependenciesFromArray(array) {
            var dependencies = [];
            array.forEach(function (item) {
                if (item.type === 'Literal') {
                    dependencies.push(item.value);
                }
            });
            return dependencies;
        }

        function getDependenciesFromFunction(params) {
            return lodash.pluck(params, 'name');
        }

        if (ast.arguments.length < 2) {
            throw new Error('Service declaration should have two arguments');
        }

        var service = {};
        service.name = ast.arguments[0].value;
        service.ast = ast;

        if (ast.arguments[1].type === 'ArrayExpression') {
            service.dependencies = getDependenciesFromArray(ast.arguments[1].elements);
        } else if (ast.arguments[1].type === 'FunctionExpression') {
            service.dependencies = getDependenciesFromFunction(ast.arguments[1].params);
        } else {
            throw new Error('The second argument of service declaration should be an array or a function');
        }

        services.push(service);
    }

    serviceAsts.forEach(formatAst);
    return services;
}

exports.serviceFormatter = serviceFormatter;