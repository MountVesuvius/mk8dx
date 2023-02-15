import requests
from bs4 import BeautifulSoup
import re, csv

URL = "https://mkwrs.com/mk8dx/display.php?track=Mario+Kart+Stadium&m=200"
page = requests.get(URL)
soup = BeautifulSoup(page.content, "html.parser")

# Obtain names for all tracks in the game from a base page
track_names = [li.text for li in soup.findAll('ul')[1].findAll('li')][1:]

URL_BASE = "https://mkwrs.com/mk8dx/display.php?track="
count = 0
for track in track_names:
	count += 1
	for speed in ["150", "200"]:
		# Track URLs
		track_url = URL_BASE + track.replace(' ', '+') + "&m=" + speed

		page = requests.get(track_url)
		soup = BeautifulSoup(page.content, "html.parser")

		table = soup.findAll('table', attrs={"class":"wr"})[1]

		with open('../TrackHistory/'+track.replace(' ', '_')+'_'+speed+'.csv', mode='w') as f:
			writer = csv.writer(f, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
			for row in table.findAll('tr'):
				row = row.text.strip().split('\n')
				row[1] = re.sub(r"(\d+)\'(\d+)\"(\d+)", r"\1:\2.\3", row[1])
				writer.writerow(row)	
		print("Scraped: " + track + " - Speed: " + speed)
	print("Completed: " + str(count) + "/" + str(len(track_names)))
	print()

print('\nAll tracks scraped')