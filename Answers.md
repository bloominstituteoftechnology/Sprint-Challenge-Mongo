1. Describe the following: `DataBase`, `Collection`, `Document`
* `DatBase` is an organized collection of data. Databases such as MongoDB contain collections of documents.
* `Collection` - is a collection of documents stored withiin a single database.
* `Document` - is a single data record.
---
2. Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?
* In MongoDB, relationships can be established by using `reference`, which is set up in a schema. By storing a reference to another collection in a document, information from documents in that collection can be accessed. We use `populate()` to 'fill in' the appropriate relational data.
3. Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
* `Express` is the tool that we used to separate an API into muliple routes, or sub-applications. By using `.use` in the budgetTrackerApp, I was able to separate the budget, category, and expense routes into sub-applications.