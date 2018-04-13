    ## Database #
    A database is a mechanism for storing data, or you could say, records. What makes them vital is that, in comparison to having your records stored in paper form, databases have very quick search and retrieval methods owing to the speed of modern computers.

    ## Collection #
    Collection is a MongoDB term that refers to a grouping of documents. The interesting thing about them is how they are automatically created when you try to store a document.

    ## Document #
    This is another MongoDB term that refers to the basic unit of storage for the database. The format of these records is very similar to JSON, but is actually stored in a format called BSON. (a binary representation of JSON)

    ## Relationships #

    Relationships in MongoDB are achieved through referencing other documents by their ObjectIds in a Schema. To actually have the data be passed from one document to another, you call the populate() method.

    ## Sub-applications #

    You could use routing to break your API out into discrete parts. In this case, we used express.Router().
