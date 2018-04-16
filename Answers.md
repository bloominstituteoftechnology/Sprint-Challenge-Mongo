# Self-Study

1.  Describe the following: `DataBase`, `Collection` , `Document`

    * A database is a structured dataset holding a collection of documents. A collection is similar to a table in a relational database; it stores documents by relation. The documents that are stored w/in a collection are instances of models. Models are created by compiling a schema, or template.
      i.e.
    * databases
      * collections
        * documents
          * fields

2.  Describe how one can achieve the pattern of _relationships_ in MongoDB. What
    needs to take place at the schema level? How do we _'fill'_ in the
    appropriate relational data using mongoose?

    * MongoDB relational patterns include one-to-one, one-to-few, one-to-many, and many-to-many. Use of subdocuments (an embedding/nesting of documents), linking w/ refs, populating data as well as querying data happen at the schema level.

3.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

    * We utilized Node.js + Express.js, as well as `module.exports = module` in order to connect all sub-applications to our root application. We call `module.exports = module` in our sub-apps to export them, then `require` these modules w/in our root app to import them.
