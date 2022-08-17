// Application Dependencies
const bodyParser = require('body-parser')

// Create instance of an Express Application on Port 3000
const express = require('express')
const app = express()
const port = 4000

// Set location of static resources and use the JSON body parser
app.use(express.static('app/images'))
app.use(bodyParser.json());

// CORS Middleware
app.use(function (req, res, next) {
    // Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
});

// GET Route at Root '/' that returns a Test Text message
app.get('/', function (_req, res)
{
    // Return Test Text
    console.log('In GET / Route');
    res.send('This is the default root Route.');
})

app.get('/calc', function (_req, res){
    console.log('In GET /calc Route');
    res.send('My Calculator Services v1.0')
})

app.post('/calculate', function (req, res){
    console.log('In POST /calc method with ' + JSON.stringify(req.body));
    if(!req.body.operation){
        res.status(400).json({error: "Invalid operation posted. Missing Operation"})
    }
    if(!req.body.operand1){
        res.status(400).json({error: "Invalid operand posted. Missing first operand"});
    }
    if(!req.body.operand2){
        res.status(400).json({error: "Invalid operand posted. Missing second operand"});
    }
    if(req.body.operation === "/" && req.body.operand2 === "0"){
        res.status(400).json({error: "Invalid operation. Cannot divide by 0"})
    }

    var num1 = parseInt(req.body.operand1);
    var num2 = parseInt(req.body.operand2);
    var answer;
    switch (req.body.operation) {
        case "+":
            answer = num1 + num2;
            res.status(200).json({success: "Operation Success: " + answer})
            break;
        case "-":
            answer = num1 - num2;
            res.status(200).json({success: "Operation Success: " + answer})
            break;   
        case "*":
            answer = num1 * num2;
            res.status(200).json({success: "Operation Success: " + answer})
            break;   
        case "/":
            answer = num1 / num2;
            res.status(200).json({success: "Operation Success: " + answer})
            break;     
        default:
            break;
    }
})

// Start the Server
app.listen(port, () => 
{
    console.log(`Example app listening on port ${port}!`);
});
