1. Describe the following: DataBase, Collection , Document
Database is data, structured certain way, that it can accessed and modified in specific ways.
Database has collection of documents. Collection is a group of database documents. One collection exists within a single database.
Document is set of data, in MongoDB document is stored as BSON document, binary representation of JSON document.

2. Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?
Relationships in MongoDB can be 'one to one', 'one to few', 'one to many' and 'many to many'. This relationships are structured in schema level, is specific fields.
'One to one' relationships can be directly nested within parent of object structure. In 'one to many' and 'many to many' relationships are stored as reference to the asociated document.

3. Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

To break up an API into Sub-Aplication we use 'module.exports' and bring this sub-API to another file we use variable and 'require' after assigning.