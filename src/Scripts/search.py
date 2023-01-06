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


creating a json file with breakdowns for each stat
then you can reloop through them

'''

'''
Groups all four parts into segments based on a single statistic.
This alls for overall stat calculations within ranges to be done
much faster, as only single values need to be compared and
combined rather than checking every part in the game.

These will be turned into static json files for faster lookup times.
'''
def statGrouping(stat):
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

	return groups

'''
four values must sum to equal `value`
first value is for the character, so the user selects their character
independently from the body, tire, and glider. this was done to 
reduce computation time.

Can probably optimise this, but i've cut it down a lot already.
Speed will come from reading the JSON rather than computing the groups
'''
def find_combinations(val, l1, l2, l3, target_sum):
  combinations = []
  for i in l1:
    for j in l2:
      k = target_sum - val - i - j
      if k in l3:
        combinations.append((val, i, j, k))
  return combinations

def getStatBuild(groups, stat, value):
	a = [list(groups[group]) for group in groups]
	b = find_combinations(10, a[1], a[2], a[3], value)
	print(b)

f = open(file)
data = json.load(f);

weight = statGrouping('wgt')
getStatBuild(weight, 0, 15)

# print(data)
# for i in data['attr_keys']:
# 	print(data['attr_keys'][i])
# 	foo(i)
# 	print('\n')


f.close()