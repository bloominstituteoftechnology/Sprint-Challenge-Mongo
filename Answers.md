1.  Describe the following: `DataBase`, `Collection` , `Document`
* DB - a collection of data
* Collection - in Mongo, a group of Documents
* Document - in Mongo, a data object

2.  Describe how one can achieve the pattern of _relationships_ in MongoDB.  What needs to take place at the schema level? How do we _'fill'_ in the appropriate relational data using mongoose?
* We need to add an ObjectId type to the schema, along with 'ref' : _name of the obejct/document schema_
* Use a _.populate()_ to fill relational data when making a get request


3.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
* Using routes (express router), by collection of data