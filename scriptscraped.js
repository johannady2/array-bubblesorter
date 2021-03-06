/*Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],

make a function that organizes these into individual array that is ordered.

For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].

Bonus: Make it so it organizes strings differently from number types.

i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]*/
console.log('[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]');

const messyArray = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

let sorterFunc = (arr) =>
{
    let sortedArray = [];
    let currentLastIndex = -1;
    arr.map((num)=>
    {
       
       
            if(num > arr[currentLastIndex])
            {
                console.log(`num: ${num} > ${arr[currentLastIndex]} of index ${currentLastIndex}`);
                sortedArray.push(num);
                currentLastIndex++;
            }
            else
            {
                
                
                if(currentLastIndex === -1)
                {
                    console.log(`num: ${num} < ${arr[currentLastIndex]} of index ${currentLastIndex}`);
                    sortedArray.unshift(num);
                    currentLastIndex++;
                }   
                else
                {
                          let whereToInsert = currentLastIndex;


                        console.log(`should ${num} be instered before ${sortedArray[whereToInsert]}?`);
                        console.log(`if ${num} is < ${sortedArray[whereToInsert]} and ${num} > ${sortedArray[whereToInsert-1]}?`);
                        if(num < sortedArray[whereToInsert] && num > sortedArray[whereToInsert-1])
                        {

                     
                            sortedArray.splice(whereToInsert, 0, num);
                            currentLastIndex++;
                        }
                        else
                        {
                            
                        }

                    
                }
               

                
                
            
            }
       
    
        console.log(sortedArray);
    });
}


sorterFunc(messyArray);
