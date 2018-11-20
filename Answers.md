1.  Describe the following: `DataBase`, `Collection` , `Document`
- DataBases are an organized collection of information that can be retrieved by querying the many tables of data in the db.
- A collection in a db stores documents with a similar data type. A collection of `payouts` for example will store all the payout related data which may include the amount of a payout, date, and the namd and id of the worker paid. A `worker` collection stores all the worker information like SSN or home address.
- A document is a single object record within a collection written in JSON. Each document has its own Id and may contain references to other documents in different collections. We can CRUD documents at anytime. 

1.  Describe how one can achieve the pattern of _relationships_ in MongoDB. What
    needs to take place at the schema level? How do we _'fill'_ in the
    appropriate relational data using mongoose?
    - To achieve the pattern of relationships, we must insert a reference to another collection in the schema of the collection where we want the reference to exist.
1.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

- We can use Express to brek up an API into sub-applications. Instead of having one big file with cluttered route paths and code, we can seperate them by their own routes.