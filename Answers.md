1.  Describe the following: `DataBase`, `Collection` , `Document`
*  A Database is an organized collection of data. A Collection is analogous to a table in a relation database. A Document is a single data record within a collection, defined by a schema.


2.  Describe how one can achieve the pattern of _relationships_ in MongoDB. What
    needs to take place at the schema level? How do we _'fill'_ in the
    appropriate relational data using mongoose?

*  In MongoDB, relationships amongst data is established by embedded documents, or with references wherein a type and reference is established in the schema of each collection necessary, giving it a relationship with other collections. To fill the appropriate data using mongoose, the populate method is used, specifying the collection and properties desired to be populated.

3.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

*  To break up an API into sub-applications, the Express Router tool is used, in which each particular collection is broken into it's own schema and routes, using the router instead of the server directly. Each collection can then reference other data in the db collections via reference of the type and ref properties in the particular route's schema.
