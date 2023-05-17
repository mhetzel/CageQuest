watched = []

user_watched = localStorage.getItem('userWatched');
if (user_watched) {
	watched = user_watched.split(',');
}

displayExtraInfo = false;
watched_count = watched.length;


function loadJson() {
	$.getJSON('movies.json', function(data) {
		$('#watched').empty()
		$('#unwatched').empty()
		unwatched_count = data.length;
		$.each(data, function(i, f) {
			let container_div = $('<div class="container"></div>')
			if (f['cover']) {
			   container_div.append('<div class="image"><img src="'+ f['cover'] +'" width="50" height="75"></div>')
			}
			else {
			   container_div.append('<div class="image"><img src="android/comingsoon.jpg" width="50" height="75"></div>')
			}
			
			let text_div = $('<div class="text"></div>')
   
			let check_box = $('<input type="checkbox" id="' + f['id'] + '" name="movie_id" value="' + f['id'] + '">');
			if (watched.includes(f['id'])) {
			  check_box.prop('checked', true);
			}
   
			check_box.change(function() {
			   if ($(this).is(':checked')) {
				   console.log(`${this.value} is checked`);
				   watched.push(this.value)
				   localStorage.setItem('userWatched', watched)
				   loadJson()
			   }
			   else {
				   console.log(`${this.value} is unchecked`);
				   const index = watched.indexOf(this.value);
				   if (index > -1) { // only splice array when item is found
					  watched.splice(index, 1); // 2nd parameter means remove one item only
				   }
				   localStorage.setItem('userWatched', watched)
				   loadJson()
			   }
			});
	   
			text_div.append(check_box)
			text_div.append('<label for="' + f['id'] + '">' + f['title'] + ' (' + f['year'] + ')</br>' + f['character']+'</label><br>')
			let expand_button = $('<button id="expand_'+f['id']+'"></button>');
			let expandIcon = $('<i class="arrow right"></i>')
			let expandedIcon = $('<i class="arrow down"></i>')

			let extraDiv = $('<div id="extra_'+f['id']+'"></div>')
			extraDiv.append('<div>'+f['genres'].join(", ")+'</div>')
			extraDiv.append('<div>'+f['plot'].join(", ")+'</div>')

			expand_button.append(expandIcon);
			text_div.append(expand_button)

			expand_button.click(function() {
				if (displayExtraInfo) {
					displayExtraInfo = false;
					expandedIcon.remove()
					expand_button.append(expandIcon);
					extraDiv.remove()
				  } else {
					displayExtraInfo = true;
					expandIcon.remove()
					expand_button.append(expandedIcon);
					text_div.append(extraDiv)
				  }
			})
			
			container_div.append(text_div)
			if (watched.includes(f['id'])) {
			   $('#watched').append(container_div)
			} else {
			   $('#unwatched').append(container_div)
			}
			$('#unwatched_count').text(`${unwatched_count}`);
			$('#watched_count').text(watched_count);
		});
   });
}


loadJson()
