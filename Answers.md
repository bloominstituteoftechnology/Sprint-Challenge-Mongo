1.  Describe the following: `DataBase`, `Collection` , `Document`
A Database is a collection of data organized in a particular manner. A Collection is the Mongo term that describes a series of individual objects. A Document is the Mongo term to describe the object that represents a discrete part of the data, based on the model.
1.  Describe how one can achieve the pattern of _relationships_ in MongoDB. What
    needs to take place at the schema level? How do we _'fill'_ in the
    appropriate relational data using mongoose?
At the schema level there are two ways to implement relationships. One is to embed one document in the property of another, creating a sub-document. The other is to create a ref based on an ObjectId and in mongoose use the populate method to have mongo fill in the document information at the location of the ref.
1.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
Usually the application is broken up based on the route and we can use express.Router to divide functionality amongst the routes.