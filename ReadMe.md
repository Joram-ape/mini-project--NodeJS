1. Open your vs code and create a folder (mkdir filename).
2. and type cd filename once a folder has been created.
3. in vs code type git clone https://github.com/Joram-ape/mini-project--NodeJS-.git;

We begin setting up our database after git clone.

1. go to your mysql workbench create local server
   host: localhost,
   user:root,
   password: root
2. After setting up the local server, we begin to create batabase, miniDB, and sampleAPI.

We begin configuring our endPoint01 server after setting up the local server and creating the database.

1. go to your vs code type cd endPoint01 and type npm install
2. after npm install type npx knex migrate:latest
3. after migration type npx knex seed:run

once the seeders and migration are configured we run our server

1. type node server.js
  once the message appear "API is now online on port: 4001 successfully connected to MySQL"
2. after run our server go to postname create blank collection and add request
   1. http://localhost:4001/treasures/findDistance
      {
      "latitude": 14.5437648051331,
      "longtitude": 121.019911678311,
      "distance":6
      }
   2. http://localhost:4001/treasures/priceValue
      {
      "latitude": 14.5437648051331,
      "longtitude": 121.019911678311,
      "distance": 1,
      "prize": 20
      }

We go to endPoint02 after testing endPoint01.

1. cd endPoint02 directory
2. Type npm install within the folder.
3. type npx knex migrate:latest after npm install

We run our server after configuring the database and node_module.

1. type node server.js
   the message "API is now online on port: 3001 successfully connected to MySQL" appears
   if succcessful
2. go to postman same process from endPoint01

   You can create an account and log in as a user with my example API.

   1. http://localhost:3001/users/register
      {
      "fullname": "John Doe",
      "isAdmin": true,
      "password": "123",
      "email": "john@gmail.com"
      }
 
     2. http://localhost:3001/users/login
      {
      "password": "123",
      "email": "john@gmail.com"
      }
       they create a accessToken