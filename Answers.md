## Describe the following: `DataBase`, `Collection` , `Document`

Let's work from the smallest to the biggest:

* `document`

A document is an individual record. It contains data about a singular thing. In today's challenge, an individual `expense` is a record about a specific outflow of cash or asset consmuption, like how much was expended, what the expense was, etc.

* `collection`

A collection is a group of related documents. Multiple `expense` documents can be gathered into a collection of `expenses` for example. We might have other collections, such as `budgets` and `categories`, each with their own set of related records.

* `database`

A database is a group of related collections. To put it another way, a database is a collection of information that is organized for efficient retrieval and processing. The structure that has been outlined here hints at this organization that makes retrieval and aggregation easier to do.

## Describe how one can achieve the pattern of *relationships* in MongoDB. What needs to take place at the schema level? How do we '*fill*' in the appropriate relational data using mongoose?

A pattern of relationships is established by linking a document to other documents with a `ref` and `ObjectId`. For example, in today's challenge, an `expense` document is linked to two other documents: a `budget` and a `category`. These are linked by referencing in the `expense` document the model type of each and the ObjectId of the specific document in each corresponding collection. This linkage is enfoced at the schema level by adding `{ type: ObjectId, ref:'Model' }` for each one in `expense`.

In Mongoose, a normal `find()` will return just the ObjectId's of the related documents. However, with `populate()`, Mongoose will instruct the DB to retrieve the record with that ID and *fill* those fields for the query output.

## Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

You can break an API into Sub-Apps by routes. You can do this subdivision by taking advantage of `express.Router()`.
