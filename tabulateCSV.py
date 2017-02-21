import csv
import sys

for csvFile in sys.argv[1:]:
	inFile = open(csvFile, 'rb')
	reader = csv.reader(inFile, delimiter=',')
	for row in reader:
		print "\t".join([field.replace('"','') for field in row])
	inFile.close()