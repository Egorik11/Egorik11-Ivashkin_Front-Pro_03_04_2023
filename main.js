const container = document.querySelector('#container');
const table = document.createElement('table');
let count = 1;
for (let i = 0; i < 10; i++) {
  const tr = document.createElement('tr');
  for (let j = 0; j < 10; j++) {
    const td = document.createElement('td');
    td.innerHTML = count;
    tr.appendChild(td);
    count++;
  }
  table.appendChild(tr);
}

container.appendChild(table);
