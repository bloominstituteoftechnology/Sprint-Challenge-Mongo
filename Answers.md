# Questions

1. Describe the following: `DataBase`, `Collection` , `Document`
    * Databases hold a collection of data. A single database can have multiple collections. Within each collection there are documents. Documents use `json` format for storing data.
1. Describe how one can achieve the pattern of _relationships_ in MongoDB. What
   needs to take place at the schema level? How do we _'fill'_ in the
   appropriate relational data using mongoose?
   * Depending on the type of relationship (one-to-many, many-to-many, etc.) you can fill relational information with either a `subdoc` or `ref`.
   
<!-- 1. Describe what MVC Archtecture is and how we have used it this week with
   **Node/Express/Mongoose**. -->