import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ItemscardComponent } from './home/itemscard/itemscard.component';
import { DetailscardComponent } from './home/detailscard/detailscard.component';
import { MaterialModule } from '../material/material.module';
import { AhomeComponent } from './ahome/ahome.component';
import { ApipePipe } from '../pipes/apipe.pipe';
import { SharedModule } from '../shared/shared.module';
import { AforumComponent } from './home/aforum/aforum.component';
import { AformComponent } from './home/aform/aform.component';
import { MainComponent } from './home/main/main.component';
import { DietplanformComponent } from './home/dietplanform/dietplanform.component';
import { FormsModule } from '@angular/forms';
import { BoxComponent } from './home/aforum/box/box.component';
import { ComplaintsComponent } from './home/complaints/complaints.component';
import { CBoxComponent } from './home/complaints/c-box/c-box.component';


const route:Routes=[

  {
  path:"home",
  component: AhomeComponent,
  children:[
    {
      path:'',
      component:MainComponent
    },
    {
      path:'forum',
      component:AforumComponent
    },
    {
      path:"add-diet-plan",
      component: DietplanformComponent,
    },
    {
      path:"delete-diet-plan",
      component: DietplanformComponent,
    },
    {
      path:"complaints",
      component:ComplaintsComponent
    }
  ]
}

]

@NgModule({
  declarations: [
    HomeComponent,
    ItemscardComponent,
    DetailscardComponent,
    AhomeComponent,
    // MainpageComponent,
    ApipePipe,
    AforumComponent,
    AformComponent,
    MainComponent,
    DietplanformComponent,
    BoxComponent,
    ComplaintsComponent,
    CBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    MaterialModule,
    SharedModule,
    FormsModule
  ]
})
export class AdminModule { }
