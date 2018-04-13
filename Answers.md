1.  Describe the following: `DataBase`, `Collection` , `Document`
- Database: something that holds and stores data/ information
- Collection: a stored series of of data
- Document: Data saved in the database

So a related data are all documents stored in a collection which exists in a database.

2.  Describe how one can achieve the pattern of _relationships_ in MongoDB. What needs to take place at the schema level? How do we _'fill'_ in the appropriate relational data using mongoose?

with schemas you would use:
        type: ObjectId,
        ref: 'objectref'

and to fill in the data, you can use ".populate('objectref', '-_id')"



3.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
- Use middleware, such as a router
