1.:

-Database: An organization of data.

-Collection: A table of data within a database.

-Document: The smallest form of data within a collection.

2.:

    One-to-One: 
        {
            id: ###
            name: 'bill'
            education:{
                degree: 'Science',
                school: 'Harvard'
            }
        }
    
    , 
    
    One-to-Many:
        {
            id: ###
            name: 'bill'
            educations:[
                {
                level: 'High School'
                diploma: 'True'
                school: 'Bradley HS'
                }
                {
                level: 'College'
                degree: 'Science',
                school: 'Harvard'
                }
        }
    

Mongoose relation data example:
    states-lived-in: {type: ObjectId, ref: 'Places'}

3. 
    By using server routers, and creating multiple 'router' files based on
    url paths / endpoints.