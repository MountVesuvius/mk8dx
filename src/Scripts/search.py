# prototyping file
import json

# file = '../../part_dict.json';
file = '/Users/judelakkis/Projects/mk8dx_project/src/part_data.json';

'''
Output:
4 int tuple - id's to char, body, tire, glider

input:
- stat (string)
- value (int)
'''

def foo(stat, value):
	groups = {
		'char': {},
		'body': {},
		'tire': {},
		'glider': {}
	}
	for group in groups:
		for obj in data['part_dict'][group]:
			if obj[stat] not in groups[group]:
				groups[group][obj[stat]] = []
			groups[group][obj[stat]].append(obj['name'])

	# for i in data['part_dict']['body']:
	# 	if i[stat] not in dic:
	# 		dic[i[stat]] = []
	# 	dic[i[stat]].append(i['name'])
	# print(dic)
	# glider = [(i[stat], i['name']) for i in data['part_dict']['glider']]
	for i in groups['glider']:
		print(i, groups['glider'][i])






f = open(file)
data = json.load(f);
# print(data)
foo('wgt', 6)


f.close()