import { useOvermindActions, useOvermindState } from '../../overmind/overmind-config.ts';

import './building-list-item.scss';
import { BuildingListItem } from './building-list-item.tsx';
import { RoomListItem } from './room-list-item.tsx';

export function BuildingManagerOvermind() {
  const { roomManager: { buildings, currentBuilding } } = useOvermindState();
  const { roomManager: { addBuilding, addRoom } } = useOvermindActions();

  return <div>
    <h1>Building management</h1>
    <div className="building-manager-item-selection-area">
      <div className="building-manager-list-of-buildings">
        {Object.values(buildings).map((building) => (<BuildingListItem key={building.id} building={building}/>))}
        <button onClick={addBuilding}>Add building</button>
      </div>
      <div className="building-manager-room-list">
        {currentBuilding && <div>
          <div>ID: {currentBuilding.id}</div>
          {currentBuilding.rooms.map(room => (<RoomListItem key={room.id} room={room}/>))}
        </div>
        }
        {currentBuilding && <button onClick={addRoom}>Add room</button>}
      </div>
    </div>
  </div>;
}
