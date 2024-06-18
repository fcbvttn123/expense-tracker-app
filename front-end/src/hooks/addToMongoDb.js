export async function addToMongoDb(data, path) {
  let result = await fetch(path, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
  let jsonData = await result.json()
  return jsonData
}
