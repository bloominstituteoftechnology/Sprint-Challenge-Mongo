1.  Describe the following: DataBase, Collection , Document:

* Database is where data is being stored. Collection is the collective of data using a used schema. Document is each individual piece of data.

2.  Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?

* relationships are made with importing schema type ObjectId of a model that is then added as a property to the schema by {ref:}

3.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

* Broken up into routers according to each endpoint
