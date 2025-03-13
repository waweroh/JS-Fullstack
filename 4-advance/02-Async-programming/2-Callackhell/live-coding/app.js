// function callbackHell(callback) {
//   setTimeout(() => {
//     const data = "Inside (callback) Function";
//     console.log(data);
//     callback(data);
//   }, 2000);
// }

// function firstFunc(data, callback) {
//   setTimeout(() => {
//     const processedData = `${data} - processed First`;
//     console.log("inside (firstFunc) function");
//     callback(processedData);
//   }, 1000);
// }

// function secondFunc(data,callback) {
//   setTimeout(() => {
//     const processedData = `${data} - processed Second`;
//     console.log("inside (second function) function.");
//     callback(processedData);
//   }, 1500);
// }

// //callbackHell
// callbackHell((data) => {
//   firstFunc(data, (processedData1) => {
//     secondFunc(processedData1,(processedData2) => {
//       console.log(`Final result of all functions: ${processedData2}`)
//     })
//   });
// });

// Step 1: Place Order
function placeOrder(callback) {
  setTimeout(() => {
    const orderDetails = "Order placed successfully"; // 1 process
    console.log(orderDetails);
    callback(orderDetails);
  }, 2000);
}
// Simulates placing an order.
// After 2 seconds, logs "Order placed successfully".
// Passes the orderDetails message to the callback function (which is processPayment).

// Step 2: Process Payment
function processPayment(orderDetails, callback) {
  setTimeout(() => {
    const paymentStatus = `${orderDetails} → Payment processed`; // 2 processes
    console.log("Processing payment...");
    callback(paymentStatus);
  }, 1500);
}
// Receives orderDetails from placeOrder.
// Simulates payment processing (1.5-second delay).
// Logs "Processing payment..."
// Creates paymentStatus and passes it to shipOrder.

// Step 3: Ship Order
function shipOrder(paymentStatus, callback) {
  setTimeout(() => {
    const shippingStatus = `${paymentStatus} → Order Shipped`; // 3 processes
    console.log("Shipping the order...");
    callback(shippingStatus);
  }, 2000);
}
// Receives paymentStatus from processPayment.
// Simulates shipping the order (2-second delay).
// Logs "Shipping the order..."
// Creates shippingStatus and passes it to sendConfirmation.

// Step 4: Send Confirmation
function sendConfirmation(shippingStatus, callback) {
  setTimeout(() => {
    const confirmationMessage = `${shippingStatus} → Confirmation sent to customer`; // 4 processes
    console.log("Sending order confirmation...");
    callback(confirmationMessage);
  }, 1000);
}
// Receives shippingStatus from shipOrder.
// Simulates sending a confirmation message (1-second delay).
// Logs "Sending order confirmation..."
// Creates confirmationMessage and passes it to the final log statement.

// Callback Hell (Executing functions in sequence)
placeOrder((orderDetails) => {
  processPayment(orderDetails, (paymentStatus) => {
    shipOrder(paymentStatus, (shippingStatus) => {
      sendConfirmation(shippingStatus, (finalStatus) => { //final status = confirmation message
        console.log(`Final Status: ${finalStatus}`);
      });
    });
  });
});
// Calls placeOrder(), which takes callback and passes orderDetails after 2 seconds.
// processPayment() starts only after placeOrder() completes.
// shipOrder() starts only after processPayment() completes.
// sendConfirmation() starts only after shipOrder() completes.
// Finally, logs the final status after all steps are completed.
