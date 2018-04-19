1.  Describe the following: `DataBase`, `Collection` , `Document`

`DataBase` is either hardware or software served for the purposes of storing data. 

`Collection` is a table of data organized by some criteria. 

`Document` can represent an object with keys and values similar to objects in programming languages.

2. Describe how one can achieve the pattern of _relationships_ in MongoDB. What needs to take place at the schema level? How do we _'fill'_ in the appropriate relational data using mongoose?

_relationships_ in MongoDB are declared via *type: ObjectId* and *ref* properties. We fill in the relational data via populate() method.

3.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

I think it's referring to *MVC* architecture where the application is broken up into the Model, the View and the Controller sub-applications. The model takes care of the handling of data, the view is what is served to the end-user, and the controller is responsible for things like routing, authentication, etc.