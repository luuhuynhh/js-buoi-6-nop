/**
 * Bài 1:
 */

function soNguyenDuongNhoNhat() {
    var number = 10000;
    var n = 0;
    while (number >= 0) {
        n++;
        number -= n;
    }
    return n;
}


var btnXemKetQua = document.getElementById("btnXemKetQua");
var txtXemKetQua = document.getElementById("txtXemKetQua");

btnXemKetQua.onclick = function () {
    var min = soNguyenDuongNhoNhat();
    var res = "Số nguyên dương nhỏ nhất: " + min;
    txtXemKetQua.value = res;
}
/**
 * Bài 2:
 */
function tinhTongN(x, n) {
    var sum = 0;
    var x1 = x;
    for (var i = 1; i <= n; i++) {
        sum += x1;
        x1 *= x;
    }
    return sum;
}

var txtSoX = document.getElementById("txtSoX");
var txtSoN = document.getElementById("txtSoN");
var btnTinhTong = document.getElementById("btnTinhTong");
var txtTinhTong = document.getElementById("txtTinhTong");

btnTinhTong.onclick = function () {
    var soX = Number(txtSoX.value);
    var soN = Number(txtSoN.value);
    var tong = tinhTongN(soX, soN);
    var res = "Tổng: " + tong;
    txtTinhTong.value = res;
}

/** 
 *Bài 3: 
*/

function nGiaiThua(n) {
    var res = 1;
    if (n > 1) {
        for (var i = 2; i <= n; i++)
            res *= i;
    }
    return res;
}

var txtSo_N = document.getElementById("txtSo_N");
var btnTinh = document.getElementById("btnTinh");
var txtTinh = document.getElementById("txtTinh");
btnTinh.onclick = function () {
    var soN = Number(txtSo_N.value);
    var gt = nGiaiThua(soN);
    var res = soN + "!=" + gt;
    txtTinh.value = res;
}

/**
 * Bài 4:
 */

function taoTheDiv() {
    var res = "<ul>"
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            res += "<li style='background-color: red'>Div chẵn</li>";
        }
        else {
            res += "<li style='background-color: blue'>Div lẻ</li>"
        }
    }

    return res;
}

var btnTaoThe = document.getElementById("btnTaoThe");
var txtThe = document.getElementById("txtThe");
btnTaoThe.onclick = function () {
    var res = taoTheDiv();
    txtThe.innerHTML = res;
}