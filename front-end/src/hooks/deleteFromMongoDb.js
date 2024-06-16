export async function removeFromDb(id, path) {
  try {
    let result = await fetch(path + id, {
      method: "DELETE",
    });
    if (!result.ok) {
      throw new Error(`Error: ${result.status} ${result.statusText}`);
    }
    let data = await result.json();
    return data;
  } catch (error) {
    console.error("Failed to remove document from DB:", error);
    throw error; // Re-throw the error to handle it in the calling function
  }
}
