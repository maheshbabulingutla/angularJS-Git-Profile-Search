
/*
//modules and controllers
 var myApp = angular.module("myApp", []).controller("mainController", function($scope) {
 
var employee = {
  firstname: "MaheshBabu",
  lastname: "Lingutla",
  Gender:"Male"
}
  $scope.employee = employee; // getting employee details using employee object

var tvshow = {
  name: "Arrow",
  genre:"Action, Mystery and Drama",
  image: "/Users/maheshbabulingutla/Desktop/AngularJSPractice/images/arrow.jpg" //ng-src example
}
  $scope.tvshow = tvshow;

//ng-repeat example

var employees = [
  {firstname:"mahesh", lastname:"Lingutla", gender:"male", salary:6000},
  {firstname:"sowjanya", lastname:"chavvan", gender:"female", salary:7000},
  {firstname:"sandhya", lastname:"devi", gender:"female", salary:8000}
];
$scope.employees = employees;

//nested ng-repeat example
var tvshows = [
  {
    name: "Arrow",
    cast: [
      {name: "stephen"},
      {name:"katie"},
      {name:"thea Queen"}
    ]
  },
    {
    name: "Flash",
    cast: [
      {name: "Barry Allen"},
      {name:"Felicity"},
      {name:"Cisco Ramone"}
    ]
  },
    {
    name: "Lucifer",
    cast: [
      {name: "Morning Star"},
      {name:"Michael"},
      {name:"Decker Detective"}
    ]
  }
];
$scope.tvshows = tvshows;

var technologies = [
  {name: "HTML5", likes:0, dislikes:0},
  {name: "CSS", likes:0, dislikes:0},
  {name: "JavaScript", likes:0, dislikes:0},
  {name: "AngularJS", likes:0, dislikes:0}
];

$scope.incrementlikes = function(technology){
  technology.likes++;
}

$scope.incrementdislikes = function(technology){
  technology.dislikes++;
}
$scope.technologies = technologies;

var employeesTest = [
  {name:"mahesh", dateofbirth: new Date("December 7, 1990"), gender:"male", salary:6000, city:"Dekalb"},
  {name:"sowjanya", dateofbirth: new Date("December 24, 1990"), gender:"female", salary:7000, city:"Dekalb"},
  {name:"sandhya", dateofbirth: new Date("August 27, 1988"), gender:"female", salary:8000, city:"Lousiana"},
  {name:"ravi", dateofbirth: new Date("september 16, 1988"), gender:"female", salary:4000, city:"Troy"},
  {name:"vikram", dateofbirth: new Date("november 1, 1988"), gender:"female", salary:3500, city:"Bangalore"}
];

$scope.search = function(item){
  if($scope.searchText == undefined){
    return true;
  }
  else{
    if
    (item.name.toLowerCase().indexof($scope.searchText.toLowerCase()) != -1 ||
      item.city.toLowerCase().indexof($scope.searchText.toLowerCase()) != -1)
      {
        return true;
      }
  }
  return false;
}

$scope.employeesTest = employeesTest;
$scope.sortColumn = "name";
$scope.reverseSort = false;

$scope.sortData = function(column){
  $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
  $scope.sortColumn = column;
}

$scope.getSortClass = function(column){
  if($scope.sortColumn == column) {
    return $scope.reverseSort ? 'arrow-down' : 'arrow-up'
  }
  return '';
}


var genderFilters = [
  {name:"mahesh", gender:1, city:"tirupati"},
  {name:"sowjanya", gender:2, city:"Proddutur"},
  {name:"Mustafa", gender:3, city:"Bangalore"}
  ];

  $scope.genderFilters = genderFilters;

  $scope.message = "mahesh";
  $scope.rowLimit = 3;

 }); */

 // December 03rd AngularJS tutorial Practicing 

 /* var myApp = angular.module("myApp", []);

 myApp.controller("mainController", function($scope){
    
    var employees = [
      {name:"mahesh", gender:1, city:"tirupati"},
      {name:"sowjanya", gender:2, city:"Proddutur"},
      {name:"ravi", gender:1, city:"hyderabad"},
    ];

    $scope.employees = employees;
    $scope.employeeView = "/Users/maheshbabulingutla/Desktop/AngularJSPractice/employee.html";

    var tvshows = [
  {
    name: "Arrow",
    cast: [
      {name: "stephen"},
      {name:"katie"},
      {name:"thea Queen"}
    ]
  },
    {
    name: "Flash",
    cast: [
      {name: "Barry Allen"},
      {name:"Felicity"},
      {name:"Cisco Ramone"}
    ]
  },
    {
    name: "Lucifer",
    cast: [
      {name: "Morning Star"},
      {name:"Michael"},
      {name:"Decker Detective"}
    ]
  }

    ];

    $scope.tvshows = tvshows;
 
});

*/



var myApp = angular.module("myApp",[]);

myApp.controller("mainController", function($scope, github, $interval, $log, $location, $anchorScroll){

var onSuccessUser = function(data){
  $scope.user = data;
  github.getRepos($scope.user)
  .then(onRepos, onError);
}

var onRepos = function(data){
  $scope.repos = data;

};

var onError = function(reason){
  $scope.error = reason.data;
}

//count down function for setting the time
var decrementCountDown = function(){
  $scope.countdown -= 1;
  if($scope.countdown < 1){
    $scope.search($scope.gituser);
  }
};

var countDownInterval = null;

var startCountDown = function(){
 countDownInterval = $interval(decrementCountDown, 1000, $scope.countdown);
}

// count down function created for search option in git profile Viewer

$scope.search = function(gituser) {
  $log.info("searching for " + gituser)
  github.getUser(gituser)
  .then(onSuccessUser, onError);
  if(countDownInterval) {
    $interval.cancel(countDownInterval);
    $scope.countdown = null;
  }
};

$scope.sortColumn = "name";
$scope.reverseSort = false;

$scope.sortData = function(column){
  $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
  $scope.sortColumn = column;
} 

$scope.getSortClass = function(column){
  if($scope.sortColumn == column) {
    return $scope.reverseSort ? 'arrow-down' : 'arrow-up'
  }
  return '';
}

$scope.gituser = "";
$scope.message = "GitHub Profile Viewer";
$scope.createdUser = "Mahesh Lingutla"
$scope.repoSortOrder = "-stargazers_count";
$scope.countdown = 5;


});