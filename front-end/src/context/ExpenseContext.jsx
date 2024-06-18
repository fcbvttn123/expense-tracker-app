import { createContext, useReducer } from "react"

export const ACTIONS = {
  GET_EXPENSES: "getAll",
  DELETE_EXPENSE: "delete",
}

export const ExpensesContext = createContext()

export function expensesReducer(state, action) {
  switch (action.type) {
    case ACTIONS.GET_EXPENSES:
      return {
        expenses: action.payload,
      }
    case ACTIONS.DELETE_EXPENSE:
      return {
        expenses: state.expenses.filter((e) => e._id !== action.payload._id),
      }
    default:
      break
  }
}

export function ExpensesContextProvider({ children }) {
  const [state, dispatch] = useReducer(expensesReducer, {
    expenses: null,
  })
  return (
    <ExpensesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ExpensesContext.Provider>
  )
}
