import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './person/list/list.component';
// import { ListComponent } from './person/list/list.component';


const routes: Routes = [
  
  
  
  
  {
    path : '' ,
    loadChildren: () => import('./person/person.module').then((m) => m.PersonModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
