# nodeShortener
A simple local running URL Shortener with Node.js and MongoDB.

## Preparation
0. Install MongoDB
1. Start a new Project with `npm init`
2. Install the required packages
3. Get Postman Login
4. Get MongoDB Compass
5. Install nodemon globally with `npm install -g nodemon`
6. Add in the package.json:  "type": "module"

### Requirements
- Node.js
- MongoDB
- Postman
- mongoDB Compass

### NPM Packages
- Express
- Mongoose
- nanoid
- nodemon (global)
- pug

## Start
Add this folders
- config
- data
- middleware
- models
- routes
- public
- views
Add this file
- index.js


## First Steps with Express
- We start with the index.js file.
- We need to import express and create an express app.
- Then we need to create a server with the app.listen() method.
- After this we can start the server with nodemon.
- After that we can see a result at localhost:3000.
- We start the database connection with mongoose.connect().
- Then we can see a result in the console.

### 01_start
After this steps your Project should look like the folder "01_start".

## Routes
- We add a urls.js file in the routes folder.
- In this file we create a router with express.Router().
- Then we can add the routes with router.get().
- After this we need to export the router with module.exports.
- In the index.js file we need to import the router with require().
- Then we can use the router with app.use().


### 02_routes
In the folder "02_routes" you can find the finished routes.


## Models
- We add a url.js file in the models folder.
- In this file we create a schema with mongoose.Schema().
- Then we can create a model with mongoose.model().
- After this we need to export the model with module.exports.
- We add the model into the routes.
- Then we can use the model with app.use().
- Now we can test the routes with Postman.

### 03_models
In the folder "03_models" you can find the finished models.

## Validation
- We add JOI to the models.
- Then we can add the validation to the model.
- After this we can add the validation to the routes.
- Now we can test the validation with Postman.


### 04_validation
In the folder "04_validation" you can find the finished validation.

## Redirection
- We add a redirect route to the routes with :shortUrl.
- Then we can add the redirect to the routes.
- Now we can test the redirect.

### 05_redirection
In the folder "05_redirection" you can find the finished redirection.

## Frontend
- We add a views folder with a index.pug file.
- We add css in the public folder.
- Then we can add the frontend to the routes.
- Now we can test the frontend.

### Final Project
In the folder "06_final" you can find the finished project.

## Additional Functions with Auth Middleware
The `07_additionalFunctions` folder has been added as an extension of the `06_final` project. This new folder includes the implementation of auth middleware to provide update functionality for links to users that are logged in. The auth middleware uses a simple token-based authentication system for demonstration purposes.

### Setting Up and Using Auth Middleware
To use the auth middleware for updating links, follow these steps:
1. Ensure you have a valid token for authentication. For demonstration purposes, a token named "validToken" is considered valid.
2. Make a PUT request to the `/yourShortUrl` endpoint with the updated link information in the request body.
3. Include the valid token in the request headers or cookies as `authToken`.
4. If the token is valid, the link will be updated. Otherwise, an error message will be returned.

This functionality is aimed at enhancing the security and usability of the URL shortener application by allowing only authenticated users to update their links.
