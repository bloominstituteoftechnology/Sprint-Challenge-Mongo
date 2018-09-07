Describe the following: DataBase, Collection , Document

These are the organizational hierarchy of Mongo; the database is the entire set of documents, collections are subsets within the database, and documents are the actual items being stored.  


Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?

Mongoose adds relations to Mongo by implementing refs at the schema level, then the appropriate data are filled in using the populate method on a mongoose query.  


Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

Express router lets us create separate files for each route and then give them to our server with the use method. 
