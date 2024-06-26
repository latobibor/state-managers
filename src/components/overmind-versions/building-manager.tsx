import { useOvermindActions, useOvermindState } from '../../overmind/overmind-config.ts';

import './building-manager.scss';
import { BuildingListItem } from './building-list-item.tsx';
import { BuildingEditor } from './building-editor.tsx';
import { RoomManager } from './room-manager.tsx';
import { BigPlusButton } from '../store-less/big-plus-button.tsx';
import { RoomEditor } from './room-editor.tsx';

export function BuildingManagerOvermind() {
  const { buildingManager: { createSkeletonBuilding } } = useOvermindActions();
  const {
    buildingManager: { buildings, buildingBeingEdited },
    roomManager: { roomBeingEdited }
  } = useOvermindState();

  return <div>
    <h2>Building management OVERMIND</h2>

    <div className="building-manager">
      <div className="building-manager-item-selection-area">
        <div className="building-manager-list-of-buildings">
          <h3>Buildings</h3>
          {Object.values(buildings).map((building) => (<BuildingListItem key={building.id} building={building}/>))}
          <BigPlusButton onClick={createSkeletonBuilding}/>
        </div>
        {!!buildingBeingEdited && Object.keys(buildings).length > 0 && <RoomManager/>}
      </div>
      {!!buildingBeingEdited && !roomBeingEdited && <BuildingEditor/>}
      {roomBeingEdited && <RoomEditor/>}
    </div>
  </div>;
}
