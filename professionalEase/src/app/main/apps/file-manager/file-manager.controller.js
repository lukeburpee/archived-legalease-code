(function ()
{
    'use strict';

    angular
        .module('app.file-manager')
        .controller('FileManagerController', FileManagerController);

    /** @ngInject */
    function FileManagerController($mdSidenav, Documents, Auth, $mdDialog, $mdMedia)
    {
        var vm = this;
        vm.currentUser = Auth.getUser();
        vm.userName = vm.currentUser.firstName + " " + vm.currentUser.lastName;
        vm.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
        vm.status = '  ';

        // Data
        vm.projects = vm.currentUser.projects;
        vm.selectedProject = 1;
        vm.currentView = 'list';
        vm.showDetails = true;

        vm.path = Documents.data.path;
        vm.folders = Documents.data.folders;
        vm.files = Documents.data.files;
        vm.selected = vm.files[0];

        // Methods
        vm.select = select;
        vm.toggleDetails = toggleDetails;
        vm.toggleSidenav = toggleSidenav;
        vm.toggleView = toggleView;
        vm.addFile = function(ev, $scope) {
            var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
            $mdDialog.show({
                controller: uploadController,
                templateUrl: 'app/main/apps/file-manager/upload-dialog.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true,
                fullscreen: useFullScreen
            })
            .then(function(answer) {
                vm.status = 'You said the information was "' + answer + '".';
            }, function() {
                vm.status = 'You cancelled the dialog.';
            });
            vm.$watch(function() {
                return $mdMedia('xs') || $mdMedia('sm');
            }, function(wantsFullScreen) {
                vm.customFullscreen = (wantsFullScreen === true);
            });
        };

        vm.viewDocument = function(ev, $scope) {
            var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
            $mdDialog.show({
                controller: documentViewerController,
                templateUrl: 'app/main/apps/file-manager/documentViewer.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true,
                fullscreen: useFullScreen
            })
            .then(function(answer) {
                vm.status = 'You said the information was "' + answer + '".';
            }, function() {
                vm.status = 'You cancelled the dialog.';
            });
            vm.$watch(function() {
                return $mdMedia('xs') || $mdMedia('sm');
            }, function(wantsFullScreen) {
                vm.customFullscreen = (wantsFullScreen === true);
            });
        };    

        //////////

        /**
         * Select an item
         *
         * @param item
         */
        function select(item)
        {
            vm.selected = item;
        }

        /**
         * Toggle details
         *
         * @param item
         */
        function toggleDetails(item)
        {
            vm.selected = item;
            toggleSidenav('details-sidenav');
            toggleSidenav('document-viewer');
        }

        /**
         * Toggle sidenav
         *
         * @param sidenavId
         */
        function toggleSidenav(sidenavId)
        {
            $mdSidenav(sidenavId).toggle();
        }

        /**
         * Toggle view
         */
        function toggleView()
        {
            vm.currentView = vm.currentView === 'list' ? 'grid' : 'list';
        }

    }
function documentViewerController($scope, $http) {
}
function uploadController($scope, $mdDialog, FileUploader, Auth) {
  var currentUser = $scope.currentUser = Auth.getUser();
  $scope.userId = String(currentUser._id);
  $scope.uploadForm = {
    userId : String($scope.currentUser._id),
    clientName : '',
    caseName : '',
    reviewName : '',
    uploadType : '',
    projectPrefix : ''
  };
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
  $scope.counter = 0;

  var uploader = $scope.uploader = new FileUploader({
    alias: 'fileArray'
  });
  $scope.uploader.onBeforeUploadItem = onBeforeUploadItem;
  function onBeforeUploadItem(item) {
    item.url = $scope.url;
    item.formData.push({
      userId: String($scope.currentUser._id),
      clientName: $scope.uploadForm.clientName,
      reviewName: $scope.uploadForm.reviewName,
      caseName: $scope.uploadForm.caseName,
      projectPrefix: $scope.uploadForm.projectPrefix,
      OriginalName: $scope.originalName
    });
  };
  $scope.updateUrl = function(form) {
    $scope.url = '/api/' + String($scope.uploadForm.uploadType) + '/' + String($scope.uploadForm.clientName) + '/upload';
    uploader.url.push({url: $scope.url});
  };
}
})();

