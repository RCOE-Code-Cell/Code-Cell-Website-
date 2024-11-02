port :8000


# Default Register
Endpoint : /api/register

field 
## Post request
``` json
{
"name": "Your name",
"email":"youremail@gmail.com",
"password":"Set a pawwsord",
"confirm_password":"same as password"
}
```
### Will get otp 
## Put request
``` json
{
"email":"youremail@gmail.com",
"otp":"your otp"
}
```
# Default Login
Endpoint : /api/login

field 
## Post request
```json
{
"email":"youremail@gmail.com",
"password":"your password"
}
```
will gwt a jwt token
# Ouath login
Endpoint : /api/oauth2/login/
field 
## Post request
```json
{
"name": "Your name",
"email":"youremail@gmail.com"
}
```

# Password Changing
1. Endpoint : /api/password-reset-request/
   ## Post request
   ``` json
   {
    "email":"youremail@gmail.com"
   }
   ```
  Will get an otp at this email 

2. Endpoint : /api/password-reset/

   ## Post request
   ``` json
   {
    "email":"youremail@gmail.com",
    "otp":"otp recieved",
    "new_password":"Set a pawwsord",
    "confirm_password":"same as password"
   }
   ```

# User data 
Endpoint : /api/user

## Get request
will get the data of the user 
Note: In the header in authorization add the jwt token recieved from login


# Event data 
Endpoint : api/event

## Get request
will get tht list of all events 


Endpoint : /api/event/{id}
## Get Request
will get the data of that particular event... of that id 

# Team 
team_name = {tech, management, marketing}


role = {member, core, head}


Endpoint : /api/team/team_name/role/

## GET request 
will get the list of the team member of the particular domain and of their particular role 
