/* just like we can convert a an array to a string, we can just do things more useful,  split a string of text into an array of items so we can operate those items.

comman use case might be parsing HTML to read HTML table data, reading, and analysing CSV files, or handling a plain text responce from an APi.

Varibles have been defined 'colunmHeaders' which contain the column headers from a CSV file used for determinging buy/sell/hold ratings on stock, and apple which conatins the values for each column for Apple stock.

Challenge:

1.the splitColumns and splitApple varibles must be arrays and have the correct values in them.

2. the original varibles must not be modified.

*/


//these varibles are given to split.
let colunmHeaders = "Apple stocks are projected to rise in the near future";
let apple = "nasdaq, trading postive, stable for this year, long term";


// these are the defined split arrays
let splitColumns = colunmHeaders.split(",");
let splitApple = apple.split(",");

console.log(splitColumns);
console.log(splitApple);