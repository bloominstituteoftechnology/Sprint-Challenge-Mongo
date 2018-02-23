##Describe the following: DataBase, Collection , Document
A database is a structure that stores data in an organized manner for retrieval. Within a database like MongoDB, related data is stored in a collection with each "piece" of data in that collection being a document.

##Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?
I think this is referring to what we did to connect the book model and the author model, for example. Within a model we need to establish a reference connection to the other model, such as connecting the author field for a book to the author model to be able to access data on that book's author.

##Describe what MVC Archtecture is and how we have used it this week with Node/Express/Mongoose.
MVC is an architectural pattern that divides the user interface into three parts: the model, the view, and the controller.

The model manages the data, logic, and rules of the app, which our database accomplished.

The view is what we display to the user, which our output accomplished.

The controller accepts input and converts it to commands for the model or view, which our server accomplished.