function validateName(idErr, value) {
  const messageError = document.getElementById(idErr);
  const regex = /^[a-zA-ZÀ-ỹ\s]+$/;
  if (!isNull(idErr, value)) {
    return false; // Return immediately if value is null
  }

  if (value.match(regex)) {
    messageError.innerText = "";
    return true;
  } else {
    messageError.innerText = "Tên không hợp lệ";
    return false;
  }
}

function validatePassword(idErr, value) {
  const messageError = document.getElementById(idErr);
  const reg =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
  if (!isNull(idErr, value)) {
    return false; // Return immediately if value is null
  }
  if (value.match(reg)) {
    messageError.innerText = "";
    return true;
  } else {
    messageError.innerText =
      "Mật khẩu gồm 6 - 10 ký tự, ít nhất 1 ký tự in hoa, 1 chữ số, 1 ký tự đặc biệt";
    return false;
  }
}

function validateDatepicker(idErr, value) {
  const messageError = document.getElementById(idErr);
  const date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  if (!isNull(idErr, value)) {
    return false; // Return immediately if value is null
  }
  if (value.match(date_regex)) {
    messageError.innerText = "";
    return true;
  } else {
    messageError.innerText = "Ngày làm việc không hợp lệ";
    return false;
  }
}

function validateSalary(idErr, value) {
  const messageError = document.getElementById(idErr);
  const numericValue = Number(value.replace(/,/g, "")) * 1;
  if (!isNull(idErr, value)) {
    return false; // Return immediately if value is null
  }
  if (numericValue >= 1e6 && numericValue <= 20e6) {
    messageError.innerText = "";
    return true;
  } else {
    messageError.innerText = "Lương không hợp lệ";
    return false;
  }
}

function validatePosition(idErr, value) {
  const messageError = document.getElementById(idErr);
  if (!isNull(idErr, value)) {
    return false; // Return immediately if value is null
  }

  if (value !== "Chọn chức vụ") {
    messageError.innerText = "";
    return true;
  } else {
    messageError.innerText = "Chức vụ không hợp lệ";
    return false;
  }
}

function validateTime(idErr, value) {
  const messageError = document.getElementById(idErr);
  if (!isNull(idErr, value)) {
    return false; // Return immediately if value is null
  }

  if (/\D/.test(value)) {
    messageError.innerText = "Thời gian làm không hợp lệ";
    return false;
  }

  if (Number(value) < 80) {
    messageError.innerText = "Làm gì ít z cha, chắc đuổi quá!!";
    return false;
  } else if (Number(value) > 200) {
    messageError.innerText =
      "Làm nhiều z tiền đâu trả lương cha nụi, chắc cũng đuổi luôn quá =)))";
    return false;
  } else messageError.innerText = "";
  return true;
}

function isNull(idErr, value) {
  const messageError = document.getElementById(idErr);
  if (value.trim().length == 0) {
    messageError.innerText = "Nội dung không được để trống";
    return false;
  } else {
    messageError.innerText = "";
    return true;
  }
}

function validateAccount(idErr, value) {
  const messageError = document.getElementById(idErr);

  if (!isNull(idErr, value)) {
    return false; // Return immediately if value is null
  }
  if (value.length < 4 || value.length > 6) {
    messageError.innerText = `Nội dung phải từ ${4} đến ${6} ký tự`;
    return false;
  } else if (/\D/.test(value)) {
    messageError.innerText = "Tài khoản không hợp lệ";
    return false;
  } else {
    messageError.innerText = "";
    return true;
  }
}

function validateEmail(idErr, value) {
  const messageError = document.getElementById(idErr);
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValidEmail = (value) => {
    return String(value).toLowerCase().match(regex);
  };

  if (!isNull(idErr, value)) {
    return false; // Return immediately if value is null
  }

  if (isValidEmail(value)) {
    messageError.innerText = "";
    return true;
  } else {
    messageError.innerText = "Email không hợp lệ";
    return false;
  }
}
