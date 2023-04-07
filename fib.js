//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
}

// Main program function that accepts user input for the total number of the
//Fibonacci series to show and the then runs a loop to create the output
var generate = function () 
{
	var intNumber = parseInt($("total_fib").value);  //gets user input from the DOM
	
	//validate user input that intCount is a number and intCount is not less than 2 or intCount not greater than 100
	
	var i=0;  // sets the first number in the Fibonacci series to 0
	var j=1;  //sets the second number in the Fibonacci series to 1
	var k;    //k is calculated by adding i+j and represents the next Fibonacci number
    var intCount = 3;
    var stringOutput = `${i}, ${j}, `;//initialize the Fibonacci series output to include the first two numbers

	// write whatever kind of loop you want, given the above info, to generate the appropriate
	// number of fibonacci numbers and then post it to the html DOM 
    if (isNaN(intNumber) || intNumber < 1 || intNumber > 100)
    {
        alert("Sorry, your number is invalid. Make sure it is a real number and in between 1 and 100")
        $("total_fib").value = "";
    }
    else 
    {
        while (intCount <= intNumber) //if <= it prints an extra number to include both 0 and 1, should i do that? 
        {
            k=i+j;
            i=j;
            j=k;
            stringOutput += `${k}, `;
            intCount++
        }
    } $("output").value = stringOutput;
} 

// Push solution back to Output through DOM

window.onload = function () 
{
    $("generate").onclick = generate; //runs the generate function when clicked
}  