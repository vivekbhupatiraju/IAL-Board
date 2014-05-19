'use strict';

angular.module('ialDashboardApp')
	.controller('MyTeamCtrl', function ($scope) {
	$scope.members = [
	  {first: 'Evan',    last: 'Cohen'},
	  {first: 'Kendall', last: 'Morgan'},
	  {first: 'Ashish',  last: 'Chadwandi'},
	  {first: 'Kartik',  last: 'Rishi'}
	];

});
