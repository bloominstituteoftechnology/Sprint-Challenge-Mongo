Charlie Sparks

1. Describe the following: DataBase, Collection , Document

Database: A database is a collection of data stored on a host that persists after the server connection that transfered the data is no longer active. As I understand it, there are two main types: relational (MySQL) and non-relational (MongoDB).

Collection: In MongoDB, a Collection is a grouping of documents on a database that is organized around a single name for the collection.

Document: In MongoDB, a Document is the building block of the database. It is where all the actual information is stored in JSON format.

2. Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?

Again, as I understand it, relational patters refer to the ratio of one type of data to another. For example, one blog post with multiple comments could be either a "One-to-Many" relationship, or a "One-to-Few" relationship. You can achieve this by the way you organize your documents. Using the example above, you could nest references to all the comments within the blog post docment, and use Mongoose's populate method to pull all of their information together. 

3. Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

Breaking an API into Sub-Applications (I think?) involves seperating all of your Schemas and models into different files/routes.