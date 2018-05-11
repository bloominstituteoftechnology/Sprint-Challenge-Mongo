1. Describe the following: DataBase, Collection , Document.

    --Databas is a collection of data
    --A collection is a grouping of multiple documents
    --Documents are what hold specific data

2. Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?
        
    --Relationships can be one-to-one, one-to-few, many-to-many, etc. At the schema level one must place a ref to link it to another document. Then we fill the data with the populate method.

3. Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
    
    --We uses routers that specifically connect to each set of documents.