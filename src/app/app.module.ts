import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ReusableComponent } from './reusable/reusable.component';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ApiComponent } from './api/api.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { UpdatePersonComponent } from './update-person/update-person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { FirstChildComponent } from './person-list/first-child.component';
import { SecondChildComponent } from './person-list/second-child.component';
import { ThirdChildComponent } from './person-list/third-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ReusableComponent,
    TemplateComponent,
    ReactiveComponent,
    ApiComponent,
    AddPersonComponent,
    UpdatePersonComponent,
    PersonListComponent,
    FirstChildComponent,
    SecondChildComponent,
    ThirdChildComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
