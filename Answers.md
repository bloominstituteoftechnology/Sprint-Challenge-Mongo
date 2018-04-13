1. Describe the following: DataBase, Collection , Document
A data base is like the mother directory in mongo you can have multiple mother directories.
A collection is like a folder inside of a mother directory that can hold many individual files known as documents.
A document is a file inside of a collection in the form of a JSON object.

2. Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?

Mongo has different way of identifying relationships such as one to one one to many many to many. this is defined at the schema level of the document.
One to one if you have a user and the user has a address and the user and address are separate documents this is a one to one relationship. one to many is if you have a user document and the user has multiple addresses in different documents. many to many is if you have many users and many roles users have many roles and roles have many users to simplify this you could create a user roles document instead of separating them into different documents.

3. Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

the module.exports helps us break up an api to sub apps we build different files with different functionality and where it is needed we use the require key word followed by the path of the file.