'use strict';

angular.module('ialDashboardApp')
  .controller('CalendarCtrl', function ($scope) {
    $(".responsive-calendar").responsiveCalendar({
          time: '2014-05',
          events: {
            "2014-04-30": {"number": 5, "url": "http://w3widgets.com/responsive-slider"},
            "2014-04-26": {"number": 1, "url": "http://w3widgets.com"}, 
            "2014-05-03":{"number": 1}, 
            "2014-06-12": {}}
        });
  });
