1. Describe the following: `DataBase`, `Collection` , `Document`.
* A database is a collection of data, that is sorted and can be queried to return collections and documents.
* A collection is a set of related documents that are organized.
* A Document is a dataset that makes up an entity in the database.

2. Describe how one can achieve the pattern of _relationships_ in MongoDB. What
   needs to take place at the schema level? How do we _'fill'_ in the
   appropriate relational data using mongoose?
* You can achieve thepattern of relationships in MongoDb using ObjectId references, and using the 'ref' keywords in the mongoose schema. You can than populate that document reference using `populate` method.

3. Describe what MVC architecture is and how we have used it this week with
   **Node/Express/Mongoose**.
* MVC split sup your code architecture into Models which represent your database entieies, Views represent how the data is presented to the client, and the controller handles the core logic. 