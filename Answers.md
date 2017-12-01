1. Describe the following: DataBase, Collection , Document.
    Databases store information whereas a Collection is a specified set of information tied together.
    // Not certain for definition of document.

2. Describe how one can achieve the pattern of relationships in MongoDB. 
   - What needs to take place at the schema level?
   - How do we 'fill' in the appropriate relational data using mongoose?
    

3. Describe what MVC Archtecture is and how we have used it this week with Node/Express/Mongoose.
    MVC Architecture is used through the Model, Routes, and Controllers. We have used it this week t modularize the different parts of our api. Routes specify how a client can interface with our api. Models is the layout of how our documents are supposed to look like. They are the interface between the API and MongoDB. Controllers are any logive that ties Models and Routes together. They specify the logic that is to be processed when a request is made.