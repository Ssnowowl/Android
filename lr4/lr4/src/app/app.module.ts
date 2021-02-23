import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MyComponent} from './my/my.components';
import { GroupComponent } from './group/group.component'
import {FormsModule} from '@angular/forms';
import { NewGroupComponent } from './new-group/new-group.component';
import { RouterModule, Routes } from '@angular/router';
import { GroupListComponent } from './group-list/group-list.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
	{path: 'groups', component: GroupListComponent},
	{path: 'students/:grpId', component:StudentListComponent},
	{path: '', redirectTo:'groups', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent, MyComponent, GroupComponent, 
    NewGroupComponent, GroupListComponent, StudentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
