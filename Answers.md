1. Describe the following: `DataBase`, `Collection` , `Document`

*DataBase*
Database is group of db collections. A single server can have multiple databases.

*Collection*
An analogous of table in RDBMS. It is basically a grouping of db documents.Typically all documents in a collection have similar or related purpose.Collections do not enforce a schema.

*Document*
Document is a basic unit of data in a db collection. Documents are analogous to JSON objects in exist in database in a more type-rich BSON format in collection.

Ans2
Describe how one can achieve the pattern of _relationships_ in MongoDB. What needs to take place at the schema level? How do we _'fill'_ in the appropriate relational data using mongoose?

Relationships can be achieved by referecing
In schema set up the proper reference to the document of related one.

Ans3. Describe what MVC Archtecture is and how we have used it this week with

*Model*: The part of our application that will deal with the database or any data-related functionality.

*View*: Everything the user will see. Basically the pages that we are going to send to the client.

*Controller*: The logic of our site, and the glue between models and views. Here we call our models to get the data, then we put that data on our views to be sent to the users.




