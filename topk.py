import sys
import csv

with open(sys.argv[1],"rb") as f:
	reader = csv.reader(f, delimiter="\t")
	i = 0
	current_relation = ""
	for row in reader:
		if(current_relation == "" or current_relation != row[1]):
			current_relation = row[1]
			i = 0
		if(i<20):
			print '\t'.join(row)
		i += 1