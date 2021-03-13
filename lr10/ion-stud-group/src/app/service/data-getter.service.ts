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
}
