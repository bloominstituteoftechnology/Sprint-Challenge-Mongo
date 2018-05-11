1. Describe the following: DataBase, Collection , Document
- Database:  A storage of organized data that is easy to access.
- Collection:  Main divisions of a database that store Documents/objects.
- Document:  Sub-divisions of a collection that store fields/key:value pairs.

2. Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?
- You need to set up a reference to the data that finds it by type and document in the schema.  You .populate the information in the router.

3. Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
- By breaking up databases into collections, each of which store documents of related data.  We used MongoDB Compass to monitor this data.