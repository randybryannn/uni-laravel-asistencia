import { cargador__, fetch_, fetch__, fetch___, mostrarPopUp, tbody_sinRegistros } from "/js/app.js";
document.addEventListener("DOMContentLoaded", async function(event){
    const tbPracticante = document.getElementById('tabla-asistencia'),
          btnAsistencia = document.getElementById('btn-marcar'),
          modalJustificacione = document.getElementById('modal-justificacion'),
          mdJustificacione = new bootstrap.Modal(modalJustificacione, {backdrop: 'static', keyboard: false}),
          modalJustificacionv = document.getElementById('modal-justificacionv'),
          mdJustificacionv = new bootstrap.Modal(modalJustificacionv, {backdrop: 'static', keyboard: false}),
          modalPdfv = document.getElementById('modal-pdf'),
          mdPdfv = new bootstrap.Modal(modalPdfv, {backdrop: 'static', keyboard: false}),
          btnJustificar = 'btn-solicitar-justificar',
          btnMostrarPdf = 'btn-mostrar-pdf',
          btnSave = document.getElementById('btnSaveSolicitud'),
          vcodPrac =   window.userID,
          vtokPrac =  window.userTOKEN;

    const data = new URLSearchParams();
    data.append('codPrac', vcodPrac);
    data.append('tokPrac', vtokPrac);

    const fc_btnVerPdf = async(e) => {
        mdPdfv._element.querySelector('.modal-title').innerHTML = 'Vista PDF';
        mdPdfv._element.querySelector('#vistapdf').src = `storage/pdf/${e.getAttribute('data-id')}`;
        mdPdfv.show();
    };

    const fc_btnJustificar = async(e) => { 

        const ejresponse = await fetch_(`http://api.uni.com/existenciaJustificacion?codPrac=${vcodPrac}&token=${vtokPrac}&idAsist=${e.getAttribute('data-id')}`, 'GET');
        
        if(ejresponse['result']['state'] == "empty"){
            document.getElementById(cargador__).setAttribute('style', 'display:flex');
            mdJustificacione._element.querySelector('.modal-title').innerHTML = 'Solicitar justificacion';
            mdJustificacione._element.querySelector('#codAsistencia').value = e.getAttribute('data-id');
            setTimeout(() => {  document.getElementById(cargador__).setAttribute('style', 'display:none');mdJustificacione.show(); }, 200);

        }else{
            document.getElementById(cargador__).setAttribute('style', 'display:flex');
            mdJustificacionv._element.querySelector('.modal-title').innerHTML = 'Justificacion';
            mdJustificacionv._element.querySelector('#motivo').disabled = true;
            mdJustificacionv._element.querySelector('#motivo').style = "background-color: white;";
            mdJustificacionv._element.querySelector('#motivo').value = ejresponse['result'][0]['justificacion'];
            let filas = "";
            ejresponse['result'].forEach(e => {
                filas += `<button type="button"
                class="list-group-item list-group-item-action ${btnMostrarPdf}" 
                data-id="${e.nomArchivo}">${e.nomArchivo}</button>`;
            });
            mdJustificacionv._element.querySelector('#listaPDF').innerHTML = filas;
            mdJustificacionv._element.querySelectorAll(`.${btnMostrarPdf}`).forEach(el => el.addEventListener('click', () => fc_btnVerPdf(el) ));
            setTimeout(() => {  document.getElementById(cargador__).setAttribute('style', 'display:none');mdJustificacionv.show(); }, 200);
        }
    };

    const listarAsistenciaHistorial = (datos) =>{
        let contador = 1;
        let contenido = datos.length > 0 ? '' : tbody_sinRegistros;
        datos.forEach(val => {
            let txtBtnJust = val.estadoJustificacion != '' ? 'Justificacion' : 'Justificar';
            let btnOpcEstado = val.estado != 'Puntual' ? `<button class="btn btn-outline-info ${btnJustificar}" data-id="${val.id}">${txtBtnJust}</button>` : '';
            contenido += `<tr>
                <td>${ contador++ }</td>
                <td>${ val.fecha }</td>
                <td>${ val.horaEntrada }</td>
                <td>
                    <span ${ val.horaSalidaClase }>${ val.horaSalida }</span>
                </td>
                <td>
                    <strong><span ${ val.estadoClase }>${ val.estado }</span></strong>
                    ${ btnOpcEstado }
                    ${ val.estadoJustificacion}
                </td>
            </tr>`;
        });
        tbPracticante.children[1].innerHTML = contenido;
        tbPracticante.querySelectorAll(`.${btnJustificar}`).forEach(el => el.addEventListener('click', () => fc_btnJustificar(el) ));
    }

    btnAsistencia.addEventListener('click',async () => {
        document.getElementById(cargador__).setAttribute('style', 'display:flex');
        const aeresponse = await fetch__('http://api.uni.com/asistenciaEntrada', 'POST', data);
        if(aeresponse['result'][0] != 'Ya ha marcado entrada'){
           
            if($.fn.DataTable.isDataTable('#tabla-asistencia')){
                $("#tabla-asistencia").DataTable().destroy();
            }
            listarAsistenciaHistorial(aeresponse['result'][1]);
            mostrarPopUp("entrada",aeresponse);
    
        }
        else{

            const asresponse = await fetch__('http://api.uni.com/asistenciaSalida', 'PUT', data);
            if(aeresponse['result'][0] != 'Ya ha marcado salida'){
                
                $("#tabla-asistencia").DataTable().destroy();
                listarAsistenciaHistorial(asresponse['result'][1]);
                mostrarPopUp("salida",asresponse);
            }
        }
        $('#tabla-asistencia').change();
        setTimeout(() => {  document.getElementById(cargador__).setAttribute('style', 'display:none'); }, 200);
    });

    btnSave.addEventListener('click', async () => {
        let id = document.getElementById("codAsistencia").value;
        let msg = document.getElementById("motivo").value.length == 0 ? null : document.getElementById("motivo").value;
        let pdf = document.getElementById("pdfpruebas");

        if(msg == null || pdf.files[0] == null){
            mostrarPopUp("datosJustif", msg == null ? "Debe añadir un motivo" : pdf.files[0] == null ? "Debe añadir al menos un pdf" : "");
            return
        }

        const ajdata = new URLSearchParams();
        ajdata.append('codPrac', vcodPrac);
        ajdata.append('tokPrac', vtokPrac);
        ajdata.append('idAsis', id);
        ajdata.append('msgJustif', msg);
        const ajresponse = await fetch__('http://api.uni.com/asistenciaJustificacion', 'POST', ajdata); //[id,array]

        const ajadata = new FormData();
        ajadata.append("codPrac",vcodPrac);
        ajadata.append("tokPrac",vtokPrac);
        ajadata.append("idJustif", ajresponse['result'][0]['idJustificacion']);
        for (let i = 0; i < pdf.files.length; i++) {
            ajadata.append("pdfJustif"+i, pdf.files[i])
        }
        const ajaresponse = await fetch___('http://api.uni.com/asistenciaJustificacionArchivo', 'POST', ajadata); //[estado]

        if(ajaresponse['result']['estado'] == "ok"){
            mostrarPopUp("confirmJustif", "Justificacion enviada");
        }
        mdJustificacione.hide();
        document.getElementById(cargador__).setAttribute('style', 'display:flex');
        $("#tabla-asistencia").DataTable().destroy();
        listarAsistenciaHistorial(ajresponse['result'][1]);
        $('#tabla-asistencia').change();
        setTimeout(() => {  document.getElementById(cargador__).setAttribute('style', 'display:none'); }, 200);
    });;
    document.getElementById(cargador__).setAttribute('style', 'display:flex');
    const ahresponse = await fetch_(`http://api.uni.com/asistenciaHistorial?codPrac=${vcodPrac}&token=${vtokPrac}`, 'GET');
    listarAsistenciaHistorial(ahresponse['result']);
    $('#tabla-asistencia').change();
    setTimeout(() => {  document.getElementById(cargador__).setAttribute('style', 'display:none'); }, 200);
});