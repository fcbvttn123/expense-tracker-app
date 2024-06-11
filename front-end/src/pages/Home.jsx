import { useEffect, useState } from "react"

export function Home() {

    let [expenses, setExpenses] = useState(null)

    async function removeFromDb(id) {
        let result = await fetch(`/api/expenses/${id}`, {
            method: "DELETE"
        })
        let data = await result.json()
        console.log(data)
    }

    async function handleDeleteBtn(e) {
        await removeFromDb(e.target.dataset.id)
    }

    useEffect(() => {
        async function fetchData() {
          try {
            let res = await fetch("/api/expenses")
            let data = await res.json()
            setExpenses(data)
          } catch (error) {
            console.error('There was a problem with your fetch operation:', error)
          }
        }
        fetchData()
      }, [])

    return (
        <div>
            {
                expenses && 
                expenses.map(e => (
                    <div key={e._id} className="mb-2">
                        <p>Transaction Type: {e.transactionType}</p>    
                        <p>Price: ${e.price}</p>   
                        <button className="bg-zinc-300 px-4 py-1 rounded-md" onClick={handleDeleteBtn} data-id={e._id}>Delete</button> 
                    </div>
                ))
            }
        </div>
    )

}