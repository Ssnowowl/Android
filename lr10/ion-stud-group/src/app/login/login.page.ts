import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataGetterService} from '../services/data-getter.service';
import {AlertController} from '@ionic/angular';
import {FireDataGetterService} from '../service/fire-data-getter.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	userName:string;
  passWord:string;

	constructor(
		private router: Router,
		private dataGetter: DataGetterService,
		public alertController: AlertController,
    private fireData: FireDataGetterService) {}

  ngOnInit() {
    this.fireData.getGroups().subscribe(
      data => console.log(data)
      );
  }

  login(){
    this.dataGetter.setUser('FakeUser');
    this.router.navigate(['/home']);

  	// this.dataGetter.checkUser({
   //    username: this.userName,
   //    password: this.passWord
   //  }).subscribe(
   //    result => {
   //      if(result.hasOwnProperty('error')){
   //        this.userNotExistAlert(result.error);
   //    } else {
   //      if(result.hasOwnProperty('token')){
   //        this.dataGetter.setUser(this.userName);
   //        this.dataGetter.setToken(result.token);
   //        this.router.navigate(['/home']);
   //      } else{
   //        this.userNotExistAlert('Unexpected error');
   //      }
   //    }
   //  }
   //  );
  }
    async userNotExistAlert(massage){
  	const alert = await this.alertController.create({
  		header:'Alert!',
  		subHeader:'Failed to login',
  		message: massage,
  		buttons:['OK']
  	});

  	await alert.present();
  }
}