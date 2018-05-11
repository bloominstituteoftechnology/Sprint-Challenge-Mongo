
1.  Describe the following: `DataBase`, `Collection` , `Document`

#Document: It's purpose is to hold the data that's in a JSON format, and it's manipulated in a JSON object format. The document is what's retrieved for a get request, and it's what's manipulated for other requests such as a post or put (it's retrieved and modified in a JSON object format).
#Collection: It's a collection of documents, and a collection is in a single database. The collection of documents usually serve a similar purpose, such as for expenses, categories, or budgets.
#Database: It's the container that contains the collection of documents. For example, the database for today's project I named 'budgetTrackerdb' which contains the collection of documents (the models with schemas that have a similar purpose = collection), and the collections work to create and retrieve documents (in a JSON format).

1.  Describe how one can achieve the pattern of _relationships_ in MongoDB. What
    needs to take place at the schema level? How do we _'fill'_ in the
    appropriate relational data using mongoose?
    #It's RDBMS is achieved with the collection, which work together for a similar purpose. ObjectIds can be use to link data from one collection to another, as necessary, to create the 'relational data'. 
1.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
    #It's a way to organize an application, but it's up to us to decide. We could decide to put things together based on a specific purpose such as putting all routing files together (budgetRouting, expensesRouting, and categoriesRouting); or we could put things together because they're related on purpose (such as putting the model and routing files together in a director, because they work together for a specific purpose).














REFERENCE: FROM MONGO SITE:
collection
A grouping of MongoDB documents. A collection is the equivalent of an RDBMS table. A collection exists within a single database. Collections do not enforce a schema. Documents within a collection can have different fields. Typically, all documents in a collection have a similar or related purpose. See Namespaces.
Relational Database Management System. A database management system based on the relational model, typically using SQL as the query language.

database
A physical container for collections. Each database gets its own set of files on the file system. A single MongoDB server typically has multiple databases.

document
A record in a MongoDB collection and the basic unit of data in MongoDB. Documents are analogous to JSON objects but exist in the database in a more type-rich format known as BSON. 