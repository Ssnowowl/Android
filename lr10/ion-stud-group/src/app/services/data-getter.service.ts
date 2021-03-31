import { Injectable } from '@angular/core';
import {Observable, of } from 'rxjs';

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

  private groups: StudGroup[] = [

  {
  	number: 'Candy Crush',
  	faculty: 'Sweets',
  	specialty: 'Candy',
  	studentsQuantity: 34
  },
  {
  	number: 'Loffles',
  	faculty: 'Sweets',
  	specialty: 'Waffles',
  	studentsQuantity: 20
  },
  ]; 

  private students = [
    {name: 'Candy Coconut', groupNumb:"Candy Crush",
     rating:'5', code:1 },
     {name: 'Loffles Coconut', groupNumb:"Loffles",
     rating:'4.3', code:1},

  ];

  private userName = '';

  private users = [
    'Admin', 'User', 'User2'
  ];

  getUser() {
    return this.userName;

  }

  setUser(name: string) {
    this.userName = name;
  }

  userExists(name: string): boolean {
    return this.users.indexOf(name) !== -1;
  }
  constructor() { }

  getGroups(): Observable<StudGroup[]> {
  	return of(this.groups);

  }

  addGroup(group: StudGroup) {
  	this.groups.push(group);
  }
  deleteGroup(index) {
  	this.groups.splice(index, 1);

  }

  getStudents(groupNumber: string): Observable<any[]> {
    return of(this.students.filter( elem => {
      return elem.groupNumb === groupNumber;
    }));
  }
}
