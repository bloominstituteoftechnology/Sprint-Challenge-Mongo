1. Describe the following: DataBase, Collection , Document

* Database - is the instance of mongo that will contain your Collections for that db.

* Collection - an grouping of data that represent instances of the same type of information. ie, foods, trees,

* Document - individual items in the collection where you ca access its information. ie a tree, a food,

2. Relationships are achieved through the use of ObjectIds. Those tell mongo that this field on this document comes from another schema or document.

* To "fill" that field in mongoose has the populate method where you provide the field you are populating.

3. Model View Controller - Pattern to break apart the app.

* wiki - is an architectural pattern commonly used for developing user interfaces that divides an application into three interconnected parts. This is done to separate internal representations of information from the ways information is presented to and accepted from the user. The MVC design pattern decouples these major components allowing for efficient code reuse and parallel development.

* schemas and models are models. Functions to get the data are Controllers. Routes are the views
