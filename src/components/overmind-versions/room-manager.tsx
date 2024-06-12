import { Divider, List } from '@mui/material';
import { RoomListItem } from './room-list-item.tsx';
import { useOvermindState } from '../../overmind/overmind-config.ts';

export function RoomManager() {
  const { roomManager: { buildingBeingEdited } } = useOvermindState();
  
  return <div className="building-manager-room-list">
    <h3>Rooms</h3>
    {buildingBeingEdited && <div>
      <div>ID: {buildingBeingEdited.id}</div>
      <List>
        {Object.values(buildingBeingEdited.rooms).map(room => (<>
          <RoomListItem key={room.id} room={room}/>
          <Divider variant="inset" component="li"/>
        </>))}
      </List>
    </div>
    }
  </div>;
}