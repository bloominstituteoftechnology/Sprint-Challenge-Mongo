1.) Describe the following: DataBase, Collection, Document
  DataBase: an organized collection of data
  Collection: a sorted series of documents
  Document: data (in MongoDB the data is stored in Binary JSON)

2.) Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?
  It is possible to store another document reference in any document. If you set up a proper document reference in the mongoose schema then you can 'populate' that data on find.

3.) Describe what MVC Archtecture is and how we have used it this week with Node/Express/Mongoose.
  MVC standa for model view controller, it is a popular file storage method ported from Ruby On Rails. We have seperated and ourganized our information in a near-facsimile, adjusting 'view' for 'routes'.