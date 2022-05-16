add = document.getElementById("new-item");
add.addEventListener("click", getAndUpdate);
// Getting Values from Title and Description

function getAndUpdate() {
    console.log('Updating List...');
    let tit = document.getElementById("title").value;
    let desc = document.getElementById("description").value;
    if (localStorage.getItem('itemsJson') == null) {
        const itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    } else {
        let itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    update();
}
function update() {
    if (localStorage.getItem('itemsJson') == null) {
        const itemJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    } else {
        let itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    // Populating the Table body
    let tableBody = document.getElementById("tableBody");
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button type="submit" class="btn btn-primary" onclick="deleted(${index})">Delete</button></td>
        </tr>`;
    });
    tableBody.innerHTML = str;
}
// Delet Item of tableBody

function deleted(itemIndex) {
    console.log("Delete", itemIndex);
    let itemJsonArrayStr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    // Delete itemIndex element from the array
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();
}

// Clearing the Local Storage 
function clearList() {
    if (confirm("Do you Really want to Clear?")) {
        console.log('Clearing the List...');
        localStorage.clear();
    }
    location.reload();
};


