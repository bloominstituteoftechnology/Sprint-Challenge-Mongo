1. Describe the following: `Database`, `Collection`, `Document`
  * A database is the largest file group in mongo. 
  * A collection is a group of documents within a database.
  * A document is a specific piece of data saved to the mongodb.
  * From the ground up the relationship between `Database`, `Collection`, and `Document` looks like this:
  * A document is a specific piece of data, a collection is mongo's way of
  * organizing documents and a database is the outer container holding all 
  * the collections and documents. 
  
  2. Describe how one can achieve the pattern of relationships in MongoDB. 
  What needs to take place at the schema level? How do we fill in the
  appropriate relational data using mongoose? 
  * We can add fields into one schema with and ObjectId that references data from another schema. 
  * We can then use the mongoose .populate() method.

  