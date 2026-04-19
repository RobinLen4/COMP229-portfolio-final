let apiURL = import.meta.env.VITE_APP_APIURL;
let endpoint = "/api/references/";

const handleResponse = async (response) => {
    const text = await response.text();

    if (!response.ok) {
        return {
            success: false,
            message: text || "Server error"
        };
    }

    return text ? JSON.parse(text) : { success: false, message: "Empty response" };
};

const list = async () => {
    try {
        let response = await fetch(apiURL + endpoint, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return await handleResponse(response);
    } catch (error) {
        console.log(error);
        return { success: false, message: error.message };
    }
}

const create = async (item) => {
    try {
        let response = await fetch(apiURL + endpoint, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
        return await handleResponse(response);
    } catch (error) {
        console.log(error);
        return { success: false, message: error.message };
    }
}

const update = async (item, id) => {
    try {
        let response = await fetch(apiURL + endpoint + id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
        return await handleResponse(response);
    } catch (error) {
        console.log(error);
        return { success: false, message: error.message };
    }
}

const remove = async (id) => {
    try {
        let response = await fetch(apiURL + endpoint + id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        return await handleResponse(response);
    } catch (err) {
        console.log(err)
        return { success: false, message: error.message };
    }
}

const getOne = async (id) => {
    try {
        let response = await fetch(apiURL + endpoint + id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        return await handleResponse(response);
    } catch (err) {
        console.log(err)
        return { success: false, message: error.message };
    }
}

export { list, remove, create, update, getOne }