1. Describe the following: `DataBase`, `Collection` , `Document`

Database: software that can store and retreive data of a certain format

Collection: a organization paradigm of MongoDB. Documents that represent a certain datastructure are organized into collections

Document: A piece of data to be stored in a collection. In mongoDB, it is a json representation

2. Describe how one can achieve the pattern of _relationships_ in MongoDB. What
   needs to take place at the schema level? How do we _'fill'_ in the
   appropriate relational data using mongoose?

Relationships in mongoDB can be made in several ways. 

There can be a collection of documents soley used to tie together documents from two different collections. 

There can also be objects on the schema of one collection that are filled with identifiers of documents of another collection. 

Mongoose prefers the latter and has methods for filling that data upon retreival (populate)

3. Describe what MVC Archtecture is and how we have used it this week with
   **Node/Express/Mongoose**.

MVC architecture is a serparation of concerns paradigm that dictates code separation in the form of 3 catagories:
 
 datastructures (models), 
 
 methods for interacting with the data (controllers), 

 and presentation (View).

