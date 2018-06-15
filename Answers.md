Describe the following: `DataBase`, `Collection` , `Document`
1.n MongoDB, databases hold collections of documents.
2.MongoDB stores documents in collections. Collections are analogous to tables in relational da
tabases.
3.MongoDB stores data records as BSON documents. BSON is a binary representation of JSON documents, 

1.  Describe how one can achieve the pattern of _relationships_ in MongoDB. What
    needs to take place at the schema level? How do we _'fill'_ in the
    appropriate relational data using mongoose?
1.You achieve it by having one-to-many relationships with document refrences.
2.schema lays out how data is stored 
3. we need to populate

1.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that? We used Express Router
