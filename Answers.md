# Answers

1. Describe the following: `DataBase`, `Collection`, `Document`.

    * a database is a collection of documents.
    * a collection is a sub-component of a database that stores documents
    * documents are where data records are stored as BSON documents

2. Describe how one can achieve the pattern of _relationships_ in MongoDB. What do we _'fill'_ in the appropriate relational data using mongoose?

    * 1 to 1 relatonships involve utilizing sub documents embedded within the model/document

    * One to many relatonships utilize references that link to different collections

3. Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

    * we used routes based on application resources

