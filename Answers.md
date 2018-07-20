1. Describe the following: DataBase, Collection , Document

Database is a data container
Collection is a set of data in Database (following table structure (SQL) or json structure (noSQL)). One database can have multiple datasets.
Document is a record inside Collection (one row in table or one object in json)

2. Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?

To implement relationship in MongoDB, it requires at least 2 schemas which includes the reference field and refer to another model AND 2 models with the reference field provides keys which acts as connection with another model.

To retrieve relational data, we use `[Model].find({}).populate('[ref_field]', '[ref_field_attributes]')`

3. Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

We use `router` from express. 