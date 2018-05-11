1.  Describe the following: `DataBase`, `Collection` , `Document`

### A `database` is simply a collection of data. It usually houses any data that is input on the frontend by a user or data that is used to populate the page with information from an API.
### A `collection` is the individual folder, so to speak, that holds the documents. This is where we can breakdown our data into categories so everything is compartmentalized appropriately and therefore easy to reference for later use.
### A `document` is the object that is contained within the collection. This is typically the grouping of data that we get from user input which might contain things like a name, an email, an age, etc...

1.  Describe how one can achieve the pattern of _relationships_ in MongoDB. What
    needs to take place at the schema level? How do we _'fill'_ in the
    appropriate relational data using mongoose?

### Relationships in MongoDB can be acheived in two ways by `embedding` whole documents into another document or by `referencing` a document. On the model files, we would show a reference by using `ref:` and then typing the string of the document being referenced. This method is used when we want to be able to access the document being referenced throughout the app. The embedded method takes a whole document and nests it within an object's key as a value. This is typically done if the document being embedded is specific to that use case.

1.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

### One of the ways we learned to break up an API in sub-apps was with the Express tool/dependency. Express allows us to break up our API data so that our app/code is clean and then makes it easy to route these files back into a main file that would push the collected data together. It also allows for reuse of code.
