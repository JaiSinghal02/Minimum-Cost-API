const weightData =require('../data/warehouseData.json');

const weightCalculator= (obj)=>{
    let keys=Object.keys(obj);
    let wc1=0,wc2=0,wc3=0;
    keys.forEach((val)=>{
        if(["A","B","C"].includes(val)){
            wc1+=(weightData[val]*obj[val]);
        }
        else if(["D","E","F"].includes(val)){
            wc2+=(weightData[val]*obj[val]);
        }
        else if(["G","H","I"].includes(val)){
            wc3+=(weightData[val]*obj[val]);
        }
    })
    return [wc1===0?-1:wc1,wc2===0?-1:wc2,wc3===0?-1:wc3];
}
module.exports=weightCalculator;