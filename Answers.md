1. Describe the following: DataBase, Collection , Document
- A <mark>database</mark> is what holds/stores collections of documents. A <mark>collection</mark> is what exists within a database, it is comprised of documents. A <mark>document</mark> is a record in a MongoDB collection and is the basic unit of data. MongoDB stores its data records as ```BSON``` documents.

2. Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?
- Since data in <strong>MongoDB</strong> has a flexible <i>schema</i>, it has an advantage of referencing relationships by ```_id```.

3. Explain a way to break up an <u>API</u> into Sub-Applications, which tool did we use to do that? 
- A way to break up an <i>API</i> is to use different/multiple routes from <mark>Express</mark> ```Router()```. It also works well for better code organization. 