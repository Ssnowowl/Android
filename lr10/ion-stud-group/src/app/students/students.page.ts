import { Component, OnInit } from '@angular/core';
import {DataGetterService} from '../services/data-getter.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FireDataGetterService} from '../service/fire-data-getter.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {
  grpid: string;
  grpnumb: string;
  students: any[];

  constructor(private dataGetter:DataGetterService,
   			  private route: ActivatedRoute,
          private router: Router,
          private fireData: FireDataGetterService) { 
    this.grpid = this.route.snapshot.paramMap.get('id');
  }


  ngOnInit() {
  	this.grpnumb = this.route.snapshot.paramMap.get('grpnumb');
  	
  
    this.fireData.getStudents(this.grpid).subscribe(
      data => this.students = data
      );
  }
}
