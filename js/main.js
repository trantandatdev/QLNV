var arrEmployee = [];

var jsondata = localStorage.getItem("listEmployee");

if (jsondata != null) {
  var list = JSON.parse(jsondata);
  arrEmployee = list.map((emp) => {
    return new Employee(
      emp.id,
      emp.name,
      emp.email,
      emp.pass,
      emp.datepicker,
      emp.salary,
      emp.position,
      emp.time,
      emp.total,
      emp.category
    );
  });
  renderEmployee(arrEmployee);
}

function addEmployee() {
  $("#employeeModal").trigger("reset");

  var emp = getInfoEmployee();

  //Start Validate

  var isValid =
    validateAccount("tbTKNV", emp.id) &
    validateName("tbTen", emp.name) &
    validateEmail("tbEmail", emp.email) &
    validatePassword("tbMatKhau", emp.pass) &
    validateDatepicker("tbNgay", emp.datepicker) &
    validateSalary("tbLuongCB", emp.salary) &
    validatePosition("tbChucVu", emp.position) &
    validateTime("tbGiolam", emp.time);

  if (!isValid) return;

  $("#employeeModal").modal("hide");
  setTimeout(() => {
    Swal.fire(`Add ${emp.name} - ${emp.email} successfully!`);
  }, 500);

  arrEmployee.push(emp);
  resetFormEmployee();

  localStorage.setItem("listEmployee", JSON.stringify(arrEmployee));
  renderEmployee(arrEmployee);
}

function delEmployee(id) {
  var index = findEmployee(id, arrEmployee);
  arrEmployee.splice(index, 1);
  resetFormEmployee();

  renderEmployee(arrEmployee);
  localStorage.setItem("listEmployee", JSON.stringify(arrEmployee));
}

function editEmployee(id) {
  $("#employeeModal").modal("show");
  var index = findEmployee(id, arrEmployee);
  var emp = arrEmployee[index];
  showInfoEmployee(emp);
  document.getElementById("tknv").disabled = true;
}

function updateEmployee() {
  var employee = getInfoEmployee();
  var index = findEmployee(employee.id, arrEmployee);
  arrEmployee[index] = employee;

  var isValid =
    validateAccount("tbTKNV", employee.id) &
    validateName("tbTen", employee.name) &
    validateEmail("tbEmail", employee.email) &
    validatePassword("tbMatKhau", employee.pass) &
    validateDatepicker("tbNgay", employee.datepicker) &
    validateSalary("tbLuongCB", employee.salary) &
    validatePosition("tbChucVu", employee.position) &
    validateTime("tbGiolam", employee.time);

  if (!isValid) return;

  $("#employeeModal").modal("hide");
  setTimeout(() => {
    Swal.fire(`Update ${employee.name} - ${employee.email} successfully!`);
  }, 500);

  resetFormEmployee();

  localStorage.setItem("listEmployee", JSON.stringify(arrEmployee));
  renderEmployee(arrEmployee);
}

function btnClose() {
  resetFormEmployee();
}

function searchEmployee() {
  var searchInput = document.getElementById("searchName").value;
  var searchCategory = arrEmployee.filter((val) => {
    return val.category.toUpperCase().includes(searchInput.toUpperCase());
  });
  renderEmployee(searchCategory);
}
