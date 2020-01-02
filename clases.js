class Persona{
    constructor(nombre, apellido, altura){ //constructor de la clase
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }
    saludar(fn){ //metodos que reciben funciones 
        console.log('Hola me llamo ${this.nombre} ${this.apellido}');
        if (fn) {
            fn(this.nombre, this.apellido, false);
        }
    }
    soyAlto(){ //metodos en js
        return this.altura > 1.8
    }//hola
}
class Desarrollador extends Persona{ //herencia en js
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura); //llamada al constructor padre en JS para culminar la herenci
    }
    saludar(fn) {
        console.log('Hola me llamo ${this.nombre} ${this.apellido}')
        if (fn) {
            fn(this.nombre, this.apellido, true);
        }
    }
}
function respondersaludo(nombre, apellido, esDev) {
    console.log('Hola ${nombre} ${apellido}');
    if(esDev){
        console.log('AH, ERES DESARROLLADOR');
    }
}