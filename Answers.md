1.  Describe the following: `DataBase`, `Collection` , `Document`
1.  Describe how one can achieve the pattern of _relationships_ in MongoDB. What
    needs to take place at the schema level? How do we _'fill'_ in the
    appropriate relational data using mongoose?
1.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

1. DataBase is a place to store data. Collection is a group of documents inside the database. Document is an object that has properties and values.

2. To achieve a relationship in mongodb, one would have to reference it by objectId. exp: city: { type: mongoose.Schema.Types.ObjectId, ref: City }.

3. To break up an API into different file, use express router and require all the file at one place then use a middleware to hook up the router to each file.
