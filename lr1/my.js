$('document').ready(function(){
	var rowText;
	var content = $('#groups');
	for(var row of groups){
		rowText = 
		`<tr>
			<td>${row.number}</td>
			
			<td class="text-right">
				<a class="btn btn-outline-secondary" href="group.html?
				number=${row.number}">
					<i class="fa fa-fw fa-edit"></i>
				</a>
				<button type="button" class="btn btn-outline-danger rem-row"
				rowid="${row.number}">
					<i class="fa fa-fw fa-trash"></i>
				</button>
			</td>
		<tr>`;
		content.append(rowText);
	}
	$('.rem-row').click(function(){
		let number = $(this).attr('rowid');
		saveGroups(groups.filter((g)=>g.number !== number));
		location.reload();
	})
});