1. database: a collection of resources stored on a server and used to persist data. collection: a particular instance of resources in a database. document: a single resource.

2. We can link a document from one collection to another by giving it the ObjectID of the other document and refrencing that collection at the schema level, wherby we can use "populate" to fill the appropriate relational data using mongoose.

3. Break up the application into routes using express router.