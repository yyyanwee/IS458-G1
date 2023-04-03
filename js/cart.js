
function createCartItemElement(name, price, description) {
    // create li element
    const li = document.createElement("li");
    li.classList.add("flex", "items-center", "gap-4");


    // create div element for item info
    const div = document.createElement("div");

    // create h3 element for item name
    const h3 = document.createElement("h3");
    h3.classList.add("text-sm", "text-gray-900");
    h3.textContent = name;
    div.appendChild(h3);

    // create p element for item description
    const pDesc = document.createElement("p");
    pDesc.classList.add("description", "text-sm", "text-gray-600");
    pDesc.textContent = "Description: " + description;
    div.appendChild(pDesc);

    // create p element for item price
    const pPrice = document.createElement("p");
    pPrice.classList.add("price", "text-sm", "text-gray-600");
    pPrice.textContent = '$' + price;
    div.appendChild(pPrice);

    total += parseFloat(price);

    li.appendChild(div);

    // create div element for quantity and remove button
    const div2 = document.createElement("div");
    div2.classList.add("flex", "flex-1", "items-center", "justify-end", "gap-2");

    // create form element for quantity
    const form = document.createElement("form");

    // create label element for quantity input
    const label = document.createElement("label");
    label.setAttribute("for", "Line2Qty");
    label.classList.add("sr-only");
    label.textContent = "Quantity";
    form.appendChild(label);

    // create input element for quantity
    const input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("min", "1");
    input.setAttribute("value", "1");
    input.setAttribute("id", "Line2Qty");
    input.classList.add(
        "h-8",
        "w-12",
        "rounded",
        "border-gray-200",
        "bg-gray-50",
        "p-0",
        "text-center",
        "text-xs",
        "text-gray-600",
        "[-moz-appearance:_textfield]",
        "focus:outline-none",
        "[&::-webkit-outer-spin-button]:m-0",
        "[&::-webkit-outer-spin-button]:appearance-none",
        "[&::-webkit-inner-spin-button]:m-0",
        "[&::-webkit-inner-spin-button]:appearance-none"
    );
    form.appendChild(input);

    div2.appendChild(form);

    // create button element for removing item from cart
    const btnRemove = document.createElement("button");
    btnRemove.setAttribute("name", "removeItem");
    btnRemove.classList.add(
        "bg-red-500",
        "text-white",
        "active:bg-red-600",
        "font-bold",
        "uppercase",
        "text-xs",
        "px-4",
        "py-2",
        "rounded",
        "shadow",
        "hover:shadow-md",
        "outline-none",
        "focus:outline-none",
        "mr-1",
        "mb-1",
        "ease-linear",
        "transition-all",
        "duration-150"
    );
    btnRemove.textContent = "Remove item from cart";
    btnRemove.addEventListener("click", () => {
        removeItemFromCart(name);
    });
    div2.appendChild(btnRemove);

    li.appendChild(div2);

    // return the created li element
    return li;
}

function renderCartItems() {
    // get the cart array from sessionStorage
    const cart = JSON.parse(sessionStorage.getItem("cart"));

    // get the ul element to add li elements to
    const ul = document.getElementById("cartItems");

    total = 0;


    // remove any existing li elements
    ul.innerHTML = "";

    // loop through the cart array and create a li element for each item
    cart.forEach((item) => {
        const li = createCartItemElement(item.name, item.price, item.description);
        ul.appendChild(li);
    });

    document.getElementById("total").innerHTML = '$' + total;

    sessionStorage.setItem('total',total)
}

// call the renderCartItems function to initially render the cart items
renderCartItems();



function clearCart() {
    // remove the cart array from sessionStorage
    sessionStorage.removeItem("cart");

    // reload the page to clear the cart items
    location.reload();
}



function removeItemFromCart(itemName) {
    // get the cart array from sessionStorage
    const cart = JSON.parse(sessionStorage.getItem("cart"));

    // loop through the cart array to find the item to remove
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === itemName) {
            // remove the item from the cart array
            cart.splice(i, 1);

            // update the cart array in sessionStorage
            sessionStorage.setItem("cart", JSON.stringify(cart));

            // re-render the cart items to update the displayed cart
            renderCartItems();

            // exit the loop since we found the item and removed it
            return;
        }
    }
}