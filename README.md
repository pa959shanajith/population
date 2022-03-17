# population
project about country population

#frontend
open folder =><b> cd ./frontend </b> <br>

run the command => <b>npm i</b> <br>

start the server => <b> npm start </b> <br>
 
note: <b> run the frontend server on port 3000 if you want to change the port please change the port address in api .env files also </b>

#backend / api
create a local mongodb database with the name of <b>Country</b> <br>

create two collections in it name as <b>country_population</b> and <b>users</b><br>

update your local mongodb uri in <b>.env</b> file field called <b>MONGO_URI</b> <br>

open the api folder => <b>cd ./api</b><br>

run the command => <b> npm i</b><br>
install nodemon locally <br>

run api server => <b>nodemon</b> <br>

#create new user
use postman to register new user use below mentioned Api Config <br>

<b>
method:POST <br>
url: http://localhost:8080/api/user/register <br>
JSON body: { <br>
    "emailId":"demo@gmail.com",<br>
    "password":"demo1234",<br>
    "name":"demo"<br>
}<br>
</b>
make sure user getting registered in Mongodb <b>users</b> collections

open browser enter URL <link> 'http://localhost:3000/#/login' </link> for login page use credentials <br>
<b>username : demo@gmail.com</b> <br>
<b> password : demo1234 </b> <br>

done :)






