export function handleFormChange(e, setFormData) {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
        ...prev, 
        [name]: type === "checkbox" ? checked : value
    }))
}