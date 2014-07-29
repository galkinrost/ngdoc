angular.module('Module1', [])
    .service('one', [function () {
    }])
    .service('two', function () {
    });

angular.module('Module1')
    .controller('FirstCtrl', [function () {
    }])
    .controller('SecondCtrl', function () {
    });

angular.module('Module2', ['Module1'])
    .service('three', [function () {
    }])
    .service('four', function () {
    });

angular.module('Module2')
    .controller('ThirdCtrl', [function () {
    }])
    .controller('FourthCtrl', function () {
    });
