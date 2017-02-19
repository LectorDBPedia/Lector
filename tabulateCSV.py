import csv
import sys

for csvFile in sys.argv[1:]:
	inFile = open(csvFile, 'rb')
	outFile = open(csvFile.replace('csv','tsv'), 'w+')
	reader = csv.reader(inFile, delimiter=',')
	writer = csv.writer(outFile, delimiter='\t')
	for row in reader:
		writer.writerow([field.replace('"','') for field in row])
	outFile.close()
	inFile.close()