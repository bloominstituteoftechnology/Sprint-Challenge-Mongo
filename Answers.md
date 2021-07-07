1.  Describe the following: `DataBase`, `Collection` , `Document`
A database is a place where Data is stored usually on a server that is accessed by a clients machine which is accessed through an api for consuming by the client. A Document is the unit of storing data on a database that is associated with mongoDB. A collection is the "folder" that all the Documents are contained in which is actually a table of an RDBMS.

2.  Describe how one can achieve the pattern of _relationships_ in MongoDB. What
    needs to take place at the schema level? How do we _'fill'_ in the
    appropriate relational data using mongoose? the pattern of relationships is achieved by creating a schema and modeling of the data.  At the Schema level a diagram needs to be defined of which properties will be used by the documents. To fill in the dat with mongoose we create a model and funtions that populate the documents.

3.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that? We use express Router to create Routes for each Document in a seperate file which express router then accesses individually.