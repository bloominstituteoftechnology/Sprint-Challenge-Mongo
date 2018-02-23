<p align="center">Answers</p>

1. Describe the following: `DataBase`, `Collection` , `Document`

---

A Database is a collection of Data stored on a server. (MongoDB)
A Collection is a collection of data on the server following a user specified Schema. Multiple collections can be stored each with their own Schema. Documents are the individual entries within a Collection.

---

2. Describe how one can achieve the pattern of _relationships_ in MongoDB. What
   needs to take place at the schema level? How do we _'fill'_ in the
   appropriate relational data using mongoose?

---

Sets of data must have separate keys/ids with one referencing the other. A master key / child key

---

3. Describe what MVC Archtecture is and how we have used it this week with
   **Node/Express/Mongoose**

The model is where the data is stored.
The view is what data is currently being presented.
The controller handles what data from the model is displayed in the view.
