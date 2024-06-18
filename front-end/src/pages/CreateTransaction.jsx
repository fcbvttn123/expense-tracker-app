import { useState } from "react";
import { handleFormChange } from "../hooks/handleFormChange";
import { addToMongoDb } from "../hooks/addToMongoDb";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Snackbar } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  form: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    paddingTop: 80,
    paddingLeft: 10,
    display: "flex",
    flexDirection: "column",
  },
  btn: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}))

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function CreateTransaction() {
  const classes = useStyles()
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [snackbarData, setSnackbarData] = useState({
    message: "", 
    severity: ""
  }) 
  const [formData, setFormData] = useState({
    transactionType: "",
    price: 0,
    notes: "",
  })

  function handleCloseSnackBar(event, reason)  {
    if (reason === 'clickaway') {
      return
    }
    setOpenSnackbar(false)
  }

  async function handleFormSubmit(e) {
    e.preventDefault()    
    let jsonData = await addToMongoDb(formData, "/api/expenses")
    if(!jsonData.error) {
      setFormData({
        transactionType: "",
        price: 0,
        notes: "",
      })
      setSnackbarData({
        message: "Transaction Added!", 
        severity: "success"
      })
    } else {
      setSnackbarData({
        message: jsonData.error, 
        severity: "error"
      })
    }
    setOpenSnackbar(true)
  }

  return (

    <>

      {/* Form */}
      <form
        onSubmit={handleFormSubmit}
        className={classes.form}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="filled-basic"
          label="Transaction Type"
          variant="filled"
          name="transactionType"
          value={formData.transactionType}
          onChange={(e) => handleFormChange(e, setFormData)}
        />
        <TextField
          id="filled-basic"
          label="Price"
          variant="filled"
          name="price"
          value={formData.price}
          type="number"
          onChange={(e) => handleFormChange(e, setFormData)}
        />
        <TextField
          id="filled-multiline-static"
          label="Multiline"
          multiline
          minRows={4}
          defaultValue="Default Value"
          variant="filled"
          name="notes"
          value={formData.notes}
          onChange={(e) => handleFormChange(e, setFormData)}
        />
        <Button variant="contained" color="primary" type="submit">
          Add
        </Button>
      </form>

      {/* Snackbar */}
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackBar}>
        <Alert onClose={handleCloseSnackBar} severity={snackbarData.severity}>
          {snackbarData.message}
        </Alert>
      </Snackbar>

    </>

  )
}
