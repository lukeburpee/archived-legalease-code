(function ()
{
    'use strict';

    angular
        .module('app.pages.timeline', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.pages_timeline', {
                url      : '/pages/timeline',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/pages/timeline/timeline.html',
                        controller : 'TimelineController as vm'
                    }
                },
                resolve  : {
                    Timeline: function (apiResolver)
                    {
                        return apiResolver.resolve('timeline.page1@get');
                    }
                },
                bodyClass: 'timeline'
            })
            .state('app.pages_timeline_left', {
                url      : '/pages/timeline-left',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/pages/timeline/timeline-left.html',
                        controller : 'TimelineController as vm'
                    }
                },
                resolve  : {
                    Timeline: function (apiResolver)
                    {
                        return apiResolver.resolve('timeline.page1@get');
                    }
                },
                bodyClass: 'timeline-left'
            })
            .state('app.pages_timeline_right', {
                url      : '/pages/timeline-right',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/pages/timeline/timeline-right.html',
                        controller : 'TimelineController as vm'
                    }
                },
                resolve  : {
                    Timeline: function (apiResolver)
                    {
                        return apiResolver.resolve('timeline.page1@get');
                    }
                },
                bodyClass: 'timeline-right'
            });
    }

})();