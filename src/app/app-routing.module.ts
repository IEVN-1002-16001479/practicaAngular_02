import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { MultiplicacionComponent } from "./multiplicacion/multiplicacion.component";
import { CinepolisComponent } from "./cinepolis/cinepolis.component";
import { MenuComponent } from "./menu/menu.component";
import { TemperaturaComponent } from "./temperatura/temperatura.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes=[
{path:'', redirectTo:'/menu',pathMatch:'full'},
{path:'Menu', component:MenuComponent},
{path:'Multiplicacion',component:MultiplicacionComponent},
{path:'Cinepolis', component: CinepolisComponent},
{path:'Temperatura', component:TemperaturaComponent},
{path:'Home', component:HomeComponent}

]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}
