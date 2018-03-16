1. Describe the following: `DataBase`, `Collection` , `Document`
  A: A database is a an organized set of related information (datasets).  Datasets can be internally organized in different ways: Collections/Objects/Fields, Tables/Records/Fields, etc.  MongoDB uses the first model where the 'objects' are documents.  Therefore the a MondoDB database is structured as:
    Databases
      Collections
        documents
          fields
  To help navigate the database and aid in operations like searches, collections and documents are indexed.

  Collections are groupings of related documents objects given a collective name like 'friends' or 'vehicles'.  Documents are collections of individual records where the records represent information about one specific 'person', 'place' or 'thing'.  Using the above examples:
    A 'friends' document contains records of multiple friends.
    A 'vehicles' document contains records of different vehicles.

    At the atomic level are records.  Records can be represented by rows or objects.  Each record can contain one or more attributes.

2.  Describe how one can achieve the pattern of _relationships_ in MongoDB. What needs to take place at the schema level? How do we _'fill'_ in the appropriate relational data using mongoose?
  A: Relationships are established by placing common keys in two or more documents.  The key represents the identifier that references the documents to each other.  In relational databases a key from one table is associated with a second table as a 'foreign key' setting the relationship to a unique row.  This requires a third table that tracks the associations of the keys.  
  
  In MongoDB the foreign keys point from one document to another instead of to a specific record.  To prevent duplication of data 'references' are used where individual ids are placed in an array ( employees: [1234, 5678, 9012]  ) and included as an element of same collection (i.e. 'company'):

  employeesRef.js:
  {
    company: "Microsoft",
    location: "Seattle, WA",
    employees: "[1234, 5678, 9012, 0007]
  }

{
    _id: 5678,
    name: "Rivers, Johnny",
    role: "Musician",
    location: "Top Secret"
},

{
    _id: 9012,
    name: "K",
    role: "Postman",
    location: "Wellsley, MA"
},
{
    _id: 0007,
    name: "Bond, James",
    role: "Consultant",
    location: "Unknown"
},

{
    _id: 1234,
    name: "Madison, Happy",
    role: "Golf Pro",
    location: "Coral Gables, FL"
}

An alternative pattern would be to place the company, Microsoft, in a 'Companies' collection and a reference in the 'Employees' collection:
companies.js:
{
    company: "Microsoft",
    location: "Seattle, WA",
    employees: "[1234, 5678, 9012,]
  },
  {
    company: "Apple Corporation",
    location: "Cupertino, CA",
    employees: "[21234, 35678, 49012]
  },
  {
    company: "Google",
    location: "Mountain View, CA",
    employees: "[234, 678, 012]
  }

employees.js:
{
    _id: 5678,
    name: "Rivers, Johnny",
    role: "Musician",
    location: "Top Secret",
    company: "Microsoft"
},

{
    _id: 9012,
    name: "K",
    role: "Postman",
    location: "Wellsley, MA",
    company: "Microsoft"
},

{
    _id: 0007,
    name: "Bond, James",
    role: "Consultant",
    location: "Unknown",
    company: "Microsoft"
},

{
    _id: 1234,
    name: "Madison, Happy",
    role: "Golf Pro",
    location: "Coral Gables, FL"
    company: "Microsoft"
}

3.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
  A: The API can be broken up using the '.use' method.  It is called from the main app with the systax:

    mainApp.use("/fileName.js, subAppName);

    