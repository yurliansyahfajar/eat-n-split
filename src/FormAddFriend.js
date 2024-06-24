import { Button } from "./Button";
import { useState } from "react";

export function FormAddFriend({ onHandleFriends }) {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("https://i.pravatar.cc/48");
  const id = crypto.randomUUID();

  function handleAddFriend(e) {
    e.preventDefault();

    if (!name || !imgUrl) return;

    const newFriend = {
      id: id,
      name: name,
      image: `${imgUrl}?=${id}`,
      balance: 0,
    };
    onHandleFriends(newFriend);
    setName("");
    setImgUrl("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleAddFriend}>
      <label>Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Image URL</label>
      <input
        type="text"
        value={imgUrl}
        onChange={(e) => setImgUrl(e.target.value)}
      />

      <Button onClick={handleAddFriend}>Add</Button>
    </form>
  );
}
