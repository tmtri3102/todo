let arrItems = [];
// Create
function addBtn() {
	let itemAdd = document.getElementById("item").value;
	arrItems.push(itemAdd);
	display();
}
// Read
function display() {
	let row = "";
	for (let i = 0; i < arrItems.length; i++) {
		row += `<tr>
						<td>${arrItems[i]}</td>
						<td><button onclick="editRow(${i})">Edit</button></td>
						<td><button onclick="deleteRow(${i})">Delete</button></td>
					</tr>`;
	}
	document.getElementById("itemList").innerHTML = row;
	document.getElementById("amount").innerHTML = `${arrItems.length} items`;
}
// Delete
function deleteRow(index) {
	arrItems.splice(index, 1);
	display();
}

function editRow(index) {
	arrItems[index] = prompt("Nhập lại");
	display();
}
// display();
