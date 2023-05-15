import json
import requests
from bs4 import BeautifulSoup
from imdb import Cinemagoer
import imdb.helpers as helpers

ia = Cinemagoer()


html = requests.get('https://m.imdb.com/name/nm0000115/fullcredits', timeout=50)
# print(html.text)
soup = BeautifulSoup(html.text, 'html.parser')

filmography_html = soup.find(id='filmo-head-actor')

all_films_html = filmography_html.find_next_sibling("div")

movies = []

for div in all_films_html.find_all('div'):
    movie = ia.get_movie(div.b.a['href'].split('/')[2].strip('tt'))
    print(div.b.a.text.strip('\n').strip())
    movie_dict = {
        'title' : div.b.a.text.strip('\n').strip(),
        'year' : div.span.text.strip('\n').strip(),
        'character' : div.br.next_sibling.strip('\n').strip(),
        'plot' : movie.get('plot'),
        'genres' : movie.get('genres'),
        'cover' : movie.get('cover url')
    }
    movies.append(movie_dict)
print(json.dumps(movies, indent=3))

with open('')