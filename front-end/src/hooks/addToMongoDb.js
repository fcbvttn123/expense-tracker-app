export async function addToMongoDb(data, path) {
    let result = await fetch(path, {
        method: "POST", 
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let document = await result.json()
    console.log(document)
    return document
} 