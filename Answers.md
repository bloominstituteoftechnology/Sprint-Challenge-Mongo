1. Describe the following: DataBase, Collection , Document
Database: Server software that stores data
Collection:  a grouping of documents
Documents: objects stored in the Mongo DB

2. Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?
A property needs to be defined in the schema with type ObjectId and references the model that the current schema model relates to.  We fill in the data by using the populate method.

3. Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
We sepate route groupings into different files and reference them in server.js using the server.use method.
