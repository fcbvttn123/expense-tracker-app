import { useEffect, useState } from "react"
import { TransactionCard } from "../components/TransactionCard"

export function Home() {

    let [expenses, setExpenses] = useState(null)

    // Fetch all expenses 
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
                expenses && expenses.map(e => (
                    <TransactionCard key={e._id} id={e._id} transactionType={e.transactionType} price={e.price} notes={e.notes}/>
                ))
            }
        </div>
    )

}