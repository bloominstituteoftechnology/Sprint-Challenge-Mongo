1.  Describe the following: `DataBase`, `Collection` , `Document`

A database is a collection of organized data that is easily accessible/managed using different methods. In mongo, a database is a container for collections.
A collection is a group of mongoDB documents. It is the equivalent of an RDBMS table. 
A document is a record in a mongoDB collection and the basic unit of data in MongoDB. Documents are stored as BSON (a binary representation of JSON).

1.  Describe how one can achieve the pattern of _relationships_ in MongoDB. What needs to take place at the schema level? How do we _'fill'_ in the appropriate relational data using mongoose?

By using true linking(refs) for one to many relationsips and embedding(sub-documents) for one to one relationships.

1.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

By creating multiple router files for each resource.