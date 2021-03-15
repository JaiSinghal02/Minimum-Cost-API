const express=require('express');
const app= express();
const solve=require('./methods/costCalc');
const weightCalculator=require('./methods/weightCalc');
let port = process.env.PORT || 3000;

 
app.get('/api',(req,res)=>{
    const weights=weightCalculator(req.query);
    let minimumCost=solve(...weights);
    res.json({minimumCost});
})

app.listen(port,()=>{
    console.log("LISTENING ON PORT ....")
})