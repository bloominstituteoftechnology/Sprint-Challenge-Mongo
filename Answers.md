Describe the following: DataBase, Collection , Document

Database - a database is a tool that stores data to be used for different purposes throughout an application. 
Collection - in mongoDB a collection is a storage of documents.
document - in mongoDB, a document is JSON code structured in a way to slightly resembel a standard javascript object. 

Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill'
 in the appropriate relational data using mongoose?
 
 - one to many, one to many, and many to many. One to one if you have a user and the user has a recpie or something such as that and the user and ingrediants are separate documents in the API. this is an example of what a one to one relationship would be . one to many would be described as when you have a user document and the user has many recipes in different documents. many to many, on the other hand would be described as when you have many users and many jobs. Users have many jobs and jobs have many users.


Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
- Im slightly confused on this question, so I will answer what I believe is a question regarding routing. We can use the Route() from express to breal our project into different sections to controll the URL routing of certain content in different files for the API. 

