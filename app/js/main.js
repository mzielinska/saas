$.getJSON('../package.json', function(data){
	console.log(data.author);
	$('span').append(data.author);
	
});

function wstaw() {
	$('span').append(data.author);
}
