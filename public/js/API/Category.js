const BASE_URL = 'https://localhost:7127/api/Category'

async function getAllCategory() {
    const response = fetch(BASE_URL)
    const data = (await response).json()
    return data;
}

async function addCategory(data) {
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

async function updateCategory(data, id) {
    const response = await fetch(BASE_URL + `/${id}`, {
        method: 'PUT',
        body: data
    })  
    return response
}

async function deleteCategory(id) {
    const response = await fetch(BASE_URL + `/${id}`, {
        method: 'DELETE'
    })  
    return response
}

export { getAllCategory, addCategory, updateCategory, deleteCategory}