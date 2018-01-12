# Written Section

1. Describe the following: `DataBase`, `Collection` , `Document`
    * Database: structured set of data stored permanently
    * Collection: slice of your database gathering a specific section of your data 
    * Document: documents hold and organize data ex: JSON

2. Describe how one can achieve the pattern of _relationships_ in MongoDB. What
   needs to take place at the schema level? How do we _'fill'_ in the
   appropriate relational data using mongoose?

   We make a field on our schema/model that lists the mongoose id of the related parent/label/related & also give reference field to the schema type of said parent/label/related.


3. Describe what MVC Archtecture is and how we have used it this week with **Node/Express/Mongoose**.

    * Model - data & how/why organized
    * View - routes / how we access
    * Controller - ties together models & routes

    A way to keep our code organized.

