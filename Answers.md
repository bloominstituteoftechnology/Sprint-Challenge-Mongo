### Describe the following: Database, Collection, Document
- Database: A server or service that persists data that can be queried and retrieved
- Collection: A "collection" of documents on a mongodb instance. Each db can have multiple collections
- Document: An item in a mongodb collection, a document takes the form of an js object or a python dict

### Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?
- You can achieve a pattern of relationsips with Mongo by using mongoose schemas that reference other mongoose models.

### Explain a way to break up an API into Sub-Application, which tool did we use to do that?
- To do this you need to modularize your code using `module.exports`