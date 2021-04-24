import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {DataGetterService, StudGroup} from '../../services/data-getter.service';
import {FireDataGetterService} from '../../service/fire-data-getter.service';
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

  constructor(private dataGetter: DataGetterService,
    private fireData: FireDataGetterService) { }

  ngOnInit() {
  	if (this.isNew) {
  		this.studentGroup = {
        id: null,
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

  saveGroup() {
    this.fireData.editGroup(this.studentGroup);
  }

}
