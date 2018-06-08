#1. Describe the following: DataBase, Collection , Document
## A database is an organized collection of data.
## A collection is related data represented as a doc inside the db.
## A document is a piece of data that belongs to a collection.

#2. Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?
## refs must be used at the schema level to establish the proper relationships between collections. We 'fill' in the relational data with populate.

#3. Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
## Express router allows us to break up an API