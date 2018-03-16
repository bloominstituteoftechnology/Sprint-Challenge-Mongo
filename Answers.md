# Answers

1. Describe the following:  
- Database: A database is a structured group of information, made up of collections.
- Collection: A group of documents that are all related. Sort of like a folder that contains a bunch of one type of file.
- Document: One piece of information, like if you were storing a collection of dog breeds, one document would be a single breed's information.

2. Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we fill in the appropriate relational data using mongoose?  
- Inside the schema, you can set a property to have the type 'ObjectId', and a ref of whatever the model's name is. So if I have a movie and I want to list all of the actors that are in the movie, I could put 'Actor' in the ref and a list of ObjectIds that are associated with a specific Actor document. Then when you want to access the Movie document using .find(), you can follow it with .populate() with the name of the field you want to populate, and mongoose will get the associated documents and fill them in where the ObjectIds are.

3. Explain a way to break up an API into Sub-Applications, which tool did we use to do that?  
- You can split up the routing into separate files. So all of the routing related to the endpoint /dogs could be in a file, and all the routing related to /cats in another.
- If you do that, you need to use express.Router() and then export the router in each file. Then you can import it in the server file and use server.use() with the proper endpoint for the first argument and the router you want to use as the second.
