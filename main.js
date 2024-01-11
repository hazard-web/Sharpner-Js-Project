async function addItem() {
    const itemName = document.getElementById('itemName').value;
    const itemDescription = document.getElementById('itemDescription').value;
    const itemPrice = document.getElementById('itemPrice').value;
    const itemQuantity = document.getElementById('itemQuantity').value;

    const newItem = {
        name: itemName,
        description: itemDescription,
        price: itemPrice,
        quantity: itemQuantity
    };

    // Save item to the CRUD API server
    await saveItem(newItem);

    // Clear input fields
    document.getElementById('itemName').value = '';
    document.getElementById('itemDescription').value = '';
    document.getElementById('itemPrice').value = '';
    document.getElementById('itemQuantity').value = '';

    // Refresh the item list
    fetchItems();
}

async function fetchItems() {
    const response = await fetch('https://crudcrud.com/api/0907c234a481486db2e6046f849d3674/itemlist');
    const data = await response.json();
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';

    data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `Name: ${item.name}, Description: ${item.description}, Price: ${item.price}, Quantity: ${item.quantity}`;
        itemList.appendChild(li);
    });
}

async function saveItem(item) {
    await fetch('https://crudcrud.com/api/0907c234a481486db2e6046f849d3674/itemlist', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
    });
}

fetchItems(); 