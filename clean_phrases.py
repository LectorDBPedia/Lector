import sys
import csv

with open(sys.argv[1], "rb") as f:
	reader = csv.reader(f, delimiter="\t")
	for row in reader:
		print "\t".join([row[0], row[1].split("/")[-1], row[2]])