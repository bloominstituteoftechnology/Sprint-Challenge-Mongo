1.  Describe the following: DataBase, Collection , Document.

A database is a structure set of data that is stored locally or remotely.
A collection is what holds documents. They are synonymous with tables in relational databases.
A document is how MongoDB stores data records (as BSON - binary representation of JSON).

2.  Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema
    level? How do we 'fill' in the appropriate relational data using mongoose?

We can acheive the pattern of relationships from 'one to one', 'one to few', 'one to many', and 'many to many.'
At the Schema level, we need to use linking. We can use various query methods such as <populate> to fill data.

3.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
    ???
