1. 
    A Database is the largest unit in MongoDB. They contain collections, that contain documents, that contain fields. Documents hold a collection of fields, and fields are the individual pieces that make up a collection. Collections are just that, collections of documents.

2. To have a relationship in MongoDB, you have to have a reference at the schema level. With a field that has a reference, you can use the mongoose .populate method to
    fill in this data from other models.

3. Express & express router helped us divide the API. We were able to use a different page for each different collection and have them reference each other, rather than having a 
    huge monolithic page of code.