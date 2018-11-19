1.  Describe the following: `DataBase`, `Collection` , `Document`
    DataBase: Is a large assortment of Collections and Documents; it represents the largest group in the mongo file structure.
    Collection: Is a subset of a database; it is the second tier in the mongo file structure; and represents a group of documents.
    Document: Is the third tier in the mongo file structure; and represents the smallest part of the mongo file structure; a document is the specific data that is saved and retrieved.

    Document is the data; a Collection is a way for mongo to organize documents and finally a Database is the housing unit for all the collections and subsequent documents.

1.  Describe how one can achieve the pattern of _relationships_ in MongoDB. What
    needs to take place at the schema level? How do we _'fill'_ in the
    appropriate relational data using mongoose?

    Relationships can be built in MongoDB by including models within models that can be accessed by Mongoose through the connect method within the top level of the server. After references have been created in the models; the data can be pulled and displayed dynamically using the .populate method that mongoose provides.

1.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
    An API is split into Sub-Pages using dynamic and static URLs that communicate with the UI to display the appropriate information that the user is requesting. Target server/database calls based on the route the user selects allows for an organized display of relevant information.