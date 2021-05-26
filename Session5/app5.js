
//bai1
// function find(string){
//     let c = string.indexOf("Java")==0; 
//     return c;
// }
// console.log(find("Java"));
//Bai2
// function findMaxDiff(arr) {
//     if (arr.length < 2)
//         return 0;
//     else {
//         var maxDiff = 0;
//         for (var i = 1; i < arr.length; i++)
//             maxDiff = (maxDiff < Math.abs(arr[i] - arr[i - 1])) ? Math.abs(arr[i] - arr[i - 1]) : maxDiff;
//         return maxDiff;
//     }
// }
// console.log(findMaxDiff([5, -20, 5, 18, -8, 5]));

//Bai3
// function first() {
//     let a = prompt("Nhap vao 1 mang");
//     let a1 = a.split(",").map(a => +a);
//     let n = Number(prompt("Nhap vao gia tri n"));
//     let n2 = [];
//     if (n >= a1.length) {
//         console.log(a1);
//     }
//     else if (n > 0 && n < a1.length) {
//         for (let i = 0; i < n; i++) {
//             n2.push(a1[i]);
//         }

//     }
//     console.log(n2);
// }

// first();

// BAI 4
// checkTich();
// function checkTich() {
//     var a = prompt("Nhap a");
//     a = parseInt(a);
//     var b = prompt("nhap b");
//     b = parseInt(b);
//     console.log(a);
//     console.log(b);
//     var check = false;
//     if (a * b < 0) {
//         check = true;
//     }
//     console.log(check);
// }

// Bai5
function trave() {
    let n = Number(prompt("Nhap so n"));
    let a = 13;
    if (n < a) {
        console.log(a - n);
    }
    else {
        console.log(2 * (n - a));
    }
}
trave();

//Bai6
// function hieuMax(){
//      let a = prompt("Nhap vao 1 mang");
//      let a1 = a.split(",");
//      let min = a1[0];
//      let max = a1[0];

//      for(let i = 0 ; i < a1.length; i++) {
//          if(a1[i] < min) {
//              min = a1[i];
//          }
//          else if(a1[i] > max) {
//             max = a1[i];
//          }
//      }
//      console.log(max - min);

// }
// hieuMax();



