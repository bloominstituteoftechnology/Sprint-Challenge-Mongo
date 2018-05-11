## Questions - Self Study - You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Describe the following: `DataBase`, `Collection` , `Document`
Database: Collection of organized data that is easily retrievable

Collection: Mongo uses this term to show a series of specific objects

Document: Mongo uses this term as the unit of storing data in a Mongo database

2.  Describe how one can achieve the pattern of _relationships_ in MongoDB. What needs to take place at the schema level? How do we _'fill'_ in the appropriate relational data using mongoose?
-Create and use references (refs) based on the ObjectID, then populate these methods in Mongoose to have Mongo complete doc info in place of the ref.
-Embed docs by creating a sub doc

3.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
Use express.router; this will divide functionality throughout the different routes in the app