1. Describe the following: `DataBase`, `Collection` , `Document`

A `Database` is a place to persist data. A `Collection` is a _collection_ of
different types of documents (or Schemas). A `Document` is a piece of data
that has a specific structure (`Object` with different `keys` and `properties`).

1. Describe how one can achieve the pattern of _relationships_ in MongoDB. What
   needs to take place at the schema level? How do we _'fill'_ in the
   appropriate relational data using mongoose?

To achieve a pattern of _relationships_ in MongoDB, you will need to have a
property on a Schema `ref` to another Schema, or an instance of a Schema (or
a document) by `ObjectID. An example of this as follows:

        const Schema = ...({
          authors: [
            {
              type: mongoose.Schema.Types.ObjectID, ref: 'Author', ...
            }
          ],
        });

1. Describe what MVC Archtecture is and how we have used it this week with
   **Node/Express/Mongoose**.

The MVC is a model for organizing and compartmentalizing duties. The _Model_
is like a Schema from Mongoose. The _View_ would be the React comps. And
the _Controller_ is Express as it controls the interaction between the
_View_ and the \_Model_s (which is connected to a DB).
