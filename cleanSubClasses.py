import csv
import sys

with open(sys.argv[1], "rb") as f:
	reader = csv.reader(f, delimiter="\t")
	for row in reader:
		print row[0].split('/')[-1] + '\t' + row[2].split('/')[-1]