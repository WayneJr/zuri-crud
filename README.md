## SIMPLE ENDPOINT DOCUMENTATION FOR CRUD APP

On your localhost you can access the api at 
```http://localhost:[PORT STATED IN .ENV FILE]```

The hosted version of this app can be found at 
https://radiant-citadel-06042.herokuapp.com/

Endpoints are as follows:

GET - Root endpoint 

```/ ``` - The home endpoint that is shown when you access the API.


GET - All users

```/users``` - read route to get all available users in the database

POST - New User

```/users``` - create a new user by sending a post request such as the following payload to this endpoint

``` 
{
    "name": "Johnson",
    "email": "johnson@gmail.com",
    "country": "Australia"
}
```

GET - Find a user

```/users/:email```  - Find a specific user using their email

PUT - update a user

```/users/:id``` - Update a users data using their id


DELETE - delete a user
```/users/:id``` - Delete a  user using their id

