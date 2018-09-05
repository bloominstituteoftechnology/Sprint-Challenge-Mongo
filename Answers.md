1. Describe the following: DataBase, Collection , Document
    - Database:   A structured set of data that is accessible in various ways. In MonogoDB, database hold collection of documents.
    Collection: Collections are analogous to tables or set of tables in relational databases.
    Document: Document is equivalent to a single table in relational databases.

2. Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?
 - To achieve the pattern of relationships, at the schema level, we can make a refernce of the other schema with ObjectId and reference key. Then we cab use populate with mongoose to 'fill' the data.

3. Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
 - Separate in different files and folders using express router, and import/export them to connect each other.