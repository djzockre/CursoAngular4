import { Component } from '@angular/core';
import { Empleado } from './empleado';
@Component({
  selector: 'empleado',
  templateUrl : './empleado.component.html'
})

export class EmpleadoComponent{
  public titulo = 'Componente empleados';
  public empleado:Empleado;
  public trabajadores:Array<Empleado>;
  public trabajador_externo:boolean;
  public color:string;
  public color_seleccionado:string;

  constructor(){
    this.empleado = new Empleado('Fernando Ruiz', 45,'Fullstack', true);
    this.trabajadores = [
        new Empleado('Marta', 45,'Fullstack', true),
        new Empleado('Samsung', 45,'Administrativo', true),
        new Empleado('Victor robles', 45,'Cocinero', false)

    ];

    this.trabajador_externo = false;
    this.color= 'blue';
    this.color_seleccionado = '#ccc';

  }

 ngOnInit(){
  //Peticiones AJAX
   console.log(this.empleado);
   console.log(this.trabajadores);

 }

 cambiarExterno(valor){
   this.trabajador_externo = valor;

 }

}
