### Troy Bradley Essay Answers for Mongo Sprint

1. Describe DataBase, Collection, Document
  a. DataBase: A database is an organized set of data. You can have multiple databases in one instance of the MongoDB software. 
  b. Collection: A collection in Mongo is similar to a table in more traditional Realtional DataBase Management Systems. A Mongo database is made up of multiple collections. 
  c. Document: A document is similar to a row in more traditional Realtional DataBase Management Systems. Collections in Mongo are made up of Documents. Each document will typically have a relationship to a document in another collection.
1. Relationships in MongoDB are typically "one to many" or "one to one". 
  a. Schema is the term for the "map" to a document in Mongo. Indices are used to enforce relationships. Each document type will have an index, and that index will be used in the "remote" part of the relationship via a reference or an embedded document. 
  b. "Filling" in data - References (ref) are used to bring in data from a remote document. Alternatively, copies of entire documents can be embedded in the larger documents they have a relationship with.
1. MVC Architecture - In an MVC patterned app, a user interacts with Controllers to manipulate data within the Model, which then updates the View (screen) that the user reads to determine their next interaction with the app.