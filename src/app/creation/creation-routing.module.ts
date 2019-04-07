import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreationComponent } from './creation.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CreationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreationRoutingModule { }
