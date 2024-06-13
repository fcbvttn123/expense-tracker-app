import { removeFromDb } from "../hooks/deleteFromMongoDb"

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: 20
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}))

export function TransactionCard({ id, transactionType, price, notes }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton
            aria-label="settings"
            onClick={() => removeFromDb(id, "/api/expenses/")}
          >
            <DeleteIcon />
          </IconButton>
        }
        title={transactionType}
        subheader={`$${price}`}
      />
    </Card>
  )
}