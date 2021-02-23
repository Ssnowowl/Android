import { Component, OnInit } from '@angular/core';
import {GroupsDataService} from '../services/groups-data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

 students: any[];

  constructor(private groupService: GroupsDataService,
  			  private ActivatedRoute:ActivatedRoute) { 
  }

  ngOnInit(): void {
  	this.ActivatedRoute.params.subscribe(
  		params => this.getStudents(params.grpId)
  		);
  }

  getStudents(numb: string){
  	const n = +numb;
  	this.groupService.getStudents(numb).subscribe(
  		(students)=>{
  			this.students = students;
  		}
  	);
  }
}
