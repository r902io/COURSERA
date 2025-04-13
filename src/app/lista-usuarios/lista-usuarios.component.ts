import { Component,OnInit } from '@angular/core';
import { Usuario } from './../models/usuario.model';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit{
  usuarios: Usuario[];
  constructor() { 
    this.usuarios = [];
  }
  ngOnInit(){}
  
  guardar(nombre: string, foto: string, descripcion: string): boolean{
    this.usuarios.push(new Usuario(nombre, foto, descripcion));
    return false;
  }
}
