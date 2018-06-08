# Started at 9:20 am pacific time

# Describe the following: DataBase, Collection , Document?

# Database is a collection of data which which then you can create read update and delete and perform queries which its built in methods.
# A Collection is collection of your instances from your model.
# A Document is a javascript like object which holds your data as a nosql like structure which doesn't use table like tradictional database like slq.

# Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?

# You will have to create different mondels and then create a field which then points to the type mongoose.Schema.Types.Object_id and also use ref: to point to the collection that is associated with your field

# Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

# I believe this is the middleware that we add in the server.js file where we will write our end points in a route file and then export and import that route file to the server.js.  Then that route file will be the end points for that specifc collection.