const { UserDAO } = require('./lib/app/database/UserDAO');
const bodyParser = require('body-parser')

const express = require('express');
const { User } = require('./lib/app/models/User');
const app = express();
const port = 3000;

const dbHost = "localhost"
const dbPort = 3306;
const dbUsername = "root"
const dbPassword = "root"

app.get('/', (req, res) => res.send('Hello World'));

app.get('/users', function(_req, res){
    console.log('in GET /users route');
    //res.send("Welcome to users");
    let dao = new UserDAO(dbHost, dbPort, dbUsername, dbPassword);
    dao.getAllUsers(function(users){
        res.json(users);
    });
});

app.get('/users/:id', function (req,res){
    console.log('in GET /users/id route');
    let userId = req.params.id;
    let dao = new UserDAO(dbHost, dbPort, dbUsername, dbPassword);
    dao.getUserById(userId, function(user){
        if(user == null){
            res.status(404).json({"Error": "Invalid User Id"})
        }
        else{
            res.status(200).json(user);
        }
    });
});

app.post('/userscreate/:name/:password/:email', function (req,res){
    console.log("in POST /users route");
    let userName = req.params.name;
    let userPass = req.params.password;
    let userEmail = req.params.email;
    let dao = new UserDAO(dbHost, dbPort, dbUsername, dbPassword);
    let user = new User(-1, userName, userPass, userEmail)
    dao.createUser(user, function(userId) {
       res.status(200).json({"Success": "User created with userId of" + userId});
    });
});

app.get('/users/delete/:id', function(req,res){
    console.log('In DELETE /user route')
    let userId = req.params.id;
    let dao = new UserDAO(dbHost, dbPort, dbUsername, dbPassword);
    dao.deleteUser(userId, function(changes){
        res.status(200).json({"Success": "User with id of " + userId + " has been deleted"});
    })

});


app.listen(port, () => console.log('App listening on port ${port}!'));