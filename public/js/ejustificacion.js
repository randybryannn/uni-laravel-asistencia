$("#modal-justificacion").on("hidden.bs.modal", function () {
    document.getElementById("motivo").value="";
    document.getElementById("pdfpruebas").value = "";
    document.getElementById("listaArchivos").innerHTML = "";
});

function getFiles(input){
    const files = new Array(input.files.length)
    for(let i = 0; i < input.files.length; i++)
      files[i] = input.files.item(i)
    return files
}

function setFiles(input, filesOld, filesNew){
    const dataTransfer = new DataTransfer()
    var unique = [];

    filesOld.forEach(function (item) {
        let state = false;
        let validation = item['name'].slice(-4) == '.pdf';
        for (let i = 0; i < unique.length; i++) {
            if(item['name'] == unique[i]['name']){
                state = true;
                break;
            }
        }
        if(!state && validation){
            unique.push(item);
        }
    });

    filesNew.forEach(function (item) {
        let state = false;
        let validation = item['name'].slice(-4) == '.pdf';
        for (let i = 0; i < unique.length; i++) {
            if(item['name'] == unique[i]['name']){
                state = true;
                break;
            }
        }
        if(!validation){
            document.getElementById("error").innerHTML += `<p class="text-danger">Archivo no valido: ${item['name']}</p>`;
        }
        if(!state && validation){
            unique.push(item);
        }
    });

    setTimeout(function(){ document.getElementById("error").innerHTML = ""; }, 3000);

    // for(const file of filesOld)
    //   dataTransfer.items.add(file)
    // for(const file of filesNew)
    //   dataTransfer.items.add(file)
    for(const file of unique)
        dataTransfer.items.add(file)
    input.files = dataTransfer.files
    console.log(input.files);
}

var filesOld = "";
function cargarArchivo(evt) {
    evt.preventDefault();
    filesOld = getFiles(document.getElementById("pdfpruebas"));
    $("#pdfpruebas").click();
}

function archivoLista(e) {

    var filesNew = getFiles(document.getElementById("pdfpruebas"));
    document.getElementById("pdfpruebas").value = "";
    document.getElementById("listaArchivos").innerHTML = "";
    setFiles(document.getElementById("pdfpruebas"), filesOld, filesNew);
    
    var files = $("#pdfpruebas").prop("files");
    var names = $.map(files, function (val) {
        return val.name;
    });
    for (n in names) {
        $("#listaArchivos").append(
            `<div class="border border-dark rounded d-flex justify-content-between p-2 mt-2" id="preload_${n}" title="${names[n]}">
             <p class="d-inline">${names[n]}</p>
             <button type='button' class='btn btn-danger'>
             <a class="d-inline" onclick=eliminarArchivo("${n}")>Quitar</a>
             </button>
             </div>`
        );
    }
}

function eliminarArchivo(index) {
    filelistall = $("#pdfpruebas").prop("files");
    var fileBuffer = [];
    Array.prototype.push.apply(fileBuffer, filelistall);
    fileBuffer.splice(index, 1);
    const dT = new ClipboardEvent("").clipboardData || new DataTransfer();
    for (let file of fileBuffer) {
        dT.items.add(file);
    }
    filelistall = $("#pdfpruebas").prop("files", dT.files);
    $("#preload_" + index).remove();
}
