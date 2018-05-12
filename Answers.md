1.  A database is the overall container store that can hold multiple collections. A collection is a smaller container that holds different documents. Documents are JSON objects that hold data.

2.  Relationships can be achieved in mongodb with the use of refs, subdocuments and subschemas. In order to _'fill'_ in the relational data, you need to `.populate()` the query.

3.  We have been using the express router to achieve this in our API.
