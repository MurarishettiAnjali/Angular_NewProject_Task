import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SforumComponent } from './sforum/sforum.component';
import { CardComponent } from './sforum/card/card.component';
import { AmainpageComponent } from './amainpage/amainpage.component';
@NgModule({
  declarations: [
    MainpageComponent,
    SforumComponent,
    CardComponent,
    AmainpageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[MainpageComponent,
    AmainpageComponent,
  SforumComponent]
})
export class SharedModule { }
