import { Injectable } from '@angular/core';
import {Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

export interface StudGroup {
	number: string;
	faculty: string;
	specialty: string;
	studentsQuantity: number;
}
@Injectable({
  providedIn: 'root'
})
export class DataGetterService {

  baseUrl = 'http://localhost/api/';
  groups = [];
  students = [];
  users = [];

  private userName = '';
  private token = '';

  constructor(private http: HttpClient) { }
  
  checkUser (user){
    return this.http.post<any>(this.baseUrl + '?action=login', user);

  }

  addGroup(group: StudGroup){
    this.groups.push(group);
  }

  deleteGroup(index){
    this.groups.splice(index,1);
  }
  
  getUser() {
    return this.userName;

  }

  setUser(name: string) {
    this.userName = name;
  }

  setToken(token: string) {
    this.token = token;
  }
  

  getGroups() {
  	return this.http.get<any>(this.baseUrl + '?action=get-groups&token=' + this.token);

  }


  getStudents() {}
}
