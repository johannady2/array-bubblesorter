/*Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],

make a function that organizes these into individual array that is ordered.

For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].

Bonus: Make it so it organizes strings differently from number types.

i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]*/


const messyArray = [1,3,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
console.log(messyArray);

let sorterFunc = (arr) =>
{
    let sortedArray = [];
    let spliceHere = 1;
   
    let currentArrIndex = 0;
    arr.map((num)=>
    {console.log(`we are now checking arr index ${currentArrIndex} with value ${num}`);
        

        //--------------------------INITIALIZE FIRST TWO ITEMS IN sortedArray
        if((sortedArray.length === 0) || (num > sortedArray[0] && sortedArray.length === 1))
        {   console.log(`if sortedArray.length=== 0) || ${num} > sortedArray[0] && sortedArray.length === 1`);
            sortedArray.push(num);
            console.log(`${num} has been pushed to end sortedArray`);
            console.log(sortedArray);
        }
        else if(num <= sortedArray[0] && sortedArray.length === 1)
        {
            sortedArray.unshift(num);
            console.log(`${num} has been unshifted to start of sortedArray`);
            console.log(sortedArray);
   
                      //     sortedArray.splice(whereToInsert, 0, num); 
        }//---------------------end of//INITIALIZE FIRST TWO ITEMS IN sortedArray
        else
        {
          
           
            
            for(let i=0;i < sortedArray.length;i++)
            {
                
                if(num >= sortedArray[i])
                {
                     
                    spliceHere=i;
                    
                }
                else
                {
                    
                    
           
                }
                
     
            }

            sortedArray.splice(spliceHere ,0,num);//insert infront of sortedArray[i]
          
            console.log(sortedArray);
            
        }

        currentArrIndex++;
    });     


    
}


sorterFunc(messyArray);
