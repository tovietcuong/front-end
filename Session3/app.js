//Bai1
/*
var x = prompt("Enter a Value" );
var y = x.split(",");
var sum = 0;
for(i=0; i<y.length;i++){ 
        sum += parseInt(y[i])
 }
 console.log(sum);

 //Bai2
var x = prompt("Enter a Value" );
var y = x.split(",");
var min=y[0];
for(i=0; i<y.length;i++){ 
        if(min>y[i])
        min = y[i];
}
 alert("The smallest number is "+ min);

Bai3
var arr1 = [3, 4, 6, -9, 10, -88, 2];
var x1 = prompt("Enter a Value" );
var arrRs1 = [];
var check1 = false;
for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] == x1) { 
            check1 = true ;
            arrRs1.push(i);
        }
}
if(check1) {
        alert(x1 +" is found in my array at index "+ arrRs1);
}
else { 
        alert(x1 + " is not found in my array");
}
//Bai4

var x = (prompt("Enter a Value" ));
var y = x.split(" ").map(x=>+x);
console.log("Hello my name is Phuong Nam and here í my size:")
        console.log(y);
var max = Math.max(... y);
console.log("Now my biggest sheep has size " + max + ", lets shave it");

console.log("After shearing, here is my flock");
var soX = 8;
var max = Math.max(... y);
var a = y.indexOf(max);
y[a] = soX;
console.log(y);
console.log("MONTH1");
console.log("One month has, passed, my sheeps have grown, here are their size");
for(let i = 0 ; i< y.length;i++){
        y[i]+=50;
        
}
console.log(y);
var max = Math.max(... y);
console.log("Now my biggest sheep has size " + max + ", lets shave it");
console.log("After shearing, here is my flock");
var soX = 8;
var max = Math.max(... y);
var a = y.indexOf(max);
y[a] = soX;
console.log(y);

console.log("MONTH2");
console.log("One month has, passed, my sheeps have grown, here are their size");
for(let i = 0 ; i< y.length;i++){
        y[i]+=50;
        
}
console.log(y);
var max = Math.max(... y);
console.log("Now my biggest sheep has size " + max + ", lets shave it");
console.log("After shearing, here is my flock");
var soX = 8;
var max = Math.max(... y);
var a = y.indexOf(max);
y[a] = soX;
console.log(y);

console.log("MONTH3");
console.log("One month has, passed, my sheeps have grown, here are their size");
for(let i = 0 ; i< y.length;i++){
        y[i]+=50;
        
}
console.log(y);
let tong = 0;
for(let i = 0; i< y.length; i++){
        tong +=y[i];
}
console.log("My flock has size in total : " + tong);
console.log("I would get :"+  tong +" *" +" 2" +"$ = "+ tong*2);

//Bai 6
var x = prompt("Enter a sequence number" );
var y = x.split(",").map(x=>+x);
var z=[];
for(i=0; i<y.length;i++){ 
      if(y[i]%2!=0)
z.push(y[i]);
 }
 console.log(y + " => " + z);
 
 //Bai5
 var x = prompt("Enter " );
 var y = x.split(",");
 var z=[];
 for(i=0; i<y.length;i++){ 
 z.push("<" +y[i]+ ">");
  }
  console.log(y +" => "+ z);
  */