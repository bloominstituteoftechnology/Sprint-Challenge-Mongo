1. **Describe the following: DataBase, Collection, Document.**
   - Database = top level organization of data, made up of collections of documents
   - Collection = Set of documents of the same model
   - Document = Piece of data presented in an object

2.**Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?**
Relationships in Mongo are created by referencing another model inside one models schema. then using populate to bring in the data for the referenced module.

3.**Explain a way to break up an API into Sub-Applications, which tool did we use to do that?**
We use express router to break everything up and send routes into the functions we need.
