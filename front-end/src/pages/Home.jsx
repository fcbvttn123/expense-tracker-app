import { useEffect, useState } from "react";
import { TransactionCard } from "../components/TransactionCard";
import { useExpensesContext } from "../hooks/useExpensesContext";
import { ACTIONS as expenseContextActions } from "../context/ExpenseContext";

export function Home() {
  const {expenses, dispatch} = useExpensesContext();

  // Fetch all expenses
  useEffect(() => {
    async function fetchData() {
      try {
        let res = await fetch("/api/expenses");
        let data = await res.json();
        dispatch({type: expenseContextActions.GET_EXPENSES, payload: data});
      } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="pt-20 pl-5">
      {expenses &&
        expenses.map((e) => (
          <TransactionCard
            key={e._id}
            id={e._id}
            transactionType={e.transactionType}
            price={e.price}
            notes={e.notes}
          />
        ))}
    </div>
  );
}
