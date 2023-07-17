// npm init,--npm install express,---npm install -g nodemon,--create express and set up it,---get method and listen method
// to run--nodemo filename
const express=require("express");

const bodyParser=require("body-parser");

const app=express();

app.use(bodyParser.urlencoded({extended:true}))  //we are trying to post the data that we get from html form 
// extended:true---allow us to post nested objects
// other methods "bodyParser.text()","bodyParser.json()"



app.get("/",function(req,res){
    // res.sendFile("index.html")  //error bcz server dont know the path of local file

    // __dirname--to find complete path
    res.sendFile(__dirname +"/index.html")
})


// npm install body-parser   = give us access to form data, variables and properties
app.post("/",function(req,res){
        

    // accessing form data/variables
     
    //   will append numbers,like 5+7=57

    // var n1=req.body.num1;
    // var n2=req.body.num2;


    // will add numbers
    var n1=Number(req.body.num1); //num1 & num 2 from index.html
    var n2=Number(req.body.num2);

    var sum=n1+n2;
      
    res.send("result of calculation :"+ sum)
     console.log(req.body);//access variables
    // on clicking submit buuton -"Thanks for posting" will be displayed on screen
    // res.send("Thanks For Posting")
})



app.listen(3000, function(){
    console.log("server is running on 3000")
})