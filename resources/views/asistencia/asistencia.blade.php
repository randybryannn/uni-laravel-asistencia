@extends('layouts.app')
@section('contenido')
<div class="mt-2 col-lg-11 col-12 col-sm-12 mx-auto">
    <div class="mx-auto col-12 bg-light mt-2 p-3 border border-light rounded">
        <div class="d-flex flex-column">
            <div class="container mt-3 text-center">
                <h4><i class="far fa-clock"></i> Marcar Asistencia</h4>
                <hr>
            </div>
            <div class="container mt-2 text-center">
                <p><strong class="bg-white text-primary">Entrada:</strong> Se podra marcar entrada desde <strong>15min</strong>, antes de su hora de entrada.</p>
                <p><strong class="bg-white text-warning">Tolerancia:</strong> Se tendra una tolerancia de <strong>5min</strong>, pasado los 5min se registrará como tardanza.</p>
                <p><strong class="bg-white text-danger">Salida:</strong> Se podra marcar salida desde <strong>10min</strong>, antes de su hora de salida.</p>
            </div>
            <div class="d-flex mt-2 justify-content-center">
                <button class="btn btn-primary" id="btn-marcar">MARCAR ASISTENCIA</button>
            </div>
        </div>
    </div>
    <div class="mx-auto col-12 bg-light p-3 border border-light rounded">
        <div class="d-flex flex-column">
            <div class="container mt-3 text-center">
                <h4><i class="fas fa-history"></i> Historial de asistencia</h4>
                <hr>
                <div class="d-flex flex-column align-items-center">
                    <!-- <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav> -->
                    <div class="table-responsive mt-3">
                        <table class="table table-hover table-bordered table-striped" id="tabla-asistencia">
                            <thead>
                                <tr>
                                    <th>N°</th>
                                    <th>Fecha</th>
                                    <th>Entrada</th>
                                    <th>Salida</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </div>
                </div>
            </div>
    <script src="js/sweetalert2/sweetalert2@11.js"></script>
    <script src="js/datatables.js"></script>
    <script src="/js/practicante.js" type="module"></script>
@endsection