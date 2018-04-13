1.  DataBase - A database is a collection of information organized and stored, usually on a computer, that can be easily accessed, managed or updated.

Collection - A collection is the equivalent of an RDBMS table, RDBMS stands for Relational Database Management System. A collection exists within a single database. Collections do not enforce a Schema. Documents within a collection can have different fields. Typically, all documents in a collection have a similar or related purpose.

Document - A record in a MongoDB collection and the basic unit of data in MongoDB. Documents are analogous to JSON objects but exist in the database in a more type-rich format known as BSON.

2.  Consider the following example that maps patron and address relationships. The example illustrates the advantage of embedding over referencing if you need to view one data entity in context of the other. In this one-to-one relationship between patron and address data, the address belongs to the patron.

In the normalized data model, the address document contains a reference to the patron document.

{
\_id: "joe",
name: "Joe Bookreader"
}

{
patron_id: "joe",
street: "123 Fake Street",
city: "Faketon",
state: "MA",
zip: "12345"
}

f the address data is frequently retrieved with the name information, then with referencing, your application needs to issue multiple queries to resolve the reference. The better data model would be to embed the address data in the patron data, as in the following document:

{
\_id: "joe",
name: "Joe Bookreader",
address: {
street: "123 Fake Street",
city: "Faketon",
state: "MA",
zip: "12345"
}
}

3.  A way to break up an API into Sub-applications is by the use of a Router. The tool we used was router.
