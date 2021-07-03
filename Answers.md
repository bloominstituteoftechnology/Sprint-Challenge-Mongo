# Describe the following: DataBase, Collection , Document

- Those are the constituent pillars of a Database in MongoDB.
- A DataBase can be thought as an abstraction of a part of a Bussiness logic that has significance on its own. As an example, Walmart can have several DataBases one for every mall.
- Collections are the sub-categories/departments derived from the DataBase logic. As an example, a Wallmart's mall can have the following sub-categories/departments: "Food and Beverage", "Sports", "Fashion Retail, "Electronic", "Pharmacy2, etc, etc...
- A Document holds the smaller piece of information with which the Collections get populated.

- Of course, my example is a naive approach to the Wallmart business logic.

# Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?

- All linked documents are dependents of documents' unique ids.
- We link the documents adding a 'ref' at the document level. Tha 'ref' is a field constructed in the following way:

```
linkedField: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ModelToLink' }],
```

# Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

- That can be achieved with express.Router function. We define specific Routes to hanlde every Sub-Applications.

- This is scalable, we can define sub-routers inside Routers.
