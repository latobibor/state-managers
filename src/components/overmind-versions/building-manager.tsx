import { useOvermindActions, useOvermindState } from '../../overmind/overmind-config.ts';

import './building.scss';

export function BuildingManagerOvermind() {
  const { roomManager: { buildings, openedBuildingId } } = useOvermindState();
  const { roomManager: { addBuilding, openBuilding } } = useOvermindActions();

  return <div>
    <h1>Building management</h1>
    <div>
      {Object.values(buildings).map((building) => (<div className="building" key={building.id} onClick={() => openBuilding(building.id)}>
        Building ID: {building.id}<br/>
      </div>))}
    </div>
    <div>
      {openedBuildingId && buildings[openedBuildingId] && <div>
        <div>ID: {buildings[openedBuildingId].id}</div>
        <div>
          {buildings[openedBuildingId].rooms.map(room => (
            <div key={room.id}>
              Room ID: {room.id}<br/>
              Checklists: <pre>{JSON.stringify(room.checklists, null, 2)}</pre>
            </div>
          ))}
        </div>
      </div>
      }
    </div>
    <div>
      <button onClick={addBuilding}>Add building</button>
      <button>Add room</button>
    </div>
  </div>;
}
