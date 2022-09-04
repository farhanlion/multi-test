# Multi

You need to add your mysql username and passw to the '.env' file. 

For example, my `.env` file looks like this:
```
CLOUD_NAME = '*********'
CLOUDINARY_API_KEY = '***************',
CLOUDINARY_SECRET = '****************'
MYSQL_USERNAME = 'root'
MYSQL_PASSW = 'password'
EAGER_URL = 'https://multi.loca.lt/eager_endpoint'
```

Then run the following commands:

`npm i`

`npx sequelize-cli db:drop`

`npx sequelize-cli db:create`

`npx sequelize-cli db:migrate`

`npx sequelize-cli db:seed:all`

`npm start`

Then on a new terminal run:

`lt --port 8084`

Copy the generated url to `.env` file's `EAGER_URL`

Localtunnel allows larger files to be uploaded to cloudinary
