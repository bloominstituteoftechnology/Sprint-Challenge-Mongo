Describe the following: DataBase, Collection , Document
*Database - * A database is an organizational structure that seeks to collect and store data in an efficient and easily-retrievable way.
*Collection - * One or more documents, not necessarily of the same structure, that may be stored in a database. In a relational database, organization is defined by schema. 
*Document - * The unit of storing data. In MongoDb, this is usually a JSON object.

Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?

*Answer - *The pattern of relationships in MongoDB can be achieved using the "ref" key and assigning the appropriate collection to it. We 'fill' in the appropriate relational data using populate method in mongoose.


Describe what MVC Archtecture is and how we have used it this week with Node/Express/Mongoose.

*MVC Architecture - *
MVC = Model-View-Controller

The model is the central component of the pattern. It is the Schema for how we build the layout of how the information will be interpreted. It directly manages the data, logic and rules of the application.

A view is how the information will be viewed and rendered onto the page taking information from the controller and displaying it as needed

The controller accepts input and converts it to commands for the model or view. This is how the server will handle the request made from the client and send it to the view to be displayed. This is also where in the url it will be specified to give it's location or "route" within the Application. CRUD operations