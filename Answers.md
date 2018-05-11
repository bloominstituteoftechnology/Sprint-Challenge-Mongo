1.  Describe the following: DataBase, Collection , Document
    Database - A Mongo database is built on an architecture of collections and documents as opposed to relational databases that use tables and rows.

    Collection - A Mongo collection is a grouping of MongoDB documents.

    Document - Mongo stores data as BSON documents, which is a binary represenation of JSON documents.

2.  Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?
    Pattern of relationship is achieved by linking models/schemas together, which can be one-to-one or one-to-many.  Relational data can be filled using the .populate method.

3.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
    We can utilize express router to break the API into sub applications.