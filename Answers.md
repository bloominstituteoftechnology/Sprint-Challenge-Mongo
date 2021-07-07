# Describe the following: DataBase, Collection , Document
Database: collection of data
Collection: group of related documents
Document: object that contains the data

# Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?
We have to use joins in mongoose and connect ObjectId(s) of other models by using the ref property

#Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
express router