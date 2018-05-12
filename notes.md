# **collection.find()**

* ## **.find()**
  ``` 
  .find() 
  ```
  * returns a query
  * it is displayed as an array of all documents in the collection

  #

* ## **.find({ filter })**

  ```
  .find({ field: value }) 
  ```
  * returns all documents where _field_ is equal to _value_
  * if the provided field is an **array**, a document will be returned if the array contains the desired value
  * if the provided field is a **sub-document**, you can test for specific values via object traversal 
    * `.find({ "field.subField": "value" })`
  #

  ``` 
  .find({ field: {$gt: value, $lt: value} }) 
  ```
  * returns a document if the field is greater than and less than some value
  #
  
  ```
  .find({ field: {$in: [ value1, value2 ]} }) 
  ```

  * returns a document if the value of the field is contained in the provided array
  * if there are multiple conditions for a find, a shorthand for this can be used:
    * ` .find({ "field1": value, "field2": [option1, option2, ...] }) `

  #

* ## **.find({ filter(s) }, { projection(s) })**
  ```
  .find({}, { showThisField: 1, dontShowThisField: 0, ... })
  ```
  * explicitly show of hide fields by including the optional **projection** parameter
    * `1` or `true` - show the field
    * `0` or `false` - do not show the field

***

### **loop through the returned results of `.find()`**
```
const found = collection.find({optionalCriteria}, {explicitDisplay})

found.forEach(callback)
found.sort({ field: 1 }) // sort in ascending (or -1 for decending) order
```

***
***
***

# **collection.findById(id)**
```
collection.findById( id, 'showThisField -dontShowThisField' ) 
```
* returns one document as a **query** that matches the specified id
* use this when searching for a specific object id

***
***
***

# **collection.findOne()**
```
collection.findOne({ field: value })
```
* returns the **first** document that satisfies the query parameters
* includes optional _projection_ parameter

***
***
***

# Models / Documents

**Models** --> *create* --> **Documents** --> *which can be retrieved through* --> **Queries**

#

**MODELS** are constructors compiled from schema definitions.
  * instances of a model represent *documents*

**QUERIES** are methods used for accessing and retrieving documents.

#

## model.**create( object )**
  * creates and saves a new document to a collection
  * essentially a shortcut for:
    ``` 
    const document = new DocumentName( object )

    document.save() 
    ```

***

# Populate

Population has to do with GET requests, not POST.

Parameters:
  * **path** - either the path to populate (string), or an object specifying all parameters (object)
    ```
    .populate('field')
    .populate({ newField: anyValue }) // not sure if it works this way
    ```

  * [**select**] - specify which fields to include / exclued
    ```
    .populate({ select: 'include -hide' })
    .populate({ select: { field: 1, field: 0 } })
    ```
  
  * [**model**] - the reference model you want to use for population
    * if this is not specified, `.populate()` will look for the model in the schema's `ref`
    ```
    .populate({ model: reference_to_model_variable })
    ```

  * [**match**] - object - conditions for the population query 
    ```
    .populate({ match: { field: "value", field2: value2 } })
    ```

  * [**options**] - object - options for the population query
    ```
    .populate({ options: { sort: {field: -1} } })
    ```

Pattern:
  * populate a model - `ModelName.populate()`
  * populate a query - `ModelName.find().populate()`
  * shorthand - `something.populate('path', 'select', model, match, options)`

## query.**populate()**
  * returns a **query**
  * process of `query.populate()`
    1. the query is executed (`.find`, `.findById`, ...) and a response is received
    2. a seperate query for each specified population path is executed
    3. a response from each query is returned
    4. optional callback is executed

## model.**populate()**
  * returns a **promise**
  * populate a single object
    ```
    ModelName.findById(id, function(error, returned_document) {

      const subOption = {
        path: "field_to_populate",
        match: { field: "value" }, //where field = value in returned_document
        options: { sort: 1, limit: 5 },
        model: "optional_reference_to_model" // if ref isn't already defined
      }

      const fullOptions = [
        { path: "blah", options: { sort: -1 } },
        option
      ]

      ModelName.populate(returned_document, fullOptions, callback)

    })
    ```
  * populate an array of objects
    ```
    ModelName.find({ filters }, function(error, documents) {

      const options = { path: "", match: {field: "value"}, ... }

      const promise = ModelName.populate(documents, options)

      promise
        .then(() => { ... })
        .catch(() => { ... })

    })
    ```

## document.**populate()**
  * returns the populated document
  * parameters include ...
    * [**path**] - either the path to populate (string), or an options object
      ```
      document.populate('field', cb)
      document.populate(reference_to_options_object, cb)
      ```
    * [**callback**] - invokes population when passed
      * population does not occur unless a callback is passed or you use `.execPopulate()`
      ```
      document.populate(callback) // returns a query
      document.populate(options).execPopulate() // returns a promise
      ```