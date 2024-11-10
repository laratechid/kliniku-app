interface RequestInterface {
    method: string
    url: string,
    token?: string
}

export const request = async (r: RequestInterface) => {
    let headers: HeadersInit = {}
    if (r.token) headers = { 'Authorization': `Bearer ${r.token}` }
    const req = await fetch(r.url, { method: r.method, headers: headers })
    return await req.json()
}