** Database :** 
Mongodb databses are document oriented data model. Its a collection of data.

** Collection : **

A group of _Mongodb documents_ are collections. A collection is equivalent to RDBMS table. It lives in single database. 

** Document : **
A single record based on schema with in collections are documents.

**Relationship in MANGODB, Schema level, filling data **
One on one, one to many are referenced through embedded documents. ONe to many data model uses _ObjectId_ from another document. Mongoose middleware helps to populate data from other documents based on schema.


** Breaking up API **
TO break up Api into Sub-applications we used express router and connect it to server. 




