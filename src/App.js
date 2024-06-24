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
    balance: -7
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0
  }
];

export default function App() {
  const [isShowAddFriendForm, setIsShowAddFriendForm] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [select, setSelect] = useState(null);

  const handleSetFriends = (newPerson) => {
    setFriends((friends) => [...friends, newPerson]);
    setIsShowAddFriendForm(false);
  };

  const handleSelectFriends = (friendObj) => {
    setSelect((cur) => (cur?.id === friendObj.id ? null : friendObj));
    setIsShowAddFriendForm(false);
  };

  const handleUpdateBalance = (value) => {
    setFriends((friends) =>
      friends.map((f) =>
        f.id === select.id ? { ...f, balance: f.balance + value } : f
      )
    );
    setSelect(null);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          select={select}
          onSelectFriends={handleSelectFriends}
        />
        {isShowAddFriendForm && (
          <FormAddFriend onHandleFriends={handleSetFriends} />
        )}
        <Button onClick={() => setIsShowAddFriendForm(!isShowAddFriendForm)}>
          {!isShowAddFriendForm ? "Add Friend" : "Close"}
        </Button>
      </div>
      {select && (
        <FormSplitBill
          select={select}
          onHandleUpdateBalance={handleUpdateBalance}
        />
      )}
    </div>
  );
}
