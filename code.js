let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt("Ingresa tu nombre");
  datosPersona.edad = 2021 - prompt("Ingresa el año en que naciste");
  datosPersona.ciudad = prompt("Ingresa la ciudad donde vives");
  datosPersona.interesPorJs = confirm("Te interesa JavaScript?");
  
}



function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  let nombreDatosPersona = document.getElementById("nombre");;
 nombreDatosPersona.innerHTML += `${datosPersona.nombre}`;

 let edadDatosPersona = document.getElementById("edad");
 edadDatosPersona.innerHTML += `${datosPersona.edad}`;

 let ciudadDatosPersona = document.getElementById("ciudad");
 ciudadDatosPersona.innerHTML += `${datosPersona.ciudad}`;

 let jsDatosPersona = document.getElementById("javascript");
 jsDatosPersona.innerHTML += `${datosPersona.interesPorJs? "Si" : "No"}`
}


/* ------------------------- NO MODIFICAR ESTE ARRAY ------------------------ */
const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  let listadoMaterias = document.querySelector("#fila")
  listado.forEach(materias => {
  listadoMaterias.innerHTML += `
 <div class= "caja">
  <img src=${materias.imgUrl} alt= "${materias.lenguajes}">
  <p class = "lenguajes">${materias.lenguajes}</p>
  <p class = "bimestre">${materias.bimestre}</p>
  </div>
  `
  })
}


function mostrarYOcultarDescripcionCompleta() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 let btnVerMas = document.querySelector(".sobre-mi")
 btnVerMas.classList.toggle("sobre-mi-completo")
  
}
