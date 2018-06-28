### What is a DataBase?
* A databse is collection of stored data saved ellectronically that can be retrieved on the server side

### What is a Collection?
* A collection are tables of the stored data in the database

### What is a Document?
* Data records that MongoDB stores like JSON docs but it is called BSON.

### Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?
* There are three pattern of relationships in MongoDB: Model One to One Relationships which is described as a one to one relationship between connected data for example, an employer to an employee; Model One to Many Relationships which is described as a one to many between connected data for example, a company that provides a service to its customers.
* What needs to take place at the schema level is understanding the pattern of the schema model by understanding the concepts and the relationships of that model.
* Moongoose 'fill' in this relational data by bridging that gap by being the middleware it need to protect the data.

### Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
* Using Express JS is a way to break an API into Sub-Applications.
