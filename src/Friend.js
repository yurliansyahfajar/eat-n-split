import { Button } from "./Button";

export function Friend({ friend, select, onSelectFriends }) {
  const isSelected = select?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      {friend.name}

      {friend.balance === 0 ? (
        <p>You and {friend.name} are even</p>
      ) : friend.balance < 0 ? (
        <p className="red">
          You Owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      ) : (
        <p className="green">
          {friend.name} Owes you {Math.abs(friend.balance)}€
        </p>
      )}

      <Button onClick={() => onSelectFriends(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
