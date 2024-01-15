// Truthy là những giá trị mà khi chuyển về kiểu dữ liệu boolean ra giá trị true. 
// Falsy là những giá trị mà khi chuyển về kiểu dữ liệu boolean ra giá trị false.
// Trong JavaScript, các giá trị falsy bao gồm:
// -false: Giá trị boolean sai.
// -0: Giá trị số không.
// -'' hoặc "" (chuỗi rỗng): Chuỗi rỗng.
// -null: Giá trị không tồn tại hoặc chưa được gán.
// -undefined: Giá trị chưa được định nghĩa.
// -NaN: Giá trị không phải là số (Not-a-Number).

let username = '';

if (username) {
  console.log('Welcome, ' + username);
} else {
  console.log('Please provide a username');
}