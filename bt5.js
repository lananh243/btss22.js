let a = prompt("Nhập a");
let b = prompt("Nhập b");

if(a == 0){
    if(b == 0){
        console.log("PTVSN");
    }else{
        console.log("PTVN");
    }
}else{
    let x = -b/a;
    console.log("Nghiệm của PT là " +x);
}