import { Building } from '../../shared-types/rooms.ts';

export type BuildingManagerState = {
  buildingBeingEdited?: Building;
  buildings: {
    [id: string]: Building
  };
}

export const buildingManagerState: BuildingManagerState = {
  buildingBeingEdited: undefined,
  buildings: {},
};
