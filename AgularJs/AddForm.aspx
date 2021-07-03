<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="AddForm.aspx.vb" Inherits="AgularJs.AddForm" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <script src="Scripts/angular.js"></script>
    <script src="angularfire.min.js"></script>
    <script src="firebase.js"></script>
    <script>
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        var firebaseConfig = {
            apiKey: "AIzaSyCobVILMsZ5B0k9X_hbJxvvQWCocz2je04",
            authDomain: "crud-angular-9e89f.firebaseapp.com",
            projectId: "crud-angular-9e89f",
            storageBucket: "crud-angular-9e89f.appspot.com",
            messagingSenderId: "810307653755",
            appId: "1:810307653755:web:c89de69a635fdaeac9d2de",
            measurementId: "G-QHQCGK135V"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
    </script>
    <script src="app.js"></script>
    
    <title></title>
</head>
<body ng-app="CRUD" >
    <!--
    <form id="form1" runat="server" ng-submit="addPharmacy()" >
        <table>
            <tbody>
                Pharmacy Id<br />
                <input type="number" name="id_p" placeholder="Id" ng-model="phar.id"><br />
                Pharmacy Name<br />
                <input type="text" name="name_p" placeholder="Pharmacy Name" ng-model="phar.name"><br />
                <input type="submit" name="sub_p" />
        </table>
        -->
        <div ng-controller="CRUDController">

            <input type="text" ng-model="user.name">
            <button ng-click="add()">Add User</button>

            {{names}}
        </div>
    </form>
</body>
</html>
