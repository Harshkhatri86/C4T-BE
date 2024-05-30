#Setup the Nodejs 

### Env file code 
```
DB_NAME = 
DB_ROOT =  
DB_PASS = 
DB_HOST = 127.0.0.1 
DB_PORT = 3306

BIND_ADDRESS = 0.0.0.0
PORT = 
SECRET_KEY =
```

## Start the Application with below command 

download the node modules 

``` npm i ```

```
npx sequelize-cli db: create 
npx sequelize-cli db:migrate 
npx sequelize-cli db:seed:all
```

to start the application run 

``` npm start ```
