1. Describe the following: DataBase, Collection , Document
   -a Database is a collection of data, like Schemas.
   -Collections are where MongoDB stores documents.
   -Documents are where MongoDb stores its data records, in BSON, binary JSON. Documents have a field-and-value pair structure.

2. Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?
    -You can create nested, or embedded documents in other documents, or create new Schemas, and refrence documents in other files.

3. Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
-router