1.

* Database: A database is a system the facilitates the collection, storage, and manipulation of data. Interaction with the database occurs through a database management system.
* Collection: A collection in mongo is a group of documents. It is equivalent to a table in a relational database.
* Document: A document is a record in mongo. Collections contain documents. Documents are stored as BSONs (similar to JSON objects, but richer).

2.

* Achieving relationships -
  -- One to One: Embed data in the same Schema, {id: 1111,
  name: "Bob",
  address: "Yada yada"}

The data is associated with one user.
-- One to Many: Use the id field in other Schema to relate documents {\_id: 111,
name: "Bob"}
{user_id: 111,
order: "Blah blah A"}
{user_id: 111,
order: "Blah Blah B"}
{user_id: 111,
order: "Blah blah c"}

* Filling relational data - You can use the mongoose populate method to retrieve documents by their ObjectId from within another document.

3.  Breaking up an API: You can break up the API into subroutes using the express.Router method, and importing the specific subroutes on your server.js file.
