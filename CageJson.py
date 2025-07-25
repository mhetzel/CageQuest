import json
import requests
from bs4 import BeautifulSoup
import imdb
from imdb import Cinemagoer
import imdb.helpers as helpers

moviesDB = moviesDB = imdb.IMDb()


ActorId = "0000115"
person = moviesDB.get_person(ActorId)
#Actor's name
print (person)
actor_work = moviesDB.get_person_filmography(ActorId)
for movie in actor_work['data']['filmography']['actor'] :
    try:
        print (movie.movieID, movie['title'], movie.currentRole, movie['year'])
    except KeyError:
        #print("No Year for the movie")
        print (movie.movieID, movie['title'], movie.currentRole)


# html = requests.get('https://m.imdb.com/name/nm0000115/?showAllCredits=true', timeout=50)
# # print(html.text)
# soup = BeautifulSoup(html.text, 'html.parser')

# divs = soup.find_all(class_='.ipc-metadata-list-summary-item__tc')
# for div in divs:
#     print(div.a.text)

# filmography_html = soup.find(id='filmo-head-actor')

# all_films_html = filmography_html.find_next_sibling("div")

# movies = []

# for div in all_films_html.find_all('div'):
#     movie_id = div.b.a['href'].split('/')[2].strip('tt')
#     movie = ia.get_movie(movie_id)
#     print(div.b.a.text.strip('\n').strip())
#     movie_dict = {
#         'title' : div.b.a.text.strip('\n').strip(),
#         'year' : div.span.text.strip('\n').strip(),
#         'character' : div.br.next_sibling.strip('\n').strip(),
#         'plot' : movie.get('plot'),
#         'genres' : movie.get('genres'),
#         'cover' : movie.get('cover url'),
#         'id' : movie_id
#     }
#     movies.append(movie_dict)
# print(json.dumps(movies, indent=3))

# with open('movies.json', 'w') as f:
#     json.dump(movies, f, indent=3)
