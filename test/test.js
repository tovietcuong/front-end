//Bai1
// let str = "ahihihi";
// let n= str.length - 1;
// let a=[];
// for(i = n; i >= 0;i--){
//     a.push(str[i]);
// }
// console.log(a.join(""));
//Bai2
// let str = "this is Test";
// var arr = str.split(" ").map((str) => {
//     return abc(str)
// })
// function abc(string) 
// {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }
// console.log(arr.join(" "));
//Bai3
// function unique(arr) {
//     var Arr1 = arr.sort()
//     var newArr1 = [Arr1[0]]
//     for (let i = 1; i < Arr1.length; i++) {
//       if (Arr1[i] !== Arr1[i - 1]) {
//         newArr1.push(Arr1[i])
//       }
//     }
//     return newArr1;
//   }
//   console.log(unique([1, 1, 2, 3, 5, 3, 1, 5, 6, 7, 4]))
//Bai5
// var inputDate1 = "28/02/2019";
// var arr = inputDate1.split("/");
// var dayInput = parseInt(arr[0]);
// var monthInput = parseInt(arr[1]);
// var yearInput = parseInt(arr[2]);
// if(checkDate()) {
//     console.log("Ngay thang nam hop le");
    
    
// } else {
//     console.log("Ngay thang nam khong hop le");
// }
// function checkDate() {
//     let checkDate = true;
//     if (dayInput <= 0 || dayInput > 31 || monthInput > 12 || monthInput <= 0) {
//         checkDate = false;
//     } else {
//         switch (monthInput) {
//             case 2:
//                 if (yearInput % 4 == 0 && dayInput > 28) {
//                     checkDate = false;
//                 } else if (dayInput > 29) {
//                     checkDate = false;
//                 }
//  console.log("d2");
// //Bai 4
// let person = [
//     {
//         ten: "Nhung",
//         tuoi: 19,
//         mucluong: 20,
//         chucvu: "giamdoc",
//     },
//     {
//         ten: "hoa",
//         tuoi: 18,
//         mucluong: 15,
//         chucvu: "nhanvien",
//     },
//     {
//         ten: "Hoai",
//         tuoi: 33,
//         mucluong: 50,
//         chucvu: "chu tich",
//     },
// ];