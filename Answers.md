1.  Describe the following: `DataBase`, `Collection` , `Document`
--A database is the overall container for collections and documents.
--Collections are sub-categories in a database that are used to logically separate user-provided data.
--Documents correspond to records in other database platforms, and are the most specific level of data within a database.

1.  Describe how one can achieve the pattern of _relationships_ in MongoDB. What needs to take place at the schema level? How do we _'fill'_ in the appropriate relational data using mongoose?
--We create relationships in Mongo by establishing references with mongoose.Schema, and the relationships can be connected with as many or few collections as necessary.

1.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
--Express router is a common tool to break up an API; this is achieved by creating collections within a database and accessing them separately.