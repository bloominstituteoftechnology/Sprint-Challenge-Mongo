1.  Describe the following: `DataBase`, `Collection` , `Document`

* `DataBase`: With respect to MongoDB, it is a NoSQL non-relational, table-less method of storing information in Documents and Collections
* `Collection`: In a document-oriented database, collection holds group(s) of information, ie document(s)
* `Document`: The actual entity that hold the information stored as BSON Objects with Key : value pairs

2.  Describe how one can achieve the pattern of _relationships_ in MongoDB. What
    needs to take place at the schema level? How do we _'fill'_ in the
    appropriate relational data using mongoose?

* MongoDB relationships are achieved by embedding sub-document, creating a reference `ref` in the schema linking it the other document's id


3.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

- By using express Router to create sparate routes for each view controller