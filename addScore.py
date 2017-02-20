import sys
import csv

with open(sys.argv[1],"rb") as f:
	reader = csv.reader(f, delimiter="\t")
	for row in reader:
		count = float(row[2])
		countPAll = float(row[5])
		probability = count/countPAll
		score = count * probability * 1/float(row[3])
		print '\t'.join(row + [str(score)])

		"""count = float(row[2])*10000
		if int(row[3]) <= 3:
			relAttachment = float(1)
		elif int(row[3]) >= 10:
			relAttachment = 0.1
		else:
		peso = float(row[2])/float(row[4])
		relAttachment = 1/float(row[3])
		print '\t'.join(row + [str(count*peso*relAttachment)]) """