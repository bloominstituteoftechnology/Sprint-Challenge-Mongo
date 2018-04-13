1.  Describe the following: `DataBase`, `Collection` , `Document`

A `document` is how MongoDB stores it's data. (doc type:`BSON Documents`- binary JSON) Documents are composed of key:value pairs.

A `collection` is literally a collection of `documents` stored together. A group of collections make a `database`.

A `database` is a group of (`collections`) information that is organized on a server running software to help manage it.

2.  Describe how one can achieve the pattern of _relationships_ in MongoDB. What
    needs to take place at the schema level? How do we _'fill'_ in the
    appropriate relational data using mongoose?

    To achieve the pattern of `relationships` in MongoDB, one would need to first decide if they're going to be `referenced` or `embedded`. If one chooses `referenced` then you create an ObjectId key, and pair it with the referenced ID of corresponding data from another document. If one were to choose `embedded`, you would simply embed the properties and data into the structure of the same document.

3.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

`Mongoose` is the tool that we used to break the API up into sub apps.

In order to use `mongoose` to do this, you have to:

1.  npm install mongoose
2.  require mongoose and .connect it
3.  define Schema
4.  create the model by compiling the schema
    I don't know from here?
