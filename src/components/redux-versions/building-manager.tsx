import './building-manager.scss';
import { BuildingListItemRedux } from './building-list-item.tsx';
import { RoomListItemRedux } from './room-list-item.tsx';
import { Divider, List } from '@mui/material';
import { useReduxDispatch, useReduxSelector } from '../../redux/redux-hooks.ts';
import { addBuilding, addRoom } from '../../redux/room-manager/room-manager-slice.ts';

export function BuildingManagerRedux() {
  const buildings = useReduxSelector((state) => state.roomManager.buildings);
  const currentBuildingId = useReduxSelector((state) => state.roomManager.currentBuildingId);

  const dispatch = useReduxDispatch();

  const currentBuilding = currentBuildingId &&  buildings[currentBuildingId];

  return <div>
    <h1>Building management REDUX</h1>
    <div className="building-manager-item-selection-area">
      <div className="building-manager-list-of-buildings">
        {Object.values(buildings).map((building) => (<BuildingListItemRedux key={building.id} building={building}/>))}
        <button onClick={() => dispatch(addBuilding())}>Add building</button>
      </div>
      <div className="building-manager-room-list">
        {currentBuilding && <div>
          <div>ID: {currentBuilding.id}</div>
          <List>
            {Object.values(currentBuilding.rooms).map(room => (<>
              <RoomListItemRedux key={room.id} room={room}/>
              <Divider variant="inset" component="li"/>
            </>))}
          </List>
        </div>
        }
        {currentBuilding && <button onClick={() => dispatch(addRoom())}>Add room</button>}
      </div>
    </div>
  </div>;
}
