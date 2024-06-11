import { useState } from "react"

export function CreateTransaction() {
    const [formData, setFormData] = useState({
        transactionType: "",
        price: 0, 
        notes: ""
    })
    async function addToDb(formData) {
        let result = await fetch("/api/expenses", {
            method: "POST", 
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let data = await result.json()
        console.log(data)
    }
    function handleFormChange(e) {
        const {name, value} = e.target
        setFormData(prev => ({
            ...prev, 
            [name]: value
        }))
    }
    async function handleFormSubmit(e, formData) {
        e.preventDefault()
        await addToDb(formData)
    }
    return (
        <form onSubmit={(e) => handleFormSubmit(e, formData)}>
            <div className="flex items-center gap-4 mb-2">
                <label htmlFor="transactionType" className="min-w-32">Transaction Type</label>
                <input type="text" name="transactionType" id="transactionType" onChange={handleFormChange} className="border-2 border-black" value={formData.transactionType} />
            </div>
            <div className="flex items-center gap-4 mb-2">
                <label htmlFor="price" className="min-w-32">Price</label>
                <input type="number" name="price" id="price" value={formData.price} onChange={handleFormChange} className="border-2 border-black" />
            </div>
            <div>
                <label htmlFor="notes" className="min-w-32">Notes</label>
                <textarea name="notes" id="notes" value={formData.notes} onChange={handleFormChange} className="border-2 border-black"></textarea>
            </div>
            <button className="px-8 py-2 bg-slate-300">Add</button>
        </form>
    )

}