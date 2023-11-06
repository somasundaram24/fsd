// require("dotenv").config();
var express = require('express');
var app = express();
const mongoose = require("mongoose");
var url="mongodb://yourip:27017";
app.use(express.urlencoded({ extended: true }));

const connectionParams = {
    dbName: `dockerdemo`,
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
try {
    mongoose.connect(url, connectionParams);
    console.log("Connected to database successfully");
} catch (error) {
    console.log(error);
    console.log("Could not connect database!");
}
const customerSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
});
const Customer = mongoose.model("customers", customerSchema);

app.get('/',function(req,res){
    res.send('Greetings from the server!');
})

app.get('/createMongo',function(req,res){ 
    var name = 'user' + Math.floor(Math.random()*10000);
    var email = name + '@mit.edu';
    var doc = {'name':name, 'email': email};
    new Customer({'name':name, 'email': email}).save();
    console.log(doc);
    res.send(doc);
    
})

app.get('/readMongo', async function (req, res) {
    try {
      const results = await Customer.find({});
      res.json({ Data: results }); 
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    } 
  });

var port = 3000;
app.listen(port,function(){
    console.log('Listening on port: is'+ port);
});
