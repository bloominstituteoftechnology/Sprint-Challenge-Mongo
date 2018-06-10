# Q1 : Database, Collection & Document
## Database:
    A form of storage that can be read and written to.
## Collection:
    A grouping of a type of data in a mongo database
## Document:
    An instance of an element or item in a collection.

# Q2 : Relationships in MongoDB
    Relationships can be achieved in mongoDB through a ref type. To populate the document with the reference type you can do an extra db call or use a library(mongoose).
# Q3 : API into Sub-Applications
    Api's can be broken into sub applications through splitting up the routes by url. If using express, you can use middleware to use a particular router for a given url.