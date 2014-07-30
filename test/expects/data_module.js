[
    {"name": "Module1", "dependencies": [], "ast": [
        {"type": "ExpressionStatement", "expression": {"type": "CallExpression", "callee": {"type": "MemberExpression", "computed": false, "object": {"type": "CallExpression", "callee": {"type": "MemberExpression", "computed": false, "object": {"type": "CallExpression", "callee": {"type": "MemberExpression", "computed": false, "object": {"type": "Identifier", "name": "angular"}, "property": {"type": "Identifier", "name": "module"}}, "arguments": [
            {"type": "Literal", "value": "Module1", "raw": "'Module1'"},
            {"type": "ArrayExpression", "elements": []}
        ]}, "property": {"type": "Identifier", "name": "service"}}, "arguments": [
            {"type": "Literal", "value": "one", "raw": "'one'"},
            {"type": "ArrayExpression", "elements": [
                {"type": "FunctionExpression", "id": null, "params": [], "defaults": [], "body": {"type": "BlockStatement", "body": []}, "rest": null, "generator": false, "expression": false}
            ]}
        ]}, "property": {"type": "Identifier", "name": "service"}}, "arguments": [
            {"type": "Literal", "value": "two", "raw": "'two'"},
            {"type": "FunctionExpression", "id": null, "params": [], "defaults": [], "body": {"type": "BlockStatement", "body": []}, "rest": null, "generator": false, "expression": false}
        ]}},
        {"type": "ExpressionStatement", "expression": {"type": "CallExpression", "callee": {"type": "MemberExpression", "computed": false, "object": {"type": "CallExpression", "callee": {"type": "MemberExpression", "computed": false, "object": {"type": "CallExpression", "callee": {"type": "MemberExpression", "computed": false, "object": {"type": "Identifier", "name": "angular"}, "property": {"type": "Identifier", "name": "module"}}, "arguments": [
            {"type": "Literal", "value": "Module1", "raw": "'Module1'"}
        ]}, "property": {"type": "Identifier", "name": "controller"}}, "arguments": [
            {"type": "Literal", "value": "FirstCtrl", "raw": "'FirstCtrl'"},
            {"type": "ArrayExpression", "elements": [
                {"type": "FunctionExpression", "id": null, "params": [], "defaults": [], "body": {"type": "BlockStatement", "body": []}, "rest": null, "generator": false, "expression": false}
            ]}
        ]}, "property": {"type": "Identifier", "name": "controller"}}, "arguments": [
            {"type": "Literal", "value": "SecondCtrl", "raw": "'SecondCtrl'"},
            {"type": "FunctionExpression", "id": null, "params": [], "defaults": [], "body": {"type": "BlockStatement", "body": []}, "rest": null, "generator": false, "expression": false}
        ]}}
    ]},
    {"name": "Module2", "dependencies": ["Module1"], "ast": [
        {"type": "ExpressionStatement", "expression": {"type": "CallExpression", "callee": {"type": "MemberExpression", "computed": false, "object": {"type": "CallExpression", "callee": {"type": "MemberExpression", "computed": false, "object": {"type": "CallExpression", "callee": {"type": "MemberExpression", "computed": false, "object": {"type": "Identifier", "name": "angular"}, "property": {"type": "Identifier", "name": "module"}}, "arguments": [
            {"type": "Literal", "value": "Module2", "raw": "'Module2'"},
            {"type": "ArrayExpression", "elements": [
                {"type": "Literal", "value": "Module1", "raw": "'Module1'"}
            ]}
        ]}, "property": {"type": "Identifier", "name": "service"}}, "arguments": [
            {"type": "Literal", "value": "three", "raw": "'three'"},
            {"type": "ArrayExpression", "elements": [
                {"type": "FunctionExpression", "id": null, "params": [], "defaults": [], "body": {"type": "BlockStatement", "body": []}, "rest": null, "generator": false, "expression": false}
            ]}
        ]}, "property": {"type": "Identifier", "name": "service"}}, "arguments": [
            {"type": "Literal", "value": "four", "raw": "'four'"},
            {"type": "FunctionExpression", "id": null, "params": [], "defaults": [], "body": {"type": "BlockStatement", "body": []}, "rest": null, "generator": false, "expression": false}
        ]}},
        {"type": "ExpressionStatement", "expression": {"type": "CallExpression", "callee": {"type": "MemberExpression", "computed": false, "object": {"type": "CallExpression", "callee": {"type": "MemberExpression", "computed": false, "object": {"type": "CallExpression", "callee": {"type": "MemberExpression", "computed": false, "object": {"type": "Identifier", "name": "angular"}, "property": {"type": "Identifier", "name": "module"}}, "arguments": [
            {"type": "Literal", "value": "Module2", "raw": "'Module2'"}
        ]}, "property": {"type": "Identifier", "name": "controller"}}, "arguments": [
            {"type": "Literal", "value": "ThirdCtrl", "raw": "'ThirdCtrl'"},
            {"type": "ArrayExpression", "elements": [
                {"type": "FunctionExpression", "id": null, "params": [], "defaults": [], "body": {"type": "BlockStatement", "body": []}, "rest": null, "generator": false, "expression": false}
            ]}
        ]}, "property": {"type": "Identifier", "name": "controller"}}, "arguments": [
            {"type": "Literal", "value": "FourthCtrl", "raw": "'FourthCtrl'"},
            {"type": "FunctionExpression", "id": null, "params": [], "defaults": [], "body": {"type": "BlockStatement", "body": []}, "rest": null, "generator": false, "expression": false}
        ]}}
    ]}
]