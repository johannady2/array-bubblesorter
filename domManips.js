
        document.getElementById('getNumbers').addEventListener('click', Validate);

        function Validate() {

            
            var isValid = false;
            var regex = /^[0-9\s]*$/;
            isValid = regex.test(document.getElementById("TextBox1").value);
            document.getElementById("spnError").style.display = !isValid ? "block" : "none";

            if(isValid === true)
            {
                let userInput = document.getElementById('TextBox1').value;
                let numbersArray = userInput.match(/\d+/g);//.match(/\S+/g);
            
                //alert(numbersArray);
               // alert(!numbersArray.some(isNaN));//check array contents are all int
                var integersArr = [];
                numbersArray.map((item) =>
                {
                    integersArr.push(parseInt(item));
                 });


                let messyArray = integersArr;
                console.log(messyArray);
                for(let k=0; k < messyArray.length; k++)//directly using bubbleSort to orginal array
                {   
                    
                 
                    let isItSortedNow = isArraySorted(messyArray);
                    if(isItSortedNow === true)
                    {
                        break;
                    }
                    else
                    {
                        messyArray = oneIterationOfBubbleSort(messyArray);
                        console.log(`above is the result of the ${k+1}th iteration of oneIterationOfBubbleSort(messyArray)`);
                    }
                    
                }
            }

            return isValid;
        }