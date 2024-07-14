import { useOvermindState } from '../../overmind/overmind-config.ts';

import './building-manager.scss';
import { BuildingListItem } from './building-list-item.tsx';
import { BuildingEditor } from './building-editor.tsx';
import { RoomManager } from './room-manager.tsx';
import { RoomEditor } from './room-editor.tsx';

export function BuildingManagerOvermind() {
  const {
    buildingManager: { buildings, openedBuildingId, buildingBeingEdited },
    roomManager: { roomBeingEdited },
  } = useOvermindState();

  console.log(openedBuildingId, buildingBeingEdited);

  return (
    <div>
      <h2>Building management OVERMIND</h2>

      <div className="building-manager">
        <div className="building-manager-item-selection-area">
          <div className="building-manager-list-of-buildings">
            <h3>Buildings</h3>
            {Object.values(buildings).map((building) => (
              <BuildingListItem key={building.id} building={building} />
            ))}
          </div>
          {!!buildingBeingEdited && Object.keys(buildings).length > 0 && <RoomManager />}
        </div>
        {!roomBeingEdited && <BuildingEditor />}
        {roomBeingEdited && <RoomEditor />}
      </div>
    </div>
  );
}
