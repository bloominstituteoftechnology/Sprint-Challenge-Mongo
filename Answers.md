1.  a Database contains collections, a single server can have more than 
    one database.
    a Collection contains documents, a collection can only be in a single
    database
    a Document is 1 object in a collection.

2.  for relationships, we need to make a ref to another schema and use the
    ObjectId from mongoose.schema to allow us to point to other models
    we can then fill these in using the .populate method

3.  We use router/controllers to keep the code cleaner and make the api split
    into multiple sub-sections which are then stored in the same folder as the model they are controlling. we used express.Router