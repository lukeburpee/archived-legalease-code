(function ()
{
    'use strict';

    angular
        .module('app.pages.auth.login')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($location, Auth)
    {
    	var vm = this;
    	angular.extend(vm, {
    		name: 'LoginController',
            user: {},
    		login: function() {
    			Auth.login(vm.user)
    			.then(function(){
    				$location.path('/dashboard-project');
    			})
    			.catch(function(err) {
    				vm.error = err;
    			});
    		}
    	});
    };
})();