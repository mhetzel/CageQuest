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
		 
		 container_div.append('<div class="text">' + f['title'] + ' (' + f['year'] + ')</br>' + f['character']+'</div>')
		 $('#unwatched').append(container_div)
     });
});