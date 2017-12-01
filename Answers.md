1. Describe the following: DataBase, Collection , Document

DataBase: A physical container for collections. Each database gets its own set of files on the file system. A single MongoDB server typically has multiple databases.

Collection: A grouping of MongoDB documents.

Document: A record in a MongoDB collection and the basic unit of data in MongoDB. Documents are analogous to JSON objects but exist in the database in a more type-rich format known as BSON. See Documents.


2. Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?

Relationships in MongoDB represent how various documents are logically related to each other. Relationships can be modeled via Embedded and Referenced approaches. Such relationships can be either 1:1, 1:N, N:1 or N:N.


3. Describe what MVC Architecture is and how we have used it this week with Node/Express/Mongoose.