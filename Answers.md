1. Describe the following: `DataBase`, `Collection` , `Document`
Database:
A database is the central storage place for all application data. It houses all the collections and documents that an application can call upon to render for the user.
For example, a hard drive.
Collection:
A collection is a partition of a central database that contains information that for organizations sake needs to be separate from the rest of the database information. Most collections are grouped together based on their use.
For example, all users or all posts; or a directory.
Document:
A document is an individual unit of information that is contained in a database. Documents are separated out based on the collection they belong to and then accessed for a specific purpose, rendering a single item. 
For example, a single user or specific post; or a file.

1. Describe how one can achieve the pattern of _relationships_ in MongoDB. What
   needs to take place at the schema level? How do we _'fill'_ in the
   appropriate relational data using mongoose?
   Relationships in MongoDB are built upon the unique ID's that Mongo automatically assigns to each item that is placed in a database.
   At the Schema level a reference to the desired item needs to be built so that when the new Schema is called it can reach out and grab the desired information based on the unique ID that is called within the Schema.
   We utilize the unique ID to get the desired object; then within our Post method we separate out the desired information from the object and insert it within the newly created object.



1. Describe what MVC Archtecture is and how we have used it this week with
   **Node/Express/Mongoose**.

   MVC stands for Model View Controller; it describes the use of 3 seprate components to achieve the same goal as what we previous accomplished with by combining all 3 actions into a single function.
   The MVC architecture is important especially when applications become massive; in order to be able to work within the application having the process split up into 3 different parts allows for more efficient debugging; adding; and understanding how the application is built so that additions can be added with ease.

   We used it this week when we removed our post and get functions from the server.js file. We setup routes in one file, connected those routes with the controllers; and connected our models with our controllers. This keeps our server.js file clean.