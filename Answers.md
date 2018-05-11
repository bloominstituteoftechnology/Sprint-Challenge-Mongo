# Answers

1. Describe the following: `DataBase`, `Collection` , `Document`
  * In general, a database is a structured set of data (regarless of nesting). Specifically for MognoDB, a database is container for a number of 'collections' that contain 'documents' which usually contain BSON objects.
  * In MongoDB, a collection is a grouping of MongoDB documents. Generally, the documents inside a single collection have a similar formatting and purpose. Multiple collections can exist in a single database.
  * In MongoDB, a document is the basic unit of data. Documents are similar to JSON ojects and contain the specific data that is useful for the frontend.

2. Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?
  * Relationships are established in a mongoose model's schema. In the schema, the related property must have a type of 'mongoose.Schema.Types.ObjectId' along with a 'ref' to the related model. Filling out the appropriate data requires the .populate() method that can be used on a mongoose model query.

3. Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
  * For this project, I used express to break up the API into sub-applications. Specifically, I used the '.use()' method and 'express.router()'. My server both points to individual routers as well as declares the URL end path with .use(), and my routers handle the various CRUD requests based on the given end path.
  