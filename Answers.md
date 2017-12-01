1. **Database**: A collection of data in a structured form in order for rapid access and retrieval. It holds differnt documents that can be run on a single MongoDB server.
    **Collection**: is a store for documents which are not same in structure which exists within a single database. Collections are analogus with tables in RDBMS.
    **Document**: is the component of storing data in MongoDB. It uses JSON structure for storing data. Documents are analogus to the records of RBDMS.
2. To create a relationship in MongoDB a one need to use the concept of referenced relationships by which we manually store the id of referenced document inside the other document. Using mongoose we need to implement ObectId type which is used to reference other documents.
3. MVC (**M**odel, **V**iew, **C**ontroller) is a kind of software design pattern for web development.
* **Model** - is responsible to define a data sturcture and methods to interact with the data store.
* **View** - is responsible for managing things that the end users are looking at on thier screen.
* **Controller** - is responsible for taking user requests, bring data from model and pass it back to end users.

* we emplemented mongoose as Model, React as View and Node/Express for designing our controllers. 