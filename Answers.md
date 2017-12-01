1. Database is a place to store data. In Mongo, the data is located in a cloud server or on your local machine. We can commands to enter the database to perform different actions such as showing collections

Collections is about how data is organized and it is essentially a group of documents which work similar to tabs in a excel spreadsheet with its rows and columns. It groups the data into organized documents which we can then access for storing, changing, deleting etc. 

Document is a json object which contains the actual data.

2. Set up your schema using the objectId and basically build at the schema level. The special method to fill in data is populate() with the specific data as the parameters. The ref property is what we use on the schema level to link up one set of data to another. 

3. The MVC stands for Model, View and Controller. The model allows us to organize and layout our data. Route or View which allows us to create addresses to access information. Controller is the action which ties the model and view/route together. Its is a architecture that allows us to separate these different processes which allows code to be both maintainable and scalable. 