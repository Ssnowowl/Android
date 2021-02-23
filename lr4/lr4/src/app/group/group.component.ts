import { Component, Input, OnInit} from '@angular/core';
import { GroupsDataService } from 'src/app/services/groups-data.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  @Input() group;
  @Input() grpIndex;
  showInfo = false;
 
  
  constructor(private groupService: GroupsDataService) {}

  ngOnInit() {

  }
   delGroup(){
    this.groupService.deleteGroup(this.grpIndex);
  }

    
  // studentsQuantity = 15;
  // students = [
  // 		'Cherry',
  // 		'Coconut',
  // 		'Nuts'
  // ];
  // starosta = {
  // 	name:'Belousova Yana',
  // 	age:20,
  // 	adress:'Mykolaiv, Ukraine'
  // }

  
  /*changeNumber(numb: string) {
    this.number = numb;
  } */

}
