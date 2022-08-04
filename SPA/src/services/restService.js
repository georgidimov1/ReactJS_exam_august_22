const baseUrl = 'http://localhost:5000/api';

function createHeader(httpMethod, data) {
    const headers = {
        method: httpMethod,
        headers: {
              'Content-Type': 'application/json'
        }
    }
    if (httpMethod === 'POST' || httpMethod === 'PUT') {
        headers.body = JSON.stringify(data)
    }
    return headers;
}

function handleError(e) {
    if (!e.ok) {
        throw new Error(e.statusText);
    }
    return e;
}
function serilizeData(x) {
    if(x.status === 204){
        return x;
    }
    return x.json();
}
function fetchData(endpoint, headers) {
    const url = `${baseUrl}/${endpoint}`;
    return fetch(url, headers)
        .then(handleError)
        .then(serilizeData)
}
function get(endpoint) {
    const headers = createHeader('GET');
    return fetchData(endpoint, headers);
}
function post(endpoint, data) {
    const headers = createHeader('POST', data);
    return fetchData(endpoint, headers)
   
}
function put(endpoint, data) {
    const headers = createHeader('PUT', data);
    return fetchData(endpoint, headers);
}
function del(endpoint) {
    const headers = createHeader('DELETE');
    return fetchData(endpoint, headers);
}

export {get,post,put,del} 