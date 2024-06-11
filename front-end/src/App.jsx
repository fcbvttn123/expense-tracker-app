import { useEffect } from "react"

function App() {

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await fetch("/api/expenses")
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await res.json()
        console.log(data)
      } catch (error) {
        console.error('There was a problem with your fetch operation:', error)
      }
    }
    fetchData()
  }, [])
  

  return (
    <h1 className="text-3xl font-bold underline">Hello world!</h1>
  )

}

export default App
