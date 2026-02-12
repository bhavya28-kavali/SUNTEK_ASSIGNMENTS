/* initial data:
 let finalAmount = 0;
 tasks:
 1.add 500 to total value
 2.add 1200 to total value
 3.apply a 200 discount
 4.add 18% GST
 5.print the total value
*/

let finalAmount = 0;

function addAmount(value) {
    finalAmount += value;
    return finalAmount;
}

function applyDiscount(discount) {
    if (discount === 0) return finalAmount;
    finalAmount -= discount;
    return finalAmount;
}

function applyGST(gstRate) {
    let gst = (finalAmount * gstRate) / 100;
    finalAmount += gst;
    return finalAmount;
}

// operations
addAmount(500);
addAmount(1200);
applyDiscount(200);
applyGST(18);

console.log("Final Amount is:", finalAmount);
