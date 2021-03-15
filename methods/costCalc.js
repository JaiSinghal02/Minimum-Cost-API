const distanceData= require('../data/distanceData.json')
const costCalc=(w)=>{
    let cost=10;
    if(w-5>0){
        cost+=(Math.ceil((w-5)/5)*8);
    }
    return cost;
}
const check2NodeCost= (a,b,x,y)=>{
    let cost1=costCalc(x)*distanceData[a-1][b-1];
    let cost2=costCalc(x+y)*distanceData[b-1][3];
    let fc1=cost1+cost2;

    let cost3=(costCalc(x)*distanceData[a-1][3])+(10*distanceData[b-1][3]);
    let cost4=costCalc(y)*distanceData[b-1][3];
    let fc2=cost3+cost4;

    return Math.min(fc1,fc2);

}
const checkCycleCost =(a,b,c,x,y,z)=>{
    let cost1=costCalc(x)*distanceData[a-1][b-1];
    let cost2=costCalc(x+y)*distanceData[b-1][c-1];
    let cost3=costCalc(x+y+z)*distanceData[c-1][3];
    let fc1=cost1+cost2+cost3;

    let cost4=costCalc(z)*distanceData[c-1][b-1];
    let cost5=costCalc(z+y)*distanceData[b-1][a-1];
    let cost6=costCalc(x+y+z)*distanceData[a-1][3];
    let fc2=cost4+cost5+cost6;

    return Math.min(fc1,fc2);
}
const solve = (c1,c2,c3)=>{
    if(c1===-1 &&(c2!==-1 && c3 !==-1)){
        console.log("FROM HERE 1")
        return Math.min(check2NodeCost(2,3,c2,c3),check2NodeCost(3,2,c3,c2));
    }
    else if(c2==-1 &&(c1!==-1 && c3 !==-1)){
        return Math.min(check2NodeCost(1,3,c1,c3),check2NodeCost(3,1,c3,c1));
    }
    else if(c3==-1 &&(c1!==-1 && c2 !==-1)){
        return Math.min(check2NodeCost(1,2,c1,c2),check2NodeCost(2,1,c2,c1));
    }
    else if( (c1===-1 && c2===-1) && c3!==-1){
        return (costCalc(c3)*distanceData[2][3]);
    }
    else if( (c1===-1 && c3===-1) && c2!==-1){
        return (costCalc(c2)*distanceData[1][3]);
    }
    else if( (c3===-1 && c2===-1) && c1!==-1){
        return (costCalc(c1)*distanceData[0][3]);
    }
    else if(c1!==-1 && c2!==-1 && c3!==-1){
        let cost1=check2NodeCost(1,2,c1,c2)+(distanceData[2][3]*c3);
        let cost2=check2NodeCost(2,1,c2,c1)+(distanceData[2][3]*c3);
        let cost3=check2NodeCost(2,3,c2,c3)+(distanceData[0][3]*c1);
        let cost4=check2NodeCost(3,2,c3,c2)+(distanceData[0][3]*c1);
        let cost5=checkCycleCost(1,2,3,c1,c2,c3);
        return Math.min(cost1,cost2,cost3,cost4,cost5);
    }
    else{
        return "CHECK YOUR INPUT VALUES....   FORMAT SHOULD BE ?A=2&B=4 and so on"
    }
}

module.exports=solve;