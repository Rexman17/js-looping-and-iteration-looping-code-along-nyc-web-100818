// Code your solutions in this file
function printBadges(employeesArray) {
  // for loop
  for (let i = 0; i < employeesArray.length; i++) {
    console.log(`Welcome ${employeesArray[i]}! You are employee #${i+1}.`);
  }
  return employeesArray;
}

function tailsNeverFails() {
  let counter = 0;
  while (Math.random() >= 0.5) {
    counter++;
  }
  return `You got ${counter} tails in a row!`;
}
