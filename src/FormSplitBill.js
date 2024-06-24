import { Button } from "./Button";

export function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split Bill with X</h2>
      <label>Bill value</label>
      <input type="number" />

      <label>Your expense</label>
      <input type="number" />

      <label>X's expense</label>
      <input type="number" disabled />

      <label>Who is paying the bill ?</label>
      <select>
        <option value="user">Me</option>
        <option value="friend">X</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
