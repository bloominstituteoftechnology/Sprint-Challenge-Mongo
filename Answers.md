* 1.  Describe the following: `DataBase`, `Collection` , `Document`
    * DataBase: Structured set of data. Repository of resources that can be accessed.
    * Document: The document is the unit of storing data in a MongoDB database.  
    * Collection: A collection may store a number of documents. A collection is analogous to a table of an RDBMS. A BSON object (binary js object notation).

* 1.  Describe how one can achieve the pattern of _relationships_ in MongoDB. What
    needs to take place at the schema level? How do we _'fill'_ in the
    appropriate relational data using mongoose?
    * On the modal we delcare a field to have a type of object id and put a ref in that field as well, ref will link us from one model to another or to the same modal depending on what we're trying to achieve. 
    * We fill in the relational data using populate in mongoose. 
* 1.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
    * We used Express Router. 