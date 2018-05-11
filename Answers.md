1. Describe the following: DataBase, Collection , Document

    - a database is collection of stored information
    - a collection is a group of documents stored within a single database
    - a document is data stored as binary representations of json files

2. Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?

    - They achieve the pattern through the schemas, schemas can be a one to one, one to many, or many to many relationship.  In order to 'fill' apporpriate data you just have to reference the schema in a different schema using the "ObjectId" and "ref" tags.

3. Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

    - We use router to break them up into sub-apps, that way they can each have their own file.