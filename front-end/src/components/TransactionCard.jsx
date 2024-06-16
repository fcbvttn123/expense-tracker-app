import { removeFromDb } from "../hooks/deleteFromMongoDb";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import DeleteIcon from "@material-ui/icons/Delete";
import { useExpensesContext } from "../hooks/useExpensesContext";
import { ACTIONS as expenseContextActions } from "../context/ExpenseContext";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: 20,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export function TransactionCard({ id, transactionType, price, notes }) {
  const classes = useStyles();
  const { expenses, dispatch } = useExpensesContext();
  async function deleteTransaction(e, transactionId, path) {
    try {
      let response = await removeFromDb(transactionId, path);
      dispatch({
        type: expenseContextActions.DELETE_EXPENSE,
        payload: { _id: transactionId },
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton
            aria-label="settings"
            onClick={(e) => deleteTransaction(e, id, "/api/expenses/")}
          >
            <DeleteIcon />
          </IconButton>
        }
        title={transactionType}
        subheader={`$${price}`}
      />
    </Card>
  );
}
