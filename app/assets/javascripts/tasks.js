// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function() {
	getData = function(){
		$.get( '/tasks.json', function(data) {
			$("tbody").empty();
			for (var object in data) {
				var goal = data[object].goal;
				var due_date = data[object].due_date;
				var html = "<tr><td>" + goal + "</td><td>" + due_date + "</td></tr>";
				$("tbody").append(html);
			}
		});
	}




	$("button").on("click", function() {
		var text = $("#goal").val();
		var date = $("#due_date").val();

		$.post( '/tasks', { 
			task: { 
				goal: text,
				due_date: date
			}
		});

		getData();

		$('#goal').val('');
	});

});