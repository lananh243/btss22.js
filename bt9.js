let month =prompt("Nhập tháng");
let year =prompt("Nhập năm");
console.log(year);


if (isNaN(month) && isNaN(year) && month != 0 && year != 0 && month != 12) {
    console.log("Không hợp lệ");
}else{
    switch (month) {
        case "1":
            console.log("31 ngày");
            break;
        case "2":
            console.log("28 hoặc 29 ngày");
            break;
        case "3":
            console.log("31 ngày");
            break;
        case "4":
            console.log("30 ngày");
            break;
        case "5":
            console.log("31 ngày");
            break;
        case "6":
            console.log("30 ngày");
            break;
        case "7":
            console.log("31 ngày");
            break;
        case "8":
            console.log("31 ngày");
            break;
        case "9":
            console.log("30 ngày");
            break;
        case "10":
            console.log("31 ngày");
            break;
        case "11":
            console.log("30 ngày");
            break;
        case "12":
            console.log("31 ngày");
            break;
        default:
            console.log("Không hợp lệ");
            break;
    }
}