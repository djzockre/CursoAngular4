import { Component } from '@angular/core';

//Directiva tiene un componente
//Atributo html ng-switch etc que se utiliza en la vista para añadir atributos etc
//Directiva ngif condicion if en una vista

@Component({
  selector: 'fruta',
  templateUrl : './fruta.component.html'
})

export class FrutaComponent{
  public nombre_componente = 'Componente de fruta';
  public listado_frutas = 'Naranja, pera, manzana';
  private hola = "Soy privada";
  public nombre:string = "Fernando Ruiz";
  public edad:number =23;
  public mayorDeEdad:boolean = true;
  public trabajos:Array<any> = ['Carpintero','Albañil', 'Blabla'];
  comodin:any = "Cualquier cosa";

  //Tipos de datos en angular 4

  //Constructor para el primer metodo

  constructor(){
      //var trabajos = ['Carpintero','Albañil', 'Blabla'];
      console.log(this.trabajos);
      console.log(this.comodin);

      this.nombre = "Fernando Ruiz";
      this.edad = 17;
      this.mayorDeEdad = true;
      this.comodin= "Si";

      //Lo primero que se ejecuta en el componente
  }



  //Llamar a metodos inciales buena practica
  ngOnInit(){
    //Alacance de variables

    this.cambiarNombre();
    this.cambiarEdad(45);
    console.log(this.nombre);
    console.log(this.edad);

    //Variable y alcance

    var uno = 9;
    var dos = 5;

    if(uno == 9){
      let uno = 3; //Diferencia es el alcance de la variable
      var dos = 88;

      console.log("Dentro del IF" + uno +" y "+ dos);

      //Let imprime dentro de lo que tiene el if y no fuera
    }

    console.log("Fuera del if" + uno +" y "+ dos);


  }
  cambiarNombre(){
    this.nombre = "Carlos";
  }

  cambiarEdad(edad){
    this.edad = edad;
  }



}
