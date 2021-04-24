import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx'; 


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
	  BrowserModule, 
	  IonicModule.forRoot(), 
	  AppRoutingModule, 
	  HttpClientModule,
	  AngularFireModule.initializeApp(environment.firebase),
	  AngularFireStorageModule
 ],
  providers: [
  	// StatusBar,
  	// SplashScreen,
  	{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
  	AngularFirestore
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
