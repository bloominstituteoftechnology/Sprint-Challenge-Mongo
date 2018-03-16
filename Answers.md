1.  Describe the following: `DataBase`, `Collection` , `Document`

  * Database: A collection of stored data to be accessed by a server
  * Collection: A grouping of documents in a MongoDB database, see [https://docs.mongodb.com/manual/reference/glossary/#term-collection]
  * Document: An object representation of data, stored in BSON format, which is similar to JSON. Documents make up a `Collection`

1.  Describe how one can achieve the pattern of _relationships_ in MongoDB. 
    What needs to take place at the schema level? 
    How do we _'fill'_ in the appropriate relational data using mongoose?

  * Using a `mongoose` type of `ObjectId` and another key/value pair of `ref: 'some reference'` in a `Schema` one can link one `Model` to another

1.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

  * Using `Routers` allows an API to be broken up into sub-applications. Also the use of `Controllers` in the MVC Pattern can further break apart an API in sub-applications, or components