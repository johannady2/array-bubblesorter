/*this commented out code is for when domManips.js is not used in index.html */

//let messyArray = [1,3,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
// let messyArray = [21,3,99,1,231,391,2,5,10,1];
// console.log(messyArray);

// for(let k=0; k < messyArray.length; k++)//directly using bubbleSort to orginal array
// {

//     let isItSortedNow = isArraySorted(messyArray);
//     if(isItSortedNow === true)
//     {
//         break;
//     }
//     else
//     {
//         messyArray = oneIterationOfBubbleSort(messyArray);
//         console.log(`above is the result of the ${k+1}th iteration of oneIterationOfBubbleSort(messyArray)`);
//     }
    
// }

/*----------------------uncomment from here and above if you don't want to use domManips.js--------------------*/



/*Uncomment the code below if you want to divide the messyArray into two arrays. then comment out the forloop above to 
prevent messyArray from being sorted. this code is for when domManips.js is not used in index.html*/
// let halfLength =  Math.ceil(messyArray.length / 2);  
// let firstHalf = messyArray.splice(0, halfLength);//[1, 3, 2, 4, 591, 392, 391, 2]
// let secondHalf = messyArray.splice(-halfLength);//[5, 10, 2, 1, 1, 1, 20, 20]
// console.log(firstHalf);
// console.log(secondHalf);


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
            console.log(`splicing 2 items newArray starting from index ${startHere}`);
           
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
    document.getElementById('resultsDisplay').textContent = `___FINAL RESULT: [${filteredNewArray}]`;
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

// function isArraySorted(arr)//
// {
//     for(let i=0;i<arr.length;i++){
//         if(arr[i+1] && (arr[i+1] > arr[i]))
//         {
//             continue;
//         } else if(arr[i+1] && (arr[i+1] < arr[i]))
//         {
//             return false;
//         }
//     }
//     return true;
// }//This returns true for //isArraySorted([1,0,5,8,0,0,7,25]); which is wrong. I think the if(arr[i+i]) is returning false whenever it gets a zero. and by default we get true because the condition is not caught by the if else statements.

function isArraySorted(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i+1] > arr[i])
        {
            continue;
        } else
        {
            return false;
        }
    }
    return true;
}






/*Uncomment the code below if you want to divide the messyArray into two arrays and run oneIterationOfBubbleSort() on each halves.
then comment out the forloop below the declration of messyArray to prevent it from being sorted.this code is for when domManips.js is not used in index.html*/

// for(let k=0; k < firstHalf.length; k++)//because firstHalf.length is always higher than secondHalf.length due to ceil
// {

//     let isItSortedNowFirst = isArraySorted(firstHalf);
//     let isItSortedNowSecond = isArraySorted(secondHalf);

//     if(isItSortedNowFirst === true && isItSortedNowSecond===true)
//     {break;}else
//     {
//         firstHalf = oneIterationOfBubbleSort(firstHalf);
//         console.log(`above is the result of the ${k+1}th iteration for firstHalf`);

//         if(k+1 < secondHalf.length)
//         {
//             secondHalf = oneIterationOfBubbleSort(secondHalf);
//             console.log(`above is the result of the ${k+1}th iteration for secondHalf `);
//         }
//     }
    
// }

// console.log(firstHalf);
// console.log(secondHalf);

