const API_URL = "https://www.course-api.com/javascript-store-products";

export async function fetchProductsAsync() {
    try {
        const response = await fetch(Base_URL);
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