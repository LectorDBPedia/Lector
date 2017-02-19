import csv
import sys
from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')
db = client['lector']
types = db['type_supertype']

entities = open(sys.argv[1],"rb")
mapping = open(sys.argv[2], "w+")

entitiesReader = csv.reader(entities, delimiter='\t')

for row in entitiesReader:
	typeList = []
	if row[1] != "Thing":

		typeList.append(row[1])
		queryType = row[1]

		while True:

			 doc = types.find_one({'type': queryType})
			 supertype = doc['supertype'].split('#')[-1]
			 typeList.append(supertype)
			 queryType = supertype

			 if supertype == 'Thing':
			 	break
	else:
		typeList.append('Thing')
	
	mapping.write(row[0] + '\t' + ';'.join(typeList).encode('utf-8') + '\n')
