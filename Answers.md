* Describe the following: `DataBase`, `Collection` , `Document`

- Database: The root of all of your data. A place where you store all of your data.
- Collection: A set(an array) of documents. // Collections do not require that documents inside share the same schema.
- Document: a unit of data in your collection. Documents are objects(holding your data) that are stored in collections(arrays).

* Describe how one can achieve the pattern of _relationships_ in MongoDB. What needs to take place at the schema level? How do we _'fill'_ in the
  appropriate relational data using mongoose?

- Firstly, it requires the schema to have the field you would like to populate with other info in your database. Within that field an object that will behave as a link to the collection holding the info is required. By placing this link {type: ObjectId, ref: 'Collection'} where collection is the collection holding the info you need, you can then save an array of ObjectIds to that field and use a Mongoose function called populate to use that array to search in the collection referenced to match and populate the proper info.

* Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

- Compartmentalizing into sub-apps is beneficial in having a clean codebase with easy to read and find code. We used express Router to break out code up into proper routes. This organization and ease of finding and editing things makes for a desired build for rapid development. Modularization can also help speed your app up.
