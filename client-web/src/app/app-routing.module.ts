import { CreateComponent } from './create/create.component';
import { ChangeComponent } from './change/change.component';
import { DeleteComponent } from './delete/delete.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: CreateComponent },
  { path: 'change', component: ChangeComponent },
  { path: 'delete', component: DeleteComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
