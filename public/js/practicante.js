// import { cargador__, fetch_, fetch__, tbody_sinRegistros } from "/js/app.js";
// document.addEventListener("DOMContentLoaded", async function(event){
//     const tbPracticante = document.getElementById('tabla-asistencia'),
//           btnAsistencia = document.getElementById('btn-marcar'),
//           vcodPracticante =   window.userID,
//           vtokenPracticante =  window.userTOKEN;

//     const datos = new URLSearchParams({
//         "codPracticante" : vcodPracticante ,
//         "tokenPracticante" : vtokenPracticante
//     });

//     const listarAsistenciaHistorial = (datos) =>{
//         let contador = 1;
//         let contenido = datos.length > 0 ? '' : tbody_sinRegistros;
//         datos.forEach(val => {
//             contenido += `<tr>
//                 <td>${ contador++ }</td>
//                 <td>${ val.fecha }</td>
//                 <td>${ val.horaEntrada == '00:00:00' ? '' : val.horaEntrada}</td>
//                 <td><span ${ val.horaSalida.slice(-1) != 'M' ? 'class="text-danger"' : ''}>${ val.horaSalida == '00:00:00' ? '' : val.horaSalida}</span></td>
//                 <td><span class="text-${ val.estado.charAt(0) == 'P' ? 'success': val.estado.charAt(0) == 'T' ? 'warning' : 'danger' }">${ val.estado }${ val.estado != 'Puntual' ? '</span> <button class="btn btn-outline-info">Justificar</button>' : ''}</td>
//             </tr>`;
//         });
//         tbPracticante.children[1].innerHTML = contenido;
//     }

//     btnAsistencia.addEventListener('click',async () => {
//         const resEntrada = await fetch__('http://api.uni.com/marcarAsistenciaEntrada', 'POST', datos);
//         if(resEntrada['result'][0] != 'Ya ha marcado entrada'){
//             const Toast = Swal.mixin({
//                 toast: true,
//                 position: 'top-end',
//                 showConfirmButton: false,
//                 timer: 3000,
//                 timerProgressBar: true,
//                 didOpen: (toast) => {
//                   toast.addEventListener('mouseenter', Swal.stopTimer)
//                   toast.addEventListener('mouseleave', Swal.resumeTimer)
//                 }
//               })
              
//               Toast.fire({
//                 icon: resEntrada['result'][0] == 'Entrada marcada' ? 'success' : 'info',
//                 title: resEntrada['result'][0] == 'Entrada marcada' ? 'A estudiar!!' : 'Todavia no puedo marcar su entrada...',
//             })
//             listarAsistenciaHistorial(resEntrada['result'][1]);
//         }
//         else{
//             const resSalida = await fetch__('http://api.uni.com/marcarAsistenciaSalida', 'PUT', datos);
//             if(resEntrada['result'][0] != 'Ya ha marcado salida'){
//                 const Toast = Swal.mixin({
//                     toast: true,
//                     position: 'top-end',
//                     showConfirmButton: false,
//                     timer: 3000,
//                     timerProgressBar: true,
//                     didOpen: (toast) => {
//                       toast.addEventListener('mouseenter', Swal.stopTimer)
//                       toast.addEventListener('mouseleave', Swal.resumeTimer)
//                     }
//                   })
                  
//                   Toast.fire({
//                     icon: resSalida['result'][0] == 'Salida marcada' ? 'success' : 'warning',
//                     title: resSalida['result'][0] == 'Salida marcada' ? 'Hasta pronto!!' : 'Todavia no puedo marcar su salida...',
//                 })
//                 listarAsistenciaHistorial(resSalida['result'][1]);
//             }
//         }
//         document.getElementById(cargador__).setAttribute('style', 'display:none');
//     });

//     const resultado = await fetch_('http://api.uni.com/historialAsistencia?codPrac='+vcodPracticante+'&token='+vtokenPracticante, 'GET');
//     listarAsistenciaHistorial(resultado['result']);
//     document.getElementById(cargador__).setAttribute('style', 'display:none');
// });

import { cargador__, fetch_, fetch__, mostrarPopUp, tbody_sinRegistros } from "/js/app.js";
document.addEventListener("DOMContentLoaded", async function(event){
    const tbPracticante = document.getElementById('tabla-asistencia'),
          btnAsistencia = document.getElementById('btn-marcar'),
          vcodPracticante =   window.userID,
          vtokenPracticante =  window.userTOKEN;

    const datos = new URLSearchParams({
        "codPracticante" : vcodPracticante ,
        "tokenPracticante" : vtokenPracticante
    });

    const listarAsistenciaHistorial = (datos) =>{
        let contador = 1;
        let contenido = datos.length > 0 ? '' : tbody_sinRegistros;
        datos.forEach(val => {
            contenido += `<tr>
                <td>${ contador++ }</td>
                <td>${ val.fecha }</td>
                <td>${ val.horaEntrada == '00:00:00' ? '' : val.horaEntrada}</td>
                <td><span ${ val.horaSalida.slice(-1) != 'M' ? 'class="text-danger"' : ''}>${ val.horaSalida == '00:00:00' ? '' : val.horaSalida}</span></td>
                <td><span class="text-${ val.estado.charAt(0) == 'P' ? 'success': val.estado.charAt(0) == 'T' ? 'warning' : 'danger' }">${ val.estado }${ val.estado != 'Puntual' ? '</span> <button class="btn btn-outline-info">Justificar</button>' : ''}</td>
            </tr>`;
        });
        tbPracticante.children[1].innerHTML = contenido;
    }

    btnAsistencia.addEventListener('click',async () => {

        const resEntrada = await fetch__('http://api.uni.com/marcarAsistenciaEntrada', 'POST', datos);
        if(resEntrada['result'][0] != 'Ya ha marcado entrada'){
            
            mostrarPopUp(0,resEntrada);
            listarAsistenciaHistorial(resEntrada['result'][1]);
        }
        else{

            const resSalida = await fetch__('http://api.uni.com/marcarAsistenciaSalida', 'PUT', datos);
            if(resEntrada['result'][0] != 'Ya ha marcado salida'){
                
                mostrarPopUp(1,resSalida);
                listarAsistenciaHistorial(resSalida['result'][1]);
            }
        }
        document.getElementById(cargador__).setAttribute('style', 'display:none');
    });

    const resultado = await fetch_('http://api.uni.com/historialAsistencia?codPrac='+vcodPracticante+'&token='+vtokenPracticante, 'GET');
    listarAsistenciaHistorial(resultado['result']);
    document.getElementById(cargador__).setAttribute('style', 'display:none');
});