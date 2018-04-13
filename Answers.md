1.  Describe the following: `DataBase`, `Collection` , `Document`

-Database: A physical container for collections. Each database gets its own set of files on the file system. A single MongoDB server typically has multiple databases.

-Collection: A grouping of MongoDB documents. A collection is the equivalent of an RDBMS table. A collection exists within a single database. Collections do not enforce a schema. Documents within a collection can have different fields. Typically, all documents in a collection have a similar or related purpose. 

-Document: A record in a MongoDB collection and the basic unit of data in MongoDB. Documents are analogous to JSON objects but exist in the database in a more type-rich format known as BSON.

2.  Describe how one can achieve the pattern of _relationships_ in MongoDB. What
    needs to take place at the schema level? How do we _'fill'_ in the
    appropriate relational data using mongoose?

-

3.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?