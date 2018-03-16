1. Describe the following: DataBase, Collection , Document
> * __DataBase__: a place or system for storing data
> * __Collection__: in document oriented databases like Mongo, a collection is a pre-determined category of documents on the database.
> * __Document__: in Mongo, pieces of data are stored as documents, specifically JSON documents.
2. Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?
> Relationships are achieved in Mongo through refs and population. Refs are used on the schema and population on the router. The method in mongoose for filling in a document with data from another is called `.populate()`
3. Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
> An application can be distributed into concerns using the model, view, controller, sometimes referred to as MVC.  We have done this by Modeling the data in model files on the server and controlling the routes on the server in controller files and controlling the view layer with a react app on the client side. Cors is used to handle cross-origin references between the client and the server.
