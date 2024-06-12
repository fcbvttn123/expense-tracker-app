import { useState } from "react"
import { handleFormChange } from "../hooks/handleFormChange"
import { addToMongoDb } from "../hooks/addToMongoDb"

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    form: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      paddingTop: 80,
      paddingLeft: 10,
      display: "flex",
      flexDirection: "column"
    },
    btn: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
  }))

export function CreateTransaction() {

    const classes = useStyles()

    const [formData, setFormData] = useState({
        transactionType: "",
        price: 0, 
        notes: ""
    })

    return (
        <form 
            onSubmit={(e) => {
                e.preventDefault()
                addToMongoDb(formData, "/api/expenses")
            }}
            className={classes.form} 
            noValidate 
            autoComplete="off"
        >
            <TextField id="filled-basic" label="Transaction Type" variant="filled" name="transactionType" value={formData.transactionType} onChange={(e) => handleFormChange(e, setFormData)} />
            <TextField id="filled-basic" label="Price" variant="filled" name="price" value={formData.price} type="number" onChange={(e) => handleFormChange(e, setFormData)} />
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
            <Button variant="contained" color="primary"> Add </Button>
        </form>
    )

}