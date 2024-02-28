# REST-CRUD-API-with-Node-JS-Express-MySQL

This is the Restful CRUD API with Node JS Express with MySQL

# Setup steps

1. create database in mysql name "crud" & create table "marks"
        
        CREATE TABLE marks(
        id int NOT NULL AUTO_INCREMENT,
        name varchar(255) NOT NULL,
        email varchar(255),
        mark integer,
        PRIMARY KEY(id)
        );

2. Open the terminal

        >>instrall Node modules
            >express
            >mysql
            >nodemon
            
        >>npm start 

3. Go to postman and create request and then:

        >set url  http://localhost:3001/marks

        >Select "body" and put "Raw" give file type "JSON"

4. Fill the postman data in to body as database raw
                        {
                        "name": "tharindu",
                        "email": "example@gmail.com",
                        "mark": "50"
                        }

5.check to CRUD operation as:

      @create
        POST >> http://localhost:3001/marks/create  >> send
      @read
        GET >> http://localhost:3001/marks/read  >> send
      @update
        PATCH >> http://localhost:3001/marks/update/1 (1 is a db id number)  >> send
      @delete
        DELETE >> http://localhost:3001/marks/delete/1 (1 is a db id number) >> send