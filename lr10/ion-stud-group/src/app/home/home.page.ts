import { Component } from '@angular/core';
import {DataGetterService, StudGroup} from '../services/data-getter.service';
import {SharedDataService} from '../services/shared-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'Sweet`s Group';
  userName: string;
	groups: StudGroup[];
	showNew = false;
	showEdit = -1;

  constructor(private dataGetter: DataGetterService, private sharedData: SharedDataService) {

  	this.dataGetter.getGroups().subscribe(
  		(data) => {
  			this.groups = data;
  		}
  	);
    this.userName = this.dataGetter.getUser();
  }

  ionViewDidEnter(){
  if(this.sharedData.getTextData()!='')
    this.title = this.sharedData.getTextData();
}
  add() {
  	this.showNew = true;
  }


  delete(index: number) {
  	this.dataGetter.deleteGroup(index);
  }

  addGroup(group) {
  	this.dataGetter.addGroup(group);
  	this.showNew = false;
  }

  

}
