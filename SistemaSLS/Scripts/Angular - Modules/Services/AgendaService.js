angular.module('Agenda.service', [])
    .factory('AgendaService', [
        '$http',
        function ($http) {
            return {
                getAgendaById: function (id) {
                    return $http({
                        method: 'POST',
                        url: '/Agenda/GetById',
                        data: { id: id }
                    });
                },
                getAgenda: function () {
                    return $http({
                        method: 'GET',
                        url: '/Agenda/Get'
                    });
                },
                saveAgenda: function (AgendaDTO) {
                    return $http({
                        method: 'POST',
                        url: '/Agenda/Post',
                        data: { AgendaDTO: AgendaDTO }
                    });
                },
                editAgenda: function (AgendaDTO) {
                    return $http({
                        method: 'POST',
                        url: '/Agenda/Update',
                        data: { AgendaDTO: AgendaDTO }
                    });
                },
                DeleteAgenda: function (AgendaDTO) {
                    return $http({
                        method: 'POST',
                        url: '/Agenda/Delete',
                        data: { IdAgenda: AgendaDTO }
                    });
                },
                getPais: function () {
                    return $http({
                        method: 'GET',
                        url: '/Pais/Get'
                    });
                },
                getTipoServicio: function () {
                    return $http({
                        method: 'GET',
                        url: '/TipoServicio/Get'
                    });
                },
                getTipoDictado: function () {
                    return $http({
                        method: 'GET',
                        url: '/TipoDictado/Get'
                    });
                },
                getCodigo: function () {
                    return $http({
                        method: 'GET',
                        url: '/Codigo/Get'
                    });
                },
            };
        }]);

