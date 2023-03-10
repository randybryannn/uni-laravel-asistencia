export const cargando_tbody =  `<tr>
                            <td colspan="100%">
                                <div class="d-flex flex-column align-items-center">
                                    <div class="spinner m-auto">
                                        <div class="spinner__half-circle--left"></div>
                                        <div class="spinner__half-circle--right"></div>
                                    </div>
                                </div>
                            </td>
                        </tr>`;
export const tbody_sinRegistros = `<tr><td colspan='100%' style='text-align: center;'>No se encontraron registros</td></tr>`;
export const cargador__ = 'before-page';
export const fetch_ = (_url, _type) => {
    return fetch(_url, {
        method: _type,
        headers:{ 'Content-Type': 'application/json;charset=UTF-8' }
    }).then(res => res.json())
    .then(response => response);
};
export const fetch__ = (_url,_type,_data) => {
    return fetch(_url, {
        method: _type,
        body: _data,
        headers:{ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}
    }).then(res => res.json())
    .then(response => response);
};
export const fetch___ = (_url,_type,_data) => {
    return fetch(_url, {
        method: _type,
        body: _data,
        headers:{ 
            //'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
    }).then(res => res.json())
    .then(response => response);
};
export const mostrarPopUp = (_type, _data) => {
     const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    if(_type == "entrada"){
        // 'Entrada marcada', 'Todavia no puede marcar su entrada', 'Ya ha marcado entrada'
        return Toast.fire({
            icon: _data['result'][0] == 'Entrada marcada' ? 'success' : 'info',
            title: _data['result'][0],
        })
    }
    else if(_type == "salida"){
        // 'Salida marcada', 'Ya no puede marcar su salida', 'Todavia no puede marcar su salida', 'Ya ha marcado salida',
        return Toast.fire({
            icon: _data['result'][0] == 'Salida marcada' ? 'success' : 'warning',
            title: _data['result'][0],
        })
    }
    else if(_type == "datosJustif"){
        return Toast.fire({
            icon: 'warning',
            title: _data,
        })
    }
    else if(_type == "confirmJustif"){
        return Toast.fire({
            icon: 'success',
            title: _data,
        })
    }
};