var groups = localStorage.getItem("groups_data");
if(localStorage.getItem("groups_data")==null){
	groups = [
	{
		number: 'Violin',
		faculty: 'Gibson Brands'
	},
	{
		number:'Guitar',
		faculty:'Harman International Industries'
	}
	];
}else{
	groups=JSON.parse(groups);
}
function saveGroups (groups) {
	localStorage.setItem("groups_data",JSON.stringify(groups));
}
