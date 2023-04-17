//Task 1
var arrayNames = new Array('John', 'Robert', 'Jimmy', 'Bonzo');
var arrayInstruments = [];
arrayInstruments[0] = "bass";
arrayInstruments[1] = "vocals";
arrayInstruments[2] = "guitar";
arrayInstruments[3] = "drums";
var stringMessage = "";
var intCount;
for (intCount = 0; intCount < arrayNames.length; intCount++)
{
stringMessage = stringMessage + arrayNames[intCount] + " plays " + arrayInstruments[intCount] +"\n";//displaying the names with the corresponding instruments
}
alert(stringMessage);

//task 2
var stringTimesTable = "";//starting it as blank

for(var x=1; x<=12; x++) //going along the x side, only 12 variables
{
    for(var y=1; y<=12; y++)//inner loop to count the y axis
    {
        stringTimesTable = stringTimesTable + " " + x*y + " "; //displaying the numbers
    }
stringTimesTable = stringTimesTable + "\n"; //making it break every 12 times
}
alert(stringTimesTable);

//task 3
var stringEvenTimes = "";
var arrayTimesTable = [];

for(var x=1; x<=12; x++)
{
    arrayTimesTable[x]=[];
    for(var y=1; y<=12; y++)
    {
        arrayTimesTable[x][y]= x*y;
    }
}

for(var a=1; a<=12; a++)
{
    if(a%2===0)
    {
        for(var b=1; b<=12; b++)
        {
            stringEvenTimes = stringEvenTimes + " " + arrayTimesTable[a][b] + " ";
        }
    stringEvenTimes +="\n";
    }
}
alert(stringEvenTimes);

