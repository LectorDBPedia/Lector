import csv
import sys

out = open(sys.argv[2], "w+")

with open(sys.argv[1], "rb") as f:
	reader = csv.reader(f, delimiter="\t")
	data = {}
	for row in reader:
		rel = row[0].split('/')[-1]
		if rel not in data:
			data[rel] = {}
		if 'range' in row[1]:
			data[rel]['range'] = row[2].split('/')[-1]
		if 'domain' in row[1]:
			data[rel]['domain'] = row[2].split('/')[-1]
	for relation in data:
		if 'range' not in data[relation]:
			data[relation]['range'] = 'Thing'
		if 'domain' not in data[relation]:
			data[relation]['domain'] = 'Thing'
		out.write('\t'.join([data[relation]['domain'], relation, data[relation]['range']]) + '\n')
	out.close()


