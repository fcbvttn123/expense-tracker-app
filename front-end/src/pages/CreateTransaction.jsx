import { useState } from "react"
import { handleFormChange } from "../hooks/handleFormChange"
import { addToMongoDb } from "../hooks/addToMongoDb"

export function CreateTransaction() {

    const [formData, setFormData] = useState({
        transactionType: "",
        price: 0, 
        notes: ""
    })

    return (
        <form 
            className="pt-20 pl-5"
            onSubmit={(e) => {
                e.preventDefault()
                addToMongoDb(formData, "/api/expenses")
            }}
        >
            <div className="flex items-center gap-4 mb-2">
                <label htmlFor="transactionType" className="min-w-32">Transaction Type</label>
                <input type="text" name="transactionType" id="transactionType" value={formData.transactionType} onChange={(e) => handleFormChange(e, setFormData)} className="border-2 border-black" />
            </div>
            <div className="flex items-center gap-4 mb-2">
                <label htmlFor="price" className="min-w-32">Price</label>
                <input type="number" name="price" id="price" value={formData.price} onChange={(e) => handleFormChange(e, setFormData)} className="border-2 border-black" />
            </div>
            <div>
                <label htmlFor="notes" className="min-w-32">Notes</label>
                <textarea name="notes" id="notes" value={formData.notes} onChange={(e) => handleFormChange(e, setFormData)} className="border-2 border-black"></textarea>
            </div>
            <button className="px-8 py-2 bg-slate-300">Add</button>
        </form>
    )

}