let number = prompt("Nhập số có 4 chữ số");

if(number.length == 4){
    let thounsand = Math.floor(number / 1000);
    console.log("Chữ số hàng nghìn: "+ thounsand);
    let hundred = Math.floor((number % 1000) /100);
    console.log("Chữ số hàng chục: "+ hundred);
    let ten = Math.floor((number % 100) / 10);
    console.log("Chữ số hàng trăm: "+ ten);
    let unit = Math.floor(number % 10);
    console.log("Chữ số hàng đơn vị: "+ unit);
}else{
    console.log("Số không hợp lệ");
}