1. Describe the following: DataBase, Collection , Document
A database is the top-level (app-level) organization of data on a Mongo server.
A collection is a subsection of a database, and it helps to organize the documents within the database.
A document is a collection of data, organized as a JavaScript object.

2. Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?
In the Schema, we specify that a field type using mongoose.Schema.Types.ObjectId and then pass a reference (ref) to the Schema.
We can use Mongoose's populate function to auto-populate ID references, including the referenced document within the larger returned document.

3. Describe what MVC Archtecture is and how we have used it this week with Node/Express/Mongoose.
MVC = Model View Controller, a pattern for building UIs.
In the Model, we use Mongo(ose) to build a schema that serves as a data model -- a blueprint/template for what we want our data to look like.
Controllers interpret a request, perform operations on the database, and send a response.
Our View is the UI itself -- the parts of our stack that generate and deliver content based on the data delivered in the Controller responses.
