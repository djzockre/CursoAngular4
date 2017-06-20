import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


//Importar componentes
import {EmpleadoComponent} from './empleado/empleado.component';
import {FrutaComponent} from './fruta/fruta.component';

import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import {CochesComponent } from './coches/coches.component';
import {PlantillasComponent } from './plantillas/plantillas.component';

const appRoutes: Routes = [
    {path:'', component: HomeComponent},
    {path:'empleado', component: HomeComponent},
    {path:'fruta', component: FrutaComponent},
    {path:'plantillas', component: PlantillasComponent},
    {path:'pagina-principal', component: HomeComponent},
    {path:'contacto', component: ContactoComponent},  //Cuando la ruta falle
    {path:'contacto/:page', component: ContactoComponent},
    {path:'coches', component: CochesComponent},
    {path:'**', component: EmpleadoComponent},  //Cuando la ruta falle



];

export const appRoutingProviders : any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
