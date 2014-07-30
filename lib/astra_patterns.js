exports.module = {
    type: 'ExpressionStatement',
    '*': {
        property: {
            type: 'Identifier',
            name: 'module'
        }
    }
};

exports.moduleArguments = [
    {
        callee: {
            property: {
                type: 'Identifier',
                name: 'module'
            }
        },
        arguments: [
            {
                type: 'Literal'
            }
        ]
    },
    {
        callee: {
            property: {
                type: 'Identifier',
                name: 'module'
            }
        },
        arguments: [
            {
                type: "ArrayExpression",
                elements: []
            }
        ]
    }
];
