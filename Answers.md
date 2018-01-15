1. Describe the following: DataBase, Collection , Document

* DataBase: part of server, where clients could save their data for later. Some DataBases are based on SQL, which should follow strict SQL rules, others, like Mongo is Non-SQL database, more flexible.

* Collection: storage documents, like tables.

* Document:  is the unit of these storing data in database.



2. Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?

* There are two ways to create relationship in Mongodb: Embedded documents; Reference documents;

  Embedded documents: embed documents within documents, therefore a single document contains its own relationships. Insert it into database as one, and only need one query to find. Has two kinds of relationship:

    One-to-One: parent document has one child, and the child has one parent;

    One-to-Many: parent document has many child documents, but the child documents can only have one parent document.

  Reference documents: Instead of embedding the child document into the parent document, like embedded documents, we separate teh child document out into its own stand alone document. Insert them into database one by one, and use populate() to reference documents.

In most cases embedded relationships can be used, but if there is data that needs to be repeated across many documents, it can be helpful to separate it in its own document.


3. Describe what MVC Archtecture is and how we have used it this week with Node/Express/Mongoose.

* MVC Archtecture is: Model-view-controller pattern for user interfaces that divides an application into three interconnected parts. 
  Model: defines what data the app shold contain. If the state of this data changes, model will notify the view;

  View: defines how to display app's data. 

  Controller: contains logic to updates the model / view in response to input data

* We created different folders to separate database, server, and logic code (mongoose). But they are interconnected and work together.  