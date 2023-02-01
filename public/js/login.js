const iptUser = document.getElementById("usuario");
const iptPass = document.getElementById("password");
const msgError = document.getElementById("error");

iptUser.onkeydown = function (event, index) {
    if (msgError !== null && iptUser.value.length == 0) {
        msgError.style.display = "none";
    }
};

iptPass.onkeydown = function (event, index) {
    if (msgError !== null && iptPass.value.length == 0) {
        msgError.style.display = "none";
    }
};


