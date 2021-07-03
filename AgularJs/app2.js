angular.module("editphar", ['ngRoute', 'firebase'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/index_Phar_edit.html/:key', {
            templataURL: "index_Phar/index_Phar_edit.html",
            controller: "RUDController"

        });
    }])
    .controller('RUDController', function ($scope, $firebaseArray, $firebaseObject,$routeParams) {

        var id = $routeParams.key;
        var param1 = $location.search().id;
        var refup = firebase.database().ref("Pharmacy/"+id);
        $scope.phar = $firebaseObject(refup);
        $scope.editPhar = function () {
            console.log('done');
        }

        //var url = $location.absUrl().split('?')[0];
        var i = 10;
        console.log(i);


    });