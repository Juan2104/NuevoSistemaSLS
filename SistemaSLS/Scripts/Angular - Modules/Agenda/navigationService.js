angular.module('Agenda.service.navigation', [])
       .factory('navigationService', [
          '$location',
          '$window',
           function ($location, $window) {
               var sections = {
                   create: '/CreateOrEdit/',
                   list: '/Agenda/',
                   history: '/Historico/'
               };
               return {
                   goToCreate: function () {
                       $location.path(sections.create);
                   },
                   goToEdit: function (id) {
                       $location.path(sections.create + id);
                   },
                   goToHistorico: function (id) {
                       $location.path(sections.history + id);
                   },
                   goToList: function () {
                       $location.path(sections.list);
                   },
                   //goToDelete: function (id) {
                   //    $location.path(sections.delete + id);
                   //},
               };
           }]);