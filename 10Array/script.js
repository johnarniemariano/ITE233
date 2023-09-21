// Define an array of shoes
let shoes = [
    "Nike",
    "Adidas",
    "Puma",
    "Reebok",
    "New Balance",
    "Vans",
    "Converse",
    "Skechers",
    "Under Armour",
    "Fila"
];

// Function to display the current list of shoes
function displayShoes() {
    const shoesList = document.getElementById("shoes-list");
    shoesList.innerHTML = shoes.join(", ");
}

// Event listener for Slice(5) button
document.getElementById("slice-button").addEventListener("click", () => {
    shoes = shoes.slice(5);
    displayShoes();
});

// Event listener for Push button
document.getElementById("push-button").addEventListener("click", () => {
    const newShoe = prompt("Enter a new shoe brand:");
    if (newShoe) {
        shoes.push(newShoe);
        displayShoes();
    }
});

// Event listener for Pop button
document.getElementById("pop-button").addEventListener("click", () => {
    shoes.pop();
    displayShoes();
});

// Initial display of shoes
displayShoes();




