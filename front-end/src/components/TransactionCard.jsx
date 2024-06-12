import { removeFromDb } from "../hooks/deleteFromMongoDb"

export function TransactionCard({id, transactionType, price, notes}) {
    return (
        <div className="mb-2">
            <p>Transaction Type: {transactionType}</p>    
            <p>Price: ${price}</p>   
            <p>{notes}</p>
            <button className="bg-zinc-300 px-4 py-1 rounded-md" onClick={() => removeFromDb(id, "/api/expenses/")} data-id={id}>Delete</button> 
        </div>
    )
}