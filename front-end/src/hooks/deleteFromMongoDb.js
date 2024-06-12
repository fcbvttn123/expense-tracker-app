export async function removeFromDb(id, path) {
    let result = await fetch(path+id, {
        method: "DELETE"
    })
    let data = await result.json()
    console.log(data)
    return data
}