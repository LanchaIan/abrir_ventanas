
function abrirventana1(url) {
    let name_ventana = url.substring(0,8);

    ventana1 = window.open(url, name_ventana, "directories=no, location=no, menubar=no, scrollbars=no, statusbar=no, tittlebar=no");
}

function abrirventana2(url1,url2,url3) {
    alert("rbgwg");
    alert(url2);
    let name_ventana1 = url1.substring(0,8);
    let name_ventana2 = url2.substring(0,8);
    let name_ventana3 = url3.substring(0,8);


    ventana1 = window.open(url1, name_ventana1, "directories=no, location=no, menubar=no, scrollbars=no, statusbar=no, tittlebar=no");
    ventana2 = window.open(url2, name_ventana2, "directories=no, location=no, menubar=no, scrollbars=no, statusbar=no, tittlebar=no");
    ventana3 = window.open(url3, name_ventana3, "directories=no, location=no, menubar=no, scrollbars=no, statusbar=no, tittlebar=no");
}

function nombre(){
    alert("El nombre de la ventana es " + document.title);
}

function cerrar() {
    window.close();
}

function entra(botonx){
    let boton = document.getElementById(botonx);
    boton.style.backgroundColor = "lightblue";
}

function sale(botonx){
    let boton = document.getElementById(botonx);
    boton.style.backgroundColor = "white";
}