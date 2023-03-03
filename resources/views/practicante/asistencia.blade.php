@extends('layouts.app')
@section('tituloPag','Marcar Asistencia')
@section('contenido')
<div class="mt-2 col-lg-11 col-12 col-sm-12 mx-auto">
    <div class="mx-auto col-12 bg-light mt-2 p-3 border border-light rounded">
        <div class="d-flex flex-column">
            <div class="container mt-3 text-center">
                <h4><i class="far fa-clock"></i> Marcar Asistencia</h4>
                <hr>
            </div>
            <div class="container mt-2 text-center">
                <p><strong class="text-primary">Entrada:</strong> Se podrá marcar entrada desde <strong>15min</strong>, antes de su hora de entrada y se tendrá una tolerancia de <strong>5min</strong>.</p>
                <p><i class="fas fa-eye text-primary"></i><strong class="bg-white text-muted"> Pasado los <strong class="text-dark">5min</strong> se registrará como tardanza.</strong></p>
                <p><strong class="text-danger">Salida:</strong> Se podrá marcar salida desde <strong>10min</strong>, antes de su hora de salida y se tendrá una tolerancia máxima de <strong>60min</strong>.</p>
                <p><i class="fas fa-eye text-danger"></i><strong class="bg-white text-muted"> Pasado los <strong class="text-dark">60min</strong> después de la hora de salida ya no se podrá marcar salida.</strong></p>
            </div>
            <div class="d-flex mt-2 justify-content-center">
                <button class="btn text-light" style="background-color: #1954de !important;" id="btn-marcar">MARCAR ASISTENCIA</button>
            </div>
        </div>
    </div>
    <div class="mx-auto col-12 bg-light p-3 border border-light rounded">
        <div class="d-flex flex-column">
            <div class="container mt-3 text-center">
                <h4><i class="fas fa-history"></i> Historial de asistencia</h4>
                <hr>
                <div class="d-flex flex-column align-items-center">
                    <div class="ctdFilasTabla">
                        <span>Total:</span>
                        <p id="ctdFilas" class="mdl-typography--body-2 m-0 p-1 main-content rounded border"></p>
                    </div>
                    <div class="table-responsive mt-3">
                        <table class="table table-hover table-bordered table-striped" style="width:100%" id="tabla-asistencia">
                            <thead>
                                <tr>
                                    <th class="text-center">N°</th>
                                    <th class="text-center">Fecha</th>
                                    <th class="text-center">Entrada</th>
                                    <th class="text-center">Salida</th>
                                    <th class="text-center">Estado</th>
                                </tr>
                            </thead>
                            <tbody class="text-center"></tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @include('modals.ejustificacion')
    @include('modals.vjustificacion')
    @include('modals.vpdf')
    <script src="js/sweetalert2/sweetalert2@11.js"></script>
    <script src="/js/practicante.js" type="module"></script>
    <script src="/js/mdasistencia.js" type="module"></script>
    <script src="js/datatables.js"></script>
    @endsection