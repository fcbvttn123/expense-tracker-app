import { Button, Typography } from "@material-ui/core"
import TextField from "@material-ui/core/TextField"
import { useState } from "react"
import { handleFormChange } from "../hooks/handleFormChange"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormControl from "@material-ui/core/FormControl"

export function CreateBudget() {
  // States
  const [categories, setCategories] = useState([])
  const [formData, setFormData] = useState({
    category: "",
    price: 0,
  })
  // Form Submission
  function handleFormSubmit(e) {
    e.preventDefault()
    setCategories((prev) => [...prev, formData])
  }
  // UI
  return (
    <div className="pt-20 px-8 w-full flex justify-between">
      {/* Budget */}
      <div>
        {/* Header */}
        <Typography variant="h4" color="primary" gutterBottom>
          Budget
        </Typography>
        {/* Categories */}
        <Typography variant="h6" color="primary">
          Categories
        </Typography>
        <div>
          {categories &&
            categories.map((e, i) => (
              <p key={i}>
                {e.category} - ${e.price}
              </p>
            ))}
        </div>
        {/* Period */}
        {/* <Typography variant="h6" color="primary">
          Periods
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="period"
            name="period"
            value={"week"}
            onChange={() => console.log("hi")}
          >
            <FormControlLabel
              value="week"
              control={<Radio color="primary" />}
              label="Week"
            />
            <FormControlLabel
              value="month"
              control={<Radio color="primary" />}
              label="Month"
            />
            <FormControlLabel
              value="year"
              control={<Radio color="primary" />}
              label="Year"
            />
          </RadioGroup>
        </FormControl> */}
      </div>
      {/* Category Form */}
      <form onSubmit={handleFormSubmit}>
        <Typography variant="h4" color="primary">
          Add Category
        </Typography>
        <TextField
          id="standard-basic"
          label="Category"
          name="category"
          value={formData.category}
          onChange={(e) => handleFormChange(e, setFormData)}
        />
        <br />
        <br />
        <TextField
          id="standard-basic"
          label="Price"
          type="number"
          name="price"
          value={formData.price}
          onChange={(e) => handleFormChange(e, setFormData)}
        />
        <br />
        <br />
        <Button variant="contained" color="primary" type="submit">
          Add
        </Button>
      </form>
    </div>
  )
}
