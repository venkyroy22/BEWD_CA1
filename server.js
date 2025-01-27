
const express = require('express');
const app = express();
const data = require("./package.json");
const port = 3000;

app.use(express.json());

const array = [];
app.post("/post",(req,res)=>{
    const {Username,email,password,DataOFBirth} = req.body;
    const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!passwordRegex.test(password) || !emailRegex.test(email)){
        if(!passwordRegex.test(password) && !emailRegex.test(email)){
            res.status(400).json({error :"Invalid email and password"});
            return;
        }else if(!emailRegex.test(email)){
         res.status(400).json({error :"Invalid email"});
         return;
        }else{
            res.status(400).send({message:"Password is not valid"});
            return;
        }
    }
    else{
    const New ={ 
        "Username":Username,
        "email":email,
        "password":password,
        "DateOfBirth":DataOFBirth 

    }
    array.push(New);
    res.json(array);
}



})




app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
