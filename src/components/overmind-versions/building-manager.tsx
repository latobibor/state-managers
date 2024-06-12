import { useOvermindActions, useOvermindState } from '../../overmind/overmind-config.ts';

import './building-manager.scss';
import { BuildingListItem } from './building-list-item.tsx';
import { RoomListItem } from './room-list-item.tsx';
import { Divider, List } from '@mui/material';
import { BuildingEditor } from './building-editor.tsx';

export function BuildingManagerOvermind() {
  const { roomManager: { buildings, currentBuilding } } = useOvermindState();
  const { roomManager: { addRoom } } = useOvermindActions();

  return <div>
    <h2>Building management OVERMIND</h2>
    <div className="building-manager">
      <div className="building-manager-item-selection-area">
        <div className="building-manager-list-of-buildings">
          {Object.values(buildings).map((building) => (<BuildingListItem key={building.id} building={building}/>))}
        </div>
        <div className="building-manager-room-list">
          {currentBuilding && <div>
            <div>ID: {currentBuilding.id}</div>
            <List>
              {Object.values(currentBuilding.rooms).map(room => (<>
                <RoomListItem key={room.id} room={room}/>
                <Divider variant="inset" component="li"/>
              </>))}
            </List>
          </div>
          }
          {currentBuilding && <button onClick={addRoom}>Add room</button>}
        </div>
      </div>
      <BuildingEditor/>
    </div>
  </div>;
}
