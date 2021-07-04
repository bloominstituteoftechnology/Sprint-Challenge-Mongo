Describe the following: DataBase, Collection , Document -- A database is a collection of data that is structured in a way to be easily manipulated. A collection is a set or subset of the database that stores related documents even if they don't have the same structure. A document is one data set of key - value pairs that correspond to a single object.


Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose? -- One can use Object IDs as data types to link one object to another object. On the schema level, the value of a key-value pair needs to be an object with a type of ObjectId and a reference to the name of the model. We fill in the appropriate relational data with mongoose by using the schemas in this way.


Explain a way to break up an API into Sub-Applications, which tool did we use to do that? -- We can use CORS to break up an API into sub applications and connect multiple servers. One server can handle front-end, while the other handles the back-end.