1. Describe the following: DataBase, Collection , Document.
    - A database is a "storage" of data most commonly found in server software
    - A collection is a group of documents, which in groups form a database.
    - A documents is how MongoDb stores data (BSON(binary JSON))

2. Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose? 
    - At the Schema level, a property must be define with type of ObjectId plus the reference to the relevant model.
    - By using the populate() method we can fill in the data.

3. Explain a way to break up an API into Sub-Applications, which tool did we use to do that? 
    - We could use Express Router tool to sepaate and manage routes in the project.