import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  listTareas: Tarea[] = []
  nombreTarea = '';

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(){
    
    //crear objeto tarea
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }

    //agregar el obj tarea en el array
    this.listTareas.push(tarea); //el metodo push de JS que permite agg elementos al final del listado

    //reset form
    this.nombreTarea = '';
  }

  eliminarTarea(index: number): void{
    this.listTareas.splice(index, 1);
  }

  actualizarTarea(index:number, tarea: Tarea, ): void{
    this.listTareas[index].estado = !tarea.estado;
  }

}
