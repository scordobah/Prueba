import axios from 'axios'

const baseUrl = "http://localhost:8080"

export async function saveClients (clientValue) {
    try {
        const response = await axios({
            url: `${baseUrl}/api/clients`,
            method: 'POST',
            data: clientValue,
        })
        return response
    } 
    catch (e) {
        console.log(e)
    }
}

export async function saveFunds (fundValue) {
    try {
        const response = await axios({
            url: `${baseUrl}/api/funds`,
            method: 'POST',
            data: fundValue,
        })
        return response
    } 
    catch (e) {
        console.log(e)
    }
}

export async function getFunds () {
    try {
        const response = await axios({
            url: `${baseUrl}/api/funds`,
            method: 'GET'
        })
        return response
    }
    catch (e) {
        console.log(e)
    }
}

export async function getClients () {
    try {
        const response = await axios({
            url: `${baseUrl}/api/clients`,
            method: 'GET'
        })
        return response
    }
    catch (e) {
        console.log(e)
    }
}

export async function getClientsByName (nombre) {
    try {
        const response = await axios({
            url: `${baseUrl}/api/clients/${nombre}`,
            method: 'GET'
        })
        return response
    }
    catch (e) { 
        console.log(e)
    }
}

export async function getTransactionsByName (nombre) {
    try {
        const response = await axios({
            url: `${baseUrl}/api/transactions/${nombre}`,
            method: 'GET'
        })
        return response
    }
    catch (e) { 
        console.log(e)
    }
}

export async function getFundsByName (nombre) {
    try {
        const response = await axios({
            url: `${baseUrl}/api/funds/${nombre}`,
            method: 'GET'
        })
        return response
    }
    catch (e) {
        console.log(e)
    }
}

export async function saveTransaction (transactionValue) {
    try {
        const response = await axios({
            url: `${baseUrl}/api/transactions`,
            method: 'POST',
            data: transactionValue,
        })
        return response
    } 
    catch (e) {
        console.log(e)
    }
}

export async function saveSuscription (suscriptionValue) {
    try {
        const response = await axios({
            url: `${baseUrl}/api/suscriptions`,
            method: 'POST',
            data: suscriptionValue,
        })
        return response
    } 
    catch (e) {
        console.log(e)
    }
}

// export async function getTransactionsByName (nombre) {
//     try {
//         const response = await axios({
//             url: `${baseUrl}/api/transactions/${nombre}`,
//             method: 'GET'
//         })
//         return response
//     }
//     catch (e) {
//         console.log(e)
//     }
// }

export async function getSuscriptionsByName (nombre) {
    try {
        const response = await axios({
            url: `${baseUrl}/api/suscriptions/${nombre}`,
            method: 'GET'
        })
        return response
    }
    catch (e) {
        console.log(e)
    }
}

export async function updateBalanceByName (nombre, body) {
    try {
        const response = await axios({
            url: `${baseUrl}/api/clients/${nombre}`,
            method: 'PUT',
            data: body
        })
        return response
    }
    catch (e) {
        console.log(e)
    }
}


export async function deleteSuscriptionsByName (id) {
    try {
        const response = await axios({
            url: `${baseUrl}/api/suscriptions/${id}`,
            method: 'DELETE'
        })
        return response
    }
    catch (e) {
        console.log(e)
    }
}

