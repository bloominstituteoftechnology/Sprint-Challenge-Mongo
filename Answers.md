1. Describe the following: DataBase, Collection , Document

    *DataBase:* a physical storage for a collection of data within a server. It stores multiple sets of files that contain information for a collection

    *Collection:* a set of documents within MongoDB that is withing the the database. They contain things like the Schema for the information being brought in. It contains all the the documents that are for storing the data specifically needed for back-end details

    *Document:* the actual data that is being represented by the Schema. It is a key:value pair inside the Collection object that stores all the data records. These keys are the known as the Field Name which specify what the data is being represented as.

2. Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?

    Relationships are built by referencing the unique ID's provided by the MongoDB infrastructure.

    When the Schemas are built they need to be built with links between the different db data so that when it is rendered it can be rendered with the appropriate information based on whats stored at the unique ID. 

    Then we fill in that data by calling the ID and then referencing the desired fields.



3. Describe what MVC Archtecture is and how we have used it this week with Node/Express/Mongoose.

    MVC = Model-View-Controller
    
    The `model` is the central component of the pattern. It is the Schema for how we build the layout of how the information will be interpreted. It directly manages the data, logic and rules of the application.
    
    A `view` is how the information will be viewed and rendered onto the page taking information from the controller and displaying it as needed
    
    The `controller` accepts input and converts it to commands for the model or view. This is how the server will handle the request made from the client and send it to the view to be displayed. This is also where in the url it will be specified to give it's location or "route" within the Application. CRUD operations