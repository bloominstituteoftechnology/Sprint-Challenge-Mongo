1.  Describe the following: `DataBase`, `Collection` , `Document`

Database: A store of data that is accessed through http requests.
Collection: A group of data within a database.
Document: A single unit of data within a collection.


1.  Describe how one can achieve the pattern of _relationships_ in MongoDB. What
    needs to take place at the schema level? How do we _'fill'_ in the
    appropriate relational data using mongoose?

Relationships in MongoDB are of the following three types - One to One, One to Many, and Many to Many.
These relationships are established at the Schema level in the associated fields.
A One to One or One to many relationship is often best indicated by nesting the subdocument schema(s) directly within the parent as an object structure. An array of objects is indicated by wrapping the subschema in square brackets.
A One to Many, or Many to Many relationship, in which subdocument objects would be repetitive and inefficient, can be
optimized by storing a reference to the associated document, then calling .populate() on the associated data.
If no reference to the desired subdocument exists, but an inverse relationship is pre-established, you can call .find()
on the collection of the associated document and push any or all properties from the results to an array in the
document to which it is related.


1.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

When organizing an API, it is possible to restructure it into sub-applications for readability.
To bring each sub-application into your root application, it is necessary to export from the sub-application
using `module.exports = MODULE_NAME`, then require it in the root application using a format such as
`const MODULE_NAME = require('PATH')` and then calling your root application to use it for the associated URI
