## Questions

### Describe the following: `DataBase`, `Collection`, `Document`.
---

* A `Document` is a single object, the smallest unit in Mongo.

* A `Collection` is a _collection_ of documents.

* A `DataBase`is a container for all one's collections.

### Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?
---

We can either embed another document inside, which is effectively adding a variable in the schema, or we can use a `ref`by adding a field to a document with the type ObjectId and a reference to the document(s) we want referenced.  then we simply populate those when sending the data with `.populate()`.

### Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
---

```js
express.Router()
```