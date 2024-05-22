import './building-manager.scss';
import { BuildingListItem } from './building-list-item.tsx';
import { RoomListItem } from './room-list-item.tsx';
import { Divider, List } from '@mui/material';
import { useReduxSelector } from '../../redux/redux-hooks.ts';
import { addBuilding, addRoom } from '../../redux/room-manager/room-manager-slice.ts';

export function BuildingManagerRedux() {
  const buildings = useReduxSelector((state) => state.roomManager.buildings)
  const currentBuilding = useReduxSelector((state) => state.roomManager.currentBuilding)

  return <div>
    <h1>Building management REDUX</h1>
    <div className="building-manager-item-selection-area">
      <div className="building-manager-list-of-buildings">
        {Object.values(buildings).map((building) => (<BuildingListItem key={building.id} building={building}/>))}
        <button onClick={() => addBuilding()}>Add building</button>
      </div>
      <div className="building-manager-room-list">
        {currentBuilding && <div>
          <div>ID: {currentBuilding.id}</div>
          <List>
            {Object.values(currentBuilding.rooms).map(room => (<>
              <RoomListItem key={room.id} room={room}/>
              <Divider variant="inset" component="li" />
            </>))}
          </List>
        </div>
        }
        {currentBuilding && <button onClick={() => addRoom}>Add room</button>}
      </div>
    </div>
  </div>;
}
