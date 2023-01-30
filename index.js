// const btn = document.getElementById('btn');

// let details = [];

// const addDetails = (e) => {
//     e.preventDefault();
//     let detail = {
//         fullName: document.getElementById('fullname').value,
//         phone: document.getElementById('phone').value,
//         address: document.getElementById('address').value,
//     }
//     details.push(detail);
//     document.querySelector('form').reset();

//     console.warn('added', { details });
//     let pre = document.querySelector('#showing-details pre');
//     pre.textContent = '' + JSON.stringify(details, '/t', 1);

// }

// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('btn').addEventListener('click', addDetails);
// });

var formApp = angular.module("formApp", []);

formApp.controller('formCtrl', function($scope) {

    $scope.list = [];

    $scope.SubmitForm = function() {
        $scope.list.push({ Text: "firstName :" + $scope.firstName, done: false });
        $scope.firstName = '';
        $scope.list.push({ Text: "Phone No. :" + $scope.phone, done: false });
        $scope.phone = '';
        $scope.list.push({ Text: "Address :" + $scope.address, done: false });
        $scope.address = '';
    };
})