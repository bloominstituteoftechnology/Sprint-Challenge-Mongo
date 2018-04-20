### Describe the following: DataBase, Collection , Document
    Database: In Mongo a database is where we save the collections.
    Collection: In Mongo a colection is where we store our documents.
    Document: Basically is a schema that represents the information format in our collention.
    

### Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?
    First We need to determine which kind of relationship we want:
     One to One
     One to Many with Embedded Documents
     One to Many with Document References
     After that we create a field in the collection we want the data from 
     and add a ObjectId with the collection reference name.

### Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
    The way is separating in:
     Controllers: Where the logic is founded.
     Models: The schema of the database is created here and the connection with the controller is hooked up.
     Router: The router is where the endpoints live and the place where the front-end hits to it to.
     www: Here is where we have our front-end that hits the Routers endpoints.