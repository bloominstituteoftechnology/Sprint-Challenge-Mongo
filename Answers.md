### Describe the following: DataBase, Collection , Document
    Database: In Mongo a database is where we save the collections.
    Collection: In Mongo a colection is where we store our documents.
    Document: Basically is a schema that represents the information format in our collention.
    

### Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?
    We need to determine which kind of relationship we want and after that we have to add the Objectid of the referenced
    collection into the target collection.

### Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
    The way is separating in:
    Controllers: Here we are have all our logic.
    Models: Here we have the schema of the database and the connections with the Controllers.
    Router: The router is where the endpoint where the front hit to it.
    www: Here is where we have our front-end and this should hit our Router endpoints.