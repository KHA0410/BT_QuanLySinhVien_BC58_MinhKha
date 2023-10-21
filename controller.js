//Render dssv ra bảng
function renderDSSV() {
  var contentHTML = "";
  for (var i = 0; i < dssv.length; i++) {
    var data = dssv[i];
    var trString = `<tr>      
                      <td>${data.ma}</td>
                      <td>${data.ten}</td>
                      <td>${data.email}</td>
                       <td>${data.tinhDTB()}</td>
                      <td>
                      <button onclick = "xoaSV('${
                        data.ma
                      }')" class = "btn btn-danger">XÓA</button>
                      <button onclick = "suaSV('${
                        data.ma
                      }')" class = "btn btn-warning">SỬA</button>
                      </td>
                      </tr>`;
    contentHTML += trString;
  }
  document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}
