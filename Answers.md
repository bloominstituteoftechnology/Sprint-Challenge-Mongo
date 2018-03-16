## Questions - Self Study - You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Describe the following: `DataBase`, `Collection` , `Document`
..* Database: A means to store data, either relational or document based (I suppose there could be hybrids...).
..* Collection: How to organize a set of documents within a database.
..* Document: A particular set of data about one record composed from a schema/model.  
..* Databases are composed of collections which are composed of documents.
1.  Describe how one can achieve the pattern of _relationships_ in MongoDB. What
    needs to take place at the schema level? How do we _'fill'_ in the
    appropriate relational data using mongoose?
..* Describe how one can achieve the pattern of _relationships_ in MongoDB. What
    needs to take place at the schema level? --- I believe this is referring to how documents have an Object_Id.  The schema
    needs to have the data field that needs to reference another document by selecting it's Object_Id and a ref key that references
    the first paramater of the Model it is trying to access.
1.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
..* I'm really not sure about this and my google-fu is lacking apparently.  I suppose you are breaking an application into sub-applications 
when you parse out how each collection is handled, e.g. FriendModel/FriendRouter and BlogModle/BlogRouter.  I question that defintion because
Mongoose is our latest addition, but Express is required for the Router aspect, so...
1. I would definitely appreciate some feedback on the definitions/answers.  Per the usual, I question my understanding of terminology.
