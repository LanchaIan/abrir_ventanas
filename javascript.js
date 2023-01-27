let boton_origen;

function abrirventana1(url, boton) {
    let name_ventana = url.substring(0,8);
    let boton_ = document.getElementById(boton);
    boton_origen = boton_.innerHTML;
    alert(boton_origen);

    let ventana1 = window.open(url, name_ventana, "directories=no, location=no, menubar=no, scrollbars=no, statusbar=no, tittlebar=no");
    $(ventana1.document).load(function() {
        alert('loaded');
        // do other things
    });
    boton_origen = boton_.innerHTML;
    alert(boton_origen);
}

function abrirventana2(url1,url2,url3) {
    let boton_ = document.getElementById(boton);
    boton_origen = boton_.innerHTML;

    ventana1 = window.open(url1);
    ventana2 = window.open(url2);
    ventana3 = window.open(url3);
}

function abrirventana3(url, boton) {
    let name_ventana = url.substring(0,8);
    let boton_ = document.getElementById(boton);
    boton_origen = boton_.innerHTML;
    ventana1 = window.open(url, name_ventana, "directories=no, location=no, menubar=no, scrollbars=no, statusbar=no, resizable=si, tittlebar=no, width=400, height=400");

}

function abrirventana4(url, boton) {
    let name_ventana = url.substring(0,8);
    let boton_ = document.getElementById(boton);
    boton_origen = boton_.innerHTML;
    ventana1 = window.open(url, name_ventana, "directories=no, location=no, menubar=no, scrollbars=no, statusbar=no, tittlebar=no");
}

function nombre(){
    alert("El nombre de la ventana es " + document.title);
}

function quien_me_creo(){
    alert(boton_origen)
    alert('Esta ventana fue creada por el boton: ' + boton_origen);
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