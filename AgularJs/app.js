var app = angular.module("CRUD", ['firebase']);

app.controller("CRUDController", function ($scope, $firebaseArray, $firebaseObject) {
    
    /*var ref = firebase.database().ref();
    $scope.name = $firebaseObject(ref);*/
    //--------------------ADD TO Pharmacy Table--------------------
    var ref = firebase.database().ref('Pharmacy');

    $scope.pharmacy = $firebaseArray(ref);

    $scope.addPhar = function () {
        $scope.pharmacy.$add($scope.phar);
    }
    //--------------------ADD TO Medicine Table--------------------
    var ref01 = firebase.database().ref('Medicine');

    $scope.medicine = $firebaseArray(ref01);

    $scope.addMedi = function () {
        $scope.medicine.$add($scope.Medi);
    }
    //--------------------Fetch DATA From Select Attribut--------------------
    $scope.daata = {
        singleSelect: null,
        option1: 'phar.name'
    };

    $scope.daataa = {
        singleSelect: null,
        option2: 'Medi.name'
    };
    //--------------------ADD TO disponibility Table--------------------
    var ref02 = firebase.database().ref('disponibility');

    $scope.disponi = $firebaseArray(ref02);

    $scope.addDispo = function () {
        $scope.disponi.$add($scope.Dispo);
    }
   //--------------------READ FROM Pharmacy Table--------------------
    $scope.data = $firebaseArray(ref);
    //-------------------READ FROM Medicine Table--------------------
    $scope.dataa = $firebaseArray(ref01);
    //-------------------READ FROM disponibility Table--------------------
    $scope.daataa = $firebaseArray(ref02);
    //--------------------Fetch DATA From Select Attribut--------------------
    $scope.pharData = '';
    $scope.getData = function (phar) {
        $scope.pharData = angular.copy(phar);
    };
    //--------------------EDIT FROM Pharmacy Table--------------------
    /*$scope.id1 = $scope.data.singleSelect;
    var ref03 = firebase.database().ref("Pharmacy");
    $scope.Parmacy = $firebaseObject(ref03);

    $scope.editPharmacy = function () {
        var ref03 = firebase.database().ref("Pharmacy/" + id1);
        ref03.update({
            adress: $scope.phar.address,
            name: $scope.phar.name,
            id: $scope.phar.id,
        })
    }*/
    //--------------------EDIT FROM Medicine Table--------------------
    /*$scope.id2 = $scope.dataa.singleSelect;
    var ref04 = firebase.database().ref("Medicine");
    $scope.Parmacy = $firebaseObject(ref04);

    $scope.editPharmacy = function () {
        var ref04 = firebase.database().ref("Medicine/" + id2);
        ref04.update({
            manufacturer: $scope.Medi.manufacturer,
            name: $scope.Medi.name,
            price: $scope.Medi.price,
        })
    }*/
    //--------------------EDIT FROM disponibility Table--------------------
    /*$scope.id3 = $scope.daataa.singleSelect;
    var ref05 = firebase.database().ref("disponibility");
    $scope.Parmacy = $firebaseObject(ref05);

    $scope.editPharmacy = function () {
        var ref05 = firebase.database().ref("disponibility/" + id3);
        ref05.update({
            Medname: $scope.dispo.Medname,
            pahrname: $scope.dispo.,
            quentity: $scope.dispo.quentity,
        })
    }*/
    //--------------------DELETE FROM Pharmacy Table--------------------
    var ref06 = firebase.database().ref('Pharmacy');
    $scope.pharmacy1 = $firebaseArray(ref06);

    $scope.deletePharmacy = function (info) {
        $scope.data.$remove(info);
        console.log(info);
    }
    //--------------------DELETE FROM Medicine Table--------------------
    var ref07 = firebase.database().ref('Medicine');
    $scope.medcine = $firebaseArray(ref07);

    $scope.deletedrug = function (info) {
        //$scope.data.$remove(info);
        console.log(info);
    }
    //--------------------DELETE FROM disponibility Table--------------------
    var ref08 = firebase.database().ref('disponibility');
    $scope.disponible = $firebaseArray(ref08);

    $scope.deletedispo = function (info) {
        //$scope.disponible.$remove(info);
        console.log(info);
    }
    //--------------------EXPORT DATA TO EXCEL--------------------
    $scope.exportData = function () {
        var blob = new Blob([document.getElementById('dataTable').innerHTML], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
        });
        FileSaver.saveAs(blob, "report.xls");
    };
    


})
//--------------------GET EDIT ID FROM URL USING ROUTE PARAMS--------------------
/*app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('index_Phar_edit:id', {
        templataURL: "index_Phar_edit.html",
        controller: "CRUDController2"

    });
}])*/
/*.controller('RUDController', function ($scope, $firebaseArray, $firebaseObject,$routeParams) {

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


    });*/