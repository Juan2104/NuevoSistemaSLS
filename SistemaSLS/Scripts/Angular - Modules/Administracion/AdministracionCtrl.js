var app = angular.module('Administracion.list.ctrl', [])
       .controller('AdministracionCtrl', [
           '$scope',
           '$filter',
           '$routeParams',
           '$location',
           'AdministracionService',
           'NgTableParams',
           function ($scope, $filter, $routeParams, $location, AdministracionService, NgTableParams) {
               $scope.TipoMoneda = [];
               $scope.MedioCobro = [];


               $scope.initAdministracion = function () {
                   $scope.isLoading = true;
                   AdministracionService.getinitAdministracion().then(function (response) {
                       $scope.isLoading = false;
                       $scope.TipoMonedaTable = new NgTableParams({ count: 5 }, { counts: [], dataset: response.data.TipoMoneda });
                       $scope.MedioCobroTable = new NgTableParams({ count: 5 }, { counts: [], dataset: response.data.MedioCobro });
                       $scope.isLoading = false;
                   }).catch(function (result) {
                       $scope.isLoading = false;
                   });
               }

               $scope.TipoMoneda = function () {
                   $scope.TipoMoneda = TipoMoneda.Nombre
                   $scope.TipoMoneda = TipoMoneda.Cambio
               }


               $scope.CleanTipoMoneda = function () {
                   $scope.isSave = true;
                   $scope.TipoMoneda = {};
               }

               $scope.getTipoMoneda = function () {
                   AdministracionService.getAdministracion().then(function (response) {
                       $scope.TipoMonedaTable = new NgTableParams({ count: 20 }, { counts: [], dataset: response.data });
                   }).catch(function (result) {
                   });
               }


               $scope.loadTipoMoneda = function (row) {
                   $scope.TipoMoneda = angular.copy(row);
               }

               $scope.saveTipoMoneda = function () {
                   AdministracionService.saveTipoMoneda($scope.TipoMoneda).then(function (response) {
                       $scope.isSuccess = true;
                       $scope.message = "Se ha agregado el TipoMoneda correctamente";
                       $("#ModalMessage").modal('show');
                       $scope.initMaster();
                   }).catch(function (result) {
                       $scope.isSuccess = false;
                       $scope.message = result.data;
                   });
               }

               $scope.editTipoMoneda = function () {
                   AdministracionService.editTipoMoneda($scope.TipoMoneda).then(function (response) {
                       $scope.message = "Se ha editado el TipoMoneda correctamente";
                       $scope.isSuccess = true;
                       $("#ModalMessage").modal('show');
                       $scope.initMaster();
                   }).catch(function (result) {
                       $scope.isSuccess = false;
                       $scope.message = result.data;
                   });
               }

               $scope.DeleteTipoMoneda = function () {
                   AdministracionService.DeleteTipoMoneda($scope.TipoMoneda.IdTipoMoneda).then(function (response) {
                       $scope.message = "Se ha eliminado el pais correctamente";
                       $scope.isSuccess = true;
                       $("#ModalMessage").modal('show');
                       $scope.initMaster();
                   }).catch(function (result) {
                       $scope.isSuccess = false;
                       $scope.message = result.data;
                   });
               }

               $scope.MedioCobro = function () {
                   $scope.MedioCobro = MedioCobro.Descripcion
               }

               $scope.CleanMedioCobro = function () {
                   $scope.isSave = true;
                   $scope.MedioCobro = {};
               }

               $scope.getMedioCobro = function () {
                   AdministracionService.getAdministracion().then(function (response) {
                       $scope.MedioCobroTable = new NgTableParams({ count: 20 }, { counts: [], dataset: response.data });
                   }).catch(function (result) {
                   });
               }

               $scope.loadMedioCobro = function (row) {
                   $scope.MedioCobro = angular.copy(row);
               }

               $scope.saveMedioCobro = function () {
                   AdministracionService.saveMedioCobro($scope.MedioCobro).then(function (response) {
                       $scope.isSuccess = true;
                       $scope.message = "Se ha agregado el MedioCobro correctamente";
                       $("#ModalMessage").modal('show');
                       $scope.initMaster();
                   }).catch(function (result) {
                       $scope.isSuccess = false;
                       $scope.message = result.data;
                   });
               }

               $scope.editMedioCobro = function () {
                   AdministracionService.editMedioCobro($scope.MedioCobro).then(function (response) {
                       $scope.message = "Se ha editado el MedioCobro correctamente";
                       $scope.isSuccess = true;
                       $("#ModalMessage").modal('show');
                       $scope.initMaster();
                   }).catch(function (result) {
                       $scope.isSuccess = false;
                       $scope.message = result.data;
                   });
               }

               $scope.DeleteMedioCobro = function () {
                   AdministracionService.DeleteMedioCobro($scope.MedioCobro.IdMedioCobro).then(function (response) {
                       $scope.message = "Se ha eliminado el MedioCobro correctamente";
                       $scope.isSuccess = true;
                       $("#ModalMessage").modal('show');
                       $scope.initMaster();
                   }).catch(function (result) {
                       $scope.isSuccess = false;
                       $scope.message = result.data;
                   });
               }

           }]);