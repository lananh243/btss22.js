let year = prompt("Nhập năm:");
if(( year %4 == 0) && (year %100 !=0) || (year %400 ==0)){
    console.log(year +" Là năm nhuận");
}else{
    console.log(year +" Không là năm nhuận");
}