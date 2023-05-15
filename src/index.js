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

	
		 text_div.append('<input type="checkbox" id="' + f['id'] + '" name="' + f['id'] + '">')
		 text_div.append('<label for="' + f['id'] + '">' + f['title'] + ' (' + f['year'] + ')</br>' + f['character']+'</label><br>')

		 container_div.append(text_div)
		 $('#unwatched').append(container_div)
     });
});