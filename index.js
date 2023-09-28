// // Code your solutions in this file
// function countDown(num) {
//   while (num >= 0) {
//     console.log(num);
//     num--;
//   }
// }


function countDown(num) {
  let count = 0;
  while (num >= 0) {
    console.log(num);
    num--;
    count++;
  }
  console.log("Count:", count);
}

countDown(10);

countDown(10);