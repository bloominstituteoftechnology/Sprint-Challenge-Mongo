1. Describe the following: `DataBase`, `Collection` , `Document`

DataBase- A store of data that can be accessed, whether through queries (electronic DB) or looking through it (physical DB)

Collection- A collection is a group of MongoDB documents in this case, it exists within a single database. 

Document- A record in MongoDB collection, the basic unit of data. Exist in the database as BSON objects. 


2. Describe how one can achieve the pattern of _relationships_ in MongoDB. What
   needs to take place at the schema level? How do we _'fill'_ in the
   appropriate relational data using mongoose?

Schemas are flexible in MongoDB which allows for portraying different relations of one-one, one-many, many-many. To show how relationships change, the schema will have embedding when wanting to convey one-one/many, but can be nested to further separate one-many relationships. It can also be changed to references to avoid lengthy schemas. 