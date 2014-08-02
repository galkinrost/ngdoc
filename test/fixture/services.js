angular.module('Module', [])
    .service('one', [function () {
    }])
    .service('two', ['one', function (one) {
    }])
    .service('three', function (two) {
    });