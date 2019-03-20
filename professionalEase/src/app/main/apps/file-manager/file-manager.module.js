(function ()
{
    'use strict';

    angular
        .module('app.file-manager', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.file-manager', {
            url      : '/document-manager',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/apps/file-manager/file-manager.html',
                    controller : 'FileManagerController as vm'
                }
            },
            resolve  : {
                Documents: function (apiResolver)
                {
                    return apiResolver.resolve('fileManager.documents@get');
                }
            },
            bodyClass: 'file-manager',
            authenticate: true
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/apps/file-manager');

        // Navigation
        msNavigationServiceProvider.saveItem('apps.LegalEase', {
            title : 'LegalEase',
            icon : 'icon-gavel',
            weight: 4
        });
        msNavigationServiceProvider.saveItem('apps.LegalEase.file-manager', {
            title : 'Document Manager',
            icon  : 'icon-folder',
            state : 'app.file-manager',
            weight: 1
        });
    }

})();