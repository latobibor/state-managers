import { Divider, List } from '@mui/material';
import { RoomListItem } from './room-list-item.tsx';
import { useOvermindActions, useOvermindState } from '../../overmind/overmind-config.ts';
import { BigPlusButton } from '../store-less/big-plus-button.tsx';

export function RoomManager() {
  const { roomManager: { createSkeletonRoom } } = useOvermindActions();
  const { roomManager: { buildingBeingEdited } } = useOvermindState();

  return <div className="building-manager-room-list">
    <h3>Rooms</h3>
    {buildingBeingEdited && <div>
      <List>
        {Object.values(buildingBeingEdited.rooms).map(room => (<>
          <RoomListItem key={room.id} room={room}/>
          <Divider variant="inset" component="li"/>
        </>))}
      </List>
      <BigPlusButton onClick={createSkeletonRoom}/>
    </div>
    }
  </div>;
}