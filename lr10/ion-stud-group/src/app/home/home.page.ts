import { Component } from '@angular/core';
import {DataGetterService, StudGroup} from '../services/data-getter.service';
import {SharedDataService} from '../services/shared-data.service';
import {Router} from '@angular/router';
import {FireDataGetterService} from '../service/fire-data-getter.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  groups: StudGroup[];
  
  userName: string;

	showNew = false;
	showEdit = -1;

  extraData: string;

  constructor(private dataGetter: DataGetterService,
              private router: Router,
              private dataExchanger: DataExchangerService,
              private fireData: FireDataGetterService) {

  	// this.dataGetter.getGroups().subscribe(
  	// 	(data) => {
  	// 		this.groups = data;
  	// 	}
  	// );
    this.fireData.getGroups().subscribe(
      data => this.groups = data
      );
    this.userName = this.dataGetter.getUser();
  }

  ionViewDidEnter(){
      this.extraData = this.dataExchanger.getData('myData');
  }
  add() {
  	this.showNew = true;
  }


  delete(group) {
  	this.fireData.delGroup(group);
  }

  addGroup(group) {
  	// this.dataGetter.addGroup(group).subscribe(
   //    res => {
   //      this.dataGetter.getGroups().subscribe(
   //        (data) => {
   //          this.groups = data;
   //        }
   //      );
   //    });;
   this.fireData.addGroup(group);
  	this.showNew = false;
  }


  

}
