watched = []

user_watched = localStorage.getItem('userWatched');
if (user_watched) {
	watched = user_watched.split(',');
}

function loadJson() {
	$.getJSON('movies.json', function(data) {
		$('#watched').empty()
		$('#watched').append('<h1>Watched</h1>')
		$('#unwatched').empty()
		$('#unwatched').append('<h1>Unwatched</h1>')
		$.each(data, function(i, f) {
			// console.log(f)
			container_div = $('<div class="container"></div>')
			if (f['cover']) {
			   container_div.append('<div class="image"><img src="'+ f['cover'] +'" width="50" height="75"></div>')
			}
			else {
			   container_div.append('<div class="image"><img src="android/comingsoon.jpg" width="50" height="75"></div>')
			}
			
			text_div = $('<div class="text"></div>')
   
			check_box = $('<input type="checkbox" id="' + f['id'] + '" name="movie_id" value="' + f['id'] + '">')
   
			check_box.change(function() {
			   if ($(this).is(':checked')) {
				   console.log(`${this.value} is checked`);
				   watched.push(this.value)
				   localStorage.setItem('userWatched', watched)
				   loadJson()
			   }
			   else {
				   console.log(`${this.value} is unchecked`);
			   }
			});
	   
			text_div.append(check_box)
			text_div.append('<label for="' + f['id'] + '">' + f['title'] + ' (' + f['year'] + ')</br>' + f['character']+'</label><br>')
   
			container_div.append(text_div)
			if (watched.includes(f['id'])) {
			   $('#watched').append(container_div)
			} else {
			   $('#unwatched').append(container_div)
			}
		});
   });
}


loadJson()
