1.  Describe the following: DataBase, Collection , Document
    A: MongoDB stores data records as BSON documents that are comprised of field and value pairs. A grouping of documents is known as a collection. Ultimately databases hold collections of documents.

2.  Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?
    A: Need to figure out if it is a one to one, one to many, or many to many relationship. Then based on that answer you will either want to embed or use ref to link the relation. mongoose.Schema.Types.ObjectId is used as the type for linking.

3.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
    A: Express Router
