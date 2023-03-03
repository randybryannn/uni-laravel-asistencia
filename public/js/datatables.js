$("#tabla-asistencia").on("change", function () {
    let filas = $("#tabla-asistencia").find("tbody tr td").html();
    if (filas == 'No se encontraron registros') {
        $("#ctdFilas").text(0);
    } else {
        const table = $("#tabla-asistencia").DataTable({
            pageLength: 10,
            searching: false,
            lengthChange: false,
            ordering: false,
            info: false,
            dom: "pt",
            language: {
                decimal: "",
                emptyTable: "No hay información",
                info: "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
                infoEmpty: "Mostrando 0 to 0 of 0 Entradas",
                infoFiltered: "(Filtrado de _MAX_ total entradas)",
                infoPostFix: "",
                thousands: ",",
                lengthMenu: "Mostrar _MENU_ Entradas",
                loadingRecords: "Cargando...",
                processing: "Procesando...",
                search: "Buscar:",
                zeroRecords: "Sin resultados encontrados",
                paginate: {
                    first: "Primero",
                    last: "Ultimo",
                    next: ">>",
                    previous: "<<",
                },
            },
            stateSave: true,
            bDestroy: true,
        });
        $("#ctdFilas").text(table.rows().count());
    }
});