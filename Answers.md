1. Describe the following: `DataBase`, `Collection` , `Document`
    Database is a group of Collections which is information organized on a server running software to help manage it.

    Collection is a collection of Documents store together. A group of Collections make a Database.

    Document is how MongoDB stores it's data. (doc type: BSON Documents - binary JSON) Documents are composed of key:value pairs.

2. Describe how one can achieve the pattern of _relationships_ in MongoDB. What needs to take place at the schema level? How do we _'fill'_ in the appropriate relational data using mongoose?
    Relationships are established in a mongoose model's schema. In the schema, the related property must have a type of 'mongoose.Schema.Types.ObjectId' along with a 'ref' to the related model. Filling out the appropriate data requires the .populate() method that can be used on a mongoose model query.

3. Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
    Express Router tool is used, in which each particular collection is broken into it's own schema and routes, using the router instead of the server directly. Each collection can then reference other data in the db collections via reference of the type and ref properties in the particular route's schema.