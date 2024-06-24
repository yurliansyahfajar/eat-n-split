import { Button } from "./Button";

export function Friend({ friend }) {
  return (
    <li>
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
      <Button>Select</Button>
    </li>
  );
}
