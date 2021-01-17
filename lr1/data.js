var groups = localStorage.getItem("group_data");
if(localStorage.getItem("group_data") == null){
	groups = [
		{
			number: 'Candy',
			faculty: 'Sweets'
		},
		{
			number: 'Cookies',
			faculty: 'Sweets'
		}
	];
	
} else {
	groups = JSON.parse(groups);
}
function saveGroups(groups){
	localStorage.setItem("group_data", JSON.stringify(groups));
}

