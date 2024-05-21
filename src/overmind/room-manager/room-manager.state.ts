import { Building } from '../../shared-types/rooms.ts';

export type RoomManagerState = {
  currentBuildingId: string | null;
  currentBuilding?: Building;
  buildings: {
    [id: string]: Building
  }
}

export const roomManagerState: RoomManagerState = {
  currentBuildingId: null,
  get currentBuilding() {
    if (!this.currentBuildingId) { return; }

    return this.buildings[this.currentBuildingId];
  },
  buildings: {}
}
