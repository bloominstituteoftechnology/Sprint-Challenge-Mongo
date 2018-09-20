### Questions and Answers:

1. Describe the following: Database, Collection, and Document

A database is a collection of data that you can retrieve, create or add to, modify or update, and delete.

Collections compose databases. Each database may have multiple collections. They are basically directories or folders that contain data.

Documents compose collections. They are essentially data.

2. Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?

There are multiple collections of data within each database in MongoDB. They are often linked to one another. If one collection is linked to or make references to only one other collection, they have a "one to one" relationship. If one collection is linked to several collections, they have a "one to many (or few)" collections. If several collections are linked to or make references to multiple collections, they have a "many to many" relationship.

We do two things: (1) linking or referencing (refs) and (2) data population.

3. Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

We created endpoints and did nesting.