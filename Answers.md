
 * 1. Describe the following: DataBase, Collection , Document
 Answer:
a. Database: In MongoDB, database is the collection of documents. We can use the existing databse using command - "use myDB" and if the database doesn't already exists, it first creates new database and then use myDB.
b. Collection: MongoDB stores data in collections. A collection may store a number of documents which can be of different structure. Collection in mongoDB is analogus to tables in relational database.
c. Document: Document is the unit of storing data in a MongoDB database. The document use JSON style for storing data.

 * 2. Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?
Answer: The pattern of relationships in MongoDB can be achieved using the "ref" key and assigning the appropriate collection to it. We 'fill' in the appropriate relational data using populate method in mongoose.

 * 3. Describe what MVC Architecture is and how we have used it this week with Node/Express/Mongoose.
 Answer:  MVC stands for Model View Controller. It is a kind of software design pattern for web development.
* Model is responsible to define a data sturcture and methods to interact with the data store.
* View is responsible for managing things that the end users are looking at on thier screen.
* Controller is responsible for taking user requests, bring data from model and pass it back to end users.

* We implemented mongoose as Model, React as View and Node/Express for designing our controllers. 
