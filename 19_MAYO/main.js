let estado_personaje = "inactivo";
const desplegable = document.getElementById("animaciones");
desplegable.addEventListener("change", function(e){
    estado_personaje= e.target.value;
});
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const anchocanvas = (canvas.width = 600);
const altocanvas = (canvas.height = 600);
const imagenjugador = new Image();
imagenjugador.src = "perro.png";
const anchosprite = 575;
const altosprite = 525;
let framejuego = 0;
const velocidadframe = 5;
const animacionsprite = [];
const animacionestados = [
  {
    nombre_estado: "inactivo",
    frame: 7,
  },
  {
    nombre_estado: "saltar",
    frame: 7,
  },
  {
    nombre_estado: "caida",
    frame: 7,
  },
  {
    nombre_estado: "correr",
    frame: 9,
  },
  {
    nombre_estado: "mareado",
    frame: 11,
  },
  {
    nombre_estado: "sentado",
    frame: 5,
  },
  {
    nombre_estado: "rodar",
    frame: 7,
  },
  {
    nombre_estado: "morder",
    frame: 7,
  },
  {
    nombre_estado: "muerto",
    frame: 12,
  },
  {
    nombre_estado: "golpeado",
    frame: 4,
  },
];



animacionestados.forEach((estado,indice) => {
    let frame = {
        localizacion : [],        
    }
    for (let j = 0; j < estado.frame; j++ ){
        let positionx = j * anchosprite;
        let positiony = j * altosprite;
        frame.localizacion.push({
            x: positionx,
            y: positiony
        });        
    }
    animacionsprite[estado.nombre_estado] = frame;
});

console.log(animacionsprite);

function animar(){
    ctx.clearRect(0, 0, anchocanvas, altocanvas);
    let posicion = Math.floor(framejuego/velocidadframe)%animacionsprite[estado_personaje].localizacion.length;
    let framex = anchosprite*posicion;
    let framey = animacionsprite[estado_personaje].localizacion[posicion].y;
    ctx.drawImage(imagenjugador, framex, framey, anchosprite, altosprite, 0, 0, anchosprite, altosprite);
    framejuego++;
    requestAnimationFrame(animar);
}

animar();


