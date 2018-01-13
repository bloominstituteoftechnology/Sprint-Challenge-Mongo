1. Describe the following: DataBase, Collection , Document

Answer: A database is the physical container for collections. Each database gets its own set of files on the file system.

A collection is a grouping of MongoDB documents. A collection is the equivalent of an RDBMS table. A collection exists within a single database. Collections do not enforce a schema. 

A document is a record in a MongoDB collection and the basic unit of data in MongoDB. Documents are analogous to JSON objects but exist in the database in a more type-rich format known as BSON. 

2. Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?

Answer: There are two ways to achieve the relationships in MongoDB. One is to use embedded documents and another one is to use document references. 
For embedded documents, in schema level while we creating two relational models, the model as parent will have a field that will hold the relational model's schema. By using mongoose, we need to define the field that holds child model as array type and fill the child schema inside.

For documents reference, in schema level while we creating two relational models, the model as parent will have a field that will hold the relational model's objectID as reference. By using mongoose, we need to define the field called child id that holds the reference as Schema.Types.ObjectId type and fill the ref as child's model name.

3. Describe what MVC Architecture is and how we have used it this week with Node/Express/Mongoose.

Answer: The MVC architecture is Model-View-Controller pattern for user interfaces that divides an application into three interconnected parts. 

Model expresses the application's behavior in terms of the problem domain. It is responsible for managing data of the application. It responds to the request form the view and it also responds to the instructions from the controller to update itself.

View means presentation of data in a particular format, triggered by a controller's decision to present the data.

Controller is responsible for responding to the user input and perform interactions on the data model objects. Controller receives the input, ti validates the input and then performs the business operation that modifies the state of the data model.

We are using mongoose to create the data model and define the schema of the data which expresses the data format. And we are also using mongoose to create CRUD operations for the data model interacting with MongoDB. This CRUD operations is equivalent to the controller behaviors that manipulate the data model in database.