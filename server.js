const express=require("express");

const bodyParser=require("body-parser")

const app=express();

app.use(bodyParser.urlencoded({extended:true}))

// app.get('/', function(req,res){                      //will be shown on localhost:3000 as path is"/"

//     //to integrate both files
//     res.sendFile(__dirname+ "/bmiCalculator.html")
// })

app.get("/bmiCalculator", function(req,res){                      //will be shown on localhost:3000/bmiCalculator as path is"/bmiCalculator"

    //to integrate both files
    res.sendFile(__dirname+ "/bmiCalculator.html")
})

app.post('/',function(req,res){

    var weight=parseFloat(req.body.weight);  //to get float value
    var height=parseFloat(req.body.height);

    var bmi=weight/(height*height);

    res.send("BMI of Person is " + bmi);

})


//below post method is correct but not working due to some reason
// app.post("/bmiCalculator",function(req,res){

//     var weight=parseFloat(req.body.weight);  //to get float value
//     var height=parseFloat(req.body.height);

//     var bmi=weight/(height*height);

//     res.send("BMI of Person is " + bmi);

// })



app.listen(3000, function(){
    console.log("server is running on 3000")
})