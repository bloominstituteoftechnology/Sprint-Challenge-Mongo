## 1. Describe the following: `DataBase`, `Collection` , `Document`
* _Database:_ A 'Database' in MongoDB stores 'collections' of 'Documents'. It is the top-level structure in MongoDB.
* _Collection:_ A 'Collection' stores individual 'Documents'. They are equivalent to 'table' in a relational database. These can be thought of as 'sub-folders' of a database.
* _Document:_ This is where the actual 'data' is stored in BSON format. Similar to JSON, it resembles an 'object' in Javascript, but has some of it's own unique datatypes like 'ObjectId'.

## 2. Describe how one can achieve the pattern of _relationships_ in MongoDB. What needs to take place at the schema level? How do we _'fill'_ in the appropriate relational data using mongoose?
Using an 'ObjectId' as a datatype in the schema level allows you to create relationships to other data by storing a refererence. These references can be filled in by using the `.populate()` method when making requests to the database.

## 3. Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
Using `express` and it's `Router()` functionality in combination with `mongoose` you can organize your API into sub-applications by using seperate collections and endpoints.
