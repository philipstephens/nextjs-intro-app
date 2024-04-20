export default async function Country() {
    var germany = await getGermany();
    var spain = await getSpain();
    return <p>{germany.name} : {spain.name}</p>
}

async function getGermany() {
    const res = await fetch('http://localhost:5235/User/Country/countries/germany',
    {cache:"no-cache"})
    if (!res.ok) {
        // This will activate the nearest error boundary
        throw new Error('Failed to fetch data')
        
    }
    return res.json()
}

async function getSpain() {
    const res = await fetch('http://localhost:5235/User/Country/countries/spain',
    {cache:"no-cache"})
    if (!res.ok) {
        // This will activate the nearest error boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
