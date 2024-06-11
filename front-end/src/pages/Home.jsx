import { useEffect, useState } from "react"

export function Home() {

    let [expenses, setExpenses] = useState(null)

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
                    </div>
                ))
            }
        </div>
    )

}