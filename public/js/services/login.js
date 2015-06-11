!function(ng) {
    ng.module('app')
        .service('login', login);


    login.$inject = ['$scope', '$resource'];
    function login($scope, $resource) {
        return $resource('/login', {}, {
            auth: {
                method: 'POST'
            }
        });
    }
}(window.angular);