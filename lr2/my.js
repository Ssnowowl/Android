$('document').ready(function(){
	var rowText;
	var content = $('#groups');
	for(var row of groups){
		rowText = 
		`<tr>
			<td><h5>${row.number}</h5></td>
			<td class="right-align">
			<a href="group.html?number=${row.number}" class="btn-floating waves-effect waves-light blue" style="margin-right:10ps;">
				<i class="material-icons">edit</i>
			</a>
			<a rowid="${row.number}" class="rem-row btn-floating waves-effect waves-light red">
				<i class="material-icons">delete</i>
			</a>
			</td>
		</tr>`;
		content.append(rowText);
	}
	$('.rem-row').click(function(){
		let number = $(this).attr('rowid');
		saveGroups(groups.filter((g)=>g.number != number));
		location.reload();
	})
});