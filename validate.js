//Chức năng xác minh tồn tại
function kiemTraTonTai(id, dssv) {
  var viTri = dssv.findIndex(function (item) {
    return item.ma == id;
  });
  if (viTri != -1) {
    document.getElementById("spanMaSV").innerText = "Đã tồn tại";
    return false;
  } else {
    document.getElementById("spanMaSV").innerText = "";
    return true;
  }
}
//Chức năng kiểm tra độ dài
function kiemTraDoDai(object, span, min, max) {
  var length = object.length;
  if (min <= length && length <= max) {
    document.getElementById(span).innerText = "";
    return true;
  } else {
    document.getElementById(
      span
    ).innerText = `Độ dài phải từ ${min} đến ${max}`;
    return false;
  }
}

//Chức năng kiểm tra email
function kiemTraEmail(email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var kiemTra = re.test(email);
  if (kiemTra) {
    document.getElementById("spanEmailSV").innerText = "";
    return true;
  } else {
    document.getElementById("spanEmailSV").innerText = "Email không hợp lệ";
    return false;
  }
}
