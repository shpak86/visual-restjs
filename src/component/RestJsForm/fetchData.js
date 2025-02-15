const fetchGetData = async (url, key, value) => {
    let data;
    const mainUrl = `${url}/storage/${key}`;
    await fetch(mainUrl, {
        method: "GET",
        headers: {'Content-Type': 'application/json'},
    })
        .then(res => res.json())
        .then(result => data = result)
        .catch(err => data = {result: err.message});
    return data;
};

const fetchPostData = async (url, key, value) => {
    let data;
    const mainUrl = `${url}/storage`;
    await fetch(mainUrl, {
        method: "POST",
        body: JSON.stringify({key: key, value: value}),
        headers: {'Content-Type': 'application/json'},
    })
        .then(res => res.json())
        .then(result => data = result)
        .catch(err => data = {result: err.message});
    return data;
};

const fetchPutData = async (url, key, value) => {
    let data;
    const mainUrl = `${url}/storage`;
    await fetch(mainUrl, {
        method: "PUT",
        body: JSON.stringify({key: key, value: value}),
        headers: {'Content-Type': 'application/json'},
    })
        .then(res => res.json())
        .then(result => data = result ? result : "Error in fetch")
        .catch(err => data = {result: err.message});
    return data;
};

const fetchDeleteData = async (url, key, value) => {
    let data;
    const mainUrl = `${url}/storage/${key}`;
    await fetch(mainUrl, {method: "DELETE", "Content-Type": "application/json"})
        .then(res => res.json())
        .then(result => data = result)
        .catch(err => data = {result: err.message});
    return data;
};

export {fetchGetData, fetchPostData, fetchPutData, fetchDeleteData};
