const BASE_URL = "https://www.course-api.com/javascript-store-products";

export async function fetchProductsAsync() {
    try {
        const response = await fetch(BASE_URL); 
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        handleError(error);
        throw error; 
    }
}

export function handleError(error) {
    console.error("An error occurred:", error.message);
}

export function displayProducts(products) {
    const container = document.getElementById("product-container");
    container.innerHTML = ""; 

    products.slice(0, 5).forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.fields.image[0].url}" alt="${product.fields.name}">
            <h2>${product.fields.name}</h2>
            <p>Price: $${(product.fields.price / 100).toFixed(2)}</p>
        `;

        container.appendChild(productCard);
    });
}
