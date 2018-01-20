# 1 Describe the following:
* Database
A number of databases can be run on a single MongoDB server.
* Collection
A collection may store a number of documents. A collection is analogous to a table of an RDBMS.
* Document
The document is the unit of storing data in a MongoDB database.
# 2 Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? 
Data in MongoDB has a flexible schema. you use embedded documents to describe relationships between connected data.
* and how do we fill in the appropriate relational data using mongoose? 

# 3 Describe what MVC Archtecture is and how we have used it this week with Node/Express/Mongoose.
a simple MVC framework 
M is for model. A place to define data structures and methods to interact with your data store.
V is for view. A place to manage everything the end user sees on his or her screen.
C is for controller. A place to take user requests, bring data from the model and pass it back to the view.