1.  Describe the following: `DataBase`, `Collection` , `Document`

-DataBase is the overall Data Data model for an app/website/etc.

--(Its like the root folder on a computer)

-DataBases are broken further down into Collections, which are smaller individual peices of more specific forms of data. Uers/Roles/Films/Characters/etc.

--(This would be a folder on the computer)

-Documents are the actual pieces of data being stored.

--(These would be the files it the above folder)

2.  Describe how one can achieve the pattern of _relationships_ in MongoDB. What
    needs to take place at the schema level? How do we _'fill'_ in the
    appropriate relational data using mongoose?

A parameter needs to be defined in the schema with `type: ObjectId` so the DB knows taht we are refrencing another object. also needs a `ref:` of the collection that the `ObjectId` is located in.

3.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

Setting up a router will allow the different `route endpoints` to be broken out into seperate files for better readability.
