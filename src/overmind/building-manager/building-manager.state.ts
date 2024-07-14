import { Building } from '../../shared-types/rooms.ts';

export type BuildingManagerState = {
  buildingBeingEdited?: Building;
  openedBuildingId?: string;
  buildings: {
    [id: string]: Building;
  };
};

export const buildingManagerState: BuildingManagerState = {
  openedBuildingId: undefined,
  buildings: {},
  get buildingBeingEdited() {
    if (this.openedBuildingId === undefined || Object.keys(this.buildings).length === 0) {
      return;
    }

    return this.buildings[this.openedBuildingId];
  },
};
