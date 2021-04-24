import { Injectable } from '@angular/core';
import {Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

export interface StudGroup {
  id: string;
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
  
  checkUser(user){
    return this.http.post<any>(this.baseUrl + '?action=login', user);

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

  editGroup(group) {
    return this.http.post<any>(
        this.baseUrl + '?action=edit-group&token=' + this.token,
        group
      );
  }

  addGroup(group){
    return this.http.post<any>(
        this.baseUrl + '?action=add-group&token=' + this.token,
        group
      );
  }

  delGroup(group){
    return this.http.post<any>(
        this.baseUrl + '?action=del-group&token=' + this.token,
        group
      );
  }

  getStudents(id: number){
    return this.http.get<any>(
        this.baseUrl + '?action=get-students&group=$(id)&token=${this.token}');
       
  }
}
