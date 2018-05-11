1. 
    Database - A database is where collections of data are stored.

    Collection - This is a small subset of data in a database that stores documents (typically categorized based on a relation of the data).

    Document - In MongoDB, these are stored as binary representation of JSON documents, known as BSON documents. This is where the data is stored and sorted by fields.

2. Pattern of relationships in MongoDB can be achieved by defining a shape of the document using schemas, and then creating a model (which is creating an instance of a document). In the schema level, data needs to be modeled through a One-To-One, One-To-Many, or Many-To-Many relationship. To fill out the appropriate relational data using mongoose we need to create another model and then reference it in our original model. 