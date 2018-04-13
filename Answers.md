1.  Describe the following: 
- `DataBase`: Something that holds collections of documents. 

- `Collection`: Where every document (see below) is stored.

- `Document`: How data is stored in MongoDB (represented as BSON, which is like JSON except with
  more data types).


2. Describe how one can achieve the pattern of _relationships_ in MongoDB. 
- Two ways: References (also known as link, this is usually an id) or Embedded data (all the data is
  in a single document structure).

What needs to take place at the schema level?
- For references, you usually use an object ID. For Embedded data, you usually create an object as a
  property of another object.

How do we _'fill'_ in the appropriate relational data using mongoose?
- Using `populate()`. This is used for populating the data inside the reference.

3. Explain a way to break up an API into Sub-Applications, which tool did we use to do that?
- We used express. It makes routing easy and clean.
