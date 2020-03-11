1. Describe the following: `DataBase`, `Collection` , `Document`
  A database is a data structure that stores organized information.
  
  Collection is a grouping of MongoDB documents. A collection exists within a single database. 
  
  Document is a smalllest unit of information in MongoDB

2. Describe how one can achieve the pattern of _relationships_ in MongoDB. What needs to take place at the schema level? How do we _'fill'_ in the appropriate relational data using mongoose? 

  To implement a relationship in MongoDB, it takes at least two schemas which includes the reference field and ObjectID. The reference field provides keys which acts as connection with another model. 

  We use `[Model].find({}).populate('[ref_field]', '[ref_field_attributes]')`


3. Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

  We use `router` from `express`.