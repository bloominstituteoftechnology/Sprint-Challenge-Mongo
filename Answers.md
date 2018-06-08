1.
  a) A database is a collection of data organized in a way that can be easily searched for information.
  b) A collection is a group of related objects.
  c) A document is a Javascript object
2.  In order to achieve the pattern of relationships in MongoDB, we need to create    schemas that tie ollections to each other in some way or other. In order to construct our schemas appropriately, it's important to understand the relationship between the different collections - whether it is one to one, one to many, one to few, or many to many/few to few.  If the relationship includes a 'many', the relationship can be best achieved through the use of links and refs, while if there is only a few, it might be better to embed the collection (create a sub-document).  Mongoose allows us to build schemas to achieve these relationships.
3. I'm guessing this is asking for Express and the way we can do this is to separate our application into different routers? 