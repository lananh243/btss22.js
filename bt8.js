let number1 =parseInt(prompt("Nhập số thứ nhất"));
let number2 =parseInt(prompt("Nhập số thứ 2"));
let calculation =prompt("Nhập phép tính");
if(isNaN(number1) || isNaN(number2)){
    console.log("Không hợp lệ");
}else{
    switch (calculation) {
    case "+":
        console.log(+(number1 + number2));
        break;
    case "-":
        console.log(+(number1 - number2));
        break;
    case "*":
        console.log(+(number1 * number2));
        break;
    case "/":
        console.log(+(number1 / number2));
        break;
    case "%":
        console.log(+(number1 % number2));
        break;
    default:
        console.log("Phép tính không hợp lệ");
        break;
}
}
