let numbers = [];

document.getElementById("btnThemSo").onclick = function () {
  const input = document.getElementById("inputNumber").value;
  const number = parseFloat(input);
  if (!isNaN(number)) {
    numbers.push(number);
    document.getElementById(
      "pResult"
    ).innerHTML = `Mảng hiện tại: [${numbers.join(", ")}]`;
    document.getElementById("inputNumber").value = "";
  } else {
    document.getElementById("pResult").innerHTML = "Vui lòng nhập số!!!";
  }
};

function btnKetQua(luachon) {
  let result = "";
  switch (luachon) {
    case 1:
      result = `Tổng các số dương: ${numbers
        .filter((n) => n > 0)
        .reduce((a, b) => a + b, 0)}`;
      break;
    case 2:
      result = `Số lượng số dương: ${numbers.filter((n) => n > 0).length}`;
      break;
    case 3:
      result = `Số nhỏ nhất: ${Math.min(...numbers)}`;
      break;
    case 4:
      const soDuongNhoNhat = numbers.filter((n) => n > 0);
      result =
        soDuongNhoNhat.length > 0
          ? `Số dương nhỏ nhất: ${Math.min(...soDuongNhoNhat)}`
          : "Không có số dương";
      break;
    case 5:
      const soChanCuoiCung = numbers
        .slice()
        .reverse()
        .find((n) => n % 2 === 0);
      result =
        soChanCuoiCung !== undefined
          ? `Số chẵn cuối cùng: ${soChanCuoiCung}`
          : "Không có số chẵn";
      break;
    case 6:
      const viTri1 = parseInt(prompt("Nhập vị trí thứ nhất (bắt đầu từ 0):"));
      const viTri2 = parseInt(prompt("Nhập vị trí thứ hai (bắt đầu từ 0):"));
      if (numbers[viTri1] !== undefined && numbers[viTri2] !== undefined) {
        [numbers[viTri1], numbers[viTri2]] = [numbers[viTri2], numbers[viTri1]];
        result = `Mảng sau khi đổi chỗ: [${numbers.join(", ")}]`;
      } else {
        result = "Vị trí không hợp lệ";
      }
      break;
    case 7:
      result = `Mảng sắp xếp tăng dần: [${numbers
        .slice()
        .sort((a, b) => a - b)
        .join(", ")}]`;
      break;
    case 8:
      const soNguyenToDauTien = numbers.find((n) => soNguyenTo(n));
      result =
        soNguyenToDauTien !== undefined
          ? `Số nguyên tố đầu tiên: ${soNguyenToDauTien}`
          : "Không có số nguyên tố";
      break;
    case 9:
      result = `Số lượng số nguyên: ${numbers.filter(Number.isInteger).length}`;
      break;
    case 10:
      const soDuong = numbers.filter((n) => n > 0).length;
      const soAm = numbers.filter((n) => n < 0).length;
      result = `Số dương: ${soDuong}, Số âm: ${soAm}`;
      break;
  }
  document.getElementById("pResult").innerHTML = result;
}

function soNguyenTo(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
