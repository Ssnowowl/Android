function saveGroups (groups) {
	localStorage.setItem("groups_data",JSON.stringify(groups));
}

var groups = localStorage.getItem("groups_data");
if(localStorage.getItem("groups_data") === null){
	groups = [
	{
		number: 'Candy',
		faculty: 'Sweets'
	},
	{
		number:'Cookies',
		faculty:'Sweets'
	}
	];
	saveGroups(groups);
} else {
	groups = JSON.parse(groups);
}
