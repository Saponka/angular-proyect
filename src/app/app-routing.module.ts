import { NgModule  } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";

import { FormComponent } from "./form/form.component";
import { MainComponent } from "./main/main.component";
import { ProductosComponent } from "./pagina/productos/productos.component";



//variable
const routes: Routes=[
    {path:'',component:MainComponent},
    {path:'form',component:FormComponent},
    {path:'productos',component:ProductosComponent},
    {path:'**',pathMatch:'full',redirectTo:'404'}
]


//decorador
@NgModule({
    imports:[RouterModule.forRoot(routes,{useHash:true,scrollPositionRestoration:'enabled'
})],
    exports:[RouterModule]
})
//nueva class 
export class AppRoutingModule{};