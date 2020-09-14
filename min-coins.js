function findMinCoins(denominations=[1,5,10,25],amount=80){
    let coinList = [];
    for(let i=denominations.length-1; i >=0; i--){
        while(amount >= denominations[i]) {
            amount -= denominations[i];
            coinList.push(denominations[i]); 
         }
    }
    return coinList;
}
const solution = (denominations,amount) => {
    if(denominations instanceof Array && amount > 0 && amount >= denominations[0]){
        return findMinCoins(denominations,amount).length
    }else{
        return -1
    }
}
console.log(solution(denominations=[1,5,10,25],amount=80));

