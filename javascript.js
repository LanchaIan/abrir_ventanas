let boton_origen;
let ventana1;
let ventana2;
let ventana3;
let ventana4;
let ventana5;
let ventana6;
let ventana7;

window.onload = enload();

function enload(){
    if (document.title == "Ventana 1") {
        boton_origen = "ABRIR VENTANA SIN CARACTERÍSTICAS UNA SOLA VEZ";

    }
    else if (document.title == "Ventana 2") {
        boton_origen = "ABRIR VENTANA SIN CARACTERÍSTICAS VARIAS VECES";

    }
    else if (document.title == "Ventana 3") {
        boton_origen = "ABRIR VENTANA SIN CARACTERÍSTICAS VARIAS VECES";
    }
    else if (document.title == "Ventana 4") {
        boton_origen = "ABRIR VENTANA SIN CARACTERÍSTICAS VARIAS VECES";
    }
    else if (document.title == "Ventana 5") {
        boton_origen = "ABRIR VENTANA CON CARACTERÍSTICAS";
    }
    else if (document.title == "Ventana 6") {
        boton_origen = "ABRIR VENTANA CON MÁS CARACTERÍSTICAS";
    }
    else if (document.title == "Ventana 7") {
        boton_origen = "ABRIR VENTANA A PANTALLA COMPLETA";
    }
  };

function abrirventana1(url, boton) {
    let name_ventana = url.substring(0,8);
    let boton_ = document.getElementById(boton);
    boton_origen = boton_.innerHTML;
    ventana1 = window.open(url, name_ventana, "directories=no, location=no, menubar=no, scrollbars=no, statusbar=no, tittlebar=no");
}

function abrirventana2(url, boton) {
    let name_ventana = url.substring(0,8);
    let boton_ = document.getElementById(boton);
    boton_origen = boton_.innerHTML;
    if (!ventana3){
        abrirventanax();
    }
    if (!ventana4){
        abrirventanay();
    }
  
    ventana2 = window.open(url, name_ventana, "directories=no, location=no, menubar=no, scrollbars=no, statusbar=no, tittlebar=no");

}

function abrirventanax() {
    ventana3 = window.open("ventana3.html", "Ventana 3", "directories=no, location=no, menubar=no, scrollbars=no, statusbar=no, tittlebar=no");

}

function abrirventanay() {
    ventana4 = window.open("ventana4.html", "Ventana 4", "directories=no, location=no, menubar=no, scrollbars=no, statusbar=no, tittlebar=no");

}

function abrirventana3(url, boton) {
    let name_ventana = url.substring(0,8);
    let boton_ = document.getElementById(boton);
    boton_origen = boton_.innerHTML;
    ventana5 = window.open(url, name_ventana, "directories=no, location=no, menubar=no, scrollbars=no, statusbar=yes, resizable=yes, tittlebar=no, width=400, height=400");

}

function abrirventana4(url, boton) {
    let name_ventana = url.substring(0,8);
    let boton_ = document.getElementById(boton);
    boton_origen = boton_.innerHTML;
    ventana6 = window.open(url, name_ventana, "directories=no, location=no, menubar=no, scrollbars=no, statusbar=no, tittlebar=no, resizable=yes, width=600, height=300, left=150");

}

function abrirventana5(url, boton) {
    let name_ventana = url.substring(0,8);
    let boton_ = document.getElementById(boton);
    boton_origen = boton_.innerHTML;
    ventana7 = window.open(url, name_ventana, "directories=no, location=no, menubar=no, scrollbars=no, statusbar=no, tittlebar=no, fullscreen='yes'");

}

function nombre(){
    alert("El nombre de la ventana es " + document.title);
}

function quien_me_creo(){
    alert('Esta ventana fue creada por el boton: ' + boton_origen);
}

function cerrar() {
    window.close();
}



function cerrar_todo() {
    if (ventana1){
        ventana1.close();
    }
    if (ventana2){
        ventana2.close();
    }
    if (ventana3){
        ventana3.close();
    }
    if (ventana4){
        ventana4.close();
    }
    if (ventana5){
        ventana5.close();
    }
    if (ventana6){
        ventana6.close();
    }
    if (ventana7){
        ventana7.close();
    }
}

function entra(botonx){
    let boton = document.getElementById(botonx);
    boton.style.backgroundColor = "lightblue";
}

function sale(botonx){
    let boton = document.getElementById(botonx);
    boton.style.backgroundColor = "white";
}