# Self Study

1.  Describe the following: `DataBase`, `Collection` , `Document`
* `DataBase` - Any organized collection of data. MongoDB `databases` contain `collections` of `documents`.
* `Collection` - In MongoDB, a `collection` is where `documents` are stored within a single `database` (for example, a blog database might have blog posts in one collection, and comments in a separate collection).
* `Document` - In MongoDB, a `document` is the data record itself. Following the above example, a single blog post, or a single comment, could be stored as an individual `document`.
---
2.  Describe how one can achieve the pattern of _relationships_ in MongoDB. What needs to take place at the schema level? How do we _'fill'_ in the appropriate relational data using mongoose?
* Relationships can be established via `reference` in MongoDB, which is set up in a `schema` - simply store a reference to another collection in a `document`, and then information from documents in that collection can be accessed. To display this data in some way, `populate()` can be used.
---
3.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
* `Express` can be used to break up an API into multiple routes, or sub-applications, by making use of `.use()` - as an example, the following could be used to set up a specific finance tracking route:
```javascript 
server.use('/api/finances', financeRouter);
```