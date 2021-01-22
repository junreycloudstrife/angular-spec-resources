import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPersonComponent } from './add-person/add-person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { UpdatePersonComponent } from './update-person/update-person.component';

const routes: Routes = [
    { path: 'person-list', component: PersonListComponent },
    { path: 'add-person', component: AddPersonComponent},
    { path: 'update-person', component: UpdatePersonComponent },
    { path: '', pathMatch: 'full', redirectTo: 'person-list' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  