'use strict';

angular.module('ialDashboardApp')
  .controller('DashboardCtrl', function ($scope, $routeParams) {
  	var categories = {
  		"team-wellness"        : "Team Wellness",
  		"tecnique+stragegy"    : "Technique & Strategy",
  		"coaching-craft"       : "Coaching Craft",
  		"operations"           : "Operations",
  		"fitness+conditioning" : "Fitness & Conditioning"
  	};

  	var notes = [
  		{
  			dates    : "Sept 28 - Nov 1",
  			desc     : "Assessing the mood...",
  			interval : "Practice Session",
  			unit     : "Rating",
  			calc     : "Most recent",
  			comp     : "Avg. for Wk",
  			note     : "This is a note!"
  		},
  		{
  			dates    : "Sept 30 - Nov 15",
  			desc     : "Coaching Strategy",
  			interval : "Scrimmage",
  			unit     : "Rating",
  			calc     : "Most recent",
  			comp     : "Avg. for Wk",
  			note     : "This is the other note!"
  		}
  	];

  	$scope.notes = notes;

  	var noteIndex; //tracking active note index
  	$scope.getNote = function(index){
  		noteIndex = index;
  		$scope.activeNote = $scope.notes[index].note;
  	}

  	$scope.saveNote = function(){
  		console.log(noteIndex, $scope.activeNote);
  		$scope.notes[noteIndex].note = $scope.activeNote;
  	}

  	if($routeParams.category){
  		$scope.category = categories[$routeParams.category];
  	}else{
        $('#graph-container').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Goal Completion'
            },
            subtitle: {
                text: 'Current Progress'
            },
            xAxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Progress'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Team Wellness',
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    
            }, {
                name: 'Technique & Strategy',
                data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
    
            }, {
                name: 'Coaching Craft',
                data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
    
            }, {
                name: 'Operations',
                data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
    
            }]
        });   

  	}//endelse

  });
