#1. Describe the following: DataBase, Collection , Document:
A `Database` is a collection of information for later retrieval, or resources for later management. It facilitates the collection storage. A `Collection` is an object containing information related to a specific topic, a list of related key: values, and functions; in mongo it is a group of documents. It is equivalent to a table in a relational database. A `Document` is a piece of information in a Collection; it is a record in mongo. Documents are stored as BSONs (similar to JSON objects, but richer).

#2
You can acheive relathionships in Mongo vis `one to one`(embeded data in the same schema), `one to many`, `one to a few`, or `many to many`. For Filling relational data you can use the`mongoose populate` method to retrieve documents by their ObjectId from within another document.

#3
To break up an API into Sub-Applications you can use `express().Router() and and importing the specific subroutes on your server.js file.`