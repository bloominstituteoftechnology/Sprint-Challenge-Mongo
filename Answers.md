Describe the following: DataBase, Collection , Document

Database: Where collections of data are stored
Collection: A subset of data in a database that stored documents
Document: The unit of storing data in a Mongo database

Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?

Pattern of relationships in MongoDB can be achieved by defining a shape of the document using schemas, and then creating a model. In the schema level, data can be modeled through one-to-one, one-to-many, or many-to-many relationships. To fill out the appropriate relational data using mongoose, we use refs (references).

Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

We use mutiple router files to break up an API into sub-applications.