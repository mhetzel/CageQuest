
fetch('https://m.imdb.com/name/nm0000115/fullcredits', {            
        method: 'GET',
    }).then(function (response) {
	// The API call was successful!
	return response.text();
}).then(function (html) {
	// This is the HTML from our response as a text string
	console.log(html);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});
