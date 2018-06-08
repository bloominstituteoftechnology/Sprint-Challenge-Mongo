1. Describe the following: DataBase, Collection, Document

    - DataBase: A set of data consisting of collections of documents
    - Collection: A set of documents of the same Model/Schema
    - Document: A single piece of data (a BSON object) with information that follows a particular Schema

2. Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?

Relationships in MongoDB are achieved by referencing another model inside a schema. It looks something like this:
```javascript
const Person = new mongoose.Schema({
    name: {type: String},
    friends: [{type: ObjectId, ref: 'Person'}]
})

module.exports = mongoose.Model('Person', Person)
```
Then the information for that reference can be "filled in" by chaining `populate()` on a query. For example:
```javascript
Person.find()
    .populate(
        'friends',
        'name'
    )
    ...
```

3. Explain a way to break up an API into Sub-Applications, which tool did we use to do that?