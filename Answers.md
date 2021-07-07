1.  Describe the following: `DataBase`, `Collection` , `Document`

-- In MongoDB, databases hold collections of documents. 


1.  Describe how one can achieve the pattern of _relationships_ in MongoDB. What
    needs to take place at the schema level? How do we _'fill'_ in the
    appropriate relational data using mongoose?


-- relationships can be made by 1. adding the field to our schema with reference, and the name of the model we want to fill. 2. we populate it in our mongoose request


1.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

we use Express router to break API into diffrent parts! 