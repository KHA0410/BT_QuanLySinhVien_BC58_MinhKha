//Tạo mảng danh sách sinh viên
var dssv = [];
//Lấy ra
var dataJson = localStorage.getItem("DSSV_NHA");
//Giai nén
if (dataJson != null) {
  var result = JSON.parse(dataJson);
  //Lấy lại chức năng hàm của ob
  var dssv = result.map(function (item) {
    return new SinhVien(
      item.ma,
      item.ten,
      item.email,
      item.matKhau,
      item.toan,
      item.van
    );
  });
  renderDSSV(dssv);
}
// Thêm sinh viên
function themSV() {
  //Lấy data từ ô input
  var _ma = document.getElementById("txtMaSV").value;
  var _ten = document.getElementById("txtTenSV").value;
  var _email = document.getElementById("txtEmail").value;
  var _matKhau = document.getElementById("txtPass").value;
  var _toan = document.getElementById("txtDiemToan").value * 1;
  var _van = document.getElementById("txtDiemVan").value * 1;

  //Tạo object sinh viên
  var sv = new SinhVien(_ma, _ten, _email, _matKhau, _toan, _van);
  //Kiểm tra điều kiện nhập
  //Mã sinh viên
  var kiemTra =
    kiemTraTonTai(sv.ma, dssv) && kiemTraDoDai(sv.ma, "spanMaSV", 4, 6);
  kiemTra = kiemTra & kiemTraDoDai(sv.matKhau, "spanMatKhau", 4, 6);
  kiemTra = kiemTra & kiemTraEmail(sv.email);
  if (kiemTra) {
    //Mật Khẩu
    //Đẩy object sv vào mảng dssv
    dssv.push(sv);
    //Load trang không bị mất data
    //Chuyển array thành Json
    var dataJson = JSON.stringify(dssv);
    //lưu xuống
    localStorage.setItem("DSSV_NHA", dataJson);
    renderDSSV(dssv);
    search(dssv);
  }
}

//Chức năng xóa
function xoaSV(id) {
  var viTri = dssv.findIndex(function (item) {
    return item.ma == id;
  });
  dssv.splice(viTri, 1);
  //Chuyển array thành Json
  var dataJson = JSON.stringify(dssv);
  //lưu xuống
  localStorage.setItem("DSSV_NHA", dataJson);
  renderDSSV(dssv);
}

//Chức năng sửa
function suaSV(id) {
  var viTri = dssv.findIndex(function (item) {
    return item.ma == id;
  });
  var sv = dssv[viTri];
  document.getElementById("txtMaSV").value = sv.ma;
  document.getElementById("txtMaSV").readOnly = true;
  document.getElementById("txtTenSV").value = sv.ten;
  document.getElementById("txtEmail").value = sv.email;
  document.getElementById("txtPass").value = sv.matKhau;
  document.getElementById("txtDiemToan").value = sv.toan;
  document.getElementById("txtDiemVan").value = sv.van;
}

//Chức năng cập nhật
function capNhat() {
  //Tìm vị trí sv
  var id = document.getElementById("txtMaSV").value;
  var viTri = dssv.findIndex(function (item) {
    return item.ma == id;
  });

  //Lấy thông tin sinh viên
  var _ten = document.getElementById("txtTenSV").value;
  var _email = document.getElementById("txtEmail").value;
  var _matKhau = document.getElementById("txtPass").value;
  var _toan = document.getElementById("txtDiemToan").value * 1;
  var _van = document.getElementById("txtDiemVan").value * 1;

  //cập nhật
  dssv[viTri].ten = _ten;
  dssv[viTri].email = _email;
  dssv[viTri].matKhau = _matKhau;
  dssv[viTri].toan = _toan;
  dssv[viTri].van = _van;
  var dataJson = JSON.stringify(dssv);
  //lưu xuống
  localStorage.setItem("DSSV_NHA", dataJson);
  renderDSSV(dssv);
}

//Chức năng tìm
document.getElementById("btnSearch").onclick = function search() {
  var id = document.getElementById("txtSearch").value;
  var viTri = dssv.findIndex(function (item) {
    return item.ma == id;
  });

  if (viTri !== -1) {
    var sv = dssv[viTri];
    document.getElementById("txtMaSV").value = sv.ma;
    document.getElementById("txtMaSV").readOnly = true;
    document.getElementById("txtTenSV").value = sv.ten;
    document.getElementById("txtEmail").value = sv.email;
    document.getElementById("txtPass").value = sv.matKhau;
    document.getElementById("txtDiemToan").value = sv.toan;
    document.getElementById("txtDiemVan").value = sv.van;
  } else {
    alert("Không tìm thấy sinh viên với mã " + id);
  }
};

//Chức năng reset
function resetSV() {
  document.getElementById("txtMaSV").value = "";
  document.getElementById("txtTenSV").value = "";
  document.getElementById("txtEmail").value = "";
  document.getElementById("txtPass").value = "";
  document.getElementById("txtDiemToan").value = "";
  document.getElementById("txtDiemVan").value = "";
}
