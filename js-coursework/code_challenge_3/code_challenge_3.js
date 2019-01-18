

/*
Coding challenge 3

john and family went on a holiday to 3 different restaurants
bills were $124, $48, and $268


create a function for the bill, 20% when bill less
 than 50$ 15% when 50 to 200 and 110% if more than 200

 After create 2 arrays
 1 for containing all three tips : one for each bill
 2 contain all 3 final paid amounts bill + tip
*/

var bill, tip;


function calculateTip(bill) {
    if (bill < 50) {
        tip = bill * .2;
    }
    else if(bill >= 50 && bill <= 200) {
        tip = bill * .15;
    }
    else {
        tip = bill * .1;
    }
   
    return tip;
}

var bills = [124, 48, 268];
console.log("bills are " + bills);

var tips = [calculateTip(bills[0]), calculateTip(bills[1]), calculateTip(bills[2])];
console.log("tips are " + tips);

var totalBill = [calculateTip(bills[0]) + bills[0], calculateTip(bills[1]) + bills[1], calculateTip(bills[2]) + bills[2]];

console.log("total bills are " + totalBill);