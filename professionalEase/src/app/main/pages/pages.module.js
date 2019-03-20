(function ()
{
    'use strict';

    angular
        .module('app.pages', [
            'app.pages.auth.login',
            'app.pages.auth.register',
            'app.pages.auth.register-v2',
            'app.pages.auth.forgot-password',
            'app.pages.auth.reset-password',
            'app.pages.auth.lock',
            'app.pages.coming-soon',
            'app.pages.error-404',
            'app.pages.error-500',
            'app.pages.invoice',
            'app.pages.maintenance',
            'app.pages.profile',
            'app.pages.search',
            'app.pages.timeline'
        ])
        .config(config);

    /** @ngInject */
})();