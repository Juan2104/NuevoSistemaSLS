angular.module('Codigo.service', [])
    .factory('CodigoService', [
        '$http',
        function ($http) {
            return {
                getCodigo: function () {
                    return $http({
                        method: 'GET',
                        url: '/Codigo/Get'
                    });
                },
                saveCodigo: function (CodigoDTO) {
                    return $http({
                        method: 'POST',
                        url: '/Codigo/Post',
                        data: { CodigoDTO: CodigoDTO }
                    });
                },
                editCodigo: function (CodigoDTO) {
                    return $http({
                        method: 'POST',
                        url: '/Codigo/Update',
                        data: { CodigoDTO: CodigoDTO }
                    });
                },
                DeleteCodigo: function (CodigoDTO) {
                    return $http({
                        method: 'POST',
                        url: '/Codigo/Delete',
                        data: { IdCodigo: CodigoDTO }
                    });
                },
            };
        }]);

