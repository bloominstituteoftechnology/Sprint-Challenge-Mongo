### 1. Describe the following: Database, Collection, Document

- Database: A collection of data that is used to manage data

- Collection: Information in the database that can be easiy acceessed, managed, and updated

- Document: Designes to store semi-structured data in the non-relationa database and usually structured in JSON or XML

### 2. Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?

- Mongo has a flexible schema where references between documents are used to describe relationships. There are various models such as One to One and One to Many relationship that are used to achieve a pattern of relationships. Once the document reference is set up in the Schema, the data can then be populated accordingly.

### 3. Describe what MVC Archtecture is and how we have used it this week with Node/Express/Mongoose.

- MVC architecture is a pattern for user interfaces that divides an application into interconnected parts. For example there is always a model(schema), controller, and a view(some sort of front end).