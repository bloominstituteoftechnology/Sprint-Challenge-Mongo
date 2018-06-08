Database: 

a collection of collections, has it's own query language with which we can access, import, export, delete etc data

Collection: 

The sum of all documents within it. It is used to organize our database.

Document: 

A resource within a collection / db.

Relationships in Mongo: 

We can achieve the pattern of relationships by setting 'refs' in our Mongoose Schema, these can be one-to-many, many-to-many, many-to-one relationships.
We can 'fill' in the data by using the populate() method

Splitting our DB into collections and then using routes (express Router) to access them seperately is the way to go.