## Simple CRUD Express.js Featuring Sequelize ORM
Basic simple example CRUD (Create,Read,Update,Delete) on Nodejs using framework Express JS featuring Sequelize ORM with database MySQL.

![screenshot 1](https://raw.githubusercontent.com/herudi/crud_express_sequelize/master/screenshot_1.png)

### 1) Clone project
`git clone https://github.com/herudi/crud_express_sequelize.git`

### 2) Go to root project
`cd crud_express_sequelize`

### 3) Install sequelize-cli --globall 
`npm install sequelize-cli -g`

### 4) Install Package local
`npm install`

### 5) Config database
change username and password and database_name (if you want). on path /config/config.json

### 6) Creating Database
`sequelize db:create`

### 7) Migrations
`sequelize db:migrate`

### 8) Seeders (if you need dummy data)
`sequelize db:seed:all`

### 9) Running project (Development)
`npm run dev`

You can access via http://localhost:3000/

Good Look :)


