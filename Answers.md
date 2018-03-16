1.  * DataBase - a place to persist data
    * Collection - a storage of documents that may not have the same structure
    * Document - a piece of data that has a specific structure

2.  Relationships can be achieved by attaching references to other Models in the Schema like so -

    ```js
    const MySchema = new mongoose.Schema({
      item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item",
      },
    });
    ```

3.
