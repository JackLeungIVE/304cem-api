import { GetComponent } from './get/get.component';
import { ChangeComponent } from './change/change.component';
import { DeleteComponent } from './delete/delete.component';
import { PutComponent } from './put/put.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: GetComponent },
  { path: 'change', component: ChangeComponent },
  { path: 'delete', component: DeleteComponent },
  { path: 'put', component: PutComponent }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
