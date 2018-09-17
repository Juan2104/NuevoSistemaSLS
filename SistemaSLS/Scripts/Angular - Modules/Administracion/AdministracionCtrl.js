var app = angular.module('Administracion.list.ctrl', [])
       .controller('AdministracionCtrl', [
           '$scope',
           '$filter',
           '$routeParams',
           '$location',
           'AdministracionService',
           'NgTableParams',
           function ($scope, $filter, $routeParams, $location, AdministracionService, NgTableParams) {               
               $scope.MedioCobro = [];
               $scope.TipoDocumento = [];
               $scope.TipoMoneda = [];
               $scope.CondicionFiscal = [];


               $scope.initAdministracion = function () {
                   $scope.isLoading = true;
                   AdministracionService.getinitAdministracion().then(function (response) {
                       $scope.isLoading = false;
                       $scope.TipoMonedaTable = new NgTableParams({ count: 5 }, { counts: [], dataset: response.data.TipoMoneda });
                       $scope.MedioCobroTable = new NgTableParams({ count: 5 }, { counts: [], dataset: response.data.MedioCobro });
                       $scope.TipoDocumentoTable = new NgTableParams({ count: 5 }, { counts: [], dataset: response.data.TipoDocumento });
                       $scope.CondicionFiscalTable = new NgTableParams({ count: 5 }, { counts: [], dataset: response.data.CondicionFiscal });
                       $scope.isLoading = false;
                   }).catch(function (result) {
                       $scope.isLoading = false;
                   });
               }


               $scope.TipoMoneda = function () {
                   $scope.TipoMoneda = TipoMoneda.Nombre
                   $scope.TipoMoneda = TipoMoneda.Cambio
                   $scope.TipoMoneda = TipoMoneda.Fecha
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
                       $scope.message = "Se ha eliminado el TipoMoneda correctamente";
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











               $scope.TipoDocumento = function () {
                   $scope.TipoDocumento = TipoDocumento.Descripcion
               }

               $scope.CleanTipoDocumento = function () {
                   $scope.isSave = true;
                   $scope.TipoDocumento = {};
               }

               $scope.getTipoDocumento = function () {
                   AdministracionService.getAdministracion().then(function (response) {
                       $scope.TipoDocumentoTable = new NgTableParams({ count: 20 }, { counts: [], dataset: response.data });
                   }).catch(function (result) {
                   });
               }

               $scope.loadTipoDocumento = function (row) {
                   $scope.TipoDocumento = angular.copy(row);
               }

               $scope.saveTipoDocumento = function () {
                   AdministracionService.saveTipoDocumento($scope.TipoDocumento).then(function (response) {
                       $scope.isSuccess = true;
                       $scope.message = "Se ha agregado el TipoDocumento correctamente";
                       $("#ModalMessage").modal('show');
                       $scope.initMaster();
                   }).catch(function (result) {
                       $scope.isSuccess = false;
                       $scope.message = result.data;
                   });
               }

               $scope.editTipoDocumento = function () {
                   AdministracionService.editTipoDocumento($scope.TipoDocumento).then(function (response) {
                       $scope.message = "Se ha editado el TipoDocumento correctamente";
                       $scope.isSuccess = true;
                       $("#ModalMessage").modal('show');
                       $scope.initMaster();
                   }).catch(function (result) {
                       $scope.isSuccess = false;
                       $scope.message = result.data;
                   });
               }

               $scope.DeleteTipoDocumento = function () {
                   AdministracionService.DeleteTipoDocumento($scope.TipoDocumento.IdTipoDocumento).then(function (response) {
                       $scope.message = "Se ha eliminado el TipoDocumento correctamente";
                       $scope.isSuccess = true;
                       $("#ModalMessage").modal('show');
                       $scope.initMaster();
                   }).catch(function (result) {
                       $scope.isSuccess = false;
                       $scope.message = result.data;
                   });
               }










               $scope.TipoMoneda = function () {
                   $scope.TipoMoneda = TipoMoneda.Descripcion
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
                       $scope.message = "Se ha eliminado el TipoMoneda correctamente";
                       $scope.isSuccess = true;
                       $("#ModalMessage").modal('show');
                       $scope.initMaster();
                   }).catch(function (result) {
                       $scope.isSuccess = false;
                       $scope.message = result.data;
                   });
               }












               $scope.CondicionFiscal = function () {
                   $scope.CondicionFiscal = CondicionFiscal.Descripcion
               }

               $scope.CleanCondicionFiscal = function () {
                   $scope.isSave = true;
                   $scope.CondicionFiscal = {};
               }

               $scope.getCondicionFiscal = function () {
                   AdministracionService.getAdministracion().then(function (response) {
                       $scope.CondicionFiscalTable = new NgTableParams({ count: 20 }, { counts: [], dataset: response.data });
                   }).catch(function (result) {
                   });
               }

               $scope.loadCondicionFiscal = function (row) {
                   $scope.CondicionFiscal = angular.copy(row);
               }

               $scope.saveCondicionFiscal = function () {
                   AdministracionService.saveCondicionFiscal($scope.CondicionFiscal).then(function (response) {
                       $scope.isSuccess = true;
                       $scope.message = "Se ha agregado el CondicionFiscal correctamente";
                       $("#ModalMessage").modal('show');
                       $scope.initMaster();
                   }).catch(function (result) {
                       $scope.isSuccess = false;
                       $scope.message = result.data;
                   });
               }

               $scope.editCondicionFiscal = function () {
                   AdministracionService.editCondicionFiscal($scope.CondicionFiscal).then(function (response) {
                       $scope.message = "Se ha editado el CondicionFiscal correctamente";
                       $scope.isSuccess = true;
                       $("#ModalMessage").modal('show');
                       $scope.initMaster();
                   }).catch(function (result) {
                       $scope.isSuccess = false;
                       $scope.message = result.data;
                   });
               }

               $scope.DeleteCondicionFiscal = function () {
                   AdministracionService.DeleteCondicionFiscal($scope.CondicionFiscal.IdCondicionFiscal).then(function (response) {
                       $scope.message = "Se ha eliminado el CondicionFiscal correctamente";
                       $scope.isSuccess = true;
                       $("#ModalMessage").modal('show');
                       $scope.initMaster();
                   }).catch(function (result) {
                       $scope.isSuccess = false;
                       $scope.message = result.data;
                   });
               }







           }]);