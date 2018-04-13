1.  Describe the following: `DataBase`, `Collection` , `Document`.

* A Database is an organized collection of data stored in a computer. Collettion is a group of data relevent ot each other inside a database. Document is each individual item inside a collection. For example;authors can be a database, books inside that could a be a collection and each item of a book is a document inside the collection.

2.  Describe how one can achieve the pattern of _relationships_ in MongoDB. What
    needs to take place at the schema level? How do we _'fill'_ in the
    appropriate relational data using mongoose?

* There is two ways to achieve relationships in MongoDB. One is called embedded patern, in which we embed or nest a sub set of data into the parent set. The second is called referencial reletionship, in which we tie the sub-set of data to the parent set by `ObjectId` and `ref` fields.

3.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

* To break up an API into sub-applications we use `Router`. By spcifying routers inside a sub-application and then using that application inside the server file, we achieve the goal.
