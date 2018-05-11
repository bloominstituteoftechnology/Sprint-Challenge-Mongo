1.Describe the following: DataBase, Collection , Document
The document is the record of date like userName. This is like a row in a table in a database like Oracle 

The collection holds document(s). This is like a table in a table in a database like Oracle.

The database holds the collection(s) that belong to it.

2.Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?

You can include the relationships uisng the ObjectId type and a ref to the Model of the other type

3. Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

You can create a new  router (express app) for each URL like /api/users, /api/products
To do this you can using express().Router()

