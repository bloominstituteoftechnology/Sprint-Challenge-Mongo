# Questions

#### A Database stores a collection of documents. Collections store documents. Documents are the data holders for the database.

#### Using refs we can connect different properties of individual models to one another. We use mongoose to make the model and the schema. Mongoose functions similarly to blueprints to a building except in this case its a database. The way we fill them in is effectively {field: {type: xType, ref: 'xRef'},}. The schema is very free flowing you just have to define it as a mongoose schema and identify the fields you want to fill. 

#### We used express to break up the application into multiple sub apps. Effectively we can use any name but using const ____ = express.Router() we can make sub applications using route and whatever function that you desire for the sub app.