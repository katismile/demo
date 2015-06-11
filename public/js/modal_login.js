!function(ng) {
    ng.module('app')
        .controller('ModalLogin', function($scope, $mdDialog) {
            $scope.alert = '';
            $scope.user = {};

            $scope.showAdvanced = function (ev) {
                $mdDialog.show({
                    controller: DialogController,
                    templateUrl: 'js/login.html',
                    parent: angular.element(document.body),
                    targetEvent: ev
                });
            };
        });
}(window.angular);

DialogController.$inject = [ '$scope', '$mdDialog', 'login' ];

function DialogController($scope, $mdDialog, login) {
    $scope.cancel = function() {
        $mdDialog.cancel();
    };
    $scope.save = function() {
        console.log('user', $scope.user);
        $mdDialog.hide();
    };
}