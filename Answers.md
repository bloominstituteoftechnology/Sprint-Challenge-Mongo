1.  Describe the following: `DataBase`, `Collection` , `Document`
Database is a data repository, data is stored in it. The data can be homogeneous and heterogeneous based on the the database system used. Most RDBMS only allow the storage of similar type but database systems like Mongo allow the storage of different types of data in a file. 
Collection is group of documents created from a schema.
Document is the single unit of a collection. 

2.  Describe how one can achieve the pattern of _relationships_ in MongoDB. What
    needs to take place at the schema level? How do we _'fill'_ in the
    appropriate relational data using mongoose?
    
    A relationships in MongoDB can be achieved useing "ref" in the schema. Collections that are related are referenced using the ObjectID and defined in the schema, so that relationships can be established and access data. 

3.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
    API are broken down to Sub- applications using controllers from the MVC model. We use express to break the application to smaller routers.