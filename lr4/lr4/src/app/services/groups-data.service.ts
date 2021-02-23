import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupsDataService {
  private groups = [
  {
	  	number: 'Candy Crush',
	  	faculty: 'Sweets',
	  	specialty: 'Candies',
	    studentsQuantity: 20
  },
  {
  		number: 'Loffes',
  		faculty: 'Sweets',
  		specialty: 'Waffles',
      studentsQuantity: 25

  },
 ];

 private students =[
    {name:'Candy Crush - Coconut', groupNumb:"Candy Crush"},
    {name:'Candy Crush - Nuts', groupNumb:"Candy Crush"},
    {name:'Loffes - Strawberry', groupNumb:"Loffes"},
    {name:'Loffes - Grapes', groupNumb:"Loffes"}


  ];

  constructor() { }

  getGroups() : Observable<any[]>{
    return new Observable<any[]>(
        subscriber=>{
          subscriber.next(this.groups);
          subscriber.complete();
        }
      );
  }
  getStudents(groupNumber: string): Observable<any[]>{
    return new Observable<any[]>(
      subscriber => {
        subscriber.next(this.students.filter(elem=>{
      return elem.groupNumb === groupNumber;
    }));
        subscriber.complete();
      }
      );
  }
  addGroup(group) {
  	this.groups.push(group);
  }

  deleteGroup(index){
  	this.groups.splice(index, 1);
  }
}
