$('document').ready(function(){
	let searchParams = new URLSearchParams(window.location.search);
	let number = 0;
	if(searchParams.has('number')){
		number = searchParams.get('number');
		let group = groups.find((g)=>g.number == number);
		$('#number').val(group.number);
		$('#faculty').val(group.faculty);
	}

	$('#save').click(function(){
		if (number === 0){
			groups.push({
				number:$('#number').val(),
				faculty:$('#faculty').val()
			});
		}else{
			let group = groups.find((g)=>g.number == number);
			group.number = $('#number').val();
			group.faculty = $('#faculty').val();
		}
		saveGroups(groups);
		$(location).attr('href','index.html');
	});
});