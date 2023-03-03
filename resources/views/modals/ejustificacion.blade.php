<!-- Modal -->
<div class="modal fade" id="modal-justificacion" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header bg-light">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="notificacion_modal"></div>
        <form id="formSolicitud">
          <input type="hidden" id="codAsistencia" name="codAsistencia" value="">
          <div class="row">
            <div class="form-group col-12">
              <div id="error"></div>
              <textarea name="motivo" id="motivo" class="form-control" rows="6" placeholder="Escriba el motivo"></textarea>
            </div>
          </div>
          <div class="form-group">
            <button class="btn btn-primary" onclick="cargarArchivo(event)">Cargar archivos</button>
            <div id="listaArchivos" class="lista_archivos"></div>
            <input class="d-none" type="file" accept=".pdf" name="pdfpruebas[]" onchange="archivoLista(event)" id="pdfpruebas" multiple>
            <br>
            <small class="text-info">Solo se aceptan archivos con las siguientes extensiones: .pdf </i><i class="far fa-file-pdf"></i></small><br>
            <small class="text-danger">Se requiere que suba por lo menos una evidencia.</small>
          </div>
          <div class="form-group">
            <ul class="list-group" id="list-img-load"></ul>
          </div>
        </form>
      </div>
      <div class="modal-footer bg-light">
          <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btn-outline-primary" id="btnSaveSolicitud">Enviar Solicitud</button>
      </div>
    </div>
  </div>
</div>
<script src="js/ejustificacion.js"></script>