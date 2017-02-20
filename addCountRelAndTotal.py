import sys
import csv

with open(sys.argv[1], "rb") as f:
	reader = csv.reader(f, delimiter="\t")
	phrases = {}
	relations = {}
	for row in reader:
		rel = row[1].split('/')[-1]
		phr = row[0]
		if rel in relations:
			relations[rel] = relations[rel] + int(row[2])
		else:
			relations[rel] = int(row[2])
		if phr in phrases:
			phrases[phr] = phrases[phr] + 1
		else:
			phrases[phr] = 1

with open(sys.argv[1], "rb") as f:
	reader = csv.reader(f, delimiter="\t")
	for row in reader:
		phrase = row[0]
		rel = row[1].split('/')[-1]
		print '\t'.join([phrase, rel, row[2], str(phrases[phrase]), str(relations[rel])]) 

