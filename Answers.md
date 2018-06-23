1. -- Database is a group of collections that stores organized information.

    -- Collection is a collection of documents stored together.

    -- Document is the smallest form of data that is stored. 

2. If we choose the relationships to be `referenced` then we create an ObjectId key, and pair it with the referenced ID of corresponding data from another document. If we choose `embedded`, we would simply embed the properties and data into the structure of the same document.

3. We can use router.