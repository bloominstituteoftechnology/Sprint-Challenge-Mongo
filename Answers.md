## Questions - Self Study - You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Describe the following: `DataBase`, `Collection` , `Document`

    Databse: Is a data collection from a relative information.

    Collection: Is part of a database who reperesents a group of similar entities.

    Document: Is part of the collection data for a particular object or entity.

1.  Describe how one can achieve the pattern of _relationships_ in MongoDB. What
    needs to take place at the schema level? How do we _'fill'_ in the
    appropriate relational data using mongoose?

    In Mongo we can achieve relationships by creating in a model schema a property with the key and a reference to the model who we want to retreive the information.

    movies: [{type: ObjectId, ref: 'Film'}],

    And to fill the data we can use the method populate() with our query with the data fields whe need to be populated.

        .populate('characters', 'name gender height skin_color hair_color eye_color')
 

1.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

    For each collection we create a model or schema, and for each schema a controller which this will be the router for each sub-application and in the main app we define the routes.


