//Tạo model cho object sinh viên
function SinhVien(_ma, _ten, _email, _matKhau, _toan, _van) {
  this.ma = _ma;
  this.ten = _ten;
  this.email = _email;
  this.matKhau = _matKhau;
  this.toan = _toan;
  this.van = _van;
  this.tinhDTB = function () {
    return (this.toan + this.van) / 2;
  };
}
