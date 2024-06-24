import { Button } from "./Button";
import { useState } from "react";

export function FormSplitBill({ select }) {
  const [bill, setBill] = useState(null);
  const [myExpense, setMyExpense] = useState(null);
  const [friendExpense, setFriendExpense] = useState(null);
  const [paidBy, setPaidBy] = useState("user");

  return (
    <form className="form-split-bill">
      <h2>Split Bill with {select.name}</h2>
      <label>Bill value</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />

      <label>Your expense</label>
      <input
        type="number"
        value={myExpense}
        onChange={(e) => setMyExpense(e.target.value)}
      />

      <label>{select.name}'s expense</label>
      <input
        type="number"
        disabled
        value={friendExpense}
        onChange={(e) => setFriendExpense(e.target.value)}
      />

      <label>Who is paying the bill ?</label>
      <select value={paidBy} onChange={(e) => setPaidBy(e.target.value)}>
        <option value="user">Me</option>
        <option value="friend">{select.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
