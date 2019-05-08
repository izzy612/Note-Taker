$(document).on('click', '#submit', function(event) {
	event.preventDefault();
	var addNote = {
		title: $('#title').val().trim(),
		body: $('#text-body').val().trim()
	};
	$.ajax({
		url: '/api/notes',
		method: 'POST',
		data: addNote
	}).then(function(data) {
		$('#title').val(''), $('#text-body').val('');
	});

	$('#title').val('');
	$('#text-body').val('');
	$('#notes').empty('');

	applyNotes();
});

function applyNotes() {
	$.ajax({
		url: '/api/notes',
		method: 'GET'
	}).then(function(data) {
		console.log(data);
		for (let i = 0; i < data.length; i++) {
			var notes = $('#notes');
			var theContent = $("<li class = 'list-group-item'>");

			theContent.append(
				$('<h4>').text(data[i].title),
				$('<hr>'),
				$('<p>').text(data[i].txt),
				$("<a href = '#' class = 'delete btn btn-dark'>").text('Delete')
			);

			theContent.attr('data', data[i].id);
			notes.append(theContent);
		}
	});
}
