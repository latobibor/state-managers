import { useOvermindActions, useOvermindState } from '../../overmind/overmind-config.ts';

import './building.scss';

export function BuildingManagerOvermind() {
  const { roomManager: { buildings, currentBuilding } } = useOvermindState();
  const { roomManager: { addBuilding, openBuilding, addRoom } } = useOvermindActions();

  return <div>
    <h1>Building management</h1>
    <div>
      {Object.values(buildings).map((building) => (
        <div className="building" key={building.id} onClick={() => openBuilding(building.id)}>
          Building ID: {building.id}<br/>
        </div>))}
    </div>
    <div>
      {currentBuilding && <div>
        <div>ID: {currentBuilding.id}</div>
        <div>
          {currentBuilding.rooms.map(room => (
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
      {currentBuilding && <button onClick={addRoom}>Add room</button>}
    </div>
  </div>;
}
