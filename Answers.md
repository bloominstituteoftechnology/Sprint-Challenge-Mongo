1.  Describe the following: DataBase, Collection , Document
Database - is a structure for holding information/data, in a reliable, accessible, organized, and retrievable way. A Collection - is similar to a table in relational databases, it is a grouping of documents.
Documents - are data stored in BSON, comprised of field-and-value pairs.

2.  Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?
We can achieve patterns of relationships by linking other models/schemas together. We use the populate method to fill in the relational data using mongoose.

3.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
We used express router to break up an API into sub-applications.