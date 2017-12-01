#Describe the following: DataBase, Collection , Document
*Database: a storage of information that persists through visits, typically usernames and account information are found in a database (in terms of websites)*
*Collection: a grouping of Mongo documents. They're like a "table" within a database*
*Document: a file in which records are stored. MongoDB uses a Binary JSON format to store data.*

#Describe how one can achieve the pattern of relationships in MongoDB. What needs to take place at the schema level? How do we 'fill' in the appropriate relational data using mongoose?
*We can relate documents together by referring to another object inside our schema. We can use arrays for mutable storage or just refer to another objects ID if it's static.*

#Describe what MVC Archtecture is and how we have used it this week with Node/Express/Mongoose.
*MVC Architechture is a pattern used to separate concerns and internal representations of data, to and from a user. It stands for Model-View-Controller and it's used for any sort of user interfacing.*
