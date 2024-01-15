let num = prompt("Nhập số cần kiểm tra: ");

  if (num >= 0) {
    let square = Math.sqrt(num);
    if (Number.isInteger(square)) {
      console.log(num + " là số chính phương.");
    } else {
      console.log(num + " không phải là số chính phương.");
    }
  } else {
    console.log("Vui lòng nhập số không âm.");
  }