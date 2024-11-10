interface RequestInterface {
    uri: string,
    method?: string
    token?: string
}

export const request = async (r: RequestInterface) => {
    let headers: HeadersInit = {}

    if (r.token) headers = { 'Authorization': `Bearer ${r.token}` }
    const req = await fetch(r.uri, { method: r.method ?? 'GET', headers: headers })
    return await req.json()
}