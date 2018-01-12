1. Describe the following: `DataBase`, `Collection` , `Document`
  1. A DataBase is structured set of data that can be     accessed by a client through a server.
  2. A Collection is a storage for multiple documents     in MongoDB and can be thought of as a table in       relational databases but, with MongoDB these         documents don't have to have the same structor.
  3. Documents are independent units of data formated     in JSON.

2. Describe how one can achieve the pattern of            _relationships_ in MongoDB. What
  needs to take place at the schema level? How do we _'fill'_ in the appropriate relational data using mongoose?
  1. By adding the id field of one document into          another you can create a relationship to that        document. Then in Mongoose you would use the         populate function in your query to get the data      from the document that is related to the one your    working with.

3. Describe what MVC Archtecture is and how we have used it this week with **Node/Express/Mongoose**.
  1. MVC Stands for Model View Control. Models are the    MongoDB Schema, View is what's displayed so I        guess what we see when we use Postman, and           Controler is the Express routes.