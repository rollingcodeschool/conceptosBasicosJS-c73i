// averiguar en que version del ES se agrego la sintaxis de clases
//anioLanzamiento, desarrollador
class VideoJuego {
  #etiquetas; //propiedad privada
  constructor(
    tituloParam,
    generoParam,
    precioParam,
    etiquetasParam,
    anioLanzamientoParam,
    desarrolladorParam
  ) {
    //declaramos las propiedades que tendra un videojuego
    this._titulo = tituloParam;
    this._precio = precioParam;
    this.genero = generoParam;
    this.#etiquetas = etiquetasParam;
    this.anioLanzamiento = anioLanzamientoParam;
    this.desarrollador = desarrolladorParam;
    //propiedad por defecto
    this.publicado = false;
  }
  //propiedades computadas get y set
  get titulo() {
    return this._titulo;
  }

  get precio() {
    return this._precio;
  }

  set titulo(nuevoTitulo) {
    if (nuevoTitulo !== "") {
      this._titulo = nuevoTitulo;
    } else {
      alert("Debe ingresar un nuevo titulo");
    }
  }

  //aqui declaro mis metodos
  mostrarDatos() {
    document.write(`<ul>
        <li>Titulo: ${this.titulo}</li>
        <li>Precio: $${this.precio}USD</li>
        <li>Genero: ${this.genero}</li>
        <li>Desarrollador: ${this.desarrollador}</li>
        </ul>`);
  }
}

class JuegoDeSupervivencia extends VideoJuego {
  #protagonista;
  #antagonista;
  constructor(
    tituloParam,
    generoParam,
    precioParam,
    etiquetasParam,
    anioLanzamientoParam,
    desarrolladorParam,
    protagonistaParam,
    antagonistaParam
  ) {
    //invocar al constructor de la clase padre
    super(
      tituloParam,
      generoParam,
      precioParam,
      etiquetasParam,
      anioLanzamientoParam,
      desarrolladorParam
    );
    this.#protagonista = protagonistaParam;
    this.#antagonista = antagonistaParam;
  }

  get protagonista() {
    return this.#protagonista;
  }

  set protagonista(nuevoProtagonista) {
    this.#protagonista = nuevoProtagonista;
  }
  get antagonista() {
    return this.#antagonista;
  }

  set antagonista(nuevoAntagonista) {
    this.#antagonista = nuevoAntagonista;
  }

  //aqui agregar el resto de los metodos
  mostrarInfoExtra() {
    document.write(
      `<p>Aqui mostraria todo el detalle de los juegos de supervivencia</p>`
    );
  }

  // mostrarDatos(){
  //     super.mostrarDatos();
  //     document.write(`<h2>Información extra</h2>
  //     <ul>
  //         <li>Protagonista: ${this.protagonista}</li>
  //         <li>Antagonista: ${this.antagonista}</li>
  //     </ul>`);
  // }
  mostrarDatos() {
    document.write(`<ul>
        <li>Titulo: ${this.titulo}</li>
        <li>Precio: $${this.precio}USD</li>
        <li>Genero: ${this.genero}</li>
        <li>Desarrollador: ${this.desarrollador}</li>
        <li>Protagonista: ${this.protagonista}</li>
        <li>Antagonista: ${this.antagonista}</li>
        </ul>`);
  }
}

//crear o instanciar un objeto

const minecraft = new VideoJuego(
  "Minecraft",
  "sandbox",
  30,
  ["cubitos", "granja", "mundo abierto", "creeper"],
  2008,
  "Mojang"
);

minecraft.mostrarDatos();

document.write(
  `<p>Titulo del juego: ${minecraft.titulo} , precio: $${minecraft.precio} USD </p>`
);
//la siguiente propiedad no se muestra porque es una propiedad privada
document.write(`<p>Etiquetas: ${minecraft.etiquetas} </p>`);

const rust = new JuegoDeSupervivencia(
  "Rust",
  "supervivencia",
  30,
  ["multijugador", "realista", "pvp", "pve"],
  2016,
  "Algun desarrollador",
  "Personaje principal",
  "El resto"
);

console.log(rust);
rust.mostrarDatos();
