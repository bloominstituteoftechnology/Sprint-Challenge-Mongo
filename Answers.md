1.  Describe the following: `DataBase`, `Collection` , `Document`

-Databases hold collections of documents

-Similar to relational databases,
Mongo DB stores documents in collections. Each document can have any number of attributes.

-Documents hold information as JSON-like objects. Many include validation with a JSON data type.(String, Number, Array, Object)

1.  Describe how one can achieve the pattern of _relationships_ in MongoDB. What
    needs to take place at the schema level? How do we _'fill'_ in the
    appropriate relational data using mongoose?
    Mongoose allows us to create a schema so we can define document attributes, validation of data, and class methods. We then create a model from the schema. This model has methods for CRUD operations.

1.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
We can use middleware such as Express Router.
