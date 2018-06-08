1) Describe the following: DataBase, Collection , Document

Database: an organized collection of data.
Collection: a directory that stores Documents.
Document: a file that holds the actual data (the json files we use)


2) Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?

To create relationships among Schema, we create refs in one Model and link it to another, like so:

'movies: [{ type: ObjectId, ref: 'Film' }],'

where movies is a property on a Model, and Film is another Model.


3) Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

We can use express to create sub-applications. Express allows us to create a unique url for each schema we have like so:

server.use('/api/characters', charactersRouter);
server.use('/api/films', filmsRouter);
server.use('/api/species', speciesRouter);
