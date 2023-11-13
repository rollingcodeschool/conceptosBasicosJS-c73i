//notacion literal

const usuario = {
    //propiedades clave:valor
    edad: 14,
    nombre: 'Thiago',
    apellido: 'Fiol',
    correo: 'thiago@gmail.com',
    password: '1235Ab@',
    //metodos
    login: function (){
        //este this devuelve una referencia a mi objeto usuario
        console.log(this);
        document.write(`<p>El usuario ${this.nombre}, inicio sesión</p>`);
    },
    logout: () =>{
        //este this no devuelve el objeto, devuelve el objeto window
        console.log(this)
        document.write(`<p>El usuario cerro sesión</p>`);
    }
}

console.log(this);
//mostrar un objeto
console.log(usuario);
document.write(usuario);
document.write(`<h1>Usuario: ${usuario.nombre}, ${usuario.apellido}</h1>`);
document.write(`<p>correo: ${usuario['correo']}</p>`);

//modificar la propiedad de un objeto
usuario.edad = usuario.edad + 1;  //usuario.edad++
document.write(`<p>Edad: ${usuario.edad}</p>`);

//agregar una propiedades
usuario.perfil = 'alguna foto';
document.write(`<p>Perfil: ${usuario.perfil}</p>`);
console.log(usuario)

//cuidado con las propiedades mal escritas o que no existen
document.write(`<p>Tel: ${usuario.Nombre}</p>`);

//borrar una propiedad de un objeto
delete usuario.perfil;
console.log(usuario);

//metodo para saber si mi objeto tiene una propiedad

console.log(usuario.hasOwnProperty('edad'));

//invocar un metodo del objeto
usuario.login();
usuario.logout();