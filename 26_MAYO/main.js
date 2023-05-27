// class Saludar {
//     saludo(){
//         console.log("Buenas noches!");
//     }
//     despedir(){
//         console.log("Adios");
//     }
// }

// miSaludo = new Saludar();
// console.log(miSaludo);

// miSaludo.saludo();
// miSaludo.despedir();

// class Estudiantes {
//     constructor(nombre, edad , carrera){
//         this.nombre = nombre;
//         this.edad = edad;
//         this.carrera = carrera;
//     }
//     escribrir(){
//         console.log(`El estudiante: ${this.nombre} esta escribiendo un libro`);
//     }
// }

// const alumnos = new Estudiantes("ANDRES",22,"SISTEMAS");
// console.log(alumnos.nombre);
// console.log(alumnos.edad);
// console.log(alumnos.carrera);
// alumnos.escribrir();

class Mamiferos {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;    
  }
  herbivoro(){
    console.log(`El animal: ${this.nombre} come hierbas`);
  }
  carnivoros(){
    console.log(`El animal: ${this.nombre} come carne`);
  }
  omvivoros(){
    console.log(`El animal: ${this.nombre} come de todo`);
  }
}

class Vaca extends Mamiferos {
    constructor(nombre, edad, rumiante){
        super(nombre,edad);        
        this.rumiante=rumiante;
    }
    caracteristicas() {
        console.log("La vaca tiene dos estomagos");
    }
}

class Tigre extends Mamiferos {
    felino(){
        console.log("Es el felino mas grande");
    }
}

class Cerdo extends Mamiferos {
    metodo(){
        console.log("Este animal come absolutamente de todo");
    }
}

const vaca1 = new Vaca ("LOLA", 4, true);
console.log(vaca1.nombre);
console.log(vaca1.edad);
console.log(vaca1.rumiante);

const tigre1 = new Tigre ("ALEX",false,7);
tigre1.carnivoros();
tigre1.felino();

const cerdo1 = new Cerdo ("PIG",false,5);
cerdo1.omvivoros();
cerdo1.metodo();


//NUEVA CLASE
class Automovil {
    constructor(velocidad) {
        this._velocidad = velocidad;
        this._gasolina = 40;        
    }
    get velocidad() { 
        return `La velocidad: ${this._velocidad} Km/h`
    };
    get gasolina() {
        return `La gasolina: ${this._gasolina} lts (${this._gasolina/50*100}%)`
    };
}

let miAuto = new Automovil(500);
console.log(miAuto.velocidad);
console.log(miAuto.gasolina);