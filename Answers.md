# Mongo Sprint Challenge: 

## Self Study Questions:

1. Describe the following: `DataBase`, `Collection` , `Document`:
    * A `Database` contains all the information/data within a single application.  It is structured in such a way that each database contains various `collections`.  For example in this Sprint we will be creating three `collections`: `Budget`, `Expense`, and `Category`.  Each of these `collections` contain `documents`, the smallest unit of data, which contain all the instructions (`schemas`) necessary to add data (`models`) of a particular type.  I am not certain of how the sub-router files associated with express router fit into this organization.

2. Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?
    * Each schema can take a property with an `ObjectId` - (`mongoose.Schema.Types.ObjectId`) which is a built Id creator in mongoose which can then be referenced by all other `documents`.  Additionally a `ref` parameter is required, which expects a string with `collection` you wish to connect/create a relationship with.

3. Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
    * The simple answer is express Router, which allows you to create separate routers for each URL extension of your webpage, however, I believe a thorough answer would include mention of models, controllers, routers, and how they interact with the webpage -- this is where I am unclear.