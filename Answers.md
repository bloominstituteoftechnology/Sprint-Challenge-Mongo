1.  Describe the following: DataBase, Collection , Document

* DataBase: A structured and easily accessible set of data
* Collection: A group of documents, called tables in relational databases
* Document: A data record, in Mongo this is a Binary representation of the JSON.

2.  Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?
    In MongoDB the Schema defines the shape and properties of the data. We use the JavaScript framework Mongoose to quickly scaffold and connect these Schemas. Since MongoDB doesn't support joins as relational databases do, the methods to fill data are to either manually reference by saving the \_id of one document in another or by using a driver to fill multiple collections.

3.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
    We use Express.js to break an API up resources into their own sub-applications. Each resource has their own URL path and HTTP end points. They are then imported back into the server.js file.
