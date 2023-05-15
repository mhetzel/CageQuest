import json
import requests
from bs4 import BeautifulSoup


html = requests.get('https://m.imdb.com/name/nm0000115/fullcredits', timeout=50)
# print(html.text)
soup = BeautifulSoup(html.text, 'html.parser')

filmography_html = soup.find(id='filmo-head-actor')

all_films_html = filmography_html.find_next_sibling("div")

for div in all_films_html.find_all('div'):
    title = div.b.a['href']

    title_html = requests.get(f'https://www.imdb.com{title}', timeout=50)
    title_soup = BeautifulSoup(title_html.text, 'html.parser')

    print(div.b.a.text.strip('\n').strip(), ':', div.span.text.strip('\n').strip(), ':', div.br.next_sibling.strip('\n').strip())

# for child in all_films_html.children:
#     print(child.text.split('\n'))
#     print(child.find('a'))
#     # print(child.text)
#     print('########################')

# filmography = BeautifulSoup(filmography_html.text, 'html.parser')

# print(filmography.find_all('div'))