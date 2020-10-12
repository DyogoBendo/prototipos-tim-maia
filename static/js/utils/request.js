const createRequest = (method, path) => {
    const request = new XMLHttpRequest()

    request.open(method, path)
    request.responseType = 'json'
    request.send

    return request
}

export default createRequest