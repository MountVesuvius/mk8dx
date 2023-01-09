import requests
from bs4 import BeautifulSoup

URL = "https://mkwrs.com/mk8dx/display.php?track=Mario+Kart+Stadium"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")

data = []
tables = soup.findAll('table', attrs={"class":"wr"})
for table in tables[1]:
	print(table)
# table = soup.find('table')
# table_body = table.find('tbody')

# print(table)