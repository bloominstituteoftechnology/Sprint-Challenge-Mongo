# Definitions

## Describe the following: `DataBase`, `Collection` , `Document`

1. Database: a structured set of data held by a computer. There are different types of databases such as relational and non-relational databases.
2. Collection: MongoDB stores documents in collections. Collections are analogous to tables in relational databases.
3. Document: MongoDB stores data records as BSON documents. BSON is the binary version of JSON but with more types.

# Describe how one can achieve the pattern of _relationships_ in MongoDB. What needs to take place at the schema level? How do we _'fill'_ in the appropriate relational data using mongoose?

1. we can embed the object into the document or in the case of a many to many we can reference the other documents by id
