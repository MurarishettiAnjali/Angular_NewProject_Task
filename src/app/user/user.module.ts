import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ItemsComponent } from './userhome/items/items.component';
import { OnePipe } from '../pipes/one.pipe';
import { ItemsCardComponent } from './userhome/items/items-card/items-card.component';
import { DetailsCardComponent } from './userhome/items/details-card/details-card.component';
import { ForumComponent } from './userhome/forum/forum.component';
import { DietplanComponent } from './userhome/dietplan/dietplan.component';
import { DcontentsComponent } from './userhome/dietplan/dcontents/dcontents.component';
import { DboxComponent } from './userhome/dietplan/dcontents/dbox/dbox.component';
import { DhomeComponent } from './userhome/dietplan/dhome/dhome.component';
import { ComplaintsComponent } from './userhome/complaints/complaints.component';
import { CardBoxComponent } from './userhome/forum/card-box/card-box.component';
import { CreateDietplanComponent } from './userhome/create-dietplan/create-dietplan.component';
import { HttpClientModule } from '@angular/common/http';

const route:Routes=[
  
  {
  path:"home",
  component: HomeComponent,
  children: [
    {
      path: "",
      component: UserhomeComponent
    },
    {
      path:"food",
      component: ItemsComponent
    },
    {
      path:"forum",
      component: ForumComponent
    },
    {
      path:"details",
      component:DetailsCardComponent
    },
    {
      path:"diet",
      component:DietplanComponent
    },
    {
      path:"complaints",
      component:ComplaintsComponent
    },
    {
      path:"create dietplan",
      component:CreateDietplanComponent
    }
  ]
}

]

@NgModule({
  declarations: [
    HomeComponent,
    UserhomeComponent,
    OnePipe,
    ItemsComponent,
    ItemsCardComponent,
    DetailsCardComponent,
    ForumComponent,
    DietplanComponent,
    DhomeComponent,
    DcontentsComponent,
    DboxComponent,
    ComplaintsComponent,
    CardBoxComponent,
   
    CreateDietplanComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ],
  exports : [RouterModule]
})
export class UserModule { }
