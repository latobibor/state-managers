import { useOvermindActions, useOvermindState } from '../../overmind/overmind-config.ts';

export function BuildingManagerOvermind() {
  const { roomManager: { buildings, openedBuilding } } = useOvermindState();
  const { roomManager: { addBuilding, openBuilding } } = useOvermindActions();

  return <div>
    <h1>Building management</h1>
    <div>
      {Object.values(buildings).map((building) => (<div key={building.id} onClick={() => openBuilding(building.id)}>
        Building ID: {building.id}<br/>
      </div>))}
    </div>
    <div>
      {openedBuilding && <div>
        <div>ID: {openedBuilding.id}</div>
        <div>
          {openedBuilding.rooms.map(room => (
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
