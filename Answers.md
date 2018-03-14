
    Describe the following: DataBase, Collection , Document
    Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?
    Describe what MVC Archtecture is and how we have used it this week with Node/Express/Mongoose.

1. DataBase - A database is a grouping of information (collections) that is organized in a particular way to make accessing it consistent and efficient.
2. Collection - A collection is a grouping of documents that are related (though not necessarily structured the same way [at least for schema-free DBs])
3. Document - A document is the atom of a database. It can be structured in a number of ways but is ultimately where data is stored.

4. Using mongoose we are able to populate collections of data.  We build schemas that structure how the data will be represented and then populated a collection based upon the schema that we built. To build relationships in MongoDB we can import one schema into another we are trying to build and reference its properties by indicating the path showing from where we want the information pulled. (authors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Author' }])

5.  The Model-View-Controller (MVC) Architecture splits applications in pieces that interact with one another in a standardized way.  As far as I understand the Model would be a DataBase (such as MongoDB), the View would be something that shows endpoints (often web pages), and the Controller would incorporate Node, Express, and Mongoose.  
