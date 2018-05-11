## Questions - Self Study - You can exercise your Google-Fu for this and any other Sprint Challenge in the future.

1. Describe the following: DataBase, Collection , Document
A database is a collection of data which is typically very organized and easy to get information from it. A collection is a specific term used in Mongo which shows a series of specific objects. A document is another term used in Mongo which is the unit of storing data in the Mongo data base.

2. Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?
There are a couple different ways to go about this and one way is creating and using references (refs). This will create a ref based on your ObjectID then populate methods in Mongoose which will then have Mongo complete any doc info in place of the ref. You can also embed a doc, creating a sub doc.

3. Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
To break up an API into Sub-Applications, we used express.router which will divide your functionality throughout your routes in your app.