import { Friend } from "./Friend";

export function FriendsList({ friends, select, onSelectFriends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelectFriends={onSelectFriends}
          select={select}
        />
      ))}
    </ul>
  );
}
