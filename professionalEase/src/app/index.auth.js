(function ()
{
    'use strict';

    angular
        .module('fuse')
        .factory('authInterceptor', 
        	function($rootScope, $q, $cookieStore, $location) {
        		return {
        			request: function(config) {
        				config.headers = config.headers || {};
        				if($cookieStore.get('token')) {
        					config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        				}
        				return config;
        			},
        			responseError: function (response) {
        				if (response.status === 401) {
        					$location.path('/login');
        					$cookieStore.remove('token');
        					return $q.reject(response);
        				}
        				else {
        					return $q.reject(response);
        				}
        			}
        		};
        	})
        .run(function($rootScope, $location, Auth) {
            $rootScope.$on('$stateChangeStart', function (event, next) {
                Auth.isReadyLogged().catch(function() {
                    if (next.authenticate) {
                        $location.path('/login');
                    }
                });
            });
        });

})();