'use strict';

const tbody = document.querySelector('tbody');
const tbodyArr = Array.from(tbody.rows);

function convetString(str) {
  return parseFloat(str.replace(/[$,]/g, ''));
}

function getEmployees() {
  const emplObjects = tbodyArr.map((row) => {
    const cells = row.cells;

    return {
      name: cells[0].innerText,
      position: cells[1].innerText,
      age: cells[2].innerText,
      salary: cells[3].innerText,
    };
  });

  return emplObjects;
}

function orderTable(array) {
  tbody.innerHTML = '';

  array.forEach((employee) => {
    tbody.insertAdjacentHTML(
      'beforeend',
      `<tr>
        <td>${employee.name}</td>
        <td>${employee.position}</td>
        <td>${employee.age}</td>
        <td>${employee.salary}</td>
      </tr>`,
    );
  });
}

const thead = Array.from(document.querySelectorAll('thead th'));

thead.forEach((th) => {
  th.addEventListener('click', (e) => {
    if (e.target.innerText === 'Name') {
      const employees = getEmployees();

      const sortedEmp = employees.sort((a, b) => a.name.localeCompare(b.name));

      orderTable(sortedEmp);
    }

    if (e.target.innerText === 'Position') {
      const employees = getEmployees();

      const sortedEmp = employees.sort((a, b) => {
        return a.position.localeCompare(b.position);
      });

      orderTable(sortedEmp);
    }

    if (e.target.innerText === 'Age') {
      const employees = getEmployees();

      const sortedEmp = employees.sort((a, b) => a.age - b.age);

      orderTable(sortedEmp);
    }

    if (e.target.innerText === 'Salary') {
      const employees = getEmployees();

      const sortedEmp = employees.sort((a, b) => {
        return convetString(a.salary) - convetString(b.salary);
      });

      orderTable(sortedEmp);
    }
  });
});
