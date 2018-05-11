(1) Describe the following: DataBase, Collection , Document
    (a) A database is a location where data is collected, organized, and queried. It allows for data to persist after          local instances of applications have expired, and acts as a central point of data for other applications to draw       from.

    (b) A collection is a grouping of data within a database that is more defined than the database as a whole and relates
        to a single element or item of interest within the database.

    (c) A document is the way non-relational databases collect, access, and store data. A document is an outline of             pertient information about specific items in a database. 

(2) Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level?        How do we 'fill' in the appropriate relational data using mongoose?

    Relationships in Mongo Databases are non-relational, and in order to get the pattern of relationships in MongoDB, we 
    need to add linking and referencing to our schemas. Typically, there are 3 types of relationships: 1-to-1, 1-to-many, and many-to-many. 1-to-1 relationships can be embedded, whereas 1-to-many or many-to-many require referencing models in arrays.

(3) We can use routes to break up speficic HTTP requests to specific paths, and give us more control over our API.
