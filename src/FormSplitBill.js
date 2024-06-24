import { Button } from "./Button";
import { useState } from "react";

export function FormSplitBill({ select, onHandleUpdateBalance }) {
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [paidBy, setPaidBy] = useState("user");
  const friendExpense = bill ? bill - myExpense : "";

  function onHandleSubmit(e) {
    e.preventDefault();
    if (!bill || !myExpense) return;

    onHandleUpdateBalance(paidBy === "user" ? friendExpense : -myExpense);
  }

  return (
    <form className="form-split-bill" onSubmit={onHandleSubmit}>
      <h2>Split Bill with {select.name}</h2>
      <label>Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>Your expense</label>
      <input
        type="text"
        value={myExpense}
        onChange={(e) =>
          setMyExpense(
            Number(e.target.value) > bill ? myExpense : Number(e.target.value)
          )
        }
      />

      <label>{select.name}'s expense</label>
      <input type="number" value={friendExpense} disabled />

      <label>Who is paying the bill ?</label>
      <select value={paidBy} onChange={(e) => setPaidBy(e.target.value)}>
        <option value="user">Me</option>
        <option value="friend">{select.name}</option>
      </select>

      <Button onClick={onHandleSubmit}>Split Bill</Button>
    </form>
  );
}
