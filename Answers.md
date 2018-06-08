1. Describe the following: `DataBase`, `Collection` , `Document`

    1. A `DataBase`is a collection of organized data, which may or may not contain relationships between said data.
    2. A `Collection` is a group of mongo documents inside of a Mongo database.
    3. A `Document` is an individual BSON file in Mongo, which is a binary representation of JSON. Each document has a unique `_id` assigned to it by Mongo. 

2. Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?

    * Because Mongo is not a relational database like SQL, it requires an additional Object Document Mapper (ODM) to create such relationships between any data stored in a Mongo DB. One such ODM is Mongoose, which uses Schema to create type-checking and relationships between data. Schema are declared and exported as models in Mongoose, which uses those models when creating an API. These models allow for type definition of properties, and also a relationship to other Schema as the value of property. The latter allows for the creation of relational data in Mongoose.

3. Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

    * To break up an API into sub-applications, a developer can use Express' `.Router()` function to separate out Controller files that relate to different parts of an application. Once exported from the Controller file, the `server.use('url', Controller)` is used as middleware in a Node.js server file to create sub-applications.