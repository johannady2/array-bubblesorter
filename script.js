const messyArray = [1,3,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
console.log(messyArray);

const halfLength =  Math.ceil(messyArray.length / 2);  
  

let firstHalf = messyArray.splice(0, halfLength);//[1, 3, 2, 4, 591, 392, 391, 2]
let secondHalf = messyArray.splice(-halfLength);//[5, 10, 2, 1, 1, 1, 20, 20]

console.log(firstHalf);
//console.log(secondHalf);

function oneIterationOfBubbleSort(arr)
{
    let originalarrLength = arr.length;
    let newArray = arr;
    let startHere = 0;
    
    for(startHere = 0; startHere < originalarrLength; startHere++)
    {
        
        let a = newArray[startHere];
        let b = newArray[startHere+1];
        console.log(`[${startHere}]:${a} and  [${startHere+1}]:${b}`);
        let compareAB = isAGreaterThanB(a,b);
        
        

        
     

        if(compareAB === false)
        {
            console.log(`splicing 2 items newArray starting from index ${startHere}`)
            newArray.splice(startHere, 2);
            console.log('after splicing');
            console.log(newArray);
           newArray.splice(startHere,0,b);
           newArray.splice(startHere,0,a);
           console.log('after reinserting b and a');
           console.log(newArray);
         
          
          
        }
        else
        {
            console.log(`splicing 2 items newArray starting from index ${startHere}`)
            newArray.splice(startHere, 2);
            console.log('after splicing');
            console.log(newArray);
           newArray.splice(startHere,0,a);
           newArray.splice(startHere,0,b);
           console.log('after reinserting b and a');
           console.log(newArray);
        }

        
    }

    let filteredNewArray = removeUndefinedFromArray(newArray);
    console.log('end of func newArray');
    console.log(filteredNewArray);
    return filteredNewArray;
}

function isAGreaterThanB(a,b)
{
    if(a>=b)
    {
        console.log( `${a} >= ${b} is true`);
        return true
    }
    else
    {
        console.log( `${a} >= ${b} is false`);
        return false;
    }
}

function removeUndefinedFromArray(arrayWithUndefineds)
{
    let filtered = arrayWithUndefineds.filter(function (el) {
        return el != null;
      });
      
      return filtered;
}


for(let k=0; k < firstHalf.length; k++)
{
    firstHalf = oneIterationOfBubbleSort(firstHalf);
    console.log(`above is the result of the ${k+1}th iteration for firstHalf`);

    if(k+1 < secondHalf.length)
    {
        secondHalf = oneIterationOfBubbleSort(secondHalf);
        console.log(`above is the result of the ${k+1}th iteration for secondHalf `);
    }
    
}




console.log(firstHalf);
console.log(secondHalf);