Describe the following: `DataBase`, `Collection` , `Document`-- 
Database-- In MongoDB, databases hold collections of documents.  To select a database to use, in the mongo shell, issue the use <db> statement, as in the following example: use DB.  If a database does not exist, MongoDB creates the database when you first store data for that database.

Collection-- MongoDB stores documents in collections. Collections are analogous to tables in relational databases.

Document-- MongoDB stores data records as BSON documents. BSON is a binary representation of JSON documents, though it contains more data types than JSON. 

Describe how one can achieve the pattern of _relationships_ in MongoDB. What
   needs to take place at the schema level? How do we _'fill'_ in the
   appropriate relational data using mongoose? When designing a MongoDB schema, you need to start with a question that you’d never consider when using SQL: what is the cardinality of the relationship? Put less formally: you need to characterize your “One-to-N” relationship with a bit more nuance: is it “one-to-few”, “one-to-many”, or “one-to-squillions”? Depending on which one it is, you’d use a different format to model the relationship.

Describe what MVC Archtecture is and how we have used it this week with
   **Node/Express/Mongoose**.
M is for model. A place to define data structures and methods to interact with your data store.
V is for view. A place to manage everything the end user sees on his or her screen.
C is for controller. A place to take user requests, bring data from the model and pass it back to the view.