1.  Describe the following: `DataBase`, `Collection` , `Document`

A database holds a collection of documents.  The database is the container that holds all of the database files.  A collection is a grouping of documents within a database.  A document holds the data for the database.
2.  Describe how one can achieve the pattern of _relationships_ in MongoDB. What
    needs to take place at the schema level? How do we _'fill'_ in the
    appropriate relational data using mongoose?

Mongoose schemas can reference each other.  You don't need to import the other schema directly; the server holds all of the schemas and that allows them to be connected through ObjectIds.  We can use .populate() to fill in the information from the other collection.

3.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

You can break up an api by using different routes through express.