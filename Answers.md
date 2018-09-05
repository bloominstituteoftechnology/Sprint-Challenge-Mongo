1. Describe the following: DataBase, Collection , Document

> Database: A database can pretty much be anything that stores information. More specifically to mongoDB, a database is what contains your Collections and Documents that are specific to that Database.

> Collection: A collection in mongoDB is like a table in an SQL database like MySQL. The Collection is to store more specific information such as login credentials for a certain User.

> Document: Documents in mongoDB would are the specific result that comes from a query. When making a `find` query you are returned anywhere from 0 to an infinite amount of Documents. For example, if you are in the `Login` database and you make a `find` query inside of the `Users` collection, you will return each `User` document that matches your query.

2. Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?

> We can achieve the relationships pattern by going into one of our collections schemas and making a reference to another schema. For example...

```js
User = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  friends: { type: mongoose.Schema.Types.ObjectId, ref: 'Friend' }
});
```

> In this example we can see that the `friends` field is making a reference to the `Friend` collection. We can then make a `find` query on the `User` collection to return the results of `username`, `password`, and every document of `friends` that matches our query options.

```js
User.find()
  .populate('friends') // whatever we pass into `populate` needs to refer specifically to the field we are referencing in our `User` schema
  // ...logic
```
> Without the `populate` field, we would only return the ID's of each friend. Now that we speciify that we want to populate the `friends` field, we will instead return each friends information.

3. Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

> We used `Router()` off of the `express` object to give us the ability to seperate our API endpoints and concerns.