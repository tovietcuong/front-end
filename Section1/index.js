/*
let name = ["hoa, lan, ngoc, dung"];
for(let i = 0; i < name.length ; i++){
console.log(name);
}

let number = [1,2,3,4];
number[4]=5;
number[5]=6;
number[6]=7;
number[7]=8;
number[8]=9;
number[9]=10;
console.log(number);
*/
//create- delete

/*let name = ["linh","Chi","Mai","Đao"];
name.unshift("Nhung");
console.log(name);
name.push("Ly");//them ptu vao cuoi mang
console.log(name);
name.shift();//xoa ptu dau mang
console.log(name);
name.pop();//xoa ptu cuoi mang
console.log(name);

name.splice(1,2);
console.log(name);
*/
let name= ["ahihi", "hihi", "haha","huhu"];
let nhap = prompt("Nhap vao");
if(nhap =="C"){
    let nhap = prompt("Nhap vao1");
name.push(nhap);
for(let i= 0; i< name.length;i++){
    console.log(name[i]);
}
}
else if(nhap=="R"){
    for(let i= 0; i< name.length;i++){
        console.log(name[i]);
    }
}
else if(nhap == "D"){
    let nhap1 = Number(prompt("Nhap vao chi so muon xoa"));
    name.splice(nhap1,1);
    for(let i= 0; i< name.length;i++){
        console.log(name[i]);
    }
}
else if(nhap=="U"){
    let index=Number(prompt("Nhap chi so")) ;
    let newcontent = prompt("nhap thong tin muon cap nhat");
    name[index]= newcontent;
    for(let i=0;i<name.length;i++){
        console.log(name[i]);
    }
    
}
else{
    console.log("Nhap sai roi, Nhap lai di");
}

