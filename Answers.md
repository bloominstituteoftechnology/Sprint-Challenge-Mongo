1 - Describe the following: database, collection, document
  A database stores information in an organized way, usually on a server. Collections are group of documents, which are records of data that can hold objects within. In MongoDB, documents are objects stored in the database.

2 - Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at schema level? How do we fill in the appropriate relational data using mongoose?

We can use schemas to define relationships - one to one, one to many, many to many - and link them with models. Then we can use populate to fill in the data.

3 - Explain a way to break an API up into sub-applications? Which tool do we use to do that?

We can use express router to break an API up into sub apss and send routes into the corresponding controller functions.