watched = []

$.getJSON('movies.json', function(data) {
     $.each(data, function(i, f) {
         console.log(f)
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
			}
			else {
				console.log(`${this.value} is unchecked`);
			}
		 });
	
		 text_div.append(check_box)
		 text_div.append('<label for="' + f['id'] + '">' + f['title'] + ' (' + f['year'] + ')</br>' + f['character']+'</label><br>')

		 container_div.append(text_div)
		 if (f['id'] in watched) {
			$('#watched').append(container_div)
		 } else {
			$('#unwatched').append(container_div)
		 }
     });
});
