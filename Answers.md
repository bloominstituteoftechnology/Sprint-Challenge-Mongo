1.  Database - is where all of your data lives including all its subparts
    Collection - is where all the documents live
    Documents - this is where BSON is stored

2.  You can use refs to achieve relationships in MongoDb. At the Schema level you must create a property that is structured as such: relationship: [{ type: mongoose.Schema.Types.ObjectId, ref: "example" }]

3.  You can split the API in to models using moongoose schemas
