Describe the following: DataBase, Collection , Document
Database: and enclosing structure to hold data - in Mongo, the Database is the outer shell which contains a series of Collections
Collection: an inner structure to hold data - collections hold documents
Document: the base structure to hold individual datasets - this is where your JSON (BSON) objects reside, storing your data as key value pairs

Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?
Relationships: various documents can relate to each other, and the individual schemas for the data provide for the fields to relate and which documents belong to that relationship. By searching with the objectId, you can connect the data through multiple schema  (we usually use mongoose for this)
To 'fill' the data, we use the populate method in our controller. There are restrictions, though, on how the populate method works. One cannot place two populate methose that access the same path or only the second instance will populate. You can, however, nest or provide the path for the second populate method to acheive your goals.

Describe what MVC Archtecture is and how we have used it this week with Node/Express/Mongoose.
Model - the place where the data is defined - your schema
View - where you view what's being generated - or the output of the controller/the screen representation of the data
Control - the glue that binds the model and view together - these are the routes, the connection to the DB, the functions used by the router
