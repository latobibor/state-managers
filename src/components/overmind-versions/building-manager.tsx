import { useOvermindState } from '../../overmind/overmind-config.ts';

import './building-manager.scss';
import { BuildingListItem } from './building-list-item.tsx';
import { BuildingEditor } from './building-editor.tsx';
import { RoomManager } from './room-manager.tsx';

export function BuildingManagerOvermind() {
  const { roomManager: { buildings } } = useOvermindState();

  return <div>
    <h2>Building management OVERMIND</h2>

    <div className="building-manager">
      <div className="building-manager-item-selection-area">
        <div className="building-manager-list-of-buildings">
          <h3>Buildings</h3>
          {Object.values(buildings).map((building) => (<BuildingListItem key={building.id} building={building}/>))}
        </div>
        <RoomManager/>
      </div>
      <BuildingEditor/>
    </div>
  </div>;
}
