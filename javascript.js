let boton_origen;
let ventana1;
let ventanas;
let ventana2;
let ventana3;
let ventana4;
let ventana5;
window.onload = function(){
    alert(boton_origen);
    if (document.title == "Ventana 1") {
        ventana3 = window.open("ventana3.html", "Ventana 3", "directories=no, location=no, menubar=no, scrollbars=no, statusbar=no, tittlebar=no");
        boton_origen = "ABRIR VENTANA SIN CARACTERÍSTICAS UNA SOLA VEZ";

    }
    else if (document.title == "Ventana 2") {
        ventana3 = window.open("ventana3.html", "Ventana 3", "directories=no, location=no, menubar=no, scrollbars=no, statusbar=no, tittlebar=no");
        boton_origen = "ABRIR VENTANA SIN CARACTERÍSTICAS VARIAS VECES";

    }
    else if (document.title == "Ventana 3") {
        ventana4 = window.open("ventana4.html", "Ventana 4", "directories=no, location=no, menubar=no, scrollbars=no, statusbar=no, tittlebar=no");
        boton_origen = "ABRIR VENTANA SIN CARACTERÍSTICAS VARIAS VECES";
    }
    else if (document.title == "Ventana 4") {
        boton_origen = "ABRIR VENTANA SIN CARACTERÍSTICAS VARIAS VECES";
    }
    else if (document.title == "Ventana 5") {
        boton_origen = "ABRIR VENTANA CON CARACTERÍSTICAS";
    }
    else if (document.title == "Ventana 6") {
        boton_origen = "boton 4";
    }
    else if (document.title == "Ventana 7") {
        boton_origen = "boton 5";
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
    ventanas = window.open(url, name_ventana, "directories=no, location=no, menubar=no, scrollbars=no, statusbar=no, tittlebar=no");

}

function abrirventana3(url, boton) {
    let name_ventana = url.substring(0,8);
    let boton_ = document.getElementById(boton);
    boton_origen = boton_.innerHTML;
    ventana3 = window.open(url, name_ventana, "directories=no, location=no, menubar=no, scrollbars=no, statusbar=yes, resizable=yes, tittlebar=no, width=400, height=400");

}

function abrirventana4(url, boton) {
    let name_ventana = url.substring(0,8);
    let boton_ = document.getElementById(boton);
    boton_origen = boton_.innerHTML;
    ventana4 = window.open(url, name_ventana, "directories=no, location=no, menubar=no, scrollbars=no, statusbar=no, tittlebar=no, resizable=yes, width=600, height=300, left=150");

}

function abrirventana5(url, boton) {
    let name_ventana = url.substring(0,8);
    let boton_ = document.getElementById(boton);
    boton_origen = boton_.innerHTML;
    ventana5 = window.open(url, name_ventana, "directories=no, location=no, menubar=no, scrollbars=no, statusbar=no, tittlebar=no, fullscreen='yes'");

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

function cerrar_todo() {
    ventana1.close();
    ventanas.close();
    ventana2.close();
    ventana3.close();
    ventana4.close();
    ventana5.close();
}

function entra(botonx){
    let boton = document.getElementById(botonx);
    boton.style.backgroundColor = "lightblue";
}

function sale(botonx){
    let boton = document.getElementById(botonx);
    boton.style.backgroundColor = "white";
}