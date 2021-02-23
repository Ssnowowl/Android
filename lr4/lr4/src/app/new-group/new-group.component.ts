import { Component, OnInit, Output} from '@angular/core';
import { GroupsDataService } from 'src/app/services/groups-data.service';


@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.scss']
})
export class NewGroupComponent implements OnInit {

  
  showForm = false;

  constructor(private groupService: GroupsDataService) { }

  ngOnInit(): void {
  }

	onSubmit(myForm){
		const fields = myForm.form.controls;
		this.showForm = false;
		this.groupService.addGroup({

			number: fields.number.value,
			faculty: fields.faculty.value,
			specialty: fields.specialty.value,
			studentsQuantity: fields.studentsQuantity.value
			
		});
	}
}