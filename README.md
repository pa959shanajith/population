# population
project about country population

#frontend
open folder => cd ./frontend
run the command => npm i
start the server => npm start

note: run the frontend server on port 3000 if you want to change the port please change the port address in api .env files also

#backend / api
create a local mongodb database with the name of Country
create two collections in it name as country_population and users

update your local mongodb uri in .env file field called MONGO_URI

open the api folder => cd ./api
run the command => npm i
install nodemon locally

run api server => nodemon

#create new user
use postman to register new user use below mentioned Api Config

method:POST
url:http://localhost:8080/api/user/register
JSON body:{
    "emailId":"demo@gmail.com",
    "password":"demo1234",
    "name":"demo"
}
make sure user getting registered in Mongodb users collections

open browser enter URL 'http://localhost:3000/#/login' for login page use credentials username : demo@gmail.com
password : demo1234

done :)






