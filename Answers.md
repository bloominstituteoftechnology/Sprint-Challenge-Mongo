1. Describe the following: `DataBase`, `Collection` , `Document`
   
    A database is a collection of data that is sorted and can be queried to return both collections and documents.
    A collection is an organized set of related documents.
    A document is a set of data that makes up an entity within the database.

1. Describe how one can achieve the pattern of _relationships_ in MongoDB. What
   needs to take place at the schema level? How do we _'fill'_ in the
   appropriate relational data using mongoose?

    You achieve the pattern of relationships within MongoDB using ObjectID references and using 'ref' keywords in the mongoose Schema. You can then populate that document reference using the populate method.

1. Describe what MVC Archtecture is and how we have used it this week with
   **Node/Express/Mongoose**.

    MVC split up your code architecture into three parts - Models which represent your database entries; Views represent how that data is presented to the client; and the Controller handles the logic.