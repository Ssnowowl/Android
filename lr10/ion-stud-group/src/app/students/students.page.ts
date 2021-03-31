import { Component, OnInit } from '@angular/core';
import {DataGetterService} from '../services/data-getter.service';
import {ActivatedRoute} from '@angular/router';
import {SharedDataService} from '../services/shared-data.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {
  grpnumb: string;
  students: any[];

  textData

  constructor(private dataGetter:DataGetterService,
   			  private route: ActivatedRoute,
          private sharedData: SharedDataService) { }


  ngOnInit() {
  	this.grpnumb = this.route.snapshot.paramMap.get('grpnumb');
  	this.dataGetter.getStudents(this.grpnumb).subscribe(
  		data => {
  			this.students = data;
  		}
  	);
  }


  passData() {
    this.sharedData.setTextData(this.textData);
  }
}
