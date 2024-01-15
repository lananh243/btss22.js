let a =prompt("Nhập a");
let b =prompt("Nhập b");
let c =prompt("Nhập c");

if(a == 0){
    if(b == 0){
        if(c == 0){
            console.log("PTVSN");
        }else{
            console.log("PTVN");
        }
    }else{
        console.log("PT có nghiệm duy nhất "+ (-c/b));
    }
}else{
    let delta = b*b - 4*a*c;
    if(delta > 0){
        let x1 = ((-b+Math.sqr(delta))/(2*a));
        let x2 = ((-b-Math.sqr(delta))/(2*a));
        console.log("Nghiệm thứ nhất "+ x1);
        console.log("Nghiệm thứ 2 "+ x2);
    }else if(delta == 0){
        console.log("PT có nghiệm kép "+ (-b/2*a));
    }else{
        console.log("PTVN");
    }
}