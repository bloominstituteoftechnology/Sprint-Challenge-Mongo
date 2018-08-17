1. Describe the following: Database, Collection , Document. 

    A database is a collection of data stored on a computer that can be accessed, updated, and manipulated in various ways. In MongoDB, a database contains a number of collections. A collection is similar to a table in relational databases and it can contain one or more documents. A document contains raw data. 

2. Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?

    At the schema level, a developer must define a property for the relational data and use a schema type of ObjectId as well as reference the collection as shown below: 

    Example: 

    const ObjectId = mongoose.Schema.Types.ObjectId; 

    property_name: { type: ObjectId, ref: 'Category' }

    A developer can fill in the appropriate relational data by using the mongoose populate method. Afterwards, a developer can insert the property name for the relational data as a string for the first argument and insert as the second argument any properties in a single string from the relational data that is required to be displayed. 

3. Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

    To break up an API into sub-applications developers can use express and its .Router() method to enable an application’s endpoints respond when a client wants to create, read, update or delete data. 