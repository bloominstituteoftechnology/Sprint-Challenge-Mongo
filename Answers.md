1.  Describe the following: `DataBase`, `Collection` , `Document`
  * A Database is a grouping of all the information that will be referenced/manipulated in a single application. It is the 'project-level' organization structure of MongoDB.
  * A Collection is a grouping of all documents that represent the same type of information.  For instance, in this budget-tracking project, we will have three collections: one for budgets, one for expenses, and one for expense categories. Every collection belongs to exactly one database.
  * A Document is a single entry stored in MongoDB.  It consists of a JavaScript object within a collection. MongoDB automatically assigns every Document a unique hexadecimal '_id' prop that can be used to reference it across the database.
1.  Describe how one can achieve the pattern of _relationships_ in MongoDB. What
    needs to take place at the schema level? How do we _'fill'_ in the
    appropriate relational data using mongoose?
    * At the schema level, simply add each desired relationship to the schema as a property that expects an ObjectId as its value. Use the ObjectId of the related documents anytime you use the Schema.
    * When retrieving these documents from the database, mongoose can automatically hydrate the ObjectId values with the full documents that they refer to. Just call .populate('relationshipProperty') on the document before sending it back to the API, where relationshipProperty is the name of the relationship defined in the schema.
1.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
    * By using express Router, we were able to separate the different functions of our API by creating different URL routes for the requests and building unique Routers for each in their own files.