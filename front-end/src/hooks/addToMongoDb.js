export async function addToMongoDb(data, path) {
  try {
    let result = await fetch(path, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (!result.ok) {
      throw new Error(`Error: ${result.statusText}`);
    }
    let jsonData = await result.json()
    return jsonData
  } catch (error) {
    throw error
  }
}
