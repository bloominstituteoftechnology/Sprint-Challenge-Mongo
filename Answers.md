1: A database in mongo is a collection of related documents or data which hold information that is organized for querying or managing later.

A collection within a database holds documents and are analogous to tables in relational databases.

A document holds data records as BSON documents.

2: With MongoDB, relationships represent how documents are related logically through embedded and referenced approaches

An embedded approach has multiple addresses to one user document for example. A relational approach in the same situation has the user and address documents separate but with a list of address id's in the user's document for querying purposes later.

3: When routing the paths for sub-applications to access the API, one app can be exported for use with these sub-applications that are set up with the paths chosen. Express() is the tool used to allow this to happen.

Example:

app.use('/foo', sub2);
app.use('/', sub1);

module.exports = app;
