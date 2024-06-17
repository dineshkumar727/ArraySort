
function removeFirst() {
  const node = document.getElementById("demo");
  node.removeChild(node.firstElementChild);
}

function removeAll() {
  document.getElementById("demo").innerHTML = '';
  document.getElementById("demo").textContent = '';/**   **/
}

function addItemx() {
  const data = [
    { name: "Charlie", age: 30 },
    { name: "Alice", age: 30 },
    { name: "David", age: 28 },
    { name: "Bob", age: 24 },
  ];

  // Sort by age in ascending order
  //data.sort((a, b) => a.age - b.age);

  // Sort by name in descending order
  console.log(data.sort());
  data.sort((a, b) => {
    if (a.name > b.name) {
      return -1;
    } else if (a.name < b.name) {
      return 1;
    } else {
      return 0;
    }
  });

  // Alternatively, for name sorting:
  //data.sort((a, b) => b.name.localeCompare(a.name));
  console.log(data);
  let tableNode = document.createElement("table");
  tableNode.classList.add('tableMain');
  tableNode.innerHTML = ("<th> Name </th> <th> Age </th>");

  data.forEach(each => {
    let trNode = document.createElement("tr");
    trNode.innerHTML += "<td>" + each.name + "</td>";
    trNode.innerHTML += "<td>" + each.age + "</td>";
    tableNode.append(trNode);
  })
  document.getElementById("demo").appendChild(tableNode);
}