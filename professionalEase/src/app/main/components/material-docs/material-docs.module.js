(function ()
{
    'use strict';

    /**
     * Replace those for demo assets
     * img/                     >>>            assets/angular-material-assets/img/
     * 'icons                   >>>            'assets/angular-material-assets/icons/
     */
    angular
        .module('app.components.material-docs', ['ngMaterial', 'ngMessages'])
        .config(config);
})();