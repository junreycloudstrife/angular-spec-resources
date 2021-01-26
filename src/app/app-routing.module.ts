import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPersonComponent } from './add-person/add-person.component';
import { FirstChildComponent } from './person-list/first-child.component';
import { PersonListComponent } from './person-list/person-list.component';
import { SecondChildComponent } from './person-list/second-child.component';
import { ThirdChildComponent } from './person-list/third-child.component';
import { UpdatePersonComponent } from './update-person/update-person.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'person-list' },
    { path: 'person-list', component: PersonListComponent,
        children: [
            { path: '', redirectTo: 'first', pathMatch: 'full'},
            { path: 'first', component: FirstChildComponent },
            { path: 'second', component: SecondChildComponent },
            { path: 'third', component: ThirdChildComponent }
        ] },
    { path: 'add-person', component: AddPersonComponent},
    { path: 'update-person', component: UpdatePersonComponent },
    { path: '**', component: PersonListComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  