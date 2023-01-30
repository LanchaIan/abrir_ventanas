let boton_origen;

window.onload = function(){
    if (document.title == "Ventana 2") {
        ventana3 = window.open("ventana3.html", "Ventana 3", "directories=no, location=no, menubar=no, scrollbars=no, statusbar=no, tittlebar=no");

    }
    else if (document.title == "Ventana 3") {
        ventana4 = window.open("ventana4.html", "Ventana 4", "directories=no, location=no, menubar=no, scrollbars=no, statusbar=no, tittlebar=no");

    }
  };

function abrirventana1(url) {
    let name_ventana = url.substring(0,8);
    let ventana1 = window.open(url, name_ventana, "directories=no, location=no, menubar=no, scrollbars=no, statusbar=no, tittlebar=no");
}

function abrirventana2(url) {
    let name_ventana = url.substring(0,8);

    ventana1 = window.open(url, name_ventana, "directories=no, location=no, menubar=no, scrollbars=no, statusbar=no, tittlebar=no");

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