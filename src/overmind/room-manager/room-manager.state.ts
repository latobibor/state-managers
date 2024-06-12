import { Building } from '../../shared-types/rooms.ts';

export type RoomManagerState = {
  buildingBeingEdited?: Building;
  buildings: {
    [id: string]: Building
  };
  currentRoomId: string | null;
}

export const roomManagerState: RoomManagerState = {
  buildingBeingEdited: undefined,
  buildings: {},
  currentRoomId: null,
};
