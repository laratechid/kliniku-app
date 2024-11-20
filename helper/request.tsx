interface RequestInterface {
    uri: string,
    method?: string
    token?: string
    body?: object
}

export const request = async (r: RequestInterface) => {
    let headers: HeadersInit = {}
    let body : any
    headers = { 'Content-Type': 'application/json' }
    if (r.token) headers = { 'Authorization': `Bearer ${r.token}`, 'Content-Type': 'application/json' }
    if (r.body) body = JSON.stringify(r.body)
    const req = await fetch(r.uri, { method: r.method ?? 'GET', headers: headers, body: body })
    return await req.json()
}