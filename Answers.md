1. Describe the following: DataBase, Collection , Document.
    Databases is a spot in local machine or cloud that has a title that can be accessed. A place where we can store collections.
    A collection is a grouping of documents, an organized gathering of data (Think of a spreadsheet). We model out our collection using Mongo Schema. It will save our documents and create an instance of a collection.
    A document is a json object and gets stored as a binary object.

2. Describe how one can achieve the pattern of relationships in MongoDB. 
   - What needs to take place at the schema level?
   - How do we 'fill' in the appropriate relational data using mongoose?
    Setting up your schema by using Mongoose.Schema.Types.ObjectId then referencing it.
    We use ref and populate to fill in the appropriate relational data using mongoose.
    Ref is on the Schema level. When we fetch a user, it will be the user id and the ref that was created.

3. Describe what MVC Archtecture is and how we have used it this week with Node/Express/Mongoose.
    Model View Controller 
    Model - Data, the type.
    View - Routes. Where we go to access our information.
    Controller - Actions
    An architecture that is used to separate concerns of our application. Provides a way to layout our code through maintainability and scalability. 

    MVC Architecture is used through the Model, Routes, and Controllers. We have used it this week to modularize the different parts of our api. Routes specify how a client can interface with our api. Models is the layout of how our documents are supposed to look like. They are the interface between the API and MongoDB. Controllers are any logic that ties Models and Routes together. They specify the logic that is to be processed when a request is made.