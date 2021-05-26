// //OBJECT
// //Khai bao bien

// //let obj = Object.create({});

// //let obj = new Object();

// let persion = {
//     name: "Cuong",
//     age : "18",
// }//key : name,age
// //value : Cuong,18


// //create
// persion.add = "Ha Noi";
// console.table(persion);

// //read one  or read all
// console.log(persion.name);
// console.log(persion.add);

// //dung vong for in ra tat ca value
// for( const a in persion){
//     console.log(`${a}: ${persion[a]}`);
// }

// //Update
// persion.name = "Hoang";
// console.table(persion);

// //Delete
// delete persion.age;
// console.table(persion);
//Bai1
let products =[
    {
        Name : "Xiaomi portable charger 20000mah",
        Brand : "Xiaomi",
        Price : " 428",
        Color : "White",
        Category : "Charger",
    },
    {
        Name: "VSmart Active 1",
        Brand: "VSmart",
        Price: 5487,
        Color: "Black",
        Category: "Phone",
    },
    {
        Name: "IPhone X",
        Brand: "Apple",
        Price: 21490,
        Color: "Gray",
        Category: "Phone",
    },
    {
        Name: "Samsung Galaxy A9",
        Brand: "Samsung",
        Price: 8490,
        Color: 'Blue',
        Category: "Phone",
    }
] 
//1.1
// for(let i = 0; i <products.length;i++){
//     console.log("-------------------------");
//     console.table("Name ",products[i].Name);
//     console.table("Price ",products[i].Price);
// }
//1.2
// let position = Number(prompt("Enter product position: "));
//     console.log("Name :", products[position - 1].Name);
//     console.log("Price :", products[position - 1].Price);
//     console.log("Color :", products[position - 1].Color);
//     console.log("Brand :", products[position - 1].Brand);
//     console.log("Category :", products[position - 1].Category);
//1.3 Write a script printing/logging out the products based on category input by users
// let category = prompt("Enter your category : ");
// for( let i = 0; i < products.length; i++){
//     if(category === products[i].Category){
//         console.log("Name ",products[i].Name);
//         console.log("Price ", products[i].Price);
//     } 
// }
//1.4
// products[0].Providers = "Phukienzero Dientucc";
// products[1].Providers = "TGDD";
// products[2].Provider = "TGDD";
// products[3].Providers = "TGDD";
// for(i=0;i<products.length;i++){
//     console.log(products[i].Name);
//     console.log("Price :", products[i].Price);
//     console.log("Prociders :",products[i].Providers);
//     console.log("----------------------------")
// }
//1.5
// let providers = prompt("Enter providers :");
// for (let i= 0; i <= products.length;i++){
//     if( providers == products[i].Providers){
//         console.log("Name :", products[i].Name);
//         console.log("Brand :", products[i].Brand);
//         console.log("Price :", products[i].Price);
//         console.log("Color :", products[i].Color);
//         console.log("Category :", products[i].Category);
//         console.log("Providers :", products[i].Providers);
//         console.log("----------------------");
//     }
    
for( const key in persion){
    //     console.log(`${a}: ${persion[a]}`);
    // }
// }