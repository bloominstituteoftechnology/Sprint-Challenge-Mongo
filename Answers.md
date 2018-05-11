1.  Describe the following: `DataBase`, `Collection` , `Document`

    A database is an organized and ordered collection of data.

    A collection is a group of related data represented as documents in a database.

    A document is a single piece of data in a database that belongs to a collection.

2)  Describe how one can achieve the pattern of _relationships_ in MongoDB. What
    needs to take place at the schema level? How do we _'fill'_ in the
    appropriate relational data using mongoose?

    In order to achieve the patter of _relationships_ refs must be created at the schema level. For example, a field that is related to a schema's data type must be made for a ref.

    Refs are of type ObjectId, which is a special data type supported by Mongo, and they represent links to related data. In order to "fill" in the appropriate relational data with mongoose, devs use the populate() method to replace the refs with data.

3.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

    We used Express's Routers to break up an API into Sub-Applications.
