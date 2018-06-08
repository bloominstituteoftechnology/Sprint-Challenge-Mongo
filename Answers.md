1.  Describe the following: `DataBase`, `Collection` , `Document`
    -Database: holds Collections and documents

    -Collection: collections stores documents in databases as tables do in relational databases

    -Docuemnt: docummesnts holds fields and other data types across documents within a collection

1.  Describe how one can achieve the pattern of _relationships_ in MongoDB. What
    needs to take place at the schema level? How do we _'fill'_ in the
    appropriate relational data using mongoose?
    
    you can have relationshoips between documents and Models by one-to-one and one-to-many with embedded documents and one-to-many in document references

1.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

    -the tools we use to make a smart application is mongoose and mongoDB with Node and Express. This allows a developer to structure the api and config and these tools allows the app to be flexiable and smart.