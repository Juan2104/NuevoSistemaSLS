var app = angular.module('Codigo.list.ctrl', [])
       .controller('CodigoCtrl', [
           '$scope',
           '$filter',
           '$routeParams',
           '$location',
           'CodigoService',
           'NgTableParams',
           function ($scope, $filter, $routeParams, $location, CodigoService, NgTableParams) {
               $scope.initCodigo = function () {
                   $scope.getCodigo();
               }

               $scope.getCodigo = function () {
                   $scope.isLoading = true;
                   CodigoService.getCodigo().then(function (response) {
                       $scope.dataToFilter = angular.copy(response.data);
                       $scope.Tipo = new NgTableParams({ count: 20 }, { counts: [], dataset: response.data });
                       $scope.isLoading = false;
                   }).catch(function (result) {
                       $scope.isLoading = false;
                   });
               }

               $scope.CleanCodigo = function () {
                   $scope.isSave = true;
                   $scope.Codigo = {};
               }

               $scope.getCodigo = function () {
                   CodigoService.getCodigo().then(function (response) {
                       $scope.CodigoTable = new NgTableParams({ count: 20 }, { counts: [], dataset: response.data });
                   }).catch(function (result) {
                   });
               }

               $scope.loadCodigo = function (row) {
                   $scope.Codigo = angular.copy(row);
               }

               $scope.saveCodigo = function () {
                   CodigoService.saveCodigo($scope.Codigo).then(function (response) {
                       $scope.isSuccess = true;
                       $scope.message = "Se ha agregado el Codigo correctamente";
                       $("#ModalMessage").modal('show');
                       $scope.initCodigo();
                   }).catch(function (result) {
                       $scope.isSuccess = false;
                       $scope.message = result.data;
                   });
               }

               $scope.editCodigo = function () {
                   CodigoService.editCodigo($scope.Codigo).then(function (response) {
                       $scope.message = "Se ha editado el Codigo correctamente";
                       $scope.isSuccess = true;
                       $("#ModalMessage").modal('show');
                       $scope.initCodigo();
                   }).catch(function (result) {
                       $scope.isSuccess = false;
                       $scope.message = result.data;
                   });
               }

               $scope.DeleteCodigo = function () {
                   CodigoService.DeleteCodigo($scope.Codigo.IdCodigo).then(function (response) {
                       $scope.message = "Se ha eliminado el Codigo correctamente";
                       $scope.isSuccess = true;
                       $("#ModalMessage").modal('show');
                       $scope.initCodigo();
                   }).catch(function (result) {
                       $scope.isSuccess = false;
                       $scope.message = result.data;
                   });
               }

           }]);