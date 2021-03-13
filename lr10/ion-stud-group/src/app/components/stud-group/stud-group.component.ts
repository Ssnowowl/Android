import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {StudGroup} from '../../service/data-getter.service';

@Component({
  selector: 'app-stud-group',
  templateUrl: './stud-group.component.html',
  styleUrls: ['./stud-group.component.scss'],
})
export class StudGroupComponent implements OnInit {

  @Input() studentGroup: StudGroup;
  @Input() isNew: boolean;
  @Output() addGroup = new EventEmitter();
  @Output() cancelAddingGroup = new EventEmitter();
  title: string;

  constructor() { }

  ngOnInit() {
  	if (this.isNew) {
  		this.studentGroup = {
  			number: '',
		  	faculty: '',
		  	specialty: '',
		  	studentsQuantity: null
  		};
  		this.title = 'New group';
  	}
  }

  addNew() {
  	if (this.isNew) {
  		this.addGroup.emit(this.studentGroup);
  	}
  }

  cancelAdding() {
  	if (this.isNew) {
  		this.cancelAddingGroup.emit();
  	}
  }

}
