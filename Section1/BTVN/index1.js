//Bai1
// let userInput = prompt("Please,input your name");
// alert("Hi "+ userInput);

//Bai2
// let firstName = prompt("please, input your firstname");
// let lastName = prompt("Please, input your last name");
// alert("Hi " + lastName +" " + firstName);

//Bai3
// let a=Number(prompt("Enter side length of the square"));
// const S = a*a;
// alert("The square area is " + S);

//Bai4
// let a = Number(prompt("Enter the radius of the circle"));
// const S = a*a*3.14;
// alert("The cirle area is "+ S.toFixed(1) );

//Bai5
// let a= Number(prompt("Enter the temperature in Celcius"))
// const F = 9/5*a + 32;
// alert(a+" (C) = " + F.toFixed(1) + " (F)" );


//Bai1 Write a program to print out
//a,7 numbers, starting from 0 (no user input)

// let a = Number(null);
// for(let i = 0; i< 7; i++){
//     console.log(i);
// }
// //b,n numbers, starting from 0, n entered by user

// let n = Number(prompt("Enter n number"));
// for( i= 0; i < n;i++){
//     console.log(i);
// }

// //c,A sequence of numbers, starting from 3, ending before n, n entered by user
// let n = Number(prompt("Enter n number"));
// for( i= 3; i < n;i++){
//      console.log(i);
// }

// //d, A sequence of numbers, starting from c, ending before n, c and n entered by user
// let n = Number(prompt("Enter n number"));
// let c = Number(prompt("Enter c number"));
// for( i= c; i < n;i++){
//      console.log(i);
// }

// // //e,A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user
// let n = Number(prompt("Enter n number"));
// let c = Number(prompt("Enter c number"));
// for( i= c; i < n;i+=3){
//      console.log(i);
// }

// //f,A sequence of numbers, starting from c, ending before n, stepping by s. c, n and  s entered by user
// let n = Number(prompt("Enter n number"));
// let c = Number(prompt("Enter c number"));
// let s = Number(prompt("Enter s number"));
// for( i= c; i < n;i+=s){
//      console.log(i);
// }

// //Bai2 Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user
// let n = Number(prompt("Enter n number"));
// let Fibonaci = 1;
// for(let i = 2; i <= n; i++){
//  Fibonaci = Fibonaci*i;
// }
//     console.log(Fibonaci);

// //Bai3 Write a program asking users their age, and then decide if they are old enough to view a 14+ content
//  let a = Number(prompt("how old are you"));
//  if(a < 14)
//  alert("You are not old enough to view this content");
//  else
//  alert("Enjoy!");
 
//  //Bai4 Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range
//  let a = Number(prompt("Enter a number"));
//  if(a < 5 & a>=0)
//  alert("Lower half of 9");
//  else if (a>=5 & a<=9)
//  alert("Higher half of 9");
//  else 
//  alert(" ");

//  //Bai5 Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n
//  let n = Number(prompt("Enter n number"));
//  let x = Number(prompt("Enter x number"));
//  if(x < n/2)
//  alert(x + " Lower half of " + n);
//  else 
//  alert(x + " Higher half of "+ n);
 
//  //Bai6 Write a script to check if a number is even (divisible by 2) or odd number
//  let n = Number(prompt("Enter n number"));
//  if(n%2==0)
//  alert(n+" is an even number");
//  else
//  alert(n+ " is an over number");

//  //Bai7 Write a program to print out ( EM KHONG HIEU DE BAI)
//  a, 6 L’s and H’s, half L’s, half H’s (L means low, H means high)
//  b, n L’s and H’s in total, n entered by user
//  c, 8 1’s and 0’s in total, consecutively
//  d, n 1’s and 0’s in total, consecutively, n entered by user
// let a = Number(prompt("Enter a number"));
// for( let i = 0; i < a; i ++){
//         if( i % 2 == 0){
//             console.log("0");
//         }
//         else{
//             console.log("1");
//         }
// }

// //Bai8  Write a script to calculate the BMI (Body Mass Index) of a person, the formula is as follows
//  let mass = parseFloat(prompt("Your weight in kg ?"));
//  let height = parseFloat(prompt("Your height in cm ?"));
//  let BMI = mass/(height*height/10000).toFixed(1);
//  alert("Your BMI is " + BMI.toFixed(1));
//  if(BMI < 16)
//  alert("Severely underweight");
//  else if(BMI>=16 && BMI < 18.5)
//  alert(Underweight);
//  else if( BMI>= 18.5 && BMI < 25)
//  alert(Normal);
//  else if ( BMI >= 25 && BMI <30)
//  alert("Overweight");
//  else 
//  alert("Obese");