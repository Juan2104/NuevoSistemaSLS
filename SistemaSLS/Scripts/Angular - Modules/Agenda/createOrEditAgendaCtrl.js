var app = angular.module('Agenda.createOrEdit.ctrl', [])
       .controller('createOrEditAgendaCtrl', [
           '$scope',
           '$filter',
           '$routeParams',
           '$location',
           'AgendaService',
           'NgTableParams',
           'navigationService',
            function ($scope, $filter, $routeParams, $location, AgendaService, NgTableParams, navigationServicet) {

                $scope.initAgendaCreateOrEdit = function () {
                    $scope.getPais();
                } 

                $scope.getPais = function () {
                    $scope.isLoading = true;
                    AgendaService.getPais().then(function (response) {
                        $scope.Paises = angular.copy(response.data);
                    }).catch(function (result) {
                        $scope.isLoading = false;
                    });
                }
                //$scope.proyecto = {
                //    PresupuestoUtilizado: 0,
                //    Presupuesto: 0,
                //    MonedaId: 1
                //};
                //$scope.fileToUpload = {};
                //$scope.proyectoId = 0;
                //$scope.versions = [];
                //$scope.filesToUpload = [];
                //$scope.searchPortfolio;
                //$scope.searchArea;
                //$scope.searchCompania;
                //$scope.searchHito;
                //$scope.searchArchivo;
                //$scope.colors = ['#3c763d', '#a94442'];
                //$scope.searchComplejidad;
                //$scope.label = ['Budget', 'Used Budget'];
                //$scope.series = ['Budget', 'Used Budget'];
                //$scope.proyectosLine = [[$scope.proyecto.Presupuesto], [$scope.proyecto.PresupuestoUtilizado]];
                //$scope.regexFloat = /[0-9]*[,]?[0-9]+$/;
                //$scope.selectedArchivo = [];
                //$scope.archivos = [];
                //$scope.queryArchivo = { limit: 5, page: 1 };

                //$scope.initProyectos = function () {

                //    if ($routeParams.idProyecto != undefined) {
                //        $scope.getProyectoById($routeParams.idProyecto);
                //        $scope.getArchivos();
                //    }
                //    $scope.getPortfolios();
                //    $scope.getAreas();
                //    $scope.getCompanias();
                //    $scope.getClientes();
                //    $scope.getComplejidades();
                //    $scope.getContactos();
                //    $scope.getPrioridades();
                //    $scope.getMonedas();
                //    $scope.getFases();
                //    $scope.getObjetivos();
                //    $scope.getUsuarios();
                //    $scope.getEstados();
                //    $scope.getSubAreas();
                //    $scope.getRecursos();
                //    $scope.proyectosLine = [[$scope.proyecto.Presupuesto], [$scope.proyecto.PresupuestoUtilizado]];
                //}

                //$scope.showMensajeToast = function (mensaje, type) {
                //    var pinTo = 'top right'
                //    $mdToast.show({
                //        template: '<md-toast class="toast-' + type + '">' + mensaje + '</md-toast>',
                //        position: pinTo,
                //        hideDelay: 2000
                //    });
                //};

                //$scope.datasetOverride = [{ yAxisID: 'y-axis-1' }];
                //$scope.options = {
                //    scales: {
                //        yAxes: [{ id: 'y-axis-1', type: 'linear', position: 'left', ticks: { min: 0 } }]
                //    }
                //};


                //$scope.loadChart = function () {
                //    $timeout(function () {
                //        $scope.proyectosLine = [[], []];
                //        $scope.proyectosLine[0].push(parseInt($scope.proyecto.Presupuesto));
                //        $scope.proyectosLine[1].push(parseInt($scope.proyecto.PresupuestoUtilizado));
                //    }, 700);
                //}


                ////#REGION GETS
                //$scope.getPortfolios = function () {
                //    proyectoService.getPortfolios().then(function (response) {
                //        $scope.portfolios = response.data;
                //    }).catch(function (result) {
                //        console.log("asdasdasdsadsad");
                //    });
                //};

                //$scope.getArchivos = function () {
                //    proyectoService.getArchivos($routeParams.idProyecto).then(function (response) {
                //        $scope.archivos = response.data;
                //    }).catch(function (result) {
                //        console.log("asdasdasdsadsad");
                //    });
                //}

                //$scope.getAreas = function () {
                //    proyectoService.getAreas().then(function (response) {
                //        $scope.areas = response.data;
                //    }).catch(function (result) {
                //        console.log("asdasdasdsadsad");
                //    });
                //};

                //$scope.getCompanias = function () {
                //    proyectoService.getCompanias().then(function (response) {
                //        $scope.companias = response.data;
                //    }).catch(function (result) {
                //        console.log("asdasdasdsadsad");
                //    });
                //};

                //$scope.getPrioridades = function () {
                //    proyectoService.getPrioridades().then(function (response) {
                //        $scope.prioridades = response.data;
                //    }).catch(function (result) {
                //        console.log("asdasdasdsadsad");
                //    });
                //};

                //$scope.getClientes = function () {
                //    proyectoService.getClientes().then(function (response) {
                //        $scope.clientes = response.data;
                //    }).catch(function (result) {
                //        console.log("asdasdasdsadsad");
                //    });
                //};

                //$scope.getComplejidades = function () {
                //    proyectoService.getComplejidades().then(function (response) {
                //        $scope.complejidades = response.data;
                //    }).catch(function (result) {
                //        console.log("asdasdasdsadsad");
                //    });
                //};

                //$scope.getContactos = function () {
                //    proyectoService.getContactos().then(function (response) {
                //        $scope.contactos = response.data;
                //    }).catch(function (result) {
                //        console.log("asdasdasdsadsad");
                //    });
                //};

                //$scope.getMonedas = function () {
                //    proyectoService.getMonedas().then(function (response) {
                //        $scope.monedas = response.data;
                //    }).catch(function (result) {
                //        console.log("asdasdasdsadsad");
                //    });
                //};

                //$scope.getFases = function () {
                //    proyectoService.getFases().then(function (response) {
                //        $scope.fases = response.data;
                //    }).catch(function (result) {
                //        console.log("asdasdasdsadsad");
                //    });
                //};

                //$scope.getObjetivos = function () {
                //    proyectoService.getObjetivos().then(function (response) {
                //        $scope.objetivos = response.data;
                //    }).catch(function (result) {
                //        console.log("asdasdasdsadsad");
                //    });
                //};

                //$scope.getUsuarios = function () {
                //    proyectoService.getUsuarios().then(function (response) {
                //        $scope.usuarios = response.data;
                //    }).catch(function (result) {
                //        console.log("asdasdasdsadsad");
                //    });
                //};

                //$scope.getEstados = function () {
                //    proyectoService.getEstados().then(function (response) {
                //        $scope.estados = response.data;
                //    }).catch(function (result) {
                //        console.log("asdasdasdsadsad");
                //    });
                //};

                //$scope.getRecursos = function () {
                //    proyectoService.getRecursos().then(function (response) {
                //        $scope.recursos = response.data;
                //    }).catch(function (result) {
                //        console.log("asdasdasdsadsad");
                //    });
                //};

                //$scope.getSubAreas = function () {
                //    proyectoService.getSubAreas().then(function (response) {
                //        $scope.subAreas = response.data;
                //    }).catch(function (result) {
                //        console.log("asdasdasdsadsad");
                //    });
                //};

                ////#ENDREGION GETS

                ////#REGION PROYECTO

                //$scope.getProyectoById = function () {
                //    proyectoService.getProyectoById($routeParams.idProyecto).then(function (response) {
                //        if (!response.data.Editable) {
                //            $(".bodyCustom").addClass("readOnly");
                //            $("input").attr("disabled", "disabled");
                //            $("md-checkbox").attr("disabled", "disabled");
                //            $("md-slider").attr("disabled", "disabled");
                //            $("md-datepicker button").attr("disabled", "disabled");
                //            $('md-option').attr("disabled", "disabled");
                //            $(".loginCard input").removeAttr("disabled");
                //        }
                //        $scope.proyecto = response.data.proyecto;
                //    }).catch(function (result) {
                //        console.log("asdasdasdsadsad");
                //    });
                //};

                //$scope.saveProyecto = function () {
                //    $(".md-button").attr("disabled", "disabled");
                //    proyectoService.saveProyecto($scope.proyecto).then(function (response) {
                //        $scope.showMensajeToast("Project saved succesfully!", "success");
                //        $scope.proyectoId = response.data;
                //        $scope.uploadFiles();
                //    }).catch(function (result) {
                //        $scope.showMensajeToast("¡An error has happened!", "error");
                //        $(".md-button").removeAttr("disabled");
                //    });
                //}

                //$scope.showModals = function (ev, idModal, selected) {
                //    console.log(selected);
                //    $scope.selectedItem = angular.copy(selected[0]);
                //    $mdDialog.show({
                //        controller: 'createOrEditProyectoCtrl',
                //        contentElement: '#' + idModal,
                //        parent: angular.element(document.body),
                //        targetEvent: ev,
                //        clickOutsideToClose: true
                //    });
                //}


                //$scope.editProyecto = function () {
                //    $(".md-button").attr("disabled", "disabled");
                //    $scope.proyecto.cliente = $scope.clinte;
                //    proyectoService.editProyecto($scope.proyecto).then(function (response) {
                //        $scope.showMensajeToast("Project edited succesfully!", "success");
                //        $scope.proyectoId = $scope.proyecto.ProyectoId;
                //        $scope.uploadFiles();
                //    }).catch(function (result) {
                //        $scope.showMensajeToast("An error has happened!", "error");
                //        $(".md-button").removeAttr("disabled");
                //    });
                //}

                //$scope.cancel = function () {
                //    $(".bodyCustom").removeClass("readOnly");
                //    navigationService.goToList();
                //}

                ////#ENDREGION PROYECTO
                //$timeout(function () {
                //    $('input').on('keydown', function (ev) {
                //        ev.stopPropagation();
                //    })
                //}, 300)

                //$scope.upload = function (file) {
                //    if (file != null) {
                //        $scope.fileToUpload.NombreArchivo = file.name;
                //        $scope.fileToUpload.Version = "V." + ($filter('filter')($scope.archivos, { "NombreArchivo": file.name }, true).length + 1);
                //        $scope.filesToUpload.push(file);
                //        $scope.versions.push($scope.fileToUpload.Version);
                //        $scope.archivos.push(angular.copy($scope.fileToUpload));
                //        $scope.fileToUpload = {};
                //    }
                //    if ($scope.proyectoForm.archivo.$error.pattern) {
                //        $scope.showMensajeToast("File format not valid!", "error");
                //    }
                //    if ($scope.proyectoForm.archivo.$error.maxTotalSize) {
                //        $scope.showMensajeToast("File less than 10MB!", "error");
                //    }
                //}

                //$scope.invalidFile = function (s) {
                //    console.log(s);
                //}

                //$scope.clickFile = function () {
                //    $("#fileLoad").click();
                //}

                //$scope.close = function (item) {
                //    item = {}
                //    $scope.selectedItem = {};
                //    $mdDialog.cancel();
                //};

                //$scope.uploadFiles = function () {
                //    Upload.upload({
                //        url: '/Proyecto/UploadFiles',
                //        data: {
                //            "proyectName": $scope.proyecto.Descripcion,
                //            "versions": $scope.versions
                //        },
                //        file: $scope.filesToUpload, // or list of files ($files) for html5 only
                //        //}).progress(function (evt) {                       
                //    }).success(function (response) {
                //        var archivosUpload = $filter('filter')($scope.archivos, { "ProyectoArchivoId": "!" });
                //        proyectoService.saveArchivos(archivosUpload, $scope.proyectoId, response).then(function (response) {
                //            $timeout(function () { navigationService.goToList(); }, 500);
                //        }).catch(function (result) {
                //            $scope.showMensajeToast("An error has happened!", "error");
                //            $(".md-button").removeAttr("disabled");
                //        });
                //    }).error(function (err) {
                //        $scope.showMensajeToast("An error has happened!", "error");
                //    });
                //}

                //$scope.deleteArchivo = function () {
                //    proyectoService.deleteFile($scope.selectedItem, $scope.proyecto.Descripcion).then(function (response) {
                //        $scope.getArchivos();
                //        $scope.close();
                //        $scope.showMensajeToast("File deleted succesfuly!", "success");
                //        $scope.versions = [];
                //        $scope.selectedArchivo = [];
                //    }).catch(function (result) {
                //        $scope.showMensajeToast("An error has happened!", "error");
                //        $(".md-button").removeAttr("disabled");
                //    });
                //}

                //$scope.downloadFile = function (file) {
                //    var a = document.createElement('A');
                //    var file_path = '/Uploads/' + $scope.proyecto.Descripcion + "/" + moment(file.AddDate).format("DD-MM-YYYY")
                //        + "/" + moment(file.AddDate).format('DDMMYYYY-HHmm') + " " + file.Version +
                //        " - " + file.NombreArchivo;
                //    a.href = file_path;
                //    a.download = file_path.substr(file_path.lastIndexOf('/') + 1);
                //    document.body.appendChild(a);
                //    a.click();
                //    document.body.removeChild(a);
                //}
            }]);
