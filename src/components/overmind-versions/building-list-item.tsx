import { useOvermindActions } from '../../overmind/overmind-config.ts';
import { Building } from '../../shared-types/rooms.ts';

interface BuildingProps {
  building: Building;
}

export function BuildingListItem({ building }: BuildingProps) {
  const { roomManager: { openBuilding }} = useOvermindActions();

  return <div className="building-manager-building-list-item" onClick={() => openBuilding(building.id)}>
    Building ID: {building.id}<br/>
    No. of rooms: {building.rooms.length}
  </div>
}
