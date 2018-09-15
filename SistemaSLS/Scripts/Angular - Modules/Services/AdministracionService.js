angular.module('Administracion.service', [])
    .factory('AdministracionService', [
        '$http',
        function ($http) {
            return {
                getinitAdministracion: function () {
                    return $http({
                        method: 'GET',
                        url: '/Administracion/Get'
                    });
                },
                saveTipoMoneda: function (TipoMonedaDTO) {
                    return $http({
                        method: 'POST',
                        url: '/Administracion/Post',
                        data: { TipoMonedaDTO: TipoMonedaDTO }
                    });
                },
                editTipoMoneda: function (TipoMonedaDTO) {
                    return $http({
                        method: 'POST',
                        url: '/Administracion/Update',
                        data: { TipoMonedaDTO: TipoMonedaDTO }
                    });
                },
                DeleteTipoMoneda: function (TipoMonedaDTO) {
                    return $http({
                        method: 'POST',
                        url: '/Administracion/Delete',
                        data: { IdTipoMoneda: TipoMonedaDTO }
                    });
                },                
                saveMedioCobro: function (MedioCobroDTO) {
                    return $http({
                        method: 'POST',
                        url: '/Administracion/Post',
                        data: { MedioCobroDTO: MedioCobroDTO }
                    });
                },
                editMedioCobro: function (MedioCobroDTO) {
                    return $http({
                        method: 'POST',
                        url: '/Administracion/Update',
                        data: { MedioCobroDTO: MedioCobroDTO }
                    });
                },
                DeleteMedioCobro: function (MedioCobroDTO) {
                    return $http({
                        method: 'POST',
                        url: '/Administracion/Delete',
                        data: { IdMedioCobro: MedioCobroDTO }
                    });
                },
            };
        }]);

