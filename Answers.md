1. Describe the following: `DataBase`, `Collection` , `Document`


| **Term** | **Definition** |
| :-------: |:---------|
| *Database* | Databases are the core of MongoDB. It's what you start with when you navigate your data folder on your C drive (or wherever you have it stored) For our Mongo-Film project, `starwars` was our database|
| _Collection_ |Collections are the "children" of databases. Databases can be made up of "sub-databases" called collections that house like data. For our Mongo-Film project, `film`, `character`,  `vehicle`, `starship`, `planet` and `species` were our collections|
| *Document* |Documents are the "grand-children" of databases. They house each item in your collection. Each individal record in our collections is a document|

2.  Describe how one can achieve the pattern of _relationships_ in MongoDB. What
    needs to take place at the schema level? How do we _'fill'_ in the
    appropriate relational data using mongoose?

    * At the schema level we need to make sure the property is appropriately identified as an ObjectID schema type. 
    ```
    pilots: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    ...and the rest of your schema
    ```
    * in our actual collection controller/router we need to use a post request to actually post the data in the collection and then we need to use the method `populate ` to actually get the appropriate data where it needs to be.

--
3.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
    * We used `Express Router` to help us navigate our API by pointing us to different locations to look at our database collections 