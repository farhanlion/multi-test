# Multi

You need to add your mysql username and passw to the '.env' file. 

For example, my `.env` file looks like this:
```CLOUD_NAME = 'dvapwslkg'
CLOUDINARY_API_KEY = '247173229232398',
CLOUDINARY_SECRET = '5i3j4yQrH7GXKp-tZxk1BBOgOS8'
MYSQL_USERNAME = 'root'
MYSQL_PASSW = 'Password_123'
```

Then run the following commands:

`npm i`

`npx sequelize-cli db:create`

`npx sequelize-cli db:migrate`

`npx sequelize-cli db:seed:all`

`npm start`

