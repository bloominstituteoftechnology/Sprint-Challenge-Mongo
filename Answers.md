1. Describe the following: `DataBase`, `Collection` , `Document`
   
    * DataBase- a storage container of organized information, formatted and maintained on a server.
    * Collection- A specific set of documents of various types, often related, within a DataBase
    * Document- A single piece of organized information existing within a collection on a DataBase

2. Describe how one can achieve the pattern of _relationships_ in MongoDB. What needs to take place at the schema level? How do we _'fill'_ in the    appropriate relational data using mongoose?
    
    * Relationships can either be established via Embedded or Reference   methods.

    * Embedded documents are nested within their parent document, this    can be a one to one or one to many type relationship between        documents.

    * Reference documents are entirely seperate and reference one         another by specifing their Object type within each document,        which can be especially helpful in many to many type relationships
      between documents. 

    

