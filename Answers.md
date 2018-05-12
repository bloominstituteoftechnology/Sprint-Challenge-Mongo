### Describe the following: `DataBase`, `Collection` , `Document`
* a database is a collection of documents
* a collection is a sub-component of a database that stores documents
* documents are where data records are stored as BSON documents

### Describe how one can achieve the pattern of _relationships_ in MongoDB. What needs to take place at the schema level? How do we _'fill'_ in the appropriate relational data using mongoose?
* 1-1 involves utilizing sub-ducuments embedded within the model/document
* 1-Many typically utilizes references (linking) to different collections

### Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
* routes based on application resources 