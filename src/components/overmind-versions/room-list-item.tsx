import { Room } from '../../shared-types/rooms.ts';

interface RoomListItemProps {
  room: Room;
}

export function RoomListItem({ room }: RoomListItemProps) {
  return <div>
    Room ID: {room.id}<br/>
    Checklists: <pre>{JSON.stringify(room.checklists, null, 2)}</pre>
  </div>;
}
