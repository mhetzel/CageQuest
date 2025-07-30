import json
import tmdbsimple as tmdb

tmdb_api_key ="67ec34f8b869431b39b73b71cc631ac2"
tmdb.API_KEY = tmdb_api_key


nic_cage = tmdb.People(2963)
movies = nic_cage.movie_credits()

movie_list = []


for movie in movies['cast']:
    movie_dict = {
        "title": movie['original_title'],
        "year": movie['release_date'][:4] if 'release_date' in movie else "",
        "character": movie['character'],
        "plot": [movie.get('overview', '')],
        "genres": movie.get('genre_ids', []),
        "cover": f"https://image.tmdb.org/t/p/w500/{movie['poster_path']}" if 'poster_path' in movie else None,
        "id": str(movie['id'])
    }
    movie_list.append(movie_dict)

with open('movies.json', 'w') as f:
    json.dump(movie_list, f, indent=4)
