module.exports = function multiply(first, second) {
  let firstNumber = first.split('').map(elem => +elem).reverse();
  let secondNumber = second.split('').map(elem => +elem).reverse();
  let resultStr = [], tempResult;
  let residue, count = 0, tCount, tNum;

  secondNumber.forEach(elem2 => {

    residue = 0;
    tempResult = [];
  
    firstNumber.forEach(elem1 =>{
      tNum = ((elem2 * elem1) + residue);
      tempResult.push(tNum % 10);
      residue = Math.floor(tNum / 10);
 
    });

    
    if(residue)
       tempResult.push(residue);
     
    if(!tempResult.every(elem => {
        if(elem) return false; 
        return true;
    })){

    tCount = count;
        while(tCount--){
            tempResult.unshift(0);
        }

        if(resultStr[0] == undefined)
            resultStr = tempResult;
        else
            resultStr = sum(resultStr, tempResult);
    }
    count++;
  });

  return resultStr.reverse().join('');
}

function sum(firstNumber, secondNumber){
  let first = firstNumber, second = secondNumber;
  let residue = 0, tNum;
  let result = [];

  while(first[0] !== undefined && second[0] !== undefined){
    tNum = (first[0] + second[0]) + residue;
    result.push(tNum % 10);
    residue = Math.floor(tNum / 10);
    first.shift();
    second.shift();
  }

  if(residue){
    if(!first[0] && !second[0])
      result.push(residue);
    else{
      if(first[0]){
        first[0] += residue;
        result.push(...first)
      }
      else{
        second[0] += residue;
        result.push(...second);
      }
    }  
  }
  else{
    if(first[0])
        result.push(...first)
    else
      if(second[0])
         result.push(...second);
  }

  return result;
}