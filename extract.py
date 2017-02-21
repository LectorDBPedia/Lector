import sys
import csv

with open(sys.argv[1], "rb") as f:
	reader = csv.reader(f, delimiter="\t")
	for row in reader:
		if row[4] in row[6].split(";") and row[5] in row[7].split(";"):
			print "\t".join(row)