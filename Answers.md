## 1. Describe the following: `DataBase`, `Collection` , `Document`
* a mongodb Database is a file which holds many different 'Resources' or Collections if you will and a Collection is really just a container for Documents, and Documents are made up of Fields.

## 2. Describe how one can achieve the pattern of _relationships_ in MongoDB. What needs to take place at the schema level? How do we _'fill'_ in the appropriate relational data using mongoose?
* one can import the object id of the collection you want to form a relationship with and simply create another field and assign the 'type' field to object id and use 'ref' as well to reference the model.

## 3.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
simply by exporting and importing or 'Requiring' modules we can break up an api into many different Sub-Apps for the server we can also use a module called Router within express to handle route requests outside of the server file.
