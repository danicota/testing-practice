// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
function product(a, b) {
return a * b
}

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the product of two numbers.
  var result = product(2, 2);
  if (result !== 4) throw new Error('Expected product(2, 2) to be 4. Received: ' + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should return 0 when either of the numbers are 0.
  var result = product(0, 2);
  if (result !== 0) throw new Error('Expected product(2, 2) to be 4. Received: ' + result);
  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // It should ignore additional numbers.
  var result = product(0, 2, 1);
  if (result !== 0) throw new Error('Expected product(2, 2) to be 4. Received: ' + result);
  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // When invoked with only 1 number, it should return that number.
  var result = product(0, null);
  if (result !== 0) throw new Error('Expected product(2, 2) to be 4. Received: ' + result);
  // --------------------------------------------------
  // Test Case 5
  // --------------------------------------------------
  // When invoked with no numbers, it should return 0.
  var result = product(null, null);
  if (result !== 0) throw new Error('Expected product(2, 2) to be 4. Received: ' + result);
  console.log('All tests passed successfully.');

// ==================================================
// PRINT ERRORS
// ==================================================
} catch (e) {
  console.warn('Whoops, the following test did not pass:');
  console.error(e.message);
}
