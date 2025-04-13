export class Usuario{
    nombre: string;
    foto: string;
    descripcion: string;
    constructor(nombre: string, foto: string, descripcion: string = ''){
        this.descripcion = descripcion;
        this.nombre = nombre;
        this.foto = foto;
    }   
}