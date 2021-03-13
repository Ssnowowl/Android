import { Component } from '@angular/core';
import {DataGetterService, StudGroup} from '../service/data-getter.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	groups: StudGroup[];
	showNew = false;
	showEdit = -1;

  constructor(private dataGetter: DataGetterService) {

  	this.dataGetter.getGroups().subscribe(
  		(data) => {
  			this.groups = data;
  		}
  	);
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
