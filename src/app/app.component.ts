import { Component } from '@angular/core';

@Component({ //Soporta una serie de metadatos
  selector: 'app-root', //metadato que indca a la clase qe
  templateUrl: './app.component.html', //Asigna una vista o una plantilla a un archivo html
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Componente de base principal';
}
