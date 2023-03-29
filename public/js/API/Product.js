const BASE_URL = 'https://localhost:7127/api/Product'

async function getAllProduct() {
    const response = fetch(BASE_URL)
    const data = (await response).json()
    return data;
}

async function getProductById(id) {
    const response = fetch(BASE_URL + `/byCat/${id}`)
    const data = (await response).json()
    return data;
}

async function addProduct(data) {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        /* headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }, */
        body: data
    })  
    return response
}

async function updateProduct(data, id) {
    const response = await fetch(BASE_URL + `/${id}`, {
        method: 'PUT',
        body: data
    })  
    return response
}

async function deleteProduct(id) {
    const response = await fetch(BASE_URL + `/${id}`, {
        method: 'DELETE'
    })  
    return response
}

export { getAllProduct, addProduct, updateProduct, deleteProduct, getProductById}