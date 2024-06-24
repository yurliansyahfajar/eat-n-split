import { FormAddFriend } from "./FormAddFriend";
import { FriendsList } from "./FriendsList";
import { Button } from "./Button";
import { useState } from "react";
import { FormSplitBill } from "./FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [isShowAddFriendForm, setIsShowAddFriendForm] = useState(false);
  const [friends, setFriends] = useState(initialFriends);

  const handleSetFriends = (newPerson) => {
    setFriends((friends) => [...friends, newPerson]);
    setIsShowAddFriendForm(false);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        {isShowAddFriendForm && (
          <FormAddFriend onHandleFriends={handleSetFriends} />
        )}
        <Button onClick={() => setIsShowAddFriendForm(!isShowAddFriendForm)}>
          {!isShowAddFriendForm ? "Add Friend" : "Close"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}
