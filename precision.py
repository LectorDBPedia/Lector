import sys
import csv

with open(sys.argv[1], "rb") as f:
	reader = csv.reader(f, delimiter='\t')
	countAll = 0
	count = 0
	for row in reader:
		if row[1] == sys.argv[2]:
			countAll += 1
			if row[5] == 'T':
				count += 1
	print "totale vere " + str(count) + " su un totale di " + str(countAll) + " con precision = " + str((float(count)/float(countAll)) * 100) + "%"